import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GuideCard from '../components/GuideCard.jsx';
import { useGuides } from '../lib/site.js';
import { asset, cssUrl, onImgError } from '../lib/img.js';
import { useLang } from '../i18n/index.jsx';
import NotFound from './NotFound.jsx';

const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function useToc(ref, key) {
  const [toc, setToc] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const heads = [...root.querySelectorAll('h2, h3')].filter((h) => !h.closest('.tabs, details, .tip-card'));
    const used = new Set();
    heads.forEach((h, i) => {
      // Tiêu đề tiếng Thái không có chữ Latin nên slug rỗng: dùng số thứ tự.
      if (!h.id) h.id = slugify(h.textContent) || 'muc-' + (i + 1);
      if (used.has(h.id)) h.id += '-' + (i + 1);
      used.add(h.id);
    });
    setToc(heads.map((h) => ({ id: h.id, text: h.textContent, level: h.tagName === 'H3' ? 3 : 2 })));
    setActive(heads[0]?.id || null);
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (vis[0]) setActive(vis[0].target.id);
    }, { rootMargin: '-80px 0px -65% 0px' });
    heads.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [ref, key]);

  return { toc, active };
}

function Toc({ toc, active, label }) {
  const [open, setOpen] = useState(() => window.matchMedia('(min-width: 1100px)').matches);
  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (!window.matchMedia('(min-width: 1100px)').matches) setOpen(false);
  };
  return (
    <aside className='toc'>
      <details open={open} onToggle={(e) => setOpen(e.currentTarget.open)}>
        <summary>{label}</summary>
        <ol>
          {toc.map((h) => (
            <li key={h.id} className={'lv' + h.level + (active === h.id ? ' on' : '')}>
              <a href={'#' + h.id} onClick={(e) => go(e, h.id)}>{h.text}</a>
            </li>
          ))}
        </ol>
      </details>
    </aside>
  );
}

// Báo lại khi nội dung (tải lười với bản dịch) đã hiện ra để dựng mục lục.
function Ready({ onReady }) {
  useEffect(() => { onReady(); }, [onReady]);
  return null;
}

export default function Guide() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const { getGuide, guidesIn } = useGuides();
  const g = getGuide(slug);
  const ref = useRef(null);
  const [ready, setReady] = useState('');
  const key = lang + '/' + slug;
  const { toc, active } = useToc(ref, ready === key ? key : '');

  // Tiêu đề tab riêng cho từng bài.
  useEffect(() => {
    if (!g) return;
    const prev = document.title;
    document.title = g.title + ' | Sword x Staff Guide - Guild Horizon';
    return () => { document.title = prev; };
  }, [g]);

  if (!g) return <NotFound />;
  const siblings = guidesIn(g.category);
  const idx = siblings.findIndex((x) => x.slug === g.slug);
  const prev = siblings[idx - 1];
  const next = siblings[idx + 1];
  const related = siblings.filter((x) => x.slug !== g.slug).slice(0, 3);
  const emblem = /\.png$/.test(g.cover || '');
  const Page = g.Page;

  return (
    <div className={'guide-page cat-' + g.category}>
      <header className={'guide-hero' + (emblem ? ' emblem' : '')} style={{ '--cover': cssUrl(g.cover) }}>
        <div className='guide-hero-text'>
          <nav className='crumbs'>
            <Link to='/'>{t('guide.home')}</Link><span>/</span><span>{t('cat.' + g.category)}</span>
          </nav>
          <h1>{g.title}</h1>
          <div className='guide-credit'>{t('credit.by')} <b>Guild Horizon</b>, <span className='steal-warn'>{t('credit.steal')}</span></div>
        </div>
        {emblem && <img className='guide-emblem' src={asset(g.cover)} alt='' onError={onImgError} />}
      </header>

      <div className={'guide-layout' + (toc.length > 2 ? ' with-toc' : '')}>
        {toc.length > 2 && <Toc toc={toc} active={active} label={t('guide.toc')} />}
        <article className='guide-body' ref={ref} key={key}>
          {!g.translated && <div className='alert blue'>{t('guide.untranslated')}</div>}
          <Suspense fallback={<div className='loading'>{t('loading')}</div>}>
            <Page />
            <Ready onReady={() => setReady(key)} />
          </Suspense>
        </article>
      </div>

      {(prev || next) && (
        <nav className='pager'>
          {prev ? <Link to={'/guides/' + prev.slug}><small>{t('guide.prev')}</small><span>{prev.title}</span></Link> : <span />}
          {next ? <Link className='next' to={'/guides/' + next.slug}><small>{t('guide.next')}</small><span>{next.title}</span></Link> : <span />}
        </nav>
      )}

      {related.length > 0 && (
        <section className='block related'>
          <div className='block-head'><h2>{t('guide.related')}</h2></div>
          <div className='grid'>{related.map((x) => <GuideCard key={x.slug} g={x} />)}</div>
        </section>
      )}
    </div>
  );
}
