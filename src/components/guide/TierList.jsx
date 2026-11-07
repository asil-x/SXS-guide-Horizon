// Tier list class theo từng tier / kingdom (dữ liệu: src/lib/tierList.js).
import { Link } from 'react-router-dom';
import { useData } from '../../lib/data.js';
import { LINES, TIERS } from '../../lib/tierList.js';
import { asset, onImgError } from '../../lib/img.js';
import { useT } from '../../i18n/index.jsx';

const ORDER = ['SSS', 'SS', 'S', 'A', 'B', 'C', 'D'];
const LINE_ORDER = ['duelist', 'knight', 'sorcerer', 'sage'];

function useClasses() {
  const list = useData('classes');
  return list ? Object.fromEntries(list.map((c) => [c.id, c])) : null;
}

const to = (c) => '/guides/' + LINES[c.line].slug + '?tier=' + TIERS.find((t) => t.classes.includes(c)).tier;

function ClassChip({ c, cls, big }) {
  const k = cls[c.id];
  if (!k) return null;
  return (
    <Link className={'tl-chip' + (big ? ' big' : '') + (c.avoid ? ' avoid' : '')} to={to(c)} style={{ '--c': LINES[c.line].color }} title={k.name}>
      <img src={asset(k.icon)} alt='' loading='lazy' onError={onImgError} />
      <span>{k.name}</span>
    </Link>
  );
}

/** Bảng tổng quan: mỗi hàng là một nhánh class, mỗi cột là một tier. */
export function TierOverview() {
  const t = useT();
  const cls = useClasses();
  if (!cls) return null;
  return (
    <div className='table-wrap'>
      <table className='tl-matrix'>
        <thead>
          <tr>
            <th>{t('tl.line')}</th>
            {TIERS.map((x) => <th key={x.tier}><b>T{x.tier}</b><small>{x.kingdom}</small></th>)}
          </tr>
        </thead>
        <tbody>
          {LINE_ORDER.map((line) => (
            <tr key={line} style={{ '--c': LINES[line].color }}>
              <th scope='row'>{cls[{ duelist: 4, knight: 3, sorcerer: 5, sage: 6 }[line]]?.name}</th>
              {TIERS.map((x) => {
                const c = x.classes.find((y) => y.line === line);
                if (!c) return <td key={x.tier} className='tl-empty'>–</td>;
                const k = cls[c.id];
                return (
                  <td key={x.tier}>
                    <Link to={to(c)} className='tl-cell' title={k?.name}>
                      <img src={asset(k?.icon)} alt='' loading='lazy' onError={onImgError} />
                      <span className={'tl-grade g-' + c.grade + (x.ranked ? '' : ' unranked')}>{x.ranked ? c.grade : '–'}</span>
                    </Link>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Xếp hạng của một tier dạng hàng S / A / B / C. */
export function TierRanking({ tier }) {
  const t = useT();
  const cls = useClasses();
  const x = TIERS.find((y) => y.tier === tier);
  if (!cls || !x) return null;
  if (!x.ranked) {
    return (
      <div className='tl-tier'>
        <div className='tl-row unranked'>
          <span className='tl-label'>{x.upcoming ? t('tl.soon') : '='}</span>
          <div className='tl-chips'>{x.classes.map((c) => <ClassChip key={c.id} c={c} cls={cls} big />)}</div>
        </div>
      </div>
    );
  }
  const grades = ORDER.filter((g) => x.classes.some((c) => c.grade === g));
  return (
    <div className='tl-tier'>
      {grades.map((g) => (
        <div className={'tl-row g-' + g} key={g}>
          <span className='tl-label'><b>{g}</b><small>{t('tl.g.' + g)}</small></span>
          <div className='tl-chips'>
            {x.classes.filter((c) => c.grade === g).map((c) => (
              <span key={c.id} className='tl-item'>
                <ClassChip c={c} cls={cls} big />
                {c.avoid && <em className='tl-avoid'>{t('tl.avoid')}</em>}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
