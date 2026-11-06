import { Alert, Img, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Season, Primostar & Astral Pact: giữ được gì sau mỗi mùa',
  desc: 'Primostar, Astral Pact, Kingdom Shop và checklist cuối mùa.',
  order: 2,
  short: 'Season & Primostar',
  category: 'guide',
  cover: 'guides/season-upgrade.webp',
  icon: 'tooltips/Money_61.png',
  topic: 'season',
};

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
  ['Season 1 · Witching Hours', 'Mốc 5 → 480', [['128', 'F2P và nạp ít'], ['152', 'Nạp ít đến vừa'], ['176', 'Nạp vừa'], ['200', 'Nạp vừa đến nhiều'], ['230', 'Nạp nhiều']]],
  ['Season 2 · Crossed Paths', 'Mốc 505 → 1.880', [['800', 'F2P và nạp ít'], ['920', 'Nạp ít đến vừa'], ['1.060', 'Nạp ít và vừa: dừng ở đây'], ['1.200', 'Nạp nhiều'], ['1.280', 'Nạp nhiều: dừng ở đây']]],
  ['Season 3 · Finale of Chaos', 'Mốc 1.940 → 4.680', [['2.880', 'F2P và nạp ít'], ['3.160', 'F2P: dừng ở đây'], ['3.300', 'Nạp ít đến vừa'], ['3.590', 'Nạp ít: dừng ở đây'], ['3.740', 'Nạp vừa đến nhiều'], ['3.890', 'Nạp vừa: dừng ở đây'], ['4.040', 'Nạp rất nhiều']]],
  ['Season 4 · Bizarre Spectacle', 'Mốc 4.770 → 11.800', [['7.080', 'F2P'], ['7.560', 'Nạp ít'], ['8.040', 'Nạp vừa'], ['9.080', 'Nạp vừa đến nhiều'], ['10.200', 'Nạp nhiều']]],
  ['Season 5 · Frostfire Anthem', 'Mốc 12.040 → 24.520', [['15.480', 'F2P và nạp ít'], ['16.280', 'Nạp vừa bắt đầu từ đây'], ['17.080', 'Nạp vừa'], ['17.960', 'Nạp vừa, class yếu hơn'], ['18.840', 'Nạp vừa đến nhiều'], ['19.800', 'Nạp nhiều bắt đầu từ đây'], ['20.760', 'Nạp nhiều'], ['22.840', 'Top server']]],
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
  ['Aeperis', 'S6', 'Chưa có tên tiếng Anh', '46.800 (chưa đủ dữ liệu)'],
];

export default function Page() {
  return (
    <>
      <p>Mỗi mùa (season) kéo dài khoảng 3 tháng. Khi mùa kết thúc, <strong>Season Level bị reset</strong>, nhưng phần lớn công sức của bạn được giữ lại, và quan trọng nhất là được đổi thành <strong>Primostar</strong>, loại điểm dùng để mở các chỉ số cộng <strong>vĩnh viễn</strong> trong Astral Pact.</p>
      <p>Bài này giải thích Primostar đến từ đâu, Astral Pact cho gì, nên đặt mục tiêu bao nhiêu, mua gì trong Kingdom Shop và cần làm gì trước và sau khi mùa kết thúc.</p>
      <p><Img src="guides/season-upgrade.webp" alt="sword x staff astral pact" /></p>

      <hr />

      <h2 id="keep-reset">Cái gì giữ lại, cái gì mất</h2>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Được giữ lại</th><th>Bị reset hoặc mất</th></tr></thead>
          <tbody>
            <tr><td>Relic, Fantomon, skill, companion và số sao của chúng</td><td>Season Level: level về mức cap của mùa, relic về mức sàn (+22 ở Season 5, +25 ở Season 6). Phần vượt được đổi thành Primostar.</td></tr>
            <tr><td>Primostar và toàn bộ chỉ số Astral Pact</td><td>Nhiệm vụ Season Trial và huy hiệu mùa chưa hoàn thành</td></tr>
            <tr><td>Bonus Gear Rating, tính theo bộ đồ bạn <strong>đang mặc</strong> lúc mùa kết thúc</td><td>Battle Pass của mùa</td></tr>
            <tr><td>Dòng phụ trang bị bạn trả Divinecraft Stone để mang theo</td><td>Kỷ lục dungeon và Fantasia Ascent</td></tr>
            <tr><td>Năng lượng Grand Treasure Hunt</td><td>EXP và Stamina đang chờ trong Reward Retrieval</td></tr>
            <tr><td>EXP trong Giường (phần vượt giới hạn được đổi thành Primostar)</td><td>Giao dịch mảnh trang bị mùa cũ ở Trading House</td></tr>
            <tr><td></td><td>Điểm Guild Clash (guild chuyển sang League mới), gem mùa cũ (nên tái chế thành <Tip>Rolla</Tip>)</td></tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="primostar">Primostar đến từ đâu</h2>
      <p>Khi mùa kết thúc, game cộng tất cả tiến độ <strong>vượt cap</strong> trong mùa (Season Level) thành một điểm tiến độ, chia cho một hệ số rồi làm tròn xuống, sau đó cộng thêm một lượng cố định:</p>
      <ul>
        <li>Mỗi <strong>Season Character Level</strong> tăng thêm</li>
        <li>Mỗi level <strong>cường hoá trang bị</strong> mùa (cộng dồn 5 món)</li>
        <li>Mỗi level <strong>skill</strong> mùa (cộng dồn 8 ô skill)</li>
        <li>Mỗi level <strong>Fantomon</strong> mùa</li>
        <li>Mỗi level <strong>relic</strong> mùa</li>
      </ul>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Mùa</th><th className="num">Nhân vật</th><th className="num">Trang bị</th><th className="num">Skill</th><th className="num">Fantomon</th><th className="num">Relic</th><th className="num">Điểm / 1 Primostar</th><th className="num">Cố định</th></tr></thead>
          <tbody>{SCORE.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} className={i ? 'num' : ''}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <p className="muted">Các cột Nhân vật đến Relic là số điểm nhận được cho mỗi level tăng thêm.</p>
      <p>Hai điều rút ra từ bảng:</p>
      <ul>
        <li><strong>Relic cho nhiều điểm nhất</strong> trên mỗi level ở mọi mùa, sau đó là trang bị. Skill cho ít nhất.</li>
        <li>Hệ số quy đổi giảm mạnh qua từng mùa (100 → 3), nên Primostar ở mùa sau nhiều hơn hẳn mùa trước. Đây là lý do mốc Astral Pact cũng tăng rất nhanh.</li>
      </ul>
      <p>Season Level chỉ mua được ở bậc cao nhất của mùa (vd. Ethereal III ở Season 6), và mở dần theo Season Character Level của bạn.</p>

      <hr />

      <h2 id="astral-pact">Astral Pact</h2>
      <p>Primostar là <strong>tổng cộng dồn qua mọi mùa</strong>. Mỗi khi tổng đạt một mốc, bạn mở được một chỉ số cộng vĩnh viễn. Các mốc lặp theo chu kỳ 8:</p>
      <table className="data-table">
        <thead><tr><th>Thứ tự trong chu kỳ</th><th>Chỉ số</th><th className="num">Mỗi mốc</th></tr></thead>
        <tbody>{PACT.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td className="num">{r[2]}</td></tr>)}</tbody>
      </table>
      <p>Ở Season 5 có thêm một số mốc <strong>+5% sản lượng</strong> cho Gold Mine, Ironstone Mine, Sandstone Mine và Monster Cave, thay vào vị trí của Gem Drop.</p>
      <p>Tối đa hiện tại: <strong>+50% 2× Rating Reward Rate</strong> và <strong>+75% Gear Drop Ascension Rate</strong> cho mọi dungeon. Xem bài Daily Dungeon để biết cái nào quan trọng hơn.</p>

      <h3 id="goals">Nên đặt mục tiêu bao nhiêu Primostar?</h3>
      <p>Mức người chơi lâu năm thường nhắm tới vào cuối mỗi mùa, chia theo mức nạp (tổng cộng dồn):</p>
      <Tabs>
        {GOALS.map(([name, range, rows]) => (
          <Tab label={name.split(' · ')[0]} key={name}>
            <p><strong>{name}</strong> <span className="muted">({range})</span></p>
            <table className="data-table">
              <thead><tr><th className="num">Tổng Primostar</th><th>Phù hợp với</th></tr></thead>
              <tbody>{rows.map(([n, who]) => <tr key={n}><td className="num">{n}</td><td>{who}</td></tr>)}</tbody>
            </table>
          </Tab>
        ))}
      </Tabs>
      <Alert title="“Dừng ở đây” nghĩa là gì?">
        <p>Qua mốc đó, mỗi Primostar thêm tốn rất nhiều tài nguyên mà chỉ đổi được khoảng 1% chỉ số. Nếu bạn nạp ít hoặc vừa, dừng đúng mốc rồi dồn tài nguyên sang thứ giữ lại được (relic, Fantomon) sẽ hiệu quả hơn.</p>
      </Alert>

      <hr />

      <h2 id="kingdom-shop">Kingdom Shop</h2>
      <p>Mỗi kingdom có một shop riêng, trả bằng tiền tệ của kingdom đó. Shop có <strong>4 bậc</strong>: bậc 1 mở khi tới kingdom, bậc 2, 3, 4 mở khi bạn đã <strong>tiêu tổng cộng 3.500, 8.000 và 13.000</strong> tiền của shop đó. Hàng tính theo tài khoản và <strong>không tự làm mới</strong>.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Kingdom</th><th>Mùa</th><th>Tiền tệ</th><th className="num">Mua hết hàng có giới hạn</th></tr></thead>
          <tbody>{SHOPS.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="num">{r[3]}</td></tr>)}</tbody>
        </table>
      </div>
      <h3 id="shop-priority">Nên mua gì trước</h3>
      <ol>
        <li><strong>Các ô giảm giá 90% và 70%</strong>: <Tip>Stellatie</Tip>, <Tip>Refined Ore</Tip>, Covenite, <Tip>Mythic Auroral Badge</Tip>. Ô giảm 90% chỉ tốn 10% giá của chính món đó ở ô bên cạnh, rẻ nhất shop.</li>
        <li><strong>Covenite</strong> (bậc 3 và 4): Goddess Prayer ra skill của <strong>đúng class hiện tại</strong>, giá trị hơn Stellatie.</li>
        <li><strong>Auroral Badge</strong> các loại (đều đang giảm giá) để quay relic gacha.</li>
        <li><Tip>Lucky Ticket</Tip> và <Tip>Gateway Key</Tip>: mỗi bậc chỉ có 1 cái.</li>
        <li>Chìa khoá bản đồ của kingdom (Withering Potion, Magic Drill…) nếu bạn còn chướng ngại chưa phá.</li>
        <li>Visage (trang trí) tuỳ sở thích.</li>
        <li><strong>Quà companion không giới hạn</strong>: dùng làm chỗ tiêu tiền thừa khi đã mua hết hàng có giới hạn.</li>
      </ol>
      <p>Mua những món giảm giá trước cũng giúp mở bậc shop nhanh hơn, vì số tiền bạn <em>thực trả</em> được tính vào tiến độ mở bậc.</p>

      <h3 id="season-shop">Season Shop</h3>
      <p>Season Shop trả bằng <strong>Fatum Sigil</strong> và <strong>chỉ bán đồ trang trí</strong> (Skill Chroma, Visage vũ khí, ngoại hình tượng Nữ thần…). Không ảnh hưởng sức mạnh, nên cứ mua thứ bạn thích. Gameplay Rating SSS cuối mùa cho 1.200 Fatum Sigil.</p>

      <hr />

      <h2 id="timeline">Lịch một mùa</h2>
      <table className="data-table">
        <thead><tr><th>Ngày</th><th>Sự kiện</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Kingdom mới và raid đầu tiên mở. Cap level cao hơn và tier class mới.</td></tr>
          <tr><td>14</td><td>Raid thứ hai. <strong>Season Level bắt đầu được tính.</strong></td></tr>
          <tr><td>15</td><td>Bản đồ mùa mới mở.</td></tr>
          <tr><td>28, 42, 56, 70</td><td>Raid thứ ba đến thứ sáu.</td></tr>
          <tr><td>31</td><td>Relic gacha thứ hai.</td></tr>
          <tr><td>61</td><td>Relic gacha thứ ba.</td></tr>
          <tr><td>84</td><td>Raid cuối mùa, có độ khó Abyss.</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="season-end">Checklist cuối mùa</h2>
      <h3 id="last-2-weeks">2 tuần cuối</h3>
      <ul>
        <li><strong>Chọn mục tiêu Primostar</strong> trong bảng trên và lên kế hoạch đạt nó. Astral Pact là thứ duy nhất của mùa bạn giữ mãi.</li>
        <li><strong>Ngừng tiêu, bắt đầu để dành</strong> dụng cụ Material Realm, Speed-Up và Temporal Crystal. Sang mùa sau chúng có giá trị hơn (tượng Nữ thần mới, rank cao hơn).</li>
        <li>Stamina chỉ tự hồi tới <strong>300</strong> (giữ được tối đa 1.200 từ phần thưởng). Để nó đầy 300 trước khi hết mùa, nhưng tiêu phần sắp tràn.</li>
        <li><strong>Đẩy Gameplay Rating</strong>: hạng dungeon hằng ngày tốt nhất, tầng Fantasia Ascent, hạng Arena, Nexus và độ khám phá bản đồ đều được tính. SSS cần <strong>27.200</strong> điểm, thưởng 80 Stellatie, 800 Rare Auroral Badge, 80 Bond Trinket và 1.200 Fatum Sigil.</li>
        <li>Khám phá <strong>100% bản đồ mùa</strong>: tới 3.000 điểm Gameplay, cộng thêm thưởng giảm dần mỗi ngày trễ hạn.</li>
        <li>F2P: chỉ tiêu <Tip>Dawnium</Tip> vào <strong>lượt dungeon trước, rồi tới quyên góp Guild</strong>, phần còn lại để dành cho mùa mới.</li>
        <li>Người nạp: tiêu vào thứ <strong>giữ lại qua mùa</strong> (relic, rồi Fantomon, rồi skill). Gói Season Level mua vào cuối mùa cho ít giá trị nhất.</li>
        <li><strong>Không mua Battle Pass hay Monthly Pass</strong> trong những ngày cuối: chỉ mua đầu mùa mới đủ giá trị.</li>
        <li>Hoàn thành <strong>Season Trial</strong> và huy hiệu mùa.</li>
        <li>Chọn trang bị Mythic trở lên muốn giữ dòng phụ và để dành <strong>Divinecraft Stone</strong>: 300 cho 1 dòng, 1.200 cho 2 dòng, 3.200 cho 3 dòng, 8.000 cho 4 dòng.</li>
      </ul>
      <h3 id="last-3-days">3 ngày cuối</h3>
      <ul>
        <li><strong>Mặc bộ đồ mùa tốt nhất và giữ nguyên</strong>. Gear Rating (D đến SSS) tính theo bộ đang mặc lúc hết mùa, cho tới <strong>+5% HP, ATK, DEF, SPD</strong> và <strong>+2% DMG RES, DMG Boost</strong>.</li>
        <li><strong>Bán mảnh trang bị</strong> ở Trading House: hết mùa là không đăng bán được nữa.</li>
        <li>Nhận hết <strong>Reward Retrieval</strong> (Akane) và các level Battle Pass đã đạt.</li>
        <li>Relic hay Fantomon nào sắp lên sao thì làm nốt: sao được giữ lại.</li>
        <li>Tiêu hết tiền sự kiện của các sự kiện kết thúc cùng mùa.</li>
      </ul>
      <h3 id="last-36h">36 giờ cuối</h3>
      <ul>
        <li><strong>Ngừng nhận EXP từ Giường</strong> và tắt Quick Claim. Sang mùa mới, sau khi thắp tượng mới, EXP này giá trị hơn. Phần vượt giới hạn không mất mà được đổi thành Primostar.</li>
        <li><strong>Trước 1 ngày</strong>, ngừng nhận thưởng dungeon và giữ <strong>4 lượt</strong> (mức tối đa). Reset ngày cộng thêm 2, nên bạn vào mùa mới với <strong>6 lượt</strong>.</li>
        <li>Giữ lại mọi Speed-Up và Temporal Crystal. Năng lượng Grand Treasure Hunt được giữ, không cần đốt.</li>
      </ul>
      <h3 id="launch-day">Ngày đầu mùa mới (làm theo thứ tự)</h3>
      <ol>
        <li>Nhận <strong>thưởng mùa</strong>: Primostar, thưởng xếp hạng, Arena, Guild Clash.</li>
        <li><strong>Tiêu hết Primostar</strong> vào Astral Pact.</li>
        <li>Thắp tượng mới, nhận EXP Giường, đẩy level hết mức <strong>trước khi</strong> dùng Speed-Up.</li>
        <li>Giờ mới mua Monthly Pass và Battle Pass mới.</li>
        <li>Quay relic trong ngày.</li>
        <li>Chỉ dùng Speed-Up để chạm mốc mở khoá (tier class mới, Fantomon Adult).</li>
        <li><strong>Tái chế gem mùa cũ</strong> thành Rolla và chuyển các dòng phụ đã giữ sang trang bị mới.</li>
        <li>Dùng 6 lượt dungeon đã để dành.</li>
        <li>Giữ lại một ít Auroral Badge: relic gacha thứ hai mở khoảng ngày 31, thứ ba khoảng ngày 61.</li>
      </ol>

      <p className="source">Số liệu Primostar, Astral Pact, Kingdom Shop và checklist cuối mùa tổng hợp từ Purrwikimania và Sword x Staff Compass.</p>
    </>
  );
}
