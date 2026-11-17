import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GuideCard from '../components/GuideCard.jsx';
import { CATEGORIES, DB_KINDS, useGuides } from '../lib/site.js';
import { useT } from '../i18n/index.jsx';
import { asset, onImgError } from '../lib/img.js';

// Tạm ẩn nút Discord trên trang chủ; đổi thành true để hiện lại.
const SHOW_DISCORD = false;

const norm =(s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');

export default function Home() {
  const t = useT();
  const { GUIDES, guidesIn } = useGuides();
  useEffect(() => { document.title = t('site.title'); }, [t]);
  const [q, setQ] = useState('');
  const nq = norm(q.trim());
  const results = nq ? GUIDES.filter((g) => norm(g.title + ' ' + (g.short || '') + ' ' + (g.desc || '') + ' ' + g.slug.replace(/-/g, ' ')).includes(nq)) : [];
  const [classes, allGuides] = CATEGORIES.map((c) => guidesIn(c.key));
  // Gift Code đã có nút riêng ở banner và menu nên không lặp lại trong lưới.
  const guides = allGuides.filter((g) => g.slug !== 'sword-x-staff-codes');
  // Công cụ nổi bật đầu trang (máy tính dùng nhiều trong mùa).
  const FEATURED = ['sword-x-staff-primostar-calculator', 'sword-x-staff-exp-calculator'];
  const featured = FEATURED.map((slug) => GUIDES.find((g) => g.slug === slug)).filter(Boolean);
  // Hướng dẫn: mọi thẻ cùng cỡ, lọc nhanh theo chủ đề.
  const [topic, setTopic] = useState('');
  const topics = [...new Set(guides.map((g) => g.topic).filter(Boolean))];
  const shownGuides = topic ? guides.filter((g) => g.topic === topic) : guides;

  return (
    <>
      <div className='hero-wrap'>
      <section className='hero'>
        <img className='hero-img' src='/img/sword-x-staff-cover.webp' alt='' fetchpriority='high' />
        <div className='hero-text'>
          <span className='eyebrow'>✦ Guild Horizon</span>
          <h1>Sword <em>x</em> Staff Guide</h1>
          <p>{t('home.lead')}</p>
          <div className='hero-cta'>
            {SHOW_DISCORD && <a className='btn discord' href='https://discord.gg/VRTFppZnT' target='_blank' rel='noreferrer'>
              <svg viewBox='0 0 24 24' width='20' height='20' fill='currentColor' aria-hidden='true'><path d='M20.32 4.37A19.8 19.8 0 0 0 15.39 2.8a13.7 13.7 0 0 0-.63 1.3 18.4 18.4 0 0 0-5.52 0 13 13 0 0 0-.64-1.3 19.7 19.7 0 0 0-4.93 1.53C.53 9.05-.32 13.6.1 18.1a19.9 19.9 0 0 0 6.04 3.05c.49-.66.92-1.37 1.3-2.1a12.9 12.9 0 0 1-2.04-.98l.5-.39a14.2 14.2 0 0 0 12.2 0l.5.39c-.65.39-1.33.71-2.04.98.37.73.81 1.44 1.3 2.1a19.8 19.8 0 0 0 6.04-3.05c.5-5.2-.84-9.72-3.58-13.73ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.96 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42Z' /></svg>
              {t('home.ctaDiscord')}
            </a>}
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
          {featured.length > 0 && (
            <section className='block'>
              <div className='block-head'><h2>{t('home.toolsNow')}</h2><span className='muted'>{t('home.toolsNow.desc')}</span></div>
              <div className='tool-feature-grid'>
                {featured.map((g) => (
                  <Link key={g.slug} className='tool-feature' to={'/guides/' + g.slug}>
                    <img src={asset(g.icon || g.cover)} alt='' onError={onImgError} />
                    <span className='tf-text'><b>{g.title}</b><small>{g.desc}</small></span>
                    <span className='tf-go'>{t('home.openTool')} →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className='block'>
            <div className='block-head'><h2>{t('cat.' + CATEGORIES[0].key)}</h2><span className='muted'>{t('cat.' + CATEGORIES[0].key + '.desc')}</span></div>
            <div className='class-grid'>{classes.map((g) => <GuideCard key={g.slug} g={g} variant='class' />)}</div>
          </section>

          <section className='block'>
            <div className='block-head'><h2>{t('cat.' + CATEGORIES[1].key)}</h2><span className='muted'>{t('cat.' + CATEGORIES[1].key + '.desc')}</span></div>
            <div className='chips topic-chips'>
              <button type='button' className={'chip' + (!topic ? ' on' : '')} onClick={() => setTopic('')}>{t('home.allTopics')} ({guides.length})</button>
              {topics.map((x) => <button key={x} type='button' className={'chip' + (topic === x ? ' on' : '')} onClick={() => setTopic(x)}>{t('topic.' + x)} ({guides.filter((g) => g.topic === x).length})</button>)}
            </div>
            <div className='quest-grid even'>{shownGuides.map((g, i) => <GuideCard key={g.slug} g={g} index={i + 1} />)}</div>
          </section>

          <div>
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
