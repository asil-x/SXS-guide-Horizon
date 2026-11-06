import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Hướng dẫn chơi Sorcerer',
  desc: 'Phép diện rộng và khống chế.',
  order: 4,
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
        <Pro>Khống chế diện rộng tốt: skill Nước gây Frozen/Wet, skill Gió hất tung hoặc đẩy lùi, giúp kiểm soát cả đám quái</Pro>
        <Con>Class mỏng manh. Thậm chí có thể nói là mỏng nhất game vì gần như không có lớp phòng thủ nào</Con>
        <Con>Nếu không có Mana Surge hoặc trang bị tốt, đầu game rất khó kiếm nguồn crit rate</Con>
        <Con>Nhiều build cần đủ technique cùng hệ mới phát huy (Electro cần skill Ánh sáng, Tideform cần 5 lần dùng skill Nước), nên đổi lối chơi tốn nhiều skill và tài nguyên hơn</Con>
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
          <p>Magister xây hẳn một lối chơi quanh <strong>Electro và Thunder Strike</strong>, đồng thời mở thêm skill cho cả bốn nguyên tố.</p>
          <p><Tip>Thunderbolt Mark</Tip> có 65% Base Chance gây Electro mỗi khi technique Ánh sáng trúng đích. Khi mục tiêu đang có Electro trúng thêm sát thương Ánh sáng, Electro bị xoá để gây thêm một lần sát thương Ánh sáng và lan sang kẻ địch gần đó.</p>
          <p><Tip>Thunder Judgment</Tip> còn đánh trả cả lượt của kẻ địch: mỗi khi kẻ địch trong 5 ô dùng technique, có 30% cơ hội gây Thunder Strike, tăng lên <strong>90%</strong> nếu chúng đang bị Electro hoặc Wet.</p>
          <p><Tip>Light Burst</Tip> là technique mới chính cho lối này: đánh 1 mục tiêu rồi lan sang tối đa 2 kẻ địch khác, mỗi kẻ địch bị trúng 1 lần.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><strong>Chỉ dùng technique Ánh sáng</strong> trong build chính: <Tip>Thunderbolt Mark</Tip> chỉ gây Electro từ sát thương Ánh sáng.</p>
            <p><Tip>Divine Wrath</Tip> đánh tới 16 hit ngẫu nhiên, nên dù sát thương mỗi hit giảm dần, nó là skill rải Electro lên nhiều kẻ địch tốt nhất.</p>
            <p><Tip>Frostsoul Ward</Tip> gây Wet lên kẻ tấn công bạn, cũng nâng cơ hội của <Tip>Thunder Judgment</Tip> lên 90%. Hãy cân nhắc nó nếu bạn hay bị đánh.</p>
          </Alert>
          <Tabs>
            <Tab label="Sét Ánh sáng">
              <Build
                techniques={['Light Burst', 'Starlight Burst', 'Thunder of Judgment', 'Divine Wrath']}
                charms={['Thunderbolt Mark', 'Thunder Judgment', 'Radiant Sear', 'Rapid Cast']}
              />
              <p><strong>Build chính của Magister.</strong> Cả 4 technique đều là Ánh sáng: <Tip>Divine Wrath</Tip> và <Tip>Starlight Burst</Tip> rải Electro diện rộng, <Tip>Light Burst</Tip> và <Tip>Thunder of Judgment</Tip> kích nổ Electro.</p>
              <p><Tip>Radiant Sear</Tip> có 50% cơ hội gây thêm 1 hit Ánh sáng mỗi lần trúng (lại thêm cơ hội gây Electro), còn <Tip>Rapid Cast</Tip> giảm hồi chiêu trước trận để vòng skill đầu tiên tới nhanh hơn.</p>
            </Tab>
            <Tab label="Nước + Sét">
              <Build
                techniques={['Frost Thorn', 'Light Burst', 'Thunder of Judgment', 'Divine Wrath']}
                charms={['Frostsoul Ward', 'Thunder Judgment', 'Thunderbolt Mark', 'Radiant Warp']}
              />
              <p><strong>Phiên bản an toàn hơn cho nội dung khó.</strong> <Tip>Frost Thorn</Tip> đánh 2 hit Nước vùng 3×3 và có thể gây Frozen, <Tip>Frostsoul Ward</Tip> gây Wet lên kẻ tấn công, giúp <Tip>Thunder Judgment</Tip> gần như luôn kích hoạt.</p>
              <p><Tip>Radiant Warp</Tip> tăng DMG RES và có 50% cơ hội dịch chuyển đi khi bị đánh, rất hợp với pháp sư tầm xa.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Arcanarch" icon="skills/classes/arcanarch.png">
          <p>Arcanarch có ba hướng rõ ràng: <strong>Nước Tideform</strong>, <strong>Lửa Burn</strong> và <strong>Gió hất tung</strong>.</p>
          <p>Điểm nổi bật là charm <Tip>Riptide</Tip>: sau 5 lần dùng technique Nước, bạn vào Tideform 2 lượt, tăng sát thương và mỗi lần thi triển có 30% cơ hội làm mới hồi chiêu để dùng lại (tối đa 2 lần mỗi lượt).</p>
          <p>Ở hướng Lửa, <Tip>Blackflame Scorch</Tip> đốt các ô trong vùng, rồi <Tip>Flare Eruption</Tip> hấp thụ mọi Burn trong 3 ô, mỗi Burn tăng 10% sát thương (tối đa 100%). Hướng Gió có <Tip>Riftwind Wheel</Tip> (4 hit, hất tung) kết hợp <Tip>Rupture Storm</Tip>.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><Tip>Surging Tide</Tip> bắt đầu từ 0% và chỉ tăng 5% cho mỗi skill Nước bạn trang bị, nên chỉ đáng dùng khi build có nhiều skill Nước.</p>
            <p><Tip>Frigid Spike</Tip> có Zero Initial CD và có thể gây Frozen, nên để đầu thứ tự skill để khống chế ngay lượt đầu.</p>
            <p><Tip>Overload Protection</Tip> tạo khiên mỗi khi bạn mất hơn 15% Max HP trong một lượt, rất hợp với pháp sư máu giấy.</p>
          </Alert>
          <Tabs>
            <Tab label="Nước Tideform">
              <Build
                techniques={['Tideburst', 'Frost Thorn', 'Frigid Spike', 'Judgment Thunder']}
                charms={['Radiant Warp', 'Overload Protection', 'Surging Tide', 'Riptide']}
              />
              <p>Ba technique Nước để nhanh chóng đạt 5 lần thi triển cho <Tip>Riptide</Tip>, còn <Tip>Judgment Thunder</Tip> (9 hit Ánh sáng ngẫu nhiên) bổ sung sát thương diện rộng.</p>
              <p><Tip>Tideburst</Tip> gây Wet, <Tip>Frost Thorn</Tip> và <Tip>Frigid Spike</Tip> có thể gây Frozen, nên build vừa gây sát thương vừa khống chế tốt.</p>
            </Tab>
            <Tab label="Lửa Burn">
              <Build
                techniques={['Blackflame Scorch', 'Flare Eruption', 'Crimson Whirl', 'Blast Spirit']}
                charms={['Pyre of Souls', 'Ember Flare', 'Omnirune Sigil', 'Rapid Cast']}
              />
              <p><Tip>Blackflame Scorch</Tip> đốt đất trước, rồi <Tip>Flare Eruption</Tip> hấp thụ Burn để gây Doom DMG. <Tip>Pyre of Souls</Tip> tăng sát thương Blast Spirit theo thời gian, còn <Tip>Ember Flare</Tip> có thể đặt thêm Blast Spirit mỗi khi hạ kẻ địch.</p>
              <p><Tip>Omnirune Sigil</Tip> tạo Rune theo hệ của technique, với Rune Lửa tăng Crit DMG.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Thaumaturge" icon="skills/classes/compass/class-25.webp">
          <p>Thaumaturge là bậc của <strong>Ánh sáng diện rộng nhiều hit</strong>, đồng thời làm Lửa Burn mạnh và bền hơn.</p>
          <p><Tip>Lightning Grid</Tip> thả 8 quả cầu sét trong vùng 3×5, mỗi quả lan sang thêm một kẻ địch. <Tip>Void Lightwave</Tip> quét cả hàng 1×7 ô. Cùng <Tip>Judgment Thunder</Tip>, mỗi vòng skill có rất nhiều hit, rất hợp với các charm kích hoạt theo từng hit.</p>
          <p>Ở hướng Lửa, <Tip>Ravaging Flame</Tip> có 40% cơ hội đốt đất vùng 3 ô quanh bản thân, <Tip>Scorching Resonance</Tip> tăng Affinity Lửa theo số ô đang cháy, còn <Tip>Phoenix Rise</Tip> giúp sống sót và biến Burn thành khiên.</p>
          <Alert type="red" title="Lưu ý quan trọng">
            <p><Tip>Formation Breaker</Tip> không gây sát thương mà tăng ATK cho đồng minh trong 3 ô và có thể đẩy nhanh lượt của họ. Đây là skill mạnh khi đi đội.</p>
            <p><Tip>Glare Fusion</Tip> tích Energy từ technique Ánh sáng và xả ra ở lần thứ 4, nên build càng nhiều technique Ánh sáng thì càng hiệu quả.</p>
            <p><Tip>Gale Scar</Tip> có 50% cơ hội gây thêm 1 hit Gió <strong>mỗi lần</strong> technique trúng đích, bất kể hệ, nên rất mạnh với các technique nhiều hit.</p>
          </Alert>
          <Tabs>
            <Tab label="Ánh sáng">
              <Build
                techniques={['Formation Breaker', 'Judgment Thunder', 'Void Lightwave', 'Lightning Grid']}
                charms={['Radiant Sear', 'Thunderbolt Mark', 'Glare Fusion', 'Gale Scar']}
              />
              <p><Tip>Radiant Sear</Tip> và <Tip>Gale Scar</Tip> đều có 50% gây thêm sát thương mỗi lần trúng, nhân lên theo số hit rất lớn của <Tip>Lightning Grid</Tip> và <Tip>Judgment Thunder</Tip>.</p>
              <p>Nếu chơi một mình, có thể đổi <Tip>Formation Breaker</Tip> sang <Tip>Divine Wrath</Tip> để thêm sát thương.</p>
            </Tab>
            <Tab label="Lửa Burn">
              <Build
                techniques={['Ravaging Flame', 'Blackflame Scorch', 'Flare Eruption', 'Blast Spirit']}
                charms={['Scorching Resonance', 'Phoenix Rise', 'Ember Flare', 'Pyre of Souls']}
              />
              <p>Giữ thật nhiều ô đang cháy quanh bạn để <Tip>Scorching Resonance</Tip> đạt tối đa, rồi dùng <Tip>Flare Eruption</Tip> làm đòn kết.</p>
              <p>Lưu ý <Tip>Flare Eruption</Tip> hấp thụ (xoá) Burn, nên dùng nó sau khi đã tận dụng Burn cho <Tip>Scorching Resonance</Tip>.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Entropist" icon="skills/classes/compass/class-29.webp">
          <Alert type="red" title="Class chưa ra mắt">
            <p>Entropist là class bậc 8 của nhánh này và <strong>chưa có ở bản hiện tại</strong>. Dữ liệu skill lấy từ file game nên có thể thay đổi khi ra mắt. Build dưới đây chỉ để tham khảo trước.</p>
          </Alert>
          <p>Entropist tập trung vào <strong>Nước khống chế với Rimebound</strong> và <strong>Lửa Burn kéo dài</strong>.</p>
          <p><Tip>Frostflow Pact</Tip> gây 1 tầng Rime Mark mỗi lần technique Nước trúng đích, đạt 4 tầng sẽ chắc chắn gây Rimebound. <Tip>Rime Shackle</Tip> và <Tip>Frost Undertow</Tip> cũng có cơ hội gây Rimebound trực tiếp.</p>
          <p><Tip>Fluidshift</Tip> vừa giảm sát thương nhận vào, vừa tích lại một phần sát thương kẻ địch gây ra để chuyển thành Mark, mạnh hơn khi bạn trang bị nhiều technique Nước.</p>
          <p>Ở hướng Lửa, <Tip>Cinder Dominion</Tip> kéo dài Burn thêm 2 lượt và gây nổ khi Burn hết hạn, <Tip>Flameward</Tip> giảm sát thương nhận vào theo số ô đang cháy quanh bạn.</p>
          <Tabs>
            <Tab label="Nước Rimebound">
              <Build
                techniques={['Tideburst', 'Frostfall Assault', 'Rime Shackle', 'Frost Shatter']}
                charms={['Riptide', 'Frost Undertow', 'Fluidshift', 'Frostflow Pact']}
              />
              <p>Toàn bộ technique là Nước, nên <Tip>Riptide</Tip> vào Tideform rất nhanh và <Tip>Fluidshift</Tip> có tỉ lệ tích trữ cao nhất.</p>
            </Tab>
            <Tab label="Lửa Burn">
              <Build
                techniques={['Emberfall Inferno', 'Ashfall Inferno', 'Blackflame Scorch', 'Flare Eruption']}
                charms={['Cinder Dominion', 'Flameward', 'Scorching Resonance', 'Phoenix Rise']}
              />
              <p><Tip>Emberfall Inferno</Tip> gây thêm sát thương cho mỗi ô đang cháy trong tầm đánh, <Tip>Ashfall Inferno</Tip> mạnh hơn 5% cho mỗi ô cháy quanh mục tiêu. Hãy đốt đất bằng <Tip>Blackflame Scorch</Tip> trước.</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
