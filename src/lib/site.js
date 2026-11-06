// Danh sách guide được lấy tự động từ các file trong src/guides/*.jsx.
// Mỗi file export `meta` (thông tin) và `default` (nội dung trang).
const modules = import.meta.glob('../guides/*.jsx', { eager: true });

export const CATEGORIES = [
  { key: 'class', label: 'Build theo Class', desc: 'Chỉ số, Fantomon, companion và build skill cho từng class.' },
  { key: 'guide', label: 'Hướng dẫn', desc: 'Hệ thống, sự kiện và cách dùng tài nguyên hiệu quả.' },
  { key: 'tool', label: 'Bảng tra cứu', desc: 'Bảng số liệu để tra nhanh khi chơi.' },
];

const catIndex = (g) => {
  const i = CATEGORIES.findIndex((c) => c.key === g.category);
  return i < 0 ? CATEGORIES.length : i;
};

export const GUIDES = Object.entries(modules)
  .map(([path, m]) => ({ slug: path.split('/').pop().replace(/\.jsx$/, ''), ...m.meta, Page: m.default }))
  .filter((g) => !(import.meta.env.PROD && g.draft))
  .sort((a, b) => catIndex(a) - catIndex(b) || (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title, 'vi'));

export const getGuide = (slug) => GUIDES.find((g) => g.slug === slug);
export const guidesIn = (category) => GUIDES.filter((g) => g.category === category);
export const categoryOf = (g) => CATEGORIES.find((c) => c.key === g.category) || { key: g.category, label: 'Khác' };

export const DB_KINDS = [
  { key: 'skills', label: 'Kỹ năng', icon: 'skills/skill_10541.png' },
  { key: 'fantomons', label: 'Fantomon', icon: 'pets/aegiswing.png' },
  { key: 'companions', label: 'Đồng hành', icon: 'companions/npc_icon_8402.png' },
  { key: 'items', label: 'Vật phẩm', icon: 'tooltips/Money_2.png' },
  { key: 'relics', label: 'Di vật', icon: 'guides/relic-source.webp' },
];
