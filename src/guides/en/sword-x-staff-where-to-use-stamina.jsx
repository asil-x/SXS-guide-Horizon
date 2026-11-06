import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p><Img src="guides/stamina-screen.webp" alt="sword x staff stamina screen" /></p>

      <h2 id="where-to-spend-stamina">Where to spend Stamina</h2>
      <p><Tip>Stamina</Tip> in Sword x Staff is only used to gather resources on the map. That is handy, since it basically means extra free resources.</p>
      <Alert type="blue" title="How you use it changes by season">
        <p>Each season changes how you should spend <Tip>Stamina</Tip>, depending on what you need at the time.</p>
        <p>Use this guide as a reference and always optimize for your own needs.</p>
      </Alert>
      <p>In my opinion, the best early-game use of stamina is simply getting more <Tip>Rolla</Tip>. It is used <em>EVERYWHERE</em> in the game, and early on it is usually what most players get stuck on.</p>
      <p>You can use <Tip>Rolla</Tip> to buy more items in the daily shop, and refresh the shop to restock everything, up to 10 times a day.</p>
      <p><Img src="guides/where-to-spend-dawnium.webp" alt="sword x staff daily shop cart" /></p>
      <p><strong>F2P players should refresh at least 3 times a day</strong> and buy most (ideally all) of the resources in the daily shop.</p>
      <p>If you care about the season leaderboard, you can focus on <Tip>Raw Ore</Tip> and <Tip>Chrono Sand</Tip>.</p>

      <hr />

      <h2 id="resource-nodes">Resource nodes</h2>
      <p>While farming resources you will find bigger nodes that give more resources.</p>
      <Tabs>
        <Tab label="Big nodes">
          <p><Img src="guides/big-nodes.webp" alt="sword x staff resource big nodes" /></p>
          <p>You can share them in chat with other players (or your guild) to farm together, with a weekly limit.</p>
        </Tab>
        <Tab label="Special nodes">
          <p><Img src="guides/special-nodes.webp" alt="sword x staff resource special nodes" /></p>
          <p>Besides the main resources, you can also farm special nodes for gems and cooking ingredients.</p>
          <p>The daily limit for these is unclear, but you can sell them at the auction house for <Tip>Dawnium</Tip>, which is quite profitable.</p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="setting-up-auto">Setting up auto</h2>
      <p>The first time you tap a node to farm it manually, just press the auto button that appears above the chat box.</p>
      <p><Img src="guides/auto-farm.webp" alt="sword x staff resource auto farm" /></p>
      <p>It lets you choose how much stamina to spend on that resource, and your character will gather it automatically.</p>
    </>
  );
}
