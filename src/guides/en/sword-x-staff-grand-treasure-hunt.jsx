import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Grand Treasure Hunt is a <strong>weekly recurring event</strong> where you spend <Tip>Auroradrasil Energy</Tip> to unlock reward milestones.</p>
      <p>The most important mechanic is that <strong>energy carries over to the next event</strong>, so you do not need to spend it all every week.</p>

      <hr />

      <h2 id="how-it-works">How it works</h2>
      <p><Img src="guides/grand-treasure.webp" alt="sword x staff grand treasure event" /></p>
      <p>Each week you earn about 2,250 <Tip>Auroradrasil Energy</Tip>: 2,240 from quests and 10 from the free pack in the shop.</p>
      <p>Reaching the final reward milestone takes 2,040 <Tip>Auroradrasil Energy</Tip>. After that, Level 5 has extra items to buy, costing up to another 1,200 <Tip>Auroradrasil Energy</Tip> depending on how many you want.</p>
      <Alert title="Energy carries over">
        <p><strong>You do not have to spend your energy every week</strong>.</p>
        <p>Saving over several weeks lets you afford the more expensive Level 5 items, or wait for a better reward rotation.</p>
      </Alert>
      <p>Level 5 has <strong>one rotating item that changes every week</strong>, and that is usually where the best rewards are, including paid draws and relics that make farming easier.</p>

      <hr />

      <h2 id="saving-strategy">Saving strategy</h2>
      <p>F2P and light spenders <strong>cannot reach the final milestone every week</strong>.</p>
      <Alert type="red" title="Plan around the rotation">
        <p><strong>ALWAYS check this week’s Level 5 item before deciding to spend.</strong></p>
      </Alert>
      <table className="data-table">
        <tbody>
          <tr><td>Every 2 weeks</td><td>4,500</td><td>Two Level 5 items</td></tr>
          <tr><td>Every 3 weeks</td><td>6,750</td><td>All Level 5 items</td></tr>
          <tr><td>Flexible</td><td>Keep a 2,400 reserve</td><td>Left item when needed</td></tr>
        </tbody>
      </table>
      <p>The flexible approach means you can buy things as long as you keep a 2,400 reserve, and only buy the leftmost Level 5 item when you need it or when it is really good.</p>

      <hr />

      <h2 id="what-to-buy">What to buy</h2>
      <Tabs>
        <Tab label="Level 1">
          <p><Img src="guides/grand-treasure-rewards-1.webp" alt="sword x staff level 1 grand treasure rewards" /></p>
          <p>Early on every reward increases your power, but personally I would focus on <Tip>Basic Treats</Tip> since they are harder to get.</p>
        </Tab>
        <Tab label="Level 2">
          <p><Img src="guides/grand-treasure-rewards-2.webp" alt="sword x staff level 2 grand treasure rewards" /></p>
          <p>Prioritize companion gifts. There are lots of companions to upgrade and never enough gifts.</p>
        </Tab>
        <Tab label="Level 3">
          <p><Img src="guides/grand-treasure-rewards-3.webp" alt="sword x staff level 3 grand treasure rewards" /></p>
          <p>At this point anything works, every item makes your account stronger.</p>
          <p>I would take <Tip>Destiny Fruit</Tip> for the chance at bosses, merchants and great rewards.</p>
        </Tab>
        <Tab label="Level 4">
          <p><Img src="guides/grand-treasure-rewards-4.webp" alt="sword x staff level 4 grand treasure rewards" /></p>
          <p><strong>DO NOT</strong> buy <Tip>Stellatie</Tip> or <Tip>Bond Trinket</Tip>, F2P players can still get those.</p>
          <p><Tip>Legendary Auroral Badge</Tip>, however, is otherwise only available by paying, so buy it.</p>
        </Tab>
        <Tab label="Level 5">
          <p><Img src="guides/grand-treasure-rewards-5.webp" alt="sword x staff level 5 grand treasure rewards" /></p>
          <p>Everything at this milestone is good. Always check whether you actually need the reward before spending.</p>
          <p><strong>I 100% recommend getting the Lucky Statue to make your daily grind easier.</strong></p>
        </Tab>
      </Tabs>
    </>
  );
}
