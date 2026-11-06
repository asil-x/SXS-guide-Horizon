import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Hướng dẫn chơi Duelist',
  short: 'Duelist',
  category: 'class',
  cover: 'skills/classes/duelist.png',
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
      </Tabs>
    </>
  );
}
