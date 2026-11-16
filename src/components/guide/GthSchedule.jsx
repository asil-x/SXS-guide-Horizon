// Grand Treasure Hunt: lịch từng tuần với mọi món Level 1-5, khuyến nghị nên mua / skip và số dư năng lượng (dữ liệu: src/lib/gth.js).
import { useState } from 'react';
import { GTH_EXP, GTH_ITEMS, GTH_LEVELS, GTH_PRICE, GTH_WEEKLY, GTH_WEEKS } from '../../lib/gth.js';
import { asset, onImgError } from '../../lib/img.js';
import { useT } from '../../i18n/index.jsx';

const fmt = (n) => Number(n).toLocaleString('en-US');
const short = (n) => {
  if (n < 1000) return String(n);
  const k = n / 1000;
  return Number(k.toFixed(k >= 100 ? 0 : k >= 10 ? 1 : 2)) + 'K';
};
const item = (id) => GTH_ITEMS[id] || { name: String(id) };
const key = (li, gi) => li + '-' + gi;
const ALL_KEYS = GTH_LEVELS.flatMap((lv, li) => lv.map((_, gi) => key(li, gi)));

// Món nên mua ở mỗi level (vị trí trong level): Basic Treats, Random Rare Gift, Destiny Fruit, Legendary Auroral Badge, phần thưởng nổi bật.
// Cùng level cùng giá, nên chọn các món này vẫn là đường rẻ nhất tới phần thưởng nổi bật.
const REC = [2, 1, 0, 1, 0];
const REC_KEYS = REC.map((gi, li) => key(li, gi));
const TO_REWARD = GTH_PRICE.reduce((a, b) => a + b, 0);
const ALL = GTH_PRICE.reduce((a, p, li) => a + p * GTH_LEVELS[li].length, 0);

// Giống mặc định của planner: tuần Special Relic thì lấy, còn lại skip.
const recommend = (wk) => (wk.kind === 'special-relic' ? 'reward' : 'skip');

/** Mọi món của một tuần, theo level. */
function listings(wk) {
  return GTH_LEVELS.map((lv, li) => lv.map((g, gi) => {
    if (g.featured) return { k: key(li, gi), item: wk.item, n: wk.n || 1, featured: true };
    if (g.item === null) return { k: key(li, gi), item: wk.tool, n: g.n };
    return { k: key(li, gi), item: g.item, n: g.n ?? wk.l1[gi] };
  }));
}

const costOf = (picks) => [...picks].reduce((t, k) => t + GTH_PRICE[Number(k.split('-')[0])], 0);
/** Món ở level chưa mở được: [level, năng lượng còn thiếu ở các level dưới]. */
function locked(picks) {
  let below = 0;
  for (let li = 0; li < GTH_LEVELS.length; li++) {
    const here = GTH_LEVELS[li].filter((_, gi) => picks.has(key(li, gi))).length;
    if (here && below < GTH_EXP[li]) return [li + 1, GTH_EXP[li] - below];
    below += here * GTH_PRICE[li];
  }
  return null;
}

function schedule({ held, weekly, from, plan, picks }) {
  let bal = held;
  return GTH_WEEKS.slice(from).map((wk, k) => {
    const i = from + k;
    if (k) bal += weekly;
    const p = plan[i] || recommend(wk);
    const set = p === 'custom' ? picks[i] || new Set() : new Set(p === 'reward' ? REC_KEYS : p === 'all' ? ALL_KEYS : []);
    const cost = costOf(set);
    const lock = locked(set);
    const before = bal;
    const ok = before >= cost && !lock;
    if (ok) bal -= cost;
    return { wk, i, p, set, cost, lock, before, after: bal, ok };
  });
}

function Num({ label, value, onChange }) {
  return (
    <label className='gth-field'>
      <span>{label}</span>
      <span className='gth-withicon'>
        <img src={asset('tooltips/Money_17.png')} alt='' onError={onImgError} />
        <input className='input' type='number' min='0' step='10' value={value} onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))} />
      </span>
    </label>
  );
}

/** Lịch Grand Treasure Hunt: chọn tuần đang chạy, năng lượng đang có, xem tuần nào nên lấy hay skip và nên mua món nào. */
export function GthSchedule() {
  const t = useT();
  const [held, setHeld] = useState(0);
  const [weekly, setWeekly] = useState(GTH_WEEKLY);
  const [from, setFrom] = useState(0);
  const [plan, setPlan] = useState({});
  const [picks, setPicks] = useState({});
  const [tab, setTab] = useState(null);

  const label = (wk) => (wk.s ? t('gth.season', { x: wk.s }) + ' · ' + t('gth.week', { x: wk.w }) : t('gth.opening'));
  const rows = schedule({ held, weekly, from, plan, picks });
  const seasons = [...new Set(rows.map((r) => r.wk.s))];
  const season = seasons.includes(tab) ? tab : seasons[0];
  const got = rows.filter((r) => r.ok && r.set.has(REC_KEYS[4])).length;
  const firstShort = rows.find((r) => !r.ok);
  const changed = Object.keys(plan).length > 0;

  const choose = (i, p) => setPlan((x) => ({ ...x, [i]: p }));
  const toggle = (r, k) => {
    const set = new Set(r.set);
    if (set.has(k)) set.delete(k); else set.add(k);
    setPicks((x) => ({ ...x, [r.i]: set }));
    choose(r.i, 'custom');
  };

  return (
    <div className='gth-tool'>
      <div className='gth-fields'>
        <Num label={t('gth.held')} value={held} onChange={setHeld} />
        <Num label={t('gth.weekly')} value={weekly} onChange={setWeekly} />
        <label className='gth-field'>
          <span>{t('gth.from')}</span>
          <select className='input' value={from} onChange={(e) => { setFrom(Number(e.target.value)); setTab(null); }}>
            {GTH_WEEKS.map((wk, i) => <option key={i} value={i}>{label(wk)}</option>)}
          </select>
        </label>
      </div>

      <div className='gth-sum'>
        <div><b>{got}</b><span>{t('gth.sum.got')}</span></div>
        <div><b>{rows.length}</b><span>{t('gth.sum.weeks')}</span></div>
        {firstShort
          ? <div className='bad'><b>{fmt(Math.max(0, firstShort.cost - firstShort.before))}</b><span>{t('gth.sum.short', { x: label(firstShort.wk) })}</span></div>
          : <div><b>{fmt(rows.length ? rows[rows.length - 1].after : held)}</b><span>{t('gth.sum.end')}</span></div>}
      </div>
      <p className='muted gth-note'>
        {t('gth.note', { r: fmt(TO_REWARD), a: fmt(ALL) })}
        {changed && <> <button type='button' className='gth-reset' onClick={() => { setPlan({}); setPicks({}); }}>{t('gth.reset')}</button></>}
      </p>

      <div className='cr-pick tiers gth-tabs' role='tablist'>
        {seasons.map((s) => (
          <button key={s} type='button' role='tab' aria-selected={s === season} className={s === season ? 'on' : ''} onClick={() => setTab(s)}>
            {s ? 'S' + s : t('gth.opening')}
          </button>
        ))}
      </div>

      <div className='gth-rows'>
        {rows.filter((r) => r.wk.s === season).map((r) => {
          const { wk } = r;
          const it = item(wk.item);
          const rec = recommend(wk);
          return (
            <article key={r.i} className={'gth-row' + (r.ok ? '' : ' short') + (r.p === 'skip' ? ' skip' : '')}>
              <img className='gth-icon' src={asset(it.icon)} alt='' onError={onImgError} />
              <div className='gth-info'>
                <div className='gth-when'>
                  <b>{wk.s ? t('gth.week', { x: wk.w }) : t('gth.opening')}</b>
                  <span className={'gth-rec ' + rec}>{t('gth.rec.' + rec)}</span>
                </div>
                <div className='gth-name'>{it.name}{wk.n ? ' x' + fmt(wk.n) : ''}</div>
                <div className='gth-kind'>{t('gth.kind.' + wk.kind)}</div>
                {wk.opts && (
                  <div className='gth-opts'>
                    <span>{t('gth.choose')}</span>
                    {wk.opts.map((o) => (
                      <span key={o} className='gth-opt' title={item(o).name}>
                        <img src={asset(item(o).icon)} alt='' onError={onImgError} />{item(o).name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className='gth-plan' role='group'>
                {['skip', 'reward', 'all'].map((p) => (
                  <button key={p} type='button' aria-pressed={p === r.p} className={p === r.p ? 'on' : ''} onClick={() => choose(r.i, p)}>
                    {t('gth.plan.' + p)}
                  </button>
                ))}
                {r.p === 'custom' && <button type='button' aria-pressed='true' className='on'>{t('gth.plan.custom', { n: r.set.size })}</button>}
              </div>
              <div className='gth-bal'>
                <div><b>{fmt(r.before)}</b> {t('gth.have')}</div>
                <div>
                  {r.cost > 0 && <>{t('gth.spend', { x: fmt(r.cost) })}, </>}
                  {r.ok
                    ? t('gth.left', { x: fmt(r.after) })
                    : <span className='bad'>{r.lock ? t('gth.locked', { l: r.lock[0], x: fmt(r.lock[1]) }) : t('gth.short', { x: fmt(r.cost - r.before) })}</span>}
                </div>
              </div>

              <div className='gth-levels'>
                {listings(wk).map((lv, li) => (
                  <div key={li} className='gth-lv'>
                    <h4>{t('gth.level', { l: li + 1 })}<small>{GTH_EXP[li] ? t('gth.opens', { x: fmt(GTH_EXP[li]) }) : t('gth.open')}</small></h4>
                    {lv.map((g) => {
                      const x = item(g.item);
                      const isRec = REC_KEYS.includes(g.k);
                      return (
                        <button key={g.k} type='button' className={'gth-good' + (r.set.has(g.k) ? ' on' : '')} aria-pressed={r.set.has(g.k)} onClick={() => toggle(r, g.k)}
                          title={x.name + (isRec ? ' · ' + t('gth.why.' + li) : '')}>
                          <span className='gth-good-icon'>
                            <img src={asset(x.icon)} alt='' loading='lazy' onError={onImgError} />
                            {g.n > 1 && <small>{short(g.n)}</small>}
                          </span>
                          <span className='gth-good-name'>{isRec && <span className='gth-star' aria-label={t('gth.recBuy')}>★</span>}{x.name}</span>
                          <span className='gth-good-price'>{fmt(GTH_PRICE[li])}</span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
