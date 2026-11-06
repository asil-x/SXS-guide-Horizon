import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Knight adalah garis depan khusus di Sword x Staff. Gaya mainnya berpusat pada <strong>menahan serangan lalu mengubahnya menjadi damage balasan lewat</strong> <Tip>Rebound</Tip>, dan bisa beralih ke gaya Glass Cannon saat melawan boss jika sudah ada orang lain yang nge-tank.</p>
      <ProsCons id="pros-cons" title="Kelebihan & kekurangan Knight">
        <Pro>Rebound sangat efektif melawan musuh yang menyerang banyak hit dan kerumunan monster AoE</Pro>
        <Pro>Salah satu class paling aman untuk melewati stage dengan selisih power besar, berkat block yang stabil dan pertahanan berlapis</Pro>
        <Pro>Opsi Glass Cannon memungkinkan beralih ke build DPS di konten yang sudah ada tank-nya</Pro>
        <Pro>Tier tinggi punya banyak cara melindungi tim: Taunt, shield untuk ally yang HP-nya rendah, pengurangan damage area, dan menanggung serangan untuk ally</Pro>
        <Con>Prioritas stat lebih rumit dibanding class DPS murni</Con>
        <Con>Build tank murni memberi damage lambat, karena sebagian besar damage datang dari balasan sehingga bergantung pada apakah musuh menyerangmu</Con>
        <Con>Glass Cannon butuh kondisi yang mendukung agar aman: harus ada tank sendiri atau musuh yang tekanannya rendah</Con>
      </ProsCons>
      <Alert title="Coba bereksperimen dengan build!">
        <p><strong>Ingat ini hanya kerangka contoh</strong> untuk kamu sesuaikan dengan gear, gaya main, skill, dan Fantomon milikmu.</p>
      </Alert>

      <hr />

      <h2 id="best-stats">Stat terbaik</h2>
      <p>Knight punya dua prioritas stat berbeda, tergantung build yang kamu pakai.</p>
      <p>Untuk Reflect Tank, damage kamu naik seiring block yang stabil. <strong>Block %</strong> dan <strong>Block Rate</strong> wajib agar build ini jalan, sedangkan <strong>Physical Mastery</strong> menentukan berapa banyak damage yang dipantulkan <Tip>Rebound</Tip> ke musuh.</p>
      <p>Setelah itu, <strong>Defense %</strong>, <strong>Flat Defense</strong>, dan resistansi elemen membuatmu bertahan lebih lama lagi.</p>
      <p>Untuk build <strong>Glass Cannon</strong>, susun stat seperti DPS fisik lainnya. <strong>Physical Mastery</strong> dulu, lalu <strong>Crit Rate</strong> dan <strong>Crit Damage</strong>, disusul <strong>Attack %</strong> dan <strong>Flat Attack</strong>.</p>
      <p>Beberapa catatan yang berlaku untuk kedua build:</p>
      <ul>
        <li>Damage Increase dan Damage Reduction adalah stat kuat tapi sebagian besar berasal dari sistem di luar gear, jadi jangan dikejar di gear</li>
        <li>Elemental Aegis adalah stat bertahan yang kuat, tapi juga sebagian besar dari sistem lain, jadi tidak perlu diincar di gear</li>
        <li>Effect Hit dan Effect Resistance saat ini nilainya kecil, tidak layak diprioritaskan di atas stat inti lainnya</li>
        <li>Reflect Tank tidak butuh Crit Resistance. Serangan yang sudah di-block tidak bisa crit, jadi investasi ke Block lebih efisien</li>
      </ul>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p><Tip>Nyxarchon</Tip> adalah pilihan terbaik untuk build <strong>Glass Cannon</strong> berkat slot charm tambahan dan stat dasar yang lebih tinggi.</p>
      <p>Untuk tank sungguhan, <Tip>Armopi</Tip> adalah pet standar, karena shield tambahan (dan buff DEF) sangat bagus untuk semua formasi bertahan. Kalau gacha sedang apes, <Tip>Boaro</Tip> bisa dipakai sementara sampai dapat <Tip>Armopi</Tip>.</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companion memberi stat pasif di milestone level tertentu, jadi fokuslah menaikkan beberapa companion yang langsung menguntungkan class ke level 50 dulu, baru naikkan sisanya.</p>
      <p><strong>SEMUA CLASS diuntungkan oleh DMG Boost dan Reduction</strong> untuk menambah damage sekaligus daya tahan.</p>
      <p>Untuk build <strong>Reflect Tank</strong>, prioritaskan companion yang memberi <strong>Block Rate</strong> seperti <Tip>Braulio</Tip>, <Tip>Darkness</Tip>, atau <Tip>Mayoi</Tip>.</p>
      <p>Untuk build <strong>Glass Cannon</strong>, prioritaskan <strong>Attack</strong> dan <strong>Physical Mastery</strong> agar damage tetap kompetitif. <Tip>Akane</Tip>, <Tip>Hermes</Tip>, <Tip>Jiangwang</Tip>, dan <Tip>Ophelia</Tip> adalah pilihan bagus di sini.</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="Tingkat gem">
        <p>Saya pakai gem T10 sebagai contoh, tapi <strong>makin tinggi tingkatnya makin bagus stat-nya</strong>. Gem ada dari T1 sampai T15.</p>
      </Alert>
      <p><Tip>T10 Obsidian</Tip> bagus untuk semua class, karena semua orang butuh damage tambahan apa pun gaya mainnya.</p>
      <p><Tip>T10 Moonstone</Tip> juga cukup populer untuk semua class demi daya tahan.</p>
      <p>Untuk Knight, <Tip>T10 Sapphire</Tip> adalah pilihan bagus untuk menambah DEF, sedangkan <Tip>T10 Beryl</Tip> memberi HP tambahan.</p>
      <p>Kalau memakai build glass cannon, cukup fokus pada gem serangan seperti <Tip>T10 Ruby</Tip> dan <Tip>T10 Amethyst</Tip>.</p>

      <hr />

      <h2 id="builds">Builds</h2>
      <Tabs big>
        <Tab label="Warrior" icon="skills/classes/warrior.png">
          <p>Di awal game kamu dibatasi oleh technique yang dimiliki, tapi Warrior punya pilihan bagus untuk AoE maupun single target sejak awal.</p>
          <p><strong>Block Rate ternyata sangat kuat di tahap ini</strong>, investasi sejak awal membuatmu hampir tak tersentuh di banyak konten dibanding Mage.</p>
          <Tabs>
            <Tab label="AoE">
              <Build
                techniques={[
                  'Leap Attack',
                  'Mountain Collapse',
                  'Gravity Pull',
                  'Whirlwind Slash',
                ]}
                charms={[
                  'Blade of Lament',
                  'Insightful Eye',
                  'Block Awareness',
                  'Blade Tempest',
                ]}
              />
              <p><strong>Build AoE kuat yang seimbang antara damage dan daya tahan.</strong></p>
              <p>Ganti <Tip>Blade Tempest</Tip> dengan <Tip>Strength Rules</Tip> saat melawan musuh yang tahan angin.</p>
              <p>Untuk konten yang lebih mudah, lepas <Tip>Gravity Pull</Tip> dan <Tip>Blade of Lament</Tip>, ganti dengan pilihan yang lebih ofensif.</p>
              <p><em>Penting: hanya lepas <Tip>Blade of Lament</Tip> kalau daya tahan bukan masalah.</em></p>
              <p>Block Rate sangat kuat, tapi kalau damage kurang kamu bisa mengganti <Tip>Block Awareness</Tip> dengan <Tip>Counter Blade</Tip>, terutama saat bertarung jarak dekat.</p>
            </Tab>
            <Tab label="Single target">
              <Build
                techniques={[
                  'Leap Attack',
                  'Lion Combo',
                  'Quadrant Slash',
                  'Heavy Impact',
                ]}
                charms={[
                  'Blade of Lament',
                  'Insightful Eye',
                  'Block Awareness',
                  'Blade Tempest',
                ]}
              />
              <p><strong>Build single target, fokus pada damage yang stabil.</strong></p>
              <p>Memakai set charm yang sama dengan build AoE, jadi mudah berpindah sesuai konten yang sedang dimainkan.</p>
              <p>Untuk konten yang lebih mudah, kamu bisa melepas <Tip>Blade of Lament</Tip> dan menggantinya dengan pilihan yang lebih ofensif.</p>
              <p><em>Penting: hanya lepas <Tip>Blade of Lament</Tip> kalau daya tahan bukan masalah.</em></p>
              <p>Block Rate sangat kuat, tapi kalau damage kurang kamu bisa mengganti <Tip>Block Awareness</Tip> dengan <Tip>Counter Blade</Tip>, terutama saat bertarung jarak dekat.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Knight" icon="skills/classes/knight.png">
          <p>Knight membawa sahabat barumu: <Tip>Rebound</Tip>, yang mengubah block menjadi damage balasan. Di sinilah class ini mulai bekerja sesuai rancangannya.</p>
          <p>Ini juga akan menjadi build utama untuk sebagian besar konten.</p>
          <Alert type="red" title="CATATAN PENTING">
            <p><strong>Konten grup</strong>: <Tip>Heart of Challenge</Tip> wajib untuk Reflect Tank saat party. Tanpanya kamu kehilangan kendali atas siapa yang menyerangmu, dan <Tip>Rebound</Tip> aktif kurang stabil.</p>
            <p><strong>Block Rate sekarang sangat krusial</strong>: Damage bergantung pada block yang stabil. Investasikan lewat gear dan charm.</p>
            <p><strong>Physical Mastery</strong>: Cara utama menaikkan damage balasan <Tip>Rebound</Tip>. Jangan abaikan stat ini di gear, bahkan pada build tank.</p>
          </Alert>
          <br />
          <Tabs>
            <Tab label="Reflect Tank">
              <Build
                techniques={[
                  'Luminous Shield',
                  'Valor Surge',
                  'Leap Attack',
                  'Guardian Ring',
                ]}
                charms={[
                  'Block Awareness',
                  'Counter Blade',
                  'Rebound',
                  'Iron Fortress',
                ]}
              />
              <p><strong>Bertahan dengan block yang stabil, lalu biarkan <Tip>Rebound</Tip> memantulkan damage itu kembali.</strong></p>
              <p>Setiap block mengaktifkan <Tip>Rebound</Tip> sekali, jadi build ini sangat kuat melawan serangan multi-hit, kerumunan monster AoE, dan musuh yang menyerang terus-menerus.</p>
              <p>Skill 5 hit akan mengaktifkan <Tip>Rebound</Tip> 5 kali secara terpisah.</p>
              <p><strong>Ganti sesuai situasi:</strong></p>
              <ul>
                <li><Tip>Valor Surge</Tip>: Buff dan cleanse. Kuat saat solo maupun grup tapi tidak wajib</li>
                <li><Tip>Heart of Challenge</Tip>: Taunt area, wajib saat grup kecuali kamu memakai build glass cannon</li>
                <li><Tip>Heavy Impact</Tip>: Burst damage untuk boss dan PvP</li>
                <li><Tip>Whirlwind Slash</Tip>: Tambahan DPS area</li>
                <li><Tip>Boiling Bloodlust</Tip>: Menambah DPS, opsional</li>
              </ul>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Paladin" icon="skills/classes/paladin.png">
          <p>Naik class ke Paladin memperluas pilihan skill secara signifikan dan membuka build <strong>Glass Cannon</strong>, pilihan yang layak untuk konten boss.</p>
          <p>Reflect Tank tetap build serba bisa yang paling kuat, tapi sekarang kamu bisa fleksibel beralih sesuai tuntutan pertarungan.</p>
          <Alert type="red" title="CATATAN PENTING">
            <p><strong>Konten grup</strong>: <Tip>Heart of Challenge</Tip> wajib untuk Reflect Tank saat party. Tanpanya kamu kehilangan kendali atas siapa yang menyerangmu, dan <Tip>Rebound</Tip> aktif kurang stabil.</p>
            <p><strong>Syarat memakai Glass Cannon</strong>: Hanya beralih ke build ini saat sudah ada tank sendiri, atau saat damage yang diterima cukup rendah sehingga tidak perlu khawatir soal bertahan hidup.</p>
          </Alert>
          <br />
          <Tabs>
            <Tab label="Reflect Tank">
              <Build
                techniques={[
                  'Luminous Shield',
                  'Valor Surge',
                  'Leap Attack',
                  'Guardian Ring',
                ]}
                charms={[
                  'Block Awareness',
                  'Block Mastery',
                  'Rebound',
                  'Iron Fortress',
                ]}
              />
              <p><strong>Ganti sesuai situasi:</strong></p>
              <ul>
                <li><Tip>Valor Surge</Tip>: Buff dan cleanse. Kuat saat solo maupun grup tapi tidak wajib</li>
                <li><Tip>Heart of Challenge</Tip>: Taunt area, wajib saat grup, ganti skill lompat atau shield dengan skill ini</li>
                <li><Tip>Desperate Protection</Tip>: Shield darurat, alternatif untuk <Tip>Guardian Ring</Tip></li>
                <li><Tip>Lunarwater Threads</Tip>: Alat untuk menarik musuh jarak jauh</li>
                <li><Tip>Star Shattering Slash</Tip> / <Tip>Heavy Impact</Tip>: Burst damage untuk boss dan PvP</li>
                <li><Tip>Whirlwind Slash</Tip>: Tambahan DPS area</li>
                <li><Tip>Boiling Bloodlust</Tip>: Menambah DPS, opsional</li>
                <li><Tip>Counter Blade</Tip>: Pengganti awal untuk <Tip>Rebound</Tip>, scaling dengan Attack. Masih bisa dipakai bersama <Tip>Rebound</Tip> di formasi yang condong ke tank</li>
              </ul>
            </Tab>
            <Tab label="Glass Cannon">
              <Build
                techniques={[
                  'Valor Surge',
                  'Leap Attack',
                  'Heavy Impact',
                  'Star Shattering Slash',
                ]}
                charms={[
                  'Strength Rules',
                  'Insightful Eye',
                  'Pursuit of Victory',
                  "Warrior's Essence",
                ]}
              />
              <p><strong>Build damage boss saat tidak perlu khawatir soal bertahan hidup.</strong> Pakai saat sudah ada tank sendiri atau damage yang diterima cukup rendah sehingga tidak butuh tank.</p>
              <p>Fokus sepenuhnya memaksimalkan total damage lewat buff dan debuff. Di pertarungan boss yang menghitung damage dalam jumlah giliran tetap, build ini jauh mengungguli Reflect Tank.</p>
              <p><strong>Ganti sesuai situasi:</strong></p>
              <ul>
                <li><Tip>Boiling Bloodlust</Tip>: Menambah DPS, opsional, lebih kuat di tier ini karena stat dasar sudah lebih tinggi</li>
                <li><Tip>Guardian Ring</Tip>: Hanya layak kalau kamu sudah punya <Tip>Defensive Assault</Tip></li>
                <li><Tip>Defensive Assault</Tip>: Bersinergi dengan <Tip>Guardian Ring</Tip></li>
                <li><Tip>Feline Dance</Tip>: Menambah Speed untuk giliran ekstra</li>
                <li><Tip>Blade of Lament</Tip>: Lifesteal kalau butuh sedikit rasa aman tambahan</li>
              </ul>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Guardian" icon="skills/classes/guardian.png">
          <p>Guardian adalah tier di mana Knight mulai punya <strong>damage Air dan siklus shield</strong>: menjaga shield untuk menambah damage, dan mengubah momen shield pecah menjadi serangan balik.</p>
          <p><Tip>Swirling Blade</Tip> mengubah 20% damage yang diberikan menjadi shield (maksimal 50% Max HP), sedangkan <Tip>Seismic Tide</Tip> adalah serangan Air area 2 petak di sekitar diri. Bersama <Tip>Guardian Ring</Tip>, kamu hampir selalu punya shield.</p>
          <p>Di jalur tank murni, <Tip>Hamper Strike</Tip> memberi Taunt dari jauh (area 2 petak di sekitar petak yang dipilih) dan <Tip>Oath of Vigil</Tip> menanggung 50% damage untuk adventurer ally dengan HP terendah.</p>
          <Alert type="red" title="Catatan penting">
            <p><Tip>Defensive Assault</Tip> hanya menambah ATK <strong>saat kamu punya shield</strong>, jadi pertahankan <Tip>Guardian Ring</Tip> dan <Tip>Swirling Blade</Tip> di set skill kalau memakainya.</p>
            <p><Tip>Ripple Impact</Tip> aktif saat shield hancur total: memberi damage Air di sekitar diri dan 100% memberi 3 stack Cold. Shield pecah bukan lagi kerugian, melainkan sebuah serangan.</p>
            <p><Tip>Holy Aegis</Tip> menaikkan DEF sekaligus ketebalan shield berdasarkan DEF, sangat layak dipertimbangkan kalau kamu condong ke bertahan.</p>
          </Alert>
          <Tabs>
            <Tab label="Shield ofensif">
              <Build
                techniques={['Guardian Ring', 'Swirling Blade', 'Seismic Tide', 'Star Shattering Slash']}
                charms={['Block Awareness', 'Defensive Assault', 'Ripple Impact', 'Pursuit of Victory']}
              />
              <p><strong>Build utama Guardian.</strong> <Tip>Guardian Ring</Tip> dan <Tip>Swirling Blade</Tip> menjaga shield agar <Tip>Defensive Assault</Tip> selalu aktif; saat shield pecah, <Tip>Ripple Impact</Tip> membalas dan memberi Cold.</p>
              <p><Tip>Pursuit of Victory</Tip> menambah damage ke musuh yang terkena Ailment/Debuff, dan <Tip>Block Awareness</Tip> menjaga Block Rate tetap tinggi untuk block yang stabil seperti di tier sebelumnya.</p>
            </Tab>
            <Tab label="Tank tim">
              <Build
                techniques={['Hamper Strike', 'Guardian Ring', 'Light Sword Array', 'Raging Maelstrom']}
                charms={['Soul Protection', 'Oath of Vigil', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>Pakai saat bermain dalam tim dan kamu yang menerima serangan.</strong> <Tip>Hamper Strike</Tip> men-Taunt sekelompok musuh, <Tip>Iron Will</Tip> mengurangi damage dari musuh yang terkena Taunt, dan <Tip>Raging Maelstrom</Tip> menarik musuh mendekat.</p>
              <p><Tip>Light Sword Array</Tip> dirapal sebelum pertarungan dan membalas setiap kali kamu diserang. <Tip>Soul Protection</Tip> mengubah 50% HP menjadi shield di awal pertarungan.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Templar" icon="skills/classes/templar.png">
          <p>Templar mendorong Knight menjadi <strong>tank pelindung tim</strong> yang sesungguhnya: lebih banyak cara memberi Taunt, pengurangan damage untuk seluruh tim, dan mengubah heal menjadi shield.</p>
          <p><Tip>Last Stand</Tip> bergerak ke target dalam 4 petak lalu memberi Taunt (memprioritaskan target besar). <Tip>Sanctified Soul</Tip> mengurangi damage yang diterima diri sendiri dan semua ally dalam 4 petak selama 2 giliran, bisa dipakai sejak giliran pertama.</p>
          <p>Di jalur ofensif, <Tip>Dawnburst</Tip> adalah serangan Cahaya area 3 petak, sedangkan <Tip>First Light</Tip> menghabiskan semua shield yang ada untuk memberi damage Cahaya sesuai jumlah shield yang dipakai.</p>
          <Alert type="red" title="Catatan penting">
            <p><Tip>Healing Shift</Tip> mengubah <strong>semua heal</strong> yang kamu terima menjadi shield selama 2 giliran, sisanya kembali menjadi HP. Sangat kuat saat tim punya healer.</p>
            <p><Tip>Heart of Challenge</Tip> dirapal sebelum pertarungan, jadi musuh terkena Taunt sejak awal. Padukan dengan <Tip>Iron Will</Tip> untuk mengurangi damage dari mereka.</p>
            <p><Tip>Holy Recuperation</Tip> hanya aktif di giliran saat kamu <strong>tidak</strong> memakai technique apa pun, jadi tidak cocok untuk build tank yang harus memakai skill setiap giliran.</p>
          </Alert>
          <Tabs>
            <Tab label="Tank tim">
              <Build
                techniques={['Guardian Ring', 'Desperate Protection', 'Heart of Challenge', 'Last Stand']}
                charms={['Healing Shift', 'Soul Protection', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>Build tank utama.</strong> <Tip>Heart of Challenge</Tip> dan <Tip>Last Stand</Tip> membuat musuh mengincarmu, <Tip>Guardian Ring</Tip> melindungi diri, dan <Tip>Desperate Protection</Tip> memberi shield ke ally dengan HP terendah.</p>
              <p>Charm sepenuhnya fokus pada bertahan hidup. Kalau tim sudah cukup aman, kamu bisa mengganti <Tip>Soul Protection</Tip> dengan <Tip>Sanctified Soul</Tip> di slot technique untuk mengurangi damage seluruh tim.</p>
            </Tab>
            <Tab label="Balasan Cahaya">
              <Build
                techniques={['Dawnburst', 'Sanctified Soul', 'Guardian Ring', 'First Light']}
                charms={['Rebound', 'Holy Bulwark', 'Holy Restoration', 'Holy Aegis']}
              />
              <p><strong>Pakai saat solo atau tim sudah punya tank lain.</strong> <Tip>Guardian Ring</Tip> membuat shield, lalu <Tip>First Light</Tip> menghabiskannya menjadi damage Cahaya. <Tip>Holy Aegis</Tip> membuat shield lebih tebal, artinya <Tip>First Light</Tip> juga makin kuat.</p>
              <p><Tip>Holy Bulwark</Tip> menambah damage skill balasan seperti <Tip>Rebound</Tip>. <Tip>Holy Restoration</Tip> memulihkan HP setiap 6 technique Cahaya.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Justicar" icon="skills/classes/justicar.png">
          <p>Justicar memperluas peralatan ke dua arah: <strong>Cahaya penumpuk Charge</strong> dan <strong>Es pengurang damage tim</strong>.</p>
          <p><Tip>Radiant Spiritblade</Tip> memantul di antara hingga 5 musuh dan mendapat tambahan 50% damage jika menghabiskan 5 stack Charge; <Tip>Skyglow</Tip> memberi 2 stack Charge setiap akhir giliran, pas untuk menjaga siklusnya. <Tip>Prism Aegis</Tip> membalas dengan damage Cahaya berbasis DEF setiap kali kamu terkena technique.</p>
          <p>Di jalur Es, <Tip>Ice Shackles</Tip> mengurangi damage yang kamu dan ally dalam 5 petak terima dari musuh yang terkena Cold, setiap stack Cold menambah 20% lagi. <Tip>Phantom Current</Tip> memberi Cold dan menarik musuh dalam 4 petak mendekat.</p>
          <p><Tip>Aether Rush</Tip> punya Base Chance 150% untuk Stun, hampir pasti mengunci satu target besar.</p>
          <Alert type="red" title="Catatan penting">
            <p><Tip>Twin Radiance Shield</Tip> adalah versi upgrade dari <Tip>Desperate Protection</Tip>: jangkauan 5 petak alih-alih 3, tapi hanya bertahan 2 giliran.</p>
            <p><Tip>Sacred Blessing</Tip> mengurangi damage yang diterima sesuai jumlah technique Cahaya yang dipasang (maksimal 3). Sebaiknya hanya dipakai jika build punya minimal 2–3 technique Cahaya.</p>
            <p><Tip>Tide Sigil</Tip> butuh 15 kali terkena technique untuk membalas sekali, jadi hanya efektif di pertarungan panjang dengan banyak musuh.</p>
          </Alert>
          <Tabs>
            <Tab label="Tank tim">
              <Build
                techniques={['Twin Radiance Shield', 'Desperate Protection', 'Heart of Challenge', 'Last Stand']}
                charms={['Healing Shift', 'Soul Protection', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>Pertahankan gaya tank Templar</strong>, cukup tambahkan <Tip>Twin Radiance Shield</Tip> agar punya dua skill pemberi shield untuk ally. Kedua shield punya jangkauan berbeda sehingga bisa menjangkau ally yang jauh juga.</p>
            </Tab>
            <Tab label="Cahaya">
              <Build
                techniques={['Radiant Spiritblade', 'Prism Aegis', 'Dawnburst', 'Guardian Ring']}
                charms={['Skyglow', 'Sacred Blessing', 'Holy Aegis', 'Soul Protection']}
              />
              <p><Tip>Skyglow</Tip> menambah damage Cahaya dan memberi Charge agar <Tip>Radiant Spiritblade</Tip> selalu mendapat tambahan 50% damage. <Tip>Prism Aegis</Tip> dan <Tip>Holy Aegis</Tip> sama-sama berbasis DEF, jadi build tetap tebal meski condong ofensif.</p>
            </Tab>
            <Tab label="Es">
              <Build
                techniques={['Phantom Current', 'Tidal Whirl', 'Swirling Blade', 'Guardian Ring']}
                charms={['Ice Shackles', 'Frigid Glint', 'Ripple Impact', 'Holy Aegis']}
              />
              <p><Tip>Frigid Glint</Tip> 100% memberi 1 stack Cold setiap kali technique Air mengenai target, jadi Cold menumpuk sangat cepat, dan setiap stack membuat <Tip>Ice Shackles</Tip> mengurangi damage lebih banyak untuk seluruh tim.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Vindicator" icon="skills/classes/compass/class-23.webp">
          <p>Vindicator mengubah Knight menjadi <strong>tank yang memberi damage berbasis DEF</strong>: makin tebal, makin sakit pukulannya.</p>
          <p><Tip>Flurry Strike</Tip> memukul 3 hit di area 3×1, setiap 5% DEF kamu di atas target menambah 5% damage (maksimal 50%). <Tip>Warforged Edge</Tip> makin kuat setiap kali dipakai dalam pertarungan, maksimal +100%. <Tip>Frost Protection</Tip> membuat shield dan memberi Cold ke penyerang.</p>
          <p>Charm baru punya dua pilihan pelindung tim yang menarik: <Tip>Covenant Aegis</Tip> menanggung damage untuk adventurer ally saat HP mereka pertama kali turun di bawah 40%, dan <Tip>Iron Solidarity</Tip> memberi Solidarity ke ally di sekitarmu sebelum pertarungan.</p>
          <Alert type="red" title="Catatan penting">
            <p><strong>DEF adalah stat serangan</strong> dari build utama: menaikkan damage <Tip>Flurry Strike</Tip>, menebalkan shield lewat <Tip>Holy Aegis</Tip>, dan menambah daya tahan.</p>
            <p><Tip>Fortified Shell</Tip> menaikkan DEF untuk setiap 10% HP yang hilang (maksimal 5 stack), jadi makin sering dipukul, <Tip>Flurry Strike</Tip> makin kuat.</p>
            <p><Tip>Warforged Edge</Tip> butuh waktu untuk mencapai maksimal, jadi paling kuat di pertarungan panjang seperti boss.</p>
          </Alert>
          <Tabs>
            <Tab label="DEF ofensif">
              <Build
                techniques={['Aether Rush', 'Warforged Edge', 'Flurry Strike', 'Frost Protection']}
                charms={['Soul Protection', 'Holy Aegis', 'Power of Retribution', 'Fortified Shell']}
              />
              <p><Tip>Aether Rush</Tip> mengunci target besar, <Tip>Flurry Strike</Tip> dan <Tip>Warforged Edge</Tip> memberi damage utama, <Tip>Frost Protection</Tip> menjaga shield.</p>
              <p><Tip>Power of Retribution</Tip> menambah Physical Mastery dan bisa memberi Cripple lewat setiap serangan Fisik.</p>
            </Tab>
            <Tab label="Charge Cahaya">
              <Build
                techniques={['Charged Slash', 'Radiant Roar', 'Radiant Spiritblade', 'Prism Aegis']}
                charms={['Energy Flux', 'Skyglow', 'Sacred Blessing', 'Holy Aegis']}
              />
              <p><Tip>Energy Flux</Tip> memberi 14 stack Charge di awal pertarungan, dan setiap 2 stack yang dipakai menambah ATK. <Tip>Radiant Roar</Tip> memakai 10 stack untuk dirapal ulang, <Tip>Radiant Spiritblade</Tip> memakai 5 stack untuk tambahan 50% damage, sedangkan <Tip>Charged Slash</Tip> dan <Tip>Skyglow</Tip> mengisi ulang Charge.</p>
              <p>Dengan 3 technique Cahaya, <Tip>Sacred Blessing</Tip> mencapai efek maksimal.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Caelifer" icon="skills/classes/compass/class-27.webp">
          <Alert type="red" title="Class belum dirilis">
            <p>Caelifer adalah class tier 8 dari jalur ini dan <strong>belum ada di versi saat ini</strong>. Data skill diambil dari file game sehingga bisa berubah saat rilis. Build di bawah hanya sebagai gambaran awal.</p>
          </Alert>
          <p>Caelifer menyempurnakan gaya <strong>Charge Cahaya</strong> milik Vindicator: <Tip>Lucent Edge</Tip> mendapat 1 stack Charge setiap kali memberi damage (makin banyak musuh terkena makin cepat terisi), dan <Tip>Lumen Nova</Tip> menghabiskan semua Charge untuk tambahan 7% damage per stack.</p>
          <p><Tip>Luminous Restoration</Tip> memulihkan HP setiap kali kamu menghabiskan 5 stack Charge atau lebih sekaligus, jadi siklus isi lalu habiskan Charge juga menjadi sumber heal.</p>
          <p>Selain itu ada jalur Es dengan <Tip>Vapor Bloom</Tip>, <Tip>Frostcast</Tip>, dan <Tip>Skyrider Rimefield</Tip>, serta <Tip>Stoneward Prayer</Tip> yang memberi shield ke semua ally dalam 5 petak sebelum pertarungan.</p>
          <Tabs>
            <Tab label="Charge Cahaya">
              <Build
                techniques={['Lucent Edge', 'Charged Slash', 'Radiant Roar', 'Lumen Nova']}
                charms={['Skyglow', 'Fortified Shell', 'Energy Flux', 'Luminous Restoration']}
              />
              <p>Isi Charge dengan <Tip>Lucent Edge</Tip>, <Tip>Charged Slash</Tip>, <Tip>Skyglow</Tip>, dan <Tip>Energy Flux</Tip>, lalu lepaskan dengan <Tip>Radiant Roar</Tip> dan <Tip>Lumen Nova</Tip>. Taruh <Tip>Lumen Nova</Tip> di urutan terakhir agar menghabiskan stack sebanyak mungkin.</p>
            </Tab>
            <Tab label="Es">
              <Build
                techniques={['Vapor Bloom', 'Frostcast', 'Phantom Current', 'Frost Protection']}
                charms={['Skyrider Rimefield', 'Frost Domain', 'Ice Shackles', 'Stoneward Prayer']}
              />
              <p><Tip>Frost Domain</Tip> dan <Tip>Skyrider Rimefield</Tip> terus menumpuk Cold pada musuh di sekitarmu, dan <Tip>Ice Shackles</Tip> mengubah jumlah stack Cold itu menjadi pengurangan damage untuk seluruh tim.</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
