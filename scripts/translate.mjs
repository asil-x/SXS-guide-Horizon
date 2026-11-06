// Sinh dữ liệu đã dịch cho từng ngôn ngữ từ bản gốc tiếng Anh.
//   npm run translate
// - src/data/en/*.json        : bản gốc tiếng Anh (npm run sync:compass ghi vào đây). Sửa dữ liệu thì sửa ở đây.
// - src/data/vi/*.json         : được SINH RA từ bản gốc, đừng sửa tay (sẽ bị ghi đè).
// - scripts/i18n/<lang>.json  : từ điển { "câu tiếng Anh": "bản dịch" } cho vi
// - scripts/i18n/rules.mjs    : quy tắc cho các câu theo khuôn mẫu (theo từng ngôn ngữ)
// - scripts/i18n/maps.mjs     : bản dịch cho thẻ (tag), hệ, loại quà, vai trò
// - scripts/i18n/todo.<lang>.json : các câu CHƯA có bản dịch. Điền bản dịch vào rồi chạy lại lệnh,
//                                   chúng sẽ được chuyển vào từ điển. Câu chưa dịch sẽ hiện bằng tiếng Anh.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { applyRules } from './i18n/rules.mjs';
import { MAPS } from './i18n/maps.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'src/data');
const I18N = path.join(ROOT, 'scripts/i18n');
const LANGS = ['vi'];
const readJson = (p, d) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : d);
const sorted = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));

const FILES = ['skills.json', 'fantomons.json', 'items.json', 'relics.json', 'companions.json', 'classes.json', 'tooltips.json'];

function translateTo(lang) {
  const dictFile = path.join(I18N, lang + '.json');
  const todoFile = path.join(I18N, 'todo.' + lang + '.json');
  const dict = readJson(dictFile, {});
  let merged = 0;
  for (const [en, v] of Object.entries(readJson(todoFile, {}))) if (v && v.trim()) { dict[en] = v.trim(); merged++; }

  const m = MAPS[lang] || {};
  const todo = {};
  const tr = (s) => {
    if (typeof s !== 'string' || !s.trim()) return s;
    const k = s.trim();
    if (dict[k] != null) return dict[k];
    const r = applyRules(k, lang);
    if (r != null) return r;
    if (/[a-zA-Z]{3}/.test(k) && /\s/.test(k)) todo[k] = '';
    return s;
  };
  const map = (table) => (v) => (table && table[v]) || v;
  const tags = (a) => a && a.map(map(m.TAGS));
  const kws = (list) => (list || []).forEach((k) => { k.description = tr(k.description); });
  const fix = {
    'skills.json': (d) => d.forEach((s) => { s.description = tr(s.description); s.tags = tags(s.tags); kws(s.keywords); }),
    'fantomons.json': (d) => d.forEach((f) => (f.skills || []).forEach((s) => { s.description = tr(s.description); kws(s.keywords); })),
    'items.json': (d) => d.forEach((i) => { i.description = tr(i.description); i.tags = tags(i.tags); }),
    'relics.json': (d) => d.forEach((r) => { r.description = tr(r.description); r.element = map(m.ELEMENT)(r.element); }),
    'companions.json': (d) => d.forEach((c) => { c.gift_type = map(m.GIFT)(c.gift_type); if (c.unlock) c.unlock = tr(c.unlock); }),
    'classes.json': (d) => d.forEach((c) => { c.description = tr(c.description); c.role = map(m.ROLE)(c.role); }),
    'tooltips.json': (d) => Object.values(d).forEach((t) => { if (t.description) t.description = tr(t.description); if (t.tags) t.tags = tags(t.tags); }),
  };

  fs.mkdirSync(path.join(DATA, lang), { recursive: true });
  for (const f of FILES) {
    const src = path.join(DATA, 'en', f);
    if (!fs.existsSync(src)) continue;
    const d = readJson(src);
    fix[f](d);
    fs.writeFileSync(path.join(DATA, lang, f), JSON.stringify(d) + '\n');
  }
  fs.writeFileSync(dictFile, JSON.stringify(sorted(dict), null, 1) + '\n');
  fs.writeFileSync(todoFile, JSON.stringify(sorted(todo), null, 1) + '\n');
  console.log(`[${lang}] thêm từ todo: ${merged}, còn ${Object.keys(todo).length} câu chưa dịch (scripts/i18n/todo.${lang}.json)`);
}

const only = process.argv[2];
for (const lang of LANGS) if (!only || only === lang) translateTo(lang);
