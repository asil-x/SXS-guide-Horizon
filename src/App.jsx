import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, NavLink, Link, Navigate, useLocation } from 'react-router-dom';
import { DB_KINDS, guidesIn } from './lib/site.js';

const Home = lazy(() => import('./pages/Home.jsx'));
const Guide = lazy(() => import('./pages/Guide.jsx'));
const Database = lazy(() => import('./pages/Database.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

const MENUS = [
  { label: 'Build', items: guidesIn('class').map((g) => ({ to: '/guides/' + g.slug, label: g.short || g.title })) },
  { label: 'Hướng dẫn', items: guidesIn('guide').map((g) => ({ to: '/guides/' + g.slug, label: g.title })) },
  { label: 'Tra cứu', items: guidesIn('tool').map((g) => ({ to: '/guides/' + g.slug, label: g.title })) },
  { label: 'Dữ liệu', items: DB_KINDS.map((d) => ({ to: '/db/' + d.key, label: d.label })) },
];

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return <button className={'to-top' + (show ? ' show' : '')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label='Lên đầu trang'>↑</button>;
}

export default function App() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  const inMenu = (m) => m.items.some((i) => i.to === pathname);

  return (
    <div className='app'>
      <header className='topbar'>
        <div className='topbar-inner'>
          <Link to='/' className='brand'>
            <img src='./img/lost-sword.webp' alt='' />
            <span>Sword <em>x</em> Staff</span>
          </Link>
          <button className='menu-toggle' onClick={() => setOpen(!open)} aria-expanded={open} aria-label='Menu'>
            <span /><span /><span />
          </button>
          <nav className={'nav' + (open ? ' open' : '')}>
            {MENUS.map((m) => (
              <div className={'nav-drop' + (inMenu(m) ? ' active' : '')} key={m.label}>
                <button type='button' className='nav-drop-label'>{m.label}<span className='caret'>▾</span></button>
                <div className='nav-drop-menu'>
                  {m.items.map((i) => <NavLink key={i.to} to={i.to}>{i.label}</NavLink>)}
                </div>
              </div>
            ))}
            <NavLink className='nav-cta' to='/guides/sword-x-staff-codes'>Gift Code</NavLink>
          </nav>
        </div>
      </header>
      <ScrollTop />
      <main className='page'>
        <Suspense fallback={<div className='loading'>Đang tải...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/guides' element={<Navigate to='/' replace />} />
            <Route path='/guides/:slug' element={<Guide />} />
            <Route path='/db/:kind' element={<Database />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <BackToTop />
      <footer className='footer'>
        Trang tổng hợp guide Sword x Staff do fan thực hiện. Sword x Staff và mọi tài nguyên liên quan thuộc về chủ sở hữu.
      </footer>
    </div>
  );
}
