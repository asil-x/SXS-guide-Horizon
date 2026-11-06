const BG = {
  'sword-x-staff-how-to-play-duelist': 'skills/classes/duelist.png',
  'sword-x-staff-how-to-play-knight': 'skills/classes/knight.png',
  'sword-x-staff-how-to-play-sage': 'skills/classes/arcanist.png',
  'sword-x-staff-how-to-play-sorcerer': 'skills/classes/sorcerer.png',
  'sword-x-staff-codes': 'guides/codes.webp',
  'sword-x-staff-daily-dungeon': 'guides/dungeon-guide.webp',
  'sword-x-staff-fantomon-guide': 'guides/fantomon-guide.webp',
  'sword-x-staff-food-guide': 'guides/food-guide.webp',
  'sword-x-staff-grand-treasure-hunt': 'guides/grand-treasure-guide.webp',
  'sword-x-staff-where-to-use-stamina': 'guides/stamina-usage.webp',
  'sword-x-staff-where-to-spend-dawnium': 'guides/where-to-spend-dawnium.webp',
  'sword-x-staff-destiny-fruits': 'guides/destiny-exploration.webp',
  'sword-x-staff-wheel-of-destiny-priority': 'guides/destiny-event-saving.webp',
  'sword-x-staff-gear-enhancement-table': 'guides/gear-enhancement.webp',
  'sword-x-staff-style-level-bonuses': 'guides/style-level.webp',
  'sword-x-staff-substat-table': 'skills/monsterskill_14006.png',
  'sword-x-staff-destiny-fruit-drop-rates': 'tooltips/Npc_8416.png',
};

export const bgPath = (slug) => BG[slug] || 'sword-x-staff-cover.webp';
export const bgUrl = (slug) => 'url(' + new URL('./img/' + bgPath(slug), document.baseURI).href + ')';
export const isIcon = (slug) => bgPath(slug).endsWith('.png');
