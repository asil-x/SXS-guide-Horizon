import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, NavLink, Link, Navigate, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const Guide = lazy(() => import('./pages/Guide.jsx'));
const Database = lazy(() => import('./pages/Database.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export const DB_KINDS = [
  { key: 'skills', label: 'Kỹ năng' },
  { key: 'fantomons', label: 'Fantomon' },
  { key: 'companions', label: 'Đồng hành' },
  { key: 'items', label: 'Vật phẩm' },
  { key: 'food', label: 'Món ăn' },
  { key: 'ingredients', label: 'Nguyên liệu' },
  { key: 'relics', label: 'Di vật' },
];

export const TOOLS = [
  { slug: 'sword-x-staff-gear-enhancement-table', label: 'Bảng cường hoá trang bị' },
  { slug: 'sword-x-staff-style-level-bonuses', label: 'Bảng bonus Style' },
  { slug: 'sword-x-staff-substat-table', label: 'Bảng chỉ số phụ trang bị' },
  { slug: 'sword-x-staff-destiny-fruit-drop-rates', label: 'Tỉ lệ rơi Destiny Fruit' },
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
          <NavLink to='/guides/sword-x-staff-codes'>Code</NavLink>
          <div className='nav-drop'>
            <span className='nav-drop-label'>Dữ liệu</span>
            <div className='nav-drop-menu'>
              {DB_KINDS.map((d) => (
                <NavLink key={d.key} to={'/db/' + d.key}>{d.label}</NavLink>
              ))}
            </div>
          </div>
          <div className='nav-drop'>
            <span className='nav-drop-label'>Công cụ</span>
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
      <footer className='footer'>
        Trang tổng hợp guide Sword x Staff do fan thực hiện. Sword x Staff và mọi tài nguyên liên quan thuộc về chủ sở hữu.
      </footer>
    </div>
  );
}
