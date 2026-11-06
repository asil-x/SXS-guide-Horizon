import { Link } from 'react-router-dom';
import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Fantomon คือสัตว์เลี้ยงที่ให้สเตตัสแบบติดตัวและออกรบไปพร้อมกับคุณได้ ปลดล็อกที่ <strong>เลเวลบัญชี 50</strong> ผ่านต้นไม้ใหญ่ในบ้านของคุณ</p>
      <p>ดู <Link to="/db/fantomons">ฐานข้อมูล Fantomon</Link> ได้ที่นี่ ถ้าอยากเห็นรายชื่อสัตว์เลี้ยงทั้งหมดในเกมและตัวไหนดีที่สุด</p>
      <p><Img src="guides/fantomon-gacha.webp" alt="sword x staff fantomon gacha" /></p>

      <hr />

      <h2 id="obtaining">วิธีได้มา</h2>
      <p><Img src="guides/fantomon-rates.webp" alt="sword x staff fantomon-rates" /></p>
      <p>Fantomon สุ่มได้จากต้นไม้ในบ้านของคุณ สรุปสั้น ๆ:</p>
      <ul>
        <li>อัตราพื้นฐาน 0.8% สำหรับ fantomon SSR และ 5% สำหรับ SR</li>
        <li>ได้ <Tip>Summon Crystal</Tip> อย่างน้อย 1 อันทุก 10 ครั้งที่สุ่ม</li>
        <li><strong>Summon Crystal 60 อัน</strong> แลก fantomon Mythic ในร้านค้าได้หนึ่งตัว</li>
      </ul>
      <p>ร้านค้ามี <strong>fantomon Mythic แค่สองตัว</strong>: <Tip>Aegiswing</Tip> และ <Tip>Nyxarchon</Tip> ทั้งคู่ใช้ <Tip>Summon Crystal</Tip> ตัวละ 60 อัน</p>
      <p>นอกจากนี้ทุกสัปดาห์ยังมี Fantomon SSR แบบสุ่มราคา 18 <Tip>Summon Crystal</Tip> แต่ควรเก็บไว้แลกตัว Mythic เพราะแรงกว่ามาก</p>
      <h3 id="arena-shop-exclusive">มีเฉพาะในร้านค้า Arena</h3>
      <p><Img src="guides/kels-shards.webp" alt="sword x staff kels-shards" /></p>
      <p><strong><Tip>Kels</Tip></strong> สุ่มจากต้นไม้ไม่ได้ มีขายเฉพาะในร้านค้าสนามประลอง ดังนั้นคอยดูเงิน Arena ของคุณไว้</p>

      <hr />

      <h2 id="deployment">การส่งออกรบ</h2>
      <p><Img src="guides/pet-stats.webp" alt="sword x staff pet-stats" /></p>
      <p>คุณมีช่องส่งออกรบ 4 ช่อง แต่ <strong>Fantomon ทุกตัวที่มีจะให้สเตตัส</strong> เพียงแต่ในอัตราที่ต่างกัน:</p>
      <table className="data-table">
        <tbody>
          <tr><td>ตัวหลัก (1 ช่อง)</td><td>100%</td></tr>
          <tr><td>ตัวรอง (3 ช่อง)</td><td>ตัวละ 50%</td></tr>
          <tr><td>ที่เหลือในคอลเลกชัน</td><td>ตัวละ 20%</td></tr>
        </tbody>
      </table>
      <p>ใส่ fantomon ที่หายากที่สุด (Mythic ก่อน แล้วค่อย Legendary) ไว้ในช่องหลักเสมอเพื่อให้ได้สเตตัสสูงสุด</p>
      <p>fantomon ที่พาเข้าไฟต์ไม่จำเป็นต้องเป็นตัวในช่องหลักที่ให้สเตตัส <strong>Fantomon ตัวหลัก ≠ Fantomon ที่ใช้ต่อสู้</strong></p>

      <hr />

      <h2 id="leveling">การอัปเลเวล</h2>
      <h3 id="treats">Treats</h3>
      <p><Img src="guides/pet-treats.webp" alt="sword x staff pet-treats" /></p>
      <p>การอัปเลเวล fantomon ต้องใช้ <Tip>Basic Treats</Tip> ซึ่งหาได้จาก:</p>
      <ul>
        <li>รางวัลออฟไลน์ของรถขนของ</li>
        <li>ร้านรถขนของรายวัน (ใช้ <Tip>Rolla</Tip>)</li>
        <li>พืชและสัตว์เลี้ยงในร้านค้ากิลด์</li>
      </ul>
      <Alert title="Fantomon Resonance (การสั่นพ้อง)">
        <p>เลเวลต่ำสุดในบรรดา 4 fantomon ที่ออกรบจะกลายเป็นเลเวลสั่นพ้อง ถ้า 4 ตัวที่ออกรบมีเลเวลต่ำสุด 127 fantomon ตัวอื่นทั้งหมดที่คุณมีก็จะนับเป็นเลเวล 127 ด้วย</p>
        <p><strong>รักษาเลเวลของ 4 fantomon ที่ออกรบให้เท่ากันเพื่อให้ได้สเตตัสมากที่สุด</strong></p>
      </Alert>
      <h3 id="aptitude">Aptitude (พรสวรรค์)</h3>
      <p><Img src="guides/pet-aptitude.webp" alt="sword x staff pet-aptitude" /></p>
      <p>โดยพื้นฐานคือสกิลทรีเพิ่มสเตตัสของ fantomon แต่ละตัว (และของคุณด้วย) สิ่งที่ควรจำ:</p>
      <ul>
        <li>ลงทุนแค่กับ <strong>4 fantomon ที่ออกรบ</strong> เพราะวัตถุดิบมีจำกัด</li>
        <li>รีเซ็ต aptitude ได้ถ้าอยากเปลี่ยน fantomon ที่ออกรบ</li>
      </ul>

      <hr />

      <h2 id="evolution">วิวัฒนาการ</h2>
      <p>วิวัฒนาการจะปลดล็อก <strong>ร่าง Materialization</strong> ของ fantomon ซึ่งทำงานในไฟต์และเปิดสกิล <em>(แอคทีฟ)</em> ใหม่</p>
      <h3 id="requirements-to-evolve">เงื่อนไขการวิวัฒนาการ</h3>
      <ul>
        <li>ถึง <strong>เลเวล 108</strong> และปลดล็อก Nimbuville</li>
        <li>fantomon ต้องเป็น <strong>ระดับ Mythic</strong> (ต้องมีตัวซ้ำเพื่อขึ้นถึงระดับนี้)</li>
      </ul>
      <h3 id="how-materialization-works">กลไก Materialization</h3>
      <p>วงพลังงานรอบไอคอน fantomon จะค่อย ๆ เต็มระหว่างไฟต์ เมื่อเต็มแล้ว fantomon จะปรากฏตัวในร่างวิวัฒนาการ ถ้าถูกล้ม พลังงานจะกลับเป็น 0</p>
      <p>ตอนยังไม่ปรากฏตัว จะมีแค่ <strong>สกิลซัพพอร์ต</strong> ที่ทำงาน เมื่อปรากฏตัวแล้ว จะมีแค่ <strong>สกิลต่อสู้</strong> ที่ทำงาน จนกว่า fantomon จะถูกล้มและกลับสู่ร่างซัพพอร์ต</p>
    </>
  );
}
