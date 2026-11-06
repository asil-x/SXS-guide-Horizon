import { useEffect, useState } from 'react';

// skills.json khá nặng nên chỉ tải khi trang cần (Build hoặc Tip không có trong tooltips.json).
let cache = null;
let pending = null;

export function loadSkills() {
  if (cache) return Promise.resolve(cache);
  pending ||= import('../data/skills.json').then((m) => {
    // Một số skill quái trùng tên với skill class (vd. Riptide): ưu tiên skill của class.
    const map = {};
    for (const s of m.default) if (!map[s.name] || map[s.name].class === 'Monster') map[s.name] = s;
    return (cache = map);
  });
  return pending;
}

/** Trả về map { tên skill: skill } hoặc null khi đang tải / không cần. */
export function useSkills(needed = true) {
  const [skills, setSkills] = useState(cache);
  useEffect(() => {
    if (needed && !skills) loadSkills().then(setSkills);
  }, [needed, skills]);
  return needed ? skills : null;
}
