import { Alert, Tip } from '../../components/guide';

const Y = () => <td style={{ textAlign: 'center', color: 'var(--green)' }}>✓</td>;
const N = () => <td style={{ textAlign: 'center' }} className="muted">–</td>;
const row = (slots) => ['Main', 'Helmet', 'Armor', 'Boots', 'Off-Hand'].map((s) => (slots.includes(s) ? <Y key={s} /> : <N key={s} />));

export default function Page() {
  return (
    <>
      <p>Gem ใช้ฝังลงในอุปกรณ์เพื่อเพิ่มสเตตัส มี <strong>Gem 8 แบบ</strong> แต่ละแบบมี <strong>15 ขั้น (T1 ถึง T15)</strong> ขั้นยิ่งสูงสเตตัสยิ่งมาก และค่าจริงของแต่ละขั้นยังเพิ่มตามเลเวลของคุณด้วย</p>
      <p>บทความนี้สรุปว่า Gem แต่ละแบบทำอะไร ใส่ช่องไหนได้ รวมขึ้นขั้นสูงอย่างไรให้ประหยัด และควรใช้ Gem อะไรกับแต่ละคลาส</p>

      <hr />

      <h2 id="types">Gem ทั้ง 8 แบบ</h2>
      <table className="data-table">
        <thead><tr><th>Gem</th><th>สเตตัส</th><th>เหมาะกับ</th></tr></thead>
        <tbody>
          <tr><td><Tip>T10 Obsidian</Tip></td><td>ATK + DMG Boost</td><td>ทุกคลาส Gem ดาเมจที่ดีที่สุด</td></tr>
          <tr><td><Tip>T10 Amethyst</Tip></td><td>SPD + Crit Rate</td><td>Duelist, Sorcerer, บิลด์คริ</td></tr>
          <tr><td><Tip>T10 Ruby</Tip></td><td>ATK</td><td>ใส่เติมช่องว่างสำหรับ DPS</td></tr>
          <tr><td><Tip>T10 Citrine</Tip></td><td>SPD</td><td>ใส่เติมช่องว่าง ทุกคลาสต้องการ SPD</td></tr>
          <tr><td><Tip>T10 Moonstone</Tip></td><td>DEF + DMG RES</td><td>ทุกคลาส Gem เอาตัวรอดที่ดีที่สุด</td></tr>
          <tr><td><Tip>T10 Sapphire</Tip></td><td>DEF</td><td>Knight สายแทงค์</td></tr>
          <tr><td><Tip>T10 Beryl</Tip></td><td>HP</td><td>Knight สายแทงค์, Sage สายฮีล</td></tr>
          <tr><td><Tip>T10 Amber</Tip></td><td>HP + Healing Boost</td><td>Sage สายฮีล</td></tr>
        </tbody>
      </table>
      <Alert type="blue" title="Gem 2 สเตตัสต้องมาก่อนเสมอ">
        <p>Obsidian, Amethyst, Moonstone และ Amber ให้ <strong>2 สเตตัสพร้อมกัน</strong> ในขั้นเดียวกันจึงแทบจะดีกว่า Gem สเตตัสเดียวเสมอ Gem สเตตัสเดียว (Ruby, Citrine, Sapphire, Beryl) ส่วนใหญ่ใช้เติมช่องที่ Gem 2 สเตตัสใส่ไม่ได้</p>
      </Alert>

      <hr />

      <h2 id="slots">Gem ไหนใส่ช่องไหนได้</h2>
      <p>Gem แต่ละแบบใส่ได้เฉพาะบางช่องอุปกรณ์ ยกเว้น <strong>Off-Hand ที่รับ Gem ได้ทุกแบบ</strong></p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Gem</th><th>Main</th><th>Helmet</th><th>Armor</th><th>Boots</th><th>Off-Hand</th></tr></thead>
          <tbody>
            <tr><td>Obsidian</td>{row(['Main', 'Off-Hand'])}</tr>
            <tr><td>Amethyst</td>{row(['Main', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Ruby</td>{row(['Main', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Citrine</td>{row(['Armor', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Moonstone</td>{row(['Helmet', 'Off-Hand'])}</tr>
            <tr><td>Sapphire</td>{row(['Armor', 'Helmet', 'Off-Hand'])}</tr>
            <tr><td>Beryl</td>{row(['Armor', 'Helmet', 'Off-Hand'])}</tr>
            <tr><td>Amber</td>{row(['Armor', 'Boots', 'Off-Hand'])}</tr>
          </tbody>
        </table>
      </div>
      <p>จากตารางข้างบนสรุปได้ว่า:</p>
      <ul>
        <li><strong>Obsidian ใส่ได้แค่ Main กับ Off-Hand</strong> และ <strong>Moonstone ใส่ได้แค่ Helmet กับ Off-Hand</strong> อย่าเปลืองช่อง Off-Hand ไปกับ Gem สเตตัสเดียวถ้ายังขาดสองแบบนี้อยู่</li>
        <li><strong>Armor</strong> ไม่รับ Gem สายโจมตีเลย: DPS มักใส่ Citrine (SPD) ตรงนี้</li>
        <li><strong>Boots</strong> เป็นที่ที่ดีที่สุดสำหรับ Amethyst ถ้าใส่ Obsidian ที่ Main ไปแล้ว</li>
      </ul>

      <h3 id="layout">แนะนำการใส่ตามบทบาท</h3>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>ช่อง</th><th>DPS (Duelist, Sorcerer)</th><th>แทงค์ (Knight)</th><th>ฮีลเลอร์ (Sage)</th></tr></thead>
          <tbody>
            <tr><td>Main</td><td>Obsidian</td><td>Obsidian</td><td>Obsidian</td></tr>
            <tr><td>Helmet</td><td>Moonstone</td><td>Moonstone</td><td>Moonstone</td></tr>
            <tr><td>Armor</td><td>Citrine</td><td>Sapphire หรือ Beryl</td><td>Amber</td></tr>
            <tr><td>Boots</td><td>Amethyst</td><td>Citrine</td><td>Amber หรือ Citrine</td></tr>
            <tr><td>Off-Hand</td><td>Obsidian หรือ Amethyst</td><td>Moonstone</td><td>Amber</td></tr>
          </tbody>
        </table>
      </div>
      <p>Knight สาย glass cannon ให้ใส่แบบ DPS (Ruby, Amethyst) Sage สาย Summoner หรือ Erosion ให้ใช้ Obsidian กับ Ruby แทน Amber รายละเอียดเพิ่มเติมอยู่ในคู่มือของแต่ละคลาส</p>

      <hr />

      <h2 id="merge">รวม Gem ขึ้นขั้นสูง</h2>
      <p>ตรงนี้คนทำผิดกันเยอะ Gem <strong>ไม่ได้รวมจากขั้นหนึ่งไปขั้นถัดไป</strong> ตลอดตั้งแต่ T1 ถึง T15 แต่เป็นแบบนี้:</p>
      <ul>
        <li><strong>T7, T8, T9 และ T10 รวมตรงจาก T5 ทั้งหมด</strong></li>
        <li><strong>T12, T13, T14 และ T15 รวมตรงจาก T10 ทั้งหมด</strong></li>
        <li>การรวมมีอัตราสำเร็จ: ใส่ Gem เพิ่มแต่ละเม็ดจะเพิ่มโอกาสสำเร็จ ใส่ครบจำนวนก็สำเร็จแน่นอน</li>
      </ul>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>ได้ผลเป็น</th><th>วัตถุดิบ</th><th className="num">อัตราต่อเม็ด</th><th className="num">ขั้นต่ำ</th><th className="num">สำเร็จแน่นอนเมื่อใส่</th></tr></thead>
          <tbody>
            <tr><td>T2</td><td>T1</td><td className="num">100%</td><td className="num">2</td><td className="num">2</td></tr>
            <tr><td>T3</td><td>T2</td><td className="num">100%</td><td className="num">2</td><td className="num">2</td></tr>
            <tr><td>T4</td><td>T3</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T5</td><td>T4</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T6</td><td>T5</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T7</td><td><strong>T5</strong></td><td className="num">36%</td><td className="num">2</td><td className="num">3</td></tr>
            <tr><td>T8</td><td><strong>T5</strong></td><td className="num">18%</td><td className="num">5</td><td className="num">6</td></tr>
            <tr><td>T9</td><td><strong>T5</strong></td><td className="num">8%</td><td className="num">11</td><td className="num">13</td></tr>
            <tr><td>T10</td><td><strong>T5</strong></td><td className="num">4%</td><td className="num">23</td><td className="num">25</td></tr>
            <tr><td>T11</td><td>T10</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T12</td><td><strong>T10</strong></td><td className="num">36%</td><td className="num">2</td><td className="num">3</td></tr>
            <tr><td>T13</td><td><strong>T10</strong></td><td className="num">32%</td><td className="num">3</td><td className="num">4</td></tr>
            <tr><td>T14</td><td><strong>T10</strong></td><td className="num">24%</td><td className="num">5</td><td className="num">5</td></tr>
            <tr><td>T15</td><td><strong>T10</strong></td><td className="num">15%</td><td className="num">8</td><td className="num">8</td></tr>
          </tbody>
        </table>
      </div>
      <p className="muted">“ขั้นต่ำ” คือจำนวนเม็ดน้อยที่สุดที่เกมให้ใส่ “สำเร็จแน่นอนเมื่อใส่” คือจำนวนเม็ดที่ทำให้อัตรารวมถึง 100% ตารางนับเฉพาะ Gem ที่ใช้ไป ค่าธรรมเนียมอื่น (ถ้ามี) จะแสดงในหน้ารวม Gem ในเกม</p>

      <Alert type="red" title="อย่ารวม T5 เป็น T6 ถ้ากำลังเล็ง T10">
        <p>T6 เอาไปรวมต่อไม่ได้ (T7 ทำจาก T5 ไม่ใช่จาก T6) T5 ทุกเม็ดที่คุณเปลี่ยนเป็น T6 คือ T5 ที่ลดลงหนึ่งเม็ดสำหรับ T10 ในทำนองเดียวกัน <strong>T11 คือทางตัน</strong> ถ้าคุณกำลังสะสม T10 เพื่อขึ้น T12 ขึ้นไป</p>
      </Alert>

      <h3 id="merge-cost">เทียบค่าใช้จ่าย</h3>
      <ul>
        <li>T5 1 เม็ด = T1 4 เม็ด</li>
        <li>T10 แบบแน่นอน 1 เม็ด = T5 25 เม็ด = <strong>T1 100 เม็ด</strong></li>
        <li>T15 แบบแน่นอน 1 เม็ด = T10 8 เม็ด = T5 200 เม็ด = <strong>T1 800 เม็ด</strong></li>
      </ul>
      <p>แปลว่าตั้งแต่ T10 ขึ้นไป แต่ละขั้นแพงขึ้นมาก สำหรับผู้เล่นส่วนใหญ่ เป้าหมายที่สมเหตุสมผลคือ <strong>ทำ T10 ให้ครบทุกช่องก่อน</strong> แล้วค่อยเอา T10 ที่เหลือไปทำ T12 ถึง T15 ให้ Gem ที่สำคัญที่สุด (ปกติคือ Obsidian ที่ Main)</p>

      <h3 id="gamble">ควรรวมด้วยจำนวนขั้นต่ำไหม?</h3>
      <p>ยกตัวอย่าง T7: ใส่ T5 2 เม็ดได้โอกาสสำเร็จ 72% ใส่ 3 เม็ดสำเร็จแน่นอน ถ้าล้มเหลวแล้ว Gem ที่ใส่ไปหายหมด โดยเฉลี่ยการใส่ 2 เม็ดก็ยังใช้ T5 น้อยกว่านิดหน่อย (ประมาณ 2.8 เม็ดต่อความสำเร็จหนึ่งครั้ง เทียบกับ 3) T8, T9, T12, T13 ก็คล้ายกัน</p>
      <p>แต่ส่วนต่างน้อยมาก ขณะที่ความเสี่ยงเสียเปล่าสูง คำแนะนำคือ <strong>T7 ถึง T9 เสี่ยงได้</strong> ถ้ามี T5 เยอะ ส่วน <strong>ตั้งแต่ T10 ขึ้นไปให้ใส่ครบเพื่อความแน่นอนเสมอ</strong> โดยเฉพาะ T10 ที่ใส่ขั้นต่ำ (23 เม็ด 92%) ก็ไม่ได้ถูกกว่าใส่ครบ 25 เม็ดโดยเฉลี่ย จึงไม่มีเหตุผลต้องเสี่ยง</p>

      <hr />

      <h2 id="sources">หา Gem ได้จากไหน</h2>
      <ul>
        <li><strong>เหมือง Gem บนแผนที่โลก</strong> ของแต่ละอาณาจักร อย่าลืมไปขุดสม่ำเสมอตอนสำรวจแผนที่</li>
        <li><strong>Astral Pact</strong>: ทุกรอบ 8 ขั้นจะมีขั้น <strong>+5% Gem Drop</strong> หนึ่งขั้น ดูเพิ่มในบทความ Season, Primostar &amp; Astral Pact</li>
        <li>รางวัลอีเวนต์และแพ็กเติมเงิน</li>
      </ul>
      <Alert title="Gem เมื่อขึ้นซีซันใหม่">
        <p>เมื่อเข้าซีซันใหม่ Gem ของซีซันเก่าควร <strong>รีไซเคิลเป็น <Tip>Rolla</Tip></strong> แล้วเปลี่ยนเป็น Gem ของซีซันใหม่ ดังนั้นช่วงท้ายซีซันอย่าทุ่มทรัพยากรไปกับการรวม Gem ขั้นสูงมากเกินไป</p>
      </Alert>

      <p className="source">ข้อมูล Gem และอัตรารวมมาจากไฟล์เกม รวบรวมผ่าน Sword x Staff Compass</p>
    </>
  );
}
