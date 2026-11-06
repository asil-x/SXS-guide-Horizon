import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Duelist ยังคงความยืดหยุ่นของคลาส Warrior ไว้ แต่ได้ดาเมจและความคล่องตัวเพิ่มขึ้นมาก ทำให้เป็น <strong>ตัวเลือกที่แรงสำหรับผ่านด่านที่พลังต่างกันมากเมื่อเทียบกับคลาสอื่น</strong></p>
      <ProsCons id="pros-cons" title="จุดแข็งและจุดอ่อนของ Duelist">
        <Pro>เคลื่อนที่ได้ยอดเยี่ยมแต่ยังทำดาเมจสูง</Pro>
        <Pro>พาสซีฟกันตาย + charm ดูดเลือด ช่วยฝ่าคอนเทนต์ยาก ๆ</Pro>
        <Pro>คลาสที่ดีที่สุดสำหรับผ่านด่านที่พลังต่างกันมาก</Pro>
        <Con>technique บางตัวต้องลงทุนเยอะถึงจะเฉิดฉายจริง</Con>
        <Con>สู้ระยะประชิด ขึ้นกับไฟต์และบิลด์อาจถูกจำกัดระยะ ศัตรูเดินหนีตีได้ง่าย</Con>
        <Con>ช่วงต้นเกมมีตัวเลือกธาตุน้อย จะเปิดเพิ่มในคลาสถัด ๆ ไป</Con>
      </ProsCons>
      <Alert title="ลองทดลองบิลด์ดู!">
        <p><strong>จำไว้ว่านี่เป็นแค่โครงตัวอย่าง</strong> ให้คุณปรับตามอุปกรณ์ สไตล์การเล่น สกิล และ Fantomon ของตัวเอง</p>
      </Alert>

      <hr />

      <h2 id="best-stats">สเตตัสที่ดีที่สุด</h2>
      <p>Duelist เน้นทำดาเมจล้วน สเตตัสจึงง่ายกว่า Sage หรือ Knight ที่ต้องดูแลหลายเรื่องกว่า</p>
      <p>เน้น <strong>Physical Mastery</strong> และ <strong>Crit Rate/Damage</strong> บนอุปกรณ์ นั่นคือแหล่งเพิ่มดาเมจที่ใหญ่ที่สุด</p>
      <p><strong>SPD และ ATK</strong> (ทั้งค่าคงที่และ %) ยังมีค่าทุกที่ที่ใส่ได้</p>
      <p>นอกจากนี้ <strong>Effect Hit Rate</strong> และ <strong>Block Rate</strong> ก็อยู่ในลิสต์ที่ควรเน้น ตัวหลังช่วยชดเชยความบางเวลาผ่านด่านที่พลังต่างกันสูง</p>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p><strong><Tip>Nyxarchon</Tip> คือตัวเลือกที่ดีที่สุด (BiS) สำหรับทุกบิลด์ DPS</strong> สุ่มตู้สัตว์เลี้ยงจนกว่าจะแลกได้</p>
      <p>ช่อง charm เพิ่มและสเตตัสพื้นฐานที่สูงกว่าทำให้ Fantomon ระดับ Mythic แรงกว่าในเกือบทุกสถานการณ์</p>
      <p>ถ้าสุ่มได้ <Tip>Sylvaerie</Tip> หรือ <Tip>Terragon</Tip> นั่นคือตัวเลือกที่ดีที่สุดจนกว่าจะได้ <Tip>Nyxarchon</Tip></p>
      <p><Tip>Kels</Tip> คือ BiS สำหรับ PVP ของทุกคนถ้าคุณสนใจโหมดนี้ (และฟาร์มได้ฟรีด้วย)</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companion ให้สเตตัสติดตัวที่บางขั้นเลเวล ให้เน้นอัป companion ที่ช่วยคลาสโดยตรงสักไม่กี่ตัวไปถึงเลเวล 50 ก่อน แล้วค่อยอัปตัวที่เหลือ</p>
      <p><strong>ทุกคลาสได้ประโยชน์จาก DMG Boost และ Reduction</strong> เพื่อเพิ่มทั้งดาเมจและความอึด</p>
      <p>สำหรับ Duelist ให้เน้น companion ที่ให้ <strong>Attack</strong> และ <strong>Accuracy</strong> โชคดีที่ companion เหล่านั้นซ้ำกัน:</p>
      <p><Tip>Akane</Tip>, <Tip>Hermes</Tip>, <Tip>Jiangwang</Tip>, <Tip>Kazuma</Tip> และ <Tip>Ophelia</Tip> เป็นตัวเลือกที่ดีมากที่ควรเน้นก่อน</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="ขั้นของ Gem">
        <p>ใช้ Gem T10 เป็นตัวอย่าง แต่ <strong>ขั้นยิ่งสูงสเตตัสยิ่งดี</strong> Gem มีตั้งแต่ T1 ถึง T15</p>
      </Alert>
      <p><Tip>T10 Obsidian</Tip> ดีกับทุกคลาส เพราะใครก็ต้องการดาเมจเพิ่มไม่ว่าจะเล่นแบบไหน</p>
      <p><Tip>T10 Moonstone</Tip> ก็นิยมกับทุกคลาสเพื่อเพิ่มความอึด</p>
      <p>Duelist ได้ประโยชน์มากจาก <Tip>T10 Amethyst</Tip> ด้วย เพราะให้ทั้ง SPD และ Crit Rate</p>
      <p>Gem สเตตัสเดียวก็ยังดีสำหรับเติมช่องที่เหลือ <Tip>T10 Ruby</Tip> และ <Tip>T10 Citrine</Tip> เป็นตัวเลือกที่ดีรองลงมาสำหรับคลาสนี้</p>

      <hr />

      <h2 id="builds">Builds</h2>
      <Tabs big>
        <Tab label="Warrior" icon="skills/classes/warrior.png">
          <p>ช่วงต้นเกมคุณถูกจำกัดด้วย technique ที่มี แต่ Warrior มีตัวเลือกดีทั้ง AoE และเป้าเดี่ยวตั้งแต่แรก</p>
          <p><strong>Block Rate แรงเกินคาดในช่วงนี้</strong> ลงทุนตั้งแต่เนิ่น ๆ จะทำให้คุณแทบไม่มีใครทำอะไรได้ในหลายคอนเทนต์เมื่อเทียบกับ Mage</p>
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
              <p><strong>บิลด์ AoE ที่แรง สมดุลทั้งดาเมจและความอึด</strong></p>
              <p>เปลี่ยน <Tip>Blade Tempest</Tip> เป็น <Tip>Strength Rules</Tip> ถ้าเจอศัตรูต้านลม</p>
              <p>สำหรับคอนเทนต์ที่ง่ายกว่า เอา <Tip>Gravity Pull</Tip> และ <Tip>Blade of Lament</Tip> ออก แล้วใส่ตัวเลือกสายโจมตีแทน</p>
              <p><em>สำคัญ: เอา <Tip>Blade of Lament</Tip> ออกได้ก็ต่อเมื่อความอึดไม่ใช่ปัญหา</em></p>
              <p>Block Rate แรงมาก แต่ถ้าดาเมจไม่พอ เปลี่ยน <Tip>Block Awareness</Tip> เป็น <Tip>Counter Blade</Tip> ได้ โดยเฉพาะตอนสู้ระยะประชิด</p>
            </Tab>
            <Tab label="เป้าเดี่ยว">
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
              <p><strong>บิลด์เป้าเดี่ยว เน้นดาเมจที่สม่ำเสมอ</strong></p>
              <p>ใช้ชุด charm เดียวกับบิลด์ AoE จึงสลับไปมาได้ง่ายตามคอนเทนต์ที่เล่นอยู่</p>
              <p>สำหรับคอนเทนต์ที่ง่ายกว่า เอา <Tip>Blade of Lament</Tip> ออกแล้วใส่ตัวเลือกสายโจมตีแทนได้</p>
              <p><em>สำคัญ: เอา <Tip>Blade of Lament</Tip> ออกได้ก็ต่อเมื่อความอึดไม่ใช่ปัญหา</em></p>
              <p>Block Rate แรงมาก แต่ถ้าดาเมจไม่พอ เปลี่ยน <Tip>Block Awareness</Tip> เป็น <Tip>Counter Blade</Tip> ได้ โดยเฉพาะตอนสู้ระยะประชิด</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Duelist" icon="skills/classes/duelist.png">
          <p>technique เคลื่อนที่ใหม่ ๆ เปลี่ยนความรู้สึกในการเล่นคลาสนี้ไปเลย พร้อมตัวเลือกดาเมจที่ดีกว่า Warrior อย่างชัดเจน</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><strong>ตอนนี้ Block Rate สำคัญขึ้น</strong>: ถ้าไม่ลงทุนให้ถูกจะบางลง ใส่มันไว้ในอุปกรณ์และ charm</p>
            <p><strong>Physical Mastery</strong>: วิธีที่ง่ายที่สุดในการเพิ่มดาเมจ อย่ามองข้ามสเตตัสนี้บนอุปกรณ์</p>
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
              <p><Tip>Flash Dash</Tip> คือสิ่งที่ทำให้บิลด์นี้ต่างจาก Warrior ชัดเจน: เคลื่อนที่ได้ดีแต่ยังทำดาเมจ</p>
              <p>ใช้ <Tip>Whirlwind Slash</Tip> หรือ <Tip>Mountain Collapse</Tip> ก็ได้ ตัวไหนอัปแรงก์สูงกว่าก็ใช้ตัวนั้น</p>
              <p>เปลี่ยน <Tip>Block Awareness</Tip> เป็น <Tip>Frame of Battles</Tip> ได้ตามความต้องการด้านความอึด</p>
              <p>สำหรับคอนเทนต์ที่ง่ายกว่า เอาทั้ง <Tip>Indomitable Will</Tip> และ <Tip>Blade of Lament</Tip> ออกแล้วแทนด้วยพาสซีฟดาเมจตัวที่อัปแรงก์สูงสุดได้</p>
            </Tab>
            <Tab label="เป้าเดี่ยว">
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
              <p><em>เปลี่ยน <Tip>Flame Aura</Tip> เป็น <Tip>Sunset Sword</Tip> เมื่อเจอศัตรูต้านไฟ</em></p>
              <p>ในบางสถานการณ์ เอา <Tip>Blade of Lament</Tip> ออกแล้วใส่ <Tip>Block Awareness</Tip> ได้ เพราะการดูดเลือดแทบไม่มีผลในคอนเทนต์ที่คุณตีแรงแต่จำนวนฮิตไม่มากพอ</p>
              <p>อย่างไรก็ตาม ถ้ากำลังผ่านด่านที่พลังต่างกันมาก HP ที่เพิ่มจาก <Tip>Blade of Lament</Tip> ช่วยให้ยืนได้นานขึ้น</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Berserker" icon="skills/classes/berserker.png">
          <p>Berserker ทำดาเมจสูงขึ้นอีกและมีเครื่องมือสำหรับหลายสไตล์ พร้อม charm เพิ่มเติมที่ทำให้เล่นแบบ DPS สายซัพพอร์ตได้ในคอนเทนต์ทีมที่ยากขึ้นซึ่งจะมาในอัปเดตถัดไป</p>
          <p>ตอนนี้มีตัวเลือกสกิลและ charm มากขึ้นสำหรับแต่ละคอนเทนต์ บิลด์ที่แนะนำด้านล่างใช้กับคอนเทนต์ทั่วไป ไม่ได้ทำมาสำหรับไฟต์ใดโดยเฉพาะ เพราะเน้นจุดเดียวมากพอจะรับมือได้เกือบทุกอย่างโดยไม่ต้องเปลี่ยนมาก</p>
          <p>สิ่งที่เปลี่ยนในชุด charm คือหน้าใหม่ <Tip>Blade of Judgment</Tip> charm ตัวนี้ตัวเดียวก็ให้ดาเมจมหาศาลและจะเป็นวิธีเล่นหลักของ Berserker</p>
          <p>มีบางบิลด์ที่ไม่ใช้มันแต่เน้นการโจมตีฮิตเดียวกับ <Tip>Soul Splash</Tip> บิลด์เหล่านั้นก็มีอยู่ด้านล่างด้วย</p>
          <p>การดูดเลือดดีขึ้นอีกด้วย <Tip>Blade Siphon</Tip> ตัวใหม่ ที่ตอนนี้ฮีลตาม max HP ทุกครั้งที่คริ เป็นวิธีฟื้นตัวที่ดีกว่ามาก เพราะส่วนใหญ่เราคริตลอด</p>
          <p>Berserker เล่นตามธีม ยิ่งฮิตเยอะยิ่งดาเมจเยอะ และเราจะใช้ประโยชน์จากข้อนี้ด้วยทุกอย่างที่มี</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><strong>ลำดับสกิลสำคัญมาก</strong>: ลำดับสกิลในการหมุนเวียนสำคัญที่สุด ใช้ผิดลำดับอาจเสีย DPS ไปเยอะมาก</p>
            <p><Tip>Blade of Judgment</Tip>: charm นี้เปลี่ยนวิธีเล่นคลาสจากรากฐาน บิลด์ส่วนใหญ่เน้นรักษาให้มันเต็มด้วย technique หลายฮิต</p>
            <p><strong> <Tip>Blade Siphon</Tip> </strong>: ตอนนี้คิดตาม max HP เมื่อคริ ดีกว่าเดิมมาก ควรอัปแรงก์ก่อนสำหรับบิลด์สายอึด</p>
          </Alert>
          <br />
          <Tabs>
            <Tab label="เป้าเดี่ยวหลายฮิต">
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
              <p><strong>ดีมากสำหรับ World Boss และคอนเทนต์กิลด์</strong></p>
              <p>technique เน้นหลายฮิตเพื่อป้อน <Tip>Blade of Judgment</Tip> อย่างต่อเนื่อง ให้ดาเมจมหาศาล</p>
              <p><Tip>Blade Siphon</Tip> เข้ากันได้ดีมากที่นี่เพราะเราคริตลอด ช่วยฟื้นตัวเองได้มากในไฟต์ยาว</p>
            </Tab>
            <Tab label="เป้าเดี่ยวฮิตเดียว">
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
              <p>technique ดาเมจเป้าเดี่ยวผสมกับ <Tip>Soul Splash</Tip> ให้ดาเมจดีมาก</p>
              <p><Tip>Crit Mastery</Tip> และ <Tip>Insightful Eye</Tip> ซ้อนกันได้ดีกับดาเมจสูงของแต่ละ technique ในชุดนี้</p>
              <p><Tip>Indomitable Will</Tip> ทำหน้าที่เป็นชั้นเอาตัวรอด เพราะเราเสียการดูดเลือดที่ <Tip>Blade Siphon</Tip> ควรจะให้</p>
            </Tab>
            <Tab label="ซัพพอร์ต / DPS รอง">
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
              <p><strong>ใช้หลัก ๆ สำหรับบทบาท DPS รอง / ซัพพอร์ตในคอนเทนต์ทีม</strong></p>
              <p>เปลี่ยน <Tip>Hunter's Judgment</Tip> เป็น <Tip>Flame Aura</Tip> และ <Tip>Sunset Sword</Tip> เป็น <Tip>Mountain Collapse</Tip> ได้ถ้าทีมต้องการควบคุม (CC) เพิ่ม</p>
              <p>ส่วน charm เปลี่ยน <Tip>Iron Fortress</Tip> เป็น <Tip>Blade of Judgment</Tip> ได้ถ้าไปทางหลายฮิตแทนซัพพอร์ตสายป้องกัน</p>
              <p><Tip>Blade Siphon</Tip> ช่วยให้ยืนได้ในไฟต์ทีมยาว ๆ โดยไม่ต้องมีฮีลเลอร์ตามประกบ</p>
            </Tab>
            <Tab label="ดันด่านเลือดต่ำ">
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
              <p><strong>ควรใช้เฉพาะเมื่อ charm ของคุณเลเวลสูงมากแล้ว</strong></p>
              <p>บิลด์นี้อาศัยตัวคูณดาเมจตอนเลือดต่ำ ใช้ <Tip>Soulfire Protection</Tip> และ <Tip>Frame of Battles</Tip> ให้คุณรอด ขณะที่ <Tip>Desperate Valor</Tip> ขยายดาเมจตอนเลือดน้อย</p>
              <p><Tip>Blade of Judgment</Tip> ทำให้ชุด charm สมบูรณ์ ช่วยให้คอมโบหลายฮิตยังตีแรงที่สุดเท่าที่ทำได้</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Conqueror" icon="skills/classes/conqueror.png">
          <Alert type="red" title="สำคัญ">
            <p></p>
            นี่คือบิลด์ที่ทดลองด้วยตัวเอง รวมกับข้อมูลและบิลด์จากผู้เล่นจีน
            <p></p>
            <p><strong>คุณต้องพิจารณาความคืบหน้าของบัญชีและเลเวลสกิลของตัวเอง</strong> ตอนจัดบิลด์ เพราะแต่ละคนอยู่คนละเลเวลและคนละ tier เลือกสิ่งที่เหมาะกับคุณ</p>
          </Alert>
          <p>สิ่งที่เปลี่ยนไปเมื่อเทียบกับ Berserker:</p>
          <ul>
            <li>Elemental mastery สำคัญขึ้นมาก เพราะสกิลใหม่ส่วนใหญ่เป็นสกิลธาตุ</li>
            <li>ต้องมี crit rate สูงขึ้น ศัตรูมีค่าต้านคริอยู่บ้าง (18%) แปลว่าภายหลังต้องดัน crit rate ให้เกินเกณฑ์</li>
            <li>เพราะสกิลใหม่หลายตัวเป็นสกิลธาตุหลายฮิตที่แรง Blade of Judgement จึงไม่ใช่พาสซีฟดาเมจ BiS อีกต่อไป</li>
          </ul>
          <p>เมื่อมีสกิลอย่าง <Tip>Tactical Adaptation</Tip> สำหรับไฟต์มินิบอส/บอสในดันเจี้ยน และ <Tip>Piercing Assault</Tip> / <Tip>Soul Breaker</Tip> เป็นพาสซีฟเพิ่มดาเมจหลักสำหรับคอนเทนต์ทั่วไป คลาสที่ดันด่านเก่งอยู่แล้วก็ยิ่งแรงขึ้นอีก</p>
          <details>
            <summary>เรื่องสัตว์เลี้ยงใน Tier 4</summary>
            <p>โดยรวม ถ้าคุณเป็น F2P หรือเติมน้อย เงินส่วนใหญ่จะไปลงที่ <Tip>Nyxarchon</Tip> เพราะโดยรวมแล้วเป็น fantomon สาย DPS ที่ดีที่สุด</p>
            <p>อย่างไรก็ตาม มีบางบิลด์ที่ดีกว่าเมื่อใช้ <Tip>Pandarial</Tip> เพราะมันลดคูลดาวน์สกิลให้ทุกคลาสตอนเริ่มไฟต์ คล้าย charm <Tip>Rapid Cast</Tip> ของคลาส Mage</p>
            <p>เมื่อรวมกับความเร็วของ Conqueror คุณจะได้ลงมือก่อนและได้เปรียบ</p>
            <p><Tip>Aegiswing</Tip> ก็ใช้ดันด่านได้ถ้า fantomon ของคุณเลเวลใกล้เคียงกัน ให้เน้นเอาตัวใดตัวหนึ่งขึ้นร่างโตเต็มวัยก่อนเสมอ แล้วค่อยคิดเรื่องสัตว์เลี้ยงเสริมสำหรับบิลด์เฉพาะ</p>
          </details>
          <p>ลำดับความสำคัญของอุปกรณ์ก็เปลี่ยนไปจาก tier ก่อน ๆ</p>
          <p>ถ้าคุณชอบ Blade of Judgement ก็ยังเล่นได้ มันมีสกิลและพาสซีฟใหม่เพิ่มมาบ้าง สไตล์การเล่นไม่เปลี่ยนและยังค่อนข้างแรงในคอนเทนต์ส่วนใหญ่ แต่ถูกบิลด์อื่นแซงไปแล้ว</p>
          <p>ถ้าเล่นแต่บิลด์นี้ ให้คงความสำคัญกับบรรทัด physical mastery พร้อม crit rate, crit damage, attack และ speed</p>
          <p><strong>สิ่งที่เปลี่ยนอย่างเดียวคือย้ายจาก Physical เป็น Elemental mastery สำหรับทุกบิลด์อื่น</strong> สเตตัสอื่นเหมือนเดิม เพราะสุ่ม affix บนอุปกรณ์และย้าย affix ได้ สุดท้ายทุกคนจะได้ชิ้นที่ต้องการ แม้จะใช้เวลาสักหน่อย</p>
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
              <p><strong>สัตว์เลี้ยงที่แนะนำสำหรับบิลด์นี้: <Tip>Nyxarchon</Tip> หรือ <Tip>Pandarial</Tip></strong></p>
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
              <p><strong>สัตว์เลี้ยงที่แนะนำสำหรับบิลด์นี้: <Tip>Pandarial</Tip></strong></p>
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
              <p>charm ตรงนี้เปลี่ยนตามไฟต์ มอนน้อย = <Tip>Tactical Adaptation</Tip></p>
              <p><strong>สัตว์เลี้ยงที่แนะนำสำหรับบิลด์นี้: <Tip>Nyxarchon</Tip> หรือ <Tip>Pandarial</Tip></strong></p>
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
              <p>charm ตรงนี้เปลี่ยนตามไฟต์ มอนน้อย = <Tip>Tactical Adaptation</Tip></p>
              <p><strong>สัตว์เลี้ยงที่แนะนำสำหรับบิลด์นี้: <Tip>Nyxarchon</Tip> หรือ <Tip>Pandarial</Tip></strong></p>
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
              <p><strong>สัตว์เลี้ยงที่แนะนำสำหรับบิลด์นี้: <Tip>Pandarial</Tip></strong></p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Ravager" icon="skills/classes/ravager.png">
          <p>Ravager เปิดสองแนวทางใหม่ให้สาย Duelist: <strong>ดาเมจไฟวงกว้าง</strong> ด้วย <Tip>Solaris Storm</Tip> และ <strong>คอมโบตีลอย</strong> ด้วย <Tip>Tempest Edge</Tip></p>
          <p><Tip>Solaris Storm</Tip> ตีไฟ 3 ฮิตรอบตัวแล้วเพิ่มอีก 1 ฮิตเป็นวงกลม 2 ช่อง และมี Zero Initial CD ใช้ได้ตั้งแต่เทิร์นแรก นี่คือสกิลเคลียร์มอนที่แรงที่สุดที่ Ravager ได้เพิ่มมา</p>
          <p><Tip>Shadow End</Tip> น่าสนใจมากในคอนเทนต์ที่มีมอนอ่อน ๆ เยอะ: วาร์ปไปหาศัตรู และทุกครั้งที่ล้มเป้าได้จะร่ายซ้ำเอง สูงสุดอีก 4 ครั้งต่อเทิร์น</p>
          <p><Tip>Night Curse</Tip> ติด Blood Source ให้ศัตรูทุกตัวในระยะ 2 ช่อง ศัตรูที่ติด Blood Source จะคืนดาเมจที่ได้รับ 3% เป็น HP ให้ <strong>ผู้โจมตี</strong> ทั้งทีมจึงได้ดูดเลือด</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><strong>บิลด์ส่วนใหญ่ยังเน้นหลายฮิต</strong>: <Tip>Blade of Judgment</Tip> ติด Mark ตามแต่ละครั้งที่ทำดาเมจ technique หลายฮิตอย่าง <Tip>Whirlwind Slash</Tip>, <Tip>Sunset Sword</Tip> และ <Tip>Solaris Storm</Tip> จึงทำให้มันทำงานเร็วมาก</p>
            <p><Tip>Tempest Edge</Tip> ทำงานเฉพาะตอนตีศัตรู <strong>จากสถานะปกติ</strong> ให้ลอย (Airborne) จึงต้องมี <Tip>Hunter's Judgment</Tip> อยู่ในชุดสกิล</p>
            <p><Tip>Tactical Adaptation</Tip> มีประโยชน์ทั้งสองกรณี: ศัตรูรอบตัวน้อยจะเพิ่มดาเมจ ถูกล้อมจะลดดาเมจที่ได้รับ</p>
          </Alert>
          <Tabs>
            <Tab label="ผ่านด่าน">
              <Build
                techniques={['Hunter\'s Judgment', 'Solaris Storm', 'Whirlwind Slash', 'Sunset Sword']}
                charms={['Tactical Adaptation', 'Blazing Momentum', 'Tempest Edge', 'Blade of Judgment']}
              />
              <p><strong>บิลด์ผ่านด่านหลักของ Ravager</strong> <Tip>Hunter's Judgment</Tip> ดึงศัตรูมาข้างหน้าแล้วตีให้ลอย ทำให้ <Tip>Tempest Edge</Tip> ทำงาน จากนั้น <Tip>Whirlwind Slash</Tip>, <Tip>Sunset Sword</Tip> และ <Tip>Solaris Storm</Tip> ตีโดนทั้งกลุ่ม</p>
              <p><Tip>Blazing Momentum</Tip> เปลี่ยนทุกการคริเป็นดาเมจไฟเพิ่มอีกครั้งที่ลามไป 1 ช่อง บิลด์นี้จึงต้องมี <strong>Crit Rate สูง</strong></p>
              <p>ถ้าตายบ่อยในด่านยาก เปลี่ยน <Tip>Tactical Adaptation</Tip> เป็น <Tip>Indomitable Will</Tip> เพื่อได้ชีวิตเพิ่มอีกหนึ่ง</p>
            </Tab>
            <Tab label="เป้าเดี่ยว">
              <Build
                techniques={['Air Break', 'Shattering Dance', 'Eclipse Slash', 'Hunter\'s Judgment']}
                charms={['Dominant Gaze', 'Scarlet Zeal', 'Blade of Judgment', 'Indomitable Will']}
              />
              <p><strong>ใช้กับบอสและมินิบอส</strong> <Tip>Air Break</Tip> เปิดด้วย Armor Break 2 (ลด DEF 30%) จากนั้น <Tip>Eclipse Slash</Tip> (6 ฮิต) และ <Tip>Shattering Dance</Tip> (3 ฮิต ซ้อน Riven Heart) อัดดาเมจใส่เป้าเดียว</p>
              <p><Tip>Dominant Gaze</Tip> เพิ่มดาเมจใส่เป้าที่ HP ยังเกิน 70% เหมาะมากกับบอสเลือดหนาช่วงต้นไฟต์ <Tip>Scarlet Zeal</Tip> เพิ่ม ATK หลังทุก technique ครบ 6 สแตกจะเพิ่ม ATK อย่างมากเป็นเวลา 2 เทิร์น</p>
              <p>เปลี่ยน <Tip>Hunter's Judgment</Tip> เป็น <Tip>Night Curse</Tip> ได้ถ้าทีมต้องการฮีลจาก Blood Source</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Marauder" icon="skills/classes/marauder.png">
          <p>Marauder คือ tier ที่ <strong>SPD และดาเมจกายภาพหลายฮิต</strong> กลายเป็นหัวใจหลัก</p>
          <p><Tip>Raining Blades</Tip> ตี 4 ฮิตในพื้นที่ 3×2 และทุก 5% SPD ที่คุณสูงกว่าเป้าหมายเพิ่มดาเมจ 5% (สูงสุด 50%) <Tip>Shadowflash Dance</Tip> ปล่อย 6 การโจมตี แต่ละครั้งวาร์ปไปหาศัตรูแบบสุ่ม แรงมากเมื่อศัตรูกระจายตัว</p>
          <p><Tip>Sinseal</Tip> เป็นเครื่องมือตีบอสใหม่: ติด Hex Mark 1 เทิร์น เมื่อหมดเวลาเป้าหมายจะโดน True DMG เพิ่มเท่ากับ 30% ของดาเมจที่ได้รับระหว่างถูกมาร์ก</p>
          <p>ส่วน charm <Tip>Razor Momentum</Tip> และ <Tip>Grim Pursuit</Tip> ทำงานตามแต่ละฮิตกายภาพ ยิ่งฮิตเยอะยิ่งได้เปรียบ</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><strong>เน้น SPD</strong>: นอกจากได้ลงมือเร็วขึ้น SPD ยังเพิ่มดาเมจของ <Tip>Raining Blades</Tip> โดยตรง</p>
            <p><Tip>Razor Momentum</Tip> ซ้อน Razor ได้สูงสุด 20 สแตกในเทิร์น แต่ละฮิตกายภาพมีโอกาส 80% ได้ 1 สแตก บิลด์ที่มีแต่ technique หลายฮิตจะเต็มเร็วมาก</p>
            <p><Tip>Hellblood Frenzy</Tip> เพิ่มดาเมจ 3 เทิร์นแรก แต่หลังจากนั้นคุณจะรับ <strong>ดาเมจเพิ่ม 100%</strong> เป็นเวลา 3 เทิร์น ใช้เฉพาะไฟต์สั้นที่มั่นใจว่าจบเร็ว</p>
          </Alert>
          <Tabs>
            <Tab label="ผ่านด่าน">
              <Build
                techniques={['Raining Blades', 'Shattering Dance', 'Eclipse Slash', 'Shadowflash Dance']}
                charms={['Indomitable Will', 'Blade of Judgment', 'Grim Pursuit', 'Razor Momentum']}
              />
              <p><strong>ทุก technique เป็นดาเมจกายภาพหลายฮิต</strong>: รวม 4 + 3 + 6 + 6 ฮิตต่อรอบ ทุกฮิตอาจทำให้ <Tip>Grim Pursuit</Tip> ทำงาน (40% ทำดาเมจเพิ่ม 1 ครั้ง) เพิ่มสแตก <Tip>Razor Momentum</Tip> และติด Mark ของ <Tip>Blade of Judgment</Tip></p>
              <p><Tip>Grim Pursuit</Tip> ยังแรงขึ้นเมื่อศัตรูเสียเลือด (สูงสุด +50%) บิลด์นี้จึงปิดจ็อบได้ดีมาก</p>
              <p><Tip>Indomitable Will</Tip> เก็บไว้เพื่อความปลอดภัย ถ้าอึดพอแล้ว เปลี่ยนเป็น <Tip>Piercing Assault</Tip> เพื่อเจาะ DEF ได้</p>
            </Tab>
            <Tab label="Boss">
              <Build
                techniques={['Sinseal', 'Eclipse Slash', 'Shattering Dance', 'Air Break']}
                charms={['Razor Momentum', 'Grim Pursuit', 'Blade of Judgment', 'Ruinblight']}
              />
              <p><strong>เปิดด้วย <Tip>Sinseal</Tip> แล้วอัดดาเมจทั้งหมดในเทิร์นที่ถูกมาร์ก</strong> เพราะ True DMG ตอนจบคิดจากดาเมจที่เป้าหมายได้รับในช่วงนั้น</p>
              <p><Tip>Air Break</Tip> ติด Armor Break 2 และยังเป็น technique ฮิตเดียว จึงได้โบนัสดาเมจจาก <Tip>Ruinblight</Tip> <Tip>Ruinblight</Tip> ยังแรงขึ้น 10% ต่อ Ailment/Debuff แต่ละประเภทบนเป้าหมาย (Armor Break, Riven Heart…)</p>
              <p>อย่าลืมว่า <Tip>Sinseal</Tip> มีคูลดาวน์ 3 เทิร์น ให้วางไว้ต้นลำดับสกิล</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Doomreaver" icon="skills/classes/compass/class-24.webp">
          <p>Doomreaver ย้ายจุดเน้นไปที่ <strong>ปิดจ็อบด้วยไฟ</strong>: วาร์ปไปหาเป้าที่อ่อนที่สุดแล้วจัดการให้จบ</p>
          <p><Tip>Ignition Strike</Tip> วาร์ปไปข้างศัตรูในระยะ 5 ช่อง เน้นเป้าที่ % HP ต่ำที่สุด <Tip>Starfire Annihilation</Tip> ทำดาเมจเพิ่ม 20% ทุก 10% HP ที่เป้าหมายเสียไป สูงสุด +200% และเน้นเป้าที่อ่อนที่สุดเช่นกัน</p>
          <p>สำหรับสายกายภาพ <Tip>Void Slash</Tip> ตี 6 ฮิตใส่ศัตรูทุกตัวในระยะ 2 ช่องรอบตัว เป็น technique วงกว้างหลายฮิตที่แรงที่สุดของสายนี้</p>
          <p>charm ใหม่เอียงไปทางเอาตัวรอด: <Tip>Ironclad</Tip> ลดดาเมจที่ได้รับอย่างมากใน 2 เทิร์นแรก <Tip>Shadow Stealth</Tip> ฮีลและล่องหน 2 เทิร์น</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><strong>ลำดับสกิลสำคัญมาก</strong>: ใช้ technique วงกว้างลดเลือดก่อน แล้วค่อยใช้ <Tip>Starfire Annihilation</Tip> และ <Tip>Ignition Strike</Tip> เพื่อปิดจ็อบ</p>
            <p><Tip>Ironclad</Tip> ช่วยให้รอดจากดาเมจระลอกแรกตอนต้นไฟต์ ซึ่งเป็นช่วงอันตรายที่สุดของคลาสระยะประชิดที่ต้องพุ่งเข้าไปกลางศัตรู</p>
            <p><Tip>Piercing Assault</Tip> เจาะ DEF เพิ่ม 10% ต่อบัฟที่คุณมีอยู่ (สูงสุด 3) ยิ่งรักษาบัฟไว้มาก มันยิ่งแรง</p>
          </Alert>
          <Tabs>
            <Tab label="ไฟปิดจ็อบ">
              <Build
                techniques={['Sinseal', 'Hellfire Fist', 'Ignition Strike', 'Starfire Annihilation']}
                charms={['Indomitable Will', 'Piercing Assault', 'Starfire Edge', 'Ironclad']}
              />
              <p><Tip>Hellfire Fist</Tip> ลดเลือดศัตรูทั้งแถวข้างหน้า จากนั้น <Tip>Starfire Annihilation</Tip> และ <Tip>Ignition Strike</Tip> จะหาเป้าที่อ่อนที่สุดเองเพื่อปิดจ็อบ ใช้ <Tip>Sinseal</Tip> กับเป้าตัวใหญ่เพื่อเพิ่ม True DMG</p>
              <p>บิลด์นี้ต้องใช้ <strong>Elemental Mastery</strong> แทน Physical Mastery เพราะ 3/4 technique เป็นดาเมจไฟ</p>
              <p>ถ้าความเร็วไม่พอ เปลี่ยน <Tip>Starfire Edge</Tip> เป็น <Tip>Temporal Swiftness</Tip> เพื่อเพิ่ม SPD และมีโอกาสลดคูลดาวน์</p>
            </Tab>
            <Tab label="กายภาพวงกว้าง">
              <Build
                techniques={['Void Slash', 'Whirling Blades', 'Raining Blades', 'Shadowflash Dance']}
                charms={['Razor Momentum', 'Grim Pursuit', 'Blade of Judgment', 'Ironclad']}
              />
              <p><strong>ถ้าคุณทำอุปกรณ์สายกายภาพมาตั้งแต่ Marauder</strong> บิลด์นี้ใช้สเตตัสเดิมแต่ยังแรงในคอนเทนต์มอนเยอะ: <Tip>Void Slash</Tip> (6 ฮิตรอบตัว) และ <Tip>Whirling Blades</Tip> (4 ฮิตพื้นที่สี่เหลี่ยม) แทน technique เป้าเดี่ยว</p>
              <p>เปลี่ยน <Tip>Blade of Judgment</Tip> เป็น <Tip>Shadow Stealth</Tip> ได้ถ้าต้องการฮีลเพิ่มและหลบการถูกเล็ง</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Infernifer" icon="skills/classes/compass/class-28.webp">
          <Alert type="red" title="คลาสยังไม่เปิดตัว">
            <p>Infernifer คือคลาส tier 8 ของสายนี้และ <strong>ยังไม่มีในเวอร์ชันปัจจุบัน</strong> ข้อมูลสกิลมาจากไฟล์เกมจึงอาจเปลี่ยนตอนเปิดตัว บิลด์ด้านล่างเป็นแค่การดูล่วงหน้า</p>
          </Alert>
          <p>Infernifer มีเครื่องมือสองชุดชัดเจน: <strong>Wind Orb</strong> และ <strong>Reaper ธาตุมืด</strong></p>
          <p>สาย Wind Orb: <Tip>Tempest Call</Tip> สร้าง Wind Orb 4 ลูก <Tip>Bladegale Conflux</Tip> มีโอกาส 50% สร้างเพิ่ม 3 ลูกทุกครั้งที่ทำดาเมจลม และ <Tip>Zephyr Cascade</Tip> ทำให้แต่ละการโจมตีของ Wind Orb เด้งไปหาศัตรูอีกตัว</p>
          <p>สาย Reaper: <Tip>Nethercrown</Tip> ทำให้คุณเข้าสถานะ Reaper 4 เทิร์น (ทุกศัตรูที่ล้มได้ช่วยให้ทำงานเร็วขึ้น) ระหว่างนั้น <Tip>Crimson Harvest</Tip> ได้ Lifesteal เพิ่ม 50% และ <Tip>Wraith Strike</Tip> ทำดาเมจเพิ่ม 50%</p>
          <Tabs>
            <Tab label="Wind Orb">
              <Build
                techniques={['Sinseal', 'Tempest Call', 'Skyfall Gale', 'Phantom Blitz']}
                charms={['Indomitable Will', 'Windless Lord', 'Bladegale Conflux', 'Zephyr Cascade']}
              />
              <p><Tip>Phantom Blitz</Tip> มีโอกาส 60% ร่ายซ้ำถ้า SPD ของคุณสูงกว่าเป้าหมาย แต่ละครั้งที่โดนยังสร้าง Wind Orb เพิ่มผ่าน <Tip>Bladegale Conflux</Tip> แล้ว <Tip>Windless Lord</Tip> ก็ทวีจำนวน orb เพิ่มอีก</p>
              <p>เปลี่ยน <Tip>Indomitable Will</Tip> เป็น <Tip>Zephyr Battle Zeal</Tip> (Wind Orb แต่ละลูกเพิ่มดาเมจ Technique สูงสุด 10 สแตก) ได้ถ้าไม่ต้องการชีวิตที่สอง</p>
            </Tab>
            <Tab label="Reaper">
              <Build
                techniques={['Crimson Harvest', 'Wraith Strike', 'Shadow Devour', 'Sinseal']}
                charms={['Nethercrown', 'Abyssal Shadowmark', 'Shadow Stealth', 'Shadowward']}
              />
              <p>ทุก technique ดาเมจเป็นธาตุมืดเพื่อใช้ประโยชน์จาก Reaper และ <Tip>Abyssal Shadowmark</Tip> (ครบ 2 สแตกจะระเบิดลามไปพื้นที่ 1 ช่อง)</p>
              <p><Tip>Shadow Stealth</Tip> ทำให้คุณเข้าสถานะ Stealth ตอนจบเทิร์น และ <Tip>Shadowward</Tip> ลดดาเมจที่ได้รับพร้อมล้าง Debuff ระหว่าง Stealth ทำให้บิลด์รอดได้แม้จะพุ่งเข้าไปกลางศัตรู</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
