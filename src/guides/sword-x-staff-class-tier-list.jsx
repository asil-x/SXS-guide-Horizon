import { Link } from 'react-router-dom';
import { Alert, Tip, TierOverview, TierRanking } from '../components/guide';

export const meta = {
  title: 'Tier list class Sword x Staff theo từng tier',
  desc: 'Class nào mạnh nhất ở mỗi tier, từ Verdantglade tới Aeperis, và nên đi nhánh nào.',
  order: 1.5,
  short: 'Tier list',
  category: 'guide',
  cover: 'tooltips/item_1111.png',
  icon: 'tooltips/item_1111.png',
  topic: 'class',
};

export default function Page() {
  return (
    <>
      <p>Sword x Staff không có một class “mạnh nhất” cố định. Mỗi lần lên tier, bạn mở kingdom mới và class mới, và <strong>thứ hạng giữa 4 nhánh thay đổi theo từng tier</strong>. Bài này xếp hạng class ở từng giai đoạn để bạn biết lúc nào nhánh của mình đang mạnh, lúc nào nên cân nhắc đổi class.</p>
      <Alert type="blue" title="Cách đọc">
        <p>Xếp hạng theo thang <strong>S (top) → A (mạnh) → B (ổn) → C (tình huống)</strong>, so sánh giữa các class <strong>cùng tier</strong>. Bấm vào class để mở đúng tier đó trong bài build.</p>
      </Alert>

      <hr />

      <h2 id="overview">Tổng quan theo nhánh</h2>
      <p>Mỗi hàng là một nhánh class, mỗi cột là một tier (kèm kingdom mở ra ở tier đó).</p>
      <TierOverview />
      <ul>
        <li><strong>Nhánh Sorcerer ổn định nhất</strong>: từ T3 tới T6 luôn hạng A, lên S ở T7 với Thaumaturge. Chọn nhánh này nếu không muốn đổi class.</li>
        <li><strong>Nhánh Duelist lên xuống mạnh nhất</strong>: S ở T4 (Conqueror) và T6 (Marauder), nhưng tụt xuống C ở T5 (Ravager) và B ở T7.</li>
        <li><strong>Nhánh Knight</strong> đều đặn ở A/B và đạt S ở T7 với Vindicator.</li>
        <li><strong>Nhánh Sage</strong> yếu nhất giai đoạn đầu, có một đỉnh rõ ở T5 (Prophet) rồi lại xuống.</li>
      </ul>
      <p>Vì thứ hạng xoay vòng như vậy, <Link to="/guides/sword-x-staff-class-change">đổi class</Link> (miễn phí mỗi 7 ngày, giữ nguyên rank và level skill) là công cụ quan trọng để luôn chơi class mạnh.</p>

      <hr />

      <h2 id="t1-t2">T1–T2: Verdantglade và Cinder Ridge</h2>
      <p>Hai tier đầu không được xếp hạng: mọi class đều đủ dùng và game còn dễ.</p>
      <TierRanking tier={1} />
      <TierRanking tier={2} />
      <ul>
        <li><strong>Warrior</strong>: Block Rate mạnh bất ngờ ở giai đoạn này, giúp bạn gần như không bị thương ở nhiều nội dung.</li>
        <li><strong>Mage</strong>: mỏng nhưng sát thương nguyên tố cao, phổ biến nhất là lối Nước với <Tip>Water Assault</Tip>.</li>
        <li>Ở T2, hãy chọn nhánh theo lối chơi bạn muốn về lâu dài (xem bảng tổng quan), vì từ T3 trở đi các nhánh bắt đầu tách biệt rõ.</li>
      </ul>

      <h2 id="t3">T3: Aqualis</h2>
      <p>Tier này mở luôn tính năng <strong>đổi class</strong>.</p>
      <TierRanking tier={3} />
      <ul>
        <li><strong>Archmage (A)</strong>: có build AoE tốt nhất game với bộ phép mới mở ở tier này.</li>
        <li><strong>Berserker (A)</strong>: <Tip>Blade of Judgment</Tip> thay đổi hẳn lối chơi, càng nhiều hit càng nhiều sát thương.</li>
        <li><strong>Paladin (B)</strong>: mở thêm build Glass Cannon cho boss, nhưng Reflect Tank vẫn cần đầu tư Block.</li>
        <li><strong>Arcanist (B)</strong>: build Erosion bắt đầu dùng được, triệu hồi vẫn còn yếu.</li>
      </ul>

      <h2 id="t4">T4: Loong Haven</h2>
      <TierRanking tier={4} />
      <ul>
        <li><strong>Conqueror (S)</strong>: vốn đã mạnh khi leo màn, nay có thêm <Tip>Tactical Adaptation</Tip> cho boss và các nội tại xuyên giáp. Chuyển sang Elemental mastery.</li>
        <li><strong>Destroyer (A)</strong>: <Tip>Thunder of Judgment</Tip> là sát thương đơn mục tiêu mạnh nhất tier, <Tip>Formation Breaker</Tip> buff cả đội.</li>
        <li><strong>Guardian (A)</strong>: Knight có thêm sát thương Nước và vòng lặp khiên.</li>
        <li><strong>Dominator (B)</strong>: nhiều biến thể nhưng chưa có lối nào vượt trội.</li>
      </ul>

      <h2 id="t5">T5: Aethyris</h2>
      <TierRanking tier={5} />
      <ul>
        <li><strong>Prophet (S)</strong>: Sage trở thành healer thật sự với <Tip>Radiant Rhythm</Tip> và <Tip>Rejuvenating Elixir</Tip>, đồng thời có lối Bóng tối dựa trên debuff.</li>
        <li><strong>Magister (A)</strong>: cả một lối chơi quanh Electro và Thunder Strike.</li>
        <li><strong>Templar (A)</strong>: tank bảo vệ đội đúng nghĩa, thêm Taunt và giảm sát thương cho cả đội.</li>
        <li><strong>Ravager (C, nên lên nhanh)</strong>: có <Tip>Solaris Storm</Tip> dọn quái tốt nhưng tụt hẳn so với các class cùng tier. Đây là lúc người chơi Duelist hay cân nhắc đổi class tạm thời.</li>
      </ul>

      <h2 id="t6">T6: Harpadia</h2>
      <TierRanking tier={6} />
      <ul>
        <li><strong>Marauder (S)</strong>: SPD và sát thương Vật lý nhiều hit, <Tip>Raining Blades</Tip> mạnh thêm theo SPD, <Tip>Sinseal</Tip> rất tốt khi đánh boss.</li>
        <li><strong>Arcanarch (A)</strong>: Tideform với charm <Tip>Riptide</Tip>, cùng các hướng Lửa Burn và Gió.</li>
        <li><strong>Justicar (B)</strong>: hai hướng Ánh sáng tích Charge và Băng giảm sát thương cho đội.</li>
        <li><strong>Hierarch (C, nên lên nhanh)</strong>: lối triệu hồi phụ thuộc nhiều vào thứ tự skill và vật triệu hồi sống sót.</li>
      </ul>

      <h2 id="t7">T7: Ignis</h2>
      <TierRanking tier={7} />
      <ul>
        <li><strong>Thaumaturge (S)</strong>: Ánh sáng diện rộng rất nhiều hit (<Tip>Lightning Grid</Tip>), cực hợp với các charm kích hoạt theo từng hit.</li>
        <li><strong>Vindicator (S)</strong>: tank gây sát thương theo DEF, càng trâu càng đánh đau.</li>
        <li><strong>Doomreaver (B)</strong> và <strong>Demiurge (B)</strong>: vẫn chơi tốt, nhưng kém hai class trên ở tier này.</li>
      </ul>

      <h2 id="t8">T8: Aeperis (sắp ra)</h2>
      <TierRanking tier={8} />
      <p>Class tier 8 ra mắt cùng Season 6, cần <strong>level nhân vật 230, class level 480 và class tier 7 đạt level 55</strong>. Chưa có xếp hạng chính thức vì class chưa ra; xem trước bộ skill trong bài build của từng class.</p>

      <hr />

      <h2 id="how-to-use">Nên dùng tier list thế nào?</h2>
      <ul>
        <li><strong>Đừng đổi class chỉ vì một hạng.</strong> Skill rank cao bạn đã đầu tư quan trọng hơn chênh lệch giữa A và B.</li>
        <li><strong>Hạng C “nên lên nhanh”</strong> nghĩa là đẩy level class để qua tier đó sớm, không phải bỏ nhánh.</li>
        <li><strong>Đi đội</strong>: tank (Knight) và healer (Sage) luôn được săn đón dù hạng thấp hơn.</li>
      </ul>

      <p className="source">Xếp hạng theo Class Tier List của Sword x Staff Compass (swordxstaff-compass.com), cập nhật 07/11/2026. Nhận xét tổng hợp từ các bài build của Guild Horizon (nguồn Purrwikimania và Compass). Thứ hạng có thể thay đổi sau mỗi bản cập nhật.</p>
    </>
  );
}
