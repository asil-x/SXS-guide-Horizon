import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

const PACT = [
  ['1', 'ATK', '+1%'],
  ['2', 'Dungeon: Gear Drop Ascension Rate', '+3%'],
  ['3', 'DEF', '+1%'],
  ['4', 'Gem Drop', '+5%'],
  ['5', 'HP', '+1%'],
  ['6', 'Dungeon: 2× Rating Reward Rate', '+2%'],
  ['7', 'SPD', '+1%'],
  ['8', 'EXP Gain', '+2%'],
];

const GOALS = [
  ['Season 1 · Witching Hours', 'ขั้น 5 → 480', [['128', 'F2P และสายเติมน้อย'], ['152', 'เติมน้อยถึงปานกลาง'], ['176', 'เติมปานกลาง'], ['200', 'เติมปานกลางถึงหนัก'], ['230', 'เติมหนัก']]],
  ['Season 2 · Crossed Paths', 'ขั้น 505 → 1,880', [['800', 'F2P และสายเติมน้อย'], ['920', 'เติมน้อยถึงปานกลาง'], ['1,060', 'เติมน้อยและปานกลาง: หยุดตรงนี้'], ['1,200', 'เติมหนัก'], ['1,280', 'เติมหนัก: หยุดตรงนี้']]],
  ['Season 3 · Finale of Chaos', 'ขั้น 1,940 → 4,680', [['2,880', 'F2P และสายเติมน้อย'], ['3,160', 'F2P: หยุดตรงนี้'], ['3,300', 'เติมน้อยถึงปานกลาง'], ['3,590', 'เติมน้อย: หยุดตรงนี้'], ['3,740', 'เติมปานกลางถึงหนัก'], ['3,890', 'เติมปานกลาง: หยุดตรงนี้'], ['4,040', 'เติมหนักมาก']]],
  ['Season 4 · Bizarre Spectacle', 'ขั้น 4,770 → 11,800', [['7,080', 'F2P'], ['7,560', 'เติมน้อย'], ['8,040', 'เติมปานกลาง'], ['9,080', 'เติมปานกลางถึงหนัก'], ['10,200', 'เติมหนัก']]],
  ['Season 5 · Frostfire Anthem', 'ขั้น 12,040 → 24,520', [['15,480', 'F2P และสายเติมน้อย'], ['16,280', 'สายเติมปานกลางเริ่มที่นี่'], ['17,080', 'เติมปานกลาง'], ['17,960', 'เติมปานกลาง คลาสที่อ่อนกว่า'], ['18,840', 'เติมปานกลางถึงหนัก'], ['19,800', 'สายเติมหนักเริ่มที่นี่'], ['20,760', 'เติมหนัก'], ['22,840', 'ท็อปเซิร์ฟเวอร์']]],
];

const SCORE = [
  ['Season 1', '100', '38', '13', '14', '57', '100', '10'],
  ['Season 2', '100', '18', '7', '8', '33', '27', '45'],
  ['Season 3', '100', '14', '5', '6', '26', '13', '65'],
  ['Season 4', '100', '17', '5', '11', '28', '7', '120'],
  ['Season 5', '100', '18', '6', '12', '30', '4', '150'],
  ['Season 6', '100', '13', '4', '5', '18', '3', '200'],
];

const SHOPS = [
  ['Verdantglade', 'S1', 'Abundance Leaf', '128,800'],
  ['Cinder Ridge', 'S1', 'Alloy Gear', '137,800'],
  ['Aqualis', 'S1', 'Shimmer Scale', '110,200'],
  ['Loong Haven', 'S2', 'Blade Coin', '110,800'],
  ['Aethyris', 'S3', 'Aethyrine Crest', '116,800'],
  ['Harpadia', 'S4', 'Points', '112,800'],
  ['Ignis', 'S5', 'Frostflame Coin', '112,800'],
  ['Aeperis', 'S6', 'ยังไม่มีชื่อภาษาอังกฤษ', '46,800 (ข้อมูลยังไม่ครบ)'],
];

export default function Page() {
  return (
    <>
      <p>แต่ละซีซันยาวประมาณ 3 เดือน เมื่อจบซีซัน <strong>Season Level จะถูกรีเซ็ต</strong> แต่ความพยายามส่วนใหญ่ของคุณยังอยู่ และที่สำคัญที่สุดคือถูกแปลงเป็น <strong>Primostar</strong> แต้มที่ใช้ปลดล็อกโบนัสสเตตัส <strong>ถาวร</strong> ใน Astral Pact</p>
      <p>บทความนี้อธิบายว่า Primostar มาจากไหน Astral Pact ให้อะไร ควรตั้งเป้าเท่าไร ควรซื้ออะไรใน Kingdom Shop และต้องทำอะไรก่อนและหลังจบซีซัน</p>
      <p><Img src="guides/season-upgrade.webp" alt="sword x staff astral pact" /></p>

      <hr />

      <h2 id="keep-reset">อะไรเก็บไว้ได้ อะไรหายไป</h2>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>เก็บไว้ได้</th><th>ถูกรีเซ็ตหรือหายไป</th></tr></thead>
          <tbody>
            <tr><td>Relic, Fantomon, สกิล, companion และจำนวนดาวของพวกมัน</td><td>Season Level: เลเวลกลับไปที่ cap ของซีซัน relic กลับไปที่ขั้นต่ำ (+22 ใน Season 5, +25 ใน Season 6) ส่วนที่เกินถูกแปลงเป็น Primostar</td></tr>
            <tr><td>Primostar และสเตตัส Astral Pact ทั้งหมด</td><td>เควสต์ Season Trial และตราซีซันที่ยังทำไม่เสร็จ</td></tr>
            <tr><td>โบนัส Gear Rating คิดจากชุดที่คุณ <strong>ใส่อยู่</strong> ตอนจบซีซัน</td><td>Battle Pass ของซีซัน</td></tr>
            <tr><td>สเตตัสรองของอุปกรณ์ที่จ่าย Divinecraft Stone เพื่อนำไปด้วย</td><td>สถิติดันเจี้ยนและ Fantasia Ascent</td></tr>
            <tr><td>พลังงาน Grand Treasure Hunt</td><td>EXP และ Stamina ที่ค้างอยู่ใน Reward Retrieval</td></tr>
            <tr><td>EXP ในเตียง (ส่วนที่เกินลิมิตถูกแปลงเป็น Primostar)</td><td>การซื้อขายชิ้นส่วนอุปกรณ์ซีซันเก่าที่ Trading House</td></tr>
            <tr><td></td><td>แต้ม Guild Clash (กิลด์ย้ายไป League ใหม่) Gem ซีซันเก่า (ควรรีไซเคิลเป็น <Tip>Rolla</Tip>)</td></tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="primostar">Primostar มาจากไหน</h2>
      <p>เมื่อจบซีซัน เกมจะรวมความคืบหน้าทั้งหมดที่ <strong>เกิน cap</strong> ในซีซันนั้น (Season Level) เป็นคะแนนความคืบหน้า หารด้วยตัวหารแล้วปัดลง จากนั้นบวกจำนวนคงที่เข้าไป:</p>
      <ul>
        <li><strong>Season Character Level</strong> ที่เพิ่มขึ้นทุกเลเวล</li>
        <li>เลเวล <strong>ตีบวกอุปกรณ์</strong> ของซีซันทุกเลเวล (รวม 5 ชิ้น)</li>
        <li>เลเวล <strong>สกิล</strong> ของซีซันทุกเลเวล (รวม 8 ช่องสกิล)</li>
        <li>เลเวล <strong>Fantomon</strong> ของซีซันทุกเลเวล</li>
        <li>เลเวล <strong>relic</strong> ของซีซันทุกเลเวล</li>
      </ul>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>ซีซัน</th><th className="num">ตัวละคร</th><th className="num">อุปกรณ์</th><th className="num">สกิล</th><th className="num">Fantomon</th><th className="num">Relic</th><th className="num">คะแนน / 1 Primostar</th><th className="num">คงที่</th></tr></thead>
          <tbody>{SCORE.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} className={i ? 'num' : ''}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <p className="muted">คอลัมน์ตัวละครถึง Relic คือคะแนนที่ได้ต่อหนึ่งเลเวลที่เพิ่มขึ้น</p>
      <p>สองข้อสรุปจากตาราง:</p>
      <ul>
        <li><strong>Relic ให้คะแนนมากที่สุด</strong> ต่อเลเวลในทุกซีซัน รองลงมาคืออุปกรณ์ สกิลให้น้อยที่สุด</li>
        <li>ตัวหารลดลงอย่างมากในแต่ละซีซัน (100 → 3) ซีซันหลัง ๆ จึงได้ Primostar มากกว่าซีซันก่อนมาก นี่คือเหตุผลที่ขั้นของ Astral Pact เพิ่มเร็วมากเช่นกัน</li>
      </ul>
      <p>Season Level ซื้อได้เฉพาะที่ระดับสูงสุดของซีซัน (เช่น Ethereal III ใน Season 6) และปลดล็อกทีละขั้นตาม Season Character Level ของคุณ</p>

      <hr />

      <h2 id="astral-pact">Astral Pact</h2>
      <p>Primostar คือ <strong>ยอดสะสมรวมทุกซีซัน</strong> ทุกครั้งที่ยอดรวมถึงขั้นใหม่ คุณจะปลดล็อกโบนัสสเตตัสถาวรหนึ่งอย่าง ขั้นต่าง ๆ วนเป็นรอบละ 8:</p>
      <table className="data-table">
        <thead><tr><th>ลำดับในรอบ</th><th>สเตตัส</th><th className="num">ต่อขั้น</th></tr></thead>
        <tbody>{PACT.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td className="num">{r[2]}</td></tr>)}</tbody>
      </table>
      <p>ใน Season 5 มีขั้น <strong>+5% ผลผลิต</strong> เพิ่มเติมสำหรับ Gold Mine, Ironstone Mine, Sandstone Mine และ Monster Cave แทนตำแหน่งของ Gem Drop</p>
      <p>สูงสุดในตอนนี้: <strong>+50% 2× Rating Reward Rate</strong> และ <strong>+75% Gear Drop Ascension Rate</strong> สำหรับทุกดันเจี้ยน ดูบทความ Daily Dungeon ว่าอันไหนสำคัญกว่า</p>

      <h3 id="goals">ควรตั้งเป้า Primostar เท่าไร?</h3>
      <p>ระดับที่ผู้เล่นเก่ามักเล็งไว้ตอนท้ายแต่ละซีซัน แบ่งตามระดับการเติมเงิน (ยอดสะสมรวม):</p>
      <Tabs>
        {GOALS.map(([name, range, rows]) => (
          <Tab label={name.split(' · ')[0]} key={name}>
            <p><strong>{name}</strong> <span className="muted">({range})</span></p>
            <table className="data-table">
              <thead><tr><th className="num">Primostar รวม</th><th>เหมาะกับ</th></tr></thead>
              <tbody>{rows.map(([n, who]) => <tr key={n}><td className="num">{n}</td><td>{who}</td></tr>)}</tbody>
            </table>
          </Tab>
        ))}
      </Tabs>
      <Alert title="“หยุดตรงนี้” หมายความว่าอะไร?">
        <p>เลยขั้นนั้นไป Primostar ทุกแต้มที่เพิ่มต้องใช้ทรัพยากรมหาศาลแต่ได้สเตตัสแค่ราว 1% ถ้าคุณเติมน้อยหรือปานกลาง หยุดตรงขั้นนั้นแล้วเอาทรัพยากรไปลงกับสิ่งที่เก็บไว้ได้ (relic, Fantomon) จะคุ้มกว่า</p>
      </Alert>

      <hr />

      <h2 id="kingdom-shop">Kingdom Shop</h2>
      <p>แต่ละอาณาจักรมีร้านของตัวเอง จ่ายด้วยเงินของอาณาจักรนั้น ร้านมี <strong>4 ระดับ</strong>: ระดับ 1 เปิดเมื่อไปถึงอาณาจักร ระดับ 2, 3, 4 เปิดเมื่อคุณ <strong>ใช้เงินของร้านนั้นรวม 3,500, 8,000 และ 13,000</strong> สินค้านับตามบัญชีและ <strong>ไม่รีเฟรชเอง</strong></p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>อาณาจักร</th><th>ซีซัน</th><th>สกุลเงิน</th><th className="num">ซื้อของจำกัดจำนวนจนหมด</th></tr></thead>
          <tbody>{SHOPS.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="num">{r[3]}</td></tr>)}</tbody>
        </table>
      </div>
      <h3 id="shop-priority">ควรซื้ออะไรก่อน</h3>
      <ol>
        <li><strong>ช่องลดราคา 90% และ 70%</strong>: <Tip>Stellatie</Tip>, <Tip>Refined Ore</Tip>, Covenite, <Tip>Mythic Auroral Badge</Tip> ช่องลด 90% ใช้เงินแค่ 10% ของราคาไอเทมเดียวกันในช่องข้าง ๆ ถูกที่สุดในร้าน</li>
        <li><strong>Covenite</strong> (ระดับ 3 และ 4): Goddess Prayer ให้สกิลของ <strong>คลาสปัจจุบันของคุณ</strong> คุ้มกว่า Stellatie</li>
        <li><strong>Auroral Badge</strong> ทุกแบบ (ลดราคาทั้งหมด) ไว้สุ่ม relic</li>
        <li><Tip>Lucky Ticket</Tip> และ <Tip>Gateway Key</Tip>: ระดับละ 1 ชิ้นเท่านั้น</li>
        <li>กุญแจแผนที่ของอาณาจักร (Withering Potion, Magic Drill…) ถ้ายังมีสิ่งกีดขวางที่ยังไม่ได้ทำลาย</li>
        <li>Visage (ของตกแต่ง) ตามชอบ</li>
        <li><strong>ของขวัญ companion ไม่จำกัด</strong>: เอาไว้ระบายเงินที่เหลือหลังซื้อของจำกัดจำนวนหมดแล้ว</li>
      </ol>
      <p>ซื้อของลดราคาก่อนยังช่วยให้ปลดล็อกระดับร้านเร็วขึ้น เพราะเงินที่คุณ <em>จ่ายจริง</em> ถูกนับเป็นความคืบหน้าในการปลดล็อกระดับ</p>

      <h3 id="season-shop">Season Shop</h3>
      <p>Season Shop ใช้ <strong>Fatum Sigil</strong> และ <strong>ขายแค่ของตกแต่ง</strong> (Skill Chroma, Visage อาวุธ, ลุครูปปั้นเทพธิดา…) ไม่ส่งผลต่อพลัง ซื้ออะไรก็ได้ที่ชอบ Gameplay Rating ระดับ SSS ตอนจบซีซันให้ Fatum Sigil 1,200</p>

      <hr />

      <h2 id="timeline">ไทม์ไลน์ของหนึ่งซีซัน</h2>
      <table className="data-table">
        <thead><tr><th>วันที่</th><th>เหตุการณ์</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>อาณาจักรใหม่และเรดแรกเปิด cap เลเวลสูงขึ้นและ tier คลาสใหม่</td></tr>
          <tr><td>14</td><td>เรดที่สอง <strong>Season Level เริ่มนับ</strong></td></tr>
          <tr><td>15</td><td>แผนที่ซีซันใหม่เปิด</td></tr>
          <tr><td>28, 42, 56, 70</td><td>เรดที่สามถึงที่หก</td></tr>
          <tr><td>31</td><td>ตู้สุ่ม relic ตู้ที่สอง</td></tr>
          <tr><td>61</td><td>ตู้สุ่ม relic ตู้ที่สาม</td></tr>
          <tr><td>84</td><td>เรดท้ายซีซัน มีระดับ Abyss</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="season-end">เช็กลิสต์ท้ายซีซัน</h2>
      <h3 id="last-2-weeks">2 สัปดาห์สุดท้าย</h3>
      <ul>
        <li><strong>เลือกเป้า Primostar</strong> จากตารางข้างบนแล้ววางแผนให้ถึง Astral Pact คือสิ่งเดียวของซีซันที่คุณเก็บไว้ได้ตลอดไป</li>
        <li><strong>หยุดใช้ เริ่มเก็บ</strong> อุปกรณ์ Material Realm, Speed-Up และ Temporal Crystal ซีซันหน้าของพวกนี้มีค่ามากกว่า (รูปปั้นเทพธิดาใหม่ แรงก์สูงขึ้น)</li>
        <li>Stamina ฟื้นเองได้ถึง <strong>300</strong> เท่านั้น (เก็บจากรางวัลได้สูงสุด 1,200) ปล่อยให้เต็ม 300 ก่อนจบซีซัน แต่ใช้ส่วนที่กำลังจะล้น</li>
        <li><strong>ดัน Gameplay Rating</strong>: แรงก์ดันเจี้ยนรายวันที่ดีที่สุด ชั้น Fantasia Ascent แรงก์ Arena, Nexus และการสำรวจแผนที่ล้วนถูกนับ SSS ต้องใช้ <strong>27,200</strong> แต้ม ได้ Stellatie 80, Rare Auroral Badge 800, Bond Trinket 80 และ Fatum Sigil 1,200</li>
        <li>สำรวจ <strong>แผนที่ซีซัน 100%</strong>: ได้สูงสุด 3,000 แต้ม Gameplay บวกโบนัสที่ลดลงทุกวันที่ช้า</li>
        <li>F2P: ใช้ <Tip>Dawnium</Tip> กับ <strong>รอบดันเจี้ยนก่อน แล้วค่อยบริจาค Guild</strong> ที่เหลือเก็บไว้ซีซันใหม่</li>
        <li>สายเติม: ใช้กับสิ่งที่ <strong>เก็บข้ามซีซันได้</strong> (relic แล้วค่อย Fantomon แล้วค่อยสกิล) แพ็ก Season Level ที่ซื้อช่วงท้ายซีซันคุ้มน้อยที่สุด</li>
        <li><strong>อย่าซื้อ Battle Pass หรือ Monthly Pass</strong> ในวันท้าย ๆ: ซื้อตอนต้นซีซันเท่านั้นถึงจะคุ้มเต็มที่</li>
        <li>ทำ <strong>Season Trial</strong> และตราซีซันให้เสร็จ</li>
        <li>เลือกอุปกรณ์ระดับ Mythic ขึ้นไปที่อยากเก็บสเตตัสรองไว้ แล้วเก็บ <strong>Divinecraft Stone</strong>: 300 สำหรับ 1 บรรทัด 1,200 สำหรับ 2 บรรทัด 3,200 สำหรับ 3 บรรทัด 8,000 สำหรับ 4 บรรทัด</li>
      </ul>
      <h3 id="last-3-days">3 วันสุดท้าย</h3>
      <ul>
        <li><strong>ใส่ชุดซีซันที่ดีที่สุดแล้วอย่าถอด</strong> Gear Rating (D ถึง SSS) คิดจากชุดที่ใส่อยู่ตอนจบซีซัน ให้สูงสุด <strong>+5% HP, ATK, DEF, SPD</strong> และ <strong>+2% DMG RES, DMG Boost</strong></li>
        <li><strong>ขายชิ้นส่วนอุปกรณ์</strong> ที่ Trading House: จบซีซันแล้วจะลงขายไม่ได้อีก</li>
        <li>รับ <strong>Reward Retrieval</strong> (Akane) และเลเวล Battle Pass ที่ทำได้ให้หมด</li>
        <li>relic หรือ Fantomon ที่ใกล้ขึ้นดาวก็ทำให้เสร็จ: ดาวถูกเก็บไว้</li>
        <li>ใช้เงินอีเวนต์ของอีเวนต์ที่จบพร้อมซีซันให้หมด</li>
      </ul>
      <h3 id="last-36h">36 ชั่วโมงสุดท้าย</h3>
      <ul>
        <li><strong>หยุดรับ EXP จากเตียง</strong> และปิด Quick Claim ในซีซันใหม่ หลังจุดรูปปั้นใหม่ EXP นี้จะมีค่ามากกว่า ส่วนที่เกินลิมิตไม่หายแต่ถูกแปลงเป็น Primostar</li>
        <li><strong>ก่อนหนึ่งวัน</strong> หยุดรับรางวัลดันเจี้ยนและเก็บไว้ <strong>4 รอบ</strong> (สูงสุด) รีเซ็ตรายวันเพิ่มให้อีก 2 คุณจึงเข้าซีซันใหม่พร้อม <strong>6 รอบ</strong></li>
        <li>เก็บ Speed-Up และ Temporal Crystal ไว้ทั้งหมด พลังงาน Grand Treasure Hunt เก็บข้ามได้ ไม่ต้องรีบใช้</li>
      </ul>
      <h3 id="launch-day">วันแรกของซีซันใหม่ (ทำตามลำดับ)</h3>
      <ol>
        <li>รับ <strong>รางวัลซีซัน</strong>: Primostar รางวัลจัดอันดับ Arena, Guild Clash</li>
        <li><strong>ใช้ Primostar ทั้งหมด</strong> กับ Astral Pact</li>
        <li>จุดรูปปั้นใหม่ รับ EXP เตียง แล้วดันเลเวลให้สุด <strong>ก่อน</strong> ใช้ Speed-Up</li>
        <li>ตอนนี้ค่อยซื้อ Monthly Pass และ Battle Pass ใหม่</li>
        <li>สุ่ม relic ภายในวันนั้น</li>
        <li>ใช้ Speed-Up เพื่อแตะขั้นปลดล็อกเท่านั้น (tier คลาสใหม่, Fantomon Adult)</li>
        <li><strong>รีไซเคิล Gem ซีซันเก่า</strong> เป็น Rolla และย้ายสเตตัสรองที่เก็บไว้ไปที่อุปกรณ์ใหม่</li>
        <li>ใช้ 6 รอบดันเจี้ยนที่เก็บไว้</li>
        <li>เก็บ Auroral Badge ไว้บ้าง: ตู้สุ่ม relic ตู้ที่สองเปิดราววันที่ 31 ตู้ที่สามราววันที่ 61</li>
      </ol>

      <p className="source">ข้อมูล Primostar, Astral Pact, Kingdom Shop และเช็กลิสต์ท้ายซีซันรวบรวมจาก Purrwikimania และ Sword x Staff Compass</p>
    </>
  );
}
