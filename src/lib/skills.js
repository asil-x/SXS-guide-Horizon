import { useMemo } from 'react';
import { useData } from './data.js';

// skills.json khá nặng nên chỉ tải khi trang cần (Build hoặc Tip không có trong tooltips.json).
const maps = new WeakMap();
function byName(list) {
  if (!maps.has(list)) {
    // Một số skill quái trùng tên với skill class (vd. Riptide): ưu tiên skill của class.
    const map = {};
    for (const s of list) if (!map[s.name] || map[s.name].class === 'Monster') map[s.name] = s;
    maps.set(list, map);
  }
  return maps.get(list);
}

/** Trả về map { tên skill: skill } theo ngôn ngữ hiện tại, hoặc null khi đang tải / không cần. */
export function useSkills(needed = true) {
  const list = useData('skills', needed);
  return useMemo(() => (list ? byName(list) : null), [list]);
}
