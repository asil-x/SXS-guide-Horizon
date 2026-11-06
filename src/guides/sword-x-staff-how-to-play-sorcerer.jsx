import { Alert, Build, ClassBuild, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Hướng dẫn chơi Sorcerer',
  short: 'Sorcerer',
  category: 'class',
  cover: 'skills/classes/sorcerer.png',
};

export default function Page() {
  return (
    <>
      <p><strong>Vua sát thương AoE, và cũng là vua chết sớm nếu party không có tank.</strong></p>
      <p>Sorcerer có sát thương AoE khủng và sát thương đơn mục tiêu tốt, đổi lại có ít HP và ít lớp phòng thủ hơn các class khác.</p>
      <ProsCons id="pros-cons" title="Điểm mạnh & điểm yếu của Sorcerer">
        <Pro>Trần sát thương rất cao nhờ có Technique ở gần như mọi nguyên tố trừ Dark. Bạn sẽ không bao giờ thiếu sát thương để hạ kẻ địch</Pro>
        <Pro>Càng mở nhiều tier, build AoE càng hoành tráng và vui. Nếu bạn thích vậy thì class này dành cho bạn</Pro>
        <Con>Class mỏng manh. Thậm chí có thể nói là mỏng nhất game vì gần như không có lớp phòng thủ nào</Con>
        <Con>Nếu không có Mana Surge hoặc trang bị tốt, đầu game rất khó kiếm nguồn crit rate</Con>
      </ProsCons>
      <Alert title="Hãy thử nghiệm build!">
        <p><strong>Hãy nhớ đây chỉ là khung mẫu</strong> để bạn điều chỉnh theo trang bị, lối chơi, skill và Fantomon của mình.</p>
      </Alert>

      <hr />

      <h2 id="best-stats">Chỉ số tốt nhất</h2>
      <p>Sorcerer thuần gây sát thương, nên chỉ số đơn giản hơn so với Sage hay Knight, vốn phải lo nhiều thứ hơn.</p>
      <p>Ưu tiên cao nhất cho cả <strong>Crit Rate</strong> và <strong>Crit DMG</strong>, với <strong>Elemental Mastery</strong> theo sát phía sau để tăng sát thương thêm nữa.</p>
      <p>Sau 3 chỉ số đó, <strong>ATK</strong> và <strong>SPD</strong> (cả số cố định lẫn %) là mục tiêu tiếp theo để không bị tụt sát thương so với các class khác.</p>
      <p>Cuối cùng, đừng hoàn toàn quên <strong>Accuracy</strong> và <strong>Effect Hit Rate</strong>.</p>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p><strong><Tip>Nyxarchon</Tip> là lựa chọn tốt nhất (BiS) cho mọi build DPS.</strong> Hãy quay banner pet cho tới khi đủ để đổi nó.</p>
      <p>Có thêm ô charm và chỉ số gốc cao hơn khiến Fantomon Mythic mạnh hơn trong hầu hết tình huống.</p>
      <p>Các lựa chọn phổ biến khác là <Tip>Sylvaerie</Tip>, <Tip>Zeioletus</Tip> và <Tip>Kels</Tip> tuỳ build của bạn.</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companion cho chỉ số bị động ở các mốc cấp nhất định, nên hãy tập trung nâng vài companion có lợi trực tiếp cho class lên cấp 50 trước, rồi mới nâng hết.</p>
      <p><strong>MỌI CLASS đều được lợi từ DMG Boost và Reduction</strong> để vừa tăng sát thương vừa tăng khả năng sống sót.</p>
      <p>Với Sorcerer, chỉ số quan trọng nhất là <em>Crit Rate</em>: <Tip>Eiichi</Tip>, <Tip>Freya</Tip>, <Tip>Naira</Tip>, <Tip>Qin</Tip>, <Tip>Reina</Tip>, <Tip>Sylvia</Tip>… có rất nhiều companion để chọn.</p>
      <p>Ưu tiên thứ hai là <em>Accuracy</em>, với các companion như <Tip>Akane</Tip>, <Tip>Hermes</Tip>, <Tip>Jiangwang</Tip> và <Tip>Ophelia</Tip>.</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="Bậc Gem">
        <p>Mình lấy gem T10 làm ví dụ, nhưng <strong>bậc càng cao thì chỉ số càng tốt</strong>. Gem có từ T1 tới T15.</p>
      </Alert>
      <p><Tip>T10 Obsidian</Tip> tốt cho mọi class, vì ai cũng cần thêm sát thương dù chơi kiểu gì.</p>
      <p><Tip>T10 Moonstone</Tip> cũng khá phổ biến với mọi class để tăng khả năng sống sót.</p>
      <p>Sorcerer cũng hưởng lợi nhiều từ <Tip>T10 Amethyst</Tip> vì nó cho SPD và Crit Rate.</p>
      <p>Gem một chỉ số vẫn tốt để lấp phần còn lại của trang bị, <Tip>T10 Ruby</Tip> và <Tip>T10 Citrine</Tip> là lựa chọn tốt thứ hai cho class này.</p>

      <hr />

      <h2 id="about-harmony-builds">Về build Harmony</h2>
      <p>Sorcerer có thể chơi build đơn nguyên tố, nhưng dùng nhiều nguyên tố cùng <Tip>Elemental Harmony</Tip> sẽ cho sát thương cao hơn trong hầu hết tình huống.</p>
      <p>Nghĩa là hãy xem mọi build chỉ để tham khảo, và luôn đổi phép theo độ hiếm cũng như loại kẻ địch đang đánh để tận dụng điểm yếu nguyên tố.</p>
      <p><strong>Nên có ít nhất 2-3 Technique khác nguyên tố.</strong></p>
      <p>Một điểm tuyệt nhất của Sorcerer là sự linh hoạt và số lượng phép / nguyên tố có thể dùng, nên hãy luôn thử nghiệm build!</p>

      <hr />

      <h2 id="builds">Builds</h2>
      <Tabs big>
        <Tab label="Mage" icon="skills/classes/mage.png">
          <p>Đầu game chưa có nhiều build vì bạn bị giới hạn bởi số phép có được.</p>
          <p><strong>Hầu hết mọi người sẽ chơi build sát thương nguyên tố ở giai đoạn này</strong>, trong đó hệ nước phổ biến nhất nhờ <Tip>Water Assault</Tip> và <Tip>Water to Ice</Tip>.</p>
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
        <Tab label="Sorcerer" icon="skills/classes/sorcerer.png">
          <Alert type="red" title="LƯU Ý QUAN TRỌNG">
            <p><strong>Giữ mạng</strong>: luôn cân nhắc đưa <Tip>Void Bubble</Tip> vào build, charm phòng thủ tốt nhất mở ở Tier 2.</p>
            <p><strong>May rủi chí mạng</strong>: Dungeon và trang bị mới giảm bớt việc trông chờ chí mạng, bạn có thể cân nhắc bỏ <Tip>Mana Surge</Tip> tuỳ chỉ số của mình.</p>
          </Alert>
          <p><Tip>Elemental Harmony</Tip> là một trong những charm tăng sát thương mạnh nhất, và cuối cùng ta đã có build cho mọi nguyên tố, trở thành Sorcerer đúng nghĩa.</p>
          <Tabs>
            <Tab label="Harmony">
              <Build
                techniques={[
                  'Lightning Chain',
                  'Fiery Star Trail',
                  "Wind's Delight",
                  'Water Assault',
                ]}
                charms={[
                  'Elemental Harmony',
                  'Mana Surge',
                  "Wind's Shadow",
                  'Lightning Mystery',
                ]}
              />
              <p>Build mạnh nhất cho nội dung chung, tận dụng lượng elemental mastery khổng lồ mà <Tip>Elemental Harmony</Tip> mang lại.</p>
              <p>Vì có rất nhiều phép nguyên tố, các bạn có thể chỉnh build này, miễn có ít nhất 3 nguyên tố khác nhau để nhận buff ngon lành đó.</p>
              <p>Nếu muốn thêm sát thương đơn mục tiêu, đổi sang <Tip>Water Shot</Tip>, <Tip>Flame Jet</Tip>, và <Tip>Light of Dawn</Tip>.</p>
            </Tab>
            <Tab label="Sét">
              <Build
                techniques={[
                  'Lightning Chain',
                  'Flickering Stars',
                  "Wind's Delight",
                  'Light of Dawn',
                ]}
                charms={[
                  'Lightning Mystery',
                  "Wind's Shadow",
                  'Elemental Harmony',
                  'Mana Surge',
                ]}
              />
              <p>Một trong những build dọn quái AoE tốt nhất ở dungeon, và đang thành nguyên tố mình thích chơi nhất.</p>
              <p>Ta trộn thêm phép của một nguyên tố khác để tận dụng <Tip>Elemental Harmony</Tip>, nhưng bạn có thể dùng <Tip>Energy Burst</Tip> nếu muốn buff phép mạnh hơn nữa.</p>
            </Tab>
            <Tab label="Đóng băng">
              <Build
                techniques={[
                  'Water Assault',
                  'Frosty Nova',
                  'Water Shot',
                  'Ice Spike',
                ]}
                charms={[
                  'Lightning Mystery',
                  'Water to Ice',
                  'Mana Surge',
                  "Dew's Blessing",
                ]}
              />
              <p>Build mạnh giúp dễ làm cạn thanh stamina của boss và đóng băng chúng khá thường xuyên.</p>
              <p>Cá nhân mình không thích <Tip>Ice Spike</Tip>, nên giống các build khác, mình dùng bản lai.</p>
            </Tab>
            <Tab label="Lửa">
              <Build
                techniques={[
                  'Fireball',
                  'Fiery Star Trail',
                  'Blazing Fire Ring',
                  'Flame Jet',
                ]}
                charms={[
                  'Heart of Flame',
                  'Raging Wildfire',
                  'Lightning Mystery',
                  'Mana Surge',
                ]}
              />
              <p><em>Cập nhật: Có vẻ <Tip>Flaming Path</Tip> và <Tip>Raging Wildfire</Tip> không hợp nhau</em>. Mình đoán là không thể cộng dồn nhiều “burn” trên cùng một ô, nên <Tip>Flaming Path</Tip> luôn gây rất ít hoặc không gây sát thương.</p>
              <p>Ta bỏ nó và thay bằng <Tip>Mana Surge</Tip> để tăng chí mạng.</p>
              <p>Build tốt cho nội dung AoE nhưng không tốt lắm với đơn mục tiêu, trừ khi đổi Charm.</p>
            </Tab>
            <Tab label="Gió">
              <Build
                techniques={[
                  'Tempest Sphere',
                  "Wind's Delight",
                  'Iron Thorn',
                  'Cyclone',
                ]}
                charms={[
                  'Unstable Aura',
                  "Wind's Shadow",
                  "Wind's Whisper",
                  'Lightning Mystery',
                ]}
              />
              <p><Tip>Unstable Aura</Tip> vẫn là lựa chọn chắc chắn để gây sát thương với các phép bắn nhiều đạn, và còn tốt hơn ở Tier 2 sau khi mở <Tip>Wind's Shadow</Tip>.</p>
              <p>Cinder Ridge có nhiều kẻ địch yếu hệ Gió, nên mình dùng build này khá nhiều khi khám phá bản đồ.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Archmage" icon="skills/classes/archmage.png">
          <Alert type="red" title="LƯU Ý QUAN TRỌNG">
            <p><strong>Giữ mạng</strong>: luôn cân nhắc đưa <Tip>Void Bubble</Tip>, <Tip>Frost Guard</Tip> và/hoặc <Tip>Repelling Wind</Tip> vào build, công cụ phòng thủ tuyệt vời.</p>
            <p><strong>Giảm hồi chiêu</strong>: <Tip>Rapid Cast</Tip> giúp tung phép nhanh hơn ở đầu trận. Dù chỉ một lần, đây vẫn là charm tốt nhất ở tier này, lại còn cho elemental mastery.</p>
          </Alert>
          <p>Phép AoE mới để quét sạch kẻ địch trên đường đi, kèm vài phép đơn mục tiêu (rất cần) cho một số nguyên tố.</p>
          <p>Nhìn chung với build đơn nguyên tố: <strong>Sét &gt; Lửa &gt; Băng = Gió</strong>.</p>
          <p>Dù vậy, build Harmony vẫn mạnh nhất nếu bạn có charm <Tip>Elemental Harmony</Tip> tốt.</p>
          <Tabs>
            <Tab label="Harmony">
              <Build
                techniques={[
                  'Lightning Chain',
                  'Meteoric Flames',
                  'Howling Hurricane',
                  'Aqua Vortex',
                ]}
                charms={[
                  'Elemental Harmony',
                  'Rapid Cast',
                  'Radiant Sear',
                  'Lightning Mystery',
                ]}
              />
              <p><strong>Build AoE tốt nhất game</strong>, dùng toàn bộ phép mới mở ở Tier 3.</p>
              <p><Tip>Aqua Vortex</Tip> có sát thương không quá cao, nhưng phần sát thương thêm từ đẩy lùi khá ổn và bù lại được.</p>
              <p>Dù skill hồi chiêu lâu, đây vẫn là bộ tốt nhất cho nội dung AoE.</p>
              <hr />
              <p><strong>Với nội dung đơn mục tiêu</strong></p>
              <p>mình đổi <Tip>Lightning Chain</Tip> sang <Tip>Fire Blast</Tip>, vì nó cho sát thương đơn mục tiêu cao hơn nhiều.</p>
              <p>Nếu đánh mục tiêu lớn và boss, mình thêm <Tip>Divine Wrath</Tip>, thay phép nào thì tuỳ bạn.</p>
              <ul>
                <li>Nếu muốn có 4 nguyên tố khác nhau cho <Tip>Elemental Harmony</Tip>, thay <Tip>Meteoric Flames</Tip></li>
                <li>Nếu chỉ cần 3 nguyên tố, mình sẽ thay <Tip>Howling Hurricane</Tip> hoặc <Tip>Aqua Vortex</Tip> tuỳ kẻ địch kháng hệ gì</li>
              </ul>
              <hr />
              <p><strong>Bản nuke</strong></p>
              <p>Không có skill spam được (bỏ <Tip>Lightning Chain</Tip> và/hoặc <Tip>Fire Blast</Tip>) mà dùng các phép AoE lớn.</p>
              <p><Tip>Meteoric Flames</Tip>, <Tip>Howling Hurricane</Tip>, <Tip>Aqua Vortex</Tip> và <Tip>Divine Wrath</Tip> cùng lúc.</p>
              <p>Lựa chọn hoành tráng, nhưng thường kém sát thương hơn so với có một phép không hồi chiêu để dọn quái / thêm sát thương.</p>
            </Tab>
            <Tab label="Sét">
              <Build
                techniques={[
                  'Divine Wrath',
                  'Flickering Stars',
                  'Light of Dawn',
                  'Lightning Chain',
                ]}
                charms={[
                  'Lightning Mystery',
                  'Radiant Sear',
                  'Incarnation of Light',
                  'Rapid Cast',
                ]}
              />
              <p><Tip>Divine Wrath</Tip> trở thành phép mạnh nhất của ta, dù hồi chiêu lâu.</p>
              <p><Tip>Radiant Sear</Tip> cũng là phép rất tốt, vì có 50% tỉ lệ gốc kích hoạt với MỌI nguyên tố / technique, khiến nó thành charm sát thương nội tại tốt nhất ở Tier 3.</p>
            </Tab>
            <Tab label="Đóng băng">
              <Build
                techniques={[
                  'Water Assault',
                  'Frosty Nova',
                  'Water Shot',
                  'Aqua Vortex',
                ]}
                charms={[
                  'Radiant Sear',
                  'Water to Ice',
                  'Rapid Cast',
                  "Dew's Blessing",
                ]}
              />
              <p>Build mạnh giúp dễ làm cạn thanh stamina của boss và đóng băng chúng khá thường xuyên.</p>
              <p>Cuối cùng ta cũng thay <Tip>Ice Spike</Tip> bằng một phép mới hơn (và mạnh hơn), <Tip>Aqua Vortex</Tip>.</p>
            </Tab>
            <Tab label="Lửa">
              <Build
                techniques={[
                  'Meteoric Flames',
                  'Fiery Star Trail',
                  'Fireball',
                  'Fire Blast',
                ]}
                charms={[
                  'Heart of Flame',
                  'Raging Wildfire',
                  'Mana Surge',
                  'Rapid Cast',
                ]}
              />
              <p><Tip>Fire Blast</Tip> trở thành phép spam chính và… trời ơi mạnh thật. Phép đơn mục tiêu mạnh nhất game <strong>trong số các technique không hồi chiêu</strong> của Sorcerer.</p>
              <p>Thay đổi duy nhất khác là thêm <Tip>Meteoric Flames</Tip>, skill sát thương chính mới của ta.</p>
              <p>Vì phần lớn phép lửa là AoE / một hit, ta có thể bỏ <Tip>Radiant Sear</Tip> và đổi sang <Tip>Mana Surge</Tip> để có thêm chí mạng cho phép (hoặc một charm phòng thủ).</p>
              <hr />
              <p><Tip>Fireball</Tip> có thể thay tuỳ nội dung bằng <Tip>Flame Jet</Tip> để có sát thương đơn mục tiêu cao hơn, đổi lại phải đứng gần kẻ địch, nên hãy chỉnh charm cho phù hợp.</p>
            </Tab>
            <Tab label="Gió">
              <Build
                techniques={[
                  'Howling Hurricane',
                  "Wind's Delight",
                  'Tempest Sphere',
                  'Cyclone',
                ]}
                charms={[
                  'Radiant Sear',
                  "Wind's Shadow",
                  "Wind's Whisper",
                  'Rapid Cast',
                ]}
              />
              <p><Tip>Unstable Aura</Tip> cuối cùng cũng bị thay sau thời gian dài, vì <Tip>Radiant Sear</Tip> kích hoạt thường xuyên hơn và nhìn chung hữu dụng hơn, sát thương cao hơn.</p>
              <p><Tip>Iron Thorn</Tip> cũng bị loại, và ta có món đồ chơi mới, bóng loáng, mạnh nhất: <Tip>Howling Hurricane</Tip>. Dù hồi chiêu lâu, sát thương vẫn tuyệt vời.</p>
              <hr />
              <p>Còn <Tip>Repelling Wind</Tip> thì sao? Rất tốt cho PvP, rất tốt khi chơi một mình. <em>Mình sẽ không bao giờ dùng nó ở nội dung nhiều người</em> vì sát thương không cao.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Destroyer" icon="skills/classes/destroyer.png">
          <Alert type="red" title="LƯU Ý QUAN TRỌNG">
            <p><strong>Giữ mạng</strong>: luôn cân nhắc thêm lớp phòng thủ khi cần: <Tip>Void Bubble</Tip>, <Tip>Repelling Wind</Tip>, <Tip>Frost Guard</Tip> hoặc <Tip>Overload Protection</Tip></p>
            <p><strong>May rủi chí mạng</strong>: Dungeon và trang bị mới giảm bớt việc trông chờ chí mạng, bạn có thể cân nhắc bỏ <Tip>Mana Surge</Tip> và <Tip>Explosive Spirit</Tip> tuỳ chỉ số của mình.</p>
          </Alert>
          <p>Tier 4 thì… hơi nhạt, nhưng vẫn là bản nâng cấp so với các bộ trước.</p>
          <p>Tóm tắt nhanh: build Harmony yếu đi một chút, nhường chỗ cho build lai (thường 2 nguyên tố), còn build đơn nguyên tố trở nên khá tốt khi chơi solo.</p>
          <p>Cuối cùng, một trong những phép tốt nhất mở ở tier này lại là buff chứ không phải technique sát thương. <Tip>Formation Breaker</Tip> tốt khi chơi solo và <strong>cực kỳ phổ biến</strong> trong nội dung nhóm.</p>
          <Tabs>
            <Tab label="Đơn mục tiêu">
              <Build
                techniques={[
                  'Formation Breaker',
                  'Meteoric Flames',
                  'Divine Wrath',
                  'Thunder of Judgment',
                ]}
                charms={[
                  'Rapid Cast',
                  'Mana Surge',
                  'Radiant Sear',
                  'Elemental Harmony',
                ]}
              />
              <p>Build đơn mục tiêu tập trung vào boss và nội dung co-op, nơi ta có thể buff cả đội bằng <Tip>Formation Breaker</Tip>.</p>
              <p>Thay đổi thật sự duy nhất ở tier này là có thêm <Tip>Thunder of Judgment</Tip>, một technique tuyệt vời và là sát thương đơn mục tiêu mạnh nhất ở Tier 4.</p>
              <p>Mình vẫn dùng <Tip>Elemental Harmony</Tip> vì có nhiều bản trùng, nhưng bạn có thể bỏ để thêm lớp phòng thủ hoặc đơn giản là thêm sát thương với charm như <Tip>Lightning Mystery</Tip>.</p>
              <p>Kể cả khi chơi solo <Tip>Formation Breaker</Tip> thường vẫn là lựa chọn nên dùng, nhưng có thể thay bằng phép gió để thêm sát thương, hoặc thậm chí <Tip>Fire Blast</Tip> cho đơn mục tiêu nếu cần.</p>
            </Tab>
            <Tab label="Lửa">
              <Build
                techniques={[
                  'Fireball',
                  'Fiery Star Trail',
                  'Meteoric Flames',
                  'Blazing Fire Ring',
                ]}
                charms={[
                  'Explosive Spirit',
                  'Fiery Burst',
                  'Raging Wildfire',
                  'Fiery Rejuvenation',
                ]}
              />
              <p>Không thể nhấn mạnh đủ việc hệ lửa trở nên mạnh thế nào trong các trận dài và nội dung AoE nhiều kẻ địch.</p>
              <p><Tip>Fiery Burst</Tip> trở thành charm gây sát thương chính, nghĩa là tỉ lệ chí mạng rất quan trọng.</p>
              <p>Nếu may mắn có trang bị tốt, bạn có thể đổi <Tip>Explosive Spirit</Tip> sang <Tip>Radiant Sear</Tip>, <Tip>Rapid Cast</Tip> hoặc lấy một công cụ phòng thủ.</p>
            </Tab>
            <Tab label="Sét">
              <Build
                techniques={[
                  'Flickering Stars',
                  'Starlight Burst',
                  'Thunder of Judgment',
                  'Divine Wrath',
                ]}
                charms={[
                  'Rapid Cast',
                  'Radiant Sear',
                  'Lightning Mystery',
                  'Incarnation of Light',
                ]}
              />
              <p>Tốt cho cả chơi solo lẫn dọn quái AoE.</p>
              <p>Cả hai phép mới mở đều khá mạnh và là phép chủ lực trong build lai, <Tip>Starlight Burst</Tip> cho AoE và <Tip>Thunder of Judgment</Tip> cho sát thương đơn mục tiêu.</p>
            </Tab>
            <Tab label="Đóng băng">
              <Build
                techniques={[
                  'Aqua Vortex',
                  'Water Assault',
                  'Flowing Doom',
                  'Frosty Nova',
                ]}
                charms={[
                  'Rapid Cast',
                  'Water to Ice',
                  'Shattering Ice',
                  "Dew's Blessing",
                ]}
              />
              <p>Không tốt lắm cho nội dung đơn mục tiêu, <strong>nhưng tuyệt vời ở AoE và các màn có nhiều quái phụ</strong>, nơi bạn có thể kích hoạt <Tip>Shattering Ice</Tip> liên tục.</p>
              <p>Thay đổi duy nhất khác so với các tier trước là có thêm <Tip>Flowing Doom</Tip>, technique mới về cơ bản là bản nâng cấp của <Tip>Water Assault</Tip> (cũng tới lúc rồi lmao).</p>
              <p>Cá nhân mình thấy <Tip>Radiant Sear</Tip> tốt hơn <Tip>Water to Ice</Tip>, nhưng mình thích build đơn nguyên tố theo một chủ đề, nên dùng cái nào là tuỳ bạn.</p>
            </Tab>
            <Tab label="Gió">
              <Build
                techniques={[
                  'Tempest Sphere',
                  'Wind Blade Spiral',
                  "Wind's Delight",
                  'Howling Hurricane',
                ]}
                charms={[
                  'Cyclone Lament',
                  'Repelling Wind',
                  "Wind's Shadow",
                  'Unstable Aura',
                ]}
              />
              <p>Hệ gió tiến bộ vượt bậc so với Tier 3 nhờ charm và technique mới tập trung vào Laceration, <strong>hiệu ứng mới gây sát thương khi kẻ địch di chuyển</strong>.</p>
              <p>Về charm, mình dùng ba charm tấn công, bạn có thể thay một cái bằng <Tip>Wind's Shadow</Tip> để tăng ái lực gió, hoặc bỏ <Tip>Repelling Wind</Tip> nếu boss miễn nhiễm đẩy lùi để lấy <Tip>Radiant Sear</Tip> hoặc một công cụ phòng thủ khác.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Magister" icon="skills/classes/magister.png">
          <ClassBuild name="Magister" />
        </Tab>
        <Tab label="Arcanarch" icon="skills/classes/arcanarch.png">
          <ClassBuild name="Arcanarch" />
        </Tab>
        <Tab label="Thaumaturge" icon="skills/classes/compass/class-25.webp">
          <ClassBuild name="Thaumaturge" />
        </Tab>
        <Tab label="Thaumaturge VIII" icon="skills/classes/compass/class-29.webp">
          <ClassBuild name="Thaumaturge VIII" />
        </Tab>
      </Tabs>
    </>
  );
}
