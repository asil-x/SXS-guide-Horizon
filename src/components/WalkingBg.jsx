// Nền động: các Fantomon mờ mờ đi lại phía sau nội dung. Mỗi con tự "sống": đi lạch bạch (nhún, lắc, nén giãn
// khi chạm đất), có lúc đứng thở, ngó quanh, quay đầu, thỉnh thoảng nhảy lên. Chạy bằng requestAnimationFrame.
// Chỉ để trang trí: không bắt chuột, bị ẩn với người bật "giảm chuyển động".
import { useEffect, useMemo, useRef } from 'react';
import { asset } from '../lib/img.js';

const PETS = ['aegiswing', 'armopi', 'boaro', 'cabbage-dog', 'chomusuke', 'falko', 'herbote', 'kels', 'luminarch-steed',
  'mandragora', 'nyxarchon', 'pandarial', 'prismora', 'sylvaerie', 'terragon', 'zeioletus'];

const rnd = (a, b) => a + Math.random() * (b - a);

export default function WalkingBg({ count = 8 }) {
  const walkers = useMemo(() => [...PETS].sort(() => Math.random() - 0.5).slice(0, count).map((name, i) => ({
    name,
    top: 8 + (i / count) * 80 + rnd(0, 6), // chia làn từ trên xuống để không chồng nhau
    size: rnd(52, 92),
  })), [count]);
  const refs = useRef([]);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const W = () => window.innerWidth;
    const st = walkers.map((w) => ({
      x: rnd(0, W()), dir: Math.random() < 0.5 ? -1 : 1, speed: rnd(28, 62),
      mode: 'walk', timer: rnd(3, 9), phase: rnd(0, 2), t: rnd(0, 10), jump: 0, size: w.size,
    }));
    let last = performance.now(), raf;
    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      st.forEach((s, i) => {
        const el = refs.current[i];
        if (!el) return;
        s.t += dt;
        s.timer -= dt;
        if (s.timer <= 0) {
          if (s.mode === 'walk') {
            s.mode = 'idle'; s.timer = rnd(1, 3.2);
          } else {
            s.mode = 'walk'; s.timer = rnd(4, 11); s.speed = rnd(28, 62);
            if (Math.random() < 0.35) s.dir *= -1;
          }
        }
        // thỉnh thoảng nhảy một cái
        if (s.jump <= 0 && Math.random() < dt * 0.06) s.jump = 0.55;
        let bob = 0, tilt = 0, sx = 1, sy = 1;
        if (s.mode === 'walk') {
          s.x += s.dir * s.speed * dt;
          const m = s.size + 40;
          if (s.x > W() + m) { s.x = W() + m; s.dir = -1; }
          if (s.x < -m) { s.x = -m; s.dir = 1; }
          s.phase += dt * (s.speed / 20); // bước nhanh hơn khi đi nhanh
          const k = Math.abs(Math.sin(s.phase * Math.PI));
          bob = k * s.size * 0.08;
          tilt = Math.sin(s.phase * Math.PI) * 6;
          const land = 1 - k; // sát đất: nén lại một chút
          sy = 1 - land * 0.07; sx = 1 + land * 0.05;
        } else {
          // đứng thở, thỉnh thoảng ngó sang hướng kia
          sy = 1 + Math.sin(s.t * 3) * 0.025; sx = 1 - Math.sin(s.t * 3) * 0.015;
          tilt = Math.sin(s.t * 1.3) * 2;
          if (Math.random() < dt * 0.5) s.dir *= -1;
        }
        if (s.jump > 0) {
          s.jump -= dt;
          const p = 1 - s.jump / 0.55; // 0 → 1
          bob += Math.sin(p * Math.PI) * s.size * 0.35;
          sy *= 1 + Math.sin(p * Math.PI) * 0.08; sx *= 1 - Math.sin(p * Math.PI) * 0.05;
        }
        const face = s.dir > 0 ? -1 : 1; // hình gốc nhìn sang trái
        el.style.transform = `translate3d(${s.x.toFixed(1)}px,0,0)`;
        el.firstChild.style.transform = `translateY(${(-bob).toFixed(1)}px) scale(${(face * sx).toFixed(3)},${sy.toFixed(3)}) rotate(${(face * tilt).toFixed(2)}deg)`;
        el.lastChild.style.transform = `scale(${(1 - bob / (s.size * 0.6)).toFixed(3)})`;
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [walkers]);

  return (
    <div className='walk-bg' aria-hidden='true'>
      {walkers.map((w, i) => (
        <div key={w.name} ref={(el) => (refs.current[i] = el)} className='walker' style={{ top: w.top + '%', width: w.size }}>
          <img src={asset('pets/' + w.name + '.png')} alt='' />
          <span className='walker-shadow' />
        </div>
      ))}
    </div>
  );
}
