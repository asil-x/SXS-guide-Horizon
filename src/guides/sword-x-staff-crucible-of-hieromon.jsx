import { Alert, CrucibleCounter, CrucibleLadder, Hieromon } from '../components/guide';

export const meta = {
  title: 'Crucible of Hieromon: 6 Hieromon và cách khắc chế',
  desc: 'Skill, hệ yếu của từng Hieromon và technique nên mang theo cho từng nhánh, từng tier.',
  order: 2.5,
  short: 'Crucible of Hieromon',
  category: 'guide',
  cover: 'monsters/G_3704.png',
  icon: 'monsters/G_3704.png',
  topic: 'event',
};

export default function Page() {
  return (
    <>
      <p>Crucible of Hieromon là trận đánh boss mỗi ngày. Đây là <strong>cuộc đua sát thương</strong>: điểm của bạn chính là tổng sát thương gây ra. Mỗi ngày game mở một tier, quyết định bạn gặp con Hieromon nào, ở level và rank nào.</p>
      <p>Bài này tổng hợp cả 6 Hieromon từ dữ liệu game: chúng đánh bằng hệ gì, yếu hệ gì, có cơ chế gì đáng sợ, và <strong>technique nào của nhánh bạn nên mang theo</strong> ở từng tier.</p>

      <hr />

      <h2 id="ladder">Các cấp và tier</h2>
      <p>Có 8 cấp, tổng cộng 84 tier. Cấp càng cao, quái càng nhiều level và có thêm Hieromon mới.</p>
      <CrucibleLadder />

      <h2 id="rules">Nguyên tắc chung cho mọi Hieromon</h2>
      <ul>
        <li><strong>Rank quan trọng hơn mọi chỉ số.</strong> Trong PvE, game nhân sát thương theo chênh lệch rank giữa bạn và quái, theo cả hai chiều. Theo Purrwikimania, rank Champion gây ×15.3 sát thương lên quái rank Expert và chỉ nhận ÷15.3.</li>
        <li><strong>Đánh đúng hệ yếu.</strong> Ba con Storm Griffin, Flamoenix và Yamata no Orochi nhận thêm 20% sát thương từ hệ yếu và giảm 20% từ hệ của chính nó.</li>
        <li><strong>Dưới 50% máu là cuồng nộ.</strong> Cả 6 con đều mạnh lên (thêm SPD, sát thương, có con đổi cả bộ skill) khi xuống dưới 50% HP lần đầu.</li>
        <li><strong>Càng mất máu càng trâu.</strong> Nội tại Mettle of Trial cho thêm 1 tầng tăng chỉ số mỗi 5% HP mất đi, tối đa 10 tầng. Nửa sau trận luôn khó hơn nửa đầu.</li>
        <li><strong>Đòn phản ứng theo sát thương nhận vào.</strong> Hầu hết các con có nội tại tung đòn diện rộng mỗi khi nhận đủ 15% max HP sát thương cộng dồn. Đánh càng nhanh thì càng hay bị phản.</li>
      </ul>

      <hr />

      <h2 id="counter">Gợi ý technique theo nhánh và tier</h2>
      <p>Chọn Hieromon, nhánh class và tier của bạn. Danh sách lấy từ bộ skill của chính class đó (gồm cả skill các tier trước trong nhánh), xếp theo hệ yếu, số hit và độ hiếm.</p>
      <CrucibleCounter />
      <Alert title="Đây là gợi ý theo cơ chế">
        <p>Danh sách được lọc tự động theo hệ và cơ chế của từng Hieromon, <strong>chưa phải bộ skill đã được kiểm chứng bằng điểm thật</strong>. Hãy giữ charm và Fantomon theo bài build của class, rồi thay technique theo gợi ý và so điểm. Ưu tiên skill bạn đã nâng rank cao.</p>
      </Alert>

      <hr />

      <h2 id="hieromons">Hồ sơ 6 Hieromon</h2>

      <Hieromon id={3703}>
        <ul>
          <li><strong>Rất nhanh</strong> (SPD 156%) nên ra đòn nhiều lượt hơn bạn. Bù lại DEF thấp (80%), dễ ăn sát thương.</li>
          <li><strong>Tempestuous Waltz</strong> thả 8 quả cầu gió quanh nó, 2 lượt sau nổ vùng 4 ô. Cầu phá được: dùng đòn diện rộng phá bớt, hoặc tránh xa.</li>
          <li><strong>Cyclone Wheel</strong> đánh nhiều hit và đẩy lùi 1 ô, dễ làm lệch vị trí của class cận chiến.</li>
          <li>Khi cuồng nộ, Cyclone Guardian thành 3 cơn lốc đánh 3 lần, và có thêm Stellar Descent (24 tia sao).</li>
        </ul>
      </Hieromon>

      <Hieromon id={3704}>
        <ul>
          <li><strong>Life Siphon:</strong> vào trận có 20 tầng hút máu, cuối mỗi lượt hồi thêm 10 tầng, và <strong>mất 1 tầng mỗi lần dính sát thương technique</strong>. Đánh nhiều hit liên tục để giữ số tầng thấp, nếu không nó hồi máu ngược lại.</li>
          <li><strong>Trial by Fire:</strong> đốt ai bước vào trong 1 ô quanh nó, và tự kích hoạt đầu mỗi lượt. Đừng đứng sát nếu không đủ trâu.</li>
          <li>ATK cao nhất trong 6 con (165%). Healer và khiên rất có giá trị ở trận này.</li>
        </ul>
      </Hieromon>

      <Hieromon id={3705}>
        <ul>
          <li><strong>Snake Fang:</strong> mỗi đòn technique có 60% gây độc Nước 3 lượt và <strong>cộng dồn</strong>. Skill giải hiệu ứng (như <strong>Healing Touch</strong> của Sage) rất đáng mang.</li>
          <li><strong>Hyakki Yagyo</strong> triệu hồi 4 Fishling trước mặt nó, tồn tại 5 lượt. Đòn diện rộng vừa dọn Fishling vừa đánh trúng boss.</li>
          <li>Khi cuồng nộ: Orochi Frenzy đánh 3 lần mọi kẻ trong 5 ô, Crashing Waves đánh 2 lần trong 6 ô. Gần như không có chỗ trốn.</li>
        </ul>
      </Hieromon>

      <Hieromon id={3706}>
        <ul>
          <li><strong>Không có hệ yếu</strong>, nên chọn technique theo sát thương thuần.</li>
          <li><strong>Loong Ward:</strong> 50% phản đòn Ánh sáng mỗi khi bị đánh. Build quá nhiều hit sẽ ăn phản liên tục. Ưu tiên đòn ít hit nhưng mạnh.</li>
          <li>Dưới 50% máu chuyển sang <strong>Primal Awakening</strong>: đổi toàn bộ đòn Lửa thành Ánh sáng. <strong>Loong's Fury</strong> đánh 5 lần và mạnh thêm tối đa 50% theo lượng máu bạn đã mất, nên giữ máu đầy là quan trọng.</li>
          <li>Innate Luck cho nó ngẫu nhiên +10% ATK, DEF hoặc SPD mỗi lượt.</li>
        </ul>
      </Hieromon>

      <Hieromon id={3707}>
        <ul>
          <li><strong>Field Guard:</strong> vào trận có 50 tầng giảm sát thương, <strong>mất 1 tầng mỗi lần dính sát thương technique</strong>. Mở trận bằng technique nhiều hit để bào hết tầng càng sớm càng tốt.</li>
          <li><strong>Void Singularity</strong> kéo mọi kẻ trong 5 ô vào sát nó, rồi Skyrending Particle Beam đánh 3 lần vùng 5×6 phía trước.</li>
          <li>Dưới 50% máu chuyển sang <strong>Rampage Reboot</strong> với bộ skill Ánh sáng: gây Starblight cộng tới 10 tầng (không giải được), và <strong>Cosmic Endfall đánh 10 lần lên toàn bộ kẻ địch</strong>. Cần hồi máu hoặc khiên cho giai đoạn này.</li>
        </ul>
      </Hieromon>

      <Hieromon id={3708}>
        <ul>
          <li><strong>Element Shift:</strong> vào trận ở dạng Frostchill (đòn Nước, có thể gây Frozen). Khi nhận đủ sát thương technique <strong>Lửa</strong>, nó chuyển sang dạng <strong>Blazing</strong>: Crimson Blaze đánh Lửa 6 lần và Hellfire Purge tăng chí mạng cho nó. Nhận đủ sát thương Nước thì quay lại Frostchill.</li>
          <li>Dạng Blazing nguy hiểm hơn, nên <strong>tránh dồn technique Lửa</strong>. Gió, Ánh sáng, Bóng tối, Vật lý (và cả Nước) đều an toàn hơn.</li>
          <li>Dual Surge cộng tầng Inferno / Tideform (tối đa 100) mỗi khi một technique Lửa / Nước được dùng. Mô tả game không ghi rõ tầng tăng gì, nên chỉ coi đây là lý do thêm để hạn chế Lửa.</li>
        </ul>
      </Hieromon>

      <p className="source">Dữ liệu Hieromon (skill, chỉ số, cấp và level) lấy từ trang Enemies của Purrwikimania (purrwikimania.com), cập nhật 07/11/2026. Skill của class từ dữ liệu web (nguồn Sword x Staff Compass). Gợi ý khắc chế do Guild Horizon tổng hợp theo cơ chế, chưa phải bộ skill đã kiểm chứng.</p>
    </>
  );
}
