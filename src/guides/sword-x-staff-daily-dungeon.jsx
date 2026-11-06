import { Alert, Img, Tip } from '../components/guide';

export const meta = {
  title: 'Daily Dungeon (hầm ngục hằng ngày)',
  desc: 'Hạng S, rương xếp hạng và vì sao 2× Rating Reward thắng Ascension.',
  order: 3,
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
      <p>Phần thưởng chính từ Daily Dungeon là <strong>trang bị, mảnh trang bị và <Tip>Raw Ore</Tip></strong>. Cần 100 mảnh để chế tạo một món trang bị tuỳ chọn, món này cũng có thể bán ở nhà đấu giá để lấy <Tip>Dawnium</Tip>.</p>
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

      <h2 id="boosting-drops">Tăng phần thưởng</h2>
      <p>Có hai chỉ số quyết định bạn nhận thêm bao nhiêu từ dungeon. Chúng nghe giống nhau nhưng tác động lên <strong>hai phần thưởng khác nhau</strong>:</p>
      <ul>
        <li><strong>2× Rating Reward Rate</strong>: tỉ lệ <strong>rương xếp hạng được trả 2 lần</strong>. Màn hình nhận thưởng đánh dấu rương thứ hai là phần thưởng thêm.</li>
        <li><strong>Gear Drop Ascension Rate</strong> (một số dòng ghi là Promotion Rate): tăng tỉ lệ <strong>đồ rơi từ phòng</strong> được nâng lên một bậc chất lượng.</li>
      </ul>

      <h3 id="one-run">Một lượt dungeon trả thưởng gì</h3>
      <p>Mỗi phòng Elite, Boss và boss cuối rơi ra <strong>1 món trang bị</strong>. Khi nhận, mỗi món có một lần thử nâng lên bậc trên, kể cả khi bạn không có chút Ascension nào:</p>
      <table className="data-table">
        <thead><tr><th>Nâng bậc</th><th className="num">Tỉ lệ gốc mỗi phòng</th></tr></thead>
        <tbody>
          <tr><td>Rare → Epic</td><td className="num">30% (Verdantglade: 10%)</td></tr>
          <tr><td>Epic → Legendary</td><td className="num">20% (Verdantglade: 5%)</td></tr>
          <tr><td>Legendary → Mythic</td><td className="num">0,5%</td></tr>
        </tbody>
      </table>
      <p>Cuối lượt là <strong>1 rương xếp hạng</strong> theo hạng của bạn. Ví dụ Gate of Genesis độ khó Hard, hạng S:</p>
      <table className="data-table">
        <thead><tr><th>Phần thưởng</th><th>Nhận được</th></tr></thead>
        <tbody>
          <tr><td>Các phòng Elite</td><td>1 món Rare, 30% lên Epic</td></tr>
          <tr><td>Boss và boss cuối (2 phòng)</td><td>1 món Legendary, 0,5% lên Mythic</td></tr>
          <tr><td>Rương xếp hạng</td><td>96,1%: 10 mảnh Mythic · 2,8%: 1 món Mythic · 1,1%: 1 món Divine</td></tr>
        </tbody>
      </table>
      <p>Quy đổi ra (100 mảnh = 1 món Mythic tuỳ chọn), rương cho khoảng <strong>0,135 món Mythic trở lên mỗi lượt</strong>, trong khi hai lần thử nâng bậc ở phòng boss chỉ đáng khoảng 0,01. <strong>Đồ endgame đến từ rương, không phải từ phòng.</strong></p>

      <h3 id="which-stat">Nên ưu tiên chỉ số nào</h3>
      <p>Số món Mythic trở lên nhận thêm sau 100 lượt Gate of Genesis Hard, hạng S:</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Nguồn</th><th className="num">2× Rating</th><th className="num">Ascension</th><th className="num">2× hơn</th></tr></thead>
          <tbody>
            <tr><td>1 dòng mọi dungeon (2× +5%, Ascension +10%)</td><td className="num">+0,68</td><td className="num">+0,1</td><td className="num">6,8 lần</td></tr>
            <tr><td>1 dòng theo kingdom (2× +10%, Ascension +20%)</td><td className="num">+1,35</td><td className="num">+0,2</td><td className="num">6,8 lần</td></tr>
            <tr><td>Astral Pact tối đa (2× +50%, Ascension +75%)</td><td className="num">+6,75</td><td className="num">+0,75</td><td className="num">9 lần</td></tr>
          </tbody>
        </table>
      </div>
      <Alert type="red" title="Kết luận: 2× Rating Reward luôn thắng">
        <p>Một dòng 2× chỉ có nửa số phần trăm so với dòng Ascension nhưng mang về <strong>khoảng 7 lần nhiều đồ hơn</strong>, vì nó nhân đôi cả rương chứ không chỉ hai lần thử 0,5%. <strong>Từ độ khó Nightmare trở lên, bỏ hẳn Ascension</strong>: rương ở đó trả đồ Divine, còn Ascension chỉ nâng đồ phòng lên Mythic.</p>
      </Alert>
      <p className="muted">Ghi chú: cả hai lần roll diễn ra trên server. Cách tính trên hiểu Ascension là <em>nhân</em> với tỉ lệ gốc (tỉ lệ = gốc × (1 + Ascension)). Đây là cách hiểu khớp với những gì người chơi quan sát, chưa được game xác nhận.</p>

      <h3 id="gear-stats">Dòng chỉ số trên trang bị</h3>
      <p>Đây là các dòng đặc biệt, có từ trang bị Epic trở lên. Mỗi dungeon dùng <strong>dòng chung</strong> cộng với <strong>dòng mang tên kingdom của nó</strong>. Dòng của kingdom khác không có tác dụng.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Dòng</th><th className="num">2× Rating Reward</th><th className="num">Gear Drop Ascension</th></tr></thead>
          <tbody>
            <tr><td>Dungeon (mọi dungeon)</td><td className="num">+5%</td><td className="num">+10%</td></tr>
            <tr><td>Verdantglade, Cinder Ridge, Aqualis</td><td className="num">+5%</td><td className="num">+10%</td></tr>
            <tr><td>Loong Haven, Aethyris</td><td className="num">+5% hoặc +10%</td><td className="num">+10% hoặc +20%</td></tr>
            <tr><td>Harpadia, Ignis</td><td className="num">+10%</td><td className="num">+20%</td></tr>
          </tbody>
        </table>
      </div>
      <p>Thứ tự nên làm:</p>
      <ol>
        <li>Làm <strong>một bộ đồ farm riêng</strong>, đặt dòng 2× của kingdom bạn đang farm lên mọi món có thể ra dòng đó.</li>
        <li>Sau đó tới dòng 2× chung (+5%).</li>
        <li>Nâng sao relic <strong>Lucky Statue</strong> nếu có.</li>
        <li>Dòng Ascension chỉ giữ trên món không còn dòng nào tốt hơn, và <strong>không bao giờ đặt trên đồ chiến đấu</strong>.</li>
        <li>Luôn đánh để đạt hạng S: rương càng lớn thì 2× càng đáng giá.</li>
      </ol>
      <p>Chưa cần quan tâm tới bộ đồ farm cho tới khi bạn đủ mạnh để mặc nó mà vẫn đạt hạng S.</p>

      <hr />

      <h3 id="lucky-statue-relic">Relic Lucky Statue</h3>
      <p><Img src="guides/lucky-statue.webp" alt="sword x staff lucky-statue" /></p>
      <p>Relic này có được từ sự kiện Grand Treasure Hunt. Nó cho <strong>+10% 2× Rating Reward Rate ở 0 sao, tăng dần tới +40% ở 6 sao</strong>, và không có phiên bản Ascension.</p>
      <p>Nhớ đeo nó trước khi bắt đầu các lượt trong ngày, đánh xong có thể tháo ra.</p>

      <hr />

      <h3 id="seasonal-upgrades">Astral Pact (nâng cấp theo mùa)</h3>
      <p><Img src="guides/season-upgrade.webp" alt="sword x staff astral pact" /></p>
      <p>Astral Pact mở bằng Primostar và có tác dụng ở <strong>mọi dungeon</strong>, cộng dồn với chỉ số trên trang bị:</p>
      <ul>
        <li><strong>2× Rating Reward</strong>: +2% ở mốc 6 và cứ mỗi 8 mốc, tối đa <strong>+50%</strong> ở mốc 198.</li>
        <li><strong>Gear Drop Ascension</strong>: +3% ở mốc 2 và cứ mỗi 8 mốc, tối đa <strong>+75%</strong> ở mốc 194.</li>
      </ul>
      <p>Xem thêm bài Season, Primostar &amp; Astral Pact.</p>

      <hr />

      <h2 id="season-end">Cuối mùa: để dành lượt</h2>
      <p>Bạn giữ được tối đa <strong>4 lượt</strong> nhận thưởng. Một ngày trước khi mùa kết thúc, ngừng nhận thưởng dungeon. Reset ngày cộng thêm 2, nên bạn vào mùa mới với <strong>6 lượt</strong>, đúng lúc đồ mùa mới đáng giá nhất. Phần thưởng nhận lại qua Reward Retrieval cũng được hưởng cả hai chỉ số trên.</p>

      <p className="source">Số liệu tỉ lệ rơi và dòng chỉ số dungeon tổng hợp từ Purrwikimania.</p>
    </>
  );
}
