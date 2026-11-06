// Danh sách guide được lấy tự động từ các file trong src/guides/*.jsx (bản tiếng Việt, là bản chính).
// Mỗi file export `meta` (thông tin) và `default` (nội dung trang).
// Bản dịch: src/guides/<lang>/<slug>.jsx (nội dung) + src/guides/<lang>/_meta.js (tiêu đề, mô tả).
// Bài chưa có bản dịch sẽ hiện bản tiếng Việt.
import { lazy, useMemo } from 'react';
import { useLang } from '../i18n/index.jsx';

const modules = import.meta.glob('../guides/*.jsx', { eager: true });
const translated = import.meta.glob('../guides/*/*.jsx');
const metas = import.meta.glob('../guides/*/_meta.js', { eager: true, import: 'default' });

export const CATEGORIES = [{ key: 'class' }, { key: 'guide' }, { key: 'tool' }];

const catIndex = (g) => {
  const i = CATEGORIES.findIndex((c) => c.key === g.category);
  return i < 0 ? CATEGORIES.length : i;
};

const BASE = Object.entries(modules)
  .map(([path, m]) => ({ slug: path.split('/').pop().replace(/\.jsx$/, ''), ...m.meta, Page: m.default }))
  .filter((g) => !(import.meta.env.PROD && g.draft))
  .sort((a, b) => catIndex(a) - catIndex(b) || (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title, 'vi'));

const lazyPages = {};
/** Component nội dung bài theo ngôn ngữ. translated = false khi chưa có bản dịch (dùng bản tiếng Việt). */
function pageOf(g, lang) {
  if (lang === 'vi') return { Page: g.Page, translated: true };
  const load = translated['../guides/' + lang + '/' + g.slug + '.jsx'];
  if (!load) return { Page: g.Page, translated: false };
  const k = lang + '/' + g.slug;
  return { Page: (lazyPages[k] ||= lazy(load)), translated: true };
}

const byLang = {};
export function guidesFor(lang) {
  if (byLang[lang]) return byLang[lang];
  const tm = lang === 'vi' ? {} : metas['../guides/' + lang + '/_meta.js'] || {};
  return (byLang[lang] = BASE.map((g) => ({ ...g, ...(tm[g.slug] || {}), ...pageOf(g, lang) })));
}

/** Danh sách guide (đã dịch tiêu đề/mô tả) theo ngôn ngữ hiện tại. */
export function useGuides() {
  const { lang } = useLang();
  return useMemo(() => {
    const list = guidesFor(lang);
    return {
      GUIDES: list,
      getGuide: (slug) => list.find((g) => g.slug === slug),
      guidesIn: (category) => list.filter((g) => g.category === category),
    };
  }, [lang]);
}

export const DB_KINDS = [
  { key: 'skills', icon: 'skills/skill_10541.png' },
  { key: 'fantomons', icon: 'pets/aegiswing.png' },
  { key: 'companions', icon: 'companions/npc_icon_8402.png' },
  { key: 'items', icon: 'tooltips/Money_2.png' },
  { key: 'relics', icon: 'guides/relic-source.webp' },
];
