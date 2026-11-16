// Máy tính Primostar (bản đơn giản): nhập level hiện tại, ra số Primostar cuối mùa, mốc Astral Pact
// và cần nâng thêm bao nhiêu để đạt mục tiêu. Phép tính: src/lib/primostar-calc.js; số liệu: src/lib/primostar-data.js.
import { useEffect, useState } from 'react';
import { asset, onImgError } from '../../lib/img.js';
import { useT } from '../../i18n/index.jsx';
import { useSeason } from '../../lib/season.js';
import { SYSTEMS, capOf, costRange, floorOf, pointsToGoal, seasonOf, seasonResult, tableMax } from '../../lib/primostar-calc.js';

const fmt = (n) => Math.round(n).toLocaleString('en-US');
const compact = (n) => {
  const a = Math.abs(n);
  for (const [v, s] of [[1e12, 'T'], [1e9, 'B'], [1e6, 'M'], [1e3, 'K']]) if (a >= v) return Number((n / v).toFixed(n / v >= 100 ? 0 : 2)) + s;
  return fmt(n);
};
const ICON = { char: 'tooltips/Money_61.png', gear: 'tooltips/item_41301.png', skill: 'tooltips/item_42200.png', fant: 'tooltips/item_1502.png', relic: 'treasures/treasure_61012.png' };
const RES_ICON = {
  ore: 'tooltips/item_41300.png', fine: 'tooltips/item_41301.png', rolla: 'tooltips/Money_1.png', ess: 'tooltips/item_42200.png',
  sand: 'tooltips/item_41400.png', sandRare: 'tooltips/item_41401.png', sandEpic: 'tooltips/item_41402.png',
};

function Cost({ cost, sysKey }) {
  const t = useT();
  const keys = Object.keys(cost);
  if (!keys.length) return <span className='muted'>—</span>;
  return (
    <span className='ps-cost'>
      {keys.map((k) => (
        <span key={k} className='ps-res' title={t('ps.res.' + (k === 'exp' ? sysKey + 'Exp' : k))}>
          {RES_ICON[k] && <img src={asset(RES_ICON[k])} alt='' onError={onImgError} />}
          {compact(cost[k])}{k === 'exp' && ' EXP'}
          {k === 'exp' && sysKey === 'fant' && <small> ≈ {compact(cost[k] / 2000)} Deluxe Treats</small>}
        </span>
      ))}
    </span>
  );
}

function Field({ label, hint, value, onChange, suffix, warn, placeholder }) {
  return (
    <label className='ps-field'>
      <span className='ps-label'>{label}</span>
      <span className='ps-input'>
        <input className='input' type='number' inputMode='numeric' min='0' placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value === '' ? '' : Math.max(0, Number(e.target.value)))} />
        {suffix && <span className='ps-suffix'>{suffix}</span>}
      </span>
      {hint && <small className='muted'>{hint}</small>}
      {warn && <small className='ps-warn'>{warn}</small>}
    </label>
  );
}

/** Máy tính Primostar bản đơn giản. */
export function PrimostarCalc() {
  const t = useT();
  const [D, setD] = useState(null);
  const [season, setSeason] = useSeason();
  const [prev, setPrev] = useState('');
  const [target, setTarget] = useState('');
  const [lv, setLv] = useState({});
  const [xpPct, setXpPct] = useState('');

  useEffect(() => { import('../../lib/primostar-data.js').then(setD); }, []);
  if (!D) return <div className='loading'>{t('loading')}</div>;

  const S = seasonOf(D, season);
  const fl = (k) => floorOf(S, k);
  const levels = Object.fromEntries(SYSTEMS.map((x) => [x.key, lv[x.key] === '' || lv[x.key] == null ? fl(x.key) : Number(lv[x.key])]));
  const prevStars = Number(prev) || 0;
  const res = seasonResult(D, season, levels, xpPct, prevStars);
  const toNext = S.rate - (res.points % S.rate);

  const reachedIdx = D.PACT.findIndex((p) => p[0] > res.total);
  const reached = reachedIdx < 0 ? D.PACT.length : reachedIdx;
  const next = D.PACT[reached];

  const goal = Number(target) || 0;
  const needPts = goal > res.total ? pointsToGoal(D, season, res.points, goal, prevStars) : 0;

  const rows = SYSTEMS.map((sys) => {
    const level = levels[sys.key];
    const per = sys.slots * S.w[sys.wi];
    return { sys, level, per, below: level < fl(sys.key), cap: capOf(D, season, levels.char, sys.key), max: tableMax(D, season, sys.key) };
  });

  return (
    <div className='ps-tool'>
      <section className='ps-step'>
        <h3 className='ps-h'><span>1</span>{t('ps.step1')}</h3>
        <div className='cr-pick tiers ps-seasons' role='tablist'>
          {D.SEASONS.map((x) => (
            <button key={x.s} type='button' role='tab' aria-selected={x.s === season} className={x.s === season ? 'on' : ''} onClick={() => setSeason(x.s)} title={x.name}>
              S{x.s}<small>{x.name}</small>
            </button>
          ))}
        </div>
        <div className='ps-grid2'>
          {season > 1 && <Field label={t('ps.prev')} hint={t('ps.prevHint')} value={prev} onChange={setPrev} placeholder='0' />}
          <Field label={t('ps.target')} hint={t('ps.targetHint')} value={target} onChange={setTarget} />
        </div>
      </section>

      <section className='ps-step'>
        <h3 className='ps-h'><span>2</span>{t('ps.step2')}</h3>
        <p className='muted ps-sub'>{t('ps.step2Hint', { f: S.floor, r: S.relicFloor })}</p>
        <div className='ps-systems'>
          {rows.map((r) => (
            <div key={r.sys.key} className='ps-sys'>
              <img src={asset(ICON[r.sys.key])} alt='' onError={onImgError} />
              <Field
                label={t('ps.sys.' + r.sys.key)}
                hint={t('ps.sysHint.' + r.sys.key, { f: fl(r.sys.key), p: r.per })}
                value={lv[r.sys.key] ?? ''}
                onChange={(v) => setLv((x) => ({ ...x, [r.sys.key]: v }))}
                placeholder={String(fl(r.sys.key))}
                warn={r.below ? t('ps.below', { f: fl(r.sys.key) }) : r.cap != null && r.level > r.cap ? t('ps.overCap', { c: r.cap }) : null}
              />
              {r.sys.key === 'char' && <Field label={t('ps.xp')} value={xpPct} onChange={setXpPct} suffix='%' hint={t('ps.xpHint')} />}
            </div>
          ))}
        </div>
      </section>

      <section className='ps-step ps-result'>
        <h3 className='ps-h'><span>3</span>{t('ps.step3')}</h3>
        <div className='ps-big'>
          <div><b>{fmt(res.stars)}</b><span>{t('ps.thisSeason')}</span></div>
          {season > 1 && <div><b>{fmt(res.total)}</b><span>{t('ps.total')}</span></div>}
          <div><b>{fmt(res.points)}</b><span>{t('ps.points')}</span></div>
        </div>
        <p className='ps-formula'>{t('ps.formula', { p: fmt(res.points), r: S.rate, b: S.base, s: fmt(res.stars) })} {t('ps.toNext', { n: fmt(toNext) })}</p>
        <div className='ps-bars'>
          {rows.map((r) => (
            <div key={r.sys.key} className='ps-bar'>
              <span className='ps-bar-name'>{t('ps.sys.' + r.sys.key)}</span>
              <span className='ps-bar-track'><i style={{ width: (res.points ? (100 * res.by[r.sys.key]) / res.points : 0) + '%' }} /></span>
              <span className='ps-bar-val'>{fmt(res.by[r.sys.key])}</span>
            </div>
          ))}
        </div>
        <div className='ps-pact'>
          <img src={asset('tooltips/Money_61.png')} alt='' onError={onImgError} />
          <div>
            <b>{t('ps.pact', { n: reached })}</b>
            {next
              ? <div>{t('ps.pactNext', { n: reached + 1, need: fmt(next[0] - res.total), at: fmt(next[0]) })} <span className='ps-chip'>{t('ps.eff.' + next[1]) === 'ps.eff.' + next[1] ? next[1] : t('ps.eff.' + next[1])} +{next[2] / 100}%</span></div>
              : <div>{t('ps.pactMax')}</div>}
          </div>
        </div>
      </section>

      <section className='ps-step'>
        <h3 className='ps-h'><span>4</span>{goal > res.total ? t('ps.step4Goal', { g: fmt(goal), n: fmt(goal - res.total), p: fmt(needPts) }) : t('ps.step4')}</h3>
        {goal > 0 && goal <= res.total && <p className='ps-ok'>{t('ps.reached', { g: fmt(goal) })}</p>}
        <div className='table-wrap'>
          <table className='data-table ps-table'>
            <thead>
              <tr>
                <th>{t('ps.col.sys')}</th>
                <th className='num'>{t('ps.col.per')}</th>
                <th>{t('ps.col.next')}</th>
                {needPts > 0 && <th>{t('ps.col.goal')}</th>}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const k = r.sys.key;
                // Điểm chỉ tính từ sàn; chi phí tính từ level hiện tại (kể cả đoạn dưới sàn).
                const scoreFrom = Math.max(r.level, fl(k));
                const nextCost = scoreFrom < r.max ? costRange(D, season, k, r.level, scoreFrom + 1) : null;
                let goalCell = null;
                if (needPts > 0) {
                  const n = Math.ceil(needPts / r.per);
                  const end = scoreFrom + n;
                  goalCell = end > r.max
                    ? <span className='muted'>{t('ps.tooFar', { n: fmt(n) })}</span>
                    : <>
                        <b>{t('ps.plus', { n: fmt(end - r.level), to: fmt(end) })}</b>
                        {r.cap != null && end > r.cap && <small className='ps-warn'> {t('ps.capNote', { c: r.cap })}</small>}
                        <div><Cost cost={costRange(D, season, k, r.level, end)} sysKey={k} /></div>
                      </>;
                }
                return (
                  <tr key={k}>
                    <td><b>{t('ps.sys.' + k)}</b><div className='muted'>{r.sys.slots > 1 ? t('ps.slots', { n: r.sys.slots }) : ''}</div></td>
                    <td className='num'>+{fmt(r.per)}<div className='muted'>≈ {(r.per / S.rate).toFixed(r.per >= S.rate ? 0 : 2)} ★</div></td>
                    <td>{nextCost ? <Cost cost={nextCost} sysKey={k} /> : <span className='muted'>{t('ps.maxed')}</span>}</td>
                    {needPts > 0 && <td>{goalCell}</td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className='muted ps-note'>{t('ps.note')}</p>
      </section>
    </div>
  );
}
