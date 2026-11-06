import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Hướng dẫn chơi Sage',
  desc: 'Hồi máu, triệu hồi và hỗ trợ.',
  order: 3,
  short: 'Sage',
  category: 'class',
  cover: 'skills/classes/arcanist.png',
  topic: 'class',
};

export default function Page() {
  return (
    <>
      <p>Khi bắt đầu chơi Sword x Staff ở server Trung Quốc, mình chọn nhân vật hỗ trợ vì đó là lối chơi mình thích trong các game MMO.</p>
      <p>Thú vị là Sage không chỉ là hỗ trợ, <strong>mà còn có nhiều build đa dạng nhất trong game</strong>, nên hãy cùng xem vài build PVE bạn có thể dùng với class này.</p>
      <ProsCons id="pros-cons" title="Điểm mạnh & điểm yếu của Sage">
        <Pro>Class linh hoạt nhất nhờ có rất nhiều lối chơi khác nhau</Pro>
        <Pro>Class duy nhất có nhiều nguồn hồi máu và hồi sinh, rất hữu ích khi mở các tầng dungeon khó hơn</Pro>
        <Pro>Lối triệu hồi ở tier cao cho phép vật triệu hồi vừa gánh đòn vừa gây sát thương thay bạn, rất an toàn khi đi một mình</Pro>
        <Con>Dù tăng theo HP, đây vẫn là class mỏng manh giống Sorcerer thường và không thể làm tank ở nội dung co-op cấp cao</Con>
        <Con>Một số lối chơi mất hơn một tháng mới mở, vì build Summoner và Erosion phải tới T3 mới mở đầy đủ</Con>
        <Con>Build triệu hồi rất phụ thuộc thứ tự skill: nhiều skill triệu hồi chỉ dùng được 1 lần mỗi trận, xếp sai là mất nhịp cả trận</Con>
      </ProsCons>
      <Alert title="Hãy thử nghiệm build!">
        <p><strong>Hãy nhớ đây chỉ là khung mẫu</strong> để bạn điều chỉnh theo trang bị, lối chơi, skill và Fantomon của mình.</p>
      </Alert>

      <hr />

      <h2 id="best-stats">Chỉ số tốt nhất</h2>
      <p>Vì Sage có nhiều cách chơi, nên cũng có nhiều cách chọn chỉ số và trang bị phù hợp.</p>
      <p><strong>Với hỗ trợ</strong>: Max HP được ưu tiên nếu muốn làm healer cạnh tranh. <em>MỌI LƯỢNG HỒI MÁU ĐỀU TĂNG THEO MAX HP CỦA NGƯỜI THI TRIỂN</em>, nên bắt buộc phải tập trung chỉ số này trước.</p>
      <p><strong>Với sát thương DoT</strong>: Erosion là debuff, nên cần Effect Hit Rate để luôn áp được nhiều stack nhất có thể lên kẻ địch. Crit DMG/Rate cũng rất tốt để tăng sát thương thêm nữa.</p>
      <p><strong>Với triệu hồi</strong>: Chúng thừa hưởng một phần chỉ số của bạn, nên tập trung Elemental Mastery, Crit Rate/Damage, ATK và SPD.</p>
      <p><em>Erosion cũng là sát thương Dark</em>, nên đừng quên ATK và Elemental Mastery khi chọn chỉ số phụ để tăng sát thương đúng cách.</p>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p>Với Sage, nên tập trung vào <Tip>Aegiswing</Tip> nhờ khả năng sống sót và hồi máu nó mang lại ở nội dung độ khó cao.</p>
      <p><Tip>Mandragora</Tip> là lựa chọn tốt cho tới khi đủ tiền tệ để đổi <Tip>Aegiswing</Tip> hoặc để thêm lượng hồi máu khi an toàn bản thân không thành vấn đề (hiện mới chỉ có guild expedition).</p>
      <p>Dungeon cấp thấp cũng có thể dùng, nhưng ở đó nên chọn thêm sát thương thì hơn.</p>
      <p>Nếu định để dành tài nguyên, các pet Mythic khác sẽ còn lâu mới ra:</p>
      <ul>
        <li><Tip>Pandarial</Tip> (chủ yếu cho Sage DPS) ra vào cuối Season 2</li>
        <li><Tip>Prismora</Tip> (pet thuần hồi máu) ra vào giữa Season 3</li>
      </ul>
      <p>Hãy tính theo ngày mở server của bạn xem có đáng để dành cho con nào không, vì mỗi season kéo dài khoảng 2 tháng.</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companion cho chỉ số bị động ở các mốc cấp nhất định, nên hãy tập trung nâng vài companion có lợi trực tiếp cho class lên cấp 50 trước, rồi mới nâng hết.</p>
      <p><strong>MỌI CLASS đều được lợi từ DMG Boost và Reduction</strong> để vừa tăng sát thương vừa tăng khả năng sống sót.</p>
      <p>Với healer <Tip>Aqua</Tip>, <Tip>Suimo</Tip> và <Tip>Suzu</Tip> đều tăng Healing Boost% ở cấp 100.</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="Bậc Gem">
        <p>Mình lấy gem T10 làm ví dụ, nhưng <strong>bậc càng cao thì chỉ số càng tốt</strong>. Gem có từ T1 tới T15.</p>
      </Alert>
      <p>Với Sage có vài lựa chọn:</p>
      <p><Tip>T10 Obsidian</Tip> tốt cho mọi class, vì ai cũng cần thêm sát thương dù chơi kiểu gì.</p>
      <p><Tip>T10 Moonstone</Tip> cũng khá phổ biến với mọi class để tăng khả năng sống sót.</p>
      <p>Nếu bạn là healer, <Tip>T10 Amber</Tip> và <Tip>T10 Beryl</Tip> là lựa chọn tốt nhất vì chúng tăng cả HP lẫn Healing.</p>
      <p>Build Summoner và Erosion có thể dùng <Tip>T10 Obsidian</Tip> hoặc loại ít phổ biến hơn là <Tip>T10 Ruby</Tip>.</p>

      <hr />

      <h2 id="builds">Builds</h2>
      <Tabs big>
        <Tab label="Mage" icon="skills/classes/mage.png">
          <p>Đầu game chưa có nhiều build vì bạn bị giới hạn bởi số phép có được.</p>
          <p><strong>Hầu hết mọi người sẽ chơi build sát thương nguyên tố ở giai đoạn này</strong>, trong đó hệ nước phổ biến nhất nhờ <Tip>Water Assault</Tip> và <Tip>Water to Ice</Tip>.</p>
          <p>Summoner rất yếu ở giai đoạn sớm này, hãy đợi ít nhất tới T2.</p>
          <Tabs>
            <Tab label="AoE">
              <Build
                techniques={[
                  'Water Assault',
                  "Wind's Delight",
                  'Water Shot',
                  'Fireball',
                ]}
                charms={[
                  'Water to Ice',
                  'Mana Surge',
                  'Unstable Aura',
                  'Elemental Mystery',
                ]}
              />
              <p>Build mỏng manh nhưng sát thương cao nhất trong hầu hết tình huống.</p>
              <p>Mình đạt kết quả rất tốt khi dùng cả <Tip>Fireball</Tip> và <Tip>Water Shot</Tip> (trước đây mình dùng <Tip>Blazing Fire Ring</Tip>).</p>
              <p>Các phép còn lại cộng hưởng rất tốt với <Tip>Unstable Aura</Tip> vì chúng đều là AoE hoặc bắn nhiều đạn.</p>
              <p><Tip>Mana Surge</Tip> giúp build gây nhiều sát thương hơn hẳn, nhưng nếu hay chết, bạn có thể đổi sang <Tip>Gale Shield</Tip>.</p>
            </Tab>
            <Tab label="Đơn mục tiêu">
              <Build
                techniques={[
                  'Tempest Sphere',
                  "Wind's Delight",
                  'Flame Jet',
                  'Water Shot',
                ]}
                charms={[
                  'Unstable Aura',
                  'Mana Surge',
                  'Elemental Mystery',
                  'Gale Shield',
                ]}
              />
              <p>Sát thương đơn mục tiêu rất tốt nhờ có nhiều loại đạn và nhiều lần gây sát thương có thể kích hoạt <Tip>Unstable Aura</Tip>.</p>
              <p>Ngay cả các skill bị “giảm” sát thương khi trúng cùng mục tiêu cũng hoạt động rất tốt ở đây, vì có rất nhiều cơ hội để <Tip>Unstable Aura</Tip> gây thêm sát thương và bù lại.</p>
              <p><Tip>Water Shot</Tip> thật ra có thể thay bằng bất kỳ phép nào, đơn mục tiêu hoặc bắn nhiều đạn để thêm sát thương.</p>
            </Tab>
            <Tab label="Đóng băng">
              <Build
                techniques={[
                  'Water Assault',
                  'Water Shot',
                  'Ice Spike',
                ]}
                charms={[
                  'Unstable Aura',
                  'Mana Surge',
                  "Dew's Blessing",
                  'Water to Ice',
                ]}
              />
              <p>Rất tốt để đóng băng boss (khiến boss mất lượt, và sau khi cạn thanh stamina chúng nhận thêm sát thương).</p>
              <p>Phép cuối tuỳ boss, lựa chọn tốt là <Tip>Flame Jet</Tip> hoặc bất kỳ phép gió bắn nhiều đạn nào như <Tip>Tempest Sphere</Tip>.</p>
              <p>Ta vẫn dùng <Tip>Unstable Aura</Tip> vì ở tier 1 đây là một trong những nội tại mạnh nhất, kết hợp với <Tip>Mana Surge</Tip> để bớt phụ thuộc may rủi chí mạng.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Sage" icon="skills/classes/sage.png">
          <p><strong>Đây là lúc nhiều build mới cuối cùng cũng mở ra.</strong></p>
          <p>Bạn có thể chơi full hỗ trợ, chuyển sang summoner, hoặc đi debuff và sát thương Dark. Cũng có thể kết hợp tất cả thành lối chơi lai.</p>
          <p>Vấn đề là bạn chưa có đủ bộ skill cho từng hướng, nên mình khuyên chơi lai cho tới Tier 3.</p>
          <Tabs>
            <Tab label="Erosion (DoT)">
              <Build
                techniques={[
                  'Dark Bullet',
                  'Shadow Impact',
                  'Weakening Hex',
                  'Flame Wolf Summon',
                ]}
                charms={[
                  'Shadow Erosion',
                  'Soul Impact',
                  'Insight',
                  'Elemental Mystery',
                ]}
              />
              <p>Vì chưa thể chơi full Erosion hay summoner, build tốt nhất mình tìm được cho Tier 2 là build lai, kết hợp sát thương Dark với <Tip>Flame Wolf Summon</Tip>.</p>
              <p>Trọng tâm vẫn là sát thương Dark, dùng cả <Tip>Shadow Erosion</Tip> và <Tip>Soul Impact</Tip>, nên hãy đảm bảo đủ Effect Hit Rate để áp Erosion ổn định.</p>
              <p>Nếu khó trụ, bạn có thể đổi sang <Tip>Gale Shield</Tip> và bỏ <Tip>Insight</Tip> hoặc <Tip>Elemental Mystery</Tip>.</p>
            </Tab>
            <Tab label="Hỗ trợ">
              <Build
                techniques={[
                  'Healing Touch',
                  'Void Blessing',
                  'Radiant Restoration',
                  'Iron Thorn',
                ]}
                charms={[
                  'Healing Mastery',
                  'Resurrection',
                  'Tough Soul',
                  'Gale Shield',
                ]}
              />
              <p>Giờ bạn bắt đầu thấy mình là healer đúng nghĩa. <Tip>Radiant Restoration</Tip> sẽ là skill chính trong một thời gian nếu bạn chơi kiểu này, nên hãy dồn càng nhiều HP càng tốt.</p>
              <p>Ta cũng mở khoá hai charm mạnh cho healer, <Tip>Resurrection</Tip> và <Tip>Healing Mastery</Tip>.</p>
              <p>Ta dùng <Tip>Iron Thorn</Tip> để hỗ trợ đội tốt hơn nhờ debuff Immobilize, nhưng có thể đổi sang phép khác nếu muốn thêm sát thương.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Arcanist" icon="skills/classes/arcanist.png">
          <Alert type="red" title="Còn triệu hồi thì sao?">
            <p>Phép triệu hồi kể cả ở Tier 3 cũng không mạnh lắm, nên không khuyên build thuần theo hướng này.</p>
            <p>Nếu bạn thích triệu hồi, <strong>hãy làm build lai theo các gợi ý bên dưới</strong>.</p>
          </Alert>
          <p><strong>Ở đây build trở nên “thuần” hơn vì bạn đã có thể chơi full một hướng</strong>, hoặc giữ build lai cũng được.</p>
          <Tabs>
            <Tab label="Erosion (DoT)">
              <Build
                techniques={[
                  'Mana Blast',
                  'Abyssal Hand',
                  'Shadow of Termination',
                ]}
                charms={[
                  'Shadow Erosion',
                  'Linked Misfortune',
                  'Shadow Vengeance',
                  "Night's Blessing",
                ]}
              />
              <p>Build Erosion T3 khá tốt và gây sát thương đáng kể. Bạn có thể đi full AoE hoặc nhắm vào sát thương đơn mục tiêu.</p>
              <p><Tip>Linked Misfortune</Tip> và <Tip>Night's Blessing</Tip> tăng sát thương, còn <Tip>Shadow Vengeance</Tip> cho bạn né chết 1 lượt và gây sát thương cực lớn trước khi gục.</p>
              <p><strong>Hãy đảm bảo <Tip>Shadow of Termination</Tip> luôn được dùng cuối cùng</strong>, vì bạn muốn dồn càng nhiều stack Erosion càng tốt trước khi dùng nó.</p>
              <p>Kể cả ở T3, vẫn đáng dùng <Tip>Mana Surge</Tip> nếu chỉ số phụ trang bị chưa tốt.</p>
              <hr />
              <p><strong>Sát thương đơn mục tiêu</strong>: <Tip>Dark Bullet</Tip> vẫn là lựa chọn cho tới các tier sau.</p>
              <p><strong>AoE</strong>: Bạn có thể dùng <Tip>Weakening Hex</Tip> hoặc <Tip>Shadow Impact</Tip>, cả hai đều tốt.</p>
            </Tab>
            <Tab label="Hỗ trợ">
              <Build
                techniques={[
                  'Healing Touch',
                  'Void Blessing',
                  'Radiant Restoration',
                  'Waterling Summon',
                ]}
                charms={[
                  'Healing Mastery',
                  'Resurrection',
                  'Shadow Vengeance',
                  'Overhealing',
                ]}
              />
              <p>Triệu hồi mới <Tip>Waterling Summon</Tip> có hai skill hồi máu cho đồng đội, còn nội tại mới <Tip>Overhealing</Tip> tăng lượng hồi máu đáng kể.</p>
              <p>Bạn có thể thay <Tip>Healing Touch</Tip> bằng <Tip>Frenzy Totem</Tip> nhưng sẽ mất một trong hai skill hồi máu duy nhất.</p>
              <p>Cũng cần lưu ý dùng 4 charm hỗ trợ nghĩa là bạn không có <Tip>Gale Shield</Tip> hay cơ chế phòng thủ nào khi skill đang hồi chiêu.</p>
              <p>Để khắc phục, ta dùng <Tip>Shadow Vengeance</Tip> làm “phương án cuối”: reset mọi hồi chiêu và hồi máu thêm một lần / triệu hồi Waterling, rồi chết (triệu hồi vẫn tồn tại kể cả khi bạn chết).</p>
              <p><strong>Trừ khi bạn đi cùng 3 người bạn, nên dùng build lai thay vì</strong> full hỗ trợ như build trên (4 Technique không gây sát thương).</p>
            </Tab>
            <Tab label="Booster">
              <Build
                techniques={[
                  'Healing Touch',
                  'Frenzy Totem',
                  'Weakening Hex',
                  'Dark Bullet',
                ]}
                charms={[
                  'Healing Mastery',
                  'Shadow Erosion',
                  'Insight',
                  'Overhealing',
                ]}
              />
              <p>Có thể dùng build này để tăng sát thương cho party ở các sự kiện tính sát thương riêng từng người, nhưng buff vẫn áp dụng khi đi nhóm, giúp bạn bè dễ đạt điểm cao hơn.</p>
              <p><Tip>Frenzy Totem</Tip> và <Tip>Weakening Hex</Tip> làm phần lớn công việc ở đây, và nên dùng Fantomon như <Tip>Chomusuke</Tip> hoặc <Tip>Nyxarchon</Tip> có thể giảm phòng thủ kẻ địch.</p>
              <p>Charm không quá quan trọng ở đây, nên có thể dùng <Tip>Insight</Tip> để dễ áp debuff, cùng vài charm hồi máu.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Dominator" icon="skills/classes/dominator.png">
          <Alert type="red" title="Lưu ý">
            <p>Mọi thử nghiệm đều thực hiện trên một tài khoản gần như F2P, với độ hiếm charm &amp; technique riêng, nên tình hình và kết quả của bạn có thể khác.</p>
          </Alert>
          <p>Trong hầu hết tình huống, trừ build thuần hỗ trợ, hai nội tại erosion ( <Tip>Shadow Erosion</Tip> và <Tip>Linked Misfortune</Tip>) vẫn là bắt buộc, nên chỉ còn lại hai ô charm.</p>
          <details>
            <summary>Cân nhắc sát thương của charm</summary>
            <p>Để tham khảo, phần này thử trên boss đơn mục tiêu, độ khó 2/3:</p>
            <ul>
              <li><Tip>Soul Pact Resonance</Tip> 100%</li>
              <li><Tip>Mantra of Blessings</Tip> 83.4%</li>
              <li><Tip>Mana Surge</Tip> 78.4%</li>
              <li><Tip>Night's Blessing</Tip> 78.1%</li>
              <li><Tip>Falling Dark Star</Tip> 76.4%</li>
            </ul>
            <hr />
            <p><Tip>Soul Pact Resonance</Tip> thắng rõ ràng, nhưng cần luôn có triệu hồi trên sân, nên có hai nhược điểm:</p>
            <ol>
              <li>Bạn mất một phép sát thương dark cho nó, nhưng lượng tăng sát thương nhỉnh hơn phần mất đi ở rank thấp, và vượt trội rõ ở rank cao</li>
              <li>Chỉ khả thi ở màn mà triệu hồi trụ được, tuỳ vào độ khó màn, việc kẻ địch có đòn AoE hay không và HP của triệu hồi (mức đầu tư rank skill)</li>
            </ol>
            <p><Tip>Mantra of Blessings</Tip> đứng thứ hai, nhưng cũng có nhược điểm riêng:</p>
            <ol>
              <li>Nó chỉ áp dụng cho người chơi có ATK cao nhất trên sân, cũng không vấn đề lắm, vì bạn vẫn đóng góp sát thương để qua màn, trừ khi người ATK cao nhất trong đội là healer/tank.</li>
              <li>Chỉ bản có rank cao nhất của <Tip>Mantra of Blessings</Tip> được áp dụng, nên nếu hai Sage cùng mang thì phí một ô.</li>
            </ol>
            <p>Các nhược điểm này không áp dụng khi chơi solo, vì bạn luôn là người có ATK cao nhất.</p>
            <p><Tip>Mana Surge</Tip> và <Tip>Night's Blessing</Tip> theo sát ngay sau, chênh lệch giữa chúng nằm trong sai số.</p>
            <p><Tip>Falling Dark Star</Tip> có vẻ theo sát phía sau, nhưng chỉ khi xét trung vị: nó có độ dao động may rủi lớn nhất trong mọi lựa chọn.</p>
            <p>Mức sát thương cao nhất của nó ngang với <Tip>Mana Surge</Tip> và <Tip>Night's Blessing</Tip>, trung vị chỉ kém một chút, còn mức thấp nhất thì tệ hại.</p>
            <p>Dù vậy, đây có thể là lựa chọn ổn cho Dominator cá voi chơi cạnh tranh (dù đáng lẽ nên chuyển sang Conqueror rồi) để có lợi thế SPD đi trước 33% thời gian (hai lựa chọn còn lại cũng đủ ổn).</p>
            <hr />
            <p>Ở tier này ta còn có <Tip>Aberrancy</Tip>, một lựa chọn thuần phòng thủ, không có chỗ trong build burst Arena hay build đơn mục tiêu (vì <Tip>Shadow of Termination</Tip> sẽ xoá hết stack erosion trên kẻ địch), nhưng có thể là lựa chọn ổn cho tình huống AoE và Tournament.</p>
          </details>
          <p>Mọi build sát thương trong danh sách đều hưởng lợi từ <Tip>Nyxarchon</Tip> (hoặc <Tip>Pandarial</Tip> vào cuối season này), nên nếu bạn đã chọn nó thay vì <Tip>Aegiswing</Tip> thì cứ dùng nó.</p>
          <p>Ở dungeon, đội bạn có thể qua màn dễ hơn nếu bạn mang <Tip>Resurrection</Tip> làm một charm, dù sát thương cá nhân sẽ giảm.</p>
          <p>Bạn phải tự cân nhắc điều gì quan trọng hơn với mình: qua dungeon hạng S ổn định hơn, hay đứng cao hơn trên bảng sát thương khi qua dungeon hạng A.</p>
          <Tabs>
            <Tab label="ST">
              <p>Có vài build đơn mục tiêu tuỳ tình huống. Đầu tiên là Treantling Soul Pact:</p>
              <Build
                techniques={[
                  'Treantling Summon',
                  'Dark Starburst',
                  'Dark Bullet',
                  'Shadow of Termination',
                ]}
                charms={[
                  'Linked Misfortune',
                  'Shadow Erosion',
                  'Mantra of Blessings',
                  'Soul Pact Resonance',
                ]}
              />
              <p>Như đã nói, build này chỉ khả thi ở màn mà Treantling trụ được hết thời gian.</p>
              <p>Treantling đặt ở ô đầu tiên, còn <Tip>Shadow of Termination</Tip> đặt ở ô cuối, lý do thì quá rõ.</p>
              <p><strong>Đừng để phí Mantra of Blessing.</strong></p>
              <p>Đổi Treantling sang Waterling sẽ hạ sát thương xuống ngang build không có Soul Pact, mà lượng hồi máu thì gần như không có, trừ khi bạn hy sinh thêm sát thương để lấy Healing Bonus %.</p>
              <p>Build thứ hai là build erosion thuần cho các màn mà <Tip>Soul Pact Resonance</Tip> không duy trì được 100% thời gian.</p>
              <Build
                techniques={[
                  'Mana Blast',
                  'Dark Starburst',
                  'Dark Bullet',
                  'Shadow of Termination',
                ]}
                charms={[
                  'Linked Misfortune',
                  'Shadow Erosion',
                  'Mantra of Blessings',
                  "Night's Blessing",
                ]}
              />
              <p>Một biến thể nhỏ là thay <Tip>Night's Blessing</Tip> bằng <Tip>Shadow Vengeance</Tip>, nếu bạn chỉ cần thêm chút lực cuối để qua màn.</p>
            </Tab>
            <Tab label="AoE">
              <Build
                techniques={[
                  'Mana Blast',
                  'Dark Starburst',
                  'Dark Bullet',
                  'Shadow Impact',
                ]}
                charms={[
                  'Linked Misfortune',
                  'Shadow Erosion',
                  'Mantra of Blessings',
                  'Aberrancy',
                ]}
              />
              <p>Khi đánh AoE, Dominator có thể dùng build Erosion quen thuộc, chỉ có thêm vài charm mới để chọn.</p>
              <p>Việc áp debuff diện rộng cho phép dùng <Tip>Aberrancy</Tip> để tăng chút khả năng sống sót.</p>
            </Tab>
            <Tab label="Healer">
              <p>Build hồi máu có nhiều biến thể nhất. Làm mốc chuẩn, ta lấy build hồi máu thuần với <Tip>Mantra of Blessings</Tip>:</p>
              <Build
                techniques={[
                  'Void Blessing',
                  'Radiant Restoration',
                  'Healing Touch',
                  'Rejuvenating Rain',
                ]}
                charms={[
                  'Phantom Light',
                  'Healing Mastery',
                  'Overhealing',
                  'Mantra of Blessings',
                ]}
              />
              <p>Hai charm Healing Bonus % chỉ đáng cân nhắc lúc đầu, càng về cuối season (và càng có nhiều Healing Bonus % trên trang bị) thì độ ưu tiên càng thấp.</p>
              <p>Nếu bạn là người có ATK cao nhất đội (hoặc có ai khác mang <Tip>Mantra of Blessings</Tip>), hãy cân nhắc đổi <Tip>Mantra of Blessings</Tip> sang <Tip>Resurrection</Tip> hoặc thậm chí <Tip>Falling Dark Star</Tip>, giúp tăng lượng hồi máu 67% thời gian.</p>
              <p>Nếu đội khó trụ: đổi <Tip>Mantra of Blessings</Tip> sang <Tip>Resurrection</Tip>.</p>
              <p>Nếu cần thêm hồi máu ở các màn đi nhanh mà đội diệt quái quá nhanh: đổi <Tip>Healing Touch</Tip> sang <Tip>Waterling Summon</Tip>, lượng hồi kém hơn nhưng có lợi thế hồi chiêu ban đầu bằng 0.</p>
              <p>Nếu bản thân khó trụ: đổi <Tip>Mandragora</Tip> sang <Tip>Aegiswing</Tip>, và nếu vẫn chưa đủ, <Tip>Mantra of Blessings</Tip> bằng <Tip>Shadow Vengeance</Tip>.</p>
              <p>Build cuối cùng sau nhiều thay đổi như vậy có thể trông thế này:</p>
              <Build
                techniques={[
                  'Void Blessing',
                  'Radiant Restoration',
                  'Healing Touch',
                  'Rejuvenating Rain',
                ]}
                charms={[
                  'Phantom Light',
                  'Healing Mastery',
                  'Shadow Vengeance',
                  'Resurrection',
                ]}
              />
            </Tab>
            <Tab label="Solo PVP">
              <Build
                techniques={[
                  'Abyssal Hand',
                  'Dark Starburst',
                  'Dark Bullet',
                  'Shadow of Termination',
                ]}
                charms={[
                  'Linked Misfortune',
                  'Shadow Erosion',
                  'Mantra of Blessings',
                  'Shadow Vengeance',
                ]}
              />
              <p>Build PVP solo có nhiều biến thể, thậm chí có thể làm bản lai hồi máu với sát thương bèo bọt cho các trận đánh lâu.</p>
              <p>Nhưng build “lười đọc” mà mình đưa ra là build burst đơn giản đã dùng season trước, có trộn thêm vài phép mới.</p>
            </Tab>
            <Tab label="Gánh em với, senpai">
              <p><strong>Build này chủ yếu cho CoH và Chaos Invasion</strong>, hy sinh tất cả để hỗ trợ sát thương cho đội, kèm chút hồi máu để giữ cả người chơi lẫn <Tip>Frenzy Totem</Tip> sống sót.</p>
              <p>Nhắc lại, đừng dùng build này ngoài đội hình booster giúp bạn bè gây sát thương cao hơn.</p>
              <Build
                techniques={[
                  'Radiant Restoration',
                  'Decoy Clone',
                  'Frenzy Totem',
                  'Dark Bullet',
                ]}
                charms={[
                  'Healing Mastery',
                  'Overhealing',
                  'Phantom Light',
                  'Mantra of Blessings',
                ]}
              />
              <p>Nhớ dùng <Tip>Chomusuke</Tip> hoặc <Tip>Nyxarchon</Tip> trong build này để giúp đội gây thêm sát thương nhờ khả năng giảm DEF.</p>
            </Tab>
            <Tab label="Summoner">
              <p>Build Summoner có vài nhược điểm, xếp theo mức độ nghiêm trọng (từ cao tới thấp):</p>
              <p>Nhược điểm chính của build summoner là <strong>cơ chế khớp rất kém với lối chơi cốt lõi</strong>: sát thương triệu hồi được cân bằng dựa trên việc chúng sống hết thời gian, điều khó đạt ở nội dung độ khó cao.</p>
              <p>Để triệu hồi sống lâu hơn, bạn vừa phải đầu tư nhiều để nâng skill bằng bản trùng, vừa phải xây chỉ số phòng thủ (HP, block…) trên trang bị vượt mức bản thân cần để triệu hồi thừa hưởng, việc này sẽ ăn vào tiềm năng sát thương.</p>
              <p>Sát thương summoner thuộc đủ mọi nguyên tố, buộc “người giữ thú” phải đầu tư cả năm hệ;</p>
              <p>Nhược điểm nhẹ nhất là sát thương triệu hồi dồn về cuối: phải đợi hết thời gian triệu hồi mới phát huy hết, trong khi build burst sẽ giảm dần số kẻ địch và giảm sát thương nhận vào trên đường đi;</p>
              <p>Cũng phải nhắc tới sự đa dạng: chưa có đủ triệu hồi để lấp đầy thanh skill (nếu tính riêng sát thương), và với cách cân bằng của SxS thì tới lúc có đủ, những con cũ nhất đã bị lỗi thời hoàn toàn.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Prophet" icon="skills/classes/prophet.png">
          <p>Prophet là bậc mà Sage trở thành <strong>healer thật sự</strong>, đồng thời có thêm một lối Bóng tối dựa trên debuff.</p>
          <p><Tip>Radiant Rhythm</Tip> hồi máu cho một đồng minh rồi lan sang tối đa 5 lần (hồi lặp lại lên cùng người giảm 35%). <Tip>Rejuvenating Elixir</Tip> mang theo 3 bình thuốc, tự động dùng khi đồng minh xuống dưới 50% HP, cứ 3 lượt tạo thêm 1 bình.</p>
          <p>Ở hướng tấn công, <Tip>Hexed Blast</Tip> gây thêm 1 hit Bóng tối cho mỗi loại debuff trên mục tiêu (tối đa 3), còn <Tip>Desperate Shadow</Tip> có 70% gây ngẫu nhiên Weakened 2, Armor Break 2 hoặc Slow 2, đúng thứ <Tip>Hexed Blast</Tip> cần.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><Tip>Phantom Light</Tip> chuyển 100% lượng hồi dư thành khiên, nên hồi máu dư thừa không bị lãng phí.</p>
            <p><Tip>Resurrection</Tip> chỉ kích hoạt 1 lần mỗi trận, nhưng có thể quyết định thắng thua ở nội dung khó.</p>
            <p><Tip>Ring of Omen</Tip> giảm Effect RES của kẻ địch mỗi lượt, giúp debuff của cả đội trúng dễ hơn.</p>
          </Alert>
          <Tabs>
            <Tab label="Hồi máu">
              <Build
                techniques={['Rejuvenating Rain', 'Healing Touch', 'Radiant Rhythm', 'Radiant Restoration']}
                charms={['Phantom Light', 'Overhealing', 'Rejuvenating Elixir', 'Resurrection']}
              />
              <p><strong>Build healer chính.</strong> <Tip>Radiant Restoration</Tip> hồi cả đội, <Tip>Radiant Rhythm</Tip> hồi lan, <Tip>Rejuvenating Rain</Tip> hồi mạnh hơn cho người dưới 50% HP, và <Tip>Healing Touch</Tip> giải Ailment/Debuff.</p>
              <p><Tip>Overhealing</Tip> có 30% hồi thêm cho mọi đồng minh trong 1 ô quanh mục tiêu, rất hợp khi đội đứng gần nhau.</p>
            </Tab>
            <Tab label="Bóng tối debuff">
              <Build
                techniques={['Desperate Shadow', 'Hexed Blast', 'Soul Reap', 'Void Chant']}
                charms={['Ring of Omen', 'Shadowy Current', 'Shadow Erosion', 'Cursed Armor']}
              />
              <p><Tip>Desperate Shadow</Tip> gây debuff trước để <Tip>Hexed Blast</Tip> đánh thêm hit; <Tip>Shadow Erosion</Tip> và <Tip>Cursed Armor</Tip> còn gây thêm Erosion, cũng tính là một loại debuff.</p>
              <p><Tip>Soul Reap</Tip> mạnh dần khi mục tiêu mất máu, dùng để kết liễu. <Tip>Void Chant</Tip> phạt kẻ địch mỗi lần chúng dùng technique.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Hierarch" icon="skills/classes/hierarch.png">
          <p>Hierarch là bậc mà <strong>triệu hồi</strong> trở thành lối chơi chính của nhánh Sage.</p>
          <p>Bạn có bốn skill triệu hồi: <Tip>Rock Rex Summon</Tip>, <Tip>Thalasson Summon</Tip> và <Tip>Phantom Summon</Tip> chỉ dùng được 1 lần mỗi trận, còn <Tip>Flamewyrm Summon</Tip> có Zero Initial CD, tồn tại 3 lượt và dùng lại được.</p>
          <p><Tip>Pact Hex</Tip> giúp mọi vật triệu hồi gây thêm sát thương Bóng tối quanh chúng ở cuối mỗi lượt của chúng. Ngoài ra Hierarch có lối Erosion với <Tip>Darkveil Formation</Tip>, <Tip>Hex Edict</Tip> và <Tip>Veritas Pact</Tip>.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><strong>Thứ tự skill rất quan trọng</strong>: các skill triệu hồi 1 lần mỗi trận nên đặt đầu để quân triệu hồi ra sân sớm nhất.</p>
            <p><Tip>Soulweave</Tip> triệu hồi Infernal Fiend khi 3 vật triệu hồi của bạn chết hoặc biến mất. <Tip>Flamewyrm Summon</Tip> tự biến mất sau 3 lượt nên giúp kích hoạt nó nhanh hơn.</p>
            <p><Tip>Eidolon Whisper</Tip> vừa tăng ATK cho vật triệu hồi, vừa đẩy nhanh lượt của một con mỗi lượt.</p>
          </Alert>
          <Tabs>
            <Tab label="Triệu hồi">
              <Build
                techniques={['Rock Rex Summon', 'Thalasson Summon', 'Phantom Summon', 'Flamewyrm Summon']}
                charms={['Summoner\'s Frenzy', 'Summoning Pact', 'Soulweave', 'Eidolon Whisper']}
              />
              <p><strong>Build triệu hồi chính.</strong> Ba vật triệu hồi mạnh ra sân trong vài lượt đầu, <Tip>Flamewyrm Summon</Tip> liên tục được gọi lại, và <Tip>Soulweave</Tip> mang thêm Infernal Fiend về sau.</p>
              <p><Tip>Summoning Pact</Tip> tiêu 2% Max HP để tăng HP cho vật triệu hồi, phần HP này được hồi lại nếu bạn sống tới khi thắng. Có thể đổi nó sang <Tip>Pact Hex</Tip> nếu muốn thêm sát thương.</p>
            </Tab>
            <Tab label="Erosion">
              <Build
                techniques={['Darkveil Formation', 'Void Assault', 'Judgment Word', 'Shadow of Termination']}
                charms={['Hex Edict', 'Nightshade Soulplate', 'Veritas Pact', 'Linked Misfortune']}
              />
              <p><Tip>Darkveil Formation</Tip> và <Tip>Void Assault</Tip> gây Erosion trực tiếp, <Tip>Judgment Word</Tip> gây Weakened và qua <Tip>Hex Edict</Tip> có thêm cơ hội gây Erosion. <Tip>Shadow of Termination</Tip> kích nổ mọi tầng Erosion trên mục tiêu.</p>
              <p><Tip>Nightshade Soulplate</Tip> giảm sát thương nhận vào và tự kích hoạt Erosion mỗi cuối lượt. Toàn bộ technique là Bóng tối nên <Tip>Veritas Pact</Tip> vào Nether Pact sau 8 lần thi triển.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Demiurge" icon="skills/classes/compass/class-26.webp">
          <p>Demiurge hoàn thiện lối triệu hồi với <strong>vật triệu hồi không giới hạn thời gian</strong> được bảo vệ, cùng một skill kích nổ Erosion cực mạnh.</p>
          <p><Tip>Soulbinder</Tip> giúp vật triệu hồi không giới hạn thời gian đầu tiên nhận ít sát thương và gây thêm sát thương. <Tip>Deathrattle</Tip> tạo khiên dựa trên Max HP của bạn cho một vật triệu hồi không giới hạn thời gian mỗi khi vật triệu hồi có giới hạn (như Flora, Flamewyrm) chết hoặc hết hạn.</p>
          <p><Tip>Eclipse Burst</Tip> lập tức kích hoạt Erosion <strong>12 lần</strong> nếu mục tiêu đang có Erosion, là đòn kết của lối Erosion. Ngoài ra Demiurge có thêm skill hỗ trợ: <Tip>Merciful Wish</Tip> giảm sát thương cho đồng minh, <Tip>Guardian Totem</Tip> triệu hồi totem không thể bị đánh.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><Tip>Flora Summon</Tip> và <Tip>Flamewyrm Summon</Tip> chỉ tồn tại 3 lượt, nên mỗi lần chúng biến mất lại kích hoạt <Tip>Deathrattle</Tip> và tính vào <Tip>Soulweave</Tip>.</p>
            <p><Tip>Wraithguard Summon</Tip> xuất hiện cạnh kẻ địch trong 4 ô, không phải cạnh bạn. Hãy để ý vị trí trước khi dùng.</p>
          </Alert>
          <Tabs>
            <Tab label="Triệu hồi">
              <Build
                techniques={['Thalasson Summon', 'Flamewyrm Summon', 'Flora Summon', 'Wraithguard Summon']}
                charms={['Soulweave', 'Eidolon Whisper', 'Deathrattle', 'Soulbinder']}
              />
              <p>Thalasson và Wraithguard là quân chủ lực, Flora và Flamewyrm liên tục được gọi lại và mỗi lần biến mất lại tạo khiên cho quân chủ lực qua <Tip>Deathrattle</Tip>.</p>
            </Tab>
            <Tab label="Erosion">
              <Build
                techniques={['Darkveil Formation', 'Ravenous Curse', 'Shadow Wraith', 'Eclipse Burst']}
                charms={['Soul Corrosion', 'Shadow Erosion', 'Linked Misfortune', 'Cursed Link']}
              />
              <p>Rải Erosion bằng <Tip>Darkveil Formation</Tip>, <Tip>Shadow Erosion</Tip> và <Tip>Linked Misfortune</Tip>, rồi dùng <Tip>Eclipse Burst</Tip> để kích hoạt 12 lần. <Tip>Soul Corrosion</Tip> tăng sát thương Erosion và kích hoạt thêm mỗi khi technique Bóng tối trúng mục tiêu đang bị Erosion.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Omnifex" icon="skills/classes/compass/class-30.webp">
          <Alert type="red" title="Class chưa ra mắt">
            <p>Omnifex là class bậc 8 của nhánh này và <strong>chưa có ở bản hiện tại</strong>. Dữ liệu skill lấy từ file game nên có thể thay đổi khi ra mắt; hai skill <Tip>Starlight Descent</Tip> và <Tip>Shadow Undertow</Tip> còn chưa có mô tả. Build dưới đây chỉ để tham khảo trước.</p>
          </Alert>
          <p>Omnifex có hai hướng: <strong>Bóng tối gây debuff</strong> và <strong>triệu hồi sinh sôi</strong>.</p>
          <p><Tip>Triune Salvo</Tip> ném 3 Arcanebolt, lần lượt gây Weakened 1, Armor Break 1 và Slow 1. Mỗi debuff gây thành công lại kích hoạt <Tip>Cursed Link</Tip> (50% gây thêm sát thương Bóng tối) và cộng ATK qua <Tip>Hexecho</Tip>.</p>
          <p>Ở hướng triệu hồi, <Tip>Phantomcraft</Tip> sinh thêm Shadeborn mỗi khi vật triệu hồi hoặc Fantomon của bạn hạ kẻ địch (tối đa 5), còn <Tip>Spiritune</Tip> tăng Elemental Mastery cho vật triệu hồi.</p>
          <Tabs>
            <Tab label="Debuff">
              <Build
                techniques={['Decoy Clone', 'Ravenous Curse', 'Darkveil Formation', 'Triune Salvo']}
                charms={['Shadow Vengeance', 'Mantra of Blessings', 'Cursed Link', 'Hexecho']}
              />
              <p><Tip>Decoy Clone</Tip> kết nối với một kẻ địch, mọi HP phân thân mất đi đều được chuyển thành True DMG lên mục tiêu. <Tip>Mantra of Blessings</Tip> tăng sát thương cho đồng minh có ATK cao nhất, hợp khi đi đội.</p>
            </Tab>
            <Tab label="Triệu hồi">
              <Build
                techniques={['Tideguard Summon', 'Thalasson Summon', 'Flora Summon', 'Flamewyrm Summon']}
                charms={['Phantomcraft', 'Spiritune', 'Soulbinder', 'Eidolon Whisper']}
              />
              <p>Càng nhiều vật triệu hồi hạ được kẻ địch, <Tip>Phantomcraft</Tip> càng sinh thêm Shadeborn, nên build mạnh nhất ở nội dung nhiều quái.</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
