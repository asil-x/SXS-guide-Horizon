import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, NavLink, Link, Navigate, useLocation } from 'react-router-dom';
import { DB_KINDS, useGuides } from './lib/site.js';
import { asset, onImgError } from './lib/img.js';
import { LangSwitch, useT } from './i18n/index.jsx';
import { classColor, TOPIC_COLOR } from './components/GuideCard.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Guide = lazy(() => import('./pages/Guide.jsx'));
const Database = lazy(() => import('./pages/Database.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const About = lazy(() => import('./pages/About.jsx'));

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function BackToTop() {
  const t = useT();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return <button className={'to-top' + (show ? ' show' : '')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={t('toTop')}>↑</button>;
}

export default function App() {
  const t = useT();
  const { guidesIn } = useGuides();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const item = (g) => ({ to: '/guides/' + g.slug, label: g.short || g.title, icon: g.icon || g.cover, color: classColor(g) || TOPIC_COLOR[g.topic] });
  const tierList = guidesIn('guide').find((g) => g.slug === 'sword-x-staff-class-tier-list');
  const menus = [
    { label: t('nav.build'), items: [...guidesIn('class').map(item), ...(tierList ? [item(tierList)] : [])] },
    { label: t('nav.guides'), items: guidesIn('guide').map(item) },
    { label: t('nav.tools'), items: guidesIn('tool').map((g) => ({ ...item(g), label: g.title })) },
    { label: t('nav.data'), items: DB_KINDS.map((d) => ({ to: '/db/' + d.key, label: t('db.' + d.key), icon: d.icon })) },
  ];
  const inMenu = (m) => m.items.some((i) => i.to === pathname);

  return (
    <div className='app'>
      <header className='topbar'>
        <div className='topbar-inner'>
          <Link to='/' className='brand'>
            <img src='./img/logo.webp' alt='Sword x Staff Guide' />
            <span className='brand-text'><span>Sword <em>x</em> Staff</span><small className='brand-by'>by Guild Horizon</small></span>
          </Link>
          <LangSwitch />
          <button className='menu-toggle' onClick={() => setOpen(!open)} aria-expanded={open} aria-label={t('nav.menu')}>
            <span /><span /><span />
          </button>
          <nav className={'nav' + (open ? ' open' : '')}>
            {menus.map((m, k) => (
              <div className={'nav-drop' + (inMenu(m) ? ' active' : '')} key={k}>
                <button type='button' className='nav-drop-label'>{m.label}<span className='caret'>▾</span></button>
                <div className={'nav-drop-menu' + (m.items.length > 8 ? ' cols' : '')}>
                  {m.items.map((i) => (
                    <NavLink key={i.to} to={i.to} style={i.color ? { '--c': i.color } : undefined}>
                      {i.icon && <img src={asset(i.icon)} alt='' loading='lazy' onError={onImgError} />}
                      <span>{i.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
            <NavLink className='nav-link' to='/about'>{t('nav.about')}</NavLink>
            <NavLink className='nav-cta' to='/guides/sword-x-staff-codes'>Gift Code</NavLink>
          </nav>
        </div>
      </header>
      <ScrollTop />
      <main className='page'>
        <Suspense fallback={<div className='loading'>{t('loading')}</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/guides' element={<Navigate to='/' replace />} />
            <Route path='/guides/:slug' element={<Guide />} />
            <Route path='/db/:kind' element={<Database />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <BackToTop />
      <footer className='footer'>
        <p>{t('credit.compiled')} <b>Guild Horizon</b>, <span className='steal-warn'>{t('credit.steal')}</span>.</p>
        <p>{t('footer.fan')}</p>
      </footer>
    </div>
  );
}
