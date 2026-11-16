// Dùng chung cho các trang tra cứu trong phần Dữ liệu.
import { useEffect, useState } from 'react';
import { useLang } from '../../i18n/index.jsx';
import VI from '../../lib/db/vi.json';

export const ELEM_COLOR = { Fire: '#f0635a', Water: '#4f9dff', Wind: '#4fd1a5', Light: '#f2c94c', Dark: '#a78bfa', Physical: '#a3a8b4' };
export const QUALITY = { Rainbow: 'Immortal', Red: 'Divine', Gold: 'Mythic', Orange: 'Legendary', Purple: 'Epic', Blue: 'Rare', White: 'Common' };
export const Q_ORDER = ['Rainbow', 'Red', 'Gold', 'Orange', 'Purple', 'Blue', 'White'];

/** Dịch chữ của dữ liệu game sang tiếng Việt (src/lib/db/vi.json) khi đang xem bản tiếng Việt. */
export function useTr() {
  const { lang } = useLang();
  return (s) => (lang === 'vi' && s && VI[s]) || s;
}

/** Tải một file JSON dữ liệu (import động, chỉ tải khi cần). */
export function useJson(loader) {
  const [d, setD] = useState(null);
  useEffect(() => { loader().then((m) => setD(m.default || m)); }, []);
  return d;
}

/** Mô tả của game có đoạn tô màu dạng \u0001#màu\u0002chữ\u0003: đổi thành span có màu. */
export function GameText({ text }) {
  if (!text) return null;
  const parts = [];
  const re = /\u0001(#[0-9a-fA-F]{6})\u0002([^\u0003]*)\u0003/g;
  let last = 0, m, i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<span key={i++} style={{ color: m[1], fontWeight: 600 }}>{m[2]}</span>);
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
