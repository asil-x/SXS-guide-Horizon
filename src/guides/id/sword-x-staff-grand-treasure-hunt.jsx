import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Grand Treasure Hunt adalah <strong>event yang berulang setiap minggu</strong>, di mana kamu memakai <Tip>Auroradrasil Energy</Tip> untuk membuka milestone hadiah.</p>
      <p>Mekanisme terpentingnya: <strong>energy terbawa ke event berikutnya</strong>, jadi kamu tidak perlu menghabiskannya setiap minggu.</p>

      <hr />

      <h2 id="how-it-works">Cara kerjanya</h2>
      <p><Img src="guides/grand-treasure.webp" alt="sword x staff grand treasure event" /></p>
      <p>Setiap minggu kamu mendapat sekitar 2,250 <Tip>Auroradrasil Energy</Tip>: 2,240 dari quest dan 10 dari paket gratis di shop.</p>
      <p>Untuk mencapai milestone hadiah terakhir butuh 2,040 <Tip>Auroradrasil Energy</Tip>. Setelah itu, Level 5 punya item tambahan untuk dibeli, memakan hingga 1,200 <Tip>Auroradrasil Energy</Tip> lagi tergantung berapa banyak yang ingin kamu beli.</p>
      <Alert title="Energy terbawa ke minggu berikutnya">
        <p><strong>Kamu tidak wajib memakai energy setiap minggu</strong>.</p>
        <p>Menabung beberapa minggu membuat kamu cukup untuk membeli item Level 5 yang lebih mahal, atau menunggu rotasi hadiah yang lebih bagus.</p>
      </Alert>
      <p>Level 5 punya <strong>satu item rotasi yang berganti setiap minggu</strong>, dan biasanya di situlah hadiah terbaik berada, termasuk draw berbayar dan relic yang mempermudah farming.</p>

      <hr />

      <h2 id="saving-strategy">Strategi menabung</h2>
      <p>Pemain F2P dan yang top up sedikit <strong>tidak bisa mencapai milestone terakhir setiap minggu</strong>.</p>
      <Alert type="red" title="Rencanakan sesuai rotasi">
        <p><strong>SELALU cek item Level 5 minggu ini sebelum memutuskan untuk memakai energy.</strong></p>
      </Alert>
      <table className="data-table">
        <tbody>
          <tr><td>Setiap 2 minggu</td><td>4,500</td><td>Dua item Level 5</td></tr>
          <tr><td>Setiap 3 minggu</td><td>6,750</td><td>Semua item Level 5</td></tr>
          <tr><td>Fleksibel</td><td>Simpan cadangan 2,400</td><td>Item paling kiri saat perlu</td></tr>
        </tbody>
      </table>
      <p>Cara fleksibel artinya kamu boleh membeli selama masih punya cadangan 2,400, dan hanya membeli item paling kiri di Level 5 saat dibutuhkan atau saat item itu benar-benar bagus.</p>

      <hr />

      <h2 id="what-to-buy">Apa yang sebaiknya dibeli</h2>
      <Tabs>
        <Tab label="Level 1">
          <p><Img src="guides/grand-treasure-rewards-1.webp" alt="sword x staff level 1 grand treasure rewards" /></p>
          <p>Di awal game semua hadiah menaikkan power, tapi secara pribadi saya fokus ke <Tip>Basic Treats</Tip> karena lebih sulit didapat.</p>
        </Tab>
        <Tab label="Level 2">
          <p><Img src="guides/grand-treasure-rewards-2.webp" alt="sword x staff level 2 grand treasure rewards" /></p>
          <p>Prioritaskan hadiah untuk companion. Ada banyak sekali companion yang perlu di-upgrade dan hadiahnya tidak pernah cukup.</p>
        </Tab>
        <Tab label="Level 3">
          <p><Img src="guides/grand-treasure-rewards-3.webp" alt="sword x staff level 3 grand treasure rewards" /></p>
          <p>Di tahap ini pilih apa saja tidak masalah, semua item membuat akunmu lebih kuat.</p>
          <p>Saya akan mengambil <Tip>Destiny Fruit</Tip> karena ada peluang bertemu boss, merchant, dan hadiah bagus.</p>
        </Tab>
        <Tab label="Level 4">
          <p><Img src="guides/grand-treasure-rewards-4.webp" alt="sword x staff level 4 grand treasure rewards" /></p>
          <p><strong>JANGAN</strong> beli <Tip>Stellatie</Tip> atau <Tip>Bond Trinket</Tip>, pemain F2P tetap bisa mendapatkannya.</p>
          <p>Sedangkan <Tip>Legendary Auroral Badge</Tip> biasanya hanya bisa didapat lewat top up, jadi belilah.</p>
        </Tab>
        <Tab label="Level 5">
          <p><Img src="guides/grand-treasure-rewards-5.webp" alt="sword x staff level 5 grand treasure rewards" /></p>
          <p>Semua di milestone ini bagus. Selalu cek apakah kamu memang butuh hadiah itu sebelum memakai energy.</p>
          <p><strong>Saya 100% menyarankan mengambil Lucky Statue agar grinding harian lebih ringan.</strong></p>
        </Tab>
      </Tabs>
    </>
  );
}
