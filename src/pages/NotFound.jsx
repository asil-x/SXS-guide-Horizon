import { Link } from 'react-router-dom';
import { useT } from '../i18n/index.jsx';

export default function NotFound() {
  const t = useT();
  return (
    <div className='empty'>
      <h1>{t('nf.title')}</h1>
      <p className='muted'>{t('nf.text')}</p>
      <Link className='btn' to='/'>{t('nf.home')}</Link>
    </div>
  );
}
