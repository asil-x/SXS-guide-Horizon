import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Sword x Staff มีระบบอาหารที่น่าสนใจ: ช่วยฟื้น HP เพิ่มสเตตัสตอนต่อสู้ และที่สำคัญที่สุดคือ <strong>เพิ่มสเตตัสถาวรด้วยอาหารบางชนิด</strong></p>

      <hr />

      <h2 id="healing">ฟื้น HP</h2>
      <p><Img src="guides/healing-food.webp" alt="sword x staff healing food" /></p>
      <p>อาหารพื้นฐานที่ต้องทำบ่อย ๆ เพื่อฟื้น HP หลังต่อสู้ <strong>แต่ละพื้นที่ใหม่จะมีอาหารแบบใหม่ที่แรงกว่าแบบเดิม</strong></p>
      <Alert title="กลับบ้านก็ฟื้น HP ได้">
        <p>อาหารพวกนี้มีประโยชน์มากตอนลงดันเจี้ยน เพราะกินที่แคมป์พักเพื่อเตรียมตัวก่อนไฟต์ใหญ่ได้</p>
      </Alert>
      <p>อาหารเหล่านี้ราคาถูกทั้งหมด (ใช้ทองกับพืชที่ฟาร์มได้) ไม่ต้องกลัวว่ายาฟื้น HP จะหมด</p>
      <p>ถ้าไม่รู้ว่าวัตถุดิบอยู่ที่ไหน ให้กดที่วัตถุดิบในหน้าสร้างของ เกมจะวาร์ปไปที่แผนที่ให้เริ่มเก็บได้ทันที</p>

      <hr />

      <h2 id="temporary-buffs">บัฟชั่วคราว</h2>
      <p><Img src="guides/temporary-food.webp" alt="sword x staff temporary food" /></p>
      <p>อาหารง่าย ๆ ที่ให้บัฟในบางไฟต์ ส่วนใหญ่ใช้สำหรับพื้นที่เฉพาะ หรือ ไฟต์ประเภทเฉพาะ ดังนั้นอ่านคำอธิบายให้ดีก่อนกินทุกครั้ง</p>
      <p><strong>อาหารไม่มีวันหมดอายุ</strong> ไม่ต้องรีบกินทันทีที่ได้มา</p>
      <h3 id="where-can-i-get-these-foods">หาอาหารเหล่านี้ได้จากไหน?</h3>
      <ul>
        <li>ทำเองบางเมนูเมื่อความคืบหน้าในเกมเปิดให้</li>
        <li>ปลดล็อกสูตรใน Kingdom Shop</li>
      </ul>

      <hr />

      <h2 id="permanent-buffs">บัฟถาวร</h2>
      <p><Img src="guides/permanent-food.webp" alt="sword x staff permanent food" /></p>
      <p>มาถึงระบบที่สำคัญ: เพิ่มสเตตัสถาวรด้วยอาหาร</p>
      <p>ใช่ ส่วนนี้คือ pay to win แต่ผู้เล่น F2P ก็ยังสะสมสเตตัสได้พอสมควรในระยะยาวแค่จากการเล่นและฟาร์ม <strong>เหมือนเกม idle ส่วนใหญ่ นี่คือการวิ่งมาราธอน ไม่ใช่วิ่งระยะสั้น</strong></p>
      <p>สเตตัสที่ได้ขึ้นอยู่กับจำนวนครั้งที่คุณกินเมนูเดิม ยิ่งกินมากก็ยิ่งได้ผลน้อยลง</p>
      <table className="data-table">
        <tbody>
          <tr><td>1-10</td><td>100%</td></tr>
          <tr><td>11-30</td><td>50%</td></tr>
          <tr><td>31-50</td><td>20%</td></tr>
          <tr><td>51+</td><td>5%</td></tr>
        </tbody>
      </table>
      <h3 id="where-can-i-get-these-foods-1">หาอาหารเหล่านี้ได้จากไหน?</h3>
      <ul>
        <li>ซื้อในโรงประมูลด้วย <Tip>Luminium</Tip></li>
        <li>ในร้านค้า Arena</li>
        <li>ซื้อสูตรในโรงประมูลด้วย <Tip>Luminium</Tip></li>
        <li>รางวัล Guild Clash</li>
        <li><strong>ถ้าโชคดี</strong> เควสต์รายวันและ <Tip>Mysterious Merchant</Tip> ก็อาจมีสูตรด้วย</li>
      </ul>
    </>
  );
}
