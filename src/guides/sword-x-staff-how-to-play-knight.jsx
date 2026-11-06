import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Hướng dẫn chơi Knight',
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
        <Con>Thứ tự ưu tiên chỉ số rắc rối hơn so với các class DPS thuần</Con>
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
      </Tabs>
    </>
  );
}
