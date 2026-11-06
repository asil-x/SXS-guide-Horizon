import { Link } from 'react-router-dom';
import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Fantomon adalah pet yang memberi stat pasif dan bisa ikut bertarung bersamamu. Fantomon terbuka di <strong>level akun 50</strong> lewat pohon besar di rumahmu.</p>
      <p>Kamu bisa melihat <Link to="/db/fantomons">database Fantomon</Link> di sini kalau ingin daftar lengkap pet di dalam game dan mana yang terbaik.</p>
      <p><Img src="guides/fantomon-gacha.webp" alt="sword x staff fantomon gacha" /></p>

      <hr />

      <h2 id="obtaining">Cara mendapatkan</h2>
      <p><Img src="guides/fantomon-rates.webp" alt="sword x staff fantomon-rates" /></p>
      <p>Fantomon di-summon dari pohon di rumahmu. Ringkasannya:</p>
      <ul>
        <li>Rate dasar 0.8% untuk fantomon SSR, 5% untuk SR</li>
        <li>Minimal 1 <Tip>Summon Crystal</Tip> setiap 10 kali summon</li>
        <li><strong>60 Summon Crystal</strong> untuk ditukar dengan satu fantomon Mythic di shop</li>
      </ul>
      <p>Shop hanya punya <strong>dua fantomon Mythic</strong>: <Tip>Aegiswing</Tip> dan <Tip>Nyxarchon</Tip>. Keduanya butuh 60 <Tip>Summon Crystal</Tip> per ekor.</p>
      <p>Selain itu setiap minggu ada satu Fantomon SSR acak seharga 18 <Tip>Summon Crystal</Tip>, tapi lebih baik ditabung untuk yang Mythic karena jauh lebih kuat.</p>
      <h3 id="arena-shop-exclusive">Eksklusif shop Arena</h3>
      <p><Img src="guides/kels-shards.webp" alt="sword x staff kels-shards" /></p>
      <p><strong><Tip>Kels</Tip></strong> tidak bisa di-summon dari pohon. Hanya dijual di shop arena, jadi perhatikan mata uang Arena kamu.</p>

      <hr />

      <h2 id="deployment">Penempatan</h2>
      <p><Img src="guides/pet-stats.webp" alt="sword x staff pet-stats" /></p>
      <p>Kamu punya 4 slot penempatan, tapi <strong>setiap Fantomon yang kamu miliki memberi stat</strong>, hanya dengan rasio berbeda:</p>
      <table className="data-table">
        <tbody>
          <tr><td>Utama (1 slot)</td><td>100%</td></tr>
          <tr><td>Pendamping (3 slot)</td><td>masing-masing 50%</td></tr>
          <tr><td>Sisa koleksi</td><td>masing-masing 20%</td></tr>
        </tbody>
      </table>
      <p>Selalu taruh fantomon paling langka (Mythic dulu, lalu Legendary) di slot utama untuk memaksimalkan stat.</p>
      <p>Fantomon yang kamu bawa bertarung TIDAK harus yang ada di slot utama pemberi stat. <strong>Fantomon utama ≠ Fantomon tempur</strong>.</p>

      <hr />

      <h2 id="leveling">Naik level</h2>
      <h3 id="treats">Treats</h3>
      <p><Img src="guides/pet-treats.webp" alt="sword x staff pet-treats" /></p>
      <p>Menaikkan level fantomon butuh <Tip>Basic Treats</Tip>, yang bisa didapat dari:</p>
      <ul>
        <li>Hadiah idle dari gerobak</li>
        <li>Shop gerobak harian (dengan <Tip>Rolla</Tip>)</li>
        <li>Tanaman dan ternak di shop guild</li>
      </ul>
      <Alert title="Resonansi Fantomon">
        <p>Level terendah di antara 4 fantomon yang ditempatkan menjadi level resonansi. Kalau 4 fantomon yang ditempatkan punya level terendah 127, semua fantomon lain yang kamu miliki juga dihitung level 127.</p>
        <p><strong>Jaga 4 fantomon yang ditempatkan di level yang sama untuk memaksimalkan stat yang didapat.</strong></p>
      </Alert>
      <h3 id="aptitude">Aptitude (bakat)</h3>
      <p><Img src="guides/pet-aptitude.webp" alt="sword x staff pet-aptitude" /></p>
      <p>Pada dasarnya ini skill tree penambah stat untuk tiap fantomon (dan untukmu). Beberapa hal yang perlu diingat:</p>
      <ul>
        <li>Investasi hanya ke <strong>4 fantomon yang ditempatkan</strong> karena material terbatas</li>
        <li>Kamu bisa reset aptitude kalau ingin mengganti fantomon yang ditempatkan</li>
      </ul>

      <hr />

      <h2 id="evolution">Evolusi</h2>
      <p>Evolusi membuka <strong>wujud Materialization</strong> fantomon, yang aktif saat bertarung dan membuka skill <em>(aktif)</em> baru.</p>
      <h3 id="requirements-to-evolve">Syarat evolusi</h3>
      <ul>
        <li>Mencapai <strong>level 108</strong> dan membuka Nimbuville</li>
        <li>Fantomon harus berkelangkaan <strong>Mythic</strong> (butuh duplikat untuk mencapainya)</li>
      </ul>
      <h3 id="how-materialization-works">Cara kerja Materialization</h3>
      <p>Cincin energi di sekitar ikon fantomon terisi selama pertarungan. Saat penuh, fantomon muncul dalam wujud evolusinya. Kalau dikalahkan, energinya kembali ke 0.</p>
      <p>Saat belum muncul, hanya <strong>skill support</strong> yang aktif. Saat sudah muncul, hanya <strong>skill tempur</strong> yang aktif, sampai fantomon dikalahkan dan kembali ke wujud support.</p>
    </>
  );
}
