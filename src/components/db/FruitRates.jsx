// Tỉ lệ rơi Destiny Fruit (trước là một bài hướng dẫn, nay nằm trong phần Dữ liệu).
// Nội dung: ./fruit/vi.jsx và ./fruit/en.jsx.
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/index.jsx';
import Vi from './fruit/vi.jsx';
import En from './fruit/en.jsx';

export default function FruitRates() {
  const { lang, t } = useLang();
  const Page = lang === 'vi' ? Vi : En;
  return (
    <article className='guide-body'>
      <Page />
      <p className='muted'>{t('fr.guide')} <Link to='/guides/sword-x-staff-destiny-fruits'>{t('fr.guideLink')}</Link>.</p>
    </article>
  );
}
