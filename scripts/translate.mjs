// Áp bản dịch tiếng Việt lên dữ liệu trong src/data.
//   npm run translate
// - scripts/i18n/vi.json   : từ điển { "câu tiếng Anh": "bản dịch" }
// - scripts/i18n/rules.mjs : quy tắc cho các câu theo khuôn mẫu
// - scripts/i18n/todo.json : các câu CHƯA có bản dịch. Điền bản dịch vào rồi chạy lại lệnh,
//                            chúng sẽ được chuyển vào vi.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { applyRules } from './i18n/rules.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'src/data');
const I18N = path.join(ROOT, 'scripts/i18n');
const readJson = (p, d) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : d);

const dict = readJson(path.join(I18N, 'vi.json'), {});
const todoFile = path.join(I18N, 'todo.json');
let merged = 0;
for (const [en, vi] of Object.entries(readJson(todoFile, {}))) if (vi && vi.trim()) { dict[en] = vi.trim(); merged++; }

const TAGS = {
  Cure: 'Hồi máu', Attack: 'Tấn công', SingleHit: 'Đơn mục tiêu', AbnormalDebuff: 'Hiệu ứng xấu', Auxiliary: 'Hỗ trợ', Self: 'Bản thân',
  Friend: 'Đồng minh', DisperseStatus: 'Xoá hiệu ứng', FireGrid: 'Ô lửa', Prop: 'Vật thể', Mobile: 'Di chuyển', Counterstrike: 'Phản đòn',
  Shield: 'Khiên', Summon: 'Triệu hồi', Repel: 'Đẩy lùi', SuperArmor: 'Kháng khống chế', BackToLife: 'Hồi sinh',
  Currency: 'Tiền tệ', Item: 'Vật phẩm', Gift: 'Quà tặng', Ingredient: 'Nguyên liệu', Drop: 'Vật rơi', Badge: 'Huy hiệu', Consumable: 'Tiêu hao',
  Card: 'Thẻ', 'Skill Skin': 'Skin skill', Pet: 'Fantomon', Material: 'Vật liệu', Score: 'Điểm', Key: 'Chìa khoá', Tool: 'Dụng cụ', Recipe: 'Công thức', Event: 'Sự kiện',
};
const ELEMENT = { Dark: 'Bóng tối', Water: 'Nước', Wind: 'Gió', Light: 'Ánh sáng', Fire: 'Lửa', Physical: 'Vật lý' };
const GIFT = { Flower: 'Hoa', Jewelry: 'Trang sức', Book: 'Sách', Furniture: 'Nội thất', Valuables: 'Đồ quý', Commodity: 'Hàng hoá' };
const ROLE = { Melee: 'Cận chiến', Caster: 'Pháp sư', Ranged: 'Tầm xa', Tank: 'Tank', Support: 'Hỗ trợ', Healer: 'Hồi máu', Attacker: 'Tấn công' };

const VI_CHARS = /[ạảãáàâầấậẩẫăằắặẳẵđêềếệểễôồốộổỗơờớợởỡưừứựửữịỉĩíìọỏõóòụủũúùỵỷỹýỳ]/i;
const todo = {};
function tr(s) {
  if (typeof s !== 'string' || !s.trim()) return s;
  const k = s.trim();
  if (dict[k] != null) return dict[k];
  const r = applyRules(k);
  if (r != null) return r;
  if (/[a-zA-Z]{3}/.test(k) && !VI_CHARS.test(k) && /\s/.test(k)) todo[k] = '';
  return s;
}
const map = (m) => (v) => m[v] || v;
const tags = (a) => a && a.map(map(TAGS));
const kws = (list) => (list || []).forEach((k) => { k.description = tr(k.description); });

const files = {
  'skills.json': (d) => d.forEach((s) => { s.description = tr(s.description); s.tags = tags(s.tags); kws(s.keywords); }),
  'fantomons.json': (d) => d.forEach((f) => (f.skills || []).forEach((s) => { s.description = tr(s.description); kws(s.keywords); })),
  'items.json': (d) => d.forEach((i) => { i.description = tr(i.description); i.tags = tags(i.tags); }),
  'relics.json': (d) => d.forEach((r) => { r.description = tr(r.description); r.element = map(ELEMENT)(r.element); }),
  'companions.json': (d) => d.forEach((c) => { c.gift_type = map(GIFT)(c.gift_type); if (c.unlock) c.unlock = tr(c.unlock); }),
  'classes.json': (d) => d.forEach((c) => { c.description = tr(c.description); c.role = map(ROLE)(c.role); }),
};
for (const [f, fn] of Object.entries(files)) {
  const p = path.join(DATA, f);
  if (!fs.existsSync(p)) continue;
  const d = readJson(p);
  fn(d);
  fs.writeFileSync(p, JSON.stringify(d) + '\n');
}
// tooltips.json được sửa tay nên giữ định dạng dễ đọc
const tipsPath = path.join(DATA, 'tooltips.json');
const tips = readJson(tipsPath, {});
for (const t of Object.values(tips)) { if (t.description) t.description = tr(t.description); if (t.tags) t.tags = tags(t.tags); }
fs.writeFileSync(tipsPath, JSON.stringify(tips, null, 2).replace(/\[\s+((?:"[^"\n]*",\s+)*"[^"\n]*")\s+\]/g, (m, a) => '[' + a.replace(/",\s+"/g, '", "') + ']') + '\n');

const sorted = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));
fs.writeFileSync(path.join(I18N, 'vi.json'), JSON.stringify(sorted(dict), null, 1) + '\n');
fs.writeFileSync(todoFile, JSON.stringify(sorted(todo), null, 1) + '\n');
console.log(`Đã dịch xong. Thêm từ todo.json: ${merged}. Còn ${Object.keys(todo).length} câu chưa dịch trong scripts/i18n/todo.json`);
