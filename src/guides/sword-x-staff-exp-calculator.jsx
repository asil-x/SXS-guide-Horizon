import { ExpCalc } from '../components/guide';

export const meta = {
  title: 'Bảng tính EXP lên level',
  desc: 'Nhân vật hoặc Fantomon cần bao nhiêu EXP để lên level, và mất bao lâu trong Bed.',
  order: 1,
  short: 'Bảng tính EXP',
  category: 'tool',
  cover: 'guides/season-upgrade.webp',
  icon: 'tooltips/item_120.png',
  topic: 'season',
};

export default function Page() {
  return (
    <>
      <p>Nhập level hiện tại và level muốn lên để biết cần bao nhiêu EXP. Nếu nhập thêm EXP Bed mỗi giờ, bảng sẽ tính luôn số giờ và số ngày. Với Fantomon, bảng quy ra số Treat cần dùng.</p>
      <p>Lưu ý: trong mỗi mùa, các level <strong>vượt sàn</strong> của mùa (ví dụ trên 100 ở Season 1) tốn EXP nhiều hơn hẳn, nên hãy chọn đúng mùa bạn đang chơi.</p>
      <ExpCalc />
    </>
  );
}
