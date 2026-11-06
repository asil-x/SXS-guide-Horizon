// Dữ liệu game theo ngôn ngữ: src/data/<lang>/<tên>.json (en là bản gốc).
// Chỉ tải khi cần và nhớ lại để không tải lần hai.
import { useEffect, useState } from 'react';
import { useLang } from '../i18n/index.jsx';

const files = import.meta.glob('../data/*/*.json', { import: 'default' });
const cache = {};
const pending = {};

export function loadData(name, lang) {
  const k = lang + '/' + name;
  if (cache[k]) return Promise.resolve(cache[k]);
  const f = files['../data/' + lang + '/' + name + '.json'] || files['../data/en/' + name + '.json'];
  return (pending[k] ||= f().then((d) => (cache[k] = d)));
}

export const peekData = (name, lang) => cache[lang + '/' + name] || null;

/** Trả về dữ liệu (hoặc null khi đang tải / needed = false) theo ngôn ngữ hiện tại. */
export function useData(name, needed = true) {
  const { lang } = useLang();
  const [, bump] = useState(0);
  const k = lang + '/' + name;
  useEffect(() => {
    if (needed && !cache[k]) loadData(name, lang).then(() => bump((x) => x + 1));
  }, [k, needed]);
  return needed ? cache[k] || null : null;
}
