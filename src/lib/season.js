// Mùa đang chọn ở các máy tính (Primostar, EXP): mặc định Season 1, nhớ lựa chọn trong trình duyệt.
import { useState } from 'react';

const KEY = 'sxs.season';
export function useSeason() {
  const [s, setS] = useState(() => {
    try { const v = Number(localStorage.getItem(KEY)); if (v >= 1 && v <= 6) return v; } catch {}
    return 1;
  });
  const set = (v) => { setS(v); try { localStorage.setItem(KEY, String(v)); } catch {} };
  return [s, set];
}
