// Nền động: các Fantomon mờ mờ chạy qua lại phía sau nội dung (trái sang phải rồi quay đầu chạy về).
// Chỉ để trang trí: không bắt chuột, bị ẩn với người bật "giảm chuyển động".
import { useMemo } from 'react';
import { asset } from '../lib/img.js';

const PETS = ['aegiswing', 'armopi', 'boaro', 'cabbage-dog', 'chomusuke', 'falko', 'herbote', 'kels', 'luminarch-steed',
  'mandragora', 'nyxarchon', 'pandarial', 'prismora', 'sylvaerie', 'terragon', 'zeioletus'];

export default function WalkingBg({ count = 8 }) {
  const walkers = useMemo(() => {
    const pool = [...PETS].sort(() => Math.random() - 0.5).slice(0, count);
    return pool.map((name, i) => {
      const dur = 34 + Math.random() * 30; // giây cho một vòng đi và về
      return {
        name,
        top: 8 + (i / count) * 80 + Math.random() * 6, // chia làn từ trên xuống để không chồng nhau
        size: 52 + Math.random() * 40,
        dur,
        delay: -Math.random() * dur, // bắt đầu giữa chừng, vào trang là đã thấy đang chạy
        hop: 0.42 + Math.random() * 0.2,
      };
    });
  }, [count]);

  return (
    <div className='walk-bg' aria-hidden='true'>
      {walkers.map((w) => (
        <div key={w.name} className='walker' style={{ top: w.top + '%', width: w.size, animationDuration: w.dur + 's', animationDelay: w.delay + 's' }}>
          <img src={asset('pets/' + w.name + '.png')} alt='' style={{ animationDuration: w.hop + 's' }} />
        </div>
      ))}
    </div>
  );
}
