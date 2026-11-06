import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Sword x Staff punya sistem makanan yang cukup menarik: memulihkan HP, menambah stat saat bertarung, dan yang paling penting <strong>menaikkan stat secara permanen dengan makanan tertentu</strong>.</p>

      <hr />

      <h2 id="healing">Pemulihan HP</h2>
      <p><Img src="guides/healing-food.webp" alt="sword x staff healing food" /></p>
      <p>Makanan dasar yang akan sering kamu masak untuk memulihkan HP setelah bertarung. <strong>Setiap wilayah baru punya jenis baru yang lebih kuat dari sebelumnya.</strong></p>
      <Alert title="Pulang ke rumah juga memulihkan HP">
        <p>Makanan ini sangat berguna saat masuk dungeon, karena bisa dimakan di camp istirahat untuk bersiap sebelum pertarungan besar.</p>
      </Alert>
      <p>Semuanya murah (pakai gold dan tanaman hasil farming), jadi tidak perlu khawatir kehabisan item pemulih.</p>
      <p>Kalau tidak tahu bahan ada di mana, ketuk bahan itu di layar crafting untuk teleport langsung ke peta dan mulai mengumpulkan.</p>

      <hr />

      <h2 id="temporary-buffs">Buff sementara</h2>
      <p><Img src="guides/temporary-food.webp" alt="sword x staff temporary food" /></p>
      <p>Makanan sederhana yang memberi buff di pertarungan tertentu. Biasanya khusus untuk wilayah tertentu ATAU jenis pertarungan tertentu, jadi selalu baca dengan teliti sebelum dimakan.</p>
      <p><strong>Makanan juga tidak punya masa kedaluwarsa</strong>, jadi tidak perlu buru-buru menghabiskannya begitu didapat.</p>
      <h3 id="where-can-i-get-these-foods">Dapat makanan ini dari mana?</h3>
      <ul>
        <li>Masak sendiri beberapa menu seiring progres game</li>
        <li>Buka resep di Kingdom Shop</li>
      </ul>

      <hr />

      <h2 id="permanent-buffs">Buff permanen</h2>
      <p><Img src="guides/permanent-food.webp" alt="sword x staff permanent food" /></p>
      <p>Sekarang sistem yang penting: menaikkan stat permanen dengan makanan.</p>
      <p>Ya, bagian ini memang pay to win. Tapi pemain F2P tetap bisa mengumpulkan stat yang lumayan dalam jangka panjang hanya dengan bermain dan farming. <strong>Seperti kebanyakan game idle, ini lari maraton, bukan lari sprint</strong>.</p>
      <p>Jumlah stat yang didapat tergantung berapa kali kamu sudah memakan menu yang sama. Artinya makin sering dimakan, makin kecil efeknya.</p>
      <table className="data-table">
        <tbody>
          <tr><td>1-10</td><td>100%</td></tr>
          <tr><td>11-30</td><td>50%</td></tr>
          <tr><td>31-50</td><td>20%</td></tr>
          <tr><td>51+</td><td>5%</td></tr>
        </tbody>
      </table>
      <h3 id="where-can-i-get-these-foods-1">Dapat makanan ini dari mana?</h3>
      <ul>
        <li>Beli di auction house dengan <Tip>Luminium</Tip></li>
        <li>Di shop Arena</li>
        <li>Beli resep di auction house dengan <Tip>Luminium</Tip></li>
        <li>Hadiah Guild Clash</li>
        <li><strong>Kalau beruntung</strong>, daily quest dan <Tip>Mysterious Merchant</Tip> juga bisa punya resep</li>
      </ul>
    </>
  );
}
