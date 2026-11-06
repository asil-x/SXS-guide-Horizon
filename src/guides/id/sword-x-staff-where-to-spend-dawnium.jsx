import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Genre AFK Idle RPG seperti ini biasanya berbeda dari game gacha pada umumnya, di mana sebagian besar mata uang premium dipakai untuk menarik karakter.</p>
      <p>Di sini kamu memakai mata uang premium untuk membeli resource dan melakukan aktivitas harian yang membuat akun lebih kuat, bukan hanya untuk gacha.</p>
      <Alert type="red" title="Sisihkan untuk Merchant!">
        <p>Kamu bisa bertemu merchant saat memakai <Tip>Destiny Fruit</Tip>. Mereka menjual resource bagus, skill, dan kadang bahkan Fantomon. Selalu simpan sedikit <Tip>Dawnium</Tip> untuk ini.</p>
      </Alert>
      <p>Berapa banyak aktivitas tambahan / pengeluaran terserah kamu, tapi kalau ingin akun yang optimal <strong>sebaiknya lakukan hampir semuanya setiap hari</strong>.</p>
      <Tabs>
        <Tab label="Material Realms">
          <p><Img src="guides/material-realms.webp" alt="sword x staff material realms" /></p>
          <p>Di sini kamu farming semua resource yang dibutuhkan untuk mengembangkan akun dan untuk gerobak.</p>
          <ul>
            <li><strong>Pemain F2P</strong> sebaiknya membeli run tambahan 2/2/2/2</li>
            <li><strong>Pemain yang top up</strong> sebaiknya membeli minimal 4/2/4/4 run tambahan</li>
            <li><strong>Whale</strong> bisa membeli lebih banyak lagi, tergantung berapa <Tip>Dawnium</Tip> yang rela kamu keluarkan</li>
          </ul>
          <p><Tip>Raw Ore</Tip> dan <Tip>Chrono Sand</Tip> sangat cepat habis, jadi yang top up sebaiknya membeli run tambahan. Saya sarankan 4 kali sehari, tapi tergantung seberapa banyak kamu top up.</p>
          <p>Harga naik bertahap: 60, 60, 100, 100, 150, 150, 200, 200, 250, 300.</p>
        </Tab>
        <Tab label="Daily Dungeon">
          <p><Img src="guides/daily-dungeon-sxs.webp" alt="sword x staff daily dungeon" /></p>
          <p><strong>Sangat penting untuk membeli run tambahan di sini</strong>. Hanya bisa membeli 2 kali sehari, yang pertama 100 dan yang kedua 150.</p>
          <p>Di sinilah kamu farming gear dan shard untuk gear dengan kelangkaan tertinggi.</p>
        </Tab>
        <Tab label="Guild">
          <p><Img src="guides/guild-screen.webp" alt="sword x staff guild screen" /></p>
          <p><strong>Bagian ini sangat tergantung pada guild kamu dan permintaan mereka</strong>, tapi tetap ada beberapa hal yang bisa dilakukan setiap hari untuk menambah resource dan power.</p>
          <ul>
            <li>Donasi guild: F2P lakukan yang gratis + dua kali lagi, yang top up bisa lebih</li>
            <li>Item penambah rate farming (berlaku 24 jam tapi cukup mahal, <em>tidak disarankan untuk F2P</em>)</li>
          </ul>
          <hr />
          <p>Untuk shop guild tergantung selera, saya pribadi membeli:</p>
          <ul>
            <li><Tip>Bond Trinket</Tip>, harus ditimbun untuk membesarkan semua pet</li>
            <li><Tip>Resilient Sprout</Tip>, <Tip>Hopeful Bud</Tip> dan <Tip>Lunar Heart</Tip> (hanya saat diskon)</li>
            <li><Tip>Stone Sheep</Tip>, <Tip>Cotton Sheep</Tip> dan <Tip>Lunar Sheep</Tip> (hanya saat diskon)</li>
            <li><Tip>Steely Chicken</Tip>, <Tip>Dawn Chicken</Tip> dan <Tip>Lunar Chicken</Tip> (hanya saat diskon)</li>
          </ul>
          <p><strong>Kamu tidak akan membeli ketiga jenis bahan diskon itu sekaligus</strong>, prioritaskan yang dibutuhkan aptitude Fantomon utamamu.</p>
        </Tab>
        <Tab label="Arena">
          <p><Img src="guides/pvp.webp" alt="sword x staff pvp screen" /></p>
          <p>Saya tidak terlalu suka PVP, tapi <strong>mata uang yang didapat sangat berguna untuk shop penukaran Arena</strong>, jadi layak bertarung beberapa kali lagi (2 kali sehari sangat murah).</p>
          <Alert title="Hadiah reset PVP">
            <p>Setiap reset season, refresh sebanyak mungkin minimal di dua hari pertama untuk mendapat hadiah shop lebih awal, lalu kembali ke 2 pertarungan tambahan saja.</p>
          </Alert>
          <p>Harga naik bertahap: 10, 15, 20, 30, 40, 60, 80, 100.</p>
        </Tab>
        <Tab label="Vendor Booth">
          <p><Img src="guides/daily-shop.webp" alt="sword x staff daily shop" /></p>
          <p><strong>Tab General</strong></p>
          <p>SEMUANYA kecuali bahan masakan. Lanjut refresh HANYA KALAU uangmu cukup untuk memborong shop, idealnya minimal 3 kali sehari</p>
          <hr />
          <p><strong>Tab Vault</strong></p>
          <ol>
            <li><Tip>Stamina</Tip> (gratis lol)</li>
            <li>Diskon <Tip>Stellatie</Tip> bagus, tapi tidak wajib</li>
            <li>Resource Material Realm: <Tip>Iron Hammer</Tip>, <Tip>Gold Pickaxe</Tip>, <Tip>Worn Knuckles</Tip> dan <Tip>Sand Shovel</Tip></li>
            <li><Tip>Destiny Fruit</Tip> (F2P sebaiknya simpan 200 untuk event berikutnya)</li>
            <li><Tip>Epic Auroral Badge</Tip></li>
            <li>Terutama untuk yang top up, beli <Tip>Refined Ore</Tip> tambahan</li>
          </ol>
        </Tab>
        <Tab label="Auction House">
          <p><Img src="guides/auction-house.webp" alt="sword x staff auction house" /></p>
          <p>Di sini kamu bisa ikut lelang dan menjual gear, shard gear, bahan masakan, material Fantomon, dan banyak lagi.</p>
          <p>Saya masukkan ke daftar supaya kamu tetap memantaunya, tapi sama sekali tidak wajib dibuka setiap hari.</p>
        </Tab>
      </Tabs>
      <p>Masih ada beberapa tempat lain untuk memakai <Tip>Dawnium</Tip> setiap hari, tapi <strong>menurut saya yang di atas adalah yang terbaik untuk F2P atau yang top up sedikit</strong>.</p>
    </>
  );
}
