import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import GuideCard from '../components/GuideCard.jsx';
import { CATEGORIES, DB_KINDS, useGuides } from '../lib/site.js';
import { useT } from '../i18n/index.jsx';
import { asset, onImgError } from '../lib/img.js';

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');

export default function Home() {
  const t = useT();
  const { GUIDES, guidesIn } = useGuides();
  useEffect(() => { document.title = t('site.title'); }, [t]);
  const [q, setQ] = useState('');
  const classRef = useRef(null);
  const nq = norm(q.trim());
  const results = nq ? GUIDES.filter((g) => norm(g.title + ' ' + (g.short || '') + ' ' + (g.desc || '') + ' ' + g.slug.replace(/-/g, ' ')).includes(nq)) : [];
  const [classes, guides, tools] = CATEGORIES.map((c) => guidesIn(c.key));

  return (
    <>
      <div className='hero-wrap'>
      <section className='hero'>
        <img className='hero-img' src='./img/sword-x-staff-cover.webp' alt='' fetchpriority='high' />
        <div className='hero-text'>
          <span className='eyebrow'>✦ Guild Horizon</span>
          <h1>Sword <em>x</em> Staff Guide</h1>
          <p>{t('home.lead')}</p>
          <div className='hero-cta'>
            <button type='button' className='btn primary' onClick={() => classRef.current?.scrollIntoView({ behavior: 'smooth' })}>{t('home.ctaBuild')}</button>
            <Link className='btn' to='/guides/sword-x-staff-codes'>{t('home.ctaCodes')}</Link>
          </div>
          <div className='search'>
            <svg className='search-icon' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' aria-hidden='true'><circle cx='11' cy='11' r='7' /><path d='m20 20-3.5-3.5' /></svg>
            <input className='input' placeholder={t('home.search')} aria-label={t('home.searchLabel')} value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className='hero-stats'>
            <span><b>{GUIDES.length}</b> {t('home.stat.guides')}</span>
            <span><b>{classes.length}</b> {t('home.stat.classes')}</span>
            <span><b>{DB_KINDS.length}</b> {t('home.stat.data')}</span>
          </div>
        </div>
      </section>
      </div>

      {nq ? (
        <section className='block'>
          <div className='block-head'><h2>{t('home.results')}</h2><span className='muted'>{t('home.count', { n: results.length })}</span></div>
          {results.length ? <div className='grid'>{results.map((g) => <GuideCard key={g.slug} g={g} />)}</div> : <p className='muted'>{t('home.none', { q })}</p>}
        </section>
      ) : (
        <>
          <section className='block' ref={classRef}>
            <div className='block-head'><h2>{t('cat.' + CATEGORIES[0].key)}</h2><span className='muted'>{t('cat.' + CATEGORIES[0].key + '.desc')}</span></div>
            <div className='class-grid'>{classes.map((g) => <GuideCard key={g.slug} g={g} variant='class' />)}</div>
          </section>

          <section className='block'>
            <div className='block-head'><h2>{t('cat.' + CATEGORIES[1].key)}</h2><span className='muted'>{t('cat.' + CATEGORIES[1].key + '.desc')}</span></div>
            <div className='grid'>{guides.map((g, i) => <GuideCard key={g.slug} g={g} feature={i === 0} />)}</div>
          </section>

          <div className='two-col'>
            <section className='block'>
              <div className='block-head'><h2>{t('cat.' + CATEGORIES[2].key)}</h2></div>
              <div className='rows'>{tools.map((g) => <GuideCard key={g.slug} g={g} variant='row' />)}</div>
            </section>
            <section className='block'>
              <div className='block-head'><h2>{t('home.db')}</h2></div>
              <div className='db-links'>
                {DB_KINDS.map((d) => (
                  <Link key={d.key} to={'/db/' + d.key} className='db-link'>
                    <img src={asset(d.icon)} alt='' onError={onImgError} />
                    <span>{t('db.' + d.key)}</span>
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
