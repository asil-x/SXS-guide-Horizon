import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DB_KINDS } from '../App.jsx';
import { iconUrl, petUrl, onImgError } from '../lib/img.js';

const loaders = {
  skills: () => import('../data/skills.json'),
  fantomons: () => import('../data/fantomons.json'),
  companions: () => import('../data/companions.json'),
  items: () => import('../data/items.json'),
  food: () => import('../data/food.json'),
  ingredients: () => import('../data/ingredients.json'),
  relics: () => import('../data/relics.json'),
};

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
    case 'food':
      return { id: e.id, name: e.name, icon: iconUrl(e.icon), sub: (e.tags || []).join(', '), rarity: e.rarity, filters: { Rarity: e.rarity, Tag: (e.tags || [])[0] }, raw: e };
    case 'ingredients':
      return { id: e.id, name: e.name, icon: iconUrl(e.icon), sub: (e.regions || []).join(', '), rarity: e.rarity, filters: { Rarity: e.rarity, Region: (e.regions || [])[0] }, raw: e };
    case 'relics':
      return { id: e.id, name: e.name, icon: iconUrl(e.icon), sub: e.element + ' · ' + e.region, rarity: e.rarity, filters: { Rarity: e.rarity, Element: e.element, Region: e.region }, raw: e };
    default:
      return { id: e.id, name: e.name, icon: iconUrl(e.icon), raw: e, filters: {} };
  }
}

function Detail({ kind, item, skillsById, gifts, onClose }) {
  const e = item.raw;
  const name = (id) => skillsById[id]?.name || String(id);
  return (
    <div className='overlay' onClick={onClose}>
      <div className='modal' onClick={(ev) => ev.stopPropagation()}>
        <button className='close' onClick={onClose} aria-label='Close'>x</button>
        <div className='modal-head'>
          <img src={item.icon} alt='' onError={onImgError} />
          <div>
            <h2>{e.name}</h2>
            <div>
              {item.rarity && <span className={'rarity ' + item.rarity}>{item.rarity}</span>}{' '}
              {(e.tags || e.stats || []).map((t) => <span className='tag' key={t}>{t}</span>)}
            </div>
          </div>
        </div>
        {e.description && <p>{e.description}</p>}
        {kind === 'skills' && (
          <>
            {e.cooldown != null && <p className='muted'>Cooldown: {e.cooldown} turn(s)</p>}
            {(e.keywords || []).map((k) => <div className='kw' key={k.name}><b>{k.name}</b>: {k.description}</div>)}
          </>
        )}
        {kind === 'fantomons' && (e.skills || []).map((s) => (
          <div className='kw' key={s.id}>
            <b>{s.name}</b> <span className='tag'>{s.type}</span>
            <div>{s.description}</div>
            {(s.keywords || []).map((k) => <div key={k.name} className='muted'><b>{k.name}</b>: {k.description}</div>)}
          </div>
        ))}
        {kind === 'companions' && (
          <>
            <p className='muted'>Favorite gift type: {e.gift_type}</p>
            {(e.ranks || []).map((r) => (
              <div className='kw' key={r.rank}>
                <b>{r.rank}</b> · {r.class}
                <div>Skills: {(r.skills || []).map(name).join(', ')}</div>
                <div>Charms: {(r.charms || []).map(name).join(', ')}</div>
              </div>
            ))}
          </>
        )}
        {(kind === 'items' || kind === 'food') && (
          <>
            {e.effects && <div className='kw'><b>In battle</b>: {e.effects.battle} ({e.effects.fights} fight(s))<br /><b>Permanent</b>: {e.effects.permanent}</div>}
            {e.sources && e.sources.length > 0 && <div className='kw'><b>Sources</b>: {e.sources.join(', ')}</div>}
          </>
        )}
        {kind === 'ingredients' && (e.sources || []).map((s, i) => (
          <div className='kw' key={i}>{s.type} · {s.node} · {s.chance}% · x{s.amount}</div>
        ))}
        {kind === 'relics' && (
          <>
            <p className='muted'>{e.element} · {e.region}</p>
            {e.set_bonus && e.set_bonus.length > 0 && <div className='kw'><b>Set bonus</b>: {e.set_bonus.map((b) => b.join(' + ')).join(' | ')}</div>}
          </>
        )}
      </div>
    </div>
  );
}

export default function Database() {
  const { kind } = useParams();
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
    loaders[kind]().then((m) => setRows(m.default));
    if (kind === 'companions') import('../data/skills.json').then((m) => setSkillsById(Object.fromEntries(m.default.map((s) => [String(s.id).replace(/^skill_/, ''), s]))));
  }, [kind]);

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

  if (!meta) return <div className='guide'><h1>Database not found</h1></div>;
  if (!rows) return <div className='loading'>Loading...</div>;
  return (
    <>
      <h1>{meta.label} database</h1>
      <div className='chips'>
        {DB_KINDS.map((d) => <Link key={d.key} to={'/db/' + d.key} className={'chip' + (d.key === kind ? ' on' : '')}>{d.label}</Link>)}
      </div>
      <div className='toolbar'>
        <input className='input' placeholder={'Search ' + meta.label.toLowerCase() + '...'} value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE); }} />
        {Object.entries(options).map(([k, vals]) => (
          <select key={k} className='select' value={filters[k] || ''} onChange={(e) => { setFilters({ ...filters, [k]: e.target.value }); setShown(PAGE); }}>
            <option value=''>{k}: all</option>
            {vals.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        ))}
      </div>
      <p className='muted'>{list.length} of {items.length} entries</p>
      <div className='db-grid'>
        {list.slice(0, shown).map((it) => (
          <button key={it.id} className='db-card' onClick={() => setSel(it)}>
            <img src={it.icon} alt='' loading='lazy' onError={onImgError} />
            <span>{it.name}</span>
            {it.rarity && <span className={'rarity ' + it.rarity}>{it.rarity}</span>}
          </button>
        ))}
      </div>
      {shown < list.length && <p style={{ textAlign: 'center' }}><button className='btn' onClick={() => setShown(shown + PAGE)}>Show more</button></p>}
      {sel && <Detail kind={kind} item={sel} skillsById={skillsById} onClose={() => setSel(null)} />}
    </>
  );
}
