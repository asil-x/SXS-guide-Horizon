import { Codes } from '../../components/guide';

export default function Page() {
  return (
    <>
      <h2 id="where-to-claim-codes">วิธีกรอกโค้ด</h2>
      <ol>
        <li>เปิดเมนูหลัก</li>
        <li>กดที่ User Center</li>
        <li>เข้าไปที่หน้า “Gift Code”</li>
        <li>กรอกโค้ดเพื่อรับของรางวัล</li>
      </ol>

      <hr />

      <h2 id="working-codes">โค้ดที่ยังใช้ได้</h2>
      <Codes codes={[
        'SXSWITHYOU',
        'SXSFACEBOOK',
        'LUCKYGACHA',
        'LEVELUPNOW',
        'YUMMYVIP',
        'SUPERSKILL',
        'NPC2026',
        'WORLDOPEN',
      ]} />
      <p>ถ้าโค้ดไหนใช้ไม่ได้แล้ว แจ้ง Guild Horizon ได้เลย เราจะอัปเดตให้</p>

      <hr />

      <h2 id="old-codes">โค้ดเก่า (หมดอายุแล้ว)</h2>
      <Codes expired codes={[]} />
    </>
  );
}
