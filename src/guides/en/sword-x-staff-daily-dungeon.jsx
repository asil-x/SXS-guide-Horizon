import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>The Daily Dungeon is one of the most important things to do every day, since it is <strong>the main source of gear and gear shards</strong> for growing your account.</p>
      <p>You get 2 free runs a day. Extra runs cost <Tip>Dawnium</Tip> (2 a day, 100 and 150), and <strong>you really should buy both every day</strong> if you want your gear to keep up.</p>
      <p><Img src="guides/daily-dungeon-sxs.webp" alt="sword x staff daily dungeon" /></p>

      <hr />

      <h2 id="rewards">Rewards</h2>
      <p>The main rewards from the Daily Dungeon are <strong>gear, gear shards and <Tip>Raw Ore</Tip></strong>. 100 shards craft a gear piece of your choice, which you can also sell at the auction house for <Tip>Dawnium</Tip>.</p>
      <Alert title="About gear shards">
        <p>Once a new dungeon opens, shards from the old dungeon can only be dismantled, not sold. <strong>Do not hoard a pile of old shards.</strong></p>
      </Alert>
      <p>Dungeon tile types and their rewards:</p>
      <table className="data-table">
        <tbody>
          <tr><td>Gold Chest</td><td>Epic or Legendary gear + <Tip>Raw Ore</Tip></td></tr>
          <tr><td>Silver Chest</td><td>Rare gear + <Tip>Raw Ore</Tip></td></tr>
          <tr><td>Empty tile</td><td><Tip>Raw Ore</Tip> (that is all)</td></tr>
        </tbody>
      </table>
      <p>Gear quality tiers unlock as you progress:</p>
      <table className="data-table">
        <tbody>
          <tr><td>Legendary and below</td><td>Available from the start</td></tr>
          <tr><td>Mythic</td><td>Mecha Summit</td></tr>
          <tr><td>Divine</td><td>Aquorigin Shrine Hard</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="ranking">Rating</h2>
      <p>Your rating (S, A, B…) depends only on <strong>how far you get in the dungeon</strong>, not on which tiles you pick along the way.</p>
      <Alert type="red" title="Kill the boss = S rank">
        <p>If you defeat the boss you are guaranteed an S rank, no matter which route you took. <strong>Always aim for that.</strong></p>
      </Alert>
      <p>Your final rating directly affects the quality of the final chest, which decides:</p>
      <ul>
        <li>How many shards you get</li>
        <li>The chance of a full gear piece dropping</li>
      </ul>
      <p>So optimizing your route to reach the boss matters more than picking the “safest” or “hardest” tiles.</p>

      <hr />

      <h2 id="boosting-drops">Boosting rewards</h2>
      <p>Two stats decide how much extra you get from the dungeon. They sound similar but affect <strong>two different rewards</strong>:</p>
      <ul>
        <li><strong>2× Rating Reward Rate</strong>: the chance that <strong>the rating chest pays out twice</strong>. The reward screen marks the second chest as a bonus.</li>
        <li><strong>Gear Drop Ascension Rate</strong> (some lines say Promotion Rate): raises the chance that <strong>gear dropped in rooms</strong> is upgraded one quality tier.</li>
      </ul>

      <h3 id="one-run">What one dungeon run pays out</h3>
      <p>Every Elite room, Boss room and final boss drops <strong>1 gear piece</strong>. When claimed, each piece gets one attempt to upgrade a tier, even with zero Ascension:</p>
      <table className="data-table">
        <thead><tr><th>Upgrade</th><th className="num">Base rate per room</th></tr></thead>
        <tbody>
          <tr><td>Rare → Epic</td><td className="num">30% (Verdantglade: 10%)</td></tr>
          <tr><td>Epic → Legendary</td><td className="num">20% (Verdantglade: 5%)</td></tr>
          <tr><td>Legendary → Mythic</td><td className="num">0.5%</td></tr>
        </tbody>
      </table>
      <p>At the end of the run you get <strong>1 rating chest</strong> based on your rating. Example: Gate of Genesis on Hard, S rank:</p>
      <table className="data-table">
        <thead><tr><th>Reward</th><th>You get</th></tr></thead>
        <tbody>
          <tr><td>Elite rooms</td><td>1 Rare piece, 30% to become Epic</td></tr>
          <tr><td>Boss and final boss (2 rooms)</td><td>1 Legendary piece, 0.5% to become Mythic</td></tr>
          <tr><td>Rating chest</td><td>96.1%: 10 Mythic shards · 2.8%: 1 Mythic piece · 1.1%: 1 Divine piece</td></tr>
        </tbody>
      </table>
      <p>Converted (100 shards = 1 Mythic piece of your choice), the chest gives about <strong>0.135 Mythic-or-better pieces per run</strong>, while the two upgrade attempts in the boss rooms are only worth about 0.01. <strong>Endgame gear comes from the chest, not the rooms.</strong></p>

      <h3 id="which-stat">Which stat to prioritize</h3>
      <p>Extra Mythic-or-better pieces after 100 runs of Gate of Genesis Hard, S rank:</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Source</th><th className="num">2× Rating</th><th className="num">Ascension</th><th className="num">2× is better by</th></tr></thead>
          <tbody>
            <tr><td>1 all-dungeon line (2× +5%, Ascension +10%)</td><td className="num">+0.68</td><td className="num">+0.1</td><td className="num">6.8×</td></tr>
            <tr><td>1 kingdom line (2× +10%, Ascension +20%)</td><td className="num">+1.35</td><td className="num">+0.2</td><td className="num">6.8×</td></tr>
            <tr><td>Max Astral Pact (2× +50%, Ascension +75%)</td><td className="num">+6.75</td><td className="num">+0.75</td><td className="num">9×</td></tr>
          </tbody>
        </table>
      </div>
      <Alert type="red" title="Verdict: 2× Rating Reward always wins">
        <p>A 2× line has half the percentage of an Ascension line but brings back <strong>about 7 times more gear</strong>, because it doubles the whole chest instead of just two 0.5% attempts. <strong>From Nightmare difficulty up, drop Ascension entirely</strong>: chests there pay Divine gear, while Ascension only upgrades room drops to Mythic.</p>
      </Alert>
      <p className="muted">Note: both rolls happen on the server. The math above treats Ascension as <em>multiplying</em> the base rate (rate = base × (1 + Ascension)). This matches what players have observed but has not been confirmed by the game.</p>

      <h3 id="gear-stats">Stat lines on gear</h3>
      <p>These are special lines found on Epic gear and above. Each dungeon uses the <strong>general line</strong> plus <strong>the line named after its kingdom</strong>. Lines for other kingdoms do nothing.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Line</th><th className="num">2× Rating Reward</th><th className="num">Gear Drop Ascension</th></tr></thead>
          <tbody>
            <tr><td>Dungeon (every dungeon)</td><td className="num">+5%</td><td className="num">+10%</td></tr>
            <tr><td>Verdantglade, Cinder Ridge, Aqualis</td><td className="num">+5%</td><td className="num">+10%</td></tr>
            <tr><td>Loong Haven, Aethyris</td><td className="num">+5% or +10%</td><td className="num">+10% or +20%</td></tr>
            <tr><td>Harpadia, Ignis</td><td className="num">+10%</td><td className="num">+20%</td></tr>
          </tbody>
        </table>
      </div>
      <p>Order of priority:</p>
      <ol>
        <li>Build <strong>a separate farming set</strong>, with the 2× line for the kingdom you are farming on every piece that can roll it.</li>
        <li>Then the general 2× line (+5%).</li>
        <li>Star up the <strong>Lucky Statue</strong> relic if you have it.</li>
        <li>Only keep Ascension lines on pieces with nothing better, and <strong>never put them on combat gear</strong>.</li>
        <li>Always play for the S rank: the bigger the chest, the more 2× is worth.</li>
      </ol>
      <p>Do not worry about a farming set until you are strong enough to wear it and still get an S rank.</p>

      <hr />

      <h3 id="lucky-statue-relic">Lucky Statue relic</h3>
      <p><Img src="guides/lucky-statue.webp" alt="sword x staff lucky-statue" /></p>
      <p>This relic comes from the Grand Treasure Hunt event. It gives <strong>+10% 2× Rating Reward Rate at 0 stars, rising to +40% at 6 stars</strong>, and there is no Ascension version.</p>
      <p>Remember to equip it before your daily runs, then you can take it off afterwards.</p>

      <hr />

      <h3 id="seasonal-upgrades">Astral Pact (seasonal upgrades)</h3>
      <p><Img src="guides/season-upgrade.webp" alt="sword x staff astral pact" /></p>
      <p>Astral Pact is unlocked with Primostar and works in <strong>every dungeon</strong>, stacking with the stats on your gear:</p>
      <ul>
        <li><strong>2× Rating Reward</strong>: +2% at milestone 6 and every 8 milestones after, up to <strong>+50%</strong> at milestone 198.</li>
        <li><strong>Gear Drop Ascension</strong>: +3% at milestone 2 and every 8 milestones after, up to <strong>+75%</strong> at milestone 194.</li>
      </ul>
      <p>See also the Season, Primostar &amp; Astral Pact guide.</p>

      <hr />

      <h2 id="season-end">End of season: save your attempts</h2>
      <p>You can hold up to <strong>4 attempts</strong>. One day before the season ends, stop claiming dungeon rewards. The daily reset adds 2 more, so you enter the new season with <strong>6 attempts</strong>, right when new-season gear is worth the most. Rewards claimed through Reward Retrieval also benefit from both stats above.</p>

    </>
  );
}
