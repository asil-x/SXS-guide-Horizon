import { Link } from 'react-router-dom';
import { Alert, Img, Tip } from '../components/guide';

export const meta = {
  title: 'Hướng dẫn Fantomon',
  category: 'guide',
  cover: 'guides/fantomon-guide.webp',
};

export default function Page() {
  return (
    <>
      <p>Fantomon là pet cho chỉ số bị động và có thể ra trận cùng bạn. Chúng mở khoá ở <strong>cấp tài khoản 50</strong> thông qua cây lớn ở nhà bạn.</p>
      <p>Bạn có thể xem <Link to="/db/fantomons">dữ liệu Fantomon</Link> tại đây nếu muốn xem danh sách đầy đủ các pet trong game và con nào tốt nhất.</p>
      <p><Img src="guides/fantomon-gacha.webp" alt="sword x staff fantomon gacha" /></p>

      <hr />

      <h2 id="obtaining">Cách sở hữu</h2>
      <p><Img src="guides/fantomon-rates.webp" alt="sword x staff fantomon-rates" /></p>
      <p>Fantomon được quay từ cây ở nhà bạn. Tóm tắt nhanh:</p>
      <ul>
        <li>Tỉ lệ gốc 0.8% cho fantomon SSR, 5% cho SR</li>
        <li>Ít nhất 1 <Tip>Summon Crystal</Tip> mỗi 10 lượt quay</li>
        <li><strong>60 Summon Crystal</strong> để đổi một fantomon Mythic trong shop</li>
      </ul>
      <p>Shop chỉ có <strong>hai fantomon Mythic</strong>: <Tip>Aegiswing</Tip> và <Tip>Nyxarchon</Tip>. Cả hai đều cần 60 <Tip>Summon Crystal</Tip> mỗi con.</p>
      <p>Ngoài ra mỗi tuần còn có một Fantomon SSR ngẫu nhiên giá 18 <Tip>Summon Crystal</Tip>, nhưng nên để dành cho con Mythic vì mạnh hơn hẳn.</p>
      <h3 id="arena-shop-exclusive">Chỉ có ở shop Arena</h3>
      <p><Img src="guides/kels-shards.webp" alt="sword x staff kels-shards" /></p>
      <p><strong><Tip>Kels</Tip></strong> không quay được từ cây. Nó chỉ bán trong shop đấu trường, nên hãy để ý tiền tệ Arena của bạn.</p>

      <hr />

      <h2 id="deployment">Ra trận</h2>
      <p><Img src="guides/pet-stats.webp" alt="sword x staff pet-stats" /></p>
      <p>Bạn có 4 ô ra trận, nhưng <strong>mọi Fantomon bạn sở hữu đều cho chỉ số</strong>, chỉ là với tỉ lệ khác nhau:</p>
      <table className="data-table">
        <tbody>
          <tr><td>Chính (1 ô)</td><td>100%</td></tr>
          <tr><td>Phụ (3 ô)</td><td>mỗi con 50%</td></tr>
          <tr><td>Phần còn lại trong bộ sưu tập</td><td>mỗi con 20%</td></tr>
        </tbody>
      </table>
      <p>Luôn đặt fantomon hiếm nhất (ưu tiên Mythic, rồi tới Legendary) vào ô chính để tối đa chỉ số.</p>
      <p>Fantomon bạn mang vào trận KHÔNG cần là con ở ô chính cho chỉ số. <strong>Fantomon chính ≠ Fantomon chiến đấu</strong>.</p>

      <hr />

      <h2 id="leveling">Lên cấp</h2>
      <h3 id="treats">Treats</h3>
      <p><Img src="guides/pet-treats.webp" alt="sword x staff pet-treats" /></p>
      <p>Lên cấp fantomon cần <Tip>Basic Treats</Tip>, có thể kiếm từ:</p>
      <ul>
        <li>Phần thưởng treo máy của xe hàng</li>
        <li>Shop xe hàng hằng ngày (bằng <Tip>Rolla</Tip>)</li>
        <li>Cây và vật nuôi trong shop guild</li>
      </ul>
      <Alert title="Cộng hưởng Fantomon (Resonance)">
        <p>Cấp thấp nhất trong 4 fantomon đang ra trận sẽ thành cấp cộng hưởng. Nếu 4 con ra trận có cấp thấp nhất là 127, mọi fantomon khác bạn sở hữu cũng được tính là cấp 127.</p>
        <p><strong>Giữ 4 fantomon ra trận ở cấp ngang nhau để tối đa lượng chỉ số nhận được.</strong></p>
      </Alert>
      <h3 id="aptitude">Aptitude (thiên phú)</h3>
      <p><Img src="guides/pet-aptitude.webp" alt="sword x staff pet-aptitude" /></p>
      <p>Về cơ bản là cây kỹ năng tăng chỉ số cho từng fantomon (và cho bạn). Vài điều cần nhớ:</p>
      <ul>
        <li>Chỉ đầu tư vào <strong>4 fantomon đang ra trận</strong> vì nguyên liệu có hạn</li>
        <li>Bạn có thể reset aptitude nếu muốn đổi fantomon ra trận</li>
      </ul>

      <hr />

      <h2 id="evolution">Tiến hoá</h2>
      <p>Tiến hoá mở khoá <strong>dạng Materialization</strong>của fantomon, kích hoạt trong trận và mở thêm skill <em>(chủ động)</em> mới.</p>
      <h3 id="requirements-to-evolve">Điều kiện tiến hoá</h3>
      <ul>
        <li>Đạt <strong>cấp 108</strong> và mở khoá Nimbuville</li>
        <li>Fantomon phải có <strong>độ hiếm Mythic</strong> (cần một bản trùng để đạt được)</li>
      </ul>
      <h3 id="how-materialization-works">Cơ chế Materialization</h3>
      <p>Vòng năng lượng quanh biểu tượng fantomon sẽ đầy dần trong trận. Khi đầy, fantomon hiện hình ở dạng tiến hoá. Nếu nó bị hạ, năng lượng sẽ về 0.</p>
      <p>Khi chưa hiện hình, chỉ có <strong>skill hỗ trợ</strong> hoạt động. Khi đã hiện hình, chỉ có <strong>skill chiến đấu</strong> kích hoạt, cho tới khi fantomon bị hạ và quay lại dạng hỗ trợ.</p>
    </>
  );
}
