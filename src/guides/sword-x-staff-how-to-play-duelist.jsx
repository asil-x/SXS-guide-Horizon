import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Hướng dẫn chơi Duelist',
  desc: 'Sát thương cận chiến, crit và tốc độ cao.',
  order: 1,
  short: 'Duelist',
  category: 'class',
  cover: 'skills/classes/duelist.png',
  topic: 'class',
};

export default function Page() {
  return (
    <>
      <p>Duelist giữ được sự linh hoạt của class Warrior, đồng thời có thêm nhiều sát thương và khả năng cơ động hơn hẳn, khiến họ trở thành <strong>lựa chọn mạnh để vượt màn chênh lệch lực chiến lớn so với các class khác</strong>.</p>
      <ProsCons id="pros-cons" title="Điểm mạnh & điểm yếu của Duelist">
        <Pro>Di chuyển cực tốt mà vẫn có sát thương cao</Pro>
        <Pro>Nội tại né chết + charm hút máu để lách qua nội dung khó</Pro>
        <Pro>Class tốt nhất để vượt màn chênh lệch lực chiến lớn</Pro>
        <Con>Một số technique cần đầu tư nhiều mới thật sự toả sáng</Con>
        <Con>Đánh cận chiến, tuỳ trận và build có thể bị hạn chế tầm đánh. Kẻ địch dễ dàng thả diều</Con>
        <Con>Đầu game ít lựa chọn nguyên tố, sẽ mở thêm ở các class sau</Con>
      </ProsCons>
      <Alert title="Hãy thử nghiệm build!">
        <p><strong>Hãy nhớ đây chỉ là khung mẫu</strong> để bạn điều chỉnh theo trang bị, lối chơi, skill và Fantomon của mình.</p>
      </Alert>

      <hr />

      <h2 id="best-stats">Chỉ số tốt nhất</h2>
      <p>Duelist thuần gây sát thương, nên chỉ số đơn giản hơn so với Sage hay Knight, vốn phải lo nhiều thứ hơn.</p>
      <p>Ưu tiên <strong>Physical Mastery</strong> và cả <strong>Crit Rate/Damage</strong> trên trang bị, đó là nguồn tăng sát thương lớn nhất.</p>
      <p><strong>SPD and ATK</strong> (cả số cố định lẫn %) vẫn có giá trị ở bất cứ chỗ nào bạn nhét được.</p>
      <p>Ngoài ra, <strong>Effect Hit Rate</strong> và <strong>Block Rate</strong> đều nằm trong danh sách ưu tiên, chỉ số sau giúp bù lại độ mỏng manh khi vượt màn chênh lệch lực chiến cao.</p>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p><strong><Tip>Nyxarchon</Tip> là lựa chọn tốt nhất (BiS) cho mọi build DPS.</strong> Hãy quay banner pet cho tới khi đủ để đổi nó.</p>
      <p>Có thêm ô charm và chỉ số gốc cao hơn khiến Fantomon Mythic mạnh hơn trong hầu hết tình huống.</p>
      <p>Nếu bạn quay được <Tip>Sylvaerie</Tip> hoặc <Tip>Terragon</Tip>, đó sẽ là lựa chọn tốt nhất cho tới khi bạn có <Tip>Nyxarchon</Tip>.</p>
      <p><Tip>Kels</Tip> sẽ là lựa chọn BiS cho PVP của mọi người nếu bạn quan tâm chế độ này (và còn farm miễn phí được).</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companion cho chỉ số bị động ở các mốc cấp nhất định, nên hãy tập trung nâng vài companion có lợi trực tiếp cho class lên cấp 50 trước, rồi mới nâng hết.</p>
      <p><strong>MỌI CLASS đều được lợi từ DMG Boost và Reduction</strong> để vừa tăng sát thương vừa tăng khả năng sống sót.</p>
      <p>Với Duelist, ưu tiên companion cho <strong>Attack</strong> và <strong>Accuracy</strong>, và may là các companion đó trùng nhau:</p>
      <p><Tip>Akane</Tip>, <Tip>Hermes</Tip>, <Tip>Jiangwang</Tip>, <Tip>Kazuma</Tip> và <Tip>Ophelia</Tip> là những lựa chọn rất tốt để tập trung trước.</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="Bậc Gem">
        <p>Mình lấy gem T10 làm ví dụ, nhưng <strong>bậc càng cao thì chỉ số càng tốt</strong>. Gem có từ T1 tới T15.</p>
      </Alert>
      <p><Tip>T10 Obsidian</Tip> tốt cho mọi class, vì ai cũng cần thêm sát thương dù chơi kiểu gì.</p>
      <p><Tip>T10 Moonstone</Tip> cũng khá phổ biến với mọi class để tăng khả năng sống sót.</p>
      <p>Duelist cũng hưởng lợi nhiều từ <Tip>T10 Amethyst</Tip> vì nó cho SPD và Crit Rate.</p>
      <p>Gem một chỉ số vẫn tốt để lấp phần còn lại của trang bị, <Tip>T10 Ruby</Tip> và <Tip>T10 Citrine</Tip> là lựa chọn tốt thứ hai cho class này.</p>

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
        <Tab label="Duelist" icon="skills/classes/duelist.png">
          <p>Các technique cơ động mới thay đổi hẳn cảm giác chơi class này, với lựa chọn sát thương tốt hơn đáng kể so với Warrior.</p>
          <Alert type="red" title="LƯU Ý QUAN TRỌNG">
            <p><strong>Block Rate giờ quan trọng hơn</strong>: Không đầu tư đúng thì ta sẽ mỏng manh hơn, hãy đưa nó vào trang bị và charm.</p>
            <p><strong>Physical Mastery</strong>: Cách dễ nhất để tăng sát thương. Đừng bỏ qua chỉ số này trên trang bị.</p>
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
              <p><Tip>Flash Dash</Tip> là thứ khiến build này khác hẳn Warrior: cơ động tốt mà vẫn gây sát thương.</p>
              <p>Bạn có thể dùng <Tip>Whirlwind Slash</Tip> hoặc <Tip>Mountain Collapse</Tip>, cái nào đã nâng rank cao hơn thì dùng.</p>
              <p>Bạn có thể đổi <Tip>Block Awareness</Tip> sang <Tip>Frame of Battles</Tip> tuỳ nhu cầu sống sót.</p>
              <p>Với nội dung dễ hơn, có thể bỏ cả <Tip>Indomitable Will</Tip> và <Tip>Blade of Lament</Tip> và thay bằng nội tại sát thương nào bạn đã nâng rank cao nhất.</p>
            </Tab>
            <Tab label="Đơn mục tiêu">
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
              <p><em>Đổi <Tip>Flame Aura</Tip> sang <Tip>Sunset Sword</Tip> khi đánh kẻ địch kháng lửa.</em></p>
              <p>Trong vài tình huống, bạn có thể bỏ <Tip>Blade of Lament</Tip> để lấy <Tip>Block Awareness</Tip>, vì hút máu khá không đáng kể ở nội dung bạn đánh mạnh nhưng không đủ nhiều hit.</p>
              <p>Tuy nhiên, nếu đang vượt màn chênh lệch lực chiến lớn, lượng HP thêm từ <Tip>Blade of Lament</Tip> giúp bạn trụ lâu hơn.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Berserker" icon="skills/classes/berserker.png">
          <p>Berserker gây sát thương còn cao hơn và có nhiều công cụ cho các lối chơi khác nhau, với thêm charm cho phép chơi kiểu DPS hỗ trợ ở các nội dung nhóm khó hơn sẽ ra trong các bản cập nhật tới.</p>
          <p>Giờ có nhiều lựa chọn hơn về skill và charm cho từng nội dung. Các build đề xuất dưới đây dùng cho nội dung chung chứ không cho trận cụ thể nào, vì chúng đã đủ tập trung để xử lý hầu hết mọi thứ mà không cần đổi nhiều.</p>
          <p>Thay đổi trong bộ charm là gương mặt mới <Tip>Blade of Judgment</Tip>, riêng charm này đã cho lượng sát thương khủng khiếp và sẽ là cách chơi chính của Berserker.</p>
          <p>Có những build không dùng nó mà tập trung vào đòn đánh một hit với <Tip>Soul Splash</Tip>, các build đó cũng có bên dưới.</p>
          <p>Khả năng hút máu còn tốt hơn nữa với <Tip>Blade Siphon</Tip> mới, giờ hồi máu theo max HP mỗi khi ra đòn chí mạng. Đây là cách hồi phục tốt hơn hẳn, vì phần lớn thời gian ta đều chí mạng.</p>
          <p>Berserker đi đúng chủ đề càng nhiều hit càng nhiều sát thương, và ta sẽ tận dụng điều này bằng mọi thứ có được.</p>
          <Alert type="red" title="LƯU Ý QUAN TRỌNG">
            <p><strong>Thứ tự skill rất quan trọng</strong>: Thứ tự skill trong vòng xoay là tối quan trọng. Dùng sai thứ tự có thể làm mất rất nhiều DPS.</p>
            <p><Tip>Blade of Judgment</Tip>: Charm này thay đổi tận gốc cách chơi class. Hầu hết build đều xoay quanh việc duy trì nó tối đa bằng các technique nhiều hit.</p>
            <p><strong> <Tip>Blade Siphon</Tip> </strong>: Giờ tính theo max HP khi chí mạng, tốt hơn đáng kể so với trước. Ưu tiên nâng rank cho các build trụ.</p>
          </Alert>
          <br />
          <Tabs>
            <Tab label="Đơn mục tiêu nhiều hit">
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
              <p><strong>Rất tốt cho World Boss và nội dung Guild.</strong></p>
              <p>Technique tập trung nhiều hit để nuôi <Tip>Blade of Judgment</Tip> liên tục, cho ra lượng sát thương khổng lồ.</p>
              <p><Tip>Blade Siphon</Tip> kết hợp cực tốt ở đây vì ta chí mạng liên tục, giúp tự hồi phục mạnh trong các trận dài.</p>
            </Tab>
            <Tab label="Đơn mục tiêu một hit">
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
              <p>Technique sát thương đơn mục tiêu kết hợp với <Tip>Soul Splash</Tip> cho sát thương rất tốt.</p>
              <p><Tip>Crit Mastery</Tip> và <Tip>Insightful Eye</Tip> cộng dồn tốt với sát thương cao của từng technique trong bộ này.</p>
              <p><Tip>Indomitable Will</Tip> đóng vai trò lớp sống sót, vì ta mất phần hút máu mà <Tip>Blade Siphon</Tip> lẽ ra cung cấp.</p>
            </Tab>
            <Tab label="Hỗ trợ / DPS phụ">
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
              <p><strong>Chủ yếu dùng cho vai DPS phụ / hỗ trợ trong nội dung nhóm.</strong></p>
              <p>Bạn có thể thay <Tip>Hunter's Judgment</Tip> bằng <Tip>Flame Aura</Tip>, và <Tip>Sunset Sword</Tip> bằng <Tip>Mountain Collapse</Tip> nếu nhóm cần thêm khống chế (CC).</p>
              <p>Về charm, bạn có thể đổi <Tip>Iron Fortress</Tip> sang <Tip>Blade of Judgment</Tip> nếu đi hướng nhiều hit thay vì hỗ trợ phòng thủ.</p>
              <p><Tip>Blade Siphon</Tip> giúp bạn trụ được trong các trận nhóm dài mà không cần healer kè kè.</p>
            </Tab>
            <Tab label="Leo màn với HP thấp">
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
              <p><strong>Chỉ nên dùng nếu charm của bạn đã ở cấp rất cao.</strong></p>
              <p>Build này dựa vào hệ số sát thương khi HP thấp, dùng <Tip>Soulfire Protection</Tip> và <Tip>Frame of Battles</Tip> để giữ bạn sống trong khi <Tip>Desperate Valor</Tip> khuếch đại sát thương khi máu thấp.</p>
              <p><Tip>Blade of Judgment</Tip> hoàn thiện bộ charm, giúp chuỗi nhiều hit vẫn đánh mạnh nhất có thể.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Conqueror" icon="skills/classes/conqueror.png">
          <Alert type="red" title="Quan trọng">
            <p></p>
            Đây là các build mình tự thử nghiệm, cùng với thông tin và build từ người chơi Trung Quốc.
            <p></p>
            <p><strong>Bạn cần cân nhắc tiến độ tài khoản và cấp skill của chính mình</strong> khi lên build, vì mỗi người sẽ ở cấp và bậc khác nhau. Hãy chọn điều phù hợp với bạn.</p>
          </Alert>
          <p>Một số thay đổi so với Berserker:</p>
          <ul>
            <li>Elemental mastery được chú trọng hơn nhiều, vì phần lớn skill mới đều thuộc nguyên tố.</li>
            <li>Cần crit rate cao hơn, kẻ địch có một ít kháng chí mạng (18%), nghĩa là sau này ta cần đẩy crit rate vượt ngưỡng.</li>
            <li>Vì nhiều skill mới là skill nguyên tố nhiều hit mạnh, Blade of Judgement không còn là nội tại sát thương BiS nữa.</li>
          </ul>
          <p>Với việc có thêm các skill như <Tip>Tactical Adaptation</Tip> cho các trận miniboss/boss trong dungeon và <Tip>Piercing Assault</Tip> / <Tip>Soul Breaker</Tip> làm nội tại tăng sát thương chính cho nội dung chung, class vốn đã cực mạnh khi leo màn này còn mạnh hơn nữa.</p>
          <details>
            <summary>Về pet ở Tier 4</summary>
            <p>Nhìn chung, nếu bạn là F2P hoặc nạp ít, phần lớn tiền tệ sẽ được dùng cho <Tip>Nyxarchon</Tip>, vì đây nhìn chung là fantomon DPS tốt nhất.</p>
            <p>Tuy nhiên, có những build thật ra tốt hơn với <Tip>Pandarial</Tip> vì nó giảm hồi chiêu skill cho mọi class ở đầu trận, tương tự charm <Tip>Rapid Cast</Tip> của class Mage.</p>
            <p>Kết hợp với tốc độ của Conqueror, bạn sẽ được hành động trước và có thể chiếm thế thượng phong.</p>
            <p><Tip>Aegiswing</Tip> cũng có thể dùng để leo màn nếu các fantomon của bạn có cấp gần nhau. Luôn ưu tiên đưa con nào được lên dạng trưởng thành trước, rồi mới tính thêm pet cho build cụ thể.</p>
          </details>
          <p>Ưu tiên trang bị cũng thay đổi so với các tier trước.</p>
          <p>Nếu bạn mê Blade of Judgement thì vẫn chơi được, nó có thêm vài skill và nội tại mới. Lối chơi không đổi và vẫn khá mạnh ở hầu hết nội dung, nhưng bị các build khác lấn át.</p>
          <p>Nếu chỉ chơi build này, hãy giữ ưu tiên dòng physical mastery cùng crit rate, crit damage, attack và speed.</p>
          <p><strong>Thay đổi duy nhất là chuyển từ Physical sang Elemental mastery cho mọi build khác</strong>, các chỉ số khác giữ nguyên. Vì có thể quay affix trên trang bị rồi chuyển affix, ai rồi cũng sẽ có được món mình muốn, dù mất một thời gian.</p>
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
              <p><strong>Pet đề xuất cho build này: <Tip>Nyxarchon</Tip> hoặc <Tip>Pandarial</Tip></strong></p>
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
              <p><strong>Pet đề xuất cho build này: <Tip>Pandarial</Tip></strong></p>
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
              <p>Charm ở đây thay đổi tuỳ trận, ít quái = <Tip>Tactical Adaptation</Tip>.</p>
              <p><strong>Pet đề xuất cho build này: <Tip>Nyxarchon</Tip> hoặc <Tip>Pandarial</Tip></strong></p>
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
              <p>Charm ở đây thay đổi tuỳ trận, ít quái = <Tip>Tactical Adaptation</Tip>.</p>
              <p><strong>Pet đề xuất cho build này: <Tip>Nyxarchon</Tip> hoặc <Tip>Pandarial</Tip></strong></p>
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
              <p><strong>Pet đề xuất cho build này: <Tip>Pandarial</Tip></strong></p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Ravager" icon="skills/classes/ravager.png">
          <p>Ravager mở ra hai hướng chơi mới cho nhánh Duelist: <strong>sát thương Lửa diện rộng</strong> với <Tip>Solaris Storm</Tip> và <strong>combo hất tung</strong> với <Tip>Tempest Edge</Tip>.</p>
          <p><Tip>Solaris Storm</Tip> đánh 3 hit Lửa quanh bản thân rồi thêm 1 hit vùng tròn 2 ô, lại có Zero Initial CD nên dùng được ngay lượt đầu. Đây là skill dọn quái mạnh nhất mà Ravager có thêm.</p>
          <p><Tip>Shadow End</Tip> rất đáng chú ý ở nội dung nhiều quái yếu: dịch chuyển tới kẻ địch, và mỗi lần hạ được mục tiêu sẽ tự thi triển lại, tối đa thêm 4 lần mỗi lượt.</p>
          <p><Tip>Night Curse</Tip> gây Blood Source lên mọi kẻ địch trong 2 ô. Kẻ địch dính Blood Source sẽ trả lại 3% sát thương nhận vào thành HP cho <strong>người tấn công</strong>, nên cả đội đều được hút máu.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><strong>Đa số build vẫn xoay quanh nhiều hit</strong>: <Tip>Blade of Judgment</Tip> gắn Mark theo từng lần gây sát thương, nên các technique nhiều hit như <Tip>Whirlwind Slash</Tip>, <Tip>Sunset Sword</Tip> và <Tip>Solaris Storm</Tip> kích hoạt nó rất nhanh.</p>
            <p><Tip>Tempest Edge</Tip> chỉ kích hoạt khi hất kẻ địch <strong>từ trạng thái bình thường</strong> lên Airborne, nên cần có <Tip>Hunter's Judgment</Tip> trong bộ skill.</p>
            <p><Tip>Tactical Adaptation</Tip> có lợi trong cả hai trường hợp: ít kẻ địch quanh mình thì tăng sát thương, bị vây thì giảm sát thương nhận vào.</p>
          </Alert>
          <Tabs>
            <Tab label="Đi màn">
              <Build
                techniques={['Hunter\'s Judgment', 'Solaris Storm', 'Whirlwind Slash', 'Sunset Sword']}
                charms={['Tactical Adaptation', 'Blazing Momentum', 'Tempest Edge', 'Blade of Judgment']}
              />
              <p><strong>Build đi màn chính của Ravager.</strong> <Tip>Hunter's Judgment</Tip> kéo kẻ địch về trước mặt và hất tung chúng, kích hoạt <Tip>Tempest Edge</Tip>, sau đó <Tip>Whirlwind Slash</Tip>, <Tip>Sunset Sword</Tip> và <Tip>Solaris Storm</Tip> đánh trúng cả cụm.</p>
              <p><Tip>Blazing Momentum</Tip> biến mỗi đòn chí mạng thành thêm 1 lần sát thương Lửa lan 1 ô, nên build này cần <strong>Crit Rate cao</strong>.</p>
              <p>Nếu bạn hay chết ở các màn khó, đổi <Tip>Tactical Adaptation</Tip> sang <Tip>Indomitable Will</Tip> để có thêm một mạng.</p>
            </Tab>
            <Tab label="Đơn mục tiêu">
              <Build
                techniques={['Air Break', 'Shattering Dance', 'Eclipse Slash', 'Hunter\'s Judgment']}
                charms={['Dominant Gaze', 'Scarlet Zeal', 'Blade of Judgment', 'Indomitable Will']}
              />
              <p><strong>Dùng cho boss và miniboss.</strong> <Tip>Air Break</Tip> mở đầu bằng Armor Break 2 (giảm 30% DEF), sau đó <Tip>Eclipse Slash</Tip> (6 hit) và <Tip>Shattering Dance</Tip> (3 hit, cộng dồn Riven Heart) dồn sát thương vào một mục tiêu.</p>
              <p><Tip>Dominant Gaze</Tip> tăng sát thương lên mục tiêu còn trên 70% HP, rất hợp với boss máu dày ở đầu trận. <Tip>Scarlet Zeal</Tip> cộng ATK sau mỗi technique, đạt 6 tầng sẽ tăng mạnh ATK trong 2 lượt.</p>
              <p>Có thể đổi <Tip>Hunter's Judgment</Tip> sang <Tip>Night Curse</Tip> nếu đội cần hồi máu nhờ Blood Source.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Marauder" icon="skills/classes/marauder.png">
          <p>Marauder là bậc mà <strong>SPD và sát thương Vật lý nhiều hit</strong> trở thành trọng tâm.</p>
          <p><Tip>Raining Blades</Tip> đánh 4 hit lên vùng 3×2, và mỗi 5% SPD bạn vượt mục tiêu sẽ tăng thêm 5% sát thương (tối đa 50%). <Tip>Shadowflash Dance</Tip> tung 6 đòn, mỗi đòn dịch chuyển tới một kẻ địch ngẫu nhiên, rất mạnh khi kẻ địch phân tán.</p>
          <p><Tip>Sinseal</Tip> là công cụ đánh boss mới: gắn Hex Mark 1 lượt, khi hết hạn mục tiêu nhận thêm True DMG bằng 30% sát thương đã nhận trong thời gian bị đánh dấu.</p>
          <p>Về charm, <Tip>Razor Momentum</Tip> và <Tip>Grim Pursuit</Tip> đều kích hoạt theo từng hit Vật lý, nên càng nhiều hit thì càng có lợi.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><strong>Ưu tiên SPD</strong>: ngoài việc hành động sớm hơn, SPD còn trực tiếp tăng sát thương của <Tip>Raining Blades</Tip>.</p>
            <p><Tip>Razor Momentum</Tip> cộng tối đa 20 tầng Razor trong lượt, mỗi hit Vật lý có 80% cơ hội nhận 1 tầng. Build toàn technique nhiều hit sẽ đạt tối đa rất nhanh.</p>
            <p><Tip>Hellblood Frenzy</Tip> tăng sát thương 3 lượt đầu, nhưng sau đó bạn nhận <strong>thêm 100% sát thương</strong> trong 3 lượt. Chỉ dùng cho trận ngắn mà bạn chắc chắn kết thúc nhanh.</p>
          </Alert>
          <Tabs>
            <Tab label="Đi màn">
              <Build
                techniques={['Raining Blades', 'Shattering Dance', 'Eclipse Slash', 'Shadowflash Dance']}
                charms={['Indomitable Will', 'Blade of Judgment', 'Grim Pursuit', 'Razor Momentum']}
              />
              <p><strong>Toàn bộ technique đều là sát thương Vật lý nhiều hit</strong>: tổng cộng 4 + 3 + 6 + 6 hit mỗi vòng. Mỗi hit đều có thể kích hoạt <Tip>Grim Pursuit</Tip> (40% gây thêm 1 lần sát thương), cộng tầng <Tip>Razor Momentum</Tip> và gắn Mark của <Tip>Blade of Judgment</Tip>.</p>
              <p><Tip>Grim Pursuit</Tip> còn mạnh dần khi kẻ địch mất máu (tối đa +50%), nên build kết liễu rất tốt.</p>
              <p><Tip>Indomitable Will</Tip> giữ lại cho an toàn. Nếu đã đủ trâu, có thể đổi sang <Tip>Piercing Assault</Tip> để bỏ qua DEF.</p>
            </Tab>
            <Tab label="Boss">
              <Build
                techniques={['Sinseal', 'Eclipse Slash', 'Shattering Dance', 'Air Break']}
                charms={['Razor Momentum', 'Grim Pursuit', 'Blade of Judgment', 'Ruinblight']}
              />
              <p><strong>Mở bằng <Tip>Sinseal</Tip> rồi dồn toàn bộ sát thương trong lượt bị đánh dấu</strong>, vì phần True DMG cuối cùng tính theo lượng sát thương mục tiêu nhận trong thời gian đó.</p>
              <p><Tip>Air Break</Tip> gây Armor Break 2 và cũng là technique 1 hit, nên được <Tip>Ruinblight</Tip> tăng sát thương. <Tip>Ruinblight</Tip> còn mạnh hơn 10% cho mỗi loại Ailment/Debuff trên mục tiêu (Armor Break, Riven Heart…).</p>
              <p>Lưu ý <Tip>Sinseal</Tip> có hồi chiêu 3 lượt, hãy để nó đầu thứ tự skill.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Doomreaver" icon="skills/classes/compass/class-24.webp">
          <p>Doomreaver chuyển trọng tâm sang <strong>kết liễu bằng Lửa</strong>: dịch chuyển tới mục tiêu yếu nhất và kết thúc nó.</p>
          <p><Tip>Ignition Strike</Tip> dịch chuyển tới cạnh kẻ địch trong 5 ô, ưu tiên mục tiêu có % HP thấp nhất. <Tip>Starfire Annihilation</Tip> gây thêm 20% sát thương cho mỗi 10% HP mục tiêu đã mất, tối đa +200%, cũng ưu tiên mục tiêu yếu nhất.</p>
          <p>Với lối Vật lý, <Tip>Void Slash</Tip> đánh 6 hit lên mọi kẻ địch trong 2 ô quanh bản thân, là technique diện rộng nhiều hit mạnh nhất của nhánh.</p>
          <p>Charm mới thiên về sống sót: <Tip>Ironclad</Tip> giảm mạnh sát thương nhận vào trong 2 lượt đầu, <Tip>Shadow Stealth</Tip> hồi máu và tàng hình 2 lượt.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><strong>Thứ tự skill rất quan trọng</strong>: dùng technique diện rộng làm giảm máu trước, rồi mới tới <Tip>Starfire Annihilation</Tip> và <Tip>Ignition Strike</Tip> để chúng kết liễu.</p>
            <p><Tip>Ironclad</Tip> giúp sống qua đợt dồn sát thương đầu trận, giai đoạn nguy hiểm nhất với một class cận chiến phải lao vào giữa kẻ địch.</p>
            <p><Tip>Piercing Assault</Tip> bỏ qua thêm 10% DEF cho mỗi buff bạn đang có (tối đa 3), nên càng giữ nhiều buff trên người thì nó càng mạnh.</p>
          </Alert>
          <Tabs>
            <Tab label="Lửa kết liễu">
              <Build
                techniques={['Sinseal', 'Hellfire Fist', 'Ignition Strike', 'Starfire Annihilation']}
                charms={['Indomitable Will', 'Piercing Assault', 'Starfire Edge', 'Ironclad']}
              />
              <p><Tip>Hellfire Fist</Tip> làm giảm máu cả hàng kẻ địch phía trước, sau đó <Tip>Starfire Annihilation</Tip> và <Tip>Ignition Strike</Tip> tự tìm mục tiêu yếu nhất để kết liễu. <Tip>Sinseal</Tip> dùng lên mục tiêu lớn để thêm True DMG.</p>
              <p>Build này cần <strong>Elemental Mastery</strong> thay vì Physical Mastery, vì 3/4 technique là sát thương Lửa.</p>
              <p>Nếu thiếu tốc độ, đổi <Tip>Starfire Edge</Tip> sang <Tip>Temporal Swiftness</Tip> để tăng SPD và có cơ hội giảm hồi chiêu.</p>
            </Tab>
            <Tab label="Vật lý diện rộng">
              <Build
                techniques={['Void Slash', 'Whirling Blades', 'Raining Blades', 'Shadowflash Dance']}
                charms={['Razor Momentum', 'Grim Pursuit', 'Blade of Judgment', 'Ironclad']}
              />
              <p><strong>Nếu bạn đã xây trang bị Vật lý từ Marauder</strong>, build này giữ nguyên chỉ số mà vẫn mạnh ở nội dung nhiều quái: <Tip>Void Slash</Tip> (6 hit quanh bản thân) và <Tip>Whirling Blades</Tip> (4 hit vùng vuông) thay cho các technique đơn mục tiêu.</p>
              <p>Có thể đổi <Tip>Blade of Judgment</Tip> sang <Tip>Shadow Stealth</Tip> nếu cần thêm hồi máu và khả năng tránh bị nhắm vào.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Infernifer" icon="skills/classes/compass/class-28.webp">
          <Alert type="red" title="Class chưa ra mắt">
            <p>Infernifer là class bậc 8 của nhánh này và <strong>chưa có ở bản hiện tại</strong>. Dữ liệu skill lấy từ file game nên có thể thay đổi khi ra mắt. Build dưới đây chỉ để tham khảo trước.</p>
          </Alert>
          <p>Infernifer có hai bộ công cụ rõ ràng: <strong>Wind Orb</strong> và <strong>Reaper Bóng tối</strong>.</p>
          <p>Hướng Wind Orb: <Tip>Tempest Call</Tip> tạo 4 Wind Orb, <Tip>Bladegale Conflux</Tip> có 50% cơ hội tạo thêm 3 quả mỗi khi gây sát thương Gió, và <Tip>Zephyr Cascade</Tip> làm mỗi đòn của Wind Orb nảy thêm sang một kẻ địch khác.</p>
          <p>Hướng Reaper: <Tip>Nethercrown</Tip> đưa bạn vào trạng thái Reaper 4 lượt (mỗi kẻ địch bị hạ giúp kích hoạt sớm hơn), trong đó <Tip>Crimson Harvest</Tip> được thêm 50% Lifesteal và <Tip>Wraith Strike</Tip> gây thêm 50% sát thương.</p>
          <Tabs>
            <Tab label="Wind Orb">
              <Build
                techniques={['Sinseal', 'Tempest Call', 'Skyfall Gale', 'Phantom Blitz']}
                charms={['Indomitable Will', 'Windless Lord', 'Bladegale Conflux', 'Zephyr Cascade']}
              />
              <p><Tip>Phantom Blitz</Tip> có 60% cơ hội thi triển lại nếu SPD của bạn cao hơn mục tiêu, mỗi lần trúng lại có thể tạo thêm Wind Orb qua <Tip>Bladegale Conflux</Tip>, rồi <Tip>Windless Lord</Tip> nhân số orb lên thêm.</p>
              <p>Có thể đổi <Tip>Indomitable Will</Tip> sang <Tip>Zephyr Battle Zeal</Tip> (mỗi Wind Orb tăng sát thương Technique, tối đa 10 tầng) nếu bạn không cần mạng thứ hai.</p>
            </Tab>
            <Tab label="Reaper">
              <Build
                techniques={['Crimson Harvest', 'Wraith Strike', 'Shadow Devour', 'Sinseal']}
                charms={['Nethercrown', 'Abyssal Shadowmark', 'Shadow Stealth', 'Shadowward']}
              />
              <p>Mọi technique sát thương đều là Bóng tối để tận dụng Reaper và <Tip>Abyssal Shadowmark</Tip> (đạt 2 tầng sẽ nổ lan ra vùng 1 ô).</p>
              <p><Tip>Shadow Stealth</Tip> đưa bạn vào Stealth cuối lượt, và <Tip>Shadowward</Tip> giảm sát thương nhận vào cùng xoá Debuff khi đang Stealth, giúp build trụ được dù lao vào giữa kẻ địch.</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
