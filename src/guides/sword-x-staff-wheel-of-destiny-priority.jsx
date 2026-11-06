import { Alert, Img, Tab, Tabs, Tip } from '../components/guide';

export const meta = {
  title: 'Ưu tiên Wheel of Destiny',
  desc: 'Nên ưu tiên ô nào khi quay Wheel of Destiny.',
  order: 9,
  category: 'guide',
  cover: 'guides/destiny-event-saving.webp',
  icon: 'tooltips/item_112.png',
  topic: 'event',
};

export default function Page() {
  return (
    <>
      <p>Wheel of Destiny là cách hay để kiếm thêm tài nguyên và mở các khu vực bị khoá trên bản đồ, vì đây là một trong số ít cách để có <Tip>Gateway Key</Tip>.</p>
      <p>Bạn có thể dùng <Tip>Lucky Ticket</Tip> để quay vật phẩm ở các vòng quay rải khắp bản đồ.</p>
      <Alert type="red" title="Chỉ cần tập trung vào chìa khoá">
        <p>Nếu không biết nên lấy gì, cứ chuyển sang vòng quay tiếp theo sau khi lấy được <Tip>Gateway Key</Tip>, <strong>, vì đó luôn là món chính cần tìm</strong>.</p>
      </Alert>
      <p>Nếu muốn biết nên lấy gì ở từng khu vực, dưới đây là thứ tự ưu tiên theo từng bản đồ.</p>
      <p><strong>Danh sách này giả định bạn đã có chìa khoá và còn dư một ít <Tip>Lucky Ticket</Tip> để dùng.</strong></p>

      <hr />

      <h2 id="verdantglade">Verdantglade</h2>
      <Tabs>
        <Tab label="Damp Cliff">
          <ol>
            <li><Tip>Auroral Elemental Badge</Tip> rất đáng nếu lấy được</li>
            <li><Tip>Mythic Auroral Badge</Tip></li>
          </ol>
          <p>Mình sẽ không quay thêm gì khác, vì nhắm huy hiệu tím/legendary quá phụ thuộc may rủi.</p>
          <p><Img src="guides/damp-cliff.webp" alt="sword x staff wheel of destiny damp-cliff" /></p>
        </Tab>
        <Tab label="Jungle Camp">
          <ol>
            <li><Tip>Skill Shard Voucher</Tip>. Chỉ vậy thôi, lấy được cả ba thì quá tuyệt</li>
          </ol>
          <p><Img src="guides/jungle-camp.webp" alt="sword x staff wheel of destiny jungle-camp" /></p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="cinder-ridge">Cinder Ridge</h2>
      <Tabs>
        <Tab label="Mount Chestnut">
          <p><strong>Mọi tài nguyên Fantomon đều sẽ được dùng tới</strong> trong game, vì có rất nhiều pet cần lên cấp (mỗi con lại có 7 trang Aptitude).</p>
          <p>Theo mình đây là vòng quay tốt để đổ tài nguyên vào lúc đầu game, vì chắc chắn tăng lực chiến.</p>
          <p><Img src="guides/mount-chestnut.webp" alt="sword x staff wheel of destiny mount-chestnut" /></p>
        </Tab>
        <Tab label="Stormcliff">
          <ol>
            <li><Tip>Skill Shard Voucher</Tip>. Chỉ vậy thôi, lấy được cả ba thì quá tuyệt</li>
          </ol>
          <p><Img src="guides/stormcliff.webp" alt="sword x staff wheel of destiny stormcliff" /></p>
        </Tab>
        <Tab label="Boulder Settlement">
          <p>Tỉ lệ may rủi để có được nhiều <Tip>Dawnium</Tip> là quá lớn.</p>
          <p><strong>NẾU BẠN ĐÃ LẤY HẾT ĐỒ NGON Ở CÁC CHỖ KHÁC</strong>, thì đây là cách tốt để kiếm thêm <Tip>Dawnium</Tip>, nhưng cá nhân mình sẽ bỏ qua, trừ khi bạn muốn thử vận may với phần thưởng 2.88k.</p>
          <p><Img src="guides/boulder-settlement.webp" alt="sword x staff wheel of destiny boulder-settlement" /></p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="aqualis">Aqualis</h2>
      <Tabs>
        <Tab label="Coral Settlement">
          <ol>
            <li><Tip>Auroral Elemental Badge</Tip> rất đáng nếu lấy được</li>
            <li><Tip>Mythic Auroral Badge</Tip></li>
          </ol>
          <p>Mình sẽ không quay thêm gì khác, vì nhắm huy hiệu tím/legendary quá phụ thuộc may rủi.</p>
          <p><Img src="guides/coral-settlement.webp" alt="sword x staff wheel of destiny mount-chestnut" /></p>
        </Tab>
        <Tab label="Vine Jungle">
          <p>Tỉ lệ may rủi để có được nhiều <Tip>Dawnium</Tip> là quá lớn.</p>
          <p><strong>NẾU BẠN ĐÃ LẤY HẾT ĐỒ NGON Ở CÁC CHỖ KHÁC</strong>, thì đây là cách tốt để kiếm thêm <Tip>Dawnium</Tip>, nhưng cá nhân mình sẽ bỏ qua, trừ khi bạn muốn thử vận may với phần thưởng 2.88k.</p>
          <p><Img src="guides/vine-jungle.webp" alt="sword x staff wheel of destiny stormcliff" /></p>
        </Tab>
      </Tabs>
    </>
  );
}
