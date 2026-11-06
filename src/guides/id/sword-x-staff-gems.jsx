import { Alert, Tip } from '../../components/guide';

const Y = () => <td style={{ textAlign: 'center', color: 'var(--green)' }}>✓</td>;
const N = () => <td style={{ textAlign: 'center' }} className="muted">–</td>;
const row = (slots) => ['Main', 'Helmet', 'Armor', 'Boots', 'Off-Hand'].map((s) => (slots.includes(s) ? <Y key={s} /> : <N key={s} />));

export default function Page() {
  return (
    <>
      <p>Gem dipasang ke gear untuk menambah stat. Ada <strong>8 jenis gem</strong>, masing-masing punya <strong>15 tingkat (T1 sampai T15)</strong>. Makin tinggi tingkatnya makin besar stat-nya, dan stat sebenarnya di tiap tingkat juga naik mengikuti level kamu.</p>
      <p>Panduan ini merangkum fungsi tiap gem, slot yang bisa dipasang, cara menggabung ke tingkat tinggi dengan hemat, dan gem mana yang cocok untuk tiap class.</p>

      <hr />

      <h2 id="types">8 jenis gem</h2>
      <table className="data-table">
        <thead><tr><th>Gem</th><th>Stat</th><th>Cocok untuk</th></tr></thead>
        <tbody>
          <tr><td><Tip>T10 Obsidian</Tip></td><td>ATK + DMG Boost</td><td>Semua class, gem damage terbaik</td></tr>
          <tr><td><Tip>T10 Amethyst</Tip></td><td>SPD + Crit Rate</td><td>Duelist, Sorcerer, build crit</td></tr>
          <tr><td><Tip>T10 Ruby</Tip></td><td>ATK</td><td>Pengisi slot untuk DPS</td></tr>
          <tr><td><Tip>T10 Citrine</Tip></td><td>SPD</td><td>Pengisi slot, semua class butuh SPD</td></tr>
          <tr><td><Tip>T10 Moonstone</Tip></td><td>DEF + DMG RES</td><td>Semua class, gem bertahan terbaik</td></tr>
          <tr><td><Tip>T10 Sapphire</Tip></td><td>DEF</td><td>Knight tank</td></tr>
          <tr><td><Tip>T10 Beryl</Tip></td><td>HP</td><td>Knight tank, Sage healer</td></tr>
          <tr><td><Tip>T10 Amber</Tip></td><td>HP + Healing Boost</td><td>Sage healer</td></tr>
        </tbody>
      </table>
      <Alert type="blue" title="Gem 2 stat selalu diprioritaskan">
        <p>Obsidian, Amethyst, Moonstone, dan Amber memberi <strong>2 stat sekaligus</strong>, jadi di tingkat yang sama hampir selalu lebih baik dari gem 1 stat. Gem 1 stat (Ruby, Citrine, Sapphire, Beryl) terutama dipakai untuk mengisi slot yang tidak bisa dipasangi gem 2 stat.</p>
      </Alert>

      <hr />

      <h2 id="slots">Gem mana bisa dipasang di slot mana</h2>
      <p>Tiap jenis gem hanya bisa dipasang di slot gear tertentu. Khusus <strong>Off-Hand menerima semua jenis gem</strong>.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Gem</th><th>Main</th><th>Helmet</th><th>Armor</th><th>Boots</th><th>Off-Hand</th></tr></thead>
          <tbody>
            <tr><td>Obsidian</td>{row(['Main', 'Off-Hand'])}</tr>
            <tr><td>Amethyst</td>{row(['Main', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Ruby</td>{row(['Main', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Citrine</td>{row(['Armor', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Moonstone</td>{row(['Helmet', 'Off-Hand'])}</tr>
            <tr><td>Sapphire</td>{row(['Armor', 'Helmet', 'Off-Hand'])}</tr>
            <tr><td>Beryl</td>{row(['Armor', 'Helmet', 'Off-Hand'])}</tr>
            <tr><td>Amber</td>{row(['Armor', 'Boots', 'Off-Hand'])}</tr>
          </tbody>
        </table>
      </div>
      <p>Dari tabel di atas bisa disimpulkan:</p>
      <ul>
        <li><strong>Obsidian hanya bisa di Main dan Off-Hand</strong>, dan <strong>Moonstone hanya bisa di Helmet dan Off-Hand</strong>. Jangan sia-siakan slot Off-Hand untuk gem 1 stat selama kamu masih kekurangan dua jenis ini.</li>
        <li><strong>Armor</strong> tidak menerima gem serangan apa pun: DPS biasanya memasang Citrine (SPD) di sini.</li>
        <li><strong>Boots</strong> adalah tempat terbaik untuk Amethyst kalau Obsidian sudah dipasang di Main.</li>
      </ul>

      <h3 id="layout">Saran pemasangan per peran</h3>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Slot</th><th>DPS (Duelist, Sorcerer)</th><th>Tank (Knight)</th><th>Healer (Sage)</th></tr></thead>
          <tbody>
            <tr><td>Main</td><td>Obsidian</td><td>Obsidian</td><td>Obsidian</td></tr>
            <tr><td>Helmet</td><td>Moonstone</td><td>Moonstone</td><td>Moonstone</td></tr>
            <tr><td>Armor</td><td>Citrine</td><td>Sapphire atau Beryl</td><td>Amber</td></tr>
            <tr><td>Boots</td><td>Amethyst</td><td>Citrine</td><td>Amber atau Citrine</td></tr>
            <tr><td>Off-Hand</td><td>Obsidian atau Amethyst</td><td>Moonstone</td><td>Amber</td></tr>
          </tbody>
        </table>
      </div>
      <p>Knight gaya glass cannon pasang seperti DPS (Ruby, Amethyst). Sage gaya Summoner atau Erosion memakai Obsidian dan Ruby sebagai pengganti Amber. Detail lebih lanjut ada di panduan tiap class.</p>

      <hr />

      <h2 id="merge">Menggabung gem ke tingkat tinggi</h2>
      <p>Bagian ini sering salah. Gem <strong>tidak digabung dari satu tingkat ke tingkat berikutnya</strong> terus-menerus dari T1 sampai T15. Melainkan:</p>
      <ul>
        <li><strong>T7, T8, T9, dan T10 semuanya digabung langsung dari T5.</strong></li>
        <li><strong>T12, T13, T14, dan T15 semuanya digabung langsung dari T10.</strong></li>
        <li>Penggabungan punya peluang: setiap gem yang dimasukkan menambah persentase sukses. Masukkan cukup banyak maka pasti berhasil.</li>
      </ul>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Hasil</th><th>Bahan</th><th className="num">Peluang per gem</th><th className="num">Minimum</th><th className="num">Pasti berhasil dengan</th></tr></thead>
          <tbody>
            <tr><td>T2</td><td>T1</td><td className="num">100%</td><td className="num">2</td><td className="num">2</td></tr>
            <tr><td>T3</td><td>T2</td><td className="num">100%</td><td className="num">2</td><td className="num">2</td></tr>
            <tr><td>T4</td><td>T3</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T5</td><td>T4</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T6</td><td>T5</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T7</td><td><strong>T5</strong></td><td className="num">36%</td><td className="num">2</td><td className="num">3</td></tr>
            <tr><td>T8</td><td><strong>T5</strong></td><td className="num">18%</td><td className="num">5</td><td className="num">6</td></tr>
            <tr><td>T9</td><td><strong>T5</strong></td><td className="num">8%</td><td className="num">11</td><td className="num">13</td></tr>
            <tr><td>T10</td><td><strong>T5</strong></td><td className="num">4%</td><td className="num">23</td><td className="num">25</td></tr>
            <tr><td>T11</td><td>T10</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T12</td><td><strong>T10</strong></td><td className="num">36%</td><td className="num">2</td><td className="num">3</td></tr>
            <tr><td>T13</td><td><strong>T10</strong></td><td className="num">32%</td><td className="num">3</td><td className="num">4</td></tr>
            <tr><td>T14</td><td><strong>T10</strong></td><td className="num">24%</td><td className="num">5</td><td className="num">5</td></tr>
            <tr><td>T15</td><td><strong>T10</strong></td><td className="num">15%</td><td className="num">8</td><td className="num">8</td></tr>
          </tbody>
        </table>
      </div>
      <p className="muted">“Minimum” adalah jumlah gem paling sedikit yang diizinkan game. “Pasti berhasil dengan” adalah jumlah gem agar total peluang mencapai 100%. Tabel hanya menghitung gem yang terpakai; biaya lain (jika ada) tampil di layar penggabungan dalam game.</p>

      <Alert type="red" title="Jangan gabung T5 jadi T6 kalau sedang mengincar T10">
        <p>T6 tidak bisa digabung lagi (T7 dibuat dari T5, bukan T6). Setiap T5 yang kamu ubah jadi T6 berarti berkurang satu untuk T10. Begitu juga, <strong>T11 adalah jalan buntu</strong> kalau kamu sedang mengumpulkan T10 untuk naik ke T12 ke atas.</p>
      </Alert>

      <h3 id="merge-cost">Konversi biaya</h3>
      <ul>
        <li>1 T5 = 4 T1.</li>
        <li>1 T10 pasti = 25 T5 = <strong>100 T1</strong>.</li>
        <li>1 T15 pasti = 8 T10 = 200 T5 = <strong>800 T1</strong>.</li>
      </ul>
      <p>Artinya mulai T10 ke atas, setiap tingkat jauh lebih mahal. Untuk kebanyakan pemain, target yang masuk akal adalah <strong>T10 di semua slot dulu</strong>, baru tuangkan T10 sisa ke T12 sampai T15 untuk gem terpenting (biasanya Obsidian di Main).</p>

      <h3 id="gamble">Perlukah menggabung dengan jumlah minimum?</h3>
      <p>Contoh T7: memasukkan 2 T5 memberi peluang sukses 72%, memasukkan 3 pasti berhasil. Kalau gagal berarti semua gem yang dimasukkan hilang, rata-rata memasukkan 2 masih sedikit lebih hemat T5 (sekitar 2,8 per keberhasilan dibanding 3). T8, T9, T12, T13 juga mirip.</p>
      <p>Namun selisihnya sangat kecil sementara risiko kehilangan semuanya besar. Saran saya: <strong>T7 sampai T9 boleh gambling</strong> kalau T5 kamu banyak, tapi <strong>dari T10 ke atas selalu masukkan cukup agar pasti berhasil</strong>. Khusus T10 dengan jumlah minimum (23 gem, 92%) rata-ratanya pun tidak lebih murah dari memasukkan 25, jadi tidak ada alasan untuk gambling.</p>

      <hr />

      <h2 id="sources">Dapat gem dari mana</h2>
      <ul>
        <li><strong>Tambang gem di peta dunia</strong> tiap kingdom. Ingat untuk menambang secara rutin saat menjelajah peta.</li>
        <li><strong>Astral Pact</strong>: setiap siklus 8 milestone ada satu milestone <strong>+5% Gem Drop</strong>. Lihat juga panduan Season, Primostar &amp; Astral Pact.</li>
        <li>Hadiah event dan paket top up.</li>
      </ul>
      <Alert title="Gem saat season baru">
        <p>Saat masuk season baru, gem season lama sebaiknya <strong>didaur ulang menjadi <Tip>Rolla</Tip></strong> lalu diganti gem season baru. Jadi di akhir season jangan menuangkan terlalu banyak resource untuk menggabung gem tingkat tinggi.</p>
      </Alert>

      <p className="source">Data gem dan peluang penggabungan diambil dari file game, dikumpulkan lewat Sword x Staff Compass.</p>
    </>
  );
}
