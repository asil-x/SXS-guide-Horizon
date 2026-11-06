import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Daily Dungeon adalah salah satu aktivitas terpenting yang harus dilakukan setiap hari, karena ini <strong>sumber utama gear dan shard gear</strong> untuk mengembangkan akun.</p>
      <p>Setiap hari kamu dapat 2 run gratis. Run tambahan memakai <Tip>Dawnium</Tip> (2 run per hari, 100 dan 150), dan <strong>sangat disarankan membeli keduanya setiap hari</strong> kalau kamu ingin gear selalu mengikuti progres.</p>
      <p><Img src="guides/daily-dungeon-sxs.webp" alt="sword x staff daily dungeon" /></p>

      <hr />

      <h2 id="rewards">Hadiah</h2>
      <p>Hadiah utama Daily Dungeon adalah <strong>gear, shard gear, dan <Tip>Raw Ore</Tip></strong>. 100 shard bisa dibuat menjadi satu gear pilihan, yang juga bisa dijual di auction house untuk mendapat <Tip>Dawnium</Tip>.</p>
      <Alert title="Catatan soal shard gear">
        <p>Begitu dungeon baru terbuka, shard dari dungeon lama hanya bisa di-dismantle, tidak bisa dijual lagi. <strong>Jangan menimbun shard lama.</strong></p>
      </Alert>
      <p>Jenis petak di dungeon dan hadiahnya:</p>
      <table className="data-table">
        <tbody>
          <tr><td>Peti Emas</td><td>Gear Epic atau Legendary + <Tip>Raw Ore</Tip></td></tr>
          <tr><td>Peti Perak</td><td>Gear Rare + <Tip>Raw Ore</Tip></td></tr>
          <tr><td>Petak kosong</td><td><Tip>Raw Ore</Tip> (itu saja)</td></tr>
        </tbody>
      </table>
      <p>Tingkat kualitas gear terbuka seiring progres game:</p>
      <table className="data-table">
        <tbody>
          <tr><td>Legendary ke bawah</td><td>Bisa didapat sejak awal</td></tr>
          <tr><td>Mythic</td><td>Mecha Summit</td></tr>
          <tr><td>Divine</td><td>Aquorigin Shrine Hard</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="ranking">Rating</h2>
      <p>Rating kamu (S, A, B…) hanya tergantung pada <strong>seberapa jauh kamu maju di dungeon</strong>, bukan pada petak yang kamu pilih di sepanjang jalan.</p>
      <Alert type="red" title="Kalahkan boss = rank S">
        <p>Kalau berhasil mengalahkan boss, kamu pasti dapat rank S apa pun rutenya. <strong>Selalu incar itu.</strong></p>
      </Alert>
      <p>Rating akhir langsung memengaruhi kualitas peti terakhir, yang menentukan:</p>
      <ul>
        <li>Jumlah shard yang kamu dapat</li>
        <li>Peluang drop gear utuh</li>
      </ul>
      <p>Jadi mengoptimalkan rute agar sampai ke boss lebih penting daripada memilih petak “paling aman” atau “paling sulit”.</p>

      <hr />

      <h2 id="boosting-drops">Menambah hadiah</h2>
      <p>Ada dua stat yang menentukan berapa banyak hadiah tambahan dari dungeon. Namanya mirip tapi memengaruhi <strong>dua hadiah yang berbeda</strong>:</p>
      <ul>
        <li><strong>2× Rating Reward Rate</strong>: peluang <strong>peti rating dibayar dua kali</strong>. Layar hadiah menandai peti kedua sebagai bonus.</li>
        <li><strong>Gear Drop Ascension Rate</strong> (beberapa line menulis Promotion Rate): menaikkan peluang <strong>gear yang drop dari ruangan</strong> naik satu tingkat kualitas.</li>
      </ul>

      <h3 id="one-run">Apa yang didapat dari satu run dungeon</h3>
      <p>Setiap ruangan Elite, Boss, dan boss terakhir men-drop <strong>1 gear</strong>. Saat diklaim, setiap gear punya satu kesempatan naik tingkat, bahkan tanpa Ascension sama sekali:</p>
      <table className="data-table">
        <thead><tr><th>Naik tingkat</th><th className="num">Rate dasar per ruangan</th></tr></thead>
        <tbody>
          <tr><td>Rare → Epic</td><td className="num">30% (Verdantglade: 10%)</td></tr>
          <tr><td>Epic → Legendary</td><td className="num">20% (Verdantglade: 5%)</td></tr>
          <tr><td>Legendary → Mythic</td><td className="num">0,5%</td></tr>
        </tbody>
      </table>
      <p>Di akhir run kamu dapat <strong>1 peti rating</strong> sesuai rating. Contoh Gate of Genesis tingkat Hard, rank S:</p>
      <table className="data-table">
        <thead><tr><th>Hadiah</th><th>Yang didapat</th></tr></thead>
        <tbody>
          <tr><td>Ruangan Elite</td><td>1 gear Rare, 30% naik jadi Epic</td></tr>
          <tr><td>Boss dan boss terakhir (2 ruangan)</td><td>1 gear Legendary, 0,5% naik jadi Mythic</td></tr>
          <tr><td>Peti rating</td><td>96,1%: 10 shard Mythic · 2,8%: 1 gear Mythic · 1,1%: 1 gear Divine</td></tr>
        </tbody>
      </table>
      <p>Jika dikonversi (100 shard = 1 gear Mythic pilihan), peti memberi sekitar <strong>0,135 gear Mythic ke atas per run</strong>, sementara dua kesempatan naik tingkat di ruangan boss hanya bernilai sekitar 0,01. <strong>Gear endgame datang dari peti, bukan dari ruangan.</strong></p>

      <h3 id="which-stat">Stat mana yang diprioritaskan</h3>
      <p>Tambahan gear Mythic ke atas setelah 100 run Gate of Genesis Hard, rank S:</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Sumber</th><th className="num">2× Rating</th><th className="num">Ascension</th><th className="num">2× lebih baik</th></tr></thead>
          <tbody>
            <tr><td>1 line semua dungeon (2× +5%, Ascension +10%)</td><td className="num">+0,68</td><td className="num">+0,1</td><td className="num">6,8 kali</td></tr>
            <tr><td>1 line per kingdom (2× +10%, Ascension +20%)</td><td className="num">+1,35</td><td className="num">+0,2</td><td className="num">6,8 kali</td></tr>
            <tr><td>Astral Pact maksimal (2× +50%, Ascension +75%)</td><td className="num">+6,75</td><td className="num">+0,75</td><td className="num">9 kali</td></tr>
          </tbody>
        </table>
      </div>
      <Alert type="red" title="Kesimpulan: 2× Rating Reward selalu menang">
        <p>Line 2× hanya punya setengah persentase line Ascension, tapi menghasilkan <strong>sekitar 7 kali lebih banyak gear</strong>, karena menggandakan seluruh peti, bukan hanya dua kesempatan 0,5%. <strong>Mulai tingkat Nightmare ke atas, tinggalkan Ascension sepenuhnya</strong>: peti di sana memberi gear Divine, sedangkan Ascension hanya menaikkan drop ruangan ke Mythic.</p>
      </Alert>
      <p className="muted">Catatan: kedua roll terjadi di server. Hitungan di atas menganggap Ascension <em>mengalikan</em> rate dasar (rate = dasar × (1 + Ascension)). Ini sesuai dengan pengamatan pemain, tapi belum dikonfirmasi oleh game.</p>

      <h3 id="gear-stats">Line stat pada gear</h3>
      <p>Ini line khusus yang ada di gear Epic ke atas. Setiap dungeon memakai <strong>line umum</strong> ditambah <strong>line yang memakai nama kingdom-nya</strong>. Line kingdom lain tidak berpengaruh.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Line</th><th className="num">2× Rating Reward</th><th className="num">Gear Drop Ascension</th></tr></thead>
          <tbody>
            <tr><td>Dungeon (semua dungeon)</td><td className="num">+5%</td><td className="num">+10%</td></tr>
            <tr><td>Verdantglade, Cinder Ridge, Aqualis</td><td className="num">+5%</td><td className="num">+10%</td></tr>
            <tr><td>Loong Haven, Aethyris</td><td className="num">+5% atau +10%</td><td className="num">+10% atau +20%</td></tr>
            <tr><td>Harpadia, Ignis</td><td className="num">+10%</td><td className="num">+20%</td></tr>
          </tbody>
        </table>
      </div>
      <p>Urutan yang sebaiknya dilakukan:</p>
      <ol>
        <li>Buat <strong>satu set farming terpisah</strong>, pasang line 2× untuk kingdom yang sedang di-farm di setiap gear yang bisa memunculkan line itu.</li>
        <li>Lalu line 2× umum (+5%).</li>
        <li>Naikkan bintang relic <strong>Lucky Statue</strong> kalau punya.</li>
        <li>Line Ascension hanya dipertahankan di gear yang tidak punya line lebih baik, dan <strong>jangan pernah dipasang di gear tempur</strong>.</li>
        <li>Selalu main untuk rank S: makin besar petinya, makin bernilai 2×.</li>
      </ol>
      <p>Belum perlu memikirkan set farming sampai kamu cukup kuat untuk memakainya dan tetap dapat rank S.</p>

      <hr />

      <h3 id="lucky-statue-relic">Relic Lucky Statue</h3>
      <p><Img src="guides/lucky-statue.webp" alt="sword x staff lucky-statue" /></p>
      <p>Relic ini didapat dari event Grand Treasure Hunt. Relic ini memberi <strong>+10% 2× Rating Reward Rate di 0 bintang, naik bertahap hingga +40% di 6 bintang</strong>, dan tidak ada versi Ascension-nya.</p>
      <p>Ingat pasang sebelum memulai run harian, setelah selesai boleh dilepas.</p>

      <hr />

      <h3 id="seasonal-upgrades">Astral Pact (upgrade per season)</h3>
      <p><Img src="guides/season-upgrade.webp" alt="sword x staff astral pact" /></p>
      <p>Astral Pact dibuka dengan Primostar dan berlaku di <strong>semua dungeon</strong>, ditumpuk dengan stat pada gear:</p>
      <ul>
        <li><strong>2× Rating Reward</strong>: +2% di milestone 6 dan setiap 8 milestone berikutnya, maksimal <strong>+50%</strong> di milestone 198.</li>
        <li><strong>Gear Drop Ascension</strong>: +3% di milestone 2 dan setiap 8 milestone berikutnya, maksimal <strong>+75%</strong> di milestone 194.</li>
      </ul>
      <p>Lihat juga panduan Season, Primostar &amp; Astral Pact.</p>

      <hr />

      <h2 id="season-end">Akhir season: simpan kesempatan</h2>
      <p>Kamu bisa menyimpan hingga <strong>4 kesempatan</strong> klaim hadiah. Sehari sebelum season berakhir, berhenti mengklaim hadiah dungeon. Reset harian menambah 2 lagi, jadi kamu masuk season baru dengan <strong>6 kesempatan</strong>, tepat saat gear season baru paling berharga. Hadiah yang diklaim lewat Reward Retrieval juga mendapat manfaat dari kedua stat di atas.</p>

      <p className="source">Data drop rate dan line stat dungeon dikumpulkan dari Purrwikimania.</p>
    </>
  );
}
