import { useState } from 'react';
import { Link } from 'react-router-dom';
import GuideCard from '../components/GuideCard.jsx';
import { CATEGORIES, DB_KINDS, GUIDES, guidesIn } from '../lib/site.js';
import { asset, onImgError } from '../lib/img.js';

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');

export default function Home() {
  const [q, setQ] = useState('');
  const t = norm(q.trim());
  const results = t ? GUIDES.filter((g) => norm(g.title + ' ' + (g.short || '')).includes(t)) : [];
  const [classes, guides, tools] = CATEGORIES.map((c) => guidesIn(c.key));

  return (
    <>
      <section className='hero'>
        <div className='hero-text'>
          <span className='eyebrow'>Guild Horizon</span>
          <h1>Sword x Staff Guide</h1>
          <p>Build class, hướng dẫn hệ thống và dữ liệu tra cứu cho Sword x Staff viết bởi Horizon.</p>
          <div className='search'>
            <input className='input' placeholder='Tìm hướng dẫn... (vd: knight, stamina, fantomon)' value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className='hero-stats'>
            <span><b>{GUIDES.length}</b> bài viết</span>
            <span><b>{classes.length}</b> class</span>
            <span><b>{DB_KINDS.length}</b> bộ dữ liệu</span>
          </div>
        </div>
        <img className='hero-img' src='./img/sword-x-staff-cover.webp' alt='Sword x Staff' />
      </section>

      {t ? (
        <section className='block'>
          <div className='block-head'><h2>Kết quả tìm kiếm</h2><span className='muted'>{results.length} bài</span></div>
          {results.length ? <div className='grid'>{results.map((g) => <GuideCard key={g.slug} g={g} />)}</div> : <p className='muted'>Không tìm thấy bài nào cho “{q}”.</p>}
        </section>
      ) : (
        <>
          <section className='block'>
            <div className='block-head'><h2>{CATEGORIES[0].label}</h2><span className='muted'>{CATEGORIES[0].desc}</span></div>
            <div className='class-grid'>{classes.map((g) => <GuideCard key={g.slug} g={g} variant='class' />)}</div>
          </section>

          <section className='block'>
            <div className='block-head'><h2>{CATEGORIES[1].label}</h2><span className='muted'>{CATEGORIES[1].desc}</span></div>
            <div className='grid'>{guides.map((g) => <GuideCard key={g.slug} g={g} />)}</div>
          </section>

          <div className='two-col'>
            <section className='block'>
              <div className='block-head'><h2>{CATEGORIES[2].label}</h2></div>
              <div className='rows'>{tools.map((g) => <GuideCard key={g.slug} g={g} variant='row' />)}</div>
            </section>
            <section className='block'>
              <div className='block-head'><h2>Cơ sở dữ liệu</h2></div>
              <div className='db-links'>
                {DB_KINDS.map((d) => (
                  <Link key={d.key} to={'/db/' + d.key} className='db-link'>
                    <img src={asset(d.icon)} alt='' onError={onImgError} />
                    <span>{d.label}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}
