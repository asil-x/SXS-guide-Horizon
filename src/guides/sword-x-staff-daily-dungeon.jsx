import { Alert, Img, Tip } from '../components/guide';

export const meta = {
  title: 'Daily Dungeon (hầm ngục hằng ngày)',
  category: 'guide',
  cover: 'guides/dungeon-guide.webp',
};

export default function Page() {
  return (
    <>
      <p>Daily Dungeon là một trong những hoạt động quan trọng nhất cần làm mỗi ngày, vì đây là <strong>nguồn trang bị và mảnh trang bị chính</strong> để phát triển tài khoản.</p>
      <p>Mỗi ngày bạn có 2 lượt miễn phí. Các lượt thêm tốn <Tip>Dawnium</Tip> (2 lượt mỗi ngày, lần lượt 100 và 150), và <strong>rất nên mua đủ mỗi ngày</strong> nếu bạn muốn trang bị luôn theo kịp tiến độ.</p>
      <p><Img src="guides/daily-dungeon-sxs.webp" alt="sword x staff daily dungeon" /></p>

      <hr />

      <h2 id="rewards">Phần thưởng</h2>
      <p>Phần thưởng chính từ Daily Dungeon là <strong>trang bị, mảnh trang bị và <Tip>Raw Ore</Tip> </strong>. Cần 100 mảnh để chế tạo một món trang bị tuỳ chọn, món này cũng có thể bán ở nhà đấu giá để lấy <Tip>Dawnium</Tip>.</p>
      <Alert title="Lưu ý về mảnh trang bị">
        <p>Khi mở dungeon mới, mảnh của dungeon cũ chỉ có thể phân giải, không bán được nữa. <strong>Đừng giữ khư khư một đống mảnh cũ.</strong></p>
      </Alert>
      <p>Các loại ô trong dungeon và phần thưởng:</p>
      <table className="data-table">
        <tbody>
          <tr><td>Rương Vàng</td><td>Trang bị Epic hoặc Legendary + <Tip>Raw Ore</Tip></td></tr>
          <tr><td>Rương Bạc</td><td>Trang bị Rare + <Tip>Raw Ore</Tip></td></tr>
          <tr><td>Ô trống</td><td><Tip>Raw Ore</Tip> (chỉ có thế)</td></tr>
        </tbody>
      </table>
      <p>Các bậc chất lượng trang bị mở dần theo tiến độ game:</p>
      <table className="data-table">
        <tbody>
          <tr><td>Legendary trở xuống</td><td>Có thể nhận từ đầu game</td></tr>
          <tr><td>Mythic</td><td>Mecha Summit</td></tr>
          <tr><td>Divine</td><td>Aquorigin Shrine Hard</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="ranking">Xếp hạng</h2>
      <p>Hạng của bạn (S, A, B…) chỉ phụ thuộc vào <strong>việc bạn đi được bao xa trong dungeon</strong>, không phụ thuộc vào các ô bạn chọn trên đường đi.</p>
      <Alert type="red" title="Hạ boss = hạng S">
        <p>Nếu hạ được boss, bạn chắc chắn đạt hạng S bất kể đi đường nào. <strong>Luôn nhắm tới điều đó.</strong></p>
      </Alert>
      <p>Hạng cuối cùng ảnh hưởng trực tiếp tới chất lượng rương cuối, quyết định:</p>
      <ul>
        <li>Số mảnh bạn nhận được</li>
        <li>Tỉ lệ rơi ra một món trang bị hoàn chỉnh</li>
      </ul>
      <p>Vì vậy, tối ưu đường đi để tới được boss quan trọng hơn việc chọn ô “an toàn nhất” hay ô “khó nhất”.</p>

      <hr />

      <h2 id="boosting-drops">Tăng tỉ lệ rơi đồ</h2>
      <p>Có một vài cơ chế giúp tăng đáng kể phần thưởng dungeon, tuỳ vào tiến độ game của bạn.</p>
      <h3 id="gear-stats">Chỉ số trang bị</h3>
      <p>Một số trang bị có thể ra một trong hai chỉ số đặc biệt:</p>
      <ul>
        <li><strong>2x Rating Reward Rate</strong>: Nhân đôi số mảnh hoặc thêm cơ hội nhận trang bị từ rương cuối</li>
        <li><strong>Gear Drop Promotion Rate</strong>: Tăng tỉ lệ nâng chất lượng đồ rơi (Epic → Legendary, Rare → Epic…)</li>
      </ul>
      <p>Các chỉ số này gắn với từng địa điểm, nên chỉ có tác dụng ở đúng dungeon tương ứng. <strong>Chưa cần quan tâm tới chúng cho tới late game</strong>, khi bạn đủ mạnh để mặc đồ có chỉ số này mà vẫn đạt hạng S.</p>

      <hr />

      <h3 id="lucky-statue-relic">Relic Lucky Statue</h3>
      <p><Img src="guides/lucky-statue.webp" alt="sword x staff lucky-statue" /></p>
      <p>Relic này có được từ sự kiện Grand Treasure Hunt. Nó cho <strong>x2 phần thưởng xếp hạng</strong> và được thêm <strong>+20%</strong> nếu trang bị trước khi vào dungeon.</p>
      <p>Nhớ đeo nó trước khi bắt đầu các lượt trong ngày, đánh xong có thể tháo ra.</p>

      <hr />

      <h3 id="seasonal-upgrades">Nâng cấp theo mùa</h3>
      <p><Img src="guides/season-upgrade.webp" alt="sword x staff season-upgrade" /></p>
      <p>Nâng cấp theo mùa cũng có thể cho <strong>x2 phần thưởng xếp hạng hoặc tăng tỉ lệ nâng cấp đồ</strong>, cộng dồn với chỉ số từ trang bị.</p>
    </>
  );
}
