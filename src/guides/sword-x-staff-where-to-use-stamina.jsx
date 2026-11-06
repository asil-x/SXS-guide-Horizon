import { Alert, Img, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Cách dùng Stamina',
  category: 'guide',
  cover: 'guides/stamina-usage.webp',
};

export default function Page() {
  return (
    <>
      <p><Img src="guides/stamina-screen.webp" alt="sword x staff stamina screen" /></p>

      <h2 id="where-to-spend-stamina">Nên dùng Stamina vào đâu</h2>
      <p><Tip>Stamina</Tip> trong Sword x Staff chỉ dùng để thu thập tài nguyên trên bản đồ. Khá tiện, vì coi như được thêm tài nguyên miễn phí.</p>
      <Alert type="blue" title="Cách dùng thay đổi theo mùa">
        <p>Mỗi mùa trong game sẽ thay đổi cách bạn dùng <Tip>Stamina</Tip> tuỳ theo thứ bạn đang cần.</p>
        <p>Hãy dùng hướng dẫn này để tham khảo và luôn tối ưu theo nhu cầu của mình.</p>
      </Alert>
      <p>Theo mình, đầu game cách dùng stamina tốt nhất đơn giản là kiếm thêm <Tip>Rolla</Tip>. Thứ này dùng <em>Ở KHẮP MỌI NƠI</em> trong game, và đầu game thường là thứ khiến hầu hết người chơi bị kẹt.</p>
      <p>Bạn có thể dùng <Tip>Rolla</Tip> để mua thêm hàng trong shop hằng ngày, và làm mới shop để nhập lại toàn bộ hàng, tối đa 10 lần mỗi ngày.</p>
      <p><Img src="guides/where-to-spend-dawnium.webp" alt="sword x staff daily shop cart" /></p>
      <p><strong>F2P nên làm mới ít nhất 3 lần mỗi ngày</strong> và mua gần hết (nếu được thì hết) tài nguyên trong shop hằng ngày.</p>
      <p>Nếu bạn quan tâm tới bảng xếp hạng mùa, có thể tập trung vào <Tip>Raw Ore</Tip> và <Tip>Chrono Sand</Tip>.</p>

      <hr />

      <h2 id="resource-nodes">Mỏ tài nguyên</h2>
      <p>Khi farm tài nguyên, bạn sẽ thấy những mỏ lớn hơn cho nhiều tài nguyên hơn.</p>
      <Tabs>
        <Tab label="Mỏ lớn">
          <p><Img src="guides/big-nodes.webp" alt="sword x staff resource big nodes" /></p>
          <p>Bạn có thể chia sẻ chúng lên chat cho người chơi khác (hoặc guild) để cùng farm, có giới hạn theo tuần.</p>
        </Tab>
        <Tab label="Mỏ đặc biệt">
          <p><Img src="guides/special-nodes.webp" alt="sword x staff resource special nodes" /></p>
          <p>Ngoài tài nguyên chính, bạn còn có thể farm mỏ đặc biệt để lấy đá quý và nguyên liệu nấu ăn.</p>
          <p>Chưa rõ giới hạn mỗi ngày của loại này, nhưng bạn có thể bán chúng ở nhà đấu giá để lấy <Tip>Dawnium</Tip>, khá lời.</p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="setting-up-auto">Cài đặt auto</h2>
      <p>Lần đầu bạn tự bấm vào một mỏ để farm, chỉ cần bấm nút auto hiện ở phía trên khung chat.</p>
      <p><Img src="guides/auto-farm.webp" alt="sword x staff resource auto farm" /></p>
      <p>Nút này cho bạn chọn muốn dùng bao nhiêu stamina cho loại tài nguyên đó, và nhân vật sẽ tự động đi thu thập.</p>
    </>
  );
}
