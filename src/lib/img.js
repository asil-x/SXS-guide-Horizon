const FALLBACK = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="10" fill="%23202a3a"/><text x="32" y="40" font-size="26" text-anchor="middle" fill="%23b08d57">?</text></svg>';

export const fallbackImg = FALLBACK;

export function onImgError(e) {
  if (e.currentTarget.src !== FALLBACK) e.currentTarget.src = FALLBACK;
}

export function iconUrl(icon) {
  if (!icon) return FALLBACK;
  let p = String(icon).replace(/ /g, '-');
  if (p.includes('/')) {
    p = p.replace(/^(tooltips|treasures|skills|companions|pets|guides)\/swordxstaff\//, '$1/');
    return './img/' + p;
  }
  if (!/\.\w+$/.test(p)) p += '.png';
  if (/^(skill|monsterskill)_/.test(p)) return './img/skills/' + p;
  if (/^npc_icon/i.test(p)) return './img/companions/' + p;
  if (/^treasure_/.test(p)) return './img/treasures/' + p;
  return './img/tooltips/' + p;
}

export function petUrl(name, evo) {
  const slug = String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return './img/pets/' + slug + (evo ? '-evo' : '') + '.png';
}

export function fixGuideHtml(html) {
  return html.replace(/src="\/img\//g, 'src="./img/');
}
