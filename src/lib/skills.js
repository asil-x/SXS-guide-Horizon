import { useEffect, useState } from 'react';

// skills.json khá nặng nên chỉ tải khi trang cần (Build hoặc Tip không có trong tooltips.json).
let cache = null;
let pending = null;

export function loadSkills() {
  if (cache) return Promise.resolve(cache);
  pending ||= import('../data/skills.json').then((m) => (cache = Object.fromEntries(m.default.map((s) => [s.name, s]))));
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
