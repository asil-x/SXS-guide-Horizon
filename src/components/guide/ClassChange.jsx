// Tra cứu đổi class: mỗi skill của class cũ sẽ thành skill nào của class mới.
// Quy tắc (theo dữ liệu game): ở từng tier, skill được chia nhóm theo loại (Technique/Charm)
// và độ hiếm khởi điểm; một skill chỉ có thể thành skill cùng nhóm ở cùng tier.
import { useState } from 'react';
import { useData } from '../../lib/data.js';
import { useT } from '../../i18n/index.jsx';
import { fallbackImg, onImgError, skillIcon } from '../../lib/img.js';
import { useSkills } from '../../lib/skills.js';
import SkillPopup from '../SkillPopup.jsx';

const QUALITY = { Orange: 'Legendary', Purple: 'Epic', Blue: 'Rare' };
const ORDER = ['Technique|Orange', 'Technique|Purple', 'Technique|Blue', 'Charm|Orange', 'Charm|Purple', 'Charm|Blue'];


function groups(cls, skills) {
  const g = {};
  for (const n of cls?.pool || []) {
    const s = skills[n];
    const key = (s?.type || '?') + '|' + (s?.quality || '?');
    (g[key] ||= []).push(n);
  }
  return g;
}

function Chip({ name, skills, onOpen }) {
  const s = skills[name];
  return (
    <button type='button' className='cc-chip' onClick={() => s && onOpen(s)}>
      <img src={s ? skillIcon(s) : fallbackImg} alt='' loading='lazy' onError={onImgError} />
      <span>{name}</span>
    </button>
  );
}

function odds(n, t) {
  if (n <= 1) return t('cc.fixed');
  if (n === 2) return '50/50';
  return t('cc.oneOf', { n });
}

/** Chọn class hiện tại và class muốn đổi để xem skill nào thành skill nào. */
export function ClassChange(props) {
  const CLASSES = useData('classes');
  if (!CLASSES) return null;
  return <ClassChangeInner {...props} CLASSES={CLASSES} />;
}

function ClassChangeInner({ from = 'Knight', to = 'Duelist', CLASSES }) {
  const t = useT();
  const byName = Object.fromEntries(CLASSES.map((c) => [c.name, c]));
  const skills = useSkills(true);
  const [a, setA] = useState(from);
  const [b, setB] = useState(to);
  const [sel, setSel] = useState(null);
  const A = byName[a];
  const sameRank = CLASSES.filter((c) => c.rank === A.rank && c.name !== a);
  const B = sameRank.find((c) => c.name === b) || sameRank[0];

  const pickA = (name) => {
    setA(name);
    const r = byName[name].rank;
    if (byName[b]?.rank !== r || b === name) setB(CLASSES.find((c) => c.rank === r && c.name !== name)?.name);
  };

  return (
    <div className='cc'>
      <div className='cc-pick'>
        <label>
          <span>{t('cc.from')}</span>
          <select className='select' value={a} onChange={(e) => pickA(e.target.value)}>
            {[...new Set(CLASSES.map((c) => c.rank))].map((r) => (
              <optgroup key={r} label={'Tier ' + r}>
                {CLASSES.filter((c) => c.rank === r).map((c) => <option key={c.name}>{c.name}</option>)}
              </optgroup>
            ))}
          </select>
        </label>
        <span className='cc-arrow' aria-hidden='true'>→</span>
        <label>
          <span>{t('cc.to')}</span>
          <select className='select' value={B?.name} onChange={(e) => setB(e.target.value)}>
            {sameRank.map((c) => <option key={c.name}>{c.name}</option>)}
          </select>
        </label>
      </div>

      {!skills ? <p className='muted'>{t('cc.loading')}</p> : B && A.chain.map((fromName, i) => {
        const toName = B.chain[i];
        if (fromName === toName) {
          return (
            <div className='cc-tier same' key={i}>
              <div className='cc-tier-head'><strong>Tier {i + 1}: {fromName}</strong><span className='tag gold'>{t('cc.same')}</span></div>
              <p className='muted'>{t('cc.sameText')}</p>
            </div>
          );
        }
        const ga = groups(byName[fromName], skills);
        const gb = groups(byName[toName], skills);
        const keys = ORDER.filter((k) => ga[k] || gb[k]);
        return (
          <div className='cc-tier' key={i}>
            <div className='cc-tier-head'><strong>Tier {i + 1}: {fromName} → {toName}</strong></div>
            <div className='table-wrap'>
              <table className='data-table cc-table'>
                <thead><tr><th>{t('cc.group')}</th><th>{t('cc.skillsOf', { x: fromName })}</th><th>{t('cc.canBe', { x: toName })}</th><th>{t('cc.odds')}</th></tr></thead>
                <tbody>
                  {keys.map((k) => {
                    const [type, q] = k.split('|');
                    const n = (gb[k] || []).length;
                    return (
                      <tr key={k}>
                        <td><span className={'cc-q q-' + q}>{QUALITY[q] || q}</span><br /><small className='muted'>{type}</small></td>
                        <td>{(ga[k] || []).map((s) => <Chip key={s} name={s} skills={skills} onOpen={setSel} />)}</td>
                        <td>{(gb[k] || []).map((s) => <Chip key={s} name={s} skills={skills} onOpen={setSel} />)}</td>
                        <td className='cc-odds'>{odds(n, t)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
      {sel && <SkillPopup skill={sel} onClose={() => setSel(null)} />}
    </div>
  );
}
