import { Alert, Img, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Sự kiện Grand Treasure Hunt',
  desc: 'Cách chơi sự kiện và phần thưởng đáng lấy.',
  order: 11,
  category: 'guide',
  cover: 'guides/grand-treasure-guide.webp',
  icon: 'treasures/treasure_61008.png',
  topic: 'event',
};

export default function Page() {
  return (
    <>
      <p>Grand Treasure Hunt là <strong>sự kiện lặp lại hằng tuần</strong>, nơi bạn tiêu <Tip>Auroradrasil Energy</Tip> để mở các mốc phần thưởng.</p>
      <p>Cơ chế quan trọng nhất là <strong>năng lượng được giữ lại sang sự kiện sau</strong>, nên bạn không cần tiêu hết mỗi tuần.</p>

      <hr />

      <h2 id="how-it-works">Cách hoạt động</h2>
      <p><Img src="guides/grand-treasure.webp" alt="sword x staff grand treasure event" /></p>
      <p>Mỗi tuần bạn kiếm được khoảng 2,250 <Tip>Auroradrasil Energy</Tip>. 2,240 từ nhiệm vụ và 10 từ gói miễn phí trong shop.</p>
      <p>Để tới mốc phần thưởng cuối cần 2,040 <Tip>Auroradrasil Energy</Tip>. Sau đó, Level 5 có các vật phẩm mua thêm, tốn thêm tới 1,200 <Tip>Auroradrasil Energy</Tip> tuỳ bạn muốn mua bao nhiêu.</p>
      <Alert title="Năng lượng được giữ lại">
        <p><strong>Bạn không bắt buộc phải tiêu năng lượng mỗi tuần</strong>.</p>
        <p>Để dành qua nhiều tuần giúp bạn đủ mua các món Level 5 đắt hơn, hoặc chờ phần thưởng xoay vòng tốt hơn.</p>
      </Alert>
      <p>Level 5 có <strong>một vật phẩm xoay vòng, đổi mỗi tuần</strong>, và đây thường là nơi có phần thưởng tốt nhất, gồm lượt quay trả phí và relic giúp farm dễ hơn.</p>

      <hr />

      <h2 id="saving-strategy">Chiến thuật để dành</h2>
      <p>F2P và người nạp ít <strong>không thể tới mốc cuối mọi tuần</strong>.</p>
      <Alert type="red" title="Lên kế hoạch theo vòng xoay">
        <p><strong>LUÔN kiểm tra món Level 5 tuần này là gì trước khi quyết định tiêu.</strong></p>
      </Alert>
      <table className="data-table">
        <tbody>
          <tr><td>Mỗi 2 tuần</td><td>4,500</td><td>Hai món Level 5</td></tr>
          <tr><td>Mỗi 3 tuần</td><td>6,750</td><td>Tất cả món Level 5</td></tr>
          <tr><td>Linh hoạt</td><td>Giữ dự phòng 2,400</td><td>Món bên trái khi cần</td></tr>
        </tbody>
      </table>
      <p>Cách linh hoạt nghĩa là bạn được mua đồ miễn là vẫn còn dự trữ 2,400, và chỉ mua món ngoài cùng bên trái ở Level 5 khi cần hoặc khi nó thật sự tốt.</p>

      <hr />

      <h2 id="what-to-buy">Nên mua gì</h2>
      <Tabs>
        <Tab label="Level 1">
          <p><Img src="guides/grand-treasure-rewards-1.webp" alt="sword x staff level 1 grand treasure rewards" /></p>
          <p>Đầu game phần thưởng nào cũng tăng lực chiến, nhưng cá nhân mình sẽ tập trung vào <Tip>Basic Treats</Tip> vì chúng khó kiếm hơn.</p>
        </Tab>
        <Tab label="Level 2">
          <p><Img src="guides/grand-treasure-rewards-2.webp" alt="sword x staff level 2 grand treasure rewards" /></p>
          <p>Ưu tiên quà cho companion. Có rất nhiều companion cần nâng cấp mà không bao giờ đủ quà.</p>
        </Tab>
        <Tab label="Level 3">
          <p><Img src="guides/grand-treasure-rewards-3.webp" alt="sword x staff level 3 grand treasure rewards" /></p>
          <p>Tới đây thì chọn gì cũng được, món nào cũng giúp tài khoản mạnh lên.</p>
          <p>Mình sẽ lấy <Tip>Destiny Fruit</Tip> vì có cơ hội gặp boss, thương nhân và phần thưởng xịn.</p>
        </Tab>
        <Tab label="Level 4">
          <p><Img src="guides/grand-treasure-rewards-4.webp" alt="sword x staff level 4 grand treasure rewards" /></p>
          <p><strong>KHÔNG</strong> mua <Tip>Stellatie</Tip> hoặc <Tip>Bond Trinket</Tip>, mấy món này F2P vẫn kiếm được.</p>
          <p>Còn <Tip>Legendary Auroral Badge</Tip> thì chỉ có qua nạp tiền, nên hãy mua.</p>
        </Tab>
        <Tab label="Level 5">
          <p><Img src="guides/grand-treasure-rewards-5.webp" alt="sword x staff level 5 grand treasure rewards" /></p>
          <p>Mọi thứ ở mốc này đều tốt. Luôn xem mình có cần phần thưởng đó không trước khi tiêu.</p>
          <p><strong>Mình 100% khuyên lấy Lucky Statue để cày hằng ngày nhẹ nhàng hơn.</strong></p>
        </Tab>
      </Tabs>
    </>
  );
}
