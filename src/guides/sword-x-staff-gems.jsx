import { Alert, Tip } from '../components/guide';

export const meta = {
  title: 'Gem: loại nào, lắp ở đâu, ghép thế nào',
  desc: '8 loại gem, ô lắp, bảng ghép T1 → T15 cho tiết kiệm.',
  order: 4,
  short: 'Gem',
  category: 'guide',
  cover: 'tooltips/item_529.png',
};

const Y = () => <td style={{ textAlign: 'center', color: 'var(--green)' }}>✓</td>;
const N = () => <td style={{ textAlign: 'center' }} className="muted">–</td>;
const row = (slots) => ['Main', 'Helmet', 'Armor', 'Boots', 'Off-Hand'].map((s) => (slots.includes(s) ? <Y key={s} /> : <N key={s} />));

export default function Page() {
  return (
    <>
      <p>Gem được khảm vào trang bị để cộng thêm chỉ số. Có <strong>8 loại gem</strong>, mỗi loại có <strong>15 bậc (T1 đến T15)</strong>. Bậc càng cao thì chỉ số càng lớn, và chỉ số thực tế của mỗi bậc còn tăng theo level của bạn.</p>
      <p>Bài này tổng hợp gem nào làm gì, lắp được vào ô nào, cách ghép lên bậc cao cho tiết kiệm và nên dùng gem nào cho từng class.</p>

      <hr />

      <h2 id="types">8 loại gem</h2>
      <table className="data-table">
        <thead><tr><th>Gem</th><th>Chỉ số</th><th>Dùng cho</th></tr></thead>
        <tbody>
          <tr><td><Tip>T10 Obsidian</Tip></td><td>ATK + DMG Boost</td><td>Mọi class, gem sát thương tốt nhất</td></tr>
          <tr><td><Tip>T10 Amethyst</Tip></td><td>SPD + Crit Rate</td><td>Duelist, Sorcerer, build crit</td></tr>
          <tr><td><Tip>T10 Ruby</Tip></td><td>ATK</td><td>Lấp chỗ trống cho DPS</td></tr>
          <tr><td><Tip>T10 Citrine</Tip></td><td>SPD</td><td>Lấp chỗ trống, mọi class cần SPD</td></tr>
          <tr><td><Tip>T10 Moonstone</Tip></td><td>DEF + DMG RES</td><td>Mọi class, gem sống sót tốt nhất</td></tr>
          <tr><td><Tip>T10 Sapphire</Tip></td><td>DEF</td><td>Knight tank</td></tr>
          <tr><td><Tip>T10 Beryl</Tip></td><td>HP</td><td>Knight tank, Sage healer</td></tr>
          <tr><td><Tip>T10 Amber</Tip></td><td>HP + Healing Boost</td><td>Sage healer</td></tr>
        </tbody>
      </table>
      <Alert type="blue" title="Gem 2 chỉ số luôn được ưu tiên">
        <p>Obsidian, Amethyst, Moonstone và Amber cho <strong>2 chỉ số cùng lúc</strong>, nên ở cùng bậc chúng gần như luôn tốt hơn gem 1 chỉ số. Gem 1 chỉ số (Ruby, Citrine, Sapphire, Beryl) chủ yếu dùng để lấp những ô mà gem 2 chỉ số không lắp được.</p>
      </Alert>

      <hr />

      <h2 id="slots">Gem nào lắp được vào ô nào</h2>
      <p>Mỗi loại gem chỉ lắp được vào một số ô trang bị. Riêng <strong>Off-Hand nhận được mọi loại gem</strong>.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Gem</th><th>Main</th><th>Helmet</th><th>Armor</th><th>Boots</th><th>Off-Hand</th></tr></thead>
          <tbody>
            <tr><td>Obsidian</td>{row(['Main', 'Off-Hand'])}</tr>
            <tr><td>Amethyst</td>{row(['Main', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Ruby</td>{row(['Main', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Citrine</td>{row(['Armor', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Moonstone</td>{row(['Helmet', 'Off-Hand'])}</tr>
            <tr><td>Sapphire</td>{row(['Armor', 'Helmet', 'Off-Hand'])}</tr>
            <tr><td>Beryl</td>{row(['Armor', 'Helmet', 'Off-Hand'])}</tr>
            <tr><td>Amber</td>{row(['Armor', 'Boots', 'Off-Hand'])}</tr>
          </tbody>
        </table>
      </div>
      <p>Từ bảng trên có thể rút ra vài điều:</p>
      <ul>
        <li><strong>Obsidian chỉ vào được Main và Off-Hand</strong>, và <strong>Moonstone chỉ vào được Helmet và Off-Hand</strong>. Đừng phí ô Off-Hand cho gem 1 chỉ số khi bạn còn thiếu hai loại này.</li>
        <li><strong>Armor</strong> không nhận gem tấn công nào: DPS thường lắp Citrine (SPD) ở đây.</li>
        <li><strong>Boots</strong> là chỗ tốt nhất cho Amethyst nếu bạn đã lắp Obsidian ở Main.</li>
      </ul>

      <h3 id="layout">Gợi ý lắp theo vai trò</h3>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Ô</th><th>DPS (Duelist, Sorcerer)</th><th>Tank (Knight)</th><th>Healer (Sage)</th></tr></thead>
          <tbody>
            <tr><td>Main</td><td>Obsidian</td><td>Obsidian</td><td>Obsidian</td></tr>
            <tr><td>Helmet</td><td>Moonstone</td><td>Moonstone</td><td>Moonstone</td></tr>
            <tr><td>Armor</td><td>Citrine</td><td>Sapphire hoặc Beryl</td><td>Amber</td></tr>
            <tr><td>Boots</td><td>Amethyst</td><td>Citrine</td><td>Amber hoặc Citrine</td></tr>
            <tr><td>Off-Hand</td><td>Obsidian hoặc Amethyst</td><td>Moonstone</td><td>Amber</td></tr>
          </tbody>
        </table>
      </div>
      <p>Knight chơi lối glass cannon thì lắp như DPS (Ruby, Amethyst). Sage chơi Summoner hoặc Erosion thì dùng Obsidian và Ruby thay cho Amber. Chi tiết hơn có trong guide của từng class.</p>

      <hr />

      <h2 id="merge">Ghép gem lên bậc cao</h2>
      <p>Đây là phần nhiều người làm sai. Gem <strong>không ghép theo kiểu bậc này lên bậc kế tiếp</strong> suốt từ T1 tới T15. Thay vào đó:</p>
      <ul>
        <li><strong>T7, T8, T9 và T10 đều ghép thẳng từ T5.</strong></li>
        <li><strong>T12, T13, T14 và T15 đều ghép thẳng từ T10.</strong></li>
        <li>Các bước ghép có tỉ lệ: mỗi viên bỏ vào cộng thêm một phần trăm thành công. Bỏ đủ viên thì chắc chắn thành công.</li>
      </ul>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Ghép ra</th><th>Nguyên liệu</th><th className="num">Tỉ lệ mỗi viên</th><th className="num">Tối thiểu</th><th className="num">Chắc chắn với</th></tr></thead>
          <tbody>
            <tr><td>T2</td><td>T1</td><td className="num">100%</td><td className="num">2</td><td className="num">2</td></tr>
            <tr><td>T3</td><td>T2</td><td className="num">100%</td><td className="num">2</td><td className="num">2</td></tr>
            <tr><td>T4</td><td>T3</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T5</td><td>T4</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T6</td><td>T5</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T7</td><td><strong>T5</strong></td><td className="num">36%</td><td className="num">2</td><td className="num">3</td></tr>
            <tr><td>T8</td><td><strong>T5</strong></td><td className="num">18%</td><td className="num">5</td><td className="num">6</td></tr>
            <tr><td>T9</td><td><strong>T5</strong></td><td className="num">8%</td><td className="num">11</td><td className="num">13</td></tr>
            <tr><td>T10</td><td><strong>T5</strong></td><td className="num">4%</td><td className="num">23</td><td className="num">25</td></tr>
            <tr><td>T11</td><td>T10</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T12</td><td><strong>T10</strong></td><td className="num">36%</td><td className="num">2</td><td className="num">3</td></tr>
            <tr><td>T13</td><td><strong>T10</strong></td><td className="num">32%</td><td className="num">3</td><td className="num">4</td></tr>
            <tr><td>T14</td><td><strong>T10</strong></td><td className="num">24%</td><td className="num">5</td><td className="num">5</td></tr>
            <tr><td>T15</td><td><strong>T10</strong></td><td className="num">15%</td><td className="num">8</td><td className="num">8</td></tr>
          </tbody>
        </table>
      </div>
      <p className="muted">“Tối thiểu” là số viên ít nhất game cho phép bỏ vào. “Chắc chắn với” là số viên để tổng tỉ lệ đạt 100%. Bảng chỉ tính số gem tiêu hao; phí khác (nếu có) hiển thị trên màn hình ghép trong game.</p>

      <Alert type="red" title="Đừng ghép T5 thành T6 nếu bạn đang nhắm T10">
        <p>T6 không dùng để ghép tiếp được (T7 làm từ T5, không phải từ T6). Mỗi viên T5 bạn biến thành T6 là bớt đi một viên cho T10. Tương tự, <strong>T11 là ngõ cụt</strong> nếu bạn đang gom T10 để lên T12 trở lên.</p>
      </Alert>

      <h3 id="merge-cost">Quy đổi chi phí</h3>
      <ul>
        <li>1 viên T5 = 4 viên T1.</li>
        <li>1 viên T10 chắc chắn = 25 viên T5 = <strong>100 viên T1</strong>.</li>
        <li>1 viên T15 chắc chắn = 8 viên T10 = 200 viên T5 = <strong>800 viên T1</strong>.</li>
      </ul>
      <p>Nghĩa là từ T10 trở lên, mỗi bậc đắt hơn rất nhiều. Với đa số người chơi, mục tiêu hợp lý là <strong>T10 cho mọi ô trước</strong>, rồi mới dồn T10 dư lên T12 đến T15 cho gem quan trọng nhất (thường là Obsidian ở Main).</p>

      <h3 id="gamble">Có nên ghép với số viên tối thiểu?</h3>
      <p>Ví dụ T7: bỏ 2 viên T5 được 72% thành công, bỏ 3 viên thì chắc chắn. Nếu thất bại bị mất hết gem đã bỏ vào, thì tính trung bình ghép 2 viên vẫn tốn ít T5 hơn một chút (khoảng 2,8 viên cho mỗi lần thành công so với 3). T8, T9, T12, T13 cũng tương tự.</p>
      <p>Tuy vậy, chênh lệch rất nhỏ mà rủi ro trắng tay thì lớn. Mình khuyên: <strong>T7 đến T9 có thể liều</strong> nếu bạn có nhiều T5, còn <strong>T10 trở lên luôn bỏ đủ để chắc chắn</strong>. Riêng T10 với số tối thiểu (23 viên, 92%) thì tính trung bình cũng không rẻ hơn bỏ đủ 25 viên, nên không có lý do để liều.</p>

      <hr />

      <h2 id="sources">Kiếm gem ở đâu</h2>
      <ul>
        <li><strong>Mỏ gem trên bản đồ thế giới</strong> của từng kingdom. Nhớ đi khai thác đều đặn khi khám phá bản đồ.</li>
        <li><strong>Astral Pact</strong>: cứ mỗi chu kỳ 8 mốc lại có một mốc <strong>+5% Gem Drop</strong>. Xem thêm bài Season, Primostar &amp; Astral Pact.</li>
        <li>Phần thưởng sự kiện và gói nạp.</li>
      </ul>
      <Alert title="Gem khi sang mùa mới">
        <p>Khi sang mùa, gem của mùa cũ nên được <strong>tái chế thành <Tip>Rolla</Tip></strong> và thay bằng gem mùa mới. Vì vậy cuối mùa đừng dồn quá nhiều tài nguyên vào việc ghép gem bậc cao.</p>
      </Alert>

      <p className="source">Dữ liệu gem và tỉ lệ ghép lấy từ file game, tổng hợp qua Sword x Staff Compass.</p>
    </>
  );
}
