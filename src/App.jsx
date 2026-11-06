import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, NavLink, Link, Navigate, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const Guide = lazy(() => import('./pages/Guide.jsx'));
const Database = lazy(() => import('./pages/Database.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export const DB_KINDS = [
  { key: 'skills', label: 'Skills' },
  { key: 'fantomons', label: 'Fantomons' },
  { key: 'companions', label: 'Companions' },
  { key: 'items', label: 'Items' },
  { key: 'food', label: 'Food' },
  { key: 'ingredients', label: 'Ingredients' },
  { key: 'relics', label: 'Relics' },
];

export const TOOLS = [
  { slug: 'sword-x-staff-gear-enhancement-table', label: 'Gear enhancement table' },
  { slug: 'sword-x-staff-style-level-bonuses', label: 'Style bonuses table' },
  { slug: 'sword-x-staff-substat-table', label: 'Gear substat table' },
  { slug: 'sword-x-staff-destiny-fruit-drop-rates', label: 'Destiny Fruit drop rates' },
];

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className='app'>
      <header className='topbar'>
        <Link to='/' className='brand'>
          <img src='./img/lost-sword.webp' alt='' />
          <span>Sword <em>x</em> Staff</span>
        </Link>
        <nav className='nav'>
          <NavLink to='/guides/sword-x-staff-codes'>Codes</NavLink>
          <div className='nav-drop'>
            <span className='nav-drop-label'>Databases</span>
            <div className='nav-drop-menu'>
              {DB_KINDS.map((d) => (
                <NavLink key={d.key} to={'/db/' + d.key}>{d.label}</NavLink>
              ))}
            </div>
          </div>
          <div className='nav-drop'>
            <span className='nav-drop-label'>Tools</span>
            <div className='nav-drop-menu'>
              {TOOLS.map((t) => (
                <NavLink key={t.slug} to={'/guides/' + t.slug}>{t.label}</NavLink>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <ScrollTop />
      <main className='page'>
        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/guides' element={<Navigate to='/' replace />} />
            <Route path='/guides/:slug' element={<Guide />} />
            <Route path='/db/:kind' element={<Database />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <footer className='footer'>
        Fan-made archive of the Sword x Staff guides. Sword x Staff and all related assets belong to their owners.
      </footer>
    </div>
  );
}
