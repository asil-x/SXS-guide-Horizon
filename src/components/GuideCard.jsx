import { Link } from 'react-router-dom';
import { asset, cssUrl, onImgError } from '../lib/img.js';

// Ảnh bìa .png là icon nhỏ (class, vật phẩm): hiển thị icon rõ nét trên nền là chính nó làm mờ.
const isEmblem = (g) => /\.png$/.test(g.cover || '');

// Màu chủ đạo của từng class (lấy theo màu icon trong game).
const CLASS_COLOR = { duelist: '#f0635a', knight: '#f2b33d', sage: '#4fd1a5', sorcerer: '#6f9bff' };
const classKey = (g) => Object.keys(CLASS_COLOR).find((k) => g.slug.endsWith(k));

export default function GuideCard({ g, variant = 'cover', feature = false }) {
  const bg = { '--img': cssUrl(g.cover) };

  if (variant === 'class') {
    const k = classKey(g);
    return (
      <Link className='class-card' to={'/guides/' + g.slug} style={{ ...bg, '--c': CLASS_COLOR[k] || 'var(--violet)' }}>
        <div className='ccard-glow' aria-hidden='true' />
        <img src={asset(g.cover)} alt='' onError={onImgError} />
        <div className='ccard-text'>
          <h3>{g.short || g.title.replace('Hướng dẫn chơi ', '')}</h3>
          {g.desc && <p>{g.desc}</p>}
          <span className='ccard-more'>Xem build →</span>
        </div>
      </Link>
    );
  }

  if (variant === 'row') {
    return (
      <Link className='row-card' to={'/guides/' + g.slug}>
        <img src={asset(g.cover)} alt='' onError={onImgError} />
        <span className='row-text'>
          <span>{g.title}</span>
          {g.desc && <small>{g.desc}</small>}
        </span>
        <span className='arrow'>→</span>
      </Link>
    );
  }

  const emblem = isEmblem(g);
  return (
    <Link className={'guide-card' + (emblem ? ' emblem' : '') + (feature ? ' feature' : '')} to={'/guides/' + g.slug} style={bg}>
      <div className='gc-bg' aria-hidden='true' />
      {emblem && <img className='gc-emblem' src={asset(g.cover)} alt='' loading='lazy' onError={onImgError} />}
      <div className='gc-body'>
        <h3>{g.title}</h3>
        {g.desc && <p>{g.desc}</p>}
        <span className='gc-more'>Đọc ngay →</span>
      </div>
    </Link>
  );
}
