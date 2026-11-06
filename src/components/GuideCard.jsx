import { Link } from 'react-router-dom';
import { asset, cssUrl, onImgError } from '../lib/img.js';
import { useT } from '../i18n/index.jsx';

// Ảnh bìa .png là icon nhỏ (class, vật phẩm): hiển thị icon rõ nét trên nền là chính nó làm mờ.
const isEmblem = (g) => /\.png$/.test(g.cover || '');

// Màu chủ đạo của từng class (lấy theo màu icon trong game).
const CLASS_COLOR = { duelist: '#f0635a', knight: '#f2b33d', sage: '#4fd1a5', sorcerer: '#6f9bff' };
// Màu theo chủ đề bài viết (meta.topic).
const TOPIC_COLOR = { season: '#a78bfa', farm: '#f2b33d', gear: '#5fd3e6', class: '#f0635a', economy: '#e8c46a', pet: '#4fd1a5', event: '#f472b6', explore: '#7ddc6a', stats: '#fb923c', data: '#94a3b8' };
const classKey = (g) => Object.keys(CLASS_COLOR).find((k) => g.slug.endsWith(k));
export const classColor = (g) => CLASS_COLOR[classKey(g)];

export default function GuideCard({ g, variant = 'cover', feature = false, wide = false, index }) {
  const t = useT();
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
          <span className='ccard-more'>{t('card.build')}</span>
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

  // Thẻ dạng “nhiệm vụ”: icon vật phẩm trong game trên nền màu theo chủ đề.
  const color = TOPIC_COLOR[g.topic] || 'var(--gold)';
  const icon = g.icon || (isEmblem(g) ? g.cover : null);
  return (
    <Link className={'quest' + (feature ? ' feature' : '') + (wide ? ' wide' : '') + (icon ? '' : ' no-icon')} to={'/guides/' + g.slug} style={{ ...bg, '--c': color }}>
      <div className='q-tex' aria-hidden='true' />
      {index != null && <span className='q-num' aria-hidden='true'>{String(index).padStart(2, '0')}</span>}
      {icon && (
        <div className='q-icon' aria-hidden='true'>
          <span className='q-glow' />
          <img src={asset(icon)} alt='' loading='lazy' onError={onImgError} />
        </div>
      )}
      <div className='q-body'>
        <div className='q-tags'>
          {feature && <span className='q-feat'>{t('card.featured')}</span>}
          {g.topic && <span className='q-topic'>{t('topic.' + g.topic)}</span>}
        </div>
        <h3>{g.title}</h3>
        {g.desc && <p>{g.desc}</p>}
        <span className='q-go'><span>{t('card.read')}</span><i aria-hidden='true'>→</i></span>
      </div>
    </Link>
  );
}
