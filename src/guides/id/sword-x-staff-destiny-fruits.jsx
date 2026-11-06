import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p><Tip>Destiny Fruit</Tip> adalah item penting untuk mendapatkan resource acak dan melengkapi set relic demi tambahan stat.</p>
      <p>Buah ini bisa dipakai di mana saja di otherworld (peta eksplorasi). Setiap buah memberi satu resource atau satu encounter acak.</p>
      <p><strong>Encounter ini bisa menaikkan power dengan sangat besar</strong>, karena <Tip>Mysterious Merchant</Tip> bisa menjual Fantomon, skill, dan material bagus dengan bayaran <Tip>Dawnium</Tip>.</p>
      <p><Img src="guides/destiny-exploration.webp" alt="sword x staff destiny exploration" /></p>

      <hr />

      <h2 id="where-to-get-them">Dapat dari mana?</h2>
      <p>Event, quest, pohon di base… Mengumpulkan <Tip>Destiny Fruit</Tip> cukup mudah, bahkan untuk pemain F2P.</p>
      <p>Untuk yang top up, tentu saja shop adalah temanmu. Di awal game belum banyak paket berisi buah, tapi nanti ada event khusus yang memungkinkan kamu membeli lebih banyak.</p>

      <hr />

      <h2 id="when-to-use-them">Kapan sebaiknya dipakai</h2>
      <p>Menurut saya ada dua cara memakai <Tip>Destiny Fruit</Tip>:</p>
      <ol>
        <li><strong>Langsung pakai begitu dapat</strong>. Fokus utama melengkapi set relic Rare dan Epic</li>
        <li><strong>Pakai seperlunya untuk quest, sisanya disimpan</strong>. Sebentar lagi ada event musim panas yang meminta kamu memakai 200 <Tip>Destiny Fruit</Tip></li>
      </ol>
      <p>Cara kedua cocok untuk F2P maupun yang top up sedikit, karena membeli buah sebanyak itu sangat mahal.</p>

      <hr />

      <h2 id="finding-relic-set-locations">Mencari lokasi drop set relic</h2>
      <p>Seperti disebut di atas, <Tip>Destiny Fruit</Tip> punya peluang memberi relic dari semua kelangkaan, jadi orang biasanya memakainya untuk melengkapi set Rare dan Epic.</p>
      <Alert type="blue" title="Tiap wilayah peta men-drop relic yang berbeda">
        <p>Cukup buka koleksi lalu ketuk relic yang masih kurang, <strong>game akan menunjukkan ke mana kamu harus pergi</strong>.</p>
      </Alert>
      <p><Img src="guides/relic-source.webp" alt="sword x staff relic sources" /></p>

      <hr />

      <h2 id="why-save-200">Kenapa simpan 200?</h2>
      <p><strong>Karena event!</strong> Banyak event berulang punya quest yang meminta kamu memakai <Tip>Destiny Fruit</Tip>.</p>
      <p>Event ini berganti tiap season, tapi biasanya kamu butuh total 200 atau 300 untuk menyelesaikan semua quest berulang tersebut.</p>
      <p><Img src="guides/destiny-event-saving.webp" alt="sword x staff destiny event saving up resources" /></p>
    </>
  );
}
