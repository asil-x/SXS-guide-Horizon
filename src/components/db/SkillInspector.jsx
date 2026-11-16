// Tra cứu skill: dữ liệu game mới (độ hiếm, hệ, khoảng level, class học / dùng được, build đề xuất)
// ghép với dữ liệu sẵn có của repo (mô tả đã dịch, keyword, cooldown). Dữ liệu: src/lib/db/skills.json.
import { useEffect, useMemo, useState } from 'react';
import { asset, iconUrl, onImgError } from '../../lib/img.js';
import { loadData } from '../../lib/data.js';
import { useLang, useT } from '../../i18n/index.jsx';
import { ELEM_COLOR, GameText, QUALITY, Q_ORDER, useJson, useTr } from './common.jsx';

const PAGE = 120;
// Skill có độ hiếm xếp trước, skill quái (không có độ hiếm) xuống cuối.
const qRank = (x) => (x.q ? Q_ORDER.indexOf(x.q) : 99);

function Detail({ s, G, onClose }) {
  const t = useT();
  const tr = useTr();
  const learnBy = G.professions.filter((p) => p.learns.includes(Number(s.id)));
  const useBy = G.professions.filter((p) => p.allowed.includes(Number(s.id)));
  const recs = Object.entries(G.recommended).flatMap(([pid, builds]) =>
    builds.filter((b) => b.a.includes(Number(s.id)) || b.p.includes(Number(s.id))).map((b) => ({ p: G.professions.find((x) => x.id === pid), core: b.core.includes(Number(s.id)) })));
  const Prof = ({ p, extra }) => p && (
    <span className='sk-prof' style={{ '--c': p.color }} title={p.n}>
      {p.emblem && <img src={asset(p.emblem)} alt='' onError={onImgError} />}{p.n}{extra}
    </span>
  );
  return (
    <div className='overlay' onClick={onClose}>
      <div className='modal ri-modal' onClick={(e) => e.stopPropagation()} style={{ '--e': ELEM_COLOR[(s.el || [])[0]] }}>
        <button className='close' onClick={onClose} aria-label={t('close')}>x</button>
        <div className='modal-head'>
          <img className={'ri-icon q-' + s.q} src={s.icon} alt='' onError={onImgError} />
          <div>
            <h2>{s.n}</h2>
            <div className='ri-tags'>
              <span className='tag'>{s.k}</span>
              {s.q && <span className={'ri-q q-' + s.q}>{QUALITY[s.q] || s.q}</span>}
              {(s.el || []).map((e) => <span key={e} className='ri-el' style={{ '--e': ELEM_COLOR[e] }}>{t('el.' + e)}</span>)}
              {s.monster && <span className='tag'>Monster</span>}
            </div>
          </div>
        </div>
        <div className='ri-sec'>
          {s.desc ? <p className='sk-desc'>{s.desc}</p> : <p className='sk-desc'><GameText text={tr(s.d)} /></p>}
          {(s.tags || []).length > 0 && <div className='ri-tags'>{s.tags.map((x) => <span key={x} className='tag'>{x}</span>)}</div>}
          {s.cd != null && <p className='muted'>{t('db.cooldown', { n: s.cd })}</p>}
          {s.lv && <div className='ri-row'><span>{t('sk.levels')}</span><b>{s.lv[0]} → {s.lv[1]}</b></div>}
        </div>
        {(s.kw || []).length > 0 && <div className='ri-sec'>{s.kw.map((k) => <div key={k.name} className='sk-kw'><b>{k.name}</b>: {k.description}</div>)}</div>}
        {learnBy.length > 0 && <div className='ri-sec'><h4>{t('sk.learn')}</h4><div className='sk-profs'>{learnBy.map((p) => <Prof key={p.id} p={p} />)}</div></div>}
        {useBy.length > 0 && <div className='ri-sec'><h4>{t('sk.use', { n: useBy.length })}</h4><div className='sk-profs'>{useBy.map((p) => <Prof key={p.id} p={p} />)}</div></div>}
        {recs.length > 0 && (
          <div className='ri-sec'>
            <h4>{t('sk.recs')}</h4>
            <div className='sk-profs'>{recs.map((r, i) => <Prof key={i} p={r.p} extra={r.core ? <b className='sk-core'>{t('sk.core')}</b> : null} />)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

/** Trang tra cứu skill trong phần Dữ liệu. */
export default function SkillInspector() {
  const t = useT();
  const { lang } = useLang();
  const G = useJson(() => import('../../lib/db/skills.json'));
  const [repo, setRepo] = useState(null);
  const [q, setQ] = useState('');
  const [f, setF] = useState({ prof: '', kind: '', quality: '', el: '' });
  const [shown, setShown] = useState(PAGE);
  const [sel, setSel] = useState(null);
  useEffect(() => { loadData('skills', lang).then(setRepo); }, [lang]);

  const all = useMemo(() => {
    if (!G || !repo) return [];
    const byId = Object.fromEntries(repo.map((x) => [String(x.id), x]));
    const out = Object.entries(G.skills).map(([id, x]) => {
      const r = byId[id];
      return { id, n: x.n, k: x.k, q: x.q, el: x.el, lv: x.lv, d: x.d, icon: asset(x.icon), desc: r?.description, kw: r?.keywords, cd: r?.cooldown, tags: r?.tags || x.tags };
    });
    // Skill quái và skill cũ chỉ có trong dữ liệu repo.
    repo.filter((x) => !G.skills[String(x.id)]).forEach((x) => out.push({ id: String(x.id), n: x.name, k: x.type, desc: x.description, kw: x.keywords, cd: x.cooldown, tags: x.tags, icon: iconUrl(x.icon), monster: x.class === 'Monster' }));
    return out;
  }, [G, repo]);
  const list = useMemo(() => {
    if (!G) return [];
    const s = q.trim().toLowerCase();
    const prof = f.prof && G.professions.find((p) => p.id === f.prof);
    return all.filter((x) => (!s || x.n.toLowerCase().includes(s)) && (!f.kind || x.k === f.kind) && (!f.quality || x.q === f.quality)
      && (!f.el || (x.el || []).includes(f.el)) && (!prof || prof.allowed.includes(Number(x.id))))
      .sort((a, b) => qRank(a) - qRank(b) || a.n.localeCompare(b.n));
  }, [all, q, f, G]);

  if (!G || !repo) return <div className='loading'>{t('loading')}</div>;
  const setF1 = (k, v) => { setF((x) => ({ ...x, [k]: v })); setShown(PAGE); };
  return (
    <>
      <div className='toolbar'>
        <input className='input' placeholder={t('db.search', { x: t('db.skills').toLowerCase() })} value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE); }} />
        <select className='select' value={f.prof} onChange={(e) => setF1('prof', e.target.value)}>
          <option value=''>{t('db.all', { x: t('f.Class') })}</option>
          {G.professions.map((p) => <option key={p.id} value={p.id}>{p.n}</option>)}
        </select>
        <select className='select' value={f.kind} onChange={(e) => setF1('kind', e.target.value)}>
          <option value=''>{t('db.all', { x: t('f.Type') })}</option>
          <option value='Technique'>Technique</option><option value='Charm'>Charm</option>
        </select>
        <select className='select' value={f.quality} onChange={(e) => setF1('quality', e.target.value)}>
          <option value=''>{t('db.all', { x: t('f.Rarity') })}</option>
          {['Gold', 'Orange', 'Purple', 'Blue'].map((x) => <option key={x} value={x}>{QUALITY[x]}</option>)}
        </select>
        <select className='select' value={f.el} onChange={(e) => setF1('el', e.target.value)}>
          <option value=''>{t('db.all', { x: t('f.Element') })}</option>
          {Object.keys(ELEM_COLOR).map((e) => <option key={e} value={e}>{t('el.' + e)}</option>)}
        </select>
      </div>
      <div className='ri-bar'><span className='muted'>{t('db.count', { a: list.length, b: all.length })} · {t('ri.build', { b: G.build })}</span></div>
      <div className='db-grid ri-grid'>
        {list.slice(0, shown).map((x) => (
          <button key={x.id} className={'db-card ri-card q-' + x.q} onClick={() => setSel(x)} style={{ '--e': ELEM_COLOR[(x.el || [])[0]] || 'var(--line2)' }}>
            <img src={x.icon} alt='' loading='lazy' onError={onImgError} />
            <span>{x.n}</span>
            <small className='ri-sub'><i />{x.k}{x.q ? ' · ' + QUALITY[x.q] : ''}</small>
          </button>
        ))}
      </div>
      {shown < list.length && <p style={{ textAlign: 'center' }}><button className='btn' onClick={() => setShown(shown + PAGE)}>{t('db.more')}</button></p>}
      {sel && <Detail s={sel} G={G} onClose={() => setSel(null)} />}
    </>
  );
}
