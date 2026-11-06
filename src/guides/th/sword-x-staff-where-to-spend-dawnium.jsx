import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>เกมแนว AFK Idle RPG แบบนี้ต่างจากเกมกาชาทั่วไปที่เงินพรีเมียมส่วนใหญ่หมดไปกับการสุ่มตัวละคร</p>
      <p>ในเกมนี้คุณใช้เงินพรีเมียมซื้อทรัพยากรและทำกิจกรรมรายวันที่ช่วยให้บัญชีแข็งแกร่งขึ้น ไม่ใช่แค่ไว้สุ่มอย่างเดียว</p>
      <Alert type="red" title="เก็บไว้ให้พ่อค้าด้วย!">
        <p>คุณมีโอกาสเจอพ่อค้าตอนใช้ <Tip>Destiny Fruit</Tip> พวกเขาขายทรัพยากรดี ๆ สกิล และบางครั้งก็มี Fantomon ด้วย เก็บ <Tip>Dawnium</Tip> ไว้บ้างเสมอเผื่อกรณีนี้</p>
      </Alert>
      <p>จะทำกิจกรรมเสริม / ใช้เงินมากแค่ไหนแล้วแต่คุณ แต่ถ้าอยากให้บัญชีคุ้มที่สุด <strong>ควรทำเกือบทั้งหมดทุกวัน</strong></p>
      <Tabs>
        <Tab label="Material Realms">
          <p><Img src="guides/material-realms.webp" alt="sword x staff material realms" /></p>
          <p>ที่นี่คุณฟาร์มทรัพยากรทุกอย่างที่ต้องใช้พัฒนาบัญชีและสำหรับรถขนของได้</p>
          <ul>
            <li><strong>ผู้เล่น F2P</strong> ควรซื้อรอบเพิ่ม 2/2/2/2</li>
            <li><strong>สายเติม</strong> ควรซื้อรอบเพิ่มอย่างน้อย 4/2/4/4</li>
            <li><strong>สายวาฬ</strong> ซื้อได้มากกว่านั้นอีก แล้วแต่ว่าคุณสบายใจจะใช้ <Tip>Dawnium</Tip> เท่าไร</li>
          </ul>
          <p><Tip>Raw Ore</Tip> และ <Tip>Chrono Sand</Tip> หมดเร็วมาก สายเติมควรซื้อรอบเพิ่ม แนะนำวันละ 4 รอบ แต่ก็ขึ้นกับว่าคุณเติมเท่าไร</p>
          <p>ราคาเพิ่มขึ้นตามลำดับ: 60, 60, 100, 100, 150, 150, 200, 200, 250, 300</p>
        </Tab>
        <Tab label="Daily Dungeon">
          <p><Img src="guides/daily-dungeon-sxs.webp" alt="sword x staff daily dungeon" /></p>
          <p><strong>สำคัญมากที่ต้องซื้อรอบเพิ่มที่นี่ให้ครบ</strong> ซื้อได้วันละ 2 รอบ รอบแรก 100 รอบที่สอง 150</p>
          <p>ที่นี่คือที่ฟาร์มอุปกรณ์และชิ้นส่วนสำหรับอุปกรณ์ความหายากสูงสุด</p>
        </Tab>
        <Tab label="Guild">
          <p><Img src="guides/guild-screen.webp" alt="sword x staff guild screen" /></p>
          <p><strong>ส่วนนี้ขึ้นอยู่กับกิลด์และข้อกำหนดของกิลด์คุณมาก</strong> แต่ยังมีบางอย่างที่ทำได้ทุกวันเพื่อเพิ่มทรัพยากรและพลัง</p>
          <ul>
            <li>บริจาคกิลด์: F2P ทำรอบฟรี + อีกสองรอบ สายเติมทำได้มากกว่านั้น</li>
            <li>ไอเทมเพิ่มอัตราฟาร์ม (อยู่ได้ 24 ชั่วโมงแต่ค่อนข้างแพง <em>ไม่แนะนำสำหรับ F2P</em>)</li>
          </ul>
          <hr />
          <p>ส่วนร้านค้ากิลด์แล้วแต่ความชอบ ส่วนตัวจะซื้อ:</p>
          <ul>
            <li><Tip>Bond Trinket</Tip> ต้องสะสมไว้เลี้ยงสัตว์เลี้ยงทั้งหมด</li>
            <li><Tip>Resilient Sprout</Tip>, <Tip>Hopeful Bud</Tip> และ <Tip>Lunar Heart</Tip> (เฉพาะตอนลดราคา)</li>
            <li><Tip>Stone Sheep</Tip>, <Tip>Cotton Sheep</Tip> และ <Tip>Lunar Sheep</Tip> (เฉพาะตอนลดราคา)</li>
            <li><Tip>Steely Chicken</Tip>, <Tip>Dawn Chicken</Tip> และ <Tip>Lunar Chicken</Tip> (เฉพาะตอนลดราคา)</li>
          </ul>
          <p><strong>คุณจะไม่ซื้อวัตถุดิบลดราคาครบทั้งสามแบบ</strong> ให้เน้นแบบที่ aptitude ของ Fantomon ตัวหลักต้องใช้</p>
        </Tab>
        <Tab label="Arena">
          <p><Img src="guides/pvp.webp" alt="sword x staff pvp screen" /></p>
          <p>ส่วนตัวไม่ได้ชอบ PVP มาก แต่ <strong>เงินที่ได้มีประโยชน์มากกับร้านแลกของ Arena</strong> จึงควรตีเพิ่มสักหน่อย (วันละ 2 ไฟต์ถูกมาก)</p>
          <Alert title="รางวัลรีเซ็ต PVP">
            <p>ทุกครั้งที่รีเซ็ตซีซัน ให้รีเฟรชให้มากที่สุดอย่างน้อยสองวันแรกเพื่อได้รางวัลร้านค้าเร็วขึ้น จากนั้นค่อยกลับมาตีเพิ่มแค่ 2 ไฟต์</p>
          </Alert>
          <p>ราคาเพิ่มขึ้นตามลำดับ: 10, 15, 20, 30, 40, 60, 80, 100</p>
        </Tab>
        <Tab label="Vendor Booth">
          <p><Img src="guides/daily-shop.webp" alt="sword x staff daily shop" /></p>
          <p><strong>แท็บ General</strong></p>
          <p>ซื้อทุกอย่าง ยกเว้นวัตถุดิบทำอาหาร รีเฟรชต่อก็ต่อเมื่อมีเงินพอเหมาร้าน ควรทำอย่างน้อยวันละ 3 ครั้ง</p>
          <hr />
          <p><strong>แท็บ Vault</strong></p>
          <ol>
            <li><Tip>Stamina</Tip> (ฟรีนี่นา lol)</li>
            <li><Tip>Stellatie</Tip> ลดราคาก็ดี แต่ไม่จำเป็น</li>
            <li>ทรัพยากร Material Realm: <Tip>Iron Hammer</Tip>, <Tip>Gold Pickaxe</Tip>, <Tip>Worn Knuckles</Tip> และ <Tip>Sand Shovel</Tip></li>
            <li><Tip>Destiny Fruit</Tip> (F2P ควรเก็บ 200 ไว้สำหรับอีเวนต์ถัดไป)</li>
            <li><Tip>Epic Auroral Badge</Tip></li>
            <li>สำหรับสายเติมเป็นหลัก ซื้อ <Tip>Refined Ore</Tip> เพิ่ม</li>
          </ol>
        </Tab>
        <Tab label="Auction House">
          <p><Img src="guides/auction-house.webp" alt="sword x staff auction house" /></p>
          <p>ที่นี่คุณประมูลและขายอุปกรณ์ ชิ้นส่วนอุปกรณ์ วัตถุดิบทำอาหาร วัตถุดิบ Fantomon และอีกมากมาย</p>
          <p>ใส่ไว้ในรายการเพื่อให้คอยดูไว้ แต่ไม่จำเป็นต้องเข้าทุกวันเลย</p>
        </Tab>
      </Tabs>
      <p>ยังมีที่อื่นอีกที่ใช้ <Tip>Dawnium</Tip> ได้ทุกวัน แต่ <strong>ส่วนตัวคิดว่าที่กล่าวมาข้างบนดีที่สุดสำหรับ F2P หรือสายเติมน้อย</strong></p>
    </>
  );
}
