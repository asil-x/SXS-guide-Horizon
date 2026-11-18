// Bảng tính EXP lên level cho nhân vật và Fantomon. Dưới sàn mùa dùng đường EXP thường, từ sàn trở lên dùng
// bảng bless của mùa (giống cách game tính). Số liệu: src/lib/primostar-data.js (tải khi cần).
import { useEffect, useState } from 'react';
import { asset, onImgError } from '../../lib/img.js';
import { useT } from '../../i18n/index.jsx';
import { useSeason } from '../../lib/season.js';
import { expStep, seasonOf, tableMax } from '../../lib/primostar-calc.js';

const fmt = (n) => Math.round(n).toLocaleString('en-US');
const compact = (n) => {
  for (const [v, s] of [[1e12, 'T'], [1e9, 'B'], [1e6, 'M'], [1e3, 'K']]) if (Math.abs(n) >= v) return Number((n / v).toFixed(2)) + s;
  return fmt(n);
};

function Num({ label, value, onChange, hint, suffix, min = 0, max }) {
  return (
    <label className='ps-field'>
      <span className='ps-label'>{label}</span>
      <span className='ps-input'>
        <input className='input' type='number' inputMode='numeric' min={min} max={max} value={value} onChange={(e) => onChange(e.target.value === '' ? '' : Math.max(min, Number(e.target.value)))} />
        {suffix && <span className='ps-suffix'>{suffix}</span>}
      </span>
      {hint && <small className='muted'>{hint}</small>}
    </label>
  );
}

/** Bảng tính EXP cần để lên level. */
export function ExpCalc() {
  const t = useT();
  const [D, setD] = useState(null);
  const [season, setSeason] = useSeason();
  const [kind, setKind] = useState('char');
  const [from, setFrom] = useState('');
  const [cur, setCur] = useState('');
  const [to, setTo] = useState('');
  const [rate, setRate] = useState('');
  const [bonus, setBonus] = useState('');
  const [crystals, setCrystals] = useState('');
  const [reserve, setReserve] = useState('');
  useEffect(() => { import('../../lib/primostar-data.js').then(setD); }, []);
  if (!D) return <div className='loading'>{t('loading')}</div>;

  const S = seasonOf(D, season);
  const sysKey = kind === 'pet' ? 'fant' : 'char';
  const top = tableMax(D, season, sysKey);
  const a = Math.min(Math.max(1, Number(from) || 1), top);
  const b = Math.min(Math.max(a, Number(to) || Math.min(a + 1, top)), top);
  const steps = [];
  for (let L = a; L < b; L++) steps.push([L, expStep(D, sysKey, season, L)]);
  // EXP đang có ở level hiện tại / tổng EXP cần từ level hiện tại tới level muốn lên.
  const curMax = steps.reduce((s, x) => s + x[1], 0);
  const curIn = Math.max(0, Number(cur) || 0);
  const done = Math.min(curIn, curMax);
  const need = curMax - done;
  // Chỉ hiện tổng EXP sau khi đã điền cả level hiện tại và level muốn lên, tránh hiểu nhầm.
  const showMax = from !== '' && to !== '' && curMax > 0;

  // EXP/Hr trong Bed = Base EXP Yield × (1 + Production Bonus %), game làm tròn.
  const base = Number(rate) || 0;
  const bonusPct = Number(bonus) || 0;
  const r = Math.round(base * (1 + bonusPct / 100));
  const crystalHours = (Number(crystals) || 0) * D.BED.crystalHours;
  // EXP Reserve đang chờ trong Bed nhận được ngay, nên trừ vào phần còn phải chờ.
  const hours = r > 0 ? Math.max(0, (need - (Number(reserve) || 0)) / r - crystalHours) : null;
  const days = hours != null ? hours / (24 + D.BED.freeHours) : null;

  return (
    <div className='ps-tool'>
      <section className='ps-step'>
        <h3 className='ps-h'><span>1</span>{t('xp.step1')}</h3>
        <div className='cr-pick tiers ps-seasons' role='tablist'>
          {D.SEASONS.map((x) => (
            <button key={x.s} type='button' role='tab' aria-selected={x.s === season} className={x.s === season ? 'on' : ''} onClick={() => setSeason(x.s)} title={x.name}>
              S{x.s}<small>{x.name}</small>
            </button>
          ))}
        </div>
        <div className='cr-pick lines xp-kind'>
          {['char', 'pet'].map((k) => <button key={k} type='button' className={k === kind ? 'on' : ''} style={{ '--c': 'var(--gold)' }} onClick={() => setKind(k)}>{t('xp.kind.' + k)}</button>)}
        </div>
        <p className='muted ps-sub'>{t('xp.floorHint', { f: S.floor, m: top })}</p>
      </section>

      <section className='ps-step'>
        <h3 className='ps-h'><span>2</span>{t('xp.step2')}</h3>
        <div className='ps-grid2'>
          <Num label={t('xp.from')} value={from} onChange={setFrom} min={1} max={top} hint={t('xp.fromHint')} />
          <Num label={t('xp.to')} value={to} onChange={setTo} min={1} max={top} hint={t('xp.toHint', { m: top })} />
          <Num label={t('xp.cur')} value={cur} onChange={setCur} max={showMax ? curMax : undefined} suffix={showMax ? '/ ' + fmt(curMax) : null}
            hint={!showMax ? t('xp.curNeedTo') : curIn > curMax ? t('xp.curOver', { m: fmt(curMax) }) : t('xp.curHint', { a, b, m: fmt(curMax) })} />
          {kind === 'char' && <Num label={t('xp.rate')} value={rate} onChange={setRate} hint={t('xp.rateHint')} />}
          {kind === 'char' && <Num label={t('xp.bonus')} value={bonus} onChange={setBonus} suffix='%' hint={base > 0 && bonusPct > 0 ? t('xp.bonusEff', { x: fmt(r) }) : t('xp.bonusHint')} />}
          {kind === 'char' && <Num label={t('xp.reserve')} value={reserve} onChange={setReserve} hint={t('xp.reserveHint')} />}
          {kind === 'char' && <Num label={t('xp.crystals')} value={crystals} onChange={setCrystals} hint={t('xp.crystalsHint', { h: D.BED.crystalHours })} />}
        </div>
      </section>

      <section className='ps-step ps-result'>
        <h3 className='ps-h'><span>3</span>{t('xp.step3', { a: a, b: b })}</h3>
        <div className='ps-big'>
          <div><b title={fmt(need)}>{compact(need)}</b><span>{t('xp.need')} ({fmt(need)})</span></div>
          {kind === 'char' && hours != null && <div><b>{fmt(Math.ceil(hours))}</b><span>{t('xp.hours')}</span></div>}
          {kind === 'char' && days != null && <div><b>{days.toFixed(1)}</b><span>{t('xp.days', { h: 24 + D.BED.freeHours })}</span></div>}
        </div>
        {kind === 'pet' && (
          <div className='ps-cost xp-treats'>
            {Object.entries(D.TREAT_EXP).map(([id, e]) => (
              <span key={id} className='ps-res'><img src={asset('tooltips/item_' + id + '.png')} alt='' onError={onImgError} />{fmt(Math.ceil(need / e))} {t('xp.treat.' + id)} <small>({fmt(e)} EXP)</small></span>
            ))}
          </div>
        )}
        {kind === 'char' && r <= 0 && <p className='muted ps-note'>{t('xp.rateMissing')}</p>}
        {steps.length > 0 && (
          <details className='xp-steps'>
            <summary>{t('xp.table', { n: steps.length })}</summary>
            <div className='table-wrap'>
              <table className='data-table'>
                <thead><tr><th>{t('xp.col.lv')}</th><th className='num'>{t('xp.col.exp')}</th><th className='num'>{t('xp.col.cum')}</th></tr></thead>
                <tbody>
                  {steps.slice(0, 300).reduce((acc, [L, e]) => { const prev = acc.length ? acc[acc.length - 1][2] : -done; acc.push([L, e, prev + e]); return acc; }, []).map(([L, e, c]) => (
                    <tr key={L}><td>{L} → {L + 1}{L >= S.floor ? <span className='tag xp-bless'>{t('xp.bless')}</span> : null}</td><td className='num'>{fmt(e)}</td><td className='num'>{fmt(Math.max(0, c))}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        )}
      </section>
    </div>
  );
}
