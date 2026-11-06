import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DB_KINDS } from '../lib/site.js';
import { iconUrl, petUrl, onImgError } from '../lib/img.js';
import { loadData } from '../lib/data.js';
import { useLang, useT } from '../i18n/index.jsx';


const PAGE = 120;

function norm(kind, e, skillsById, gifts) {
  switch (kind) {
    case 'skills':
      return { id: e.id, name: e.name, icon: iconUrl(e.icon), sub: e.class, rarity: e.type, filters: { Class: e.class, Type: e.type }, raw: e, tags: e.tags };
    case 'fantomons':
      return { id: e.id, name: e.name, icon: petUrl(e.name), sub: '', rarity: e.rarity, filters: { Rarity: e.rarity }, raw: e };
    case 'companions':
      return { id: e.id, name: e.name, icon: iconUrl(e.icon), sub: e.gift_type, rarity: '', filters: { 'Gift type': e.gift_type }, raw: e };
    case 'items':
      return { id: e.id, name: e.name, icon: iconUrl(e.icon), sub: (e.tags || []).join(', '), rarity: e.rarity, filters: { Rarity: e.rarity, Tag: (e.tags || [])[0] }, raw: e };
    case 'relics':
      return { id: e.id, name: e.name, icon: iconUrl(e.icon), sub: e.element + ' · ' + e.region, rarity: e.rarity, filters: { Rarity: e.rarity, Element: e.element, Region: e.region }, raw: e };
    default:
      return { id: e.id, name: e.name, icon: iconUrl(e.icon), raw: e, filters: {} };
  }
}

function Detail({ kind, item, skillsById, onClose }) {
  const t = useT();
  const e = item.raw;
  const name = (id) => skillsById[id]?.name || String(id);
  return (
    <div className='overlay' onClick={onClose}>
      <div className='modal' onClick={(ev) => ev.stopPropagation()}>
        <button className='close' onClick={onClose} aria-label={t('close')}>x</button>
        <div className='modal-head'>
          <img src={item.icon} alt='' onError={onImgError} />
          <div>
            <h2>{e.name}</h2>
            <div>
              {item.rarity && <span className={'rarity ' + item.rarity}>{item.rarity}</span>}{' '}
              {(e.tags || e.stats || []).map((x) => <span className='tag' key={x}>{x}</span>)}
            </div>
          </div>
        </div>
        {e.description && <p>{e.description}</p>}
        {kind === 'skills' && (
          <>
            {e.cooldown != null && <p className='muted'>{t('db.cooldown', { n: e.cooldown })}</p>}
            {(e.keywords || []).map((k) => <div className='kw' key={k.name}><b>{k.name}</b>: {k.description}</div>)}
          </>
        )}
        {kind === 'fantomons' && e.role && <p className='muted'>{t('db.role')}: {t('role.' + e.role) === 'role.' + e.role ? e.role : t('role.' + e.role)}</p>}
        {kind === 'fantomons' && (e.skills || []).map((s) => (
          <div className='kw' key={s.id}>
            <b>{s.name}</b> <span className='tag'>{s.type}</span>
            <div>{s.description}</div>
            {(s.keywords || []).map((k) => <div key={k.name} className='muted'><b>{k.name}</b>: {k.description}</div>)}
          </div>
        ))}
        {kind === 'companions' && (
          <>
            <p className='muted'>{t('db.gift')}: {e.gift_type}{e.class ? ' · Class: ' + e.class : ''}</p>
            {e.unlock && <div className='kw'><b>{t('db.unlock')}</b>: {e.unlock}</div>}
            {(e.ranks || []).map((r) => (
              <div className='kw' key={r.rank}>
                <b>{r.rank}</b> · {r.class}
                <div>{t('db.skillsLabel')}: {(r.skills || []).map(name).join(', ')}</div>
                <div>Charm: {(r.charms || []).map(name).join(', ')}</div>
              </div>
            ))}
          </>
        )}
        {kind === 'items' && e.sources && e.sources.length > 0 && <div className='kw'><b>{t('source')}</b>: {e.sources.join(', ')}</div>}
        {kind === 'relics' && (
          <>
            <p className='muted'>{e.element} · {e.region}</p>
            {e.set_bonus && e.set_bonus.length > 0 && <div className='kw'><b>{t('db.setBonus')}</b>: {e.set_bonus.map((b) => b.join(' + ')).join(' | ')}</div>}
          </>
        )}
      </div>
    </div>
  );
}

export default function Database() {
  const { kind } = useParams();
  const { lang, t } = useLang();
  const meta = DB_KINDS.find((d) => d.key === kind);
  const [rows, setRows] = useState(null);
  const [skillsById, setSkillsById] = useState({});
  const [q, setQ] = useState('');
  const [filters, setFilters] = useState({});
  const [shown, setShown] = useState(PAGE);
  const [sel, setSel] = useState(null);

  useEffect(() => {
    if (!meta) return;
    setRows(null); setQ(''); setFilters({}); setShown(PAGE); setSel(null);
    loadData(kind, lang).then(setRows);
    if (kind === 'companions') loadData('skills', lang).then((list) => setSkillsById(Object.fromEntries(list.map((s) => [String(s.id).replace(/^skill_/, ''), s]))));
  }, [kind, lang]);

  const items = useMemo(() => (rows ? rows.map((e) => norm(kind, e)) : []), [rows, kind]);
  const options = useMemo(() => {
    const o = {};
    items.forEach((it) => Object.entries(it.filters).forEach(([k, v]) => { if (v) (o[k] ||= new Set()).add(v); }));
    return Object.fromEntries(Object.entries(o).filter(([, s]) => s.size > 1 && s.size < 40).map(([k, s]) => [k, [...s].sort()]));
  }, [items]);
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    return items.filter((it) => (!t || it.name.toLowerCase().includes(t)) && Object.entries(filters).every(([k, v]) => !v || it.filters[k] === v));
  }, [items, q, filters]);

  if (!meta) return <div className='empty'><h1>{t('db.notFound')}</h1></div>;
  if (!rows) return <div className='loading'>{t('loading')}</div>;
  return (
    <>
      <h1 className='page-title'>{t('db.title', { x: t('db.' + kind) })}</h1>
      <div className='chips'>
        {DB_KINDS.map((d) => <Link key={d.key} to={'/db/' + d.key} className={'chip' + (d.key === kind ? ' on' : '')}>{t('db.' + d.key)}</Link>)}
      </div>
      <div className='toolbar'>
        <input className='input' placeholder={t('db.search', { x: t('db.' + kind).toLowerCase() })} value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE); }} />
        {Object.entries(options).map(([k, vals]) => (
          <select key={k} className='select' value={filters[k] || ''} onChange={(e) => { setFilters({ ...filters, [k]: e.target.value }); setShown(PAGE); }}>
            <option value=''>{t('db.all', { x: t('f.' + k) })}</option>
            {vals.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        ))}
      </div>
      <p className='muted'>{t('db.count', { a: list.length, b: items.length })}</p>
      <div className='db-grid'>
        {list.slice(0, shown).map((it) => (
          <button key={it.id} className='db-card' onClick={() => setSel(it)}>
            <img src={it.icon} alt='' loading='lazy' onError={onImgError} />
            <span>{it.name}</span>
            {it.rarity && <span className={'rarity ' + it.rarity}>{it.rarity}</span>}
          </button>
        ))}
      </div>
      {shown < list.length && <p style={{ textAlign: 'center' }}><button className='btn' onClick={() => setShown(shown + PAGE)}>{t('db.more')}</button></p>}
      {['skills', 'fantomons', 'companions'].includes(kind) && (
        <p className='source'>{t('db.credit')} <a href='https://swordxstaff-compass.com/' target='_blank' rel='noreferrer'>Sword x Staff Compass</a>.</p>
      )}
      {sel && <Detail kind={kind} item={sel} skillsById={skillsById} onClose={() => setSel(null)} />}
    </>
  );
}
