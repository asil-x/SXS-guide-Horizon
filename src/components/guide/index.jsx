// Các component dùng để viết nội dung guide (src/guides/*.jsx).
// Xem HUONG-DAN-VIET-GUIDE.md để biết cách dùng.
import { Children, isValidElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useData } from '../../lib/data.js';
import { useT } from '../../i18n/index.jsx';
import { asset, fallbackImg, onImgError, skillIcon } from '../../lib/img.js';
import { useSkills } from '../../lib/skills.js';
import SkillPopup from '../SkillPopup.jsx';

const textOf = (node) => Children.toArray(node).map((c) => (typeof c === 'string' || typeof c === 'number' ? c : textOf(c?.props?.children))).join('');

const KIND = { skill: 'kind.skill', item: 'kind.item', pet: 'kind.pet', companion: 'kind.companion' };
const DB_LINK = { pet: '/db/fantomons', companion: '/db/companions' };

function fromSkill(s) {
  if (!s) return null;
  return { kind: 'skill', icon: skillIcon(s), rarity: 'SSR', tags: [s.class, s.type, ...(s.tags || [])].filter(Boolean), description: s.description, skill: s };
}

/* ---------- Tooltip ---------- */

function TipCard({ name, t, anchor, onEnter, onLeave }) {
  const tr = useT();
  const ref = useRef(null);
  const [pos, setPos] = useState({ left: -9999, top: 0 });
  useLayoutEffect(() => {
    const a = anchor.getBoundingClientRect();
    const el = ref.current.getBoundingClientRect();
    const left = Math.min(Math.max(8, a.left), window.innerWidth - el.width - 8);
    const below = a.bottom + 8;
    const top = below + el.height > window.innerHeight - 8 && a.top - el.height - 8 > 8 ? a.top - el.height - 8 : below;
    setPos({ left, top });
  }, [anchor]);
  return createPortal(
    <div ref={ref} className={'tip-card r-' + (t.rarity || 'none')} style={pos} onPointerEnter={onEnter} onPointerLeave={onLeave} role='tooltip'>
      <div className='tip-card-head'>
        <img src={asset(t.icon)} alt='' onError={onImgError} />
        <div>
          <strong>{name}</strong>
          <small>{KIND[t.kind] ? tr(KIND[t.kind]) : ''}{t.rarity && t.rarity !== 'rainbow' ? ' · ' + t.rarity : ''}</small>
        </div>
      </div>
      {t.tags && <div className='tip-tags'>{t.tags.map((x) => <span className='tag' key={x}>{x}</span>)}</div>}
      {t.description && <p>{t.description}</p>}
      {t.sources && (
        <div className='tip-sources'>
          <span className='label'>{tr('source')}</span>
          {t.sources.map((s) => <span className='src' key={s}>{s}</span>)}
        </div>
      )}
      {!t.description && DB_LINK[t.kind] && <Link className='tip-more' to={DB_LINK[t.kind]}>{tr('tip.more')}</Link>}
    </div>,
    document.body
  );
}

/** Tên kỹ năng/vật phẩm/pet/companion kèm icon và tooltip. Dữ liệu lấy từ src/data/tooltips.json (hoặc skills.json). */
export function Tip({ children, name }) {
  const label = textOf(children).trim();
  const key = name || label;
  const TIPS = useData('tooltips');
  const known = TIPS?.[key];
  const skills = useSkills(!!TIPS && !known);
  const t = known || fromSkill(skills?.[key]);
  const ref = useRef(null);
  const timer = useRef(0);
  const pointer = useRef('mouse');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (e) => { if (!ref.current?.contains(e.target) && !e.target.closest?.('.tip-card')) setOpen(false); };
    const hide = () => setOpen(false);
    document.addEventListener('pointerdown', close);
    window.addEventListener('scroll', hide, { passive: true });
    return () => { document.removeEventListener('pointerdown', close); window.removeEventListener('scroll', hide); };
  }, [open]);

  if (!t) {
    if (!TIPS || !skills) return <strong>{children}</strong>; // đang tải dữ liệu
    if (import.meta.env.DEV) console.warn('[Tip] Không tìm thấy "' + key + '" trong tooltips.json / skills.json');
    return <strong className='tip missing' title={import.meta.env.DEV ? 'Không tìm thấy dữ liệu tooltip' : undefined}>{children}</strong>;
  }
  const enter = () => { clearTimeout(timer.current); setOpen(true); };
  const leave = () => { timer.current = setTimeout(() => setOpen(false), 120); };
  return (
    <span
      ref={ref}
      className={'tip k-' + t.kind + ' r-' + (t.rarity || 'none')}
      tabIndex={0}
      onPointerDown={(e) => { pointer.current = e.pointerType; }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && enter()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && leave()}
      onClick={() => pointer.current !== 'mouse' && setOpen((o) => !o)}
      onFocus={enter}
      onBlur={leave}
    >
      <img className='tip-icon' src={asset(t.icon)} alt='' loading='lazy' onError={onImgError} />
      <span className='tip-name'>{children}</span>
      {open && <TipCard name={key} t={t} anchor={ref.current} onEnter={enter} onLeave={leave} />}
    </span>
  );
}

/* ---------- Build ---------- */

/** Bộ skill của một build. Tên skill phải trùng với tên trong src/data/skills.json. */
export function Build({ techniques = [], charms = [] }) {
  const skills = useSkills(true);
  const [sel, setSel] = useState(null);
  const sections = [['Techniques', techniques], ['Charms', charms]].filter(([, list]) => list.length);
  return (
    <div className='build'>
      {sections.map(([label, list]) => (
        <div className='build-section' key={label}>
          <div className='build-label'>{label}</div>
          <div className='build-grid'>
            {list.map((n, i) => {
              const s = skills?.[n];
              const missing = skills && !s;
              return (
                <button key={n + i} type='button' className={'build-card' + (missing ? ' missing' : '')} onClick={() => s && setSel(s)} title={missing ? 'Không tìm thấy trong skills.json' : n}>
                  <img src={s ? skillIcon(s) : fallbackImg} alt='' loading='lazy' onError={onImgError} />
                  <span>{n}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
      {sel && <SkillPopup skill={sel} onClose={() => setSel(null)} />}
    </div>
  );
}

/* ---------- Class build (dữ liệu từ src/data/classes.json) ---------- */

/** Build đề xuất của một class, lấy tự động từ classes.json (đồng bộ bằng npm run sync:compass). */
export function ClassBuild({ name }) {
  const CLASSES = useData('classes');
  if (!CLASSES) return null;
  const c = CLASSES.find((x) => x.name === name);
  if (!c) return <p className='tip missing'>Không tìm thấy class “{name}” trong classes.json</p>;
  return (
    <div className='class-build'>
      <div className='class-build-meta'>
        <span className='tag gold'>Rank {c.rank}</span>
        {c.role && <span className='tag'>{c.role}</span>}
        {c.chain?.length > 1 && <span className='muted'>{c.chain.join(' → ')}</span>}
      </div>
      {c.description && <p><em>{c.description}</em></p>}
      <Build techniques={c.techniques} charms={c.charms} />
    </div>
  );
}

/* ---------- Tabs ---------- */

/** Nhóm tab. Dùng `big` cho tab lớn có icon (vd. chọn class). */
export function Tabs({ children, big }) {
  const tabs = Children.toArray(children).filter(isValidElement);
  const [i, setI] = useState(0);
  const cur = Math.min(i, tabs.length - 1);
  if (big) return <TierTabs tabs={tabs} cur={cur} setCur={setI} />;
  return (
    <div className={'tabs' + (big ? ' big' : '')}>
      <div className='tab-list' role='tablist'>
        {tabs.map((t, k) => (
          <button key={k} type='button' role='tab' aria-selected={k === cur} className={k === cur ? 'on' : ''} onClick={() => setI(k)}>
            {t.props.icon && <img src={asset(t.props.icon)} alt='' onError={onImgError} />}
            <span>{t.props.label}</span>
          </button>
        ))}
      </div>
      <div className='tab-panel' role='tabpanel'>{tabs[cur]}</div>
    </div>
  );
}

/** <Tabs big>: thanh tiến trình class theo tier + phần chi tiết có tiêu đề lớn và nút chuyển tier. */
function TierTabs({ tabs, cur, setCur }) {
  const t = useT();
  const track = useRef(null);
  const panel = useRef(null);
  // Giữ tier đang chọn luôn nằm trong vùng nhìn thấy của thanh cuộn ngang (điện thoại).
  useEffect(() => {
    const el = track.current?.children[cur];
    if (el) track.current.scrollTo({ left: el.offsetLeft - track.current.clientWidth / 2 + el.clientWidth / 2, behavior: 'smooth' });
  }, [cur]);
  const go = (k, scroll) => {
    setCur(k);
    if (scroll && panel.current && panel.current.getBoundingClientRect().top < 0) panel.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const tab = tabs[cur];
  const prev = tabs[cur - 1];
  const next = tabs[cur + 1];
  return (
    <div className='tiers'>
      <div className='tier-track' role='tablist' ref={track}>
        {tabs.map((x, k) => (
          <button key={k} type='button' role='tab' aria-selected={k === cur} className={'tier-step' + (k === cur ? ' on' : '') + (k < cur ? ' done' : '')} onClick={() => go(k)}>
            <span className='ts-icon'>{x.props.icon && <img src={asset(x.props.icon)} alt='' onError={onImgError} />}</span>
            <span className='ts-text'><small>Tier {k + 1}</small><span>{x.props.label}</span></span>
          </button>
        ))}
      </div>
      <div className='tier-panel' role='tabpanel' ref={panel} key={cur}>
        <div className='tier-head'>
          {tab.props.icon && <img src={asset(tab.props.icon)} alt='' onError={onImgError} />}
          <div className='th-text'>
            <span className='th-tier'>Tier {cur + 1} <em>/ {tabs.length}</em></span>
            <h3>{tab.props.label}</h3>
          </div>
          <div className='th-nav'>
            <button type='button' disabled={!prev} onClick={() => go(cur - 1)} aria-label={t('guide.prevTier')}>‹</button>
            <button type='button' disabled={!next} onClick={() => go(cur + 1)} aria-label={t('guide.nextTier')}>›</button>
          </div>
        </div>
        <div className='tier-body'>{tab}</div>
        {next && (
          <button type='button' className='tier-next' onClick={() => go(cur + 1, true)}>
            {next.props.icon && <img src={asset(next.props.icon)} alt='' onError={onImgError} />}
            <span><small>{t('guide.nextTier')}</small>{next.props.label}</span>
            <i aria-hidden='true'>→</i>
          </button>
        )}
      </div>
    </div>
  );
}

/** Một tab bên trong <Tabs>. Props: label, icon (tuỳ chọn). */
export function Tab({ children }) {
  return <>{children}</>;
}

/* ---------- Alert ---------- */

/** Hộp ghi chú. type: gold (mặc định) | red | blue | green */
export function Alert({ type = 'gold', title, children }) {
  return (
    <div className={'alert ' + type}>
      {title && <div className='alert-title'>{title}</div>}
      {children}
    </div>
  );
}

/* ---------- Codes ---------- */

/** Danh sách gift code, bấm để sao chép. */
export function Codes({ codes = [], expired }) {
  const t = useT();
  const [copied, setCopied] = useState(null);
  if (!codes.length) return <p className='muted'>{t('codes.none')}</p>;
  const copy = (c) => {
    navigator.clipboard?.writeText(c);
    setCopied(c);
    setTimeout(() => setCopied((x) => (x === c ? null : x)), 1200);
  };
  return (
    <div className={'code-grid' + (expired ? ' expired' : '')}>
      {codes.map((c) => (
        <button key={c} type='button' className={'code' + (copied === c ? ' copied' : '')} onClick={() => copy(c)}>
          <span>{c}</span>
          <small>{copied === c ? t('codes.copied') : t('codes.copy')}</small>
        </button>
      ))}
    </div>
  );
}

/* ---------- Pros / Cons ---------- */

export function Pro({ children }) {
  return <li>{children}</li>;
}
export function Con({ children }) {
  return <li>{children}</li>;
}

/** Bảng điểm mạnh / điểm yếu. Bên trong dùng <Pro> và <Con>. */
export function ProsCons({ id, title, children }) {
  const t = useT();
  const items = Children.toArray(children).filter(isValidElement);
  const pros = items.filter((c) => c.type === Pro);
  const cons = items.filter((c) => c.type === Con);
  return (
    <section className='pros-cons' id={id}>
      {title && <h2>{title}</h2>}
      <div className='pc-grid'>
        <div className='pc pros'><div className='pc-head'>{t('pros')}</div><ul>{pros}</ul></div>
        <div className='pc cons'><div className='pc-head'>{t('cons')}</div><ul>{cons}</ul></div>
      </div>
    </section>
  );
}

/* ---------- Image ---------- */

/** Ảnh minh hoạ, bấm để phóng to. src là đường dẫn trong public/img (vd. "guides/pvp.webp"). */
export function Img({ src, alt = '' }) {
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e) => e.key === 'Escape' && setZoom(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom]);
  return (
    <>
      <img className='shot' src={asset(src)} alt={alt} loading='lazy' decoding='async' onError={onImgError} onClick={() => setZoom(true)} />
      {zoom && createPortal(
        <div className='overlay lightbox' onClick={() => setZoom(false)}>
          <img src={asset(src)} alt={alt} />
        </div>,
        document.body
      )}
    </>
  );
}

export { ClassChange } from './ClassChange.jsx';
