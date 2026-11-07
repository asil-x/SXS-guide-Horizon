// Crucible of Hieromon: bảng cấp, hồ sơ Hieromon và công cụ gợi ý technique khắc chế (dữ liệu: src/lib/crucible.js).
import { useState } from 'react';
import { COUNTERS, HIEROMONS, LADDER } from '../../lib/crucible.js';
import { LINES } from '../../lib/tierList.js';
import { asset, onImgError } from '../../lib/img.js';
import { useT } from '../../i18n/index.jsx';
import { Build } from './index.jsx';

const ELEM_COLOR = { Fire: '#f0635a', Water: '#4f9dff', Wind: '#4fd1a5', Light: '#f2c94c', Dark: '#a78bfa', Physical: '#a3a8b4' };
const STAT = { Attack: 'ATK', Defence: 'DEF', Speed: 'SPD', MaxHp: 'HP' };
const icon = (h) => 'monsters/' + h.icon + '.png';
const byId = Object.fromEntries(HIEROMONS.map((h) => [h.id, h]));

function Elem({ e }) {
  const t = useT();
  return <span className='cr-elem' style={{ '--e': ELEM_COLOR[e] }}>{t('el.' + e)}</span>;
}

/** Bảng các cấp Crucible: số tier, level và Hieromon xuất hiện. */
export function CrucibleLadder() {
  const t = useT();
  return (
    <div className='table-wrap'>
      <table className='data-table cr-ladder'>
        <thead><tr><th>{t('cr.rank')}</th><th className='num'>{t('cr.tiers')}</th><th className='num'>{t('cr.level')}</th><th>Hieromon</th></tr></thead>
        <tbody>
          {LADDER.map((r) => (
            <tr key={r.name}>
              <td><strong>{r.name}</strong></td>
              <td className='num'>{r.tiers}</td>
              <td className='num'>{r.lv[0] === r.lv[1] ? r.lv[0] : r.lv[0] + ' → ' + r.lv[1]}</td>
              <td><div className='cr-mini'>{r.bosses.map((id) => <img key={id} src={asset(icon(byId[id]))} alt={byId[id].name} title={byId[id].name} onError={onImgError} />)}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Hồ sơ một Hieromon. children: cách đánh (viết tay trong bài). */
export function Hieromon({ id, children }) {
  const t = useT();
  const h = byId[id];
  if (!h) return null;
  const actives = h.skills.filter((s) => !s.passive);
  const passives = h.skills.filter((s) => s.passive);
  return (
    <div className='cr-card' style={{ '--e': ELEM_COLOR[h.weak] || ELEM_COLOR[h.atk[0]] }}>
      <div className='cr-head'>
        <img src={asset(icon(h))} alt='' onError={onImgError} />
        <div>
          <span className='cr-from'>{t('cr.from', { x: h.from })}</span>
          <h3>{h.name}</h3>
          <div className='cr-tags'>
            <span className='cr-lbl'>{t('cr.attacks')}</span>{h.atk.map((e) => <Elem key={e} e={e} />)}
            {h.weak && <><span className='cr-lbl'>{t('cr.weak')}</span><Elem e={h.weak} /></>}
            {h.resist && <><span className='cr-lbl'>{t('cr.resist')}</span><Elem e={h.resist} /></>}
          </div>
          {Object.keys(h.stats).length > 0 && (
            <div className='cr-stats'>{Object.entries(h.stats).map(([k, v]) => <span key={k} className={v > 100 ? 'up' : 'down'}>{STAT[k] || k} {v}%</span>)}</div>
          )}
        </div>
      </div>
      <div className='cr-body'>{children}</div>
      <details className='cr-skills'>
        <summary>{t('cr.allSkills', { n: h.skills.length })}</summary>
        <p className='muted'>{t('cr.skillsNote')}</p>
        <ul>
          {actives.map((s) => <li key={s.n}><b>{s.n}</b>: {s.d}</li>)}
          {passives.map((s) => <li key={s.n}><b>{s.n}</b> <span className='tag'>{t('cr.passive')}</span>: {s.d}</li>)}
        </ul>
      </details>
    </div>
  );
}

/** Chọn Hieromon + nhánh class + tier → gợi ý technique. */
export function CrucibleCounter() {
  const t = useT();
  const [boss, setBoss] = useState(HIEROMONS[0].id);
  const [line, setLine] = useState('sorcerer');
  const [tier, setTier] = useState(4);
  const entry = COUNTERS[line][tier];
  const pick = entry?.by[boss] || { main: [], fill: [] };
  const h = byId[boss];
  return (
    <div className='cr-tool'>
      <div className='cr-pick bosses' role='tablist'>
        {HIEROMONS.map((x) => (
          <button key={x.id} type='button' role='tab' aria-selected={x.id === boss} className={x.id === boss ? 'on' : ''} onClick={() => setBoss(x.id)} style={{ '--e': ELEM_COLOR[x.weak] || ELEM_COLOR[x.atk[0]] }}>
            <img src={asset(icon(x))} alt='' onError={onImgError} /><span>{x.name}</span>
          </button>
        ))}
      </div>
      <div className='cr-pick lines'>
        {Object.keys(LINES).map((l) => (
          <button key={l} type='button' className={l === line ? 'on' : ''} style={{ '--c': LINES[l].color }} onClick={() => setLine(l)}>{t('cr.line.' + l)}</button>
        ))}
      </div>
      <div className='cr-pick tiers'>
        {Object.keys(COUNTERS[line]).map((k) => (
          <button key={k} type='button' className={+k === tier ? 'on' : ''} onClick={() => setTier(+k)} title={COUNTERS[line][k].cls}>T{k}</button>
        ))}
      </div>
      <div className='cr-result'>
        <p className='cr-why'><strong>{entry?.cls} → {h.name}:</strong> {t('cr.why.' + boss)}</p>
        {pick.main.length + pick.fill.length > 0 ? <Build techniques={[...pick.main, ...pick.fill]} /> : <p className='muted'>{t('cr.none')}</p>}
        {pick.fill.length > 0 && <p className='muted'>{t('cr.fill', { x: pick.fill.join(', ') })}</p>}
      </div>
    </div>
  );
}
