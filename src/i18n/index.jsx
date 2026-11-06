// Đa ngôn ngữ: vi (mặc định), en, th, id.
// - Ngôn ngữ được nhớ trong trình duyệt. Link chia sẻ có thể ép ngôn ngữ bằng ?lang=en (vd. https://horizonsxs.io.vn/?lang=th).
// - Lần đầu vào web: trình duyệt tiếng Thái/Indonesia tự chọn ngôn ngữ đó, còn lại là tiếng Việt.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { UI } from './ui.js';

export const LANGS = [
  { code: 'vi', label: 'Tiếng Việt', short: 'VI' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'th', label: 'ไทย', short: 'TH' },
  { code: 'id', label: 'Bahasa Indonesia', short: 'ID' },
];
const CODES = LANGS.map((l) => l.code);
const KEY = 'sxs-lang';

function detect() {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (CODES.includes(q)) { localStorage.setItem(KEY, q); return q; }
  } catch {}
  try {
    const saved = localStorage.getItem(KEY);
    if (CODES.includes(saved)) return saved;
  } catch {}
  const nav = typeof navigator === 'undefined' ? [] : navigator.languages || [navigator.language];
  for (const l of nav) {
    const c = String(l || '').slice(0, 2).toLowerCase();
    if (c === 'vi') return 'vi';
    if (c === 'th' || c === 'id' || c === 'ms') return c === 'ms' ? 'id' : c;
  }
  return 'vi';
}

export function translate(lang, key, vars) {
  let s = UI[lang]?.[key] ?? UI.vi[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.split('{' + k + '}').join(v);
  return s;
}

const Ctx = createContext({ lang: 'vi', setLang: () => {}, t: (k, v) => translate('vi', k, v) });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detect);
  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch {}
    // bỏ ?lang= khỏi địa chỉ để lựa chọn mới không bị ghi đè khi tải lại
    try {
      const u = new URL(location.href);
      if (u.searchParams.has('lang')) { u.searchParams.delete('lang'); history.replaceState(history.state, '', u); }
    } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t: (k, v) => translate(lang, k, v) }), [lang, setLang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
export const useT = () => useContext(Ctx).t;

/** Nút chọn ngôn ngữ. */
export function LangSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <label className='lang-pick' title={t('lang.label')}>
      <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden='true'><circle cx='12' cy='12' r='9' /><path d='M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z' /></svg>
      <span className='lang-short' aria-hidden='true'>{LANGS.find((l) => l.code === lang)?.short}</span>
      <select value={lang} onChange={(e) => setLang(e.target.value)} aria-label={t('lang.label')}>
        {LANGS.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
      </select>
    </label>
  );
}
