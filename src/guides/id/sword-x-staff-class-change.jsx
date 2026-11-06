import { Alert, ClassChange, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Ganti class <strong>tidak membuat skill hilang</strong>. Setiap skill yang kamu punya akan diubah menjadi skill dari class baru, dan <strong>tetap mempertahankan rank maupun level-nya</strong>. Jadi pindah dari Knight ke Duelist (bahkan dari jalur Warrior ke jalur Mage) tidak berarti harus grinding dari nol.</p>
      <p>Masalahnya, skill mana jadi skill apa. Game memakai aturan pencocokan yang tetap, jadi kalau kamu memahaminya, kamu bisa tahu lebih dulu ke mana skill rank tinggimu akan jatuh dan memilih opsi terbaik.</p>

      <hr />

      <h2 id="rules">Aturan pencocokan skill</h2>
      <p>Game memproses tiap tier dari kedua jalur class secara berurutan. Di setiap tier, skill dikelompokkan berdasarkan:</p>
      <ul>
        <li><strong>Tipe:</strong> Technique (aktif) atau Charm (pasif)</li>
        <li><strong>Kelangkaan awal</strong> skill: Rare, Epic, atau Legendary</li>
      </ul>
      <p>Sebuah skill <strong>hanya bisa menjadi skill dari grup yang sama di tier yang sama</strong> pada class baru. Contoh: Technique Legendary di tier 2 Knight hanya bisa menjadi Technique Legendary di tier 2 Duelist, tidak pernah menjadi Charm atau skill tier lain.</p>
      <table className="data-table">
        <thead><tr><th>Kasus</th><th>Hasil</th></tr></thead>
        <tbody>
          <tr><td>Grup hanya berisi 1 skill</td><td>Selalu menjadi skill itu</td></tr>
          <tr><td>Grup berisi 2 skill</td><td>50/50 di setiap opsi</td></tr>
          <tr><td>Tier 1, beda akar (Warrior ↔ Mage)</td><td>Grup berisi 4 sampai 5 skill, jauh lebih sulit ditebak</td></tr>
          <tr><td>Tier 1, akar sama (mis. Knight → Duelist)</td><td>Skill tier 1 tetap, tidak berubah</td></tr>
        </tbody>
      </table>

      <h3 id="plans">3 opsi untuk dipilih</h3>
      <p>Saat mulai ganti class, game membuat <strong>3 opsi</strong> dan kamu memilih 1. Game berusaha membuat ketiga opsi berbeda dalam hal ke mana skill <em>yang kamu miliki</em> akan jatuh, jadi hampir selalu ada pilihan.</p>
      <Alert title="Tips memilih opsi">
        <p>Jangan hanya melihat gambaran besar. Cari <strong>2 sampai 3 skill dengan rank tertinggi</strong> (biasanya yang paling banyak kamu tuangi resource) dan pilih opsi yang mengubahnya menjadi skill yang benar-benar dipakai build barumu. Skill rank rendah sisanya mau jatuh ke mana tidak terlalu penting.</p>
      </Alert>

      <h3 id="what-moves">Apa saja yang ikut pindah</h3>
      <ul>
        <li><strong>Rank dan level</strong> skill pindah ke skill baru.</li>
        <li><strong>Shard skill</strong> juga dikonversi dengan pasangan yang sama.</li>
        <li><strong>Class level dan badge class</strong> ikut pindah sepanjang jalurnya.</li>
        <li>Tier tinggi yang belum terbuka juga dicocokkan dengan aturan yang sama, kalau-kalau kamu sudah punya skill dari tier itu.</li>
      </ul>

      <h3 id="cost">Biaya dan waktu</h3>
      <ul>
        <li><strong>Gratis 1 kali setiap 168 jam</strong> (7 hari). Selain itu harus memakai item ganti class.</li>
        <li>Bisa <strong>dibatalkan dalam 8 jam</strong>, semuanya dikembalikan seperti semula. Sangat berguna kalau kamu ganti untuk mencoba build baru lalu merasa tidak cocok.</li>
      </ul>
      <Alert type="red" title="Perhatian">
        <p>Karena gratis hanya seminggu sekali, <strong>periksa ketiga opsi dengan teliti sebelum konfirmasi</strong>. Kalau tidak ada opsi yang bagus, tutup saja dan tunggu kesempatan berikutnya daripada terburu-buru lalu harus memakai item untuk memperbaikinya.</p>
      </Alert>

      <hr />

      <h2 id="lookup">Pencarian: skill mana jadi skill apa</h2>
      <p>Pilih class saat ini dan class tujuan. Tabel di bawah menampilkan tiap tier: kolom “Skill …” adalah skill yang kamu punya, kolom “Bisa menjadi” adalah skill yang <strong>mungkin</strong> menjadi hasilnya. Ketuk skill untuk melihat detail.</p>
      <ClassChange from="Knight" to="Duelist" />
      <p className="muted">Tabel hanya menunjukkan kemungkinan. Opsi sebenarnya diacak oleh server game saat kamu menekan ganti class.</p>

      <hr />

      <h2 id="when">Kapan sebaiknya ganti class?</h2>
      <ul>
        <li><strong>Di awal season baru</strong>, saat meta berubah dan skill tier baru dirilis. Ini juga saat paling banyak orang mengganti build.</li>
        <li><strong>Saat guild kekurangan peran</strong> (biasanya tank atau healer untuk raid dan Nexus). Knight dan Sage selalu dicari.</li>
        <li><strong>Saat kamu sudah punya skill rank tinggi dari class lain</strong>, misalnya dari <Tip>Stellatie</Tip> dan Goddess Prayer. Dalam kasus ini ganti class hampir tidak merugikan.</li>
      </ul>
      <p>Sebaliknya, kalau build kamu sekarang hanya bergantung pada 1 sampai 2 skill Legendary dengan rank sangat tinggi dan grupnya di class baru punya 2 pilihan, pertimbangkan baik-baik: peluangmu mempertahankan skill setara hanya 50% di setiap opsi.</p>

      <h3 id="tier-8">Syarat membuka tier 8</h3>
      <p>Class tier 8 (Caelifer, Infernifer, Entropist, Omnifex) rilis bersama Season 6 dan kingdom Aeperis. Untuk naik ke tier 8 butuh <strong>level karakter 230, class level 480, dan class tier 7 mencapai level 55</strong>.</p>

      <p className="source">Data aturan pencocokan, biaya, dan syarat tier 8 dikumpulkan dari Purrwikimania dan Sword x Staff Compass.</p>
    </>
  );
}
