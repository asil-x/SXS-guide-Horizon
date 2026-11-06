import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p><Tip>Destiny Fruit</Tip> เป็นไอเทมสำคัญ ใช้สุ่มรับทรัพยากรและสะสม relic ให้ครบเซ็ตเพื่อเพิ่มสเตตัส</p>
      <p>คุณใช้ผลไม้ได้ทุกที่ใน otherworld (แผนที่สำรวจ) แต่ละผลจะให้ทรัพยากรหรือเหตุการณ์สุ่มหนึ่งอย่าง</p>
      <p><strong>เหตุการณ์เหล่านี้ช่วยเพิ่มพลังได้มาก</strong> เพราะ <Tip>Mysterious Merchant</Tip> อาจขาย Fantomon สกิล และวัตถุดิบดี ๆ แลกกับ <Tip>Dawnium</Tip></p>
      <p><Img src="guides/destiny-exploration.webp" alt="sword x staff destiny exploration" /></p>

      <hr />

      <h2 id="where-to-get-them">หาได้จากไหน?</h2>
      <p>อีเวนต์ เควสต์ ต้นไม้ในฐาน… การสะสม <Tip>Destiny Fruit</Tip> ค่อนข้างง่าย แม้แต่ผู้เล่น F2P</p>
      <p>สำหรับสายเติม ร้านค้าคือเพื่อนแท้ ช่วงต้นเกมยังมีแพ็กที่มีผลไม้ไม่มาก แต่ภายหลังจะมีอีเวนต์พิเศษให้ซื้อได้เยอะขึ้น</p>

      <hr />

      <h2 id="when-to-use-them">ควรใช้เมื่อไร</h2>
      <p>ส่วนตัวคิดว่าใช้ <Tip>Destiny Fruit</Tip> ได้สองแบบ:</p>
      <ol>
        <li><strong>ได้มาเท่าไรใช้เท่านั้น</strong> เน้นสะสม relic เซ็ต Rare และ Epic ให้ครบ</li>
        <li><strong>ใช้แค่พอทำเควสต์ ที่เหลือเก็บไว้</strong> เร็ว ๆ นี้จะมีอีเวนต์ซัมเมอร์ที่ให้ใช้ <Tip>Destiny Fruit</Tip> 200 ผล</li>
      </ol>
      <p>แบบที่สองเหมาะทั้งกับ F2P และสายเติมน้อย เพราะการซื้อผลไม้จำนวนมากขนาดนั้นแพงมาก</p>

      <hr />

      <h2 id="finding-relic-set-locations">หาจุดดรอปเซ็ต relic</h2>
      <p>อย่างที่บอกไป <Tip>Destiny Fruit</Tip> มีโอกาสให้ relic ทุกระดับความหายาก คนส่วนใหญ่จึงใช้เพื่อสะสมเซ็ต Rare และ Epic ให้ครบ</p>
      <Alert type="blue" title="แต่ละพื้นที่บนแผนที่ดรอป relic ต่างกัน">
        <p>แค่เข้าไปที่คอลเลกชันแล้วกด relic ที่ยังขาด <strong>เกมจะบอกเองว่าต้องไปที่ไหน</strong></p>
      </Alert>
      <p><Img src="guides/relic-source.webp" alt="sword x staff relic sources" /></p>

      <hr />

      <h2 id="why-save-200">ทำไมต้องเก็บไว้ 200?</h2>
      <p><strong>เพราะอีเวนต์!</strong> อีเวนต์ที่วนกลับมาหลายอันมีเควสต์ให้ใช้ <Tip>Destiny Fruit</Tip></p>
      <p>อีเวนต์เหล่านี้เปลี่ยนไปตามซีซัน แต่ปกติต้องใช้รวม 200 หรือ 300 ผลถึงจะทำเควสต์ที่วนมาเหล่านั้นได้ครบ</p>
      <p><Img src="guides/destiny-event-saving.webp" alt="sword x staff destiny event saving up resources" /></p>
    </>
  );
}
