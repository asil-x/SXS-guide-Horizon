import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Daily Dungeon เป็นหนึ่งในกิจกรรมที่สำคัญที่สุดที่ต้องทำทุกวัน เพราะเป็น <strong>แหล่งอุปกรณ์และชิ้นส่วนอุปกรณ์หลัก</strong> สำหรับพัฒนาบัญชี</p>
      <p>แต่ละวันมี 2 รอบฟรี รอบเพิ่มใช้ <Tip>Dawnium</Tip> (วันละ 2 รอบ ราคา 100 และ 150) และ <strong>ควรซื้อให้ครบทุกวัน</strong> ถ้าอยากให้อุปกรณ์ตามทันความคืบหน้า</p>
      <p><Img src="guides/daily-dungeon-sxs.webp" alt="sword x staff daily dungeon" /></p>

      <hr />

      <h2 id="rewards">ของรางวัล</h2>
      <p>ของรางวัลหลักจาก Daily Dungeon คือ <strong>อุปกรณ์ ชิ้นส่วนอุปกรณ์ และ <Tip>Raw Ore</Tip></strong> ชิ้นส่วน 100 ชิ้นสร้างอุปกรณ์ที่เลือกได้หนึ่งชิ้น ซึ่งเอาไปขายในโรงประมูลเพื่อแลก <Tip>Dawnium</Tip> ได้ด้วย</p>
      <Alert title="เรื่องชิ้นส่วนอุปกรณ์">
        <p>เมื่อเปิดดันเจี้ยนใหม่ ชิ้นส่วนของดันเจี้ยนเก่าจะทำได้แค่แยกชิ้น ขายไม่ได้แล้ว <strong>อย่ากักตุนชิ้นส่วนเก่าไว้เยอะ</strong></p>
      </Alert>
      <p>ประเภทช่องในดันเจี้ยนและของรางวัล:</p>
      <table className="data-table">
        <tbody>
          <tr><td>หีบทอง</td><td>อุปกรณ์ Epic หรือ Legendary + <Tip>Raw Ore</Tip></td></tr>
          <tr><td>หีบเงิน</td><td>อุปกรณ์ Rare + <Tip>Raw Ore</Tip></td></tr>
          <tr><td>ช่องว่าง</td><td><Tip>Raw Ore</Tip> (แค่นั้น)</td></tr>
        </tbody>
      </table>
      <p>ระดับคุณภาพอุปกรณ์จะปลดล็อกตามความคืบหน้าในเกม:</p>
      <table className="data-table">
        <tbody>
          <tr><td>Legendary ลงไป</td><td>ได้ตั้งแต่ต้นเกม</td></tr>
          <tr><td>Mythic</td><td>Mecha Summit</td></tr>
          <tr><td>Divine</td><td>Aquorigin Shrine Hard</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="ranking">การจัดอันดับ</h2>
      <p>แรงก์ของคุณ (S, A, B…) ขึ้นอยู่กับ <strong>ว่าไปได้ไกลแค่ไหนในดันเจี้ยน</strong> เท่านั้น ไม่ขึ้นกับช่องที่เลือกระหว่างทาง</p>
      <Alert type="red" title="ล้มบอส = แรงก์ S">
        <p>ถ้าล้มบอสได้ คุณจะได้แรงก์ S แน่นอนไม่ว่าจะเดินเส้นทางไหน <strong>เล็งตรงนั้นไว้เสมอ</strong></p>
      </Alert>
      <p>แรงก์สุดท้ายส่งผลโดยตรงต่อคุณภาพของหีบสุดท้าย ซึ่งกำหนด:</p>
      <ul>
        <li>จำนวนชิ้นส่วนที่ได้</li>
        <li>โอกาสดรอปอุปกรณ์แบบชิ้นเต็ม</li>
      </ul>
      <p>ดังนั้นการวางเส้นทางให้ไปถึงบอสสำคัญกว่าการเลือกช่องที่ “ปลอดภัยที่สุด” หรือ “ยากที่สุด”</p>

      <hr />

      <h2 id="boosting-drops">เพิ่มของรางวัล</h2>
      <p>มีสองสเตตัสที่กำหนดว่าคุณได้ของเพิ่มจากดันเจี้ยนมากแค่ไหน ชื่อฟังดูคล้ายกันแต่ส่งผลกับ <strong>ของรางวัลคนละส่วน</strong>:</p>
      <ul>
        <li><strong>2× Rating Reward Rate</strong>: โอกาสที่ <strong>หีบจัดอันดับจะจ่ายสองครั้ง</strong> หน้ารับรางวัลจะระบุหีบที่สองว่าเป็นโบนัส</li>
        <li><strong>Gear Drop Ascension Rate</strong> (บางบรรทัดเขียนว่า Promotion Rate): เพิ่มโอกาสที่ <strong>อุปกรณ์ที่ดรอปจากห้อง</strong> จะถูกอัปขึ้นหนึ่งระดับคุณภาพ</li>
      </ul>

      <h3 id="one-run">หนึ่งรอบดันเจี้ยนให้อะไรบ้าง</h3>
      <p>ทุกห้อง Elite ห้อง Boss และบอสสุดท้ายดรอป <strong>อุปกรณ์ 1 ชิ้น</strong> ตอนรับแต่ละชิ้นจะมีโอกาสหนึ่งครั้งที่จะอัปขึ้นระดับบน แม้ไม่มี Ascension เลยก็ตาม:</p>
      <table className="data-table">
        <thead><tr><th>อัประดับ</th><th className="num">อัตราพื้นฐานต่อห้อง</th></tr></thead>
        <tbody>
          <tr><td>Rare → Epic</td><td className="num">30% (Verdantglade: 10%)</td></tr>
          <tr><td>Epic → Legendary</td><td className="num">20% (Verdantglade: 5%)</td></tr>
          <tr><td>Legendary → Mythic</td><td className="num">0.5%</td></tr>
        </tbody>
      </table>
      <p>ท้ายรอบจะได้ <strong>หีบจัดอันดับ 1 หีบ</strong> ตามแรงก์ของคุณ ตัวอย่าง Gate of Genesis ระดับ Hard แรงก์ S:</p>
      <table className="data-table">
        <thead><tr><th>ของรางวัล</th><th>ได้รับ</th></tr></thead>
        <tbody>
          <tr><td>ห้อง Elite</td><td>อุปกรณ์ Rare 1 ชิ้น มีโอกาส 30% ขึ้นเป็น Epic</td></tr>
          <tr><td>บอสและบอสสุดท้าย (2 ห้อง)</td><td>อุปกรณ์ Legendary 1 ชิ้น มีโอกาส 0.5% ขึ้นเป็น Mythic</td></tr>
          <tr><td>หีบจัดอันดับ</td><td>96.1%: ชิ้นส่วน Mythic 10 ชิ้น · 2.8%: อุปกรณ์ Mythic 1 ชิ้น · 1.1%: อุปกรณ์ Divine 1 ชิ้น</td></tr>
        </tbody>
      </table>
      <p>เมื่อแปลงค่า (100 ชิ้นส่วน = อุปกรณ์ Mythic ที่เลือกได้ 1 ชิ้น) หีบจะให้ประมาณ <strong>0.135 ชิ้นระดับ Mythic ขึ้นไปต่อรอบ</strong> ขณะที่โอกาสอัประดับสองครั้งในห้องบอสมีค่าแค่ราว 0.01 <strong>อุปกรณ์ endgame มาจากหีบ ไม่ใช่จากห้อง</strong></p>

      <h3 id="which-stat">ควรเน้นสเตตัสไหน</h3>
      <p>จำนวนอุปกรณ์ระดับ Mythic ขึ้นไปที่ได้เพิ่มหลังลง Gate of Genesis Hard แรงก์ S 100 รอบ:</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>แหล่งที่มา</th><th className="num">2× Rating</th><th className="num">Ascension</th><th className="num">2× ดีกว่า</th></tr></thead>
          <tbody>
            <tr><td>บรรทัดทุกดันเจี้ยน 1 บรรทัด (2× +5%, Ascension +10%)</td><td className="num">+0.68</td><td className="num">+0.1</td><td className="num">6.8 เท่า</td></tr>
            <tr><td>บรรทัดตามอาณาจักร 1 บรรทัด (2× +10%, Ascension +20%)</td><td className="num">+1.35</td><td className="num">+0.2</td><td className="num">6.8 เท่า</td></tr>
            <tr><td>Astral Pact สูงสุด (2× +50%, Ascension +75%)</td><td className="num">+6.75</td><td className="num">+0.75</td><td className="num">9 เท่า</td></tr>
          </tbody>
        </table>
      </div>
      <Alert type="red" title="สรุป: 2× Rating Reward ชนะเสมอ">
        <p>บรรทัด 2× มีเปอร์เซ็นต์แค่ครึ่งหนึ่งของบรรทัด Ascension แต่ได้ของกลับมา <strong>มากกว่าประมาณ 7 เท่า</strong> เพราะมันเพิ่มหีบทั้งหีบเป็นสองเท่า ไม่ใช่แค่โอกาส 0.5% สองครั้ง <strong>ตั้งแต่ระดับ Nightmare ขึ้นไป ทิ้ง Ascension ไปได้เลย</strong>: หีบตรงนั้นให้อุปกรณ์ Divine ส่วน Ascension แค่อัปของจากห้องเป็น Mythic</p>
      </Alert>
      <p className="muted">หมายเหตุ: การสุ่มทั้งสองเกิดบนเซิร์ฟเวอร์ การคำนวณข้างบนถือว่า Ascension <em>คูณ</em> กับอัตราพื้นฐาน (อัตรา = พื้นฐาน × (1 + Ascension)) ซึ่งตรงกับที่ผู้เล่นสังเกตได้ แต่เกมยังไม่ได้ยืนยัน</p>

      <h3 id="gear-stats">บรรทัดสเตตัสบนอุปกรณ์</h3>
      <p>นี่คือบรรทัดพิเศษที่มีบนอุปกรณ์ระดับ Epic ขึ้นไป แต่ละดันเจี้ยนใช้ <strong>บรรทัดทั่วไป</strong> บวกกับ <strong>บรรทัดที่มีชื่ออาณาจักรของมัน</strong> บรรทัดของอาณาจักรอื่นไม่มีผล</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>บรรทัด</th><th className="num">2× Rating Reward</th><th className="num">Gear Drop Ascension</th></tr></thead>
          <tbody>
            <tr><td>Dungeon (ทุกดันเจี้ยน)</td><td className="num">+5%</td><td className="num">+10%</td></tr>
            <tr><td>Verdantglade, Cinder Ridge, Aqualis</td><td className="num">+5%</td><td className="num">+10%</td></tr>
            <tr><td>Loong Haven, Aethyris</td><td className="num">+5% หรือ +10%</td><td className="num">+10% หรือ +20%</td></tr>
            <tr><td>Harpadia, Ignis</td><td className="num">+10%</td><td className="num">+20%</td></tr>
          </tbody>
        </table>
      </div>
      <p>ลำดับที่ควรทำ:</p>
      <ol>
        <li>ทำ <strong>ชุดฟาร์มแยกต่างหาก</strong> ใส่บรรทัด 2× ของอาณาจักรที่กำลังฟาร์มลงในทุกชิ้นที่ออกบรรทัดนั้นได้</li>
        <li>จากนั้นเป็นบรรทัด 2× ทั่วไป (+5%)</li>
        <li>อัปดาว relic <strong>Lucky Statue</strong> ถ้ามี</li>
        <li>บรรทัด Ascension เก็บไว้เฉพาะบนชิ้นที่ไม่มีบรรทัดอื่นที่ดีกว่า และ <strong>ห้ามใส่บนอุปกรณ์ต่อสู้เด็ดขาด</strong></li>
        <li>ตีให้ได้แรงก์ S เสมอ: หีบยิ่งใหญ่ 2× ยิ่งคุ้ม</li>
      </ol>
      <p>ยังไม่ต้องสนใจชุดฟาร์มจนกว่าคุณจะแข็งแกร่งพอที่จะใส่มันแล้วยังได้แรงก์ S</p>

      <hr />

      <h3 id="lucky-statue-relic">Relic Lucky Statue</h3>
      <p><Img src="guides/lucky-statue.webp" alt="sword x staff lucky-statue" /></p>
      <p>relic นี้ได้จากอีเวนต์ Grand Treasure Hunt ให้ <strong>+10% 2× Rating Reward Rate ที่ 0 ดาว เพิ่มขึ้นจนถึง +40% ที่ 6 ดาว</strong> และไม่มีเวอร์ชัน Ascension</p>
      <p>อย่าลืมใส่ก่อนเริ่มลงรอบประจำวัน ตีเสร็จแล้วถอดออกได้</p>

      <hr />

      <h3 id="seasonal-upgrades">Astral Pact (อัปเกรดตามซีซัน)</h3>
      <p><Img src="guides/season-upgrade.webp" alt="sword x staff astral pact" /></p>
      <p>Astral Pact ปลดล็อกด้วย Primostar และมีผลกับ <strong>ทุกดันเจี้ยน</strong> บวกซ้อนกับสเตตัสบนอุปกรณ์:</p>
      <ul>
        <li><strong>2× Rating Reward</strong>: +2% ที่ขั้น 6 และทุก ๆ 8 ขั้น สูงสุด <strong>+50%</strong> ที่ขั้น 198</li>
        <li><strong>Gear Drop Ascension</strong>: +3% ที่ขั้น 2 และทุก ๆ 8 ขั้น สูงสุด <strong>+75%</strong> ที่ขั้น 194</li>
      </ul>
      <p>ดูเพิ่มในบทความ Season, Primostar &amp; Astral Pact</p>

      <hr />

      <h2 id="season-end">ท้ายซีซัน: เก็บรอบไว้</h2>
      <p>คุณเก็บรอบรับรางวัลได้สูงสุด <strong>4 รอบ</strong> หนึ่งวันก่อนจบซีซัน ให้หยุดรับรางวัลดันเจี้ยน รีเซ็ตรายวันจะเพิ่มให้อีก 2 รอบ คุณจึงเข้าซีซันใหม่พร้อม <strong>6 รอบ</strong> ตรงกับช่วงที่อุปกรณ์ซีซันใหม่มีค่าที่สุด รางวัลที่รับคืนผ่าน Reward Retrieval ก็ได้ผลจากทั้งสองสเตตัสข้างบนด้วย</p>

      <p className="source">ข้อมูลอัตราดรอปและบรรทัดสเตตัสดันเจี้ยนรวบรวมจาก Purrwikimania</p>
    </>
  );
}
