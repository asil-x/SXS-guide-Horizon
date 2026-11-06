# Hướng dẫn viết và sửa guide

Mỗi guide là **một file `.jsx`** trong `src/guides/`. Tên file chính là đường dẫn trang:
`src/guides/sword-x-staff-codes.jsx` → `#/guides/sword-x-staff-codes`.

Trang chủ, menu, mục lục, "bài trước / bài tiếp" đều được tạo tự động, **không cần sửa file nào khác**.

```bash
npm install   # lần đầu
npm run dev   # mở http://localhost:5173, sửa file là trang tự cập nhật
```

## Cấu trúc một file guide

```jsx
import { Alert, Tip } from '../components/guide';

export const meta = {
  title: 'Tên hiển thị của guide',
  short: 'Knight',             // (tuỳ chọn) tên ngắn, dùng cho menu Build
  category: 'guide',           // 'class' | 'guide' | 'tool'
  cover: 'guides/pvp.webp',    // ảnh bìa, đường dẫn trong public/img/
  // order: 1,                 // (tuỳ chọn) thứ tự trong nhóm, mặc định xếp theo tên
  // draft: true,              // (tuỳ chọn) chỉ hiện khi chạy dev, không xuất bản
};

export default function Page() {
  return (
    <>
      <p>Đoạn mở đầu...</p>

      <h2 id="phan-1">Phần 1</h2>
      <p>Nội dung, có thể dùng <strong>in đậm</strong>, <em>in nghiêng</em>, <Tip>Dawnium</Tip>...</p>
    </>
  );
}
```

- Mỗi `<h2>` / `<h3>` sẽ tự xuất hiện trong **mục lục**. `id` là tuỳ chọn (dùng để link tới đúng mục).
- Dùng HTML bình thường: `<p>`, `<ul>/<li>`, `<ol>`, `<table>`, `<hr />`, `<details><summary>`…
- Khác với HTML: thẻ đơn phải đóng (`<hr />`, `<br />`), dùng `className` thay cho `class`.
  Ký tự `{ } < >` trong chữ phải viết là `&#123; &#125; &lt; &gt;`.

## Các component

Import những gì cần dùng ở đầu file: `import { Tip, Build, ... } from '../components/guide';`

| Component | Dùng để | Ví dụ |
|---|---|---|
| `Tip` | Tên skill / vật phẩm / pet / companion kèm icon và tooltip | `<Tip>Rebound</Tip>` |
| `Build` | Bộ skill (bấm vào để xem chi tiết) | xem bên dưới |
| `Tabs` + `Tab` | Chia nội dung thành tab | xem bên dưới |
| `Alert` | Hộp ghi chú. `type`: `gold` (mặc định), `red`, `blue`, `green` | `<Alert type="red" title="Lưu ý"><p>...</p></Alert>` |
| `ProsCons` + `Pro` + `Con` | Bảng điểm mạnh / điểm yếu | xem bên dưới |
| `Codes` | Danh sách gift code bấm để chép | `<Codes codes={['ABC', 'XYZ']} />` |
| `Img` | Ảnh minh hoạ, bấm để phóng to | `<Img src="guides/pvp.webp" alt="..." />` |

### Tip

```jsx
<Tip>Rebound</Tip>
<Tip name="Rebound">kỹ năng phản đòn</Tip>   {/* chữ hiển thị khác tên */}
```

Dữ liệu tooltip lấy từ `src/data/tooltips.json` (theo tên). Nếu không có ở đó, sẽ tìm trong
`src/data/skills.json` — nên mọi skill đã có trong dữ liệu đều dùng được ngay.
Muốn thêm vật phẩm/pet mới, thêm một mục vào `tooltips.json`:

```json
"Raw Ore": {
  "kind": "item",                     // skill | item | pet | companion
  "icon": "tooltips/item_41300.png",  // đường dẫn trong public/img/
  "rarity": "W",                      // SSR | SR | R | W | rainbow (tuỳ chọn)
  "description": "Use them for gear enhancement.",
  "sources": ["Fantasy Ladder", "Gameplay"]
}
```

Tên không tìm thấy sẽ hiện màu đỏ (và báo trong console khi chạy dev).

### Build

```jsx
<Build
  techniques={['Leap Attack', 'Mountain Collapse', 'Gravity Pull', 'Whirlwind Slash']}
  charms={['Blade of Lament', 'Insightful Eye', 'Block Awareness', 'Blade Tempest']}
/>
```

Tên skill phải trùng tên trong `src/data/skills.json`. Skill không tìm thấy sẽ có viền đỏ.

### Tabs

```jsx
<Tabs>
  <Tab label="AoE">
    <p>Nội dung tab 1</p>
  </Tab>
  <Tab label="Đơn mục tiêu">
    <p>Nội dung tab 2</p>
  </Tab>
</Tabs>

{/* Tab lớn có icon, ví dụ chọn class */}
<Tabs big>
  <Tab label="Warrior" icon="skills/classes/warrior.png">...</Tab>
</Tabs>
```

### ProsCons

```jsx
<ProsCons id="pros-cons" title="Điểm mạnh & điểm yếu của Knight">
  <Pro>Đỡ đòn tốt</Pro>
  <Con>Sát thương thấp</Con>
</ProsCons>
```

## Ảnh

Bỏ ảnh vào `public/img/...` rồi dùng đường dẫn tính từ `public/img/`, ví dụ
`public/img/guides/pvp.webp` → `<Img src="guides/pvp.webp" />` hoặc `cover: 'guides/pvp.webp'`.

## Thêm guide mới

1. Copy một file có sẵn trong `src/guides/` (vd. `sword-x-staff-food-guide.jsx`) và đổi tên.
2. Sửa `meta` và nội dung.
3. Chạy `npm run dev` để xem. Xong thì commit — GitHub Actions sẽ tự build và deploy.

## Build class lấy từ dữ liệu

```jsx
<Tab label="Guardian" icon="skills/classes/guardian.png">
  <ClassBuild name="Guardian" />
</Tab>
```

`ClassBuild` hiện mô tả class và bộ skill đề xuất, đọc từ `src/data/classes.json`. Bạn có thể viết thêm
nội dung riêng ngay dưới nó, trong cùng `<Tab>`.

## Cập nhật dữ liệu và bản dịch

```bash
npm run sync:compass   # lấy skill / Fantomon / companion / build class mới từ Sword x Staff Compass
npm run translate      # áp bản dịch tiếng Việt lên dữ liệu
```

- `sync:compass` chỉ **thêm** mục mới và trường còn thiếu, không ghi đè dữ liệu hay bản dịch đang có. Icon còn thiếu
  được tải về `public/img/.../compass/`. Xong việc, script tự chạy `translate`.
- Câu nào chưa có bản dịch sẽ được ghi vào `scripts/i18n/todo.json` theo dạng `"câu tiếng Anh": ""`.
  Điền bản dịch vào rồi chạy `npm run translate`, các câu đó sẽ được chuyển vào từ điển `scripts/i18n/vi.json`.
- Câu theo khuôn mẫu (ví dụ "Obtain X's Journal…") nằm trong `scripts/i18n/rules.mjs`.
