import { Codes } from '../components/guide';

export const meta = {
  title: 'Code miễn phí Sword x Staff',
  desc: 'Tổng hợp gift code còn hạn, bấm để chép nhanh.',
  order: 1,
  category: 'guide',
  cover: 'guides/codes.webp',
  icon: 'tooltips/item_303.png',
  topic: 'event',
};

export default function Page() {
  return (
    <>
      <h2 id="where-to-claim-codes">Cách nhập code</h2>
      <ol>
        <li>Mở menu chính</li>
        <li>Bấm vào User Center</li>
        <li>Vào màn hình “Gift Code”</li>
        <li>Nhập code để nhận quà</li>
      </ol>

      <hr />

      <h2 id="working-codes">Code còn dùng được</h2>
      <Codes codes={[
        'SXSWITHYOU',
        'SXSFACEBOOK',
        'LUCKYGACHA',
        'LEVELUPNOW',
        'YUMMYVIP',
        'SUPERSKILL',
        'NPC2026',
        'WORLDOPEN',
      ]} />
      <p>Nếu có code nào không dùng được nữa, hãy nhắn cho Guild Horizon để được cập nhật.</p>

      <hr />

      <h2 id="old-codes">Code cũ (đã hết hạn)</h2>
      <Codes expired codes={[]} />
    </>
  );
}
