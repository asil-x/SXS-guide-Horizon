// Chạy sau `vite build` (npm run build). GitHub Pages không tự trả index.html cho đường dẫn như /guides/abc,
// nên script này tạo sẵn dist/<đường dẫn>/index.html cho mọi trang (kèm tiêu đề, mô tả riêng khi chia sẻ link),
// dist/404.html cho đường dẫn lạ, và dist/sitemap.xml đầy đủ.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://horizonsxs.io.vn';
const SUFFIX = ' | Sword x Staff Guide - Guild Horizon';
const html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const field = (src, key) => {
  const m = new RegExp(`\\b${key}:\\s*(['"])((?:\\\\.|(?!\\1).)*)\\1`).exec(src);
  return m ? m[2].replace(/\\(.)/g, '$1') : null;
};

// Các trang: bài viết (bỏ bản nháp), dữ liệu, giới thiệu.
const pages = [];
for (const f of fs.readdirSync(path.join(ROOT, 'src/guides')).filter((f) => f.endsWith('.jsx'))) {
  const src = fs.readFileSync(path.join(ROOT, 'src/guides', f), 'utf8');
  if (/\bdraft:\s*true/.test(src)) continue;
  pages.push({ route: '/guides/' + f.replace(/\.jsx$/, ''), title: field(src, 'title'), desc: field(src, 'desc') });
}
const site = fs.readFileSync(path.join(ROOT, 'src/lib/site.js'), 'utf8');
const dbBlock = /DB_KINDS\s*=\s*\[([\s\S]*?)\];/.exec(site)[1];
const DB_TITLE = { skills: 'Kỹ năng', fantomons: 'Fantomon', companions: 'Đồng hành', items: 'Vật phẩm', relics: 'Di vật' };
for (const m of dbBlock.matchAll(/key:\s*'([^']+)'/g)) pages.push({ route: '/db/' + m[1], title: 'Dữ liệu ' + (DB_TITLE[m[1]] || m[1]) });
pages.push({ route: '/about', title: 'Về chúng tôi' });

function pageHtml({ route, title, desc }) {
  let out = html;
  const url = SITE + route;
  if (title) {
    const full = esc(title + SUFFIX);
    out = out.replace(/<title>[^<]*<\/title>/, `<title>${full}</title>`)
      .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
      .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`);
  }
  if (desc) {
    out = out.replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
      .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(desc)}$2`);
  }
  return out.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
}

for (const p of pages) {
  const dir = path.join(DIST, p.route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), pageHtml(p));
}
fs.writeFileSync(path.join(DIST, '404.html'), html);

const today = new Date().toISOString().slice(0, 10);
const urls = [{ route: '/', pr: '1.0' }, ...pages.map((p) => ({ route: p.route, pr: p.route.startsWith('/guides/') ? '0.8' : '0.6' }))];
fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url><loc>${SITE}${u.route}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${u.pr}</priority></url>`).join('\n') +
  '\n</urlset>\n');
console.log(`spa-routes: ${pages.length} trang, 404.html, sitemap ${urls.length} URL`);
