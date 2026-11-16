import { PrimostarCalc } from '../components/guide';

export const meta = {
  title: 'Máy tính Primostar',
  desc: 'Nhập level hiện tại, xem cuối mùa được bao nhiêu Primostar và cần nâng gì để đạt mục tiêu.',
  order: 0,
  short: 'Máy tính Primostar',
  category: 'tool',
  cover: 'guides/season-upgrade.webp',
  icon: 'tooltips/Money_61.png',
  topic: 'season',
};

export default function Page() {
  return (
    <>
      <p>Cuối mùa, mọi level bạn nâng <strong>vượt sàn của mùa</strong> (nhân vật, trang bị, skill, Fantomon, relic) được đổi thành điểm, rồi điểm được đổi thành <strong>Primostar</strong> để mở Astral Pact. Máy tính này làm phép đổi đó cho bạn.</p>
      <ol>
        <li>Chọn mùa đang chơi, nhập Primostar các mùa trước và mục tiêu (nếu có).</li>
        <li>Nhập level hiện tại của từng hệ. Trang bị, skill, Fantomon và relic chỉ cần nhập <strong>level trung bình</strong>.</li>
        <li>Xem số Primostar nhận được, mốc Astral Pact tiếp theo, và nếu còn thiếu thì nâng hệ nào, tốn bao nhiêu tài nguyên.</li>
      </ol>
      <p>Muốn hiểu kỹ Primostar và Astral Pact, xem bài Season, Primostar &amp; Astral Pact.</p>
      <PrimostarCalc />
    </>
  );
}
