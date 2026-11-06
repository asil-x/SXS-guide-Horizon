import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Hướng dẫn chơi Knight',
  desc: 'Tank tuyến đầu, bảo vệ cả đội.',
  order: 2,
  short: 'Knight',
  category: 'class',
  cover: 'skills/classes/knight.png',
};

export default function Page() {
  return (
    <>
      <p>Knight là tuyến đầu chuyên trách của Sword x Staff, lối chơi xoay quanh việc <strong>đỡ đòn và chuyển chúng thành sát thương phản lại thông qua</strong> <Tip>Rebound</Tip>, đồng thời có thể chuyển sang lối Glass Cannon khi đánh boss nếu đã có người khác lo tank.</p>
      <ProsCons id="pros-cons" title="Điểm mạnh & điểm yếu của Knight">
        <Pro>Rebound cực kỳ hiệu quả trước kẻ địch đánh nhiều hit và các bầy quái AoE</Pro>
        <Pro>Một trong những class an toàn nhất để vượt màn chênh lệch lực chiến lớn, nhờ đỡ đòn ổn định và nhiều lớp phòng thủ</Pro>
        <Pro>Lựa chọn Glass Cannon cho phép chuyển sang build DPS ở những nội dung đã có người tank</Pro>
        <Pro>Ở các tier cao có rất nhiều cách bảo vệ cả đội: Taunt, khiên cho đồng minh yếu máu, giảm sát thương diện rộng và gánh đòn thay đồng minh</Pro>
        <Con>Thứ tự ưu tiên chỉ số rắc rối hơn so với các class DPS thuần</Con>
        <Con>Build tank thuần gây sát thương chậm, vì phần lớn sát thương đến từ phản đòn nên phụ thuộc vào việc kẻ địch có đánh bạn hay không</Con>
        <Con>Glass Cannon cần điều kiện thuận lợi mới dùng an toàn: phải có tank riêng hoặc quái gây áp lực thấp</Con>
      </ProsCons>
      <Alert title="Hãy thử nghiệm build!">
        <p><strong>Hãy nhớ đây chỉ là khung mẫu</strong> để bạn điều chỉnh theo trang bị, lối chơi, skill và Fantomon của mình.</p>
      </Alert>

      <hr />

      <h2 id="best-stats">Chỉ số tốt nhất</h2>
      <p>Knight có hai thứ tự ưu tiên chỉ số khác nhau, tuỳ vào build bạn dùng.</p>
      <p>Với Reflect Tank, sát thương của bạn tăng theo việc đỡ đòn ổn định. <strong>Block %</strong> và <strong>Block Rate</strong> là bắt buộc để build hoạt động, còn <strong>Physical Mastery</strong> quyết định lượng sát thương mà <Tip>Rebound</Tip> phản lại kẻ địch.</p>
      <p>Sau đó, <strong>Defense %</strong>, <strong>Flat Defense</strong>và kháng nguyên tố giúp bạn trụ lâu hơn nữa.</p>
      <p>Với build <strong>Glass Cannon</strong>, hãy xây chỉ số như mọi DPS vật lý khác. <strong>Physical Mastery</strong> trước, sau đó <strong>Crit Rate</strong> và <strong>Crit Damage</strong>, tiếp theo là <strong>Attack %</strong> và <strong>Flat Attack</strong>.</p>
      <p>Vài lưu ý áp dụng cho cả hai build:</p>
      <ul>
        <li>Damage Increase và Damage Reduction là chỉ số mạnh nhưng chủ yếu đến từ các hệ thống ngoài trang bị, đừng cố săn chúng trên trang bị</li>
        <li>Elemental Aegis là chỉ số phòng thủ mạnh, nhưng cũng chủ yếu đến từ hệ thống khác, nên không cần nhắm tới trên trang bị</li>
        <li>Effect Hit và Effect Resistance hiện ít giá trị, không đáng ưu tiên hơn các chỉ số cốt lõi khác</li>
        <li>Reflect Tank không cần Crit Resistance. Đòn đã bị đỡ thì không thể chí mạng, nên đầu tư vào Block hiệu quả hơn</li>
      </ul>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p><Tip>Nyxarchon</Tip> là lựa chọn tốt nhất cho build <strong>Glass Cannon</strong> nhờ có thêm ô charm và chỉ số gốc cao hơn.</p>
      <p>Với tank thật sự, <Tip>Armopi</Tip> là pet mặc định, vì lớp khiên thêm (và buff DEF) rất tốt cho mọi đội hình phòng thủ. Nếu quay xui, <Tip>Boaro</Tip> có thể dùng tạm cho tới khi có <Tip>Armopi</Tip>.</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companion cho chỉ số bị động ở các mốc cấp nhất định, nên hãy tập trung nâng vài companion có lợi trực tiếp cho class lên cấp 50 trước, rồi mới nâng hết.</p>
      <p><strong>MỌI CLASS đều được lợi từ DMG Boost và Reduction</strong> để vừa tăng sát thương vừa tăng khả năng sống sót.</p>
      <p>Với build <strong>Reflect Tank</strong>, ưu tiên companion cho <strong>Block Rate</strong> như <Tip>Braulio</Tip>, <Tip>Darkness</Tip> hoặc <Tip>Mayoi</Tip>.</p>
      <p>Với build <strong>Glass Cannon</strong>, ưu tiên <strong>Attack</strong> và <strong>Physical Mastery</strong> để giữ sát thương ở mức cạnh tranh. <Tip>Akane</Tip>, <Tip>Hermes</Tip>, <Tip>Jiangwang</Tip> và <Tip>Ophelia</Tip> là lựa chọn tốt ở đây.</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="Bậc Gem">
        <p>Mình lấy gem T10 làm ví dụ, nhưng <strong>bậc càng cao thì chỉ số càng tốt</strong>. Gem có từ T1 tới T15.</p>
      </Alert>
      <p><Tip>T10 Obsidian</Tip> tốt cho mọi class, vì ai cũng cần thêm sát thương dù chơi kiểu gì.</p>
      <p><Tip>T10 Moonstone</Tip> cũng khá phổ biến với mọi class để tăng khả năng sống sót.</p>
      <p>Với Knight, <Tip>T10 Sapphire</Tip> là lựa chọn tuyệt vời để tăng DEF, còn <Tip>T10 Beryl</Tip> giúp có thêm HP.</p>
      <p>Nếu đi build glass cannon, chỉ cần tập trung gem tấn công như <Tip>T10 Ruby</Tip> và <Tip>T10 Amethyst</Tip>.</p>

      <hr />

      <h2 id="builds">Builds</h2>
      <Tabs big>
        <Tab label="Warrior" icon="skills/classes/warrior.png">
          <p>Đầu game bạn bị giới hạn bởi số technique có được, nhưng Warrior có lựa chọn tốt cho cả AoE lẫn đơn mục tiêu ngay từ đầu.</p>
          <p><strong>Block Rate mạnh bất ngờ ở giai đoạn này</strong>, đầu tư sớm sẽ khiến bạn gần như bất khả xâm phạm ở nhiều nội dung so với Mage.</p>
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
              <p><strong>Build AoE mạnh, cân cả sát thương lẫn khả năng sống sót.</strong></p>
              <p>Đổi <Tip>Blade Tempest</Tip> sang <Tip>Strength Rules</Tip> nếu đánh kẻ địch kháng gió.</p>
              <p>Với nội dung dễ hơn, bỏ <Tip>Gravity Pull</Tip> và <Tip>Blade of Lament</Tip>, thay bằng lựa chọn tấn công hơn.</p>
              <p><em>Quan trọng: chỉ bỏ <Tip>Blade of Lament</Tip> nếu khả năng sống sót không thành vấn đề.</em></p>
              <p>Block Rate rất mạnh, nhưng nếu thiếu sát thương bạn có thể đổi <Tip>Block Awareness</Tip> sang <Tip>Counter Blade</Tip>, nhất là khi đánh cận chiến.</p>
            </Tab>
            <Tab label="Đơn mục tiêu">
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
              <p><strong>Build đơn mục tiêu, tập trung vào sát thương ổn định.</strong></p>
              <p>Dùng chung bộ charm với build AoE, nên dễ chuyển qua lại tuỳ nội dung bạn đang chơi.</p>
              <p>Với nội dung dễ hơn, có thể bỏ <Tip>Blade of Lament</Tip>, thay bằng lựa chọn tấn công hơn.</p>
              <p><em>Quan trọng: chỉ bỏ <Tip>Blade of Lament</Tip> nếu khả năng sống sót không thành vấn đề.</em></p>
              <p>Block Rate rất mạnh, nhưng nếu thiếu sát thương bạn có thể đổi <Tip>Block Awareness</Tip> sang <Tip>Counter Blade</Tip>, nhất là khi đánh cận chiến.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Knight" icon="skills/classes/knight.png">
          <p>Knight mang tới người bạn thân mới của bạn: <Tip>Rebound</Tip>, chuyển các lần đỡ đòn thành sát thương phản lại. Đây là lúc class bắt đầu vận hành đúng như thiết kế.</p>
          <p>Đây cũng sẽ là build chính cho hầu hết nội dung.</p>
          <Alert type="red" title="LƯU Ý QUAN TRỌNG">
            <p><strong>Nội dung đánh nhóm</strong>: <Tip>Heart of Challenge</Tip> là bắt buộc với Reflect Tank khi đánh party. Không có nó bạn sẽ mất kiểm soát việc ai đang đánh mình, và <Tip>Rebound</Tip> kích hoạt kém ổn định hơn.</p>
            <p><strong>Block Rate giờ là tối quan trọng</strong>: Sát thương phụ thuộc vào việc đỡ đòn ổn định. Hãy đầu tư vào nó qua trang bị và charm.</p>
            <p><strong>Physical Mastery</strong>: Cách chính để <Tip>Rebound</Tip> tăng sát thương phản lại. Đừng bỏ qua chỉ số này trên trang bị, kể cả ở build tank.</p>
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
              <p><strong>Trụ vững trước đòn đánh nhờ đỡ đòn ổn định, rồi để <Tip>Rebound</Tip> phản sát thương đó lại.</strong></p>
              <p>Mỗi lần đỡ đòn kích hoạt <Tip>Rebound</Tip> một lần, nên build này đặc biệt mạnh trước đòn đánh nhiều hit, bầy quái AoE và kẻ địch tấn công liên tục.</p>
              <p>Một skill đánh 5 hit sẽ kích hoạt <Tip>Rebound</Tip> 5 lần riêng biệt.</p>
              <p><strong>Đổi tuỳ tình huống:</strong></p>
              <ul>
                <li><Tip>Valor Surge</Tip>: Buff và giải hiệu ứng. Mạnh cả khi solo lẫn đánh nhóm nhưng không bắt buộc</li>
                <li><Tip>Heart of Challenge</Tip>: Khiêu khích diện rộng, bắt buộc khi đánh nhóm, trừ khi bạn chơi build glass cannon</li>
                <li><Tip>Heavy Impact</Tip>: Sát thương bùng nổ cho boss và PvP</li>
                <li><Tip>Whirlwind Slash</Tip>: Thêm DPS diện rộng</li>
                <li><Tip>Boiling Bloodlust</Tip>: Tăng DPS, không bắt buộc</li>
              </ul>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Paladin" icon="skills/classes/paladin.png">
          <p>Nâng class lên Paladin mở rộng bộ kỹ năng đáng kể và mở ra build <strong>Glass Cannon</strong>, một lựa chọn khả thi cho nội dung đánh boss.</p>
          <p>Reflect Tank vẫn là build tổng quát mạnh nhất, nhưng giờ bạn có thể linh hoạt đổi hướng tuỳ yêu cầu của trận đấu.</p>
          <Alert type="red" title="LƯU Ý QUAN TRỌNG">
            <p><strong>Nội dung đánh nhóm</strong>: <Tip>Heart of Challenge</Tip> là bắt buộc với Reflect Tank khi đánh party. Không có nó bạn sẽ mất kiểm soát việc ai đang đánh mình, và <Tip>Rebound</Tip> kích hoạt kém ổn định hơn.</p>
            <p><strong>Điều kiện dùng Glass Cannon</strong>: Chỉ chuyển sang build này khi đã có tank riêng, hoặc khi sát thương nhận vào đủ thấp để không phải lo sống sót.</p>
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
              <p><strong>Đổi tuỳ tình huống:</strong></p>
              <ul>
                <li><Tip>Valor Surge</Tip>: Buff và giải hiệu ứng. Mạnh cả khi solo lẫn đánh nhóm nhưng không bắt buộc</li>
                <li><Tip>Heart of Challenge</Tip>: Khiêu khích diện rộng, bắt buộc khi đánh nhóm, thay leap hoặc shield bằng skill này</li>
                <li><Tip>Desperate Protection</Tip>: Khiên khẩn cấp, thay thế cho <Tip>Guardian Ring</Tip></li>
                <li><Tip>Lunarwater Threads</Tip>: Công cụ kéo kẻ địch đánh xa</li>
                <li><Tip>Star Shattering Slash</Tip> / <Tip>Heavy Impact</Tip>: Sát thương bùng nổ cho boss và PvP</li>
                <li><Tip>Whirlwind Slash</Tip>: Thêm DPS diện rộng</li>
                <li><Tip>Boiling Bloodlust</Tip>: Tăng DPS, không bắt buộc</li>
                <li><Tip>Counter Blade</Tip>: Thay thế sớm cho <Tip>Rebound</Tip>, tăng theo Attack. Vẫn có thể dùng cùng <Tip>Rebound</Tip> trong đội hình thiên tank</li>
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
              <p><strong>Build sát thương boss khi không cần lo sống sót.</strong> Dùng khi đã có tank riêng hoặc sát thương nhận vào đủ thấp để không cần tank.</p>
              <p>Tập trung hoàn toàn vào tối đa tổng sát thương qua buff và debuff. Ở các trận boss tính sát thương trong số lượt cố định, build này vượt trội hẳn so với Reflect Tank.</p>
              <p><strong>Đổi tuỳ tình huống:</strong></p>
              <ul>
                <li><Tip>Boiling Bloodlust</Tip>: Tăng DPS, không bắt buộc, mạnh hơn ở bậc này vì chỉ số gốc đã cao hơn</li>
                <li><Tip>Guardian Ring</Tip>: Chỉ đáng dùng nếu bạn đã có <Tip>Defensive Assault</Tip></li>
                <li><Tip>Defensive Assault</Tip>: Tạo cộng hưởng với <Tip>Guardian Ring</Tip></li>
                <li><Tip>Feline Dance</Tip>: Tăng Speed để có thêm lượt</li>
                <li><Tip>Blade of Lament</Tip>: Hút máu nếu cần thêm chút an toàn</li>
              </ul>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Guardian" icon="skills/classes/guardian.png">
          <p>Guardian là bậc Knight bắt đầu có <strong>sát thương Nước và vòng lặp khiên</strong>: vừa giữ khiên để tăng sát thương, vừa biến lúc khiên vỡ thành một đợt phản công.</p>
          <p><Tip>Swirling Blade</Tip> chuyển 20% sát thương gây ra thành khiên (tối đa 50% Max HP), còn <Tip>Seismic Tide</Tip> là đòn Nước diện rộng 2 ô quanh bản thân. Cùng <Tip>Guardian Ring</Tip>, bạn gần như lúc nào cũng có khiên trên người.</p>
          <p>Ở hướng tank thuần, <Tip>Hamper Strike</Tip> gây Taunt từ xa (vùng 2 ô quanh ô chọn) và <Tip>Oath of Vigil</Tip> gánh 50% sát thương cho adventurer đồng minh yếu máu nhất.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><Tip>Defensive Assault</Tip> chỉ tăng ATK <strong>khi đang có khiên</strong>, nên hãy giữ <Tip>Guardian Ring</Tip> và <Tip>Swirling Blade</Tip> trong bộ skill nếu dùng nó.</p>
            <p><Tip>Ripple Impact</Tip> kích hoạt khi khiên bị phá hoàn toàn: gây sát thương Nước quanh bản thân và 100% gây 3 tầng Cold. Khiên vỡ không còn là thiệt hại mà thành một đòn đánh.</p>
            <p><Tip>Holy Aegis</Tip> tăng cả DEF lẫn độ dày của khiên dựa trên DEF, rất đáng cân nhắc nếu bạn thiên về phòng thủ.</p>
          </Alert>
          <Tabs>
            <Tab label="Khiên tấn công">
              <Build
                techniques={['Guardian Ring', 'Swirling Blade', 'Seismic Tide', 'Star Shattering Slash']}
                charms={['Block Awareness', 'Defensive Assault', 'Ripple Impact', 'Pursuit of Victory']}
              />
              <p><strong>Build chính của Guardian.</strong> <Tip>Guardian Ring</Tip> và <Tip>Swirling Blade</Tip> duy trì khiên để <Tip>Defensive Assault</Tip> luôn có hiệu lực; khi khiên vỡ thì <Tip>Ripple Impact</Tip> phản công và gây Cold.</p>
              <p><Tip>Pursuit of Victory</Tip> tăng sát thương lên kẻ địch đang dính Ailment/Debuff, và <Tip>Block Awareness</Tip> giữ Block Rate cao để đỡ đòn ổn định như các bậc trước.</p>
            </Tab>
            <Tab label="Tank đội">
              <Build
                techniques={['Hamper Strike', 'Guardian Ring', 'Light Sword Array', 'Raging Maelstrom']}
                charms={['Soul Protection', 'Oath of Vigil', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>Dùng khi đi cùng đội và bạn là người hứng đòn.</strong> <Tip>Hamper Strike</Tip> Taunt cả cụm kẻ địch, <Tip>Iron Will</Tip> giảm sát thương từ những kẻ đang bị Taunt, còn <Tip>Raging Maelstrom</Tip> kéo kẻ địch lại gần.</p>
              <p><Tip>Light Sword Array</Tip> được thi triển trước trận và phản đòn mỗi lần bạn bị đánh. <Tip>Soul Protection</Tip> biến 50% HP thành khiên ngay đầu trận.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Templar" icon="skills/classes/templar.png">
          <p>Templar đẩy Knight thành <strong>tank bảo vệ đội</strong> đúng nghĩa: thêm cách gây Taunt, giảm sát thương cho cả đội và biến hồi máu thành khiên.</p>
          <p><Tip>Last Stand</Tip> di chuyển tới mục tiêu trong 4 ô và gây Taunt (ưu tiên mục tiêu lớn). <Tip>Sanctified Soul</Tip> giảm sát thương nhận vào cho bản thân và mọi đồng minh trong 4 ô suốt 2 lượt, dùng được ngay từ lượt đầu.</p>
          <p>Ở hướng tấn công, <Tip>Dawnburst</Tip> là đòn Ánh sáng diện rộng 3 ô, còn <Tip>First Light</Tip> tiêu hết khiên đang có để gây sát thương Ánh sáng theo lượng khiên đã tiêu.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><Tip>Healing Shift</Tip> chuyển <strong>mọi lượng hồi máu</strong> bạn nhận thành khiên trong 2 lượt, phần còn dư sẽ quay lại thành HP. Rất mạnh khi đội có healer.</p>
            <p><Tip>Heart of Challenge</Tip> thi triển trước trận, nên kẻ địch bị Taunt ngay từ đầu. Kết hợp với <Tip>Iron Will</Tip> để giảm sát thương từ chúng.</p>
            <p><Tip>Holy Recuperation</Tip> chỉ kích hoạt ở lượt bạn <strong>không</strong> dùng technique nào, nên nó không hợp với build tank cần dùng skill mỗi lượt.</p>
          </Alert>
          <Tabs>
            <Tab label="Tank đội">
              <Build
                techniques={['Guardian Ring', 'Desperate Protection', 'Heart of Challenge', 'Last Stand']}
                charms={['Healing Shift', 'Soul Protection', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>Build tank chính.</strong> <Tip>Heart of Challenge</Tip> và <Tip>Last Stand</Tip> giữ kẻ địch nhắm vào bạn, <Tip>Guardian Ring</Tip> bảo vệ bản thân, còn <Tip>Desperate Protection</Tip> tạo khiên cho đồng minh yếu máu nhất.</p>
              <p>Charm tập trung hoàn toàn vào sống sót. Nếu đội đã đủ an toàn, có thể đổi <Tip>Soul Protection</Tip> sang <Tip>Sanctified Soul</Tip> ở ô technique để giảm sát thương cho cả đội.</p>
            </Tab>
            <Tab label="Ánh sáng phản đòn">
              <Build
                techniques={['Dawnburst', 'Sanctified Soul', 'Guardian Ring', 'First Light']}
                charms={['Rebound', 'Holy Bulwark', 'Holy Restoration', 'Holy Aegis']}
              />
              <p><strong>Dùng khi chơi một mình hoặc đội đã có tank khác.</strong> <Tip>Guardian Ring</Tip> tạo khiên, rồi <Tip>First Light</Tip> tiêu khiên đó thành sát thương Ánh sáng. <Tip>Holy Aegis</Tip> làm khiên dày hơn, nghĩa là <Tip>First Light</Tip> cũng mạnh hơn.</p>
              <p><Tip>Holy Bulwark</Tip> tăng sát thương các skill phản đòn như <Tip>Rebound</Tip>. <Tip>Holy Restoration</Tip> hồi máu sau mỗi 6 technique Ánh sáng.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Justicar" icon="skills/classes/justicar.png">
          <p>Justicar mở rộng bộ công cụ theo hai hướng: <strong>Ánh sáng tích Charge</strong> và <strong>Băng giảm sát thương cho đội</strong>.</p>
          <p><Tip>Radiant Spiritblade</Tip> nảy giữa tối đa 5 kẻ địch và được thêm 50% sát thương nếu tiêu 5 tầng Charge; <Tip>Skyglow</Tip> cho 2 tầng Charge mỗi cuối lượt, vừa đủ để duy trì. <Tip>Prism Aegis</Tip> phản đòn bằng sát thương Ánh sáng dựa trên DEF mỗi khi bạn trúng technique.</p>
          <p>Ở hướng Băng, <Tip>Ice Shackles</Tip> giảm sát thương bạn và đồng minh trong 5 ô nhận từ kẻ địch đang bị Cold, mỗi tầng Cold tăng thêm 20%. <Tip>Phantom Current</Tip> gây Cold và kéo kẻ địch trong 4 ô lại gần.</p>
          <p><Tip>Aether Rush</Tip> có 150% Base Chance gây Stun, gần như chắc chắn khống chế được một mục tiêu lớn.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><Tip>Twin Radiance Shield</Tip> là bản nâng cấp của <Tip>Desperate Protection</Tip>: tầm 5 ô thay vì 3, nhưng chỉ kéo dài 2 lượt.</p>
            <p><Tip>Sacred Blessing</Tip> giảm sát thương nhận vào theo số technique Ánh sáng bạn trang bị (tối đa 3). Chỉ nên dùng khi build có ít nhất 2–3 technique Ánh sáng.</p>
            <p><Tip>Tide Sigil</Tip> cần 15 lần trúng technique mới phản đòn một lần, nên chỉ hiệu quả ở trận dài và đông kẻ địch.</p>
          </Alert>
          <Tabs>
            <Tab label="Tank đội">
              <Build
                techniques={['Twin Radiance Shield', 'Desperate Protection', 'Heart of Challenge', 'Last Stand']}
                charms={['Healing Shift', 'Soul Protection', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>Giữ nguyên lối tank của Templar</strong>, chỉ thêm <Tip>Twin Radiance Shield</Tip> để có hai skill tạo khiên cho đồng minh. Hai khiên có tầm khác nhau nên phủ được cả đồng minh ở xa.</p>
            </Tab>
            <Tab label="Ánh sáng">
              <Build
                techniques={['Radiant Spiritblade', 'Prism Aegis', 'Dawnburst', 'Guardian Ring']}
                charms={['Skyglow', 'Sacred Blessing', 'Holy Aegis', 'Soul Protection']}
              />
              <p><Tip>Skyglow</Tip> tăng sát thương Ánh sáng và cho Charge để <Tip>Radiant Spiritblade</Tip> luôn có thêm 50% sát thương. <Tip>Prism Aegis</Tip> và <Tip>Holy Aegis</Tip> đều dựa trên DEF, nên build vẫn trâu dù thiên về tấn công.</p>
            </Tab>
            <Tab label="Băng">
              <Build
                techniques={['Phantom Current', 'Tidal Whirl', 'Swirling Blade', 'Guardian Ring']}
                charms={['Ice Shackles', 'Frigid Glint', 'Ripple Impact', 'Holy Aegis']}
              />
              <p><Tip>Frigid Glint</Tip> 100% gây 1 tầng Cold mỗi lần technique Nước trúng đích, nên Cold cộng dồn rất nhanh, và mỗi tầng lại tăng hiệu quả giảm sát thương của <Tip>Ice Shackles</Tip> cho cả đội.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Vindicator" icon="skills/classes/compass/class-23.webp">
          <p>Vindicator biến Knight thành <strong>tank gây sát thương theo DEF</strong>: càng trâu, đòn đánh càng đau.</p>
          <p><Tip>Flurry Strike</Tip> đánh 3 hit vùng 3×1, mỗi 5% DEF bạn vượt mục tiêu tăng thêm 5% sát thương (tối đa 50%). <Tip>Warforged Edge</Tip> mạnh dần qua mỗi lần dùng trong trận, tối đa +100%. <Tip>Frost Protection</Tip> tạo khiên và gây Cold lên kẻ tấn công.</p>
          <p>Charm mới có hai lựa chọn bảo vệ đội đáng chú ý: <Tip>Covenant Aegis</Tip> gánh thay sát thương cho adventurer đồng minh khi họ lần đầu xuống dưới 40% HP, và <Tip>Iron Solidarity</Tip> ban Solidarity cho đồng minh quanh bạn trước trận.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><strong>DEF là chỉ số tấn công</strong> của build chính: nó vừa tăng sát thương <Tip>Flurry Strike</Tip>, vừa làm dày khiên qua <Tip>Holy Aegis</Tip>, vừa tăng sống sót.</p>
            <p><Tip>Fortified Shell</Tip> tăng DEF theo mỗi 10% HP đã mất (tối đa 5 tầng), nên càng bị đánh, <Tip>Flurry Strike</Tip> càng mạnh.</p>
            <p><Tip>Warforged Edge</Tip> cần thời gian để đạt tối đa, nên nó mạnh nhất ở trận dài như boss.</p>
          </Alert>
          <Tabs>
            <Tab label="DEF tấn công">
              <Build
                techniques={['Aether Rush', 'Warforged Edge', 'Flurry Strike', 'Frost Protection']}
                charms={['Soul Protection', 'Holy Aegis', 'Power of Retribution', 'Fortified Shell']}
              />
              <p><Tip>Aether Rush</Tip> khống chế mục tiêu lớn, <Tip>Flurry Strike</Tip> và <Tip>Warforged Edge</Tip> gây sát thương chính, <Tip>Frost Protection</Tip> giữ khiên.</p>
              <p><Tip>Power of Retribution</Tip> tăng Physical Mastery và có thể gây Cripple qua mỗi đòn Vật lý.</p>
            </Tab>
            <Tab label="Charge Ánh sáng">
              <Build
                techniques={['Charged Slash', 'Radiant Roar', 'Radiant Spiritblade', 'Prism Aegis']}
                charms={['Energy Flux', 'Skyglow', 'Sacred Blessing', 'Holy Aegis']}
              />
              <p><Tip>Energy Flux</Tip> cho 14 tầng Charge ngay đầu trận, và mỗi lần tiêu 2 tầng sẽ tăng ATK. <Tip>Radiant Roar</Tip> tiêu 10 tầng để thi triển lại, <Tip>Radiant Spiritblade</Tip> tiêu 5 tầng để thêm 50% sát thương, còn <Tip>Charged Slash</Tip> và <Tip>Skyglow</Tip> nạp lại Charge.</p>
              <p>Có 3 technique Ánh sáng nên <Tip>Sacred Blessing</Tip> đạt tối đa.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Caelifer" icon="skills/classes/compass/class-27.webp">
          <Alert type="red" title="Class chưa ra mắt">
            <p>Caelifer là class bậc 8 của nhánh này và <strong>chưa có ở bản hiện tại</strong>. Dữ liệu skill lấy từ file game nên có thể thay đổi khi ra mắt. Build dưới đây chỉ để tham khảo trước.</p>
          </Alert>
          <p>Caelifer hoàn thiện lối <strong>Charge Ánh sáng</strong> của Vindicator: <Tip>Lucent Edge</Tip> nhận 1 tầng Charge mỗi lần gây sát thương (đánh trúng càng nhiều kẻ địch càng nạp nhanh), và <Tip>Lumen Nova</Tip> tiêu toàn bộ Charge để tăng 7% sát thương cho mỗi tầng.</p>
          <p><Tip>Luminous Restoration</Tip> hồi máu mỗi khi bạn tiêu từ 5 tầng Charge trở lên cùng lúc, nên vòng nạp rồi tiêu Charge cũng là nguồn hồi máu.</p>
          <p>Ngoài ra có hướng Băng với <Tip>Vapor Bloom</Tip>, <Tip>Frostcast</Tip> và <Tip>Skyrider Rimefield</Tip>, cùng <Tip>Stoneward Prayer</Tip> tạo khiên cho mọi đồng minh trong 5 ô trước trận.</p>
          <Tabs>
            <Tab label="Charge Ánh sáng">
              <Build
                techniques={['Lucent Edge', 'Charged Slash', 'Radiant Roar', 'Lumen Nova']}
                charms={['Skyglow', 'Fortified Shell', 'Energy Flux', 'Luminous Restoration']}
              />
              <p>Nạp Charge bằng <Tip>Lucent Edge</Tip>, <Tip>Charged Slash</Tip>, <Tip>Skyglow</Tip> và <Tip>Energy Flux</Tip>, rồi xả bằng <Tip>Radiant Roar</Tip> và <Tip>Lumen Nova</Tip>. Nên để <Tip>Lumen Nova</Tip> cuối thứ tự để tiêu được nhiều tầng nhất.</p>
            </Tab>
            <Tab label="Băng">
              <Build
                techniques={['Vapor Bloom', 'Frostcast', 'Phantom Current', 'Frost Protection']}
                charms={['Skyrider Rimefield', 'Frost Domain', 'Ice Shackles', 'Stoneward Prayer']}
              />
              <p><Tip>Frost Domain</Tip> và <Tip>Skyrider Rimefield</Tip> liên tục cộng Cold cho kẻ địch quanh bạn, <Tip>Ice Shackles</Tip> biến số tầng Cold đó thành giảm sát thương cho cả đội.</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
