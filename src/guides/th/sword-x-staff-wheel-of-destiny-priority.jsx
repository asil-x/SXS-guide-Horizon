import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Wheel of Destiny เป็นวิธีที่ดีในการหาทรัพยากรเพิ่มและเปิดพื้นที่ที่ถูกล็อกบนแผนที่ เพราะเป็นหนึ่งในไม่กี่ช่องทางที่ได้ <Tip>Gateway Key</Tip></p>
      <p>คุณใช้ <Tip>Lucky Ticket</Tip> หมุนรับไอเทมจากวงล้อที่กระจายอยู่ทั่วแผนที่ได้</p>
      <Alert type="red" title="เน้นแค่กุญแจก็พอ">
        <p>ถ้าไม่รู้ว่าควรเอาอะไร ให้ไปวงล้อถัดไปเลยหลังจากได้ <Tip>Gateway Key</Tip> <strong>เพราะนั่นคือของหลักที่ต้องหาเสมอ</strong></p>
      </Alert>
      <p>ถ้าอยากรู้ว่าแต่ละพื้นที่ควรเอาอะไร ด้านล่างคือลำดับความสำคัญของแต่ละแผนที่</p>
      <p><strong>รายการนี้สมมติว่าคุณได้กุญแจแล้ว และยังเหลือ <Tip>Lucky Ticket</Tip> อีกนิดหน่อยให้ใช้</strong></p>

      <hr />

      <h2 id="verdantglade">Verdantglade</h2>
      <Tabs>
        <Tab label="Damp Cliff">
          <ol>
            <li><Tip>Auroral Elemental Badge</Tip> คุ้มมากถ้าได้มา</li>
            <li><Tip>Mythic Auroral Badge</Tip></li>
          </ol>
          <p>จะไม่หมุนเอาอย่างอื่นอีก เพราะการเล็งตราสีม่วง/legendary ขึ้นกับดวงมากเกินไป</p>
          <p><Img src="guides/damp-cliff.webp" alt="sword x staff wheel of destiny damp-cliff" /></p>
        </Tab>
        <Tab label="Jungle Camp">
          <ol>
            <li><Tip>Skill Shard Voucher</Tip> แค่นั้นเลย ได้ครบทั้งสามคือสุดยอด</li>
          </ol>
          <p><Img src="guides/jungle-camp.webp" alt="sword x staff wheel of destiny jungle-camp" /></p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="cinder-ridge">Cinder Ridge</h2>
      <Tabs>
        <Tab label="Mount Chestnut">
          <p><strong>ทรัพยากร Fantomon ทุกอย่างได้ใช้แน่นอน</strong> เพราะมีสัตว์เลี้ยงต้องอัปเลเวลเยอะมาก (แต่ละตัวมีหน้า Aptitude 7 หน้า)</p>
          <p>ส่วนตัวคิดว่าวงล้อนี้เหมาะจะทุ่มทรัพยากรช่วงต้นเกม เพราะเพิ่มพลังได้แน่นอน</p>
          <p><Img src="guides/mount-chestnut.webp" alt="sword x staff wheel of destiny mount-chestnut" /></p>
        </Tab>
        <Tab label="Stormcliff">
          <ol>
            <li><Tip>Skill Shard Voucher</Tip> แค่นั้นเลย ได้ครบทั้งสามคือสุดยอด</li>
          </ol>
          <p><Img src="guides/stormcliff.webp" alt="sword x staff wheel of destiny stormcliff" /></p>
        </Tab>
        <Tab label="Boulder Settlement">
          <p>โอกาสที่จะได้ <Tip>Dawnium</Tip> เยอะ ๆ ที่นี่ขึ้นกับดวงมากเกินไป</p>
          <p><strong>ถ้าคุณเก็บของดีจากที่อื่นครบหมดแล้ว</strong> ที่นี่ก็เป็นทางหา <Tip>Dawnium</Tip> เพิ่มที่ไม่เลว แต่ส่วนตัวจะข้าม เว้นแต่อยากลองเสี่ยงดวงกับรางวัล 2.88k</p>
          <p><Img src="guides/boulder-settlement.webp" alt="sword x staff wheel of destiny boulder-settlement" /></p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="aqualis">Aqualis</h2>
      <Tabs>
        <Tab label="Coral Settlement">
          <ol>
            <li><Tip>Auroral Elemental Badge</Tip> คุ้มมากถ้าได้มา</li>
            <li><Tip>Mythic Auroral Badge</Tip></li>
          </ol>
          <p>จะไม่หมุนเอาอย่างอื่นอีก เพราะการเล็งตราสีม่วง/legendary ขึ้นกับดวงมากเกินไป</p>
          <p><Img src="guides/coral-settlement.webp" alt="sword x staff wheel of destiny mount-chestnut" /></p>
        </Tab>
        <Tab label="Vine Jungle">
          <p>โอกาสที่จะได้ <Tip>Dawnium</Tip> เยอะ ๆ ที่นี่ขึ้นกับดวงมากเกินไป</p>
          <p><strong>ถ้าคุณเก็บของดีจากที่อื่นครบหมดแล้ว</strong> ที่นี่ก็เป็นทางหา <Tip>Dawnium</Tip> เพิ่มที่ไม่เลว แต่ส่วนตัวจะข้าม เว้นแต่อยากลองเสี่ยงดวงกับรางวัล 2.88k</p>
          <p><Img src="guides/vine-jungle.webp" alt="sword x staff wheel of destiny stormcliff" /></p>
        </Tab>
      </Tabs>
    </>
  );
}
