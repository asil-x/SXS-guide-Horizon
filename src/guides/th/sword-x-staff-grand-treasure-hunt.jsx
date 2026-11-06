import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Grand Treasure Hunt คือ <strong>อีเวนต์ที่วนมาทุกสัปดาห์</strong> โดยใช้ <Tip>Auroradrasil Energy</Tip> เพื่อปลดล็อกขั้นของรางวัล</p>
      <p>กลไกที่สำคัญที่สุดคือ <strong>พลังงานจะถูกเก็บไว้ใช้ในอีเวนต์ครั้งถัดไป</strong> ไม่จำเป็นต้องใช้ให้หมดทุกสัปดาห์</p>

      <hr />

      <h2 id="how-it-works">ระบบทำงานอย่างไร</h2>
      <p><Img src="guides/grand-treasure.webp" alt="sword x staff grand treasure event" /></p>
      <p>แต่ละสัปดาห์คุณจะได้ <Tip>Auroradrasil Energy</Tip> ประมาณ 2,250: จากเควสต์ 2,240 และจากแพ็กฟรีในร้านค้า 10</p>
      <p>ต้องใช้ <Tip>Auroradrasil Energy</Tip> 2,040 เพื่อไปถึงขั้นรางวัลสุดท้าย หลังจากนั้น Level 5 จะมีไอเทมให้ซื้อเพิ่ม ใช้อีกสูงสุด 1,200 <Tip>Auroradrasil Energy</Tip> ขึ้นอยู่กับว่าจะซื้อเท่าไร</p>
      <Alert title="พลังงานสะสมข้ามสัปดาห์ได้">
        <p><strong>ไม่จำเป็นต้องใช้พลังงานทุกสัปดาห์</strong></p>
        <p>การเก็บไว้หลายสัปดาห์ช่วยให้มีพอซื้อไอเทม Level 5 ที่แพงกว่า หรือรอรอบของรางวัลที่ดีกว่า</p>
      </Alert>
      <p>Level 5 มี <strong>ไอเทมหมุนเวียนหนึ่งชิ้นที่เปลี่ยนทุกสัปดาห์</strong> และมักเป็นจุดที่มีของรางวัลดีที่สุด รวมถึงสุ่มแบบเสียเงินและ relic ที่ช่วยให้ฟาร์มง่ายขึ้น</p>

      <hr />

      <h2 id="saving-strategy">กลยุทธ์การเก็บสะสม</h2>
      <p>สาย F2P และสายเติมน้อย <strong>ไปถึงขั้นสุดท้ายทุกสัปดาห์ไม่ได้</strong></p>
      <Alert type="red" title="วางแผนตามรอบหมุนเวียน">
        <p><strong>เช็กไอเทม Level 5 ของสัปดาห์นี้ทุกครั้งก่อนตัดสินใจใช้</strong></p>
      </Alert>
      <table className="data-table">
        <tbody>
          <tr><td>ทุก 2 สัปดาห์</td><td>4,500</td><td>ไอเทม Level 5 สองชิ้น</td></tr>
          <tr><td>ทุก 3 สัปดาห์</td><td>6,750</td><td>ไอเทม Level 5 ทั้งหมด</td></tr>
          <tr><td>ยืดหยุ่น</td><td>เก็บสำรองไว้ 2,400</td><td>ชิ้นซ้ายสุดเมื่อจำเป็น</td></tr>
        </tbody>
      </table>
      <p>แบบยืดหยุ่นคือซื้อของได้ตราบใดที่ยังเหลือสำรอง 2,400 และซื้อชิ้นซ้ายสุดของ Level 5 เฉพาะตอนที่ต้องใช้หรือเมื่อมันดีจริง ๆ</p>

      <hr />

      <h2 id="what-to-buy">ควรซื้ออะไร</h2>
      <Tabs>
        <Tab label="Level 1">
          <p><Img src="guides/grand-treasure-rewards-1.webp" alt="sword x staff level 1 grand treasure rewards" /></p>
          <p>ช่วงต้นเกมของรางวัลทุกอย่างช่วยเพิ่มพลัง แต่ส่วนตัวจะเน้น <Tip>Basic Treats</Tip> เพราะหายากกว่า</p>
        </Tab>
        <Tab label="Level 2">
          <p><Img src="guides/grand-treasure-rewards-2.webp" alt="sword x staff level 2 grand treasure rewards" /></p>
          <p>เน้นของขวัญสำหรับ companion มี companion ต้องอัปเกรดเยอะมากและของขวัญไม่เคยพอ</p>
        </Tab>
        <Tab label="Level 3">
          <p><Img src="guides/grand-treasure-rewards-3.webp" alt="sword x staff level 3 grand treasure rewards" /></p>
          <p>มาถึงตรงนี้เลือกอะไรก็ได้ ทุกชิ้นช่วยให้บัญชีแข็งแกร่งขึ้น</p>
          <p>ส่วนตัวจะเอา <Tip>Destiny Fruit</Tip> เพราะมีโอกาสเจอบอส พ่อค้า และของรางวัลดี ๆ</p>
        </Tab>
        <Tab label="Level 4">
          <p><Img src="guides/grand-treasure-rewards-4.webp" alt="sword x staff level 4 grand treasure rewards" /></p>
          <p><strong>อย่า</strong> ซื้อ <Tip>Stellatie</Tip> หรือ <Tip>Bond Trinket</Tip> ของพวกนี้ F2P หาได้อยู่แล้ว</p>
          <p>ส่วน <Tip>Legendary Auroral Badge</Tip> ปกติได้จากการเติมเงินเท่านั้น ซื้อเลย</p>
        </Tab>
        <Tab label="Level 5">
          <p><Img src="guides/grand-treasure-rewards-5.webp" alt="sword x staff level 5 grand treasure rewards" /></p>
          <p>ทุกอย่างในขั้นนี้ดีหมด แต่เช็กก่อนเสมอว่าคุณต้องการของรางวัลนั้นจริงไหม</p>
          <p><strong>แนะนำ 100% ให้เอา Lucky Statue เพื่อให้การฟาร์มรายวันสบายขึ้น</strong></p>
        </Tab>
      </Tabs>
    </>
  );
}
