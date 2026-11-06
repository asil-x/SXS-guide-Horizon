import { Alert, Img, Tip } from '../components/guide';

export const meta = {
  title: 'Tầm quan trọng của thức ăn',
  category: 'guide',
  cover: 'guides/food-guide.webp',
};

export default function Page() {
  return (
    <>
      <p>Sword x Staff có hệ thống thức ăn khá hay: giúp hồi máu, tăng chỉ số khi đánh trận, và quan trọng nhất là <strong>tăng chỉ số vĩnh viễn với một số loại thức ăn nhất định</strong>.</p>

      <hr />

      <h2 id="healing">Hồi máu</h2>
      <p><Img src="guides/healing-food.webp" alt="sword x staff healing food" /></p>
      <p>Thức ăn cơ bản bạn sẽ phải nấu thường xuyên để hồi máu sau trận. <strong>Mỗi khu vực mới có một loại mới mạnh hơn loại trước.</strong></p>
      <Alert title="Về nhà cũng hồi được HP">
        <p>Các món này cực kỳ hữu ích khi đi dungeon, vì bạn có thể ăn ở trại nghỉ để chuẩn bị cho trận lớn.</p>
      </Alert>
      <p>Các món này đều rẻ (tốn vàng và cây farm được), nên đừng lo bị kẹt vì không có thuốc hồi máu.</p>
      <p>Nếu không biết nguyên liệu nào ở đâu, hãy bấm vào nó trong màn hình chế tạo để dịch chuyển thẳng tới bản đồ và bắt đầu thu thập.</p>

      <hr />

      <h2 id="temporary-buffs">Buff tạm thời</h2>
      <p><Img src="guides/temporary-food.webp" alt="sword x staff temporary food" /></p>
      <p>Thức ăn đơn giản cho buff trong một số trận nhất định. Chúng thường dành cho từng khu vực HOẶC từng kiểu trận, nên hãy luôn đọc kỹ trước khi ăn.</p>
      <p><strong>Thức ăn cũng không có hạn sử dụng</strong>, nên đừng vội ăn hết ngay khi vừa có.</p>
      <h3 id="where-can-i-get-these-foods">Kiếm các món này ở đâu?</h3>
      <ul>
        <li>Tự nấu một số món khi tiến độ game mở ra</li>
        <li>Mở khoá công thức trong Kingdom Shop</li>
      </ul>

      <hr />

      <h2 id="permanent-buffs">Buff vĩnh viễn</h2>
      <p><Img src="guides/permanent-food.webp" alt="sword x staff permanent food" /></p>
      <p>Giờ tới hệ thống quan trọng: tăng chỉ số vĩnh viễn bằng thức ăn.</p>
      <p>Đúng, phần này là pay to win. Nhưng đúng là F2P vẫn có thể kiếm được kha khá chỉ số về lâu dài chỉ bằng cách chơi và farm. <strong>Như hầu hết game idle, đây là chạy marathon chứ không phải chạy nước rút</strong>.</p>
      <p>Lượng chỉ số nhận được phụ thuộc vào số lần bạn đã ăn cùng một món. Nghĩa là càng ăn nhiều thì hiệu quả càng giảm.</p>
      <table className="data-table">
        <tbody>
          <tr><td>1-10</td><td>100%</td></tr>
          <tr><td>11-30</td><td>50%</td></tr>
          <tr><td>31-50</td><td>20%</td></tr>
          <tr><td>51+</td><td>5%</td></tr>
        </tbody>
      </table>
      <h3 id="where-can-i-get-these-foods-1">Kiếm các món này ở đâu?</h3>
      <ul>
        <li>Mua ở nhà đấu giá bằng <Tip>Luminium</Tip></li>
        <li>Trong shop đấu trường (Arena)</li>
        <li>Mua công thức ở nhà đấu giá bằng <Tip>Luminium</Tip></li>
        <li>Phần thưởng Guild Clash</li>
        <li><strong>Nếu may mắn</strong>, nhiệm vụ hằng ngày và <Tip>Mysterious Merchant</Tip> cũng có thể có công thức</li>
      </ul>
    </>
  );
}
