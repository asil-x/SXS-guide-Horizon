import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Knight คือแนวหน้าเต็มตัวของ Sword x Staff สไตล์การเล่นเน้น <strong>บล็อกการโจมตีแล้วเปลี่ยนเป็นดาเมจสะท้อนกลับผ่าน</strong> <Tip>Rebound</Tip> และยังเปลี่ยนไปเล่นแบบ Glass Cannon ตอนตีบอสได้ ถ้ามีคนอื่นรับหน้าที่แทงค์แล้ว</p>
      <ProsCons id="pros-cons" title="จุดแข็งและจุดอ่อนของ Knight">
        <Pro>Rebound ได้ผลดีมากกับศัตรูที่ตีหลายฮิตและฝูงมอนสเตอร์ AoE</Pro>
        <Pro>เป็นหนึ่งในคลาสที่ปลอดภัยที่สุดในการผ่านด่านที่พลังต่างกันมาก เพราะบล็อกได้สม่ำเสมอและมีการป้องกันหลายชั้น</Pro>
        <Pro>ทางเลือก Glass Cannon ทำให้เปลี่ยนเป็นบิลด์ DPS ได้ในคอนเทนต์ที่มีคนแทงค์อยู่แล้ว</Pro>
        <Pro>tier สูงมีวิธีปกป้องทีมเยอะมาก: Taunt, โล่ให้เพื่อนที่เลือดน้อย, ลดดาเมจเป็นวงกว้าง และรับดาเมจแทนเพื่อน</Pro>
        <Con>ลำดับความสำคัญของสเตตัสซับซ้อนกว่าคลาส DPS ล้วน</Con>
        <Con>บิลด์แทงค์ล้วนทำดาเมจช้า เพราะดาเมจส่วนใหญ่มาจากการสะท้อน จึงขึ้นกับว่าศัตรูตีคุณหรือไม่</Con>
        <Con>Glass Cannon ต้องมีเงื่อนไขที่เอื้อถึงจะเล่นได้ปลอดภัย: ต้องมีแทงค์แยก หรือศัตรูที่กดดันน้อย</Con>
      </ProsCons>
      <Alert title="ลองทดลองบิลด์ดู!">
        <p><strong>จำไว้ว่านี่เป็นแค่โครงตัวอย่าง</strong> ให้คุณปรับตามอุปกรณ์ สไตล์การเล่น สกิล และ Fantomon ของตัวเอง</p>
      </Alert>

      <hr />

      <h2 id="best-stats">สเตตัสที่ดีที่สุด</h2>
      <p>Knight มีลำดับสเตตัสสองแบบ ขึ้นอยู่กับบิลด์ที่ใช้</p>
      <p>สำหรับ Reflect Tank ดาเมจของคุณเพิ่มตามการบล็อกที่สม่ำเสมอ <strong>Block %</strong> และ <strong>Block Rate</strong> จำเป็นต่อการทำงานของบิลด์ ส่วน <strong>Physical Mastery</strong> กำหนดว่า <Tip>Rebound</Tip> จะสะท้อนดาเมจกลับไปที่ศัตรูได้มากแค่ไหน</p>
      <p>จากนั้น <strong>Defense %</strong>, <strong>Flat Defense</strong> และค่าต้านธาตุจะช่วยให้คุณยืนได้นานขึ้นอีก</p>
      <p>สำหรับบิลด์ <strong>Glass Cannon</strong> ให้ทำสเตตัสแบบ DPS กายภาพทั่วไป <strong>Physical Mastery</strong> ก่อน แล้วค่อย <strong>Crit Rate</strong> และ <strong>Crit Damage</strong> ตามด้วย <strong>Attack %</strong> และ <strong>Flat Attack</strong></p>
      <p>ข้อควรรู้ที่ใช้ได้กับทั้งสองบิลด์:</p>
      <ul>
        <li>Damage Increase และ Damage Reduction เป็นสเตตัสที่แรง แต่ส่วนใหญ่มาจากระบบนอกอุปกรณ์ อย่าพยายามไล่หาบนอุปกรณ์</li>
        <li>Elemental Aegis เป็นสเตตัสป้องกันที่แรง แต่ก็มาจากระบบอื่นเป็นหลัก ไม่ต้องเล็งบนอุปกรณ์</li>
        <li>Effect Hit และ Effect Resistance ตอนนี้มีค่าน้อย ไม่คุ้มที่จะเน้นมากกว่าสเตตัสหลักอื่น</li>
        <li>Reflect Tank ไม่ต้องใช้ Crit Resistance การโจมตีที่ถูกบล็อกแล้วติดคริไม่ได้ ลงทุนกับ Block คุ้มกว่า</li>
      </ul>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p><Tip>Nyxarchon</Tip> เป็นตัวเลือกที่ดีที่สุดสำหรับบิลด์ <strong>Glass Cannon</strong> เพราะมีช่อง charm เพิ่มและสเตตัสพื้นฐานสูงกว่า</p>
      <p>สำหรับแทงค์จริงจัง <Tip>Armopi</Tip> คือสัตว์เลี้ยงมาตรฐาน เพราะโล่เสริม (และบัฟ DEF) ดีมากกับทีมสายป้องกันทุกแบบ ถ้าสุ่มไม่ได้ ใช้ <Tip>Boaro</Tip> ไปก่อนจนกว่าจะได้ <Tip>Armopi</Tip></p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companion ให้สเตตัสติดตัวที่บางขั้นเลเวล ให้เน้นอัป companion ที่ช่วยคลาสโดยตรงสักไม่กี่ตัวไปถึงเลเวล 50 ก่อน แล้วค่อยอัปตัวที่เหลือ</p>
      <p><strong>ทุกคลาสได้ประโยชน์จาก DMG Boost และ Reduction</strong> เพื่อเพิ่มทั้งดาเมจและความอึด</p>
      <p>สำหรับบิลด์ <strong>Reflect Tank</strong> ให้เน้น companion ที่ให้ <strong>Block Rate</strong> เช่น <Tip>Braulio</Tip>, <Tip>Darkness</Tip> หรือ <Tip>Mayoi</Tip></p>
      <p>สำหรับบิลด์ <strong>Glass Cannon</strong> ให้เน้น <strong>Attack</strong> และ <strong>Physical Mastery</strong> เพื่อให้ดาเมจสู้คนอื่นได้ <Tip>Akane</Tip>, <Tip>Hermes</Tip>, <Tip>Jiangwang</Tip> และ <Tip>Ophelia</Tip> เป็นตัวเลือกที่ดี</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="ขั้นของ Gem">
        <p>ใช้ Gem T10 เป็นตัวอย่าง แต่ <strong>ขั้นยิ่งสูงสเตตัสยิ่งดี</strong> Gem มีตั้งแต่ T1 ถึง T15</p>
      </Alert>
      <p><Tip>T10 Obsidian</Tip> ดีกับทุกคลาส เพราะใครก็ต้องการดาเมจเพิ่มไม่ว่าจะเล่นแบบไหน</p>
      <p><Tip>T10 Moonstone</Tip> ก็นิยมกับทุกคลาสเพื่อเพิ่มความอึด</p>
      <p>สำหรับ Knight <Tip>T10 Sapphire</Tip> เป็นตัวเลือกที่ยอดเยี่ยมสำหรับเพิ่ม DEF ส่วน <Tip>T10 Beryl</Tip> ช่วยเพิ่ม HP</p>
      <p>ถ้าเล่นบิลด์ glass cannon ให้เน้น Gem โจมตีอย่าง <Tip>T10 Ruby</Tip> และ <Tip>T10 Amethyst</Tip></p>

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
        <Tab label="Knight" icon="skills/classes/knight.png">
          <p>Knight พาเพื่อนซี้คนใหม่มาให้: <Tip>Rebound</Tip> ที่เปลี่ยนการบล็อกเป็นดาเมจสะท้อน ตรงนี้คือจุดที่คลาสเริ่มทำงานตามที่ออกแบบไว้</p>
          <p>นี่จะเป็นบิลด์หลักสำหรับคอนเทนต์ส่วนใหญ่ด้วย</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><strong>คอนเทนต์เล่นเป็นทีม</strong>: <Tip>Heart of Challenge</Tip> จำเป็นสำหรับ Reflect Tank เวลาเล่นปาร์ตี้ ถ้าไม่มี คุณจะคุมไม่ได้ว่าใครตีคุณ และ <Tip>Rebound</Tip> จะทำงานไม่สม่ำเสมอ</p>
            <p><strong>ตอนนี้ Block Rate สำคัญที่สุด</strong>: ดาเมจขึ้นกับการบล็อกที่สม่ำเสมอ ลงทุนกับมันผ่านอุปกรณ์และ charm</p>
            <p><strong>Physical Mastery</strong>: วิธีหลักในการเพิ่มดาเมจสะท้อนของ <Tip>Rebound</Tip> อย่ามองข้ามสเตตัสนี้บนอุปกรณ์ แม้จะเป็นบิลด์แทงค์</p>
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
              <p><strong>ยืนรับการโจมตีด้วยการบล็อกที่สม่ำเสมอ แล้วให้ <Tip>Rebound</Tip> สะท้อนดาเมจนั้นกลับไป</strong></p>
              <p>ทุกการบล็อกจะทำให้ <Tip>Rebound</Tip> ทำงานหนึ่งครั้ง บิลด์นี้จึงแรงเป็นพิเศษกับการโจมตีหลายฮิต ฝูงมอนสเตอร์ AoE และศัตรูที่โจมตีต่อเนื่อง</p>
              <p>สกิลที่ตี 5 ฮิตจะทำให้ <Tip>Rebound</Tip> ทำงาน 5 ครั้งแยกกัน</p>
              <p><strong>สลับตามสถานการณ์:</strong></p>
              <ul>
                <li><Tip>Valor Surge</Tip>: บัฟและล้างสถานะ แรงทั้งตอนเล่นเดี่ยวและเล่นทีม แต่ไม่บังคับ</li>
                <li><Tip>Heart of Challenge</Tip>: ยั่วยุวงกว้าง จำเป็นเมื่อเล่นทีม ยกเว้นเล่นบิลด์ glass cannon</li>
                <li><Tip>Heavy Impact</Tip>: ดาเมจระเบิดสำหรับบอสและ PvP</li>
                <li><Tip>Whirlwind Slash</Tip>: เพิ่ม DPS วงกว้าง</li>
                <li><Tip>Boiling Bloodlust</Tip>: เพิ่ม DPS ไม่บังคับ</li>
              </ul>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Paladin" icon="skills/classes/paladin.png">
          <p>เลื่อนคลาสเป็น Paladin ทำให้ชุดสกิลกว้างขึ้นมาก และเปิดบิลด์ <strong>Glass Cannon</strong> ที่ใช้ได้จริงกับคอนเทนต์ตีบอส</p>
          <p>Reflect Tank ยังเป็นบิลด์รอบด้านที่แรงที่สุด แต่ตอนนี้คุณสลับทางได้ตามที่ไฟต์ต้องการ</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><strong>คอนเทนต์เล่นเป็นทีม</strong>: <Tip>Heart of Challenge</Tip> จำเป็นสำหรับ Reflect Tank เวลาเล่นปาร์ตี้ ถ้าไม่มี คุณจะคุมไม่ได้ว่าใครตีคุณ และ <Tip>Rebound</Tip> จะทำงานไม่สม่ำเสมอ</p>
            <p><strong>เงื่อนไขการใช้ Glass Cannon</strong>: เปลี่ยนมาใช้บิลด์นี้เฉพาะเมื่อมีแทงค์แยกแล้ว หรือเมื่อดาเมจที่รับเข้ามาต่ำพอที่ไม่ต้องห่วงเรื่องรอด</p>
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
              <p><strong>สลับตามสถานการณ์:</strong></p>
              <ul>
                <li><Tip>Valor Surge</Tip>: บัฟและล้างสถานะ แรงทั้งตอนเล่นเดี่ยวและเล่นทีม แต่ไม่บังคับ</li>
                <li><Tip>Heart of Challenge</Tip>: ยั่วยุวงกว้าง จำเป็นเมื่อเล่นทีม ให้ใส่แทนสกิลกระโดดหรือโล่</li>
                <li><Tip>Desperate Protection</Tip>: โล่ฉุกเฉิน ใช้แทน <Tip>Guardian Ring</Tip> ได้</li>
                <li><Tip>Lunarwater Threads</Tip>: เครื่องมือดึงศัตรูระยะไกล</li>
                <li><Tip>Star Shattering Slash</Tip> / <Tip>Heavy Impact</Tip>: ดาเมจระเบิดสำหรับบอสและ PvP</li>
                <li><Tip>Whirlwind Slash</Tip>: เพิ่ม DPS วงกว้าง</li>
                <li><Tip>Boiling Bloodlust</Tip>: เพิ่ม DPS ไม่บังคับ</li>
                <li><Tip>Counter Blade</Tip>: ตัวแทน <Tip>Rebound</Tip> ช่วงแรก สเกลตาม Attack ยังใช้คู่กับ <Tip>Rebound</Tip> ได้ในทีมที่เอียงไปทางแทงค์</li>
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
              <p><strong>บิลด์ดาเมจบอสเมื่อไม่ต้องห่วงเรื่องรอด</strong> ใช้เมื่อมีแทงค์แยกแล้ว หรือดาเมจที่รับต่ำพอจนไม่ต้องมีแทงค์</p>
              <p>เน้นเพิ่มดาเมจรวมให้สูงสุดผ่านบัฟและดีบัฟล้วน ๆ ในไฟต์บอสที่นับดาเมจภายในจำนวนเทิร์นคงที่ บิลด์นี้เหนือกว่า Reflect Tank มาก</p>
              <p><strong>สลับตามสถานการณ์:</strong></p>
              <ul>
                <li><Tip>Boiling Bloodlust</Tip>: เพิ่ม DPS ไม่บังคับ แรงขึ้นใน tier นี้เพราะสเตตัสพื้นฐานสูงขึ้นแล้ว</li>
                <li><Tip>Guardian Ring</Tip>: คุ้มเฉพาะเมื่อมี <Tip>Defensive Assault</Tip> แล้ว</li>
                <li><Tip>Defensive Assault</Tip>: เข้ากันกับ <Tip>Guardian Ring</Tip></li>
                <li><Tip>Feline Dance</Tip>: เพิ่ม Speed เพื่อได้เทิร์นเพิ่ม</li>
                <li><Tip>Blade of Lament</Tip>: ดูดเลือดถ้าต้องการความปลอดภัยเพิ่มอีกนิด</li>
              </ul>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Guardian" icon="skills/classes/guardian.png">
          <p>Guardian คือ tier ที่ Knight เริ่มมี <strong>ดาเมจธาตุน้ำและลูปโล่</strong>: รักษาโล่ไว้เพื่อเพิ่มดาเมจ และเปลี่ยนจังหวะโล่แตกให้เป็นการโต้กลับ</p>
          <p><Tip>Swirling Blade</Tip> เปลี่ยนดาเมจที่ทำได้ 20% เป็นโล่ (สูงสุด 50% Max HP) ส่วน <Tip>Seismic Tide</Tip> คือการโจมตีธาตุน้ำวงกว้าง 2 ช่องรอบตัว เมื่อใช้คู่กับ <Tip>Guardian Ring</Tip> คุณแทบจะมีโล่ติดตัวตลอดเวลา</p>
          <p>ในสายแทงค์ล้วน <Tip>Hamper Strike</Tip> ยั่วยุจากระยะไกล (พื้นที่ 2 ช่องรอบช่องที่เลือก) และ <Tip>Oath of Vigil</Tip> รับดาเมจแทน 50% ให้ adventurer ฝ่ายเราที่เลือดน้อยที่สุด</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><Tip>Defensive Assault</Tip> เพิ่ม ATK เฉพาะ <strong>ตอนที่มีโล่อยู่</strong> ถ้าใช้ให้เก็บ <Tip>Guardian Ring</Tip> และ <Tip>Swirling Blade</Tip> ไว้ในชุดสกิลด้วย</p>
            <p><Tip>Ripple Impact</Tip> ทำงานเมื่อโล่ถูกทำลายจนหมด: ทำดาเมจธาตุน้ำรอบตัวและติด Cold 3 สแตก 100% โล่แตกจึงไม่ใช่ความเสียหายอีกต่อไป แต่กลายเป็นการโจมตี</p>
            <p><Tip>Holy Aegis</Tip> เพิ่มทั้ง DEF และความหนาของโล่ตาม DEF ควรพิจารณาอย่างยิ่งถ้าคุณเอียงไปทางป้องกัน</p>
          </Alert>
          <Tabs>
            <Tab label="โล่สายโจมตี">
              <Build
                techniques={['Guardian Ring', 'Swirling Blade', 'Seismic Tide', 'Star Shattering Slash']}
                charms={['Block Awareness', 'Defensive Assault', 'Ripple Impact', 'Pursuit of Victory']}
              />
              <p><strong>บิลด์หลักของ Guardian</strong> <Tip>Guardian Ring</Tip> และ <Tip>Swirling Blade</Tip> รักษาโล่ไว้ให้ <Tip>Defensive Assault</Tip> ทำงานตลอด เมื่อโล่แตก <Tip>Ripple Impact</Tip> จะโต้กลับและติด Cold</p>
              <p><Tip>Pursuit of Victory</Tip> เพิ่มดาเมจใส่ศัตรูที่ติด Ailment/Debuff และ <Tip>Block Awareness</Tip> รักษา Block Rate ให้สูงเพื่อบล็อกได้สม่ำเสมอเหมือน tier ก่อน ๆ</p>
            </Tab>
            <Tab label="แทงค์ทีม">
              <Build
                techniques={['Hamper Strike', 'Guardian Ring', 'Light Sword Array', 'Raging Maelstrom']}
                charms={['Soul Protection', 'Oath of Vigil', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>ใช้เมื่อเล่นเป็นทีมและคุณเป็นคนรับดาเมจ</strong> <Tip>Hamper Strike</Tip> ยั่วยุศัตรูทั้งกลุ่ม <Tip>Iron Will</Tip> ลดดาเมจจากศัตรูที่ถูกยั่วยุ ส่วน <Tip>Raging Maelstrom</Tip> ดึงศัตรูเข้ามาใกล้</p>
              <p><Tip>Light Sword Array</Tip> ร่ายก่อนเริ่มไฟต์และสะท้อนกลับทุกครั้งที่คุณถูกตี <Tip>Soul Protection</Tip> เปลี่ยน HP 50% เป็นโล่ทันทีตอนเริ่มไฟต์</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Templar" icon="skills/classes/templar.png">
          <p>Templar ดัน Knight ให้กลายเป็น <strong>แทงค์ปกป้องทีม</strong> อย่างแท้จริง: มีวิธียั่วยุมากขึ้น ลดดาเมจให้ทั้งทีม และเปลี่ยนการฮีลเป็นโล่</p>
          <p><Tip>Last Stand</Tip> เคลื่อนไปหาเป้าหมายในระยะ 4 ช่องแล้วยั่วยุ (เน้นเป้าหมายตัวใหญ่) <Tip>Sanctified Soul</Tip> ลดดาเมจที่ได้รับให้ตัวเองและเพื่อนทุกคนในระยะ 4 ช่องเป็นเวลา 2 เทิร์น ใช้ได้ตั้งแต่เทิร์นแรก</p>
          <p>ในสายโจมตี <Tip>Dawnburst</Tip> คือการโจมตีธาตุแสงวงกว้าง 3 ช่อง ส่วน <Tip>First Light</Tip> ใช้โล่ทั้งหมดที่มีเพื่อทำดาเมจธาตุแสงตามปริมาณโล่ที่ใช้ไป</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><Tip>Healing Shift</Tip> เปลี่ยน <strong>การฮีลทั้งหมด</strong> ที่คุณได้รับเป็นโล่ 2 เทิร์น ส่วนที่เหลือจะกลับเป็น HP แรงมากเมื่อทีมมีฮีลเลอร์</p>
            <p><Tip>Heart of Challenge</Tip> ร่ายก่อนเริ่มไฟต์ ศัตรูจึงถูกยั่วยุตั้งแต่แรก ใช้คู่กับ <Tip>Iron Will</Tip> เพื่อลดดาเมจจากพวกมัน</p>
            <p><Tip>Holy Recuperation</Tip> ทำงานเฉพาะเทิร์นที่คุณ <strong>ไม่ได้</strong> ใช้ technique ใด ๆ จึงไม่เหมาะกับบิลด์แทงค์ที่ต้องใช้สกิลทุกเทิร์น</p>
          </Alert>
          <Tabs>
            <Tab label="แทงค์ทีม">
              <Build
                techniques={['Guardian Ring', 'Desperate Protection', 'Heart of Challenge', 'Last Stand']}
                charms={['Healing Shift', 'Soul Protection', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>บิลด์แทงค์หลัก</strong> <Tip>Heart of Challenge</Tip> และ <Tip>Last Stand</Tip> ทำให้ศัตรูเล็งคุณ <Tip>Guardian Ring</Tip> ปกป้องตัวเอง ส่วน <Tip>Desperate Protection</Tip> สร้างโล่ให้เพื่อนที่เลือดน้อยที่สุด</p>
              <p>Charm เน้นความอึดล้วน ๆ ถ้าทีมปลอดภัยพอแล้ว เปลี่ยน <Tip>Soul Protection</Tip> เป็น <Tip>Sanctified Soul</Tip> ในช่อง technique เพื่อลดดาเมจให้ทั้งทีมได้</p>
            </Tab>
            <Tab label="แสงสะท้อน">
              <Build
                techniques={['Dawnburst', 'Sanctified Soul', 'Guardian Ring', 'First Light']}
                charms={['Rebound', 'Holy Bulwark', 'Holy Restoration', 'Holy Aegis']}
              />
              <p><strong>ใช้ตอนเล่นเดี่ยวหรือเมื่อทีมมีแทงค์คนอื่นแล้ว</strong> <Tip>Guardian Ring</Tip> สร้างโล่ แล้ว <Tip>First Light</Tip> ใช้โล่นั้นเป็นดาเมจธาตุแสง <Tip>Holy Aegis</Tip> ทำให้โล่หนาขึ้น ซึ่งแปลว่า <Tip>First Light</Tip> แรงขึ้นด้วย</p>
              <p><Tip>Holy Bulwark</Tip> เพิ่มดาเมจของสกิลสะท้อนอย่าง <Tip>Rebound</Tip> <Tip>Holy Restoration</Tip> ฮีลหลังใช้ technique ธาตุแสงครบทุก 6 ครั้ง</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Justicar" icon="skills/classes/justicar.png">
          <p>Justicar ขยายเครื่องมือไปสองทาง: <strong>แสงสะสม Charge</strong> และ <strong>น้ำแข็งลดดาเมจให้ทีม</strong></p>
          <p><Tip>Radiant Spiritblade</Tip> เด้งระหว่างศัตรูได้สูงสุด 5 ตัว และได้ดาเมจเพิ่ม 50% ถ้าใช้ Charge 5 สแตก <Tip>Skyglow</Tip> ให้ Charge 2 สแตกทุกท้ายเทิร์น พอดีสำหรับรักษาวงจร <Tip>Prism Aegis</Tip> สะท้อนดาเมจธาตุแสงตาม DEF ทุกครั้งที่คุณโดน technique</p>
          <p>ในสายน้ำแข็ง <Tip>Ice Shackles</Tip> ลดดาเมจที่คุณและเพื่อนในระยะ 5 ช่องได้รับจากศัตรูที่ติด Cold และแต่ละสแตกของ Cold เพิ่มอีก 20% <Tip>Phantom Current</Tip> ติด Cold และดึงศัตรูในระยะ 4 ช่องเข้ามาใกล้</p>
          <p><Tip>Aether Rush</Tip> มี Base Chance 150% ที่จะ Stun แทบจะคุมเป้าหมายตัวใหญ่ได้แน่นอน</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><Tip>Twin Radiance Shield</Tip> คือร่างอัปเกรดของ <Tip>Desperate Protection</Tip>: ระยะ 5 ช่องแทน 3 แต่อยู่ได้แค่ 2 เทิร์น</p>
            <p><Tip>Sacred Blessing</Tip> ลดดาเมจที่ได้รับตามจำนวน technique ธาตุแสงที่ใส่ (สูงสุด 3) ควรใช้เมื่อบิลด์มี technique ธาตุแสงอย่างน้อย 2–3 ตัว</p>
            <p><Tip>Tide Sigil</Tip> ต้องโดน technique 15 ครั้งถึงจะสะท้อนหนึ่งครั้ง จึงได้ผลเฉพาะไฟต์ยาวที่มีศัตรูเยอะ</p>
          </Alert>
          <Tabs>
            <Tab label="แทงค์ทีม">
              <Build
                techniques={['Twin Radiance Shield', 'Desperate Protection', 'Heart of Challenge', 'Last Stand']}
                charms={['Healing Shift', 'Soul Protection', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>คงสไตล์แทงค์ของ Templar ไว้</strong> แค่เพิ่ม <Tip>Twin Radiance Shield</Tip> เพื่อให้มีสองสกิลที่สร้างโล่ให้เพื่อน โล่ทั้งสองมีระยะต่างกันจึงครอบคลุมเพื่อนที่อยู่ไกลได้ด้วย</p>
            </Tab>
            <Tab label="แสง">
              <Build
                techniques={['Radiant Spiritblade', 'Prism Aegis', 'Dawnburst', 'Guardian Ring']}
                charms={['Skyglow', 'Sacred Blessing', 'Holy Aegis', 'Soul Protection']}
              />
              <p><Tip>Skyglow</Tip> เพิ่มดาเมจธาตุแสงและให้ Charge เพื่อให้ <Tip>Radiant Spiritblade</Tip> ได้ดาเมจเพิ่ม 50% ตลอด <Tip>Prism Aegis</Tip> และ <Tip>Holy Aegis</Tip> ล้วนสเกลตาม DEF บิลด์จึงยังอึดแม้จะเอียงไปทางโจมตี</p>
            </Tab>
            <Tab label="น้ำแข็ง">
              <Build
                techniques={['Phantom Current', 'Tidal Whirl', 'Swirling Blade', 'Guardian Ring']}
                charms={['Ice Shackles', 'Frigid Glint', 'Ripple Impact', 'Holy Aegis']}
              />
              <p><Tip>Frigid Glint</Tip> ติด Cold 1 สแตก 100% ทุกครั้งที่ technique ธาตุน้ำโดนเป้า Cold จึงซ้อนเร็วมาก และแต่ละสแตกยังทำให้ <Tip>Ice Shackles</Tip> ลดดาเมจให้ทั้งทีมได้มากขึ้น</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Vindicator" icon="skills/classes/compass/class-23.webp">
          <p>Vindicator เปลี่ยน Knight เป็น <strong>แทงค์ที่ทำดาเมจตาม DEF</strong>: ยิ่งอึด ยิ่งตีเจ็บ</p>
          <p><Tip>Flurry Strike</Tip> ตี 3 ฮิตในพื้นที่ 3×1 ทุก 5% DEF ที่คุณสูงกว่าเป้าหมายเพิ่มดาเมจ 5% (สูงสุด 50%) <Tip>Warforged Edge</Tip> แรงขึ้นทุกครั้งที่ใช้ในไฟต์ สูงสุด +100% <Tip>Frost Protection</Tip> สร้างโล่และติด Cold ให้ผู้โจมตี</p>
          <p>Charm ใหม่มีตัวเลือกปกป้องทีมที่น่าสนใจสองตัว: <Tip>Covenant Aegis</Tip> รับดาเมจแทน adventurer ฝ่ายเราตอนที่เลือดลดต่ำกว่า 40% ครั้งแรก และ <Tip>Iron Solidarity</Tip> มอบ Solidarity ให้เพื่อนรอบตัวคุณก่อนเริ่มไฟต์</p>
          <Alert type="red" title="ข้อควรระวังสำคัญ">
            <p><strong>DEF คือสเตตัสโจมตี</strong> ของบิลด์หลัก: เพิ่มดาเมจ <Tip>Flurry Strike</Tip> ทำให้โล่หนาขึ้นผ่าน <Tip>Holy Aegis</Tip> และเพิ่มความอึด</p>
            <p><Tip>Fortified Shell</Tip> เพิ่ม DEF ทุก 10% HP ที่เสียไป (สูงสุด 5 สแตก) ยิ่งโดนตี <Tip>Flurry Strike</Tip> ยิ่งแรง</p>
            <p><Tip>Warforged Edge</Tip> ต้องใช้เวลาถึงจะขึ้นสูงสุด จึงแรงที่สุดในไฟต์ยาวอย่างบอส</p>
          </Alert>
          <Tabs>
            <Tab label="DEF สายโจมตี">
              <Build
                techniques={['Aether Rush', 'Warforged Edge', 'Flurry Strike', 'Frost Protection']}
                charms={['Soul Protection', 'Holy Aegis', 'Power of Retribution', 'Fortified Shell']}
              />
              <p><Tip>Aether Rush</Tip> คุมเป้าหมายตัวใหญ่ <Tip>Flurry Strike</Tip> และ <Tip>Warforged Edge</Tip> ทำดาเมจหลัก <Tip>Frost Protection</Tip> รักษาโล่ไว้</p>
              <p><Tip>Power of Retribution</Tip> เพิ่ม Physical Mastery และอาจติด Cripple จากทุกการโจมตีกายภาพ</p>
            </Tab>
            <Tab label="Charge แสง">
              <Build
                techniques={['Charged Slash', 'Radiant Roar', 'Radiant Spiritblade', 'Prism Aegis']}
                charms={['Energy Flux', 'Skyglow', 'Sacred Blessing', 'Holy Aegis']}
              />
              <p><Tip>Energy Flux</Tip> ให้ Charge 14 สแตกตั้งแต่เริ่มไฟต์ และทุกครั้งที่ใช้ 2 สแตกจะเพิ่ม ATK <Tip>Radiant Roar</Tip> ใช้ 10 สแตกเพื่อร่ายซ้ำ <Tip>Radiant Spiritblade</Tip> ใช้ 5 สแตกเพื่อเพิ่มดาเมจ 50% ส่วน <Tip>Charged Slash</Tip> และ <Tip>Skyglow</Tip> ชาร์จ Charge กลับมา</p>
              <p>มี technique ธาตุแสง 3 ตัว <Tip>Sacred Blessing</Tip> จึงทำงานเต็มที่</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Caelifer" icon="skills/classes/compass/class-27.webp">
          <Alert type="red" title="คลาสยังไม่เปิดตัว">
            <p>Caelifer คือคลาส tier 8 ของสายนี้และ <strong>ยังไม่มีในเวอร์ชันปัจจุบัน</strong> ข้อมูลสกิลมาจากไฟล์เกมจึงอาจเปลี่ยนตอนเปิดตัว บิลด์ด้านล่างเป็นแค่การดูล่วงหน้า</p>
          </Alert>
          <p>Caelifer ทำให้สาย <strong>Charge แสง</strong> ของ Vindicator สมบูรณ์: <Tip>Lucent Edge</Tip> ได้ Charge 1 สแตกทุกครั้งที่ทำดาเมจ (โดนศัตรูยิ่งเยอะยิ่งชาร์จเร็ว) และ <Tip>Lumen Nova</Tip> ใช้ Charge ทั้งหมดเพื่อเพิ่มดาเมจ 7% ต่อสแตก</p>
          <p><Tip>Luminous Restoration</Tip> ฮีลทุกครั้งที่คุณใช้ Charge ตั้งแต่ 5 สแตกขึ้นไปพร้อมกัน วงจรชาร์จแล้วใช้ Charge จึงเป็นแหล่งฮีลด้วย</p>
          <p>นอกจากนี้ยังมีสายน้ำแข็งด้วย <Tip>Vapor Bloom</Tip>, <Tip>Frostcast</Tip> และ <Tip>Skyrider Rimefield</Tip> พร้อม <Tip>Stoneward Prayer</Tip> ที่สร้างโล่ให้เพื่อนทุกคนในระยะ 5 ช่องก่อนเริ่มไฟต์</p>
          <Tabs>
            <Tab label="Charge แสง">
              <Build
                techniques={['Lucent Edge', 'Charged Slash', 'Radiant Roar', 'Lumen Nova']}
                charms={['Skyglow', 'Fortified Shell', 'Energy Flux', 'Luminous Restoration']}
              />
              <p>ชาร์จ Charge ด้วย <Tip>Lucent Edge</Tip>, <Tip>Charged Slash</Tip>, <Tip>Skyglow</Tip> และ <Tip>Energy Flux</Tip> แล้วปล่อยด้วย <Tip>Radiant Roar</Tip> และ <Tip>Lumen Nova</Tip> ควรวาง <Tip>Lumen Nova</Tip> ไว้ท้ายลำดับเพื่อใช้สแตกได้มากที่สุด</p>
            </Tab>
            <Tab label="น้ำแข็ง">
              <Build
                techniques={['Vapor Bloom', 'Frostcast', 'Phantom Current', 'Frost Protection']}
                charms={['Skyrider Rimefield', 'Frost Domain', 'Ice Shackles', 'Stoneward Prayer']}
              />
              <p><Tip>Frost Domain</Tip> และ <Tip>Skyrider Rimefield</Tip> ซ้อน Cold ให้ศัตรูรอบตัวคุณอย่างต่อเนื่อง <Tip>Ice Shackles</Tip> เปลี่ยนจำนวนสแตก Cold นั้นเป็นการลดดาเมจให้ทั้งทีม</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
