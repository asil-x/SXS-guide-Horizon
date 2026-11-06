import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fixGuideHtml, onImgError } from '../lib/img.js';

const guideFiles = import.meta.glob('../data/guides/sword-x-staff-*.json');
const buildFiles = import.meta.glob('../data/guides/builds/*.json');

const RARITIES = [
  { label: 'Rare', idx: 1, color: '#5f9aff' },
  { label: 'Epic', idx: 4, color: '#9660c4' },
  { label: 'Legendary', idx: 8, color: '#e68a23' },
  { label: 'Mythic', idx: 14, color: '#ebed63' },
  { label: 'Divine', idx: 22, color: '#e05252' },
  { label: 'Immortal', idx: 33, color: '#e884e8' },
];

function SkillPopup({ skill, icon, onClose }) {
  const [rar, setRar] = useState(0);
  if (!skill) return null;
  const scaling = skill.scaling || [];
  return (
    <div className='overlay' onClick={onClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <button className='close' onClick={onClose} aria-label='Close'>x</button>
        <div className='modal-head'>
          <img src={icon} alt='' onError={onImgError} />
          <div>
            <h2>{skill.name}</h2>
            <div>
              {skill.type && <span className='tag'>{skill.type}</span>}
              {skill.cooldown != null && skill.cooldown !== '' && <span className='tag'>{skill.cooldown} turn(s)</span>}
              {(skill.tags || []).map((t) => <span className='tag' key={t}>{t}</span>)}
            </div>
          </div>
        </div>
        <p>{skill.description}</p>
        {(skill.keywords || []).map((k) => (
          <div className='kw' key={k.name}><b>{k.name}</b>: {k.description}</div>
        ))}
        {scaling.length > 0 && (
          <>
            <div className='chips'>
              {RARITIES.map((r, i) => (
                <button key={r.label} className={'chip' + (rar === i ? ' on' : '')} style={rar === i ? { color: r.color } : null} onClick={() => setRar(i)}>{r.label}</button>
              ))}
            </div>
            <div className='kw'>
              {scaling.map((s, i) => {
                const vals = s.values || s.value || [];
                const v = Array.isArray(vals) ? vals[RARITIES[rar].idx] ?? vals[vals.length - 1] : vals;
                return <div key={i}><b>{s.stat || s.label}</b>: {String(v)}</div>;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Guide() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [builds, setBuilds] = useState({});
  const [popup, setPopup] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setData(null); setBuilds({}); setPopup(null);
    const gk = '../data/guides/' + slug + '.json';
    const bk = '../data/guides/builds/' + slug + '.json';
    if (!guideFiles[gk]) { setData(false); return; }
    guideFiles[gk]().then((m) => setData(m.default));
    if (buildFiles[bk]) buildFiles[bk]().then((m) => setBuilds(m.default));
  }, [slug]);

  const html = useMemo(() => (data ? fixGuideHtml(data.html) : ''), [data]);

  useEffect(() => {
    const root = ref.current;
    if (!root || !data) return;
    // fall back to a placeholder for any missing image
    root.querySelectorAll('img').forEach((im) => im.addEventListener('error', onImgError, { once: true }));
    // initial tab state: ensure first panel/tab of each group is active
    root.querySelectorAll('.wiki-tabs').forEach((w) => {
      if (!w.querySelector('.wiki-tab-panel.active')) w.querySelector('.wiki-tab-panel')?.classList.add('active');
    });
    root.querySelectorAll('.text-tabs').forEach((w) => {
      if (!w.querySelector('.tab-content.active')) w.querySelector('.tab-content')?.classList.add('active');
    });
  }, [data, html]);

  function onClick(e) {
    const t = e.target;
    const wt = t.closest('.wiki-tab-button');
    if (wt) {
      const wrap = wt.closest('.wiki-tabs');
      wrap.querySelectorAll('.wiki-tab-button').forEach((b) => b.classList.toggle('active', b === wt));
      const idx = [...wrap.querySelectorAll('.wiki-tab-button')].indexOf(wt);
      wrap.querySelectorAll(':scope > .wiki-tabs-content > .wiki-tab-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
      return;
    }
    const tb = t.closest('.tab-button');
    if (tb) {
      const wrap = tb.closest('.text-tabs');
      const btns = [...wrap.querySelectorAll(':scope > .tabs > .tab-button')];
      btns.forEach((b) => b.classList.toggle('active', b === tb));
      const idx = btns.indexOf(tb);
      wrap.querySelectorAll(':scope > .text-content > .tab-content').forEach((p, i) => p.classList.toggle('active', i === idx));
      return;
    }
    const code = t.closest('.code');
    if (code) {
      navigator.clipboard?.writeText(code.dataset.code);
      code.classList.add('copied');
      const old = code.textContent;
      code.textContent = 'Copied!';
      setTimeout(() => { code.classList.remove('copied'); code.textContent = old; }, 1200);
      return;
    }
    const card = t.closest('.build-card');
    if (card) {
      const uid = card.closest('.build-display')?.dataset.uid;
      const b = builds[uid];
      if (!b) return;
      const name = card.dataset.skillName;
      const skill = [...b.techniques, ...b.charms].find((s) => s.name === name);
      if (skill) setPopup({ skill, icon: card.querySelector('img')?.getAttribute('src') });
    }
  }

  if (data === false) return <div className='guide'><h1>Guide not found</h1><Link className='btn' to='/'>Home</Link></div>;
  if (!data) return <div className='loading'>Loading...</div>;
  return (
    <article className='guide'>
      <Link to='/' className='muted'>Home</Link>
      <h1>{data.title}</h1>
      <div className='guide-meta'>Guide được tạo bởi <b>Guild Horizon</b>, trộm làm chó</div>
      <div className='guide-body' ref={ref} onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
      {popup && <SkillPopup skill={popup.skill} icon={popup.icon} onClose={() => setPopup(null)} />}
    </article>
  );
}
