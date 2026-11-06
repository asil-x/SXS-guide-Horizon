import { Link } from 'react-router-dom';
import { asset, onImgError } from '../lib/img.js';

const isEmblem = (g) => /\.png$/.test(g.cover || '');

export default function GuideCard({ g, variant = 'cover' }) {
  if (variant === 'class') {
    return (
      <Link className='class-card' to={'/guides/' + g.slug}>
        <img src={asset(g.cover)} alt='' onError={onImgError} />
        <div>
          <h3>{g.short || g.title}</h3>
          <small>{g.title}</small>
        </div>
      </Link>
    );
  }
  if (variant === 'row') {
    return (
      <Link className='row-card' to={'/guides/' + g.slug}>
        <img src={asset(g.cover)} alt='' onError={onImgError} />
        <span>{g.title}</span>
        <span className='arrow'>→</span>
      </Link>
    );
  }
  return (
    <Link className='guide-card' to={'/guides/' + g.slug}>
      <div className={'thumb' + (isEmblem(g) ? ' emblem' : '')}>
        <img src={asset(g.cover)} alt='' loading='lazy' onError={onImgError} />
      </div>
      <div className='body'>
        <h3>{g.title}</h3>
      </div>
    </Link>
  );
}
