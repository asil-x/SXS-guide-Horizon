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
  ['Season 1 · Witching Hours', 'Milestones 5 → 480', [['128', 'F2P and light spenders'], ['152', 'Light to medium spenders'], ['176', 'Medium spenders'], ['200', 'Medium to heavy spenders'], ['230', 'Heavy spenders']]],
  ['Season 2 · Crossed Paths', 'Milestones 505 → 1,880', [['800', 'F2P and light spenders'], ['920', 'Light to medium spenders'], ['1,060', 'Light and medium: stop here'], ['1,200', 'Heavy spenders'], ['1,280', 'Heavy spenders: stop here']]],
  ['Season 3 · Finale of Chaos', 'Milestones 1,940 → 4,680', [['2,880', 'F2P and light spenders'], ['3,160', 'F2P: stop here'], ['3,300', 'Light to medium spenders'], ['3,590', 'Light spenders: stop here'], ['3,740', 'Medium to heavy spenders'], ['3,890', 'Medium spenders: stop here'], ['4,040', 'Very heavy spenders']]],
  ['Season 4 · Bizarre Spectacle', 'Milestones 4,770 → 11,800', [['7,080', 'F2P'], ['7,560', 'Light spenders'], ['8,040', 'Medium spenders'], ['9,080', 'Medium to heavy spenders'], ['10,200', 'Heavy spenders']]],
  ['Season 5 · Frostfire Anthem', 'Milestones 12,040 → 24,520', [['15,480', 'F2P and light spenders'], ['16,280', 'Medium spenders start here'], ['17,080', 'Medium spenders'], ['17,960', 'Medium spenders, weaker class'], ['18,840', 'Medium to heavy spenders'], ['19,800', 'Heavy spenders start here'], ['20,760', 'Heavy spenders'], ['22,840', 'Server top']]],
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
  ['Aeperis', 'S6', 'No English name yet', '46,800 (incomplete data)'],
];

export default function Page() {
  return (
    <>
      <p>Each season lasts about 3 months. When a season ends, <strong>Season Level is reset</strong>, but most of your effort is kept, and most importantly it is converted into <strong>Primostar</strong>, the points used to unlock <strong>permanent</strong> stat bonuses in the Astral Pact.</p>
      <p>This guide explains where Primostar comes from, what the Astral Pact gives, how much to aim for, what to buy in the Kingdom Shop and what to do before and after a season ends.</p>
      <p><Img src="guides/season-upgrade.webp" alt="sword x staff astral pact" /></p>

      <hr />

      <h2 id="keep-reset">What you keep and what you lose</h2>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Kept</th><th>Reset or lost</th></tr></thead>
          <tbody>
            <tr><td>Relics, Fantomons, skills, companions and their stars</td><td>Season Level: levels drop to the season cap, relics to the floor (+22 in Season 5, +25 in Season 6). The excess is converted into Primostar.</td></tr>
            <tr><td>Primostar and every Astral Pact stat</td><td>Unfinished Season Trial quests and season badges</td></tr>
            <tr><td>Gear Rating bonus, based on the gear you are <strong>wearing</strong> when the season ends</td><td>The season’s Battle Pass</td></tr>
            <tr><td>Gear substats you pay Divinecraft Stone to carry over</td><td>Dungeon and Fantasia Ascent records</td></tr>
            <tr><td>Grand Treasure Hunt energy</td><td>EXP and Stamina waiting in Reward Retrieval</td></tr>
            <tr><td>Bed EXP (anything over the cap is converted into Primostar)</td><td>Trading old-season gear shards at the Trading House</td></tr>
            <tr><td></td><td>Guild Clash points (guilds move to a new League), old-season gems (recycle them into <Tip>Rolla</Tip>)</td></tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="primostar">Where Primostar comes from</h2>
      <p>When the season ends, the game adds up all your progress <strong>beyond the cap</strong> that season (Season Level) into a progress score, divides it by a factor and rounds down, then adds a fixed amount:</p>
      <ul>
        <li>Every extra <strong>Season Character Level</strong></li>
        <li>Every season <strong>gear enhancement</strong> level (summed over 5 pieces)</li>
        <li>Every season <strong>skill</strong> level (summed over 8 skill slots)</li>
        <li>Every season <strong>Fantomon</strong> level</li>
        <li>Every season <strong>relic</strong> level</li>
      </ul>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Season</th><th className="num">Character</th><th className="num">Gear</th><th className="num">Skill</th><th className="num">Fantomon</th><th className="num">Relic</th><th className="num">Score / 1 Primostar</th><th className="num">Fixed</th></tr></thead>
          <tbody>{SCORE.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} className={i ? 'num' : ''}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <p className="muted">The Character to Relic columns are the points earned per extra level.</p>
      <p>Two takeaways from the table:</p>
      <ul>
        <li><strong>Relics give the most points</strong> per level in every season, followed by gear. Skills give the least.</li>
        <li>The conversion factor drops sharply each season (100 → 3), so later seasons give far more Primostar than earlier ones. That is also why Astral Pact milestones climb so fast.</li>
      </ul>
      <p>Season Level can only be bought at the season’s highest tier (e.g. Ethereal III in Season 6), and unlocks gradually with your Season Character Level.</p>

      <hr />

      <h2 id="astral-pact">Astral Pact</h2>
      <p>Primostar is a <strong>running total across all seasons</strong>. Each time the total hits a milestone, you unlock a permanent stat bonus. Milestones repeat in a cycle of 8:</p>
      <table className="data-table">
        <thead><tr><th>Position in cycle</th><th>Stat</th><th className="num">Per milestone</th></tr></thead>
        <tbody>{PACT.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td className="num">{r[2]}</td></tr>)}</tbody>
      </table>
      <p>Season 5 adds some <strong>+5% output</strong> milestones for the Gold Mine, Ironstone Mine, Sandstone Mine and Monster Cave, in place of Gem Drop.</p>
      <p>Current maximum: <strong>+50% 2× Rating Reward Rate</strong> and <strong>+75% Gear Drop Ascension Rate</strong> for every dungeon. See the Daily Dungeon guide for which one matters more.</p>

      <h3 id="goals">How much Primostar should you aim for?</h3>
      <p>What veteran players usually aim for by the end of each season, by spending level (running total):</p>
      <Tabs>
        {GOALS.map(([name, range, rows]) => (
          <Tab label={name.split(' · ')[0]} key={name}>
            <p><strong>{name}</strong> <span className="muted">({range})</span></p>
            <table className="data-table">
              <thead><tr><th className="num">Total Primostar</th><th>Suited for</th></tr></thead>
              <tbody>{rows.map(([n, who]) => <tr key={n}><td className="num">{n}</td><td>{who}</td></tr>)}</tbody>
            </table>
          </Tab>
        ))}
      </Tabs>
      <Alert title="What does “stop here” mean?">
        <p>Past that milestone, every extra Primostar costs a lot of resources for only about 1% stats. If you are a light or medium spender, stopping right at the milestone and putting resources into things you keep (relics, Fantomons) is more efficient.</p>
      </Alert>

      <hr />

      <h2 id="kingdom-shop">Kingdom Shop</h2>
      <p>Each kingdom has its own shop, paid with that kingdom’s currency. The shop has <strong>4 tiers</strong>: tier 1 opens when you reach the kingdom, tiers 2, 3 and 4 open once you have <strong>spent a total of 3,500, 8,000 and 13,000</strong> of that shop’s currency. Stock is per account and <strong>does not refresh</strong>.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Kingdom</th><th>Season</th><th>Currency</th><th className="num">Buy out all limited stock</th></tr></thead>
          <tbody>{SHOPS.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="num">{r[3]}</td></tr>)}</tbody>
        </table>
      </div>
      <h3 id="shop-priority">What to buy first</h3>
      <ol>
        <li><strong>The 90% and 70% discount slots</strong>: <Tip>Stellatie</Tip>, <Tip>Refined Ore</Tip>, Covenite, <Tip>Mythic Auroral Badge</Tip>. A 90% slot costs only 10% of the same item’s price in the next slot, the cheapest in the shop.</li>
        <li><strong>Covenite</strong> (tiers 3 and 4): Goddess Prayer gives skills for <strong>your current class</strong>, worth more than Stellatie.</li>
        <li><strong>Auroral Badges</strong> of every kind (all discounted) for relic gacha.</li>
        <li><Tip>Lucky Ticket</Tip> and <Tip>Gateway Key</Tip>: only 1 per tier.</li>
        <li>The kingdom’s map keys (Withering Potion, Magic Drill…) if you still have obstacles to clear.</li>
        <li>Visages (cosmetic) as you like.</li>
        <li><strong>Unlimited companion gifts</strong>: a sink for spare currency once limited stock is sold out.</li>
      </ol>
      <p>Buying the discounted items first also unlocks shop tiers faster, since the amount you <em>actually pay</em> counts toward tier progress.</p>

      <h3 id="season-shop">Season Shop</h3>
      <p>The Season Shop takes <strong>Fatum Sigil</strong> and <strong>only sells cosmetics</strong> (Skill Chroma, weapon Visages, Goddess statue looks…). It does not affect power, so buy whatever you like. An SSS Gameplay Rating at season end gives 1,200 Fatum Sigil.</p>

      <hr />

      <h2 id="timeline">Season timeline</h2>
      <table className="data-table">
        <thead><tr><th>Day</th><th>Event</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>New kingdom and first raid open. Higher level cap and a new class tier.</td></tr>
          <tr><td>14</td><td>Second raid. <strong>Season Level starts counting.</strong></td></tr>
          <tr><td>15</td><td>New season map opens.</td></tr>
          <tr><td>28, 42, 56, 70</td><td>Third to sixth raids.</td></tr>
          <tr><td>31</td><td>Second relic gacha.</td></tr>
          <tr><td>61</td><td>Third relic gacha.</td></tr>
          <tr><td>84</td><td>End-of-season raid, with Abyss difficulty.</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="season-end">End-of-season checklist</h2>
      <h3 id="last-2-weeks">Last 2 weeks</h3>
      <ul>
        <li><strong>Pick a Primostar goal</strong> from the table above and plan to reach it. The Astral Pact is the only part of the season you keep forever.</li>
        <li><strong>Stop spending, start saving</strong> Material Realm tools, Speed-Ups and Temporal Crystals. They are worth more next season (new Goddess statue, higher ranks).</li>
        <li>Stamina only regenerates up to <strong>300</strong> (you can hold up to 1,200 from rewards). Let it fill to 300 before the season ends, but spend whatever is about to overflow.</li>
        <li><strong>Push your Gameplay Rating</strong>: best daily dungeon rating, Fantasia Ascent floor, Arena rank, Nexus and map exploration all count. SSS needs <strong>27,200</strong> points and rewards 80 Stellatie, 800 Rare Auroral Badge, 80 Bond Trinket and 1,200 Fatum Sigil.</li>
        <li>Explore <strong>100% of the season map</strong>: up to 3,000 Gameplay points, plus a bonus that shrinks for each day you are late.</li>
        <li>F2P: only spend <Tip>Dawnium</Tip> on <strong>dungeon runs first, then Guild donations</strong>, and save the rest for the new season.</li>
        <li>Spenders: spend on things that <strong>carry over</strong> (relics, then Fantomons, then skills). Season Level packs bought at the end of a season are worth the least.</li>
        <li><strong>Do not buy a Battle Pass or Monthly Pass</strong> in the last days: only buying at the start of a season gets full value.</li>
        <li>Finish the <strong>Season Trial</strong> and season badges.</li>
        <li>Pick the Mythic-or-better gear whose substats you want to keep and save <strong>Divinecraft Stone</strong>: 300 for 1 line, 1,200 for 2 lines, 3,200 for 3 lines, 8,000 for 4 lines.</li>
      </ul>
      <h3 id="last-3-days">Last 3 days</h3>
      <ul>
        <li><strong>Wear your best season gear and leave it on</strong>. Gear Rating (D to SSS) is based on what you are wearing when the season ends, giving up to <strong>+5% HP, ATK, DEF, SPD</strong> and <strong>+2% DMG RES, DMG Boost</strong>.</li>
        <li><strong>Sell gear shards</strong> at the Trading House: once the season ends you can no longer list them.</li>
        <li>Claim all <strong>Reward Retrieval</strong> (Akane) and every Battle Pass level you reached.</li>
        <li>Finish any relic or Fantomon that is close to a new star: stars are kept.</li>
        <li>Spend all event currency for events ending with the season.</li>
      </ul>
      <h3 id="last-36h">Last 36 hours</h3>
      <ul>
        <li><strong>Stop claiming Bed EXP</strong> and turn off Quick Claim. In the new season, after lighting the new statue, that EXP is worth more. Anything over the cap is not lost but converted into Primostar.</li>
        <li><strong>One day before</strong>, stop claiming dungeon rewards and hold <strong>4 attempts</strong> (the max). The daily reset adds 2, so you enter the new season with <strong>6 attempts</strong>.</li>
        <li>Keep every Speed-Up and Temporal Crystal. Grand Treasure Hunt energy carries over, no need to burn it.</li>
      </ul>
      <h3 id="launch-day">New season launch day (in order)</h3>
      <ol>
        <li>Claim <strong>season rewards</strong>: Primostar, ranking rewards, Arena, Guild Clash.</li>
        <li><strong>Spend all Primostar</strong> on the Astral Pact.</li>
        <li>Light the new statue, claim Bed EXP and push your level as far as possible <strong>before</strong> using Speed-Ups.</li>
        <li>Only now buy the new Monthly Pass and Battle Pass.</li>
        <li>Pull relics that day.</li>
        <li>Only use Speed-Ups to hit unlock milestones (new class tier, Adult Fantomon).</li>
        <li><strong>Recycle old-season gems</strong> into Rolla and move your saved substats onto new gear.</li>
        <li>Use the 6 dungeon attempts you saved.</li>
        <li>Keep some Auroral Badges: the second relic gacha opens around day 31, the third around day 61.</li>
      </ol>

      <p className="source">Primostar, Astral Pact, Kingdom Shop and end-of-season checklist data compiled from Purrwikimania and Sword x Staff Compass.</p>
    </>
  );
}
