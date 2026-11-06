// Đồng bộ kỹ năng, Fantomon, companion và build đề xuất theo class từ Sword x Staff Compass.
//   npm run sync:compass
// Dữ liệu được ĐỌC (parse) từ các file JS của trang, không chạy code của họ.
// Chỉ THÊM mục mới / trường mới, không ghi đè dữ liệu và bản dịch đang có. Sau đó tự chạy translate.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { extractLiterals, findArray } from './lib/literals.mjs';

const SITE = 'https://swordxstaff-compass.com';
const UA = 'SXS-guide-Horizon data sync (fan site)';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'src/data');
const IMG = path.join(ROOT, 'public/img');
const RAW = path.join(ROOT, 'scripts/compass/raw');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const readJson = (f) => JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8'));
const writeJson = (f, d) => fs.writeFileSync(path.join(DATA, f), JSON.stringify(d) + '\n');

async function get(url, type = 'text') {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(res.status + ' ' + url);
  await sleep(700); // nhẹ tay với server của họ
  return type === 'buffer' ? Buffer.from(await res.arrayBuffer()) : res.text();
}

// ---------- 1. tải và đọc các file dữ liệu ----------
const html = await get(SITE + '/');
const mainUrl = html.match(/src="(\/assets\/index-[\w-]+\.js)"/)[1];
const main = await get(SITE + mainUrl);
const chunk = (name) => {
  const m = main.match(new RegExp('assets/' + name + '-[\\w-]{8}\\.js'));
  if (!m) throw new Error('Không tìm thấy file ' + name + ' (trang đã đổi cấu trúc?)');
  return SITE + '/' + m[0];
};
fs.mkdirSync(RAW, { recursive: true });
const load = async (name) => {
  const vars = extractLiterals(await get(chunk(name)));
  fs.writeFileSync(path.join(RAW, name + '.json'), JSON.stringify(vars, null, 1));
  return vars;
};
const theirSkills = findArray(await load('skills'), 'id', 'classId', 'description');
const theirFans = findArray(await load('fantomons'), 'levelCurve', 'adultSkills');
const theirComps = findArray(await load('companions'), 'englishName', 'favoriteCategory');
const theirClasses = findArray(await load('classes'), 'recommendedActiveIds', 'chain');
const assetSrc = await get(chunk('assets'));
const assetUrl = Object.fromEntries([...assetSrc.matchAll(/"\.\.\/assets\/custom\/([\w-]+\/[\w-]+)\.webp":`([^`]+)`/g)].map((m) => [m[1], m[2]]));
console.log(`Compass: ${theirSkills.length} skill, ${theirFans.length} Fantomon, ${theirComps.length} companion, ${theirClasses.length} class`);

// ---------- 2. tải icon còn thiếu ----------
const downloads = [];
function icon(key, dest) { // key: "skill/skill-12" ; dest: đường dẫn trong public/img
  if (!assetUrl[key]) return null;
  if (!fs.existsSync(path.join(IMG, dest))) downloads.push([SITE + assetUrl[key], dest]);
  return dest;
}

// ---------- 3. gộp dữ liệu ----------
const className = Object.fromEntries(theirClasses.map((c) => [c.id, c.name]));
const skillById = Object.fromEntries(theirSkills.map((s) => [s.id, s]));
const TYPE = { Active: 'Technique', Charm: 'Charm' };
const stats = {};

// Kỹ năng
const skills = readJson('skills.json');
const byName = new Map(skills.map((s) => [s.name, s]));
let added = 0;
for (const t of theirSkills) {
  const mine = byName.get(t.name);
  if (mine) { mine.quality ??= t.quality; mine.rankTier ??= t.rankTier; continue; }
  const local = 'skills/skill_' + t.id + '.png';
  const s = {
    id: t.id, name: t.name, type: TYPE[t.type] || t.type, class: className[t.classId] || '', description: t.description,
    quality: t.quality, rankTier: t.rankTier, source: 'compass',
  };
  s.icon = fs.existsSync(path.join(IMG, local)) ? 'skill_' + t.id : icon('skill/skill-' + t.assetIndex, 'skills/compass/skill-' + t.assetIndex + '.webp') || undefined;
  skills.push(s); byName.set(s.name, s); added++;
}
skills.sort((a, b) => a.name.localeCompare(b.name));
writeJson('skills.json', skills);
stats.skills = added;

// Fantomon: chỉ thêm con đã ra mắt
const UNRELEASED = /future|config-only|coming soon|unreleased|test/i;
const fans = readJson('fantomons.json');
const fanNames = new Set(fans.map((f) => f.name));
added = 0;
for (const t of theirFans) {
  const mine = fans.find((f) => f.name === t.name);
  if (mine) { mine.role ??= t.type; continue; }
  if (UNRELEASED.test(t.status || '')) continue;
  fans.push({
    id: t.id, name: t.name, rarity: t.rarity, role: t.type, source: 'compass',
    skills: (t.adultSkills || t.babySkills || []).map((s) => ({ id: s.id, name: s.name, type: s.type === 'Active' ? 'Technique' : s.type, description: s.description })),
  });
  fanNames.add(t.name); added++;
}
writeJson('fantomons.json', fans);
stats.fantomons = added;

// Companion: chỉ thêm người đã có ở bản global
const comps = readJson('companions.json');
added = 0;
for (const t of theirComps) {
  const mine = comps.find((c) => c.name === t.englishName || c.id === t.id);
  if (mine) { mine.unlock ??= t.unlockCondition; mine.class ??= t.class; continue; }
  if (t.rosterStatus !== 'global') continue;
  comps.push({
    id: t.id, name: t.englishName, class: t.class, gift_type: t.favoriteCategory, unlock: t.unlockCondition, ranks: [], source: 'compass',
    icon: icon('companion/companion-' + t.id, 'companions/compass/companion-' + t.id + '.webp') || undefined,
  });
  added++;
}
writeJson('companions.json', comps);
stats.companions = added;

// Class + build đề xuất
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
// Giữ các trường đã chỉnh tay trong classes.json: tên thật (class bậc 8), mô tả đã sửa, bộ skill (pool).
const oldClasses = Object.fromEntries((fs.existsSync(path.join(DATA, 'classes.json')) ? readJson('classes.json') : []).map((c) => [c.id, c]));
const nameOf = (c) => (oldClasses[c.id]?.placeholder ? oldClasses[c.id].name : c.name);
const codeToName = Object.fromEntries(theirClasses.map((c) => [c.code, nameOf(c)]));
const classes = theirClasses.map((c) => {
  const old = oldClasses[c.id] || {};
  const local = 'skills/classes/' + slug(nameOf(c)) + '.png';
  return {
    ...old,
    id: c.id, name: nameOf(c), rank: c.rank, role: c.role, description: old.placeholder ? old.description : c.description,
    chain: (c.chain || []).map((k) => codeToName[k] || k),
    techniques: (c.recommendedActiveIds || []).map((i) => skillById[i]?.name).filter(Boolean),
    charms: (c.recommendedCharmIds || []).map((i) => skillById[i]?.name).filter(Boolean),
    icon: fs.existsSync(path.join(IMG, local)) ? local : icon('class/class-' + c.id, 'skills/classes/compass/class-' + c.id + '.webp'),
  };
});
writeJson('classes.json', classes);
stats.classes = classes.length;

for (const [url, dest] of downloads) {
  fs.mkdirSync(path.dirname(path.join(IMG, dest)), { recursive: true });
  fs.writeFileSync(path.join(IMG, dest), await get(url, 'buffer'));
}
console.log('Đã thêm:', stats, '| icon tải mới:', downloads.length);

// ---------- 4. dịch ----------
execFileSync(process.execPath, [path.join(ROOT, 'scripts/translate.mjs')], { stdio: 'inherit' });
