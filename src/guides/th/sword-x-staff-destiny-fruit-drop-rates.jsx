import { Alert, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>กลไกของผลไม้น่าจะเป็นแบบนี้: สุ่มความหายากก่อน แล้วจึงสุ่มของรางวัลจากกลุ่มของความหายากนั้น</p>
      <p>ของรางวัลประเภททรัพยากรจะรวมไว้ตามความหายาก ส่วนประเภทของ Relic ที่ได้ขึ้นอยู่กับพื้นที่ที่คุณใช้ <Tip>Destiny Fruit</Tip></p>
      <Alert title="เกี่ยวกับของรางวัล">
        <p>“Resource” คือไอเทมพื้นฐานที่ได้จากผลไม้ รวมถึงหีบหลายระดับความหายาก</p>
      </Alert>
      <table className="data-table">
        <tbody>
          <tr><td>Common</td><td>74.98%</td></tr>
          <tr><td>Common Resource</td><td>74.982%</td></tr>
          <tr><td>Rare</td><td>11.6%</td></tr>
          <tr><td>Rare Resource</td><td>10%</td></tr>
          <tr><td>Ancient Relic</td><td>1.6%</td></tr>
          <tr><td>Epic</td><td>8.11%</td></tr>
          <tr><td>Epic Resource</td><td>7.61%</td></tr>
          <tr><td>Ancient Relic</td><td>0.5%</td></tr>
          <tr><td>Legendary</td><td>5.07%</td></tr>
          <tr><td>Legendary Resource</td><td>0.301%</td></tr>
          <tr><td>Ancient Relic</td><td>0.151%</td></tr>
          <tr><td>Elite Bounty Order</td><td>0.502%</td></tr>
          <tr><td>Wandering NPC: Rosta</td><td>1.506%</td></tr>
          <tr><td><Tip>Mysterious Merchant</Tip></td><td>1.506%</td></tr>
          <tr><td>Monster Challenge Letter</td><td>1.104%</td></tr>
          <tr><td>Wonder</td><td>0.23%</td></tr>
          <tr><td>Wonder Resource</td><td>0.1%</td></tr>
          <tr><td>Ancient Relic</td><td>0.03%</td></tr>
          <tr><td>Demon Lord Bounty Order</td><td>0.1%</td></tr>
          <tr><td>Immortal</td><td>0.01%</td></tr>
          <tr><td>Lost Goddess Statue</td><td>0.01%</td></tr>
        </tbody>
      </table>
    </>
  );
}
