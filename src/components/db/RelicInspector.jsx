// Tra cứu relic: lọc theo kingdom, hệ, độ hiếm, nguồn, bonus bộ; xem chỉ số theo level và sao, bộ và nguồn rơi.
// Dữ liệu: src/lib/db/relics.json (số liệu game, tải khi mở trang).
import { useEffect, useMemo, useState } from 'react';
import { asset, onImgError } from '../../lib/img.js';
import { useT } from '../../i18n/index.jsx';

import { ELEM_COLOR, QUALITY, useTr } from './common.jsx';
const Q_ORDER = ['Gold', 'Orange', 'Purple', 'Blue'];
const PAGE = 120;

const num = (n) => (Number.isInteger(n) ? n.toLocaleString('en-US') : (Math.round(n * 100) / 100).toLocaleString('en-US'));

function useRelicData() {
  const [D, setD] = useState(null);
  useEffect(() => { import('../../lib/db/relics.json').then((m) => setD(m.default || m)); }, []);
  return D;
}

/** Giá trị một chỉ số: [nhãn, chuỗi giá trị]. */
function fmtProp(D, prop, raw, tr = (s) => s) {
  const [en, pct] = D.props[prop] || [prop, 0];
  const label = tr(en);
  if (raw == null) return [label, ''];
  return [label, '+' + num(pct ? raw / 100 : raw) + (pct ? '%' : '')];
}
const levelsOf = (D, pid) => Object.keys(D.values[pid] || {}).map(Number).sort((a, b) => a - b);
function levelStat(D, r, prop, level) {
  const ls = levelsOf(D, r.pid);
  const lv = Math.min(Math.max(level, ls[0] || 1), ls[ls.length - 1] || 1);
  return (D.values[r.pid] || {})[lv]?.[prop] ?? null;
}
function starStat(D, r, prop, level, star) {
  const base = levelStat(D, r, prop, level);
  if (base == null) return [null, 1];
  const ladder = D.star[r.sid]?.[prop];
  const mult = ladder ? ladder[Math.min(star, ladder.length - 1)] : 1;
  const pct = (D.props[prop] || [])[1];
  return [pct ? base * mult : Math.floor(base * mult), mult];
}

function Detail({ D, id, level, star, setLevel, setStar, onPick, onSet, onClose }) {
  const t = useT();
  const tr = useTr();
  const r = D.relics[id];
  const set = r.set ? D.sets[r.set] : null;
  const maxLv = levelsOf(D, r.pid).slice(-1)[0] || 1;
  const kingdomLabel = (k) => D.kingdoms.find((x) => x.id === k)?.label || k;
  return (
    <div className='overlay' onClick={onClose}>
      <div className='modal ri-modal' onClick={(e) => e.stopPropagation()} style={{ '--e': ELEM_COLOR[r.e] }}>
        <button className='close' onClick={onClose} aria-label={t('close')}>x</button>
        <div className='modal-head'>
          <img className={'ri-icon q-' + r.q} src={asset(r.icon)} alt='' onError={onImgError} />
          <div>
            <h2>{r.n}</h2>
            <div className='ri-tags'>
              <span className={'ri-q q-' + r.q}>{QUALITY[r.q] || r.q}</span>
              <span className='ri-el'>{t('el.' + r.e)}</span>
              {r.unreleased && <span className='tag'>{t('ri.unreleased')}</span>}
            </div>
          </div>
        </div>

        <div className='ri-controls'>
          <label>{t('ri.level')} <b>{Math.min(level, maxLv)}</b><input type='range' min='1' max={maxLv} value={Math.min(level, maxLv)} onChange={(e) => setLevel(Number(e.target.value))} /></label>
          <div className='ri-stars' role='group' aria-label={t('ri.star')}>
            {[0, 1, 2, 3, 4, 5, 6].map((s) => <button key={s} type='button' className={s === star ? 'on' : ''} onClick={() => setStar(s)}>{s}★</button>)}
          </div>
        </div>

        <div className='ri-sec'>
          <h4>{t('ri.levelStat')}</h4>
          {r.lp.map((p) => { const [l, v] = fmtProp(D, p, levelStat(D, r, p, level), tr); return <div key={p} className='ri-row'><span>{l}</span><b>{v}</b></div>; })}
          {r.task && (
            <p className='ri-task'>
              {tr(r.task.d).replace('{0}', r.task.per).replace('{1}', r.lp.map((p) => fmtProp(D, p, levelStat(D, r, p, level), tr).join(' ')).join(', '))}
              {r.task.hits.length > 0 && <span className='muted'> {t('ri.maxHits', { n: r.task.hits[Math.min(level, r.task.hits.length) - 1] })}</span>}
            </p>
          )}
        </div>
        {r.sp.length > 0 && (
          <div className='ri-sec'>
            <h4>{t('ri.starStat')}</h4>
            {r.sp.map((p) => {
              const [raw, mult] = starStat(D, r, p, level, star);
              const [l, v] = fmtProp(D, p, raw, tr);
              return <div key={p} className='ri-row'><span>{l}</span><b>{v}{mult !== 1 && <small className='muted'> ×{num(mult)}</small>}</b></div>;
            })}
          </div>
        )}
        {set && (
          <div className='ri-sec'>
            <h4>{t('ri.set')}: <button type='button' className='ri-link' onClick={() => onSet(r.set)}>{set.n}</button></h4>
            <div className='ri-members'>
              {set.m.map((m) => D.relics[m] && (
                <button key={m} type='button' className={m === id ? 'on' : ''} onClick={() => onPick(m)} title={D.relics[m].n}>
                  <img className={'q-' + D.relics[m].q} src={asset(D.relics[m].icon)} alt='' onError={onImgError} /><span>{D.relics[m].n}</span>
                </button>
              ))}
            </div>
            {set.t.map(([p, v], i) => { const [l, s] = fmtProp(D, p, v, tr); return <div key={i} className='ri-row'><span>{tr(D.tiers[i])}</span><b>{l} {s}</b></div>; })}
          </div>
        )}
        <div className='ri-sec'>
          <h4>{t('ri.source')}</h4>
          {(r.k || []).length > 0 && <div className='ri-row'><span>{t('ri.src.gacha')}</span><b>{r.k.map(kingdomLabel).join(', ')}</b></div>}
          {r.area && <div className='ri-row'><span>{t('ri.src.area')}</span><b>{r.area}</b></div>}
          {r.src && <div className='ri-row'><span>{t('ri.src.special')}</span><b>{tr(r.src[1])}</b></div>}
          {!r.k && !r.area && !r.src && <p className='muted'>{t('ri.src.none')}</p>}
        </div>
      </div>
    </div>
  );
}

/** Trang tra cứu relic trong phần Dữ liệu. */
export default function RelicInspector() {
  const t = useT();
  const tr = useTr();
  const D = useRelicData();
  const [q, setQ] = useState('');
  const [f, setF] = useState({ kingdom: '', element: '', quality: '', source: '', bonus: '', set: '' });
  const [showAll, setShowAll] = useState(false);
  const [shown, setShown] = useState(PAGE);
  const [sel, setSel] = useState(null);
  const [level, setLevel] = useState(28);
  const [star, setStar] = useState(0);

  const list = useMemo(() => {
    if (!D) return [];
    const s = q.trim().toLowerCase();
    const inKingdom = (r) => !f.kingdom || (f.kingdom === 'special' ? !!r.src : (r.k || []).some((k) => k.split('-')[0] === f.kingdom));
    const bySource = (r) => !f.source || (f.source === 'gacha' ? !!r.k : f.source === 'area' ? !!r.area : !!r.src);
    const byBonus = (r) => !f.bonus || (r.set && D.sets[r.set]?.t.some(([p]) => p === f.bonus));
    return Object.entries(D.relics)
      .filter(([, r]) => (showAll || !r.unreleased) && (!s || r.n.toLowerCase().includes(s)) && (!f.element || r.e === f.element) && (!f.quality || r.q === f.quality)
        && (!f.set || r.set === f.set) && inKingdom(r) && bySource(r) && byBonus(r))
      .sort((a, b) => Q_ORDER.indexOf(a[1].q) - Q_ORDER.indexOf(b[1].q) || Number(a[0]) - Number(b[0]));
  }, [D, q, f, showAll]);

  if (!D) return <div className='loading'>{t('loading')}</div>;
  const kingdomOpts = [...new Map(D.kingdoms.map((k) => [k.id.split('-')[0], k.region])).entries()];
  const bonusOpts = [...new Set(Object.values(D.sets).flatMap((s) => s.t.map(([p]) => p)))];
  const setF1 = (k, v) => { setF((x) => ({ ...x, [k]: v })); setShown(PAGE); };
  const total = Object.values(D.relics).filter((r) => showAll || !r.unreleased).length;

  return (
    <>
      <div className='toolbar'>
        <input className='input' placeholder={t('db.search', { x: t('db.relics').toLowerCase() })} value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE); }} />
        <select className='select' value={f.kingdom} onChange={(e) => setF1('kingdom', e.target.value)}>
          <option value=''>{t('ri.f.kingdom')}</option>
          {kingdomOpts.map(([id, name]) => <option key={id} value={id}>{name}</option>)}
          <option value='special'>{t('ri.src.special')}</option>
        </select>
        <select className='select' value={f.element} onChange={(e) => setF1('element', e.target.value)}>
          <option value=''>{t('db.all', { x: t('f.Element') })}</option>
          {Object.keys(ELEM_COLOR).map((e) => <option key={e} value={e}>{t('el.' + e)}</option>)}
        </select>
        <select className='select' value={f.quality} onChange={(e) => setF1('quality', e.target.value)}>
          <option value=''>{t('db.all', { x: t('f.Rarity') })}</option>
          {Q_ORDER.map((x) => <option key={x} value={x}>{QUALITY[x]}</option>)}
        </select>
        <select className='select' value={f.source} onChange={(e) => setF1('source', e.target.value)}>
          <option value=''>{t('ri.f.source')}</option>
          <option value='gacha'>{t('ri.src.gacha')}</option>
          <option value='area'>{t('ri.src.area')}</option>
          <option value='special'>{t('ri.src.special')}</option>
        </select>
        <select className='select' value={f.bonus} onChange={(e) => setF1('bonus', e.target.value)}>
          <option value=''>{t('ri.f.bonus')}</option>
          {bonusOpts.map((p) => <option key={p} value={p}>{fmtProp(D, p, null, tr)[0]}{(D.props[p] || [])[1] ? ' %' : ''}</option>)}
        </select>
      </div>
      <div className='ri-bar'>
        {f.set && <button type='button' className='chip on' onClick={() => setF1('set', '')}>{t('ri.set')}: {D.sets[f.set]?.n} ✕</button>}
        <label className='ri-check'><input type='checkbox' checked={showAll} onChange={(e) => setShowAll(e.target.checked)} /> {t('ri.showUnreleased')}</label>
        <span className='muted'>{t('db.count', { a: list.length, b: total })} · {t('ri.build', { b: D.build })}</span>
      </div>
      <div className='db-grid ri-grid'>
        {list.slice(0, shown).map(([id, r]) => (
          <button key={id} className={'db-card ri-card q-' + r.q} onClick={() => setSel(id)} style={{ '--e': ELEM_COLOR[r.e] }}>
            <img src={asset(r.icon)} alt='' loading='lazy' onError={onImgError} />
            <span>{r.n}</span>
            <small className='ri-sub'><i />{QUALITY[r.q]}{r.set ? ' · ' + D.sets[r.set]?.n : ''}</small>
          </button>
        ))}
      </div>
      {shown < list.length && <p style={{ textAlign: 'center' }}><button className='btn' onClick={() => setShown(shown + PAGE)}>{t('db.more')}</button></p>}
      {sel && (
        <Detail D={D} id={sel} level={level} star={star} setLevel={setLevel} setStar={setStar} onPick={setSel}
          onSet={(s) => { setF1('set', s); setSel(null); }} onClose={() => setSel(null)} />
      )}
    </>
  );
}
