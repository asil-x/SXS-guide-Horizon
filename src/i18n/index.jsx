// Đa ngôn ngữ: vi (mặc định) và en.
// - Lựa chọn của người xem được nhớ trong trình duyệt. Link chia sẻ có thể ép ngôn ngữ bằng ?lang=en.
// - Lần đầu vào web: người ở Việt Nam (múi giờ máy là giờ Việt Nam) hoặc trình duyệt tiếng Việt
//   thấy tiếng Việt, còn lại thấy tiếng Anh. Web tĩnh không đọc được IP, múi giờ là cách thay thế
//   không cần gửi dữ liệu người xem đi đâu.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { UI } from './ui.js';

export const LANGS = [
  { code: 'vi', label: 'Tiếng Việt', short: 'VI' },
  { code: 'en', label: 'English', short: 'EN' },
];
const CODES = LANGS.map((l) => l.code);
const KEY = 'sxs-lang';
const VN_ZONES = ['Asia/Ho_Chi_Minh', 'Asia/Saigon'];

function inVietnam() {
  try { return VN_ZONES.includes(Intl.DateTimeFormat().resolvedOptions().timeZone); } catch { return false; }
}

function detect() {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (CODES.includes(q)) { localStorage.setItem(KEY, q); return q; }
  } catch {}
  try {
    const saved = localStorage.getItem(KEY);
    if (CODES.includes(saved)) return saved;
  } catch {}
  if (inVietnam()) return 'vi';
  const nav = typeof navigator === 'undefined' ? [] : navigator.languages || [navigator.language];
  if (String(nav[0] || '').toLowerCase().startsWith('vi')) return 'vi';
  return 'en';
}

export function translate(lang, key, vars) {
  let s = UI[lang]?.[key] ?? UI.vi[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.split('{' + k + '}').join(v);
  return s;
}

const Ctx = createContext({ lang: 'vi', setLang: () => {}, t: (k, v) => translate('vi', k, v) });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detect);
  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch {}
    // bỏ ?lang= khỏi địa chỉ để lựa chọn mới không bị ghi đè khi tải lại
    try {
      const u = new URL(location.href);
      if (u.searchParams.has('lang')) { u.searchParams.delete('lang'); history.replaceState(history.state, '', u); }
    } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t: (k, v) => translate(lang, k, v) }), [lang, setLang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
export const useT = () => useContext(Ctx).t;

/** Nút gạt chuyển ngôn ngữ VI / EN. */
export function LangSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div className={'lang-switch ' + lang} role='radiogroup' aria-label={t('lang.label')}>
      <span className='ls-thumb' aria-hidden='true' />
      {LANGS.map((l) => (
        <button key={l.code} type='button' role='radio' aria-checked={lang === l.code} title={l.label} onClick={() => setLang(l.code)}>{l.short}</button>
      ))}
    </div>
  );
}
