import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p><Img src="guides/stamina-screen.webp" alt="sword x staff stamina screen" /></p>

      <h2 id="where-to-spend-stamina">Stamina sebaiknya dipakai untuk apa</h2>
      <p><Tip>Stamina</Tip> di Sword x Staff hanya dipakai untuk mengumpulkan resource di peta. Cukup praktis, karena sama saja dengan dapat resource gratis.</p>
      <Alert type="blue" title="Cara pakainya berubah tiap season">
        <p>Setiap season mengubah cara kamu memakai <Tip>Stamina</Tip>, tergantung apa yang sedang kamu butuhkan.</p>
        <p>Jadikan panduan ini referensi dan selalu sesuaikan dengan kebutuhanmu sendiri.</p>
      </Alert>
      <p>Menurut saya, pemakaian stamina terbaik di awal game cukup untuk mencari <Tip>Rolla</Tip> tambahan. Item ini dipakai <em>DI MANA-MANA</em> dalam game, dan di awal biasanya jadi hal yang bikin kebanyakan pemain mentok.</p>
      <p>Kamu bisa memakai <Tip>Rolla</Tip> untuk membeli lebih banyak barang di daily shop, dan me-refresh shop untuk mengisi ulang semua barang, maksimal 10 kali sehari.</p>
      <p><Img src="guides/where-to-spend-dawnium.webp" alt="sword x staff daily shop cart" /></p>
      <p><strong>Pemain F2P sebaiknya refresh minimal 3 kali sehari</strong> dan membeli hampir semua (kalau bisa semua) resource di daily shop.</p>
      <p>Kalau kamu peduli dengan leaderboard season, fokuslah pada <Tip>Raw Ore</Tip> dan <Tip>Chrono Sand</Tip>.</p>

      <hr />

      <h2 id="resource-nodes">Node resource</h2>
      <p>Saat farming resource, kamu akan menemukan node yang lebih besar dan memberi resource lebih banyak.</p>
      <Tabs>
        <Tab label="Node besar">
          <p><Img src="guides/big-nodes.webp" alt="sword x staff resource big nodes" /></p>
          <p>Kamu bisa membagikannya di chat ke pemain lain (atau guild) untuk farming bersama, dengan batas mingguan.</p>
        </Tab>
        <Tab label="Node spesial">
          <p><Img src="guides/special-nodes.webp" alt="sword x staff resource special nodes" /></p>
          <p>Selain resource utama, kamu juga bisa farming node spesial untuk mendapatkan gem dan bahan masakan.</p>
          <p>Batas hariannya belum jelas, tapi kamu bisa menjualnya di auction house untuk mendapatkan <Tip>Dawnium</Tip>, cukup untung.</p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="setting-up-auto">Mengatur auto</h2>
      <p>Saat pertama kali kamu mengetuk node untuk farming manual, cukup tekan tombol auto yang muncul di atas kotak chat.</p>
      <p><Img src="guides/auto-farm.webp" alt="sword x staff resource auto farm" /></p>
      <p>Tombol ini memungkinkan kamu memilih berapa banyak stamina yang dipakai untuk resource tersebut, lalu karaktermu akan mengumpulkannya otomatis.</p>
    </>
  );
}
