import { Alert, Img, Tip } from '../components/guide';

export const meta = {
  title: 'Cách dùng Destiny Fruit',
  desc: 'Destiny Fruit dùng vào đâu cho đáng.',
  order: 10,
  category: 'guide',
  cover: 'guides/destiny-exploration.webp',
  icon: 'tooltips/item_115.png',
  topic: 'explore',
};

export default function Page() {
  return (
    <>
      <p><Tip>Destiny Fruit</Tip> là vật phẩm quan trọng, dùng để nhận tài nguyên ngẫu nhiên và hoàn thành các bộ relic để tăng chỉ số.</p>
      <p>Bạn có thể dùng quả ở bất kỳ đâu trong otherworld (bản đồ khám phá), mỗi quả sẽ cho một tài nguyên hoặc một sự kiện gặp gỡ ngẫu nhiên.</p>
      <p><strong>Các sự kiện này có thể giúp tăng lực chiến rất nhiều</strong>, vì <Tip>Mysterious Merchant</Tip> có thể bán Fantomon, skill và nguyên liệu rất tốt để đổi lấy <Tip>Dawnium</Tip>.</p>
      <p><Img src="guides/destiny-exploration.webp" alt="sword x staff destiny exploration" /></p>

      <hr />

      <h2 id="where-to-get-them">Kiếm ở đâu?</h2>
      <p>Sự kiện, nhiệm vụ, cây trong căn cứ… Tích trữ <Tip>Destiny Fruit</Tip> khá dễ, kể cả với người chơi F2P.</p>
      <p>Với người nạp tiền thì tất nhiên shop là bạn. Đầu game không có nhiều gói chứa quả, nhưng sau này có các sự kiện riêng giúp bạn mua được nhiều hơn.</p>

      <hr />

      <h2 id="when-to-use-them">Khi nào nên dùng</h2>
      <p>Theo mình có hai cách dùng <Tip>Destiny Fruit</Tip>:</p>
      <ol>
        <li><strong>Có tới đâu dùng tới đó</strong>. Chủ yếu tập trung hoàn thành các bộ relic Rare và Epic</li>
        <li><strong>Chỉ dùng đủ cho nhiệm vụ, phần còn lại để dành</strong>. Sắp tới sẽ có sự kiện mùa hè yêu cầu bạn tiêu 200 <Tip>Destiny Fruit</Tip></li>
      </ol>
      <p>Cách thứ hai phù hợp cho cả F2P lẫn người nạp ít, vì mua nhiều quả như vậy rất tốn.</p>

      <hr />

      <h2 id="finding-relic-set-locations">Tìm nơi rơi bộ relic</h2>
      <p>Như đã nói ở trên, <Tip>Destiny Fruit</Tip> có tỉ lệ ra relic ở mọi độ hiếm, nên mọi người thường dùng chúng để hoàn thành cả bộ Rare và Epic.</p>
      <Alert type="blue" title="Mỗi khu vực trên bản đồ rơi ra relic khác nhau">
        <p>Chỉ cần vào bộ sưu tập và bấm vào relic bạn còn thiếu, <strong>game sẽ chỉ bạn cần đi đâu</strong>.</p>
      </Alert>
      <p><Img src="guides/relic-source.webp" alt="sword x staff relic sources" /></p>

      <hr />

      <h2 id="why-save-200">Vì sao để dành 200?</h2>
      <p><strong>Vì sự kiện!</strong> Nhiều sự kiện lặp lại trong game có nhiệm vụ yêu cầu bạn tiêu <Tip>Destiny Fruit</Tip>.</p>
      <p>Các sự kiện này thay đổi theo mùa, nhưng thường bạn cần tổng cộng 200 hoặc 300 để hoàn thành hết các nhiệm vụ lặp lại đó.</p>
      <p><Img src="guides/destiny-event-saving.webp" alt="sword x staff destiny event saving up resources" /></p>
    </>
  );
}
