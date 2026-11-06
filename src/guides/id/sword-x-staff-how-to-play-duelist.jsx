import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Duelist mempertahankan fleksibilitas class Warrior sekaligus mendapat damage dan mobilitas jauh lebih besar, menjadikannya <strong>pilihan kuat untuk melewati stage dengan selisih power besar dibanding class lain</strong>.</p>
      <ProsCons id="pros-cons" title="Kelebihan & kekurangan Duelist">
        <Pro>Mobilitas sangat baik dengan damage tetap tinggi</Pro>
        <Pro>Pasif anti-mati + charm lifesteal untuk menembus konten sulit</Pro>
        <Pro>Class terbaik untuk melewati stage dengan selisih power besar</Pro>
        <Con>Beberapa technique butuh investasi besar agar benar-benar bersinar</Con>
        <Con>Jarak dekat, tergantung pertarungan dan build jangkauannya bisa terbatas. Musuh mudah melakukan kiting</Con>
        <Con>Di awal game pilihan elemennya sedikit, akan bertambah di class berikutnya</Con>
      </ProsCons>
      <Alert title="Coba bereksperimen dengan build!">
        <p><strong>Ingat ini hanya kerangka contoh</strong> untuk kamu sesuaikan dengan gear, gaya main, skill, dan Fantomon milikmu.</p>
      </Alert>

      <hr />

      <h2 id="best-stats">Stat terbaik</h2>
      <p>Duelist murni pemberi damage, jadi stat-nya lebih sederhana dibanding Sage atau Knight yang harus mengurus lebih banyak hal.</p>
      <p>Prioritaskan <strong>Physical Mastery</strong> serta <strong>Crit Rate/Damage</strong> di gear, itu sumber penambah damage terbesar.</p>
      <p><strong>SPD dan ATK</strong> (baik flat maupun %) tetap bernilai di mana pun bisa dipasang.</p>
      <p>Selain itu, <strong>Effect Hit Rate</strong> dan <strong>Block Rate</strong> juga masuk daftar prioritas, yang terakhir membantu menutupi kerentanan saat melewati stage dengan selisih power tinggi.</p>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p><strong><Tip>Nyxarchon</Tip> adalah pilihan terbaik (BiS) untuk semua build DPS.</strong> Tarik banner pet sampai cukup untuk menukarnya.</p>
      <p>Slot charm tambahan dan stat dasar yang lebih tinggi membuat Fantomon Mythic lebih kuat di hampir semua situasi.</p>
      <p>Kalau kamu dapat <Tip>Sylvaerie</Tip> atau <Tip>Terragon</Tip>, itu pilihan terbaik sampai kamu punya <Tip>Nyxarchon</Tip>.</p>
      <p><Tip>Kels</Tip> adalah BiS PVP untuk semua orang kalau kamu peduli mode ini (dan bisa di-farm gratis).</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companion memberi stat pasif di milestone level tertentu, jadi fokuslah menaikkan beberapa companion yang langsung menguntungkan class ke level 50 dulu, baru naikkan sisanya.</p>
      <p><strong>SEMUA CLASS diuntungkan oleh DMG Boost dan Reduction</strong> untuk menambah damage sekaligus daya tahan.</p>
      <p>Untuk Duelist, prioritaskan companion yang memberi <strong>Attack</strong> dan <strong>Accuracy</strong>, dan untungnya companion-companion itu sama:</p>
      <p><Tip>Akane</Tip>, <Tip>Hermes</Tip>, <Tip>Jiangwang</Tip>, <Tip>Kazuma</Tip>, dan <Tip>Ophelia</Tip> adalah pilihan sangat bagus untuk difokuskan lebih dulu.</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="Tingkat gem">
        <p>Saya pakai gem T10 sebagai contoh, tapi <strong>makin tinggi tingkatnya makin bagus stat-nya</strong>. Gem ada dari T1 sampai T15.</p>
      </Alert>
      <p><Tip>T10 Obsidian</Tip> bagus untuk semua class, karena semua orang butuh damage tambahan apa pun gaya mainnya.</p>
      <p><Tip>T10 Moonstone</Tip> juga cukup populer untuk semua class demi daya tahan.</p>
      <p>Duelist juga sangat diuntungkan oleh <Tip>T10 Amethyst</Tip> karena memberi SPD dan Crit Rate.</p>
      <p>Gem 1 stat tetap bagus untuk mengisi sisa gear, <Tip>T10 Ruby</Tip> dan <Tip>T10 Citrine</Tip> adalah pilihan terbaik kedua untuk class ini.</p>

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
        <Tab label="Duelist" icon="skills/classes/duelist.png">
          <p>Technique mobilitas baru benar-benar mengubah rasa bermain class ini, dengan pilihan damage yang jauh lebih baik dibanding Warrior.</p>
          <Alert type="red" title="CATATAN PENTING">
            <p><strong>Block Rate sekarang lebih penting</strong>: Tanpa investasi yang tepat kita jadi lebih rapuh, jadi masukkan ke gear dan charm.</p>
            <p><strong>Physical Mastery</strong>: Cara termudah menambah damage. Jangan abaikan stat ini di gear.</p>
          </Alert>
          <br />
          <Tabs>
            <Tab label="AoE">
              <Build
                techniques={[
                  'Flash Dash',
                  'Gravity Pull',
                  'Flame Aura',
                  'Whirlwind Slash',
                ]}
                charms={[
                  'Insightful Eye',
                  'Block Awareness',
                  'Indomitable Will',
                  'Blade of Lament',
                ]}
              />
              <p><Tip>Flash Dash</Tip> adalah pembeda utama build ini dari Warrior: mobilitas bagus sambil tetap memberi damage.</p>
              <p>Kamu bisa memakai <Tip>Whirlwind Slash</Tip> atau <Tip>Mountain Collapse</Tip>, mana saja yang rank-nya lebih tinggi.</p>
              <p>Kamu bisa mengganti <Tip>Block Awareness</Tip> dengan <Tip>Frame of Battles</Tip> sesuai kebutuhan bertahan hidup.</p>
              <p>Untuk konten yang lebih mudah, kamu bisa melepas <Tip>Indomitable Will</Tip> dan <Tip>Blade of Lament</Tip> sekaligus lalu menggantinya dengan pasif damage yang rank-nya paling tinggi.</p>
            </Tab>
            <Tab label="Single target">
              <Build
                techniques={[
                  'Leap Attack',
                  'Flame Aura',
                  'Heavy Impact',
                  'Darkness Descends',
                ]}
                charms={[
                  'Crit Mastery',
                  'Insightful Eye',
                  'Blade of Lament',
                  'Indomitable Will',
                ]}
              />
              <p><em>Ganti <Tip>Flame Aura</Tip> dengan <Tip>Sunset Sword</Tip> saat melawan musuh tahan api.</em></p>
              <p>Di beberapa situasi, kamu bisa melepas <Tip>Blade of Lament</Tip> untuk <Tip>Block Awareness</Tip>, karena lifesteal hampir tidak berarti di konten di mana pukulanmu kuat tapi jumlah hit-nya kurang.</p>
              <p>Namun, kalau sedang melewati stage dengan selisih power besar, HP tambahan dari <Tip>Blade of Lament</Tip> membantumu bertahan lebih lama.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Berserker" icon="skills/classes/berserker.png">
          <p>Berserker memberi damage lebih tinggi lagi dan punya alat untuk berbagai gaya main, dengan charm tambahan yang memungkinkan gaya DPS pendukung di konten grup yang lebih sulit pada update mendatang.</p>
          <p>Sekarang ada lebih banyak pilihan skill dan charm untuk tiap konten. Build yang disarankan di bawah ini untuk konten umum, bukan untuk pertarungan tertentu, karena sudah cukup fokus untuk menangani hampir semuanya tanpa banyak perubahan.</p>
          <p>Perubahan di set charm adalah pendatang baru <Tip>Blade of Judgment</Tip>, charm ini sendiri sudah memberi damage luar biasa dan akan menjadi gaya main utama Berserker.</p>
          <p>Ada build yang tidak memakainya dan fokus pada serangan satu hit dengan <Tip>Soul Splash</Tip>, build tersebut juga ada di bawah.</p>
          <p>Lifesteal makin bagus dengan <Tip>Blade Siphon</Tip> baru, yang kini memulihkan HP berdasarkan max HP setiap kali crit. Ini cara pemulihan yang jauh lebih baik, karena sebagian besar waktu kita crit.</p>
          <p>Berserker mengusung tema makin banyak hit makin besar damage, dan kita akan memanfaatkannya dengan segala yang ada.</p>
          <Alert type="red" title="CATATAN PENTING">
            <p><strong>Urutan skill sangat penting</strong>: Urutan skill dalam rotasi adalah hal paling krusial. Salah urutan bisa kehilangan banyak DPS.</p>
            <p><Tip>Blade of Judgment</Tip>: Charm ini mengubah cara main class secara mendasar. Sebagian besar build berpusat pada menjaganya tetap maksimal dengan technique multi-hit.</p>
            <p><strong> <Tip>Blade Siphon</Tip> </strong>: Sekarang berbasis max HP saat crit, jauh lebih baik dari sebelumnya. Prioritaskan naik rank untuk build bertahan.</p>
          </Alert>
          <br />
          <Tabs>
            <Tab label="Single target multi-hit">
              <Build
                techniques={[
                  'Doom Blade',
                  'Whirlwind Slash',
                  'Sunset Sword',
                  'Eclipse Slash',
                ]}
                charms={[
                  'Insightful Eye',
                  'Blade of Judgment',
                  'Blade Siphon',
                  'Blazing Clash',
                ]}
              />
              <p><strong>Sangat bagus untuk World Boss dan konten Guild.</strong></p>
              <p>Technique fokus pada banyak hit untuk terus memberi makan <Tip>Blade of Judgment</Tip>, menghasilkan damage raksasa.</p>
              <p><Tip>Blade Siphon</Tip> sangat cocok di sini karena kita crit terus-menerus, memberi pemulihan diri yang kuat di pertarungan panjang.</p>
            </Tab>
            <Tab label="Single target satu hit">
              <Build
                techniques={[
                  'Doom Blade',
                  'Shattering Sigil',
                  "Asura's Grasp",
                  'Darkness Descends',
                ]}
                charms={[
                  'Insightful Eye',
                  'Crit Mastery',
                  'Soul Splash',
                  'Indomitable Will',
                ]}
              />
              <p>Technique damage single target yang dipadukan dengan <Tip>Soul Splash</Tip> memberi damage sangat baik.</p>
              <p><Tip>Crit Mastery</Tip> dan <Tip>Insightful Eye</Tip> menumpuk dengan baik bersama damage tinggi dari setiap technique di set ini.</p>
              <p><Tip>Indomitable Will</Tip> berperan sebagai lapisan bertahan hidup, karena kita kehilangan lifesteal yang seharusnya diberikan <Tip>Blade Siphon</Tip>.</p>
            </Tab>
            <Tab label="Support / DPS kedua">
              <Build
                techniques={[
                  'Gale Dance',
                  "Hunter's Judgment",
                  'Sunset Sword',
                  'Eclipse Slash',
                ]}
                charms={[
                  'Indomitable Will',
                  'Blade Siphon',
                  'Iron Fortress',
                  'Insightful Eye',
                ]}
              />
              <p><strong>Terutama untuk peran DPS kedua / support di konten grup.</strong></p>
              <p>Kamu bisa mengganti <Tip>Hunter's Judgment</Tip> dengan <Tip>Flame Aura</Tip>, dan <Tip>Sunset Sword</Tip> dengan <Tip>Mountain Collapse</Tip> kalau grup butuh crowd control (CC) tambahan.</p>
              <p>Untuk charm, kamu bisa mengganti <Tip>Iron Fortress</Tip> dengan <Tip>Blade of Judgment</Tip> kalau memilih jalur multi-hit daripada support bertahan.</p>
              <p><Tip>Blade Siphon</Tip> membuatmu bertahan di pertarungan grup panjang tanpa perlu healer yang terus menempel.</p>
            </Tab>
            <Tab label="Push stage HP rendah">
              <Build
                techniques={[
                  'Boiling Bloodlust',
                  'Whirlwind Slash',
                  'Sunset Sword',
                  'Eclipse Slash',
                ]}
                charms={[
                  'Soulfire Protection',
                  'Frame of Battles',
                  'Desperate Valor',
                  'Blade of Judgment',
                ]}
              />
              <p><strong>Sebaiknya hanya dipakai kalau charm kamu sudah level sangat tinggi.</strong></p>
              <p>Build ini mengandalkan pengali damage saat HP rendah, memakai <Tip>Soulfire Protection</Tip> dan <Tip>Frame of Battles</Tip> agar tetap hidup sementara <Tip>Desperate Valor</Tip> melipatgandakan damage saat HP rendah.</p>
              <p><Tip>Blade of Judgment</Tip> melengkapi set charm, menjaga rangkaian multi-hit tetap memukul sekuat mungkin.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Conqueror" icon="skills/classes/conqueror.png">
          <Alert type="red" title="Penting">
            <p></p>
            Ini adalah build yang saya uji sendiri, dipadukan dengan informasi dan build dari pemain Tiongkok.
            <p></p>
            <p><strong>Kamu perlu mempertimbangkan progres akun dan level skill sendiri</strong> saat menyusun build, karena tiap orang ada di level dan tier berbeda. Pilih yang cocok untukmu.</p>
          </Alert>
          <p>Beberapa perubahan dibanding Berserker:</p>
          <ul>
            <li>Elemental mastery jauh lebih diutamakan, karena sebagian besar skill baru berelemen.</li>
            <li>Butuh crit rate lebih tinggi, musuh punya sedikit crit resistance (18%), artinya nanti kita perlu mendorong crit rate melewati ambang batas.</li>
            <li>Karena banyak skill baru adalah skill elemen multi-hit yang kuat, Blade of Judgement bukan lagi pasif damage BiS.</li>
          </ul>
          <p>Dengan adanya skill seperti <Tip>Tactical Adaptation</Tip> untuk pertarungan miniboss/boss di dungeon dan <Tip>Piercing Assault</Tip> / <Tip>Soul Breaker</Tip> sebagai pasif penambah damage utama untuk konten umum, class yang sudah sangat kuat untuk push stage ini jadi makin kuat.</p>
          <details>
            <summary>Tentang pet di Tier 4</summary>
            <p>Secara umum, kalau kamu F2P atau top up kecil, sebagian besar mata uang akan dipakai untuk <Tip>Nyxarchon</Tip>, karena secara umum ini fantomon DPS terbaik.</p>
            <p>Namun, ada build yang justru lebih bagus dengan <Tip>Pandarial</Tip> karena mengurangi cooldown skill untuk semua class di awal pertarungan, mirip charm <Tip>Rapid Cast</Tip> milik class Mage.</p>
            <p>Dipadukan dengan kecepatan Conqueror, kamu bisa bergerak lebih dulu dan mengambil keunggulan.</p>
            <p><Tip>Aegiswing</Tip> juga bisa dipakai untuk push stage kalau level fantomon kamu berdekatan. Selalu prioritaskan membawa salah satunya ke wujud dewasa dulu, baru pikirkan pet tambahan untuk build tertentu.</p>
          </details>
          <p>Prioritas gear juga berubah dibanding tier sebelumnya.</p>
          <p>Kalau kamu suka Blade of Judgement, tetap bisa dimainkan, ada beberapa skill dan pasif baru. Gaya mainnya tidak berubah dan masih cukup kuat di sebagian besar konten, tapi tersalip build lain.</p>
          <p>Kalau hanya memainkan build ini, tetap prioritaskan line physical mastery bersama crit rate, crit damage, attack, dan speed.</p>
          <p><strong>Satu-satunya perubahan adalah beralih dari Physical ke Elemental mastery untuk semua build lain</strong>, stat lain tetap sama. Karena affix gear bisa di-reroll lalu ditransfer, semua orang pada akhirnya akan mendapat gear yang diinginkan, meski butuh waktu.</p>
          <Tabs>
            <Tab label="Physical">
              <Build
                techniques={[
                  'Whirlwind Slash',
                  'Eclipse Slash',
                  'Sunset Sword',
                  'Blade Storm',
                ]}
                charms={[
                  'Blade of Judgment',
                  'Piercing Assault',
                  'Blade Siphon',
                  'Indomitable Will',
                ]}
              />
              <p><strong>Pet yang disarankan untuk build ini: <Tip>Nyxarchon</Tip> atau <Tip>Pandarial</Tip></strong></p>
            </Tab>
            <Tab label="Crucible">
              <Build
                techniques={[
                  'Flame Aura',
                  'Eclipse Slash',
                  'Blade Storm',
                  'Flickering Blade',
                ]}
                charms={[
                  'Blade of Judgment',
                  'Tactical Adaptation',
                  'Crit Mastery',
                  'Blazing Clash',
                ]}
              />
              <p><strong>Pet yang disarankan untuk build ini: <Tip>Pandarial</Tip></strong></p>
            </Tab>
            <Tab label="Push">
              <Build
                techniques={[
                  'Flash Fire',
                  'Darkness Descends',
                  'Flickering Blade',
                  'Blade Storm',
                ]}
                charms={[
                  'Piercing Assault',
                  'Tactical Adaptation',
                  'Soul Breaker',
                  'Indomitable Will',
                ]}
              />
              <p>Charm di sini berubah sesuai pertarungan, monster sedikit = <Tip>Tactical Adaptation</Tip>.</p>
              <p><strong>Pet yang disarankan untuk build ini: <Tip>Nyxarchon</Tip> atau <Tip>Pandarial</Tip></strong></p>
            </Tab>
            <Tab label="Push 2.0">
              <Build
                techniques={[
                  'Flash Fire',
                  'Doom Blade',
                  'Soul Piercer',
                  'Flickering Blade',
                ]}
                charms={[
                  'Piercing Assault',
                  'Tactical Adaptation',
                  'Soul Breaker',
                  'Indomitable Will',
                ]}
              />
              <p>Charm di sini berubah sesuai pertarungan, monster sedikit = <Tip>Tactical Adaptation</Tip>.</p>
              <p><strong>Pet yang disarankan untuk build ini: <Tip>Nyxarchon</Tip> atau <Tip>Pandarial</Tip></strong></p>
            </Tab>
            <Tab label="Guild Boss">
              <Build
                techniques={[
                  'Doom Blade',
                  'Flame Aura',
                  'Flickering Blade',
                  'Darkness Descends',
                ]}
                charms={[
                  'Crit Mastery',
                  'Blazing Clash',
                  'Tactical Adaptation',
                  'Piercing Assault',
                ]}
              />
              <p><strong>Pet yang disarankan untuk build ini: <Tip>Pandarial</Tip></strong></p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Ravager" icon="skills/classes/ravager.png">
          <p>Ravager membuka dua arah baru untuk jalur Duelist: <strong>damage Api area</strong> dengan <Tip>Solaris Storm</Tip> dan <strong>combo knock-up</strong> dengan <Tip>Tempest Edge</Tip>.</p>
          <p><Tip>Solaris Storm</Tip> memukul 3 hit Api di sekitar diri lalu 1 hit lagi dalam lingkaran 2 petak, dan punya Zero Initial CD sehingga bisa dipakai di giliran pertama. Ini skill pembersih monster terkuat yang didapat Ravager.</p>
          <p><Tip>Shadow End</Tip> sangat menonjol di konten dengan banyak monster lemah: teleport ke musuh, dan setiap kali mengalahkan target akan merapal ulang sendiri, hingga 4 kali tambahan per giliran.</p>
          <p><Tip>Night Curse</Tip> memberi Blood Source ke semua musuh dalam 2 petak. Musuh yang terkena Blood Source mengembalikan 3% damage yang diterima sebagai HP untuk <strong>penyerang</strong>, jadi seluruh tim mendapat lifesteal.</p>
          <Alert type="red" title="Catatan penting">
            <p><strong>Sebagian besar build tetap berpusat pada multi-hit</strong>: <Tip>Blade of Judgment</Tip> memberi Mark per instance damage, jadi technique multi-hit seperti <Tip>Whirlwind Slash</Tip>, <Tip>Sunset Sword</Tip>, dan <Tip>Solaris Storm</Tip> mengaktifkannya dengan sangat cepat.</p>
            <p><Tip>Tempest Edge</Tip> hanya aktif saat membuat musuh Airborne <strong>dari kondisi normal</strong>, jadi perlu ada <Tip>Hunter's Judgment</Tip> di set skill.</p>
            <p><Tip>Tactical Adaptation</Tip> menguntungkan di kedua kasus: musuh di sekitar sedikit maka damage naik, saat dikepung maka damage yang diterima berkurang.</p>
          </Alert>
          <Tabs>
            <Tab label="Clear stage">
              <Build
                techniques={['Hunter\'s Judgment', 'Solaris Storm', 'Whirlwind Slash', 'Sunset Sword']}
                charms={['Tactical Adaptation', 'Blazing Momentum', 'Tempest Edge', 'Blade of Judgment']}
              />
              <p><strong>Build clear stage utama Ravager.</strong> <Tip>Hunter's Judgment</Tip> menarik musuh ke depan dan membuat mereka melayang, mengaktifkan <Tip>Tempest Edge</Tip>, lalu <Tip>Whirlwind Slash</Tip>, <Tip>Sunset Sword</Tip>, dan <Tip>Solaris Storm</Tip> mengenai seluruh kelompok.</p>
              <p><Tip>Blazing Momentum</Tip> mengubah setiap crit menjadi tambahan satu instance damage Api yang menyebar 1 petak, jadi build ini butuh <strong>Crit Rate tinggi</strong>.</p>
              <p>Kalau sering mati di stage sulit, ganti <Tip>Tactical Adaptation</Tip> dengan <Tip>Indomitable Will</Tip> untuk nyawa tambahan.</p>
            </Tab>
            <Tab label="Single target">
              <Build
                techniques={['Air Break', 'Shattering Dance', 'Eclipse Slash', 'Hunter\'s Judgment']}
                charms={['Dominant Gaze', 'Scarlet Zeal', 'Blade of Judgment', 'Indomitable Will']}
              />
              <p><strong>Dipakai untuk boss dan miniboss.</strong> <Tip>Air Break</Tip> membuka dengan Armor Break 2 (mengurangi DEF 30%), lalu <Tip>Eclipse Slash</Tip> (6 hit) dan <Tip>Shattering Dance</Tip> (3 hit, menumpuk Riven Heart) memusatkan damage ke satu target.</p>
              <p><Tip>Dominant Gaze</Tip> menambah damage ke target yang HP-nya masih di atas 70%, sangat cocok untuk boss tebal di awal pertarungan. <Tip>Scarlet Zeal</Tip> menambah ATK setelah setiap technique, di 6 stack akan menaikkan ATK besar-besaran selama 2 giliran.</p>
              <p>Bisa mengganti <Tip>Hunter's Judgment</Tip> dengan <Tip>Night Curse</Tip> kalau tim butuh heal dari Blood Source.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Marauder" icon="skills/classes/marauder.png">
          <p>Marauder adalah tier di mana <strong>SPD dan damage Fisik multi-hit</strong> menjadi fokus utama.</p>
          <p><Tip>Raining Blades</Tip> memukul 4 hit di area 3×2, dan setiap 5% SPD kamu di atas target menambah 5% damage (maksimal 50%). <Tip>Shadowflash Dance</Tip> melancarkan 6 serangan, masing-masing teleport ke musuh acak, sangat kuat saat musuh tersebar.</p>
          <p><Tip>Sinseal</Tip> adalah alat lawan boss yang baru: memberi Hex Mark 1 giliran, saat habis target menerima tambahan True DMG sebesar 30% dari damage yang diterima selama ditandai.</p>
          <p>Untuk charm, <Tip>Razor Momentum</Tip> dan <Tip>Grim Pursuit</Tip> sama-sama aktif per hit Fisik, jadi makin banyak hit makin menguntungkan.</p>
          <Alert type="red" title="Catatan penting">
            <p><strong>Prioritaskan SPD</strong>: selain bergerak lebih awal, SPD juga langsung menambah damage <Tip>Raining Blades</Tip>.</p>
            <p><Tip>Razor Momentum</Tip> menumpuk hingga 20 stack Razor dalam satu giliran, setiap hit Fisik punya peluang 80% memberi 1 stack. Build yang penuh technique multi-hit akan cepat mencapai maksimal.</p>
            <p><Tip>Hellblood Frenzy</Tip> menambah damage di 3 giliran pertama, tapi setelahnya kamu menerima <strong>100% damage lebih banyak</strong> selama 3 giliran. Hanya pakai untuk pertarungan singkat yang pasti cepat selesai.</p>
          </Alert>
          <Tabs>
            <Tab label="Clear stage">
              <Build
                techniques={['Raining Blades', 'Shattering Dance', 'Eclipse Slash', 'Shadowflash Dance']}
                charms={['Indomitable Will', 'Blade of Judgment', 'Grim Pursuit', 'Razor Momentum']}
              />
              <p><strong>Semua technique adalah damage Fisik multi-hit</strong>: total 4 + 3 + 6 + 6 hit per rotasi. Setiap hit bisa mengaktifkan <Tip>Grim Pursuit</Tip> (40% memberi satu instance damage tambahan), menambah stack <Tip>Razor Momentum</Tip>, dan memberi Mark dari <Tip>Blade of Judgment</Tip>.</p>
              <p><Tip>Grim Pursuit</Tip> juga makin kuat saat HP musuh berkurang (maksimal +50%), jadi build ini sangat bagus untuk menghabisi.</p>
              <p><Tip>Indomitable Will</Tip> dipertahankan demi keamanan. Kalau sudah cukup tebal, bisa diganti <Tip>Piercing Assault</Tip> untuk menembus DEF.</p>
            </Tab>
            <Tab label="Boss">
              <Build
                techniques={['Sinseal', 'Eclipse Slash', 'Shattering Dance', 'Air Break']}
                charms={['Razor Momentum', 'Grim Pursuit', 'Blade of Judgment', 'Ruinblight']}
              />
              <p><strong>Buka dengan <Tip>Sinseal</Tip> lalu tumpahkan semua damage di giliran target ditandai</strong>, karena True DMG di akhir dihitung dari damage yang diterima target selama waktu itu.</p>
              <p><Tip>Air Break</Tip> memberi Armor Break 2 dan juga technique 1 hit, jadi mendapat bonus damage dari <Tip>Ruinblight</Tip>. <Tip>Ruinblight</Tip> juga 10% lebih kuat untuk setiap jenis Ailment/Debuff pada target (Armor Break, Riven Heart…).</p>
              <p>Perhatikan bahwa <Tip>Sinseal</Tip> punya cooldown 3 giliran, jadi taruh di urutan pertama skill.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Doomreaver" icon="skills/classes/compass/class-24.webp">
          <p>Doomreaver menggeser fokus ke <strong>eksekusi dengan Api</strong>: teleport ke target terlemah lalu menghabisinya.</p>
          <p><Tip>Ignition Strike</Tip> teleport ke sebelah musuh dalam 5 petak, memprioritaskan target dengan % HP terendah. <Tip>Starfire Annihilation</Tip> memberi 20% damage tambahan untuk setiap 10% HP target yang hilang, maksimal +200%, juga memprioritaskan target terlemah.</p>
          <p>Untuk gaya Fisik, <Tip>Void Slash</Tip> memukul 6 hit ke semua musuh dalam 2 petak di sekitar diri, technique area multi-hit terkuat di jalur ini.</p>
          <p>Charm baru condong ke bertahan hidup: <Tip>Ironclad</Tip> sangat mengurangi damage yang diterima di 2 giliran pertama, <Tip>Shadow Stealth</Tip> memulihkan HP dan memberi stealth selama 2 giliran.</p>
          <Alert type="red" title="Catatan penting">
            <p><strong>Urutan skill sangat penting</strong>: pakai technique area untuk menurunkan HP dulu, baru <Tip>Starfire Annihilation</Tip> dan <Tip>Ignition Strike</Tip> agar keduanya yang menghabisi.</p>
            <p><Tip>Ironclad</Tip> membantu selamat dari gelombang damage awal pertarungan, fase paling berbahaya bagi class jarak dekat yang harus menerjang ke tengah musuh.</p>
            <p><Tip>Piercing Assault</Tip> menembus tambahan 10% DEF untuk setiap buff yang kamu punya (maksimal 3), jadi makin banyak buff yang dijaga, makin kuat efeknya.</p>
          </Alert>
          <Tabs>
            <Tab label="Eksekusi Api">
              <Build
                techniques={['Sinseal', 'Hellfire Fist', 'Ignition Strike', 'Starfire Annihilation']}
                charms={['Indomitable Will', 'Piercing Assault', 'Starfire Edge', 'Ironclad']}
              />
              <p><Tip>Hellfire Fist</Tip> menurunkan HP satu baris musuh di depan, lalu <Tip>Starfire Annihilation</Tip> dan <Tip>Ignition Strike</Tip> otomatis mencari target terlemah untuk dihabisi. Pakai <Tip>Sinseal</Tip> pada target besar untuk tambahan True DMG.</p>
              <p>Build ini butuh <strong>Elemental Mastery</strong> alih-alih Physical Mastery, karena 3/4 technique adalah damage Api.</p>
              <p>Kalau kurang cepat, ganti <Tip>Starfire Edge</Tip> dengan <Tip>Temporal Swiftness</Tip> untuk menambah SPD dan peluang mengurangi cooldown.</p>
            </Tab>
            <Tab label="Area Fisik">
              <Build
                techniques={['Void Slash', 'Whirling Blades', 'Raining Blades', 'Shadowflash Dance']}
                charms={['Razor Momentum', 'Grim Pursuit', 'Blade of Judgment', 'Ironclad']}
              />
              <p><strong>Kalau kamu sudah membangun gear Fisik sejak Marauder</strong>, build ini memakai stat yang sama dan tetap kuat di konten banyak monster: <Tip>Void Slash</Tip> (6 hit di sekitar diri) dan <Tip>Whirling Blades</Tip> (4 hit area persegi) menggantikan technique single target.</p>
              <p>Bisa mengganti <Tip>Blade of Judgment</Tip> dengan <Tip>Shadow Stealth</Tip> kalau butuh heal tambahan dan cara menghindari jadi incaran.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Infernifer" icon="skills/classes/compass/class-28.webp">
          <Alert type="red" title="Class belum dirilis">
            <p>Infernifer adalah class tier 8 dari jalur ini dan <strong>belum ada di versi saat ini</strong>. Data skill diambil dari file game sehingga bisa berubah saat rilis. Build di bawah hanya sebagai gambaran awal.</p>
          </Alert>
          <p>Infernifer punya dua set alat yang jelas: <strong>Wind Orb</strong> dan <strong>Reaper Kegelapan</strong>.</p>
          <p>Jalur Wind Orb: <Tip>Tempest Call</Tip> membuat 4 Wind Orb, <Tip>Bladegale Conflux</Tip> punya peluang 50% membuat 3 lagi setiap kali memberi damage Angin, dan <Tip>Zephyr Cascade</Tip> membuat setiap serangan Wind Orb memantul ke musuh lain.</p>
          <p>Jalur Reaper: <Tip>Nethercrown</Tip> membawamu ke status Reaper selama 4 giliran (setiap musuh yang dikalahkan membuatnya aktif lebih cepat), selama itu <Tip>Crimson Harvest</Tip> mendapat tambahan 50% Lifesteal dan <Tip>Wraith Strike</Tip> memberi 50% damage lebih besar.</p>
          <Tabs>
            <Tab label="Wind Orb">
              <Build
                techniques={['Sinseal', 'Tempest Call', 'Skyfall Gale', 'Phantom Blitz']}
                charms={['Indomitable Will', 'Windless Lord', 'Bladegale Conflux', 'Zephyr Cascade']}
              />
              <p><Tip>Phantom Blitz</Tip> punya peluang 60% dirapal ulang jika SPD kamu lebih tinggi dari target, setiap hit juga bisa membuat Wind Orb tambahan lewat <Tip>Bladegale Conflux</Tip>, lalu <Tip>Windless Lord</Tip> melipatgandakan jumlah orb.</p>
              <p>Bisa mengganti <Tip>Indomitable Will</Tip> dengan <Tip>Zephyr Battle Zeal</Tip> (setiap Wind Orb menambah damage Technique, maksimal 10 stack) kalau tidak butuh nyawa kedua.</p>
            </Tab>
            <Tab label="Reaper">
              <Build
                techniques={['Crimson Harvest', 'Wraith Strike', 'Shadow Devour', 'Sinseal']}
                charms={['Nethercrown', 'Abyssal Shadowmark', 'Shadow Stealth', 'Shadowward']}
              />
              <p>Semua technique damage berelemen Kegelapan untuk memanfaatkan Reaper dan <Tip>Abyssal Shadowmark</Tip> (di 2 stack akan meledak ke area 1 petak).</p>
              <p><Tip>Shadow Stealth</Tip> membuatmu masuk Stealth di akhir giliran, dan <Tip>Shadowward</Tip> mengurangi damage yang diterima serta menghapus Debuff saat Stealth, membuat build ini tetap bertahan meski menerjang ke tengah musuh.</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
