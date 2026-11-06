import { Alert, ClassChange, Tip } from '../components/guide';

export const meta = {
  title: 'Đổi class: skill của bạn sẽ đi đâu?',
  desc: 'Quy tắc ghép skill khi đổi class, kèm công cụ tra cứu.',
  order: 5,
  short: 'Đổi class',
  category: 'guide',
  cover: 'skills/classes/warrior.png',
};

export default function Page() {
  return (
    <>
      <p>Đổi class <strong>không làm mất skill</strong>. Mỗi skill bạn đang có sẽ được đổi thành một skill của class mới, và <strong>giữ nguyên rank lẫn level</strong>. Nhờ vậy, chuyển từ Knight sang Duelist (hay thậm chí từ nhánh Warrior sang nhánh Mage) không có nghĩa là phải cày lại từ đầu.</p>
      <p>Vấn đề là skill nào thành skill nào. Game có một quy tắc ghép cố định, nên nếu hiểu nó, bạn sẽ biết trước skill rank cao của mình có thể rơi vào đâu và chọn phương án đổi tốt nhất.</p>

      <hr />

      <h2 id="rules">Quy tắc ghép skill</h2>
      <p>Game đi lần lượt từng tier của hai nhánh class. Ở mỗi tier, skill được chia nhóm theo:</p>
      <ul>
        <li><strong>Loại:</strong> Technique (chủ động) hoặc Charm (nội tại)</li>
        <li><strong>Độ hiếm khởi điểm</strong> của skill: Rare, Epic hoặc Legendary</li>
      </ul>
      <p>Một skill <strong>chỉ có thể thành skill cùng nhóm, cùng tier</strong> của class mới. Ví dụ: một Technique Legendary ở tier 2 của Knight chỉ có thể thành một Technique Legendary ở tier 2 của Duelist, không bao giờ thành Charm hay skill tier khác.</p>
      <table className="data-table">
        <thead><tr><th>Trường hợp</th><th>Kết quả</th></tr></thead>
        <tbody>
          <tr><td>Nhóm chỉ có 1 skill</td><td>Luôn ra đúng skill đó</td></tr>
          <tr><td>Nhóm có 2 skill</td><td>50/50 ở mỗi phương án</td></tr>
          <tr><td>Tier 1, đổi khác gốc (Warrior ↔ Mage)</td><td>Nhóm 4 đến 5 skill, khó đoán hơn nhiều</td></tr>
          <tr><td>Tier 1, cùng gốc (vd. Knight → Duelist)</td><td>Skill tier 1 giữ nguyên, không đổi</td></tr>
        </tbody>
      </table>

      <h3 id="plans">3 phương án để chọn</h3>
      <p>Khi bắt đầu đổi class, game tạo sẵn <strong>3 phương án</strong> và bạn chọn 1. Game cố gắng làm cho 3 phương án khác nhau ở chỗ skill <em>bạn đang sở hữu</em> sẽ đi đâu, nên hầu như lúc nào bạn cũng có lựa chọn.</p>
      <Alert title="Mẹo chọn phương án">
        <p>Đừng chỉ nhìn tổng thể. Hãy tìm <strong>2 đến 3 skill rank cao nhất</strong> của bạn (thường là skill bạn đã đổ nhiều tài nguyên nhất) và chọn phương án biến chúng thành skill mà build mới thật sự dùng. Các skill rank thấp còn lại có rơi vào đâu cũng không quan trọng bằng.</p>
      </Alert>

      <h3 id="what-moves">Những gì được chuyển theo</h3>
      <ul>
        <li><strong>Rank và level</strong> của skill được chuyển sang skill mới.</li>
        <li><strong>Mảnh skill</strong> cũng được đổi theo cùng cặp.</li>
        <li><strong>Class level và huy hiệu class</strong> được chuyển dọc theo nhánh.</li>
        <li>Các tier cao bạn chưa mở cũng được ghép theo cùng quy tắc, phòng khi bạn đã có sẵn skill của tier đó.</li>
      </ul>

      <h3 id="cost">Chi phí và thời gian</h3>
      <ul>
        <li><strong>Miễn phí 1 lần mỗi 168 giờ</strong> (7 ngày). Ngoài lần đó phải dùng vật phẩm đổi class.</li>
        <li>Có thể <strong>huỷ trong vòng 8 giờ</strong>, mọi thứ sẽ được trả lại như cũ. Rất hữu ích nếu bạn đổi để thử build mới rồi thấy không hợp.</li>
      </ul>
      <Alert type="red" title="Lưu ý">
        <p>Vì chỉ được miễn phí mỗi tuần một lần, hãy <strong>kiểm tra kỹ 3 phương án trước khi xác nhận</strong>. Nếu không có phương án nào ổn, đóng lại và đợi lần sau còn hơn là đổi vội rồi tốn vật phẩm để sửa.</p>
      </Alert>

      <hr />

      <h2 id="lookup">Tra cứu: skill nào thành skill nào</h2>
      <p>Chọn class hiện tại và class muốn đổi sang. Bảng bên dưới liệt kê từng tier: cột “Skill của…” là skill bạn đang có, cột “Có thể thành” là những skill nó <strong>có thể</strong> trở thành. Bấm vào skill để xem chi tiết.</p>
      <ClassChange from="Knight" to="Duelist" />
      <p className="muted">Bảng chỉ cho biết các khả năng có thể xảy ra. Phương án cụ thể do server của game tung ra lúc bạn bấm đổi class.</p>

      <hr />

      <h2 id="when">Khi nào nên đổi class?</h2>
      <ul>
        <li><strong>Đầu mùa mới</strong>, khi meta thay đổi và skill tier mới ra mắt. Đây cũng là lúc nhiều người đổi build nhất.</li>
        <li><strong>Khi đội guild thiếu vai trò</strong> (thường là tank hoặc healer cho raid và Nexus). Knight và Sage luôn được săn đón.</li>
        <li><strong>Khi bạn đã có sẵn skill rank cao của class kia</strong>, ví dụ nhờ <Tip>Stellatie</Tip> và Goddess Prayer. Khi đó đổi class gần như không mất gì.</li>
      </ul>
      <p>Ngược lại, nếu build hiện tại của bạn chỉ dựa vào 1 đến 2 skill Legendary rank rất cao và nhóm của chúng ở class mới có 2 lựa chọn, hãy cân nhắc kỹ: bạn chỉ có 50% cơ hội giữ được skill tương đương trong mỗi phương án.</p>

      <h3 id="tier-8">Yêu cầu mở tier 8</h3>
      <p>Class tier 8 (Caelifer, Infernifer, Entropist, Omnifex) ra mắt cùng Season 6 và kingdom Aeperis. Để lên tier 8 cần <strong>level nhân vật 230, class level 480 và class tier 7 đạt level 55</strong>.</p>

      <p className="source">Số liệu về quy tắc ghép, chi phí và yêu cầu tier 8 tổng hợp từ Purrwikimania và Sword x Staff Compass.</p>
    </>
  );
}
