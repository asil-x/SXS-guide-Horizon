// Tra cứu đổi class: mỗi skill của class cũ sẽ thành skill nào của class mới.
// Quy tắc (theo dữ liệu game): ở từng tier, skill được chia nhóm theo loại (Technique/Charm)
// và độ hiếm khởi điểm; một skill chỉ có thể thành skill cùng nhóm ở cùng tier.
import { useState } from 'react';
import CLASSES from '../../data/classes.json';
import { fallbackImg, onImgError, skillIcon } from '../../lib/img.js';
import { useSkills } from '../../lib/skills.js';
import SkillPopup from '../SkillPopup.jsx';

const QUALITY = { Orange: 'Legendary', Purple: 'Epic', Blue: 'Rare' };
const ORDER = ['Technique|Orange', 'Technique|Purple', 'Technique|Blue', 'Charm|Orange', 'Charm|Purple', 'Charm|Blue'];
const byName = Object.fromEntries(CLASSES.map((c) => [c.name, c]));

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

function odds(n) {
  if (n <= 1) return 'Cố định';
  if (n === 2) return '50/50';
  return '1/' + n + ' mỗi skill';
}

/** Chọn class hiện tại và class muốn đổi để xem skill nào thành skill nào. */
export function ClassChange({ from = 'Knight', to = 'Duelist' }) {
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
          <span>Class hiện tại</span>
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
          <span>Đổi sang (cùng tier)</span>
          <select className='select' value={B?.name} onChange={(e) => setB(e.target.value)}>
            {sameRank.map((c) => <option key={c.name}>{c.name}</option>)}
          </select>
        </label>
      </div>

      {!skills ? <p className='muted'>Đang tải dữ liệu skill…</p> : B && A.chain.map((fromName, i) => {
        const toName = B.chain[i];
        if (fromName === toName) {
          return (
            <div className='cc-tier same' key={i}>
              <div className='cc-tier-head'><strong>Tier {i + 1}: {fromName}</strong><span className='tag gold'>Giữ nguyên</span></div>
              <p className='muted'>Cùng gốc nên skill tier này không đổi.</p>
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
                <thead><tr><th>Nhóm</th><th>Skill của {fromName}</th><th>Có thể thành ({toName})</th><th>Tỉ lệ</th></tr></thead>
                <tbody>
                  {keys.map((k) => {
                    const [type, q] = k.split('|');
                    const n = (gb[k] || []).length;
                    return (
                      <tr key={k}>
                        <td><span className={'cc-q q-' + q}>{QUALITY[q] || q}</span><br /><small className='muted'>{type}</small></td>
                        <td>{(ga[k] || []).map((s) => <Chip key={s} name={s} skills={skills} onOpen={setSel} />)}</td>
                        <td>{(gb[k] || []).map((s) => <Chip key={s} name={s} skills={skills} onOpen={setSel} />)}</td>
                        <td className='cc-odds'>{odds(n)}</td>
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
