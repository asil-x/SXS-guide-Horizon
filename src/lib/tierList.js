// Tier list class theo từng tier / kingdom, lấy từ Class Tier List của Sword x Staff Compass
// (swordxstaff-compass.com/class-tier-list). id = id class trong src/data/<lang>/classes.json.
// ranked = false: Compass không xếp hạng tier này (mọi class ngang nhau). upcoming: chưa ra mắt.
// avoid: Compass khuyên nên lên nhanh qua class này.
export const TIER_LIST_UPDATED = '2026-11-07';

export const LINES = {
  duelist: { color: '#f0635a', slug: 'sword-x-staff-how-to-play-duelist' },
  knight: { color: '#f2b33d', slug: 'sword-x-staff-how-to-play-knight' },
  sorcerer: { color: '#6f9bff', slug: 'sword-x-staff-how-to-play-sorcerer' },
  sage: { color: '#4fd1a5', slug: 'sword-x-staff-how-to-play-sage' },
};

export const GRADES = ['SSS', 'SS', 'S', 'A', 'B', 'C', 'D'];

export const TIERS = [
  { tier: 1, kingdom: 'Verdantglade', ranked: false, classes: [{ id: 1, line: 'duelist', grade: 'A' }, { id: 2, line: 'sorcerer', grade: 'A' }] },
  { tier: 2, kingdom: 'Cinder Ridge', ranked: false, classes: [{ id: 3, line: 'knight', grade: 'A' }, { id: 4, line: 'duelist', grade: 'A' }, { id: 5, line: 'sorcerer', grade: 'A' }, { id: 6, line: 'sage', grade: 'A' }] },
  { tier: 3, kingdom: 'Aqualis', ranked: true, classes: [{ id: 9, line: 'sorcerer', grade: 'A' }, { id: 8, line: 'duelist', grade: 'A' }, { id: 7, line: 'knight', grade: 'B' }, { id: 10, line: 'sage', grade: 'B' }] },
  { tier: 4, kingdom: 'Loong Haven', ranked: true, classes: [{ id: 12, line: 'duelist', grade: 'S' }, { id: 13, line: 'sorcerer', grade: 'A' }, { id: 11, line: 'knight', grade: 'A' }, { id: 14, line: 'sage', grade: 'B' }] },
  { tier: 5, kingdom: 'Aethyris', ranked: true, classes: [{ id: 18, line: 'sage', grade: 'S' }, { id: 17, line: 'sorcerer', grade: 'A' }, { id: 15, line: 'knight', grade: 'A' }, { id: 16, line: 'duelist', grade: 'C', avoid: true }] },
  { tier: 6, kingdom: 'Harpadia', ranked: true, classes: [{ id: 20, line: 'duelist', grade: 'S' }, { id: 21, line: 'sorcerer', grade: 'A' }, { id: 19, line: 'knight', grade: 'B' }, { id: 22, line: 'sage', grade: 'C', avoid: true }] },
  { tier: 7, kingdom: 'Ignis', ranked: true, classes: [{ id: 25, line: 'sorcerer', grade: 'S' }, { id: 23, line: 'knight', grade: 'S' }, { id: 24, line: 'duelist', grade: 'B' }, { id: 26, line: 'sage', grade: 'B' }] },
  { tier: 8, kingdom: 'Aeperis', ranked: false, upcoming: true, classes: [{ id: 27, line: 'knight', grade: 'A' }, { id: 28, line: 'duelist', grade: 'A' }, { id: 29, line: 'sorcerer', grade: 'A' }, { id: 30, line: 'sage', grade: 'A' }] },
];
