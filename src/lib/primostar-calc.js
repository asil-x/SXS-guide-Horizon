// Phép tính Primostar và EXP (thuần, không phụ thuộc giao diện). D = module src/lib/primostar-data.js.
//
// Quy tắc của game:
// - Mỗi level vượt sàn mùa cho điểm theo hệ (SEASONS.w). Nhân vật còn được 1 điểm cho mỗi 1% thanh EXP (làm tròn xuống).
// - Primostar mùa này = floor(tổng điểm / rate) + base.
// - Chi phí nâng 1 level: từ sàn trở lên dùng bảng "vượt sàn" của mùa (TIERS), dưới sàn dùng bảng thường.

export const SYSTEMS = [
  { key: 'char', slots: 1, wi: 0 },
  { key: 'gear', slots: 5, wi: 1 },
  { key: 'skill', slots: 8, wi: 2 },
  { key: 'fant', slots: 4, wi: 3 },
  { key: 'relic', slots: 20, wi: 4 }, // 5 hệ cộng hưởng x 4 relic
];
export const sysOf = (key) => SYSTEMS.find((x) => x.key === key);
export const seasonOf = (D, s) => D.SEASONS.find((x) => x.s === s) || D.SEASONS[0];
export const floorOf = (S, key) => (key === 'relic' ? S.relicFloor : S.floor);
const blessTable = (D, S, key) => {
  const T = D.TIERS[S.tier];
  return { char: T.char, gear: T.gear, skill: T.skill, fant: T.pet, relic: T.relic }[key];
};

/** Điểm của một hệ khi mọi món ở cùng level `level`. xpPct chỉ dùng cho nhân vật. */
export function systemPoints(D, season, key, level, xpPct = 0) {
  const S = seasonOf(D, season);
  const sys = sysOf(key);
  const over = Math.max(0, level - floorOf(S, key));
  let pts = over * sys.slots * S.w[sys.wi];
  if (key === 'char' && level >= S.floor) pts += Math.floor(Math.min(100, Math.max(0, Number(xpPct) || 0)) + 1e-9);
  return pts;
}

/** Tổng điểm và Primostar. levels = { char, gear, skill, fant, relic }. */
export function seasonResult(D, season, levels, xpPct = 0, prev = 0) {
  const S = seasonOf(D, season);
  const by = Object.fromEntries(SYSTEMS.map((x) => [x.key, systemPoints(D, season, x.key, levels[x.key], x.key === 'char' ? xpPct : 0)]));
  const points = Object.values(by).reduce((a, b) => a + b, 0);
  const stars = Math.floor(points / S.rate) + S.base;
  return { by, points, stars, total: stars + (season > 1 ? prev : 0) };
}

/** Điểm còn thiếu để đạt tổng `goal` Primostar. */
export function pointsToGoal(D, season, points, goal, prev = 0) {
  const S = seasonOf(D, season);
  return Math.max(0, (goal - S.base - (season > 1 ? prev : 0)) * S.rate - points);
}

/** Chi phí cho MỘT món đi từ level L lên L+1. */
export function stepCost(D, season, key, L) {
  const S = seasonOf(D, season);
  const F = floorOf(S, key);
  if (L >= F) {
    const tbl = blessTable(D, S, key);
    const e = tbl[Math.min(L - F, tbl.length - 1)];
    if (e == null) return {};
    if (key === 'char' || key === 'fant') return { exp: e };
    if (key === 'gear') return { ore: e[0], fine: e[1], rolla: e[2] };
    if (key === 'skill') return { ess: e };
    return { rolla: e[0], [D.TIERS[S.tier].sand]: e[1] };
  }
  if (key === 'char' || key === 'fant') {
    const cum = key === 'char' ? D.PLAYER_EXP : D.PET_EXP;
    return cum[L + 1] != null && cum[L] != null ? { exp: cum[L + 1] - cum[L] } : {};
  }
  if (key === 'gear') { const e = D.GEAR_COST[L + 1]; return e ? { ore: e[0], fine: e[1], rolla: e[2] } : {}; }
  if (key === 'skill') { const e = D.SKILL_COST[L + 1]; return e != null ? { ess: e } : {}; }
  const e = D.RELIC_COST[L + 1];
  return e ? { rolla: e[0], [e[1]]: e[2] } : {};
}

/** Chi phí để mọi món của một hệ đi từ `from` lên `to`. */
export function costRange(D, season, key, from, to) {
  const out = {};
  const slots = sysOf(key).slots;
  for (let L = from; L < to; L++) {
    for (const [k, v] of Object.entries(stepCost(D, season, key, L))) if (v) out[k] = (out[k] || 0) + v * slots;
  }
  return out;
}

/** Level cao nhất có trong bảng vượt sàn của mùa. */
export const tableMax = (D, season, key) => {
  const S = seasonOf(D, season);
  return floorOf(S, key) + blessTable(D, S, key).length;
};

/** Cap của trang bị / skill / Fantomon / relic theo level nhân vật (null nếu nhân vật chưa vượt sàn). */
export function capOf(D, season, charLevel, key) {
  const S = seasonOf(D, season);
  const over = charLevel - S.floor;
  if (key === 'char' || over < 1) return null;
  const T = D.TIERS[S.tier];
  const row = T.limit[Math.min(over, T.limit.length) - 1];
  return floorOf(S, key) + row[{ gear: 0, skill: 1, fant: 2, relic: 3 }[key]];
}

/** EXP để nhân vật ('char') hoặc Fantomon ('fant') lên từ L tới L+1. */
export const expStep = (D, kind, season, L) => stepCost(D, season, kind, L).exp || 0;
