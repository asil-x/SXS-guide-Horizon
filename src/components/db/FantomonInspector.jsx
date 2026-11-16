// Tra cứu Fantomon: dữ liệu game mới (độ hiếm, vai trò, kiểu di chuyển, giai đoạn tiến hoá, skill và khoảng level)
// ghép với dữ liệu sẵn có của repo (mô tả skill đã dịch, keyword). Dữ liệu: src/lib/db/fantomons.json.
import { useEffect, useMemo, useState } from 'react';
import { asset, onImgError } from '../../lib/img.js';
import { loadData } from '../../lib/data.js';
import { useLang, useT } from '../../i18n/index.jsx';
import { QUALITY, Q_ORDER, useJson, useTr } from './common.jsx';

function SkillRow({ id, G, repoSkill }) {
  const t = useT();
  const tr = useTr();
  const s = G.skills[id];
  if (!s) return null;
  return (
    <div className='fa-skill'>
      <img className={'q-' + s.q} src={asset(s.icon)} alt='' onError={onImgError} />
      <div>
        <div className='fa-skill-head'>
          <b>{s.n}</b>
          <span className={'ri-q q-' + s.q}>{QUALITY[s.q] || s.q}</span>
          <span className='muted'>{t('sk.levels')} {s.lv[0]} → {s.lv[1]}</span>
        </div>
        <div className='sk-desc'>{repoSkill?.description || tr(s.d)}</div>
        {(repoSkill?.keywords || []).map((k) => <div key={k.name} className='sk-kw'><b>{k.name}</b>: {k.description}</div>)}
      </div>
    </div>
  );
}

function Detail({ p, G, repoPet, onClose }) {
  const t = useT();
  const tr = useTr();
  const repoSkill = (id) => (repoPet?.skills || []).find((s) => String(s.id) === 'petskill_' + id);
  const last = p.phases[p.phases.length - 1];
  return (
    <div className='overlay' onClick={onClose}>
      <div className='modal ri-modal' onClick={(e) => e.stopPropagation()}>
        <button className='close' onClick={onClose} aria-label={t('close')}>x</button>
        <div className='modal-head'>
          <img className={'ri-icon q-' + p.q} src={asset(last.icon)} alt='' onError={onImgError} />
          <div>
            <h2>{p.n}</h2>
            <div className='ri-tags'>
              <span className={'ri-q q-' + p.q}>{QUALITY[p.q] || p.q}</span>
              <span className='tag'>{p.type}</span>
              <span className='tag'>{t('fa.move.' + p.move) === 'fa.move.' + p.move ? p.move : t('fa.move.' + p.move)}</span>
            </div>
          </div>
        </div>
        <p className='sk-desc' style={{ whiteSpace: 'pre-line' }}>{tr(p.d)}</p>
        <div className='ri-sec'>
          <h4>{t('fa.phases')}</h4>
          <div className='fa-phases'>
            {p.phases.map((ph, i) => {
              const ids = [...new Set([...ph.support, ...ph.active, ...ph.passive, ...ph.battle])].filter((id) => G.skills[id]);
              return (
                <div key={i} className='fa-phase'>
                  <img src={asset(ph.icon)} alt='' onError={onImgError} />
                  <div>
                    <b>{ph.n}</b> <span className='muted'>{ph.level ? t('fa.fromLevel', { n: ph.level }) : t('fa.start')}</span>
                    {ph.evolve && G.skills[ph.evolve[0]] && <div className='muted'>{t('fa.evolve', { s: G.skills[ph.evolve[0]].n, q: QUALITY[ph.evolve[1]] || ph.evolve[1] })}</div>}
                    <div className='fa-mini'>{ids.map((id) => <span key={id} title={G.skills[id].n}><img src={asset(G.skills[id].icon)} alt='' onError={onImgError} />{G.skills[id].n}</span>)}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {p.piece && <div className='ri-row'><span>{t('fa.unlock')}</span><b>{t('fa.pieces', { n: p.piece.count })}</b></div>}
        </div>
        <div className='ri-sec'>
          <h4>{t('fa.skills')}</h4>
          {[...new Set(p.phases.flatMap((ph) => [...ph.support, ...ph.active, ...ph.passive, ...ph.battle]))].filter((id) => G.skills[id])
            .map((id) => <SkillRow key={id} id={id} G={G} repoSkill={repoSkill(id)} />)}
        </div>
      </div>
    </div>
  );
}

/** Trang tra cứu Fantomon trong phần Dữ liệu. */
export default function FantomonInspector() {
  const t = useT();
  const { lang } = useLang();
  const G = useJson(() => import('../../lib/db/fantomons.json'));
  const [repo, setRepo] = useState(null);
  const [q, setQ] = useState('');
  const [type, setType] = useState('');
  const [sel, setSel] = useState(null);
  useEffect(() => { loadData('fantomons', lang).then(setRepo); }, [lang]);

  const list = useMemo(() => {
    if (!G) return [];
    const s = q.trim().toLowerCase();
    return G.pets.filter((p) => (!s || p.n.toLowerCase().includes(s)) && (!type || p.type === type))
      .sort((a, b) => Q_ORDER.indexOf(a.q) - Q_ORDER.indexOf(b.q) || a.n.localeCompare(b.n));
  }, [G, q, type]);

  if (!G || !repo) return <div className='loading'>{t('loading')}</div>;
  const types = [...new Set(G.pets.map((p) => p.type))];
  return (
    <>
      <div className='toolbar'>
        <input className='input' placeholder={t('db.search', { x: t('db.fantomons').toLowerCase() })} value={q} onChange={(e) => setQ(e.target.value)} />
        <select className='select' value={type} onChange={(e) => setType(e.target.value)}>
          <option value=''>{t('db.all', { x: t('db.role') })}</option>
          {types.map((x) => <option key={x} value={x}>{x}</option>)}
        </select>
      </div>
      <div className='ri-bar'><span className='muted'>{t('db.count', { a: list.length, b: G.pets.length })} · {t('ri.build', { b: G.build })}</span></div>
      <div className='db-grid ri-grid'>
        {list.map((p) => (
          <button key={p.id} className={'db-card ri-card q-' + p.q} onClick={() => setSel(p)}>
            <img src={asset(p.phases[p.phases.length - 1].icon)} alt='' loading='lazy' onError={onImgError} />
            <span>{p.n}</span>
            <small className='ri-sub'>{QUALITY[p.q] || p.q} · {p.type}</small>
          </button>
        ))}
      </div>
      {sel && <Detail p={sel} G={G} repoPet={repo.find((r) => r.id === sel.id)} onClose={() => setSel(null)} />}
    </>
  );
}
