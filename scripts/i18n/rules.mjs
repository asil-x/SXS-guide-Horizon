// Pattern-based translations for templated strings.
export const RULES_VI = [
  [/^A gift to acquaint yourself with (?:the )?(.+)\. Gift it after acquaintance to increase Affinity\.$/, 'Quà làm quen với $1. Sau khi đã quen, tặng tiếp để tăng Affinity.'],
  [/^A material dropped by (.+?) from (.+)\.$/, 'Nguyên liệu rơi từ $1 ở $2.'],
  [/^A material dropped by (.+)\.$/, 'Nguyên liệu rơi từ $1.'],
  [/^A recipe for (.+)\. Use it to unlock the dish in (?:the )?Alchemy Pot\.$/, 'Công thức món $1. Dùng để mở khoá món này trong Alchemy Pot.'],
  [/^Use these badges to level up your (.+) class\.$/, 'Dùng huy hiệu này để nâng cấp class $1.'],
  [/^Exclusive Chroma for Technique: (.+)\. Equip via Skill screen or Chroma tab to change its visual effect\.$/, 'Chroma riêng cho Technique: $1. Trang bị ở màn hình Skill hoặc tab Chroma để đổi hiệu ứng hình ảnh.'],
  [/^Collect it to unlock the Collab Companion: (.+)\.$/, 'Thu thập để mở khoá Companion collab: $1.'],
  [/^Collect it to unlock the special Companion: (.+)\.$/, 'Thu thập để mở khoá Companion đặc biệt: $1.'],
  [/^Collect it to unlock the Companion: (.+)\.$/, 'Thu thập để mở khoá Companion: $1.'],
  [/^Feed it to Fantomons for ([\d,]+) EXP\.$/, 'Cho Fantomon ăn để nhận $1 EXP.'],
  [/^Every time you spend Chrono Sand ×([\d,]+), (\+[\d,.%]+)\.?$/, 'Mỗi lần tiêu ×$1 Chrono Sand, $2'],
  [/^For every (\d+) Raw Ore mining\(s\), (\+[\d,.%]+)$/, 'Mỗi $1 lần đào Raw Ore, $2'],
  [/^For every Block ×(\d+) triggered in battle, (\+[\d,.%]+)$/, 'Mỗi $1 lần đỡ đòn trong trận, $2'],
  [/^For every Critical Hit ×(\d+) triggered in battle, (\+[\d,.%]+)$/, 'Mỗi $1 đòn chí mạng gây ra trong trận, $2'],
  [/^For every Critical Hit ×(\d+) received in battle, (\+[\d,.%]+)$/, 'Mỗi $1 đòn chí mạng phải nhận trong trận, $2'],
  [/^For every Attack ×(\d+) blocked by enemies in battle, (\+[\d,.%]+)$/, 'Mỗi $1 đòn bị kẻ địch đỡ trong trận, $2'],
  [/^For every Minion ×(\d+) defeated, (\+[\d,.%]+)$/, 'Mỗi $1 Minion bị hạ, $2'],
  [/^For every (Weapon|Boots|Armor|Helmet|Gloves|Ring|Necklace|Accessory) ×(\d+) dismantled, (\+[\d,.%]+)$/, 'Mỗi $2 $1 phân rã, $3'],
  [/^For every \+(\d+) of (weapon|armor|helmet|gear|boots|gloves|accessory) enhancement, (\+[\d,.%]+)$/, (m, n, g, v) => 'Mỗi +' + n + ' cường hoá ' + ({ weapon: 'vũ khí', armor: 'giáp', helmet: 'mũ', gear: 'trang bị', boots: 'giày', gloves: 'găng', accessory: 'phụ kiện' })[g] + ', ' + v],
  [/^For every (\d+) Dawnium picked up, (\+[\d,.%]+)$/, 'Mỗi $1 Dawnium nhặt được, $2'],
  [/^For every (\d+) day\(s\) of joining the Crucible of Hieromon, (\+[\d,.%]+)$/, 'Mỗi $1 ngày tham gia Crucible of Hieromon, $2'],
  [/^For every (\d+) level\(s\) up for the highest skill quality, (\+[\d,.%]+)$/, 'Mỗi $1 cấp tăng của chất lượng skill cao nhất, $2'],
  [/^For every (\d+) exploration\(s\) completed, (\+[\d,.%]+)$/, 'Mỗi $1 lần khám phá hoàn thành, $2'],
  [/^For every (\d+) skill ascension \(s\) completed, (\+[\d,.%]+)$/, 'Mỗi $1 lần thăng cấp skill hoàn thành, $2'],
  [/^Obtain (.+)'s Journal \((\d+) Journals? required\)\.$/, 'Nhận Journal của $1 (cần $2 Journal).'],
  [/^Reach player level (\d+)\.$/, 'Đạt cấp người chơi $1.'],
  [/^Obtain from (?:the )?(.+?)( collaboration)? event wheel(?: \((.+)\))?\.$/, (m, ev, collab, note) => 'Nhận từ vòng quay sự kiện ' + (collab ? 'collab ' : '') + ev + (note ? ' (' + note + ')' : '') + '.'],
  [/^Receive for free during (?:the )?(.+?) collaboration event\.$/, 'Nhận miễn phí trong sự kiện collab $1.'],
  [/^The 8th job of the (.+) line, arriving with Season (\d+)\. Its in-game name is not out yet, so it is shown as (.+) for now\.$/, 'Nghề thứ 8 của nhánh $1, ra mắt cùng Season $2. Tên trong game chưa được công bố nên tạm gọi là $3.'],
];

export const RULES = { vi: RULES_VI, en: [], th: [], id: [] };

export function applyRules(s, lang = "vi") {
  for (const [re, rep] of RULES[lang] || []) if (re.test(s)) return s.replace(re, rep);
  return null;
}
