import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Wheel of Destiny adalah cara bagus untuk mendapat resource tambahan dan membuka area terkunci di peta, karena ini salah satu dari sedikit cara mendapatkan <Tip>Gateway Key</Tip>.</p>
      <p>Kamu bisa memakai <Tip>Lucky Ticket</Tip> untuk memutar item di roda yang tersebar di seluruh peta.</p>
      <Alert type="red" title="Fokus saja ke kuncinya">
        <p>Kalau bingung mau ambil apa, langsung pindah ke roda berikutnya setelah mendapat <Tip>Gateway Key</Tip>, <strong>karena itulah item utama yang selalu dicari</strong>.</p>
      </Alert>
      <p>Kalau ingin tahu apa yang sebaiknya diambil di tiap area, berikut urutan prioritas per peta.</p>
      <p><strong>Daftar ini mengasumsikan kamu sudah punya kuncinya dan masih punya sedikit <Tip>Lucky Ticket</Tip> lebih.</strong></p>

      <hr />

      <h2 id="verdantglade">Verdantglade</h2>
      <Tabs>
        <Tab label="Damp Cliff">
          <ol>
            <li><Tip>Auroral Elemental Badge</Tip> sangat worth kalau bisa didapat</li>
            <li><Tip>Mythic Auroral Badge</Tip></li>
          </ol>
          <p>Saya tidak akan memutar untuk yang lain, karena mengincar badge ungu/legendary terlalu bergantung pada hoki.</p>
          <p><Img src="guides/damp-cliff.webp" alt="sword x staff wheel of destiny damp-cliff" /></p>
        </Tab>
        <Tab label="Jungle Camp">
          <ol>
            <li><Tip>Skill Shard Voucher</Tip>. Itu saja, dapat ketiganya sudah luar biasa</li>
          </ol>
          <p><Img src="guides/jungle-camp.webp" alt="sword x staff wheel of destiny jungle-camp" /></p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="cinder-ridge">Cinder Ridge</h2>
      <Tabs>
        <Tab label="Mount Chestnut">
          <p><strong>Semua resource Fantomon pasti terpakai</strong> di game, karena ada banyak pet yang perlu dinaikkan levelnya (masing-masing punya 7 halaman Aptitude).</p>
          <p>Menurut saya ini roda yang bagus untuk dituangi resource di awal game, karena pasti menaikkan power.</p>
          <p><Img src="guides/mount-chestnut.webp" alt="sword x staff wheel of destiny mount-chestnut" /></p>
        </Tab>
        <Tab label="Stormcliff">
          <ol>
            <li><Tip>Skill Shard Voucher</Tip>. Itu saja, dapat ketiganya sudah luar biasa</li>
          </ol>
          <p><Img src="guides/stormcliff.webp" alt="sword x staff wheel of destiny stormcliff" /></p>
        </Tab>
        <Tab label="Boulder Settlement">
          <p>Faktor hoki untuk mendapat banyak <Tip>Dawnium</Tip> di sini terlalu besar.</p>
          <p><strong>KALAU KAMU SUDAH MENGAMBIL SEMUA YANG BAGUS DI TEMPAT LAIN</strong>, ini cara yang lumayan untuk menambah <Tip>Dawnium</Tip>, tapi secara pribadi saya lewati, kecuali kamu mau mencoba peruntungan di hadiah 2.88k.</p>
          <p><Img src="guides/boulder-settlement.webp" alt="sword x staff wheel of destiny boulder-settlement" /></p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="aqualis">Aqualis</h2>
      <Tabs>
        <Tab label="Coral Settlement">
          <ol>
            <li><Tip>Auroral Elemental Badge</Tip> sangat worth kalau bisa didapat</li>
            <li><Tip>Mythic Auroral Badge</Tip></li>
          </ol>
          <p>Saya tidak akan memutar untuk yang lain, karena mengincar badge ungu/legendary terlalu bergantung pada hoki.</p>
          <p><Img src="guides/coral-settlement.webp" alt="sword x staff wheel of destiny mount-chestnut" /></p>
        </Tab>
        <Tab label="Vine Jungle">
          <p>Faktor hoki untuk mendapat banyak <Tip>Dawnium</Tip> di sini terlalu besar.</p>
          <p><strong>KALAU KAMU SUDAH MENGAMBIL SEMUA YANG BAGUS DI TEMPAT LAIN</strong>, ini cara yang lumayan untuk menambah <Tip>Dawnium</Tip>, tapi secara pribadi saya lewati, kecuali kamu mau mencoba peruntungan di hadiah 2.88k.</p>
          <p><Img src="guides/vine-jungle.webp" alt="sword x staff wheel of destiny stormcliff" /></p>
        </Tab>
      </Tabs>
    </>
  );
}
