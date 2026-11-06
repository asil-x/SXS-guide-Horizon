import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { onImgError, skillIcon } from '../lib/img.js';

const RARITIES = [
  { label: 'Rare', idx: 1, color: '#5f9aff' },
  { label: 'Epic', idx: 4, color: '#9660c4' },
  { label: 'Legendary', idx: 8, color: '#e68a23' },
  { label: 'Mythic', idx: 14, color: '#ebed63' },
  { label: 'Divine', idx: 22, color: '#e05252' },
  { label: 'Immortal', idx: 33, color: '#e884e8' },
];

export default function SkillPopup({ skill, onClose }) {
  const [rar, setRar] = useState(RARITIES.length - 1);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  const scaling = skill.scaling || [];
  return createPortal(
    <div className='overlay' onClick={onClose}>
      <div className='modal' role='dialog' aria-label={skill.name} onClick={(e) => e.stopPropagation()}>
        <button className='close' onClick={onClose} aria-label='Đóng'>✕</button>
        <div className='modal-head'>
          <img src={skillIcon(skill)} alt='' onError={onImgError} />
          <div>
            <h2>{skill.name}</h2>
            <div>
              {skill.class && <span className='tag gold'>{skill.class}</span>}
              {skill.type && <span className='tag'>{skill.type}</span>}
              {skill.cooldown != null && skill.cooldown !== '' && <span className='tag'>Hồi chiêu {skill.cooldown} lượt</span>}
              {(skill.tags || []).map((t) => <span className='tag' key={t}>{t}</span>)}
            </div>
          </div>
        </div>
        <p>{skill.description}</p>
        {scaling.length > 0 && (
          <div className='scaling'>
            <div className='chips'>
              {RARITIES.map((r, i) => (
                <button key={r.label} className={'chip' + (rar === i ? ' on' : '')} style={rar === i ? { color: r.color, borderColor: r.color } : null} onClick={() => setRar(i)}>{r.label}</button>
              ))}
            </div>
            {scaling.map((s, i) => {
              const vals = s.values || s.value || [];
              const v = Array.isArray(vals) ? vals[RARITIES[rar].idx] ?? vals[vals.length - 1] : vals;
              return <div className='scaling-row' key={i}><span>{s.stat || s.label}</span><b>{String(v)}{s.percent ? '%' : ''}</b></div>;
            })}
          </div>
        )}
        {(skill.keywords || []).map((k) => (
          <div className='kw' key={k.name}><b>{k.name}</b>: {k.description}</div>
        ))}
      </div>
    </div>,
    document.body
  );
}
