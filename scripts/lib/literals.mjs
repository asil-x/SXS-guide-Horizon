// Đọc dữ liệu literal (mảng/object/chuỗi/số) từ một file JS đã bundle MÀ KHÔNG chạy code đó.
import { parse } from 'acorn';

const UNRESOLVED = Symbol('unresolved');

export function extractLiterals(src) {
  const ast = parse(src, { ecmaVersion: 'latest', sourceType: 'module' });

  // tên biến -> node khởi tạo. Biến cấp ngoài cùng được ưu tiên (code rút gọn dùng lại tên ngắn ở phạm vi con).
  const decls = new Map();
  for (const st of ast.body) {
    const d = st.type === 'VariableDeclaration' ? st : st.declaration?.type === 'VariableDeclaration' ? st.declaration : null;
    if (d) for (const v of d.declarations) if (v.id.type === 'Identifier' && v.init) decls.set(v.id.name, v.init);
  }
  (function walk(n) {
    if (!n || typeof n.type !== 'string') return;
    if (n.type === 'VariableDeclarator' && n.id.type === 'Identifier' && n.init && !decls.has(n.id.name)) decls.set(n.id.name, n.init);
    for (const k in n) {
      const v = n[k];
      if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === 'object' && v.type) walk(v);
    }
  })(ast);

  function lit(n, seen) {
    switch (n.type) {
      case 'Literal': return n.value;
      case 'TemplateLiteral': return n.expressions.length ? UNRESOLVED : n.quasis.map((q) => q.value.cooked).join('');
      case 'ArrayExpression': return n.elements.map((e) => (e ? lit(e, seen) : null));
      case 'ObjectExpression': {
        const o = {};
        for (const p of n.properties) {
          if (p.type !== 'Property' || p.computed) continue;
          o[p.key.type === 'Identifier' ? p.key.name : p.key.value] = lit(p.value, seen);
        }
        return o;
      }
      case 'UnaryExpression': {
        const v = lit(n.argument, seen);
        if (v === UNRESOLVED) return UNRESOLVED;
        if (n.operator === '-' && typeof v === 'number') return -v;
        if (n.operator === '!') return !v;
        return UNRESOLVED;
      }
      case 'Identifier': {
        if (n.name === 'undefined') return null;
        if (seen.has(n.name) || !decls.has(n.name)) return UNRESOLVED;
        return lit(decls.get(n.name), new Set(seen).add(n.name));
      }
      default: return UNRESOLVED;
    }
  }
  const clean = (v) => (v === UNRESOLVED ? null : Array.isArray(v) ? v.map(clean) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, clean(x)])) : v);

  const out = {};
  for (const [name, init] of decls) {
    if (init.type === 'ArrayExpression' || init.type === 'ObjectExpression') out[name] = clean(lit(init, new Set([name])));
  }
  return out;
}

/** Tìm mảng đầu tiên mà phần tử có đủ các trường đã cho. */
export function findArray(vars, ...fields) {
  return Object.values(vars).find((v) => Array.isArray(v) && v[0] && typeof v[0] === 'object' && fields.every((f) => f in v[0])) || null;
}
