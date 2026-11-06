import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

const PACT = [
  ['1', 'ATK', '+1%'],
  ['2', 'Dungeon: Gear Drop Ascension Rate', '+3%'],
  ['3', 'DEF', '+1%'],
  ['4', 'Gem Drop', '+5%'],
  ['5', 'HP', '+1%'],
  ['6', 'Dungeon: 2× Rating Reward Rate', '+2%'],
  ['7', 'SPD', '+1%'],
  ['8', 'EXP Gain', '+2%'],
];

const GOALS = [
  ['Season 1 · Witching Hours', 'Milestone 5 → 480', [['128', 'F2P dan top up kecil'], ['152', 'Top up kecil sampai sedang'], ['176', 'Top up sedang'], ['200', 'Top up sedang sampai besar'], ['230', 'Top up besar']]],
  ['Season 2 · Crossed Paths', 'Milestone 505 → 1.880', [['800', 'F2P dan top up kecil'], ['920', 'Top up kecil sampai sedang'], ['1.060', 'Top up kecil dan sedang: berhenti di sini'], ['1.200', 'Top up besar'], ['1.280', 'Top up besar: berhenti di sini']]],
  ['Season 3 · Finale of Chaos', 'Milestone 1.940 → 4.680', [['2.880', 'F2P dan top up kecil'], ['3.160', 'F2P: berhenti di sini'], ['3.300', 'Top up kecil sampai sedang'], ['3.590', 'Top up kecil: berhenti di sini'], ['3.740', 'Top up sedang sampai besar'], ['3.890', 'Top up sedang: berhenti di sini'], ['4.040', 'Top up sangat besar']]],
  ['Season 4 · Bizarre Spectacle', 'Milestone 4.770 → 11.800', [['7.080', 'F2P'], ['7.560', 'Top up kecil'], ['8.040', 'Top up sedang'], ['9.080', 'Top up sedang sampai besar'], ['10.200', 'Top up besar']]],
  ['Season 5 · Frostfire Anthem', 'Milestone 12.040 → 24.520', [['15.480', 'F2P dan top up kecil'], ['16.280', 'Top up sedang mulai dari sini'], ['17.080', 'Top up sedang'], ['17.960', 'Top up sedang, class lebih lemah'], ['18.840', 'Top up sedang sampai besar'], ['19.800', 'Top up besar mulai dari sini'], ['20.760', 'Top up besar'], ['22.840', 'Top server']]],
];

const SCORE = [
  ['Season 1', '100', '38', '13', '14', '57', '100', '10'],
  ['Season 2', '100', '18', '7', '8', '33', '27', '45'],
  ['Season 3', '100', '14', '5', '6', '26', '13', '65'],
  ['Season 4', '100', '17', '5', '11', '28', '7', '120'],
  ['Season 5', '100', '18', '6', '12', '30', '4', '150'],
  ['Season 6', '100', '13', '4', '5', '18', '3', '200'],
];

const SHOPS = [
  ['Verdantglade', 'S1', 'Abundance Leaf', '128.800'],
  ['Cinder Ridge', 'S1', 'Alloy Gear', '137.800'],
  ['Aqualis', 'S1', 'Shimmer Scale', '110.200'],
  ['Loong Haven', 'S2', 'Blade Coin', '110.800'],
  ['Aethyris', 'S3', 'Aethyrine Crest', '116.800'],
  ['Harpadia', 'S4', 'Points', '112.800'],
  ['Ignis', 'S5', 'Frostflame Coin', '112.800'],
  ['Aeperis', 'S6', 'Belum ada nama Inggris', '46.800 (data belum lengkap)'],
];

export default function Page() {
  return (
    <>
      <p>Setiap season berlangsung sekitar 3 bulan. Saat season berakhir, <strong>Season Level di-reset</strong>, tapi sebagian besar usahamu tetap tersimpan, dan yang paling penting dikonversi menjadi <strong>Primostar</strong>, poin untuk membuka bonus stat <strong>permanen</strong> di Astral Pact.</p>
      <p>Panduan ini menjelaskan asal Primostar, apa yang diberikan Astral Pact, berapa target yang pantas, apa yang dibeli di Kingdom Shop, dan apa yang perlu dilakukan sebelum dan sesudah season berakhir.</p>
      <p><Img src="guides/season-upgrade.webp" alt="sword x staff astral pact" /></p>

      <hr />

      <h2 id="keep-reset">Apa yang tersimpan dan apa yang hilang</h2>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Tersimpan</th><th>Di-reset atau hilang</th></tr></thead>
          <tbody>
            <tr><td>Relic, Fantomon, skill, companion beserta bintangnya</td><td>Season Level: level turun ke cap season, relic ke batas bawah (+22 di Season 5, +25 di Season 6). Kelebihannya dikonversi menjadi Primostar.</td></tr>
            <tr><td>Primostar dan semua stat Astral Pact</td><td>Quest Season Trial dan badge season yang belum selesai</td></tr>
            <tr><td>Bonus Gear Rating, dihitung dari gear yang <strong>sedang dipakai</strong> saat season berakhir</td><td>Battle Pass season itu</td></tr>
            <tr><td>Substat gear yang kamu bayar dengan Divinecraft Stone untuk dibawa</td><td>Rekor dungeon dan Fantasia Ascent</td></tr>
            <tr><td>Energy Grand Treasure Hunt</td><td>EXP dan Stamina yang masih menunggu di Reward Retrieval</td></tr>
            <tr><td>EXP di Ranjang (kelebihan dari batas dikonversi menjadi Primostar)</td><td>Jual beli shard gear season lama di Trading House</td></tr>
            <tr><td></td><td>Poin Guild Clash (guild pindah ke League baru), gem season lama (sebaiknya didaur ulang jadi <Tip>Rolla</Tip>)</td></tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="primostar">Dari mana Primostar berasal</h2>
      <p>Saat season berakhir, game menjumlahkan semua progres yang <strong>melewati cap</strong> di season itu (Season Level) menjadi skor progres, membaginya dengan sebuah faktor lalu dibulatkan ke bawah, kemudian ditambah jumlah tetap:</p>
      <ul>
        <li>Setiap tambahan <strong>Season Character Level</strong></li>
        <li>Setiap level <strong>enhance gear</strong> season (dijumlah dari 5 gear)</li>
        <li>Setiap level <strong>skill</strong> season (dijumlah dari 8 slot skill)</li>
        <li>Setiap level <strong>Fantomon</strong> season</li>
        <li>Setiap level <strong>relic</strong> season</li>
      </ul>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Season</th><th className="num">Karakter</th><th className="num">Gear</th><th className="num">Skill</th><th className="num">Fantomon</th><th className="num">Relic</th><th className="num">Skor / 1 Primostar</th><th className="num">Tetap</th></tr></thead>
          <tbody>{SCORE.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} className={i ? 'num' : ''}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <p className="muted">Kolom Karakter sampai Relic adalah poin yang didapat untuk setiap level tambahan.</p>
      <p>Dua hal yang bisa disimpulkan dari tabel:</p>
      <ul>
        <li><strong>Relic memberi poin paling banyak</strong> per level di semua season, disusul gear. Skill memberi paling sedikit.</li>
        <li>Faktor konversi turun drastis tiap season (100 → 3), jadi season berikutnya memberi Primostar jauh lebih banyak. Itu juga alasan milestone Astral Pact naik sangat cepat.</li>
      </ul>
      <p>Season Level hanya bisa dibeli di tingkat tertinggi season (mis. Ethereal III di Season 6), dan terbuka bertahap mengikuti Season Character Level kamu.</p>

      <hr />

      <h2 id="astral-pact">Astral Pact</h2>
      <p>Primostar adalah <strong>total akumulasi dari semua season</strong>. Setiap kali total mencapai milestone, kamu membuka satu bonus stat permanen. Milestone berulang dalam siklus 8:</p>
      <table className="data-table">
        <thead><tr><th>Urutan dalam siklus</th><th>Stat</th><th className="num">Per milestone</th></tr></thead>
        <tbody>{PACT.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td className="num">{r[2]}</td></tr>)}</tbody>
      </table>
      <p>Di Season 5 ada beberapa milestone tambahan <strong>+5% output</strong> untuk Gold Mine, Ironstone Mine, Sandstone Mine, dan Monster Cave, menggantikan posisi Gem Drop.</p>
      <p>Maksimal saat ini: <strong>+50% 2× Rating Reward Rate</strong> dan <strong>+75% Gear Drop Ascension Rate</strong> untuk semua dungeon. Lihat panduan Daily Dungeon untuk tahu mana yang lebih penting.</p>

      <h3 id="goals">Berapa target Primostar yang pantas?</h3>
      <p>Target yang biasa diincar pemain lama di akhir setiap season, dibagi per tingkat top up (total akumulasi):</p>
      <Tabs>
        {GOALS.map(([name, range, rows]) => (
          <Tab label={name.split(' · ')[0]} key={name}>
            <p><strong>{name}</strong> <span className="muted">({range})</span></p>
            <table className="data-table">
              <thead><tr><th className="num">Total Primostar</th><th>Cocok untuk</th></tr></thead>
              <tbody>{rows.map(([n, who]) => <tr key={n}><td className="num">{n}</td><td>{who}</td></tr>)}</tbody>
            </table>
          </Tab>
        ))}
      </Tabs>
      <Alert title="Apa maksud “berhenti di sini”?">
        <p>Lewat dari milestone itu, setiap Primostar tambahan butuh resource sangat banyak tapi hanya memberi sekitar 1% stat. Kalau kamu top up kecil atau sedang, berhenti tepat di milestone lalu alihkan resource ke hal yang tersimpan (relic, Fantomon) lebih efisien.</p>
      </Alert>

      <hr />

      <h2 id="kingdom-shop">Kingdom Shop</h2>
      <p>Setiap kingdom punya shop sendiri, dibayar dengan mata uang kingdom itu. Shop punya <strong>4 tingkat</strong>: tingkat 1 terbuka saat tiba di kingdom, tingkat 2, 3, 4 terbuka setelah kamu <strong>menghabiskan total 3.500, 8.000, dan 13.000</strong> mata uang shop itu. Stok dihitung per akun dan <strong>tidak refresh sendiri</strong>.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Kingdom</th><th>Season</th><th>Mata uang</th><th className="num">Borong semua stok terbatas</th></tr></thead>
          <tbody>{SHOPS.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="num">{r[3]}</td></tr>)}</tbody>
        </table>
      </div>
      <h3 id="shop-priority">Apa yang dibeli lebih dulu</h3>
      <ol>
        <li><strong>Slot diskon 90% dan 70%</strong>: <Tip>Stellatie</Tip>, <Tip>Refined Ore</Tip>, Covenite, <Tip>Mythic Auroral Badge</Tip>. Slot diskon 90% hanya 10% dari harga item yang sama di slot sebelahnya, paling murah di shop.</li>
        <li><strong>Covenite</strong> (tingkat 3 dan 4): Goddess Prayer memberi skill untuk <strong>class kamu saat ini</strong>, lebih berharga dari Stellatie.</li>
        <li><strong>Auroral Badge</strong> semua jenis (semuanya diskon) untuk gacha relic.</li>
        <li><Tip>Lucky Ticket</Tip> dan <Tip>Gateway Key</Tip>: hanya 1 per tingkat.</li>
        <li>Kunci peta kingdom (Withering Potion, Magic Drill…) kalau masih ada rintangan yang belum dihancurkan.</li>
        <li>Visage (kosmetik) sesuai selera.</li>
        <li><strong>Hadiah companion tanpa batas</strong>: tempat menghabiskan sisa mata uang setelah stok terbatas habis.</li>
      </ol>
      <p>Membeli item diskon lebih dulu juga mempercepat terbukanya tingkat shop, karena jumlah yang <em>benar-benar kamu bayar</em> dihitung sebagai progres tingkat.</p>

      <h3 id="season-shop">Season Shop</h3>
      <p>Season Shop memakai <strong>Fatum Sigil</strong> dan <strong>hanya menjual kosmetik</strong> (Skill Chroma, Visage senjata, tampilan patung Dewi…). Tidak memengaruhi power, jadi beli saja yang kamu suka. Gameplay Rating SSS di akhir season memberi 1.200 Fatum Sigil.</p>

      <hr />

      <h2 id="timeline">Jadwal satu season</h2>
      <table className="data-table">
        <thead><tr><th>Hari</th><th>Kejadian</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Kingdom baru dan raid pertama dibuka. Cap level lebih tinggi dan tier class baru.</td></tr>
          <tr><td>14</td><td>Raid kedua. <strong>Season Level mulai dihitung.</strong></td></tr>
          <tr><td>15</td><td>Peta season baru dibuka.</td></tr>
          <tr><td>28, 42, 56, 70</td><td>Raid ketiga sampai keenam.</td></tr>
          <tr><td>31</td><td>Gacha relic kedua.</td></tr>
          <tr><td>61</td><td>Gacha relic ketiga.</td></tr>
          <tr><td>84</td><td>Raid akhir season, dengan tingkat Abyss.</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="season-end">Checklist akhir season</h2>
      <h3 id="last-2-weeks">2 minggu terakhir</h3>
      <ul>
        <li><strong>Pilih target Primostar</strong> dari tabel di atas dan rencanakan untuk mencapainya. Astral Pact adalah satu-satunya bagian season yang kamu simpan selamanya.</li>
        <li><strong>Berhenti memakai, mulai menabung</strong> alat Material Realm, Speed-Up, dan Temporal Crystal. Di season berikutnya semuanya lebih berharga (patung Dewi baru, rank lebih tinggi).</li>
        <li>Stamina hanya pulih sendiri sampai <strong>300</strong> (dari hadiah bisa menyimpan hingga 1.200). Biarkan penuh 300 sebelum season berakhir, tapi pakai bagian yang hampir meluap.</li>
        <li><strong>Dorong Gameplay Rating</strong>: rating dungeon harian terbaik, lantai Fantasia Ascent, rank Arena, Nexus, dan eksplorasi peta semuanya dihitung. SSS butuh <strong>27.200</strong> poin, hadiahnya 80 Stellatie, 800 Rare Auroral Badge, 80 Bond Trinket, dan 1.200 Fatum Sigil.</li>
        <li>Jelajahi <strong>100% peta season</strong>: hingga 3.000 poin Gameplay, ditambah bonus yang berkurang setiap hari terlambat.</li>
        <li>F2P: pakai <Tip>Dawnium</Tip> untuk <strong>run dungeon dulu, lalu donasi Guild</strong>, sisanya disimpan untuk season baru.</li>
        <li>Yang top up: belanjakan untuk hal yang <strong>terbawa ke season berikutnya</strong> (relic, lalu Fantomon, lalu skill). Paket Season Level yang dibeli di akhir season paling tidak bernilai.</li>
        <li><strong>Jangan beli Battle Pass atau Monthly Pass</strong> di hari-hari terakhir: hanya membeli di awal season yang memberi nilai penuh.</li>
        <li>Selesaikan <strong>Season Trial</strong> dan badge season.</li>
        <li>Pilih gear Mythic ke atas yang substat-nya ingin dipertahankan dan simpan <strong>Divinecraft Stone</strong>: 300 untuk 1 line, 1.200 untuk 2 line, 3.200 untuk 3 line, 8.000 untuk 4 line.</li>
      </ul>
      <h3 id="last-3-days">3 hari terakhir</h3>
      <ul>
        <li><strong>Pakai gear season terbaik dan jangan dilepas</strong>. Gear Rating (D sampai SSS) dihitung dari gear yang dipakai saat season berakhir, memberi hingga <strong>+5% HP, ATK, DEF, SPD</strong> dan <strong>+2% DMG RES, DMG Boost</strong>.</li>
        <li><strong>Jual shard gear</strong> di Trading House: setelah season berakhir tidak bisa dipasang untuk dijual lagi.</li>
        <li>Klaim semua <strong>Reward Retrieval</strong> (Akane) dan semua level Battle Pass yang sudah dicapai.</li>
        <li>Relic atau Fantomon yang hampir naik bintang, selesaikan: bintang tetap tersimpan.</li>
        <li>Habiskan semua mata uang event dari event yang berakhir bersamaan dengan season.</li>
      </ul>
      <h3 id="last-36h">36 jam terakhir</h3>
      <ul>
        <li><strong>Berhenti mengklaim EXP dari Ranjang</strong> dan matikan Quick Claim. Di season baru, setelah menyalakan patung baru, EXP ini lebih berharga. Kelebihan dari batas tidak hilang, melainkan dikonversi menjadi Primostar.</li>
        <li><strong>Sehari sebelumnya</strong>, berhenti mengklaim hadiah dungeon dan simpan <strong>4 kesempatan</strong> (maksimal). Reset harian menambah 2, jadi kamu masuk season baru dengan <strong>6 kesempatan</strong>.</li>
        <li>Simpan semua Speed-Up dan Temporal Crystal. Energy Grand Treasure Hunt terbawa, tidak perlu dihabiskan.</li>
      </ul>
      <h3 id="launch-day">Hari pertama season baru (lakukan berurutan)</h3>
      <ol>
        <li>Klaim <strong>hadiah season</strong>: Primostar, hadiah peringkat, Arena, Guild Clash.</li>
        <li><strong>Habiskan semua Primostar</strong> di Astral Pact.</li>
        <li>Nyalakan patung baru, klaim EXP Ranjang, dorong level setinggi mungkin <strong>sebelum</strong> memakai Speed-Up.</li>
        <li>Baru sekarang beli Monthly Pass dan Battle Pass baru.</li>
        <li>Tarik gacha relic hari itu juga.</li>
        <li>Pakai Speed-Up hanya untuk mencapai milestone pembuka (tier class baru, Fantomon Adult).</li>
        <li><strong>Daur ulang gem season lama</strong> menjadi Rolla dan pindahkan substat yang disimpan ke gear baru.</li>
        <li>Pakai 6 kesempatan dungeon yang sudah ditabung.</li>
        <li>Simpan sebagian Auroral Badge: gacha relic kedua dibuka sekitar hari ke-31, yang ketiga sekitar hari ke-61.</li>
      </ol>

      <p className="source">Data Primostar, Astral Pact, Kingdom Shop, dan checklist akhir season dikumpulkan dari Purrwikimania dan Sword x Staff Compass.</p>
    </>
  );
}
