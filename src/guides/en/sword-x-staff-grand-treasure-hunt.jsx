import { Alert, GthSchedule, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Grand Treasure Hunt is a <strong>weekly recurring event</strong> where you spend <Tip>Auroradrasil Energy</Tip> to buy items across 5 levels. The last level has a <strong>featured reward that changes every week</strong>.</p>
      <p>The most important mechanic is that <strong>energy carries over to the next event</strong>, so you do not need to spend it all every week.</p>

      <hr />

      <h2 id="how-it-works">How it works</h2>
      <p><Img src="guides/grand-treasure.webp" alt="sword x staff grand treasure event" /></p>
      <p>Each week you earn about <strong>2,250</strong> <Tip>Auroradrasil Energy</Tip>: 2,240 from quests and 10 from the free pack in the shop.</p>
      <p>The shop has 5 levels with 3 items each, all at the same price within a level. A level only opens once the total energy you spent on the levels below reaches its threshold. <strong>Buying 1 item per level is exactly enough</strong> to open the next one.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Level</th><th className="num">Opens at spent</th><th className="num">Price per item</th><th className="num">Whole level</th></tr></thead>
          <tbody>
            <tr><td>Level 1</td><td className="num">0</td><td className="num">240</td><td className="num">720</td></tr>
            <tr><td>Level 2</td><td className="num">240</td><td className="num">400</td><td className="num">1,200</td></tr>
            <tr><td>Level 3</td><td className="num">640</td><td className="num">600</td><td className="num">1,800</td></tr>
            <tr><td>Level 4</td><td className="num">1,240</td><td className="num">800</td><td className="num">2,400</td></tr>
            <tr><td>Level 5</td><td className="num">2,040</td><td className="num">1,200</td><td className="num">3,600</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>Cheapest path to the featured reward: 240 + 400 + 600 + 800 + 1,200 = <strong>3,240</strong> energy.</li>
        <li>Buying every item in a week: <strong>9,720</strong> energy, more than 4 weeks of income.</li>
      </ul>
      <Alert title="Energy carries over">
        <p><strong>You do not have to spend your energy every week</strong>.</p>
        <p>Saving over several weeks lets you afford the more expensive Level 5 items, or wait for a week whose reward you actually need.</p>
      </Alert>

      <hr />

      <h2 id="what-to-buy">What to buy</h2>
      <p>The Level 5 featured reward changes every week and comes in 3 kinds:</p>
      <ul>
        <li><strong>Special Relic</strong>: utility relics such as <Tip>Lucky Statue</Tip> or <Tip>Primal Gem</Tip>. From Season 3 it is a chest where you choose 1 relic, and it shows up every other week. <strong>Take it</strong>, these relics make daily farming much easier. I 100% recommend getting the <Tip>Lucky Statue</Tip>.</li>
        <li><strong>Mythic Relic Chest</strong>: choose 1 Mythic relic from the set of that season's kingdom. <strong>Skip</strong> unless you are missing exactly that piece.</li>
        <li><strong>Skill Shard Chest x180</strong>: skill shards for the newest class tier. <strong>Skip</strong> unless you have spare energy and need that tier's skills.</li>
      </ul>
      <p>In Levels 1 to 4 you only need 1 item per level to open the next. The recommended items (marked ★ in the schedule):</p>
      <ul>
        <li><strong>Level 1</strong>: <Tip>Basic Treats</Tip>, since they are harder to get than <Tip>Raw Ore</Tip> and <Tip>Chrono Sand</Tip>.</li>
        <li><strong>Level 2</strong>: Random Rare Gift. There are lots of companions to upgrade and never enough gifts.</li>
        <li><strong>Level 3</strong>: <Tip>Destiny Fruit</Tip>, for the chance at bosses, merchants and great rewards.</li>
        <li><strong>Level 4</strong>: <Tip>Legendary Auroral Badge</Tip>, otherwise only available by paying. <strong>DO NOT</strong> buy <Tip>Stellatie</Tip> or <Tip>Bond Trinket</Tip>, F2P players can still get those.</li>
        <li><strong>Level 5</strong>: the featured reward. Only buy <Tip>Covenite</Tip> x40 and <Tip>Mythic Auroral Badge</Tip> x40 (enough for 4 Mythic Aeonic Gacha capsules) with spare energy.</li>
      </ul>

      <h3 id="weekly-plan">Weekly schedule: take or skip</h3>
      <p>Pick the hunt running now and how much energy you hold, and the schedule tracks your balance week by week at 2,250 energy a week. Every week shows all its items from Level 1 to 5. Tap <strong>Skip / Take / Everything</strong>, or tap single items to try your own plan.</p>
      <GthSchedule />
    </>
  );
}
