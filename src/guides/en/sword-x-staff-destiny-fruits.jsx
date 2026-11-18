import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p><Tip>Destiny Fruit</Tip> is an important item used to get random resources and to complete relic sets for extra stats.</p>
      <p>You can use fruits anywhere in the otherworld (the exploration map). Each fruit gives either a resource or a random encounter.</p>
      <p><strong>These encounters can boost your power a lot</strong>, because the <Tip>Mysterious Merchant</Tip> may sell great Fantomons, skills and materials in exchange for <Tip>Dawnium</Tip>.</p>
      <p><Img src="guides/destiny-exploration.webp" alt="sword x staff destiny exploration" /></p>

      <hr />

      <h2 id="where-to-get-them">Where to get them</h2>
      <p>Events, quests, the trees in your base… Stockpiling <Tip>Destiny Fruit</Tip> is fairly easy, even for F2P players.</p>
      <p>For spenders, the shop is of course your friend. Early on there are not many packs with fruits, but later special events let you buy a lot more.</p>

      <hr />

      <h2 id="when-to-use-them">When to use them</h2>
      <p>In my opinion there are two ways to use <Tip>Destiny Fruit</Tip>:</p>
      <ol>
        <li><strong>Use them as you get them</strong>. Focus mainly on completing the Rare and Epic relic sets</li>
        <li><strong>Only use what quests need and save the rest</strong>. Events like Lucky Bingo have quests that ask you to spend around 200 <Tip>Destiny Fruit</Tip> (see below)</li>
      </ol>
      <p>The second way suits both F2P and light spenders, since buying that many fruits is very expensive.</p>

      <hr />

      <h2 id="finding-relic-set-locations">Finding where relic sets drop</h2>
      <p>As mentioned above, <Tip>Destiny Fruit</Tip> can give relics of every rarity, so people usually use them to finish both the Rare and Epic sets.</p>
      <Alert type="blue" title="Each map region drops different relics">
        <p>Just open your collection and tap a relic you are missing, <strong>the game will show you where to go</strong>.</p>
      </Alert>
      <p><Img src="guides/relic-source.webp" alt="sword x staff relic sources" /></p>

      <hr />

      <h2 id="why-save-200">Why save 200?</h2>
      <p><strong>Events!</strong> Many recurring events have quests that ask you to spend <Tip>Destiny Fruit</Tip>.</p>
      <p>These events change by season, but you usually need 200 or 300 in total to finish all of those recurring quests.</p>
      <p><Img src="guides/destiny-event-saving.webp" alt="sword x staff destiny event saving up resources" /></p>

      <h3 id="lucky-bingo">The Lucky Bingo event</h3>
      <p>Lucky Bingo is a side event that runs alongside the main event. You draw on the Bingo board with <Tip>Bingo Ticket</Tip>s earned from the event quests, and completing lines on the board gives extra rewards.</p>
      <ul>
        <li>Those quests usually include <strong>spending Destiny Fruit</strong> in several milestones, adding up to around 200 to 300 fruits. This is the main reason to save them.</li>
        <li>Fruit only counts when spent while the event is running, so <strong>don't burn all your fruit right before it starts</strong>.</li>
        <li>Once the event is live, spend fruit in the regions that drop relics you are missing, so you progress the Bingo quests and your relic sets at the same time.</li>
        <li>Milestones and rewards change from run to run, so check the event's quest list before spending.</li>
      </ul>
    </>
  );
}
