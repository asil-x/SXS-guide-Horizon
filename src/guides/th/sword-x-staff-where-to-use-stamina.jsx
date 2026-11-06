import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p><Img src="guides/stamina-screen.webp" alt="sword x staff stamina screen" /></p>

      <h2 id="where-to-spend-stamina">ควรใช้ Stamina ไปกับอะไร</h2>
      <p><Tip>Stamina</Tip> ใน Sword x Staff ใช้เก็บทรัพยากรบนแผนที่เท่านั้น ซึ่งสะดวกดี เพราะเท่ากับได้ทรัพยากรเพิ่มฟรี ๆ</p>
      <Alert type="blue" title="วิธีใช้เปลี่ยนไปตามซีซัน">
        <p>แต่ละซีซันจะเปลี่ยนวิธีใช้ <Tip>Stamina</Tip> ตามสิ่งที่คุณต้องการในตอนนั้น</p>
        <p>ใช้คู่มือนี้เป็นแนวทาง แล้วปรับให้เหมาะกับความต้องการของตัวเองเสมอ</p>
      </Alert>
      <p>ส่วนตัวคิดว่าช่วงต้นเกม วิธีใช้ stamina ที่ดีที่สุดคือหา <Tip>Rolla</Tip> เพิ่ม ของนี้ใช้ <em>แทบทุกที่</em> ในเกม และช่วงต้นเกมมักเป็นสิ่งที่ทำให้ผู้เล่นส่วนใหญ่ติดขัด</p>
      <p>คุณใช้ <Tip>Rolla</Tip> ซื้อของในร้านค้ารายวันเพิ่มได้ และรีเฟรชร้านเพื่อเติมของใหม่ทั้งหมด ได้สูงสุด 10 ครั้งต่อวัน</p>
      <p><Img src="guides/where-to-spend-dawnium.webp" alt="sword x staff daily shop cart" /></p>
      <p><strong>สาย F2P ควรรีเฟรชอย่างน้อยวันละ 3 ครั้ง</strong> และซื้อทรัพยากรในร้านรายวันให้เกือบหมด (ถ้าได้ก็ซื้อให้หมด)</p>
      <p>ถ้าคุณสนใจอันดับประจำซีซัน ให้เน้น <Tip>Raw Ore</Tip> และ <Tip>Chrono Sand</Tip></p>

      <hr />

      <h2 id="resource-nodes">จุดทรัพยากร</h2>
      <p>ระหว่างฟาร์มทรัพยากร คุณจะเจอจุดใหญ่ที่ให้ทรัพยากรมากกว่าปกติ</p>
      <Tabs>
        <Tab label="จุดใหญ่">
          <p><Img src="guides/big-nodes.webp" alt="sword x staff resource big nodes" /></p>
          <p>แชร์ลงแชตให้ผู้เล่นคนอื่น (หรือกิลด์) มาฟาร์มด้วยกันได้ โดยมีลิมิตรายสัปดาห์</p>
        </Tab>
        <Tab label="จุดพิเศษ">
          <p><Img src="guides/special-nodes.webp" alt="sword x staff resource special nodes" /></p>
          <p>นอกจากทรัพยากรหลัก คุณยังฟาร์มจุดพิเศษเพื่อเก็บอัญมณีและวัตถุดิบทำอาหารได้ด้วย</p>
          <p>ยังไม่แน่ชัดว่าลิมิตต่อวันเท่าไร แต่เอาไปขายในโรงประมูลเพื่อแลก <Tip>Dawnium</Tip> ได้ กำไรดีทีเดียว</p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="setting-up-auto">ตั้งค่าออโต้</h2>
      <p>ครั้งแรกที่คุณกดฟาร์มจุดทรัพยากรเอง ให้กดปุ่มออโต้ที่โผล่ขึ้นมาเหนือกล่องแชต</p>
      <p><Img src="guides/auto-farm.webp" alt="sword x staff resource auto farm" /></p>
      <p>ปุ่มนี้ให้คุณเลือกว่าจะใช้ stamina กับทรัพยากรชนิดนั้นเท่าไร แล้วตัวละครจะเดินไปเก็บให้เอง</p>
    </>
  );
}
