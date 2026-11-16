import { Alert, GthSchedule, Img, Tip } from '../components/guide';

export const meta = {
  title: 'Sự kiện Grand Treasure Hunt',
  desc: 'Cách chơi sự kiện, nên mua gì và lịch từng tuần: tuần nào nên lấy, tuần nào nên skip.',
  order: 11,
  category: 'guide',
  cover: 'guides/grand-treasure-guide.webp',
  icon: 'treasures/treasure_61008.png',
  topic: 'event',
};

export default function Page() {
  return (
    <>
      <p>Grand Treasure Hunt là <strong>sự kiện lặp lại hằng tuần</strong>, nơi bạn tiêu <Tip>Auroradrasil Energy</Tip> để mua vật phẩm qua 5 level, và level cuối có một <strong>phần thưởng nổi bật đổi mỗi tuần</strong>.</p>
      <p>Cơ chế quan trọng nhất là <strong>năng lượng được giữ lại sang sự kiện sau</strong>, nên bạn không cần tiêu hết mỗi tuần.</p>

      <hr />

      <h2 id="how-it-works">Cách hoạt động</h2>
      <p><Img src="guides/grand-treasure.webp" alt="sword x staff grand treasure event" /></p>
      <p>Mỗi tuần bạn kiếm được khoảng <strong>2,250</strong> <Tip>Auroradrasil Energy</Tip>: 2,240 từ nhiệm vụ và 10 từ gói miễn phí trong shop.</p>
      <p>Shop có 5 level, mỗi level 3 món cùng giá. Level sau chỉ mở khi tổng năng lượng bạn đã tiêu ở các level trước đủ mốc. Mua <strong>1 món ở mỗi level là vừa đủ</strong> mở level kế tiếp.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Level</th><th className="num">Mở khi đã tiêu</th><th className="num">Giá mỗi món</th><th className="num">Mua cả level</th></tr></thead>
          <tbody>
            <tr><td>Level 1</td><td className="num">0</td><td className="num">240</td><td className="num">720</td></tr>
            <tr><td>Level 2</td><td className="num">240</td><td className="num">400</td><td className="num">1,200</td></tr>
            <tr><td>Level 3</td><td className="num">640</td><td className="num">600</td><td className="num">1,800</td></tr>
            <tr><td>Level 4</td><td className="num">1,240</td><td className="num">800</td><td className="num">2,400</td></tr>
            <tr><td>Level 5</td><td className="num">2,040</td><td className="num">1,200</td><td className="num">3,600</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>Đường ngắn nhất tới phần thưởng nổi bật: 240 + 400 + 600 + 800 + 1,200 = <strong>3,240</strong> năng lượng.</li>
        <li>Mua hết mọi món trong tuần: <strong>9,720</strong> năng lượng, hơn 4 tuần thu nhập.</li>
      </ul>
      <Alert title="Năng lượng được giữ lại">
        <p><strong>Bạn không bắt buộc phải tiêu năng lượng mỗi tuần</strong>.</p>
        <p>Để dành qua nhiều tuần giúp bạn đủ mua các món Level 5 đắt hơn, hoặc chờ tuần có phần thưởng mình thật sự cần.</p>
      </Alert>

      <hr />

      <h2 id="what-to-buy">Nên mua gì</h2>
      <p>Phần thưởng nổi bật ở Level 5 đổi mỗi tuần, gồm 3 loại:</p>
      <ul>
        <li><strong>Special Relic</strong>: relic tiện ích như <Tip>Lucky Statue</Tip> hay <Tip>Primal Gem</Tip>. Từ Season 3 là rương chọn 1 relic, và cứ 2 tuần lại có 1 tuần như vậy. <strong>Nên lấy</strong>, vì mấy relic này giúp farm hằng ngày dễ hơn hẳn. Mình 100% khuyên lấy <Tip>Lucky Statue</Tip>.</li>
        <li><strong>Rương Mythic Relic</strong>: chọn 1 relic Mythic thuộc bộ của kingdom trong season. <strong>Nên skip</strong>, trừ khi bạn đang thiếu đúng món đó.</li>
        <li><strong>Rương mảnh skill x180</strong>: mảnh skill của class tier mới. <strong>Nên skip</strong>, trừ khi bạn dư năng lượng và cần skill của tier đó.</li>
      </ul>
      <p>Ở Level 1 đến 4, mỗi level chỉ cần mua 1 món để mở level kế tiếp. Các món nên mua (đánh dấu ★ trong lịch):</p>
      <ul>
        <li><strong>Level 1</strong>: <Tip>Basic Treats</Tip>, vì chúng khó kiếm hơn <Tip>Raw Ore</Tip> và <Tip>Chrono Sand</Tip>.</li>
        <li><strong>Level 2</strong>: Random Rare Gift. Có rất nhiều companion cần nâng cấp mà không bao giờ đủ quà.</li>
        <li><strong>Level 3</strong>: <Tip>Destiny Fruit</Tip>, có cơ hội gặp boss, thương nhân và phần thưởng xịn.</li>
        <li><strong>Level 4</strong>: <Tip>Legendary Auroral Badge</Tip>, ngoài sự kiện chỉ có qua nạp tiền. <strong>KHÔNG</strong> mua <Tip>Stellatie</Tip> hoặc <Tip>Bond Trinket</Tip>, F2P vẫn kiếm được.</li>
        <li><strong>Level 5</strong>: phần thưởng nổi bật. <Tip>Covenite</Tip> x40 và <Tip>Mythic Auroral Badge</Tip> x40 (đủ 4 capsule Mythic Aeonic Gacha) chỉ nên mua khi dư năng lượng.</li>
      </ul>

      <h3 id="weekly-plan">Lịch từng tuần: nên lấy hay nên skip</h3>
      <p>Chọn tuần đang chạy và số năng lượng bạn đang có, lịch sẽ tính số dư qua từng tuần với 2,250 năng lượng mỗi tuần. Mỗi tuần hiện đủ các món từ Level 1 tới 5. Bấm <strong>Skip / Lấy / Mua hết</strong>, hoặc bấm vào từng món để thử kế hoạch của riêng bạn.</p>
      <GthSchedule />
    </>
  );
}
