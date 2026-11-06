import { Alert, Img, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Các shop và nên tiêu Dawnium vào đâu',
  category: 'guide',
  cover: 'guides/where-to-spend-dawnium.webp',
};

export default function Page() {
  return (
    <>
      <p>Thể loại AFK Idle RPG này thường khác các game gacha thông thường, nơi phần lớn tiền tệ cao cấp được dùng để quay nhân vật.</p>
      <p>Ở đây bạn dùng tiền tệ cao cấp để mua tài nguyên và làm các việc hằng ngày giúp tài khoản mạnh hơn, chứ không chỉ để quay.</p>
      <Alert type="red" title="Để dành cho Thương nhân!">
        <p>Bạn có cơ hội gặp thương nhân khi dùng <Tip>Destiny Fruit</Tip>, họ bán tài nguyên rất tốt, skill và đôi khi cả Fantomon. Hãy luôn giữ một ít <Tip>Dawnium</Tip> để phòng trường hợp này.</p>
      </Alert>
      <p>Làm bao nhiêu hoạt động thêm / tiêu bao nhiêu là tuỳ bạn, nhưng nếu muốn tối ưu tài khoản <strong>thì nên làm hầu hết chúng mỗi ngày</strong>.</p>
      <Tabs>
        <Tab label="Material Realms">
          <p><Img src="guides/material-realms.webp" alt="sword x staff material realms" /></p>
          <p>Ở đây bạn farm được mọi tài nguyên cần để phát triển tài khoản và cho xe hàng.</p>
          <ul>
            <li><strong>Người chơi F2P</strong> nên mua thêm 2/2/2/2 lượt</li>
            <li><strong>Người nạp tiền</strong> nên mua thêm ít nhất 4/2/4/4 lượt</li>
            <li><strong>Cá voi (nạp nhiều)</strong> có thể mua nhiều hơn nữa, tuỳ bạn thoải mái tiêu bao nhiêu <Tip>Dawnium</Tip></li>
          </ul>
          <p><Tip>Raw Ore</Tip> và <Tip>Chrono Sand</Tip> sẽ ngốn rất nhiều, nên người nạp tiền hãy mua thêm lượt. Mình khuyên mua thêm 4 lần mỗi ngày, nhưng còn tuỳ bạn nạp bao nhiêu.</p>
          <p>Giá tăng dần: 60, 60, 100, 100, 150, 150, 200, 200, 250, 300.</p>
        </Tab>
        <Tab label="Daily Dungeon">
          <p><Img src="guides/daily-dungeon-sxs.webp" alt="sword x staff daily dungeon" /></p>
          <p><strong>Cực kỳ quan trọng phải mua đủ lượt thêm ở đây</strong>. Mỗi ngày chỉ mua được 2 lượt, lượt đầu 100, lượt thứ hai 150.</p>
          <p>Ở đây bạn farm trang bị và mảnh cho trang bị độ hiếm cao nhất.</p>
        </Tab>
        <Tab label="Guild">
          <p><Img src="guides/guild-screen.webp" alt="sword x staff guild screen" /></p>
          <p><strong>Phần này phụ thuộc nhiều vào guild của bạn và yêu cầu của họ</strong>, nhưng vẫn có vài việc bạn có thể làm mỗi ngày để tăng tài nguyên và lực chiến.</p>
          <ul>
            <li>Đóng góp guild: F2P làm lần miễn phí + thêm hai lần, người nạp tiền có thể làm nhiều hơn</li>
            <li>Vật phẩm tăng tỉ lệ farm (tác dụng 24 giờ nhưng khá đắt, <em>không khuyên dùng cho F2P</em>)</li>
          </ul>
          <hr />
          <p>Còn shop guild thì tuỳ sở thích, bản thân mình mua:</p>
          <ul>
            <li><Tip>Bond Trinket</Tip>, phải tích trữ để nuôi hết đám pet</li>
            <li><Tip>Resilient Sprout</Tip>, <Tip>Hopeful Bud</Tip> và <Tip>Lunar Heart</Tip> (chỉ khi giảm giá)</li>
            <li><Tip>Stone Sheep</Tip>, <Tip>Cotton Sheep</Tip> và <Tip>Lunar Sheep</Tip> (chỉ khi giảm giá)</li>
            <li><Tip>Steely Chicken</Tip>, <Tip>Dawn Chicken</Tip> và <Tip>Lunar Chicken</Tip> (chỉ khi giảm giá)</li>
          </ul>
          <p><strong>Bạn sẽ không mua hết cả ba loại nguyên liệu giảm giá</strong>, hãy ưu tiên thứ mà aptitude của Fantomon chính đang cần.</p>
        </Tab>
        <Tab label="Arena">
          <p><Img src="guides/pvp.webp" alt="sword x staff pvp screen" /></p>
          <p>Mình không mê PVP lắm, nhưng <strong>tiền tệ nhận được rất hữu ích cho shop đổi đồ Arena</strong>, nên có thể đánh thêm vài trận (2 trận mỗi ngày rất rẻ).</p>
          <Alert title="Phần thưởng reset PVP">
            <p>Mỗi lần reset mùa, nên làm mới tối đa trong ít nhất hai ngày đầu để có thêm phần thưởng cho shop sớm, sau đó quay về chỉ đánh thêm 2 trận.</p>
          </Alert>
          <p>Giá tăng dần: 10, 15, 20, 30, 40, 60, 80, 100.</p>
        </Tab>
        <Tab label="Vendor Booth">
          <p><Img src="guides/daily-shop.webp" alt="sword x staff daily shop" /></p>
          <p><strong>Tab General</strong></p>
          <p>MỌI THỨ trừ nguyên liệu nấu ăn. Chỉ tiếp tục làm mới NẾU bạn đủ tiền mua sạch shop, nên làm ít nhất 3 lần mỗi ngày</p>
          <hr />
          <p><strong>Tab Vault</strong></p>
          <ol>
            <li><Tip>Stamina</Tip> (miễn phí mà lol)</li>
            <li>Giảm giá <Tip>Stellatie</Tip> thì tốt, nhưng không bắt buộc</li>
            <li>Tài nguyên Material Realm: <Tip>Iron Hammer</Tip>, <Tip>Gold Pickaxe</Tip>, <Tip>Worn Knuckles</Tip> và <Tip>Sand Shovel</Tip></li>
            <li><Tip>Destiny Fruit</Tip> (F2P nên để dành 200 cho sự kiện sau)</li>
            <li><Tip>Epic Auroral Badge</Tip></li>
            <li>Chủ yếu cho người nạp tiền, mua thêm <Tip>Refined Ore</Tip></li>
          </ol>
        </Tab>
        <Tab label="Auction House">
          <p><Img src="guides/auction-house.webp" alt="sword x staff auction house" /></p>
          <p>Ở đây bạn đấu giá và bán trang bị, mảnh trang bị, nguyên liệu nấu ăn, nguyên liệu Fantomon và nhiều thứ khác.</p>
          <p>Mình đưa vào danh sách để bạn để ý, nhưng hoàn toàn không bắt buộc phải vào mỗi ngày.</p>
        </Tab>
      </Tabs>
      <p>Còn vài chỗ khác có thể tiêu <Tip>Dawnium</Tip> mỗi ngày, nhưng <strong>theo mình các chỗ trên là tốt nhất cho người chơi F2P hoặc nạp ít</strong>.</p>
    </>
  );
}
