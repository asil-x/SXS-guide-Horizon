import { Link } from 'react-router-dom';
import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Fantomons are pets that give passive stats and can fight alongside you. They unlock at <strong>account level 50</strong> through the big tree in your home.</p>
      <p>You can check the <Link to="/db/fantomons">Fantomon database</Link> here if you want the full list of pets in the game and which ones are best.</p>
      <p><Img src="guides/fantomon-gacha.webp" alt="sword x staff fantomon gacha" /></p>

      <hr />

      <h2 id="obtaining">How to get them</h2>
      <p><Img src="guides/fantomon-rates.webp" alt="sword x staff fantomon-rates" /></p>
      <p>Fantomons are summoned from the tree in your home. Quick summary:</p>
      <ul>
        <li>Base rate 0.8% for SSR fantomons, 5% for SR</li>
        <li>At least 1 <Tip>Summon Crystal</Tip> every 10 summons</li>
        <li><strong>60 Summon Crystals</strong> to exchange for a Mythic fantomon in the shop</li>
      </ul>
      <p>The shop only has <strong>two Mythic fantomons</strong>: <Tip>Aegiswing</Tip> and <Tip>Nyxarchon</Tip>. Both cost 60 <Tip>Summon Crystal</Tip> each.</p>
      <p>There is also a random SSR Fantomon each week for 18 <Tip>Summon Crystal</Tip>, but you should save for the Mythic ones since they are much stronger.</p>
      <h3 id="arena-shop-exclusive">Arena shop exclusive</h3>
      <p><Img src="guides/kels-shards.webp" alt="sword x staff kels-shards" /></p>
      <p><strong><Tip>Kels</Tip></strong> cannot be summoned from the tree. It is only sold in the arena shop, so keep an eye on your Arena currency.</p>

      <hr />

      <h2 id="deployment">Deployment</h2>
      <p><Img src="guides/pet-stats.webp" alt="sword x staff pet-stats" /></p>
      <p>You have 4 deployment slots, but <strong>every Fantomon you own gives stats</strong>, just at different rates:</p>
      <table className="data-table">
        <tbody>
          <tr><td>Main (1 slot)</td><td>100%</td></tr>
          <tr><td>Secondary (3 slots)</td><td>50% each</td></tr>
          <tr><td>The rest of your collection</td><td>20% each</td></tr>
        </tbody>
      </table>
      <p>Always put your rarest fantomon (Mythic first, then Legendary) in the main slot to maximize stats.</p>
      <p>The fantomon you bring into battle does NOT need to be the one in the main stat slot. <strong>Main Fantomon ≠ Battle Fantomon</strong>.</p>

      <hr />

      <h2 id="leveling">Leveling</h2>
      <h3 id="treats">Treats</h3>
      <p><Img src="guides/pet-treats.webp" alt="sword x staff pet-treats" /></p>
      <p>Leveling fantomons takes <Tip>Basic Treats</Tip>, which you can get from:</p>
      <ul>
        <li>The cart’s idle rewards</li>
        <li>The daily cart shop (with <Tip>Rolla</Tip>)</li>
        <li>Plants and livestock in the guild shop</li>
      </ul>
      <Alert title="Fantomon Resonance">
        <p>The lowest level among your 4 deployed fantomons becomes the resonance level. If your 4 deployed fantomons have a lowest level of 127, every other fantomon you own also counts as level 127.</p>
        <p><strong>Keep your 4 deployed fantomons at the same level to maximize the stats you get.</strong></p>
      </Alert>
      <h3 id="aptitude">Aptitude</h3>
      <p><Img src="guides/pet-aptitude.webp" alt="sword x staff pet-aptitude" /></p>
      <p>Basically a stat skill tree for each fantomon (and for you). A few things to remember:</p>
      <ul>
        <li>Only invest in your <strong>4 deployed fantomons</strong> since materials are limited</li>
        <li>You can reset aptitude if you want to change your deployed fantomons</li>
      </ul>

      <hr />

      <h2 id="evolution">Evolution</h2>
      <p>Evolution unlocks a fantomon’s <strong>Materialization form</strong>, which activates in battle and unlocks a new <em>(active)</em> skill.</p>
      <h3 id="requirements-to-evolve">Requirements to evolve</h3>
      <ul>
        <li>Reach <strong>level 108</strong> and unlock Nimbuville</li>
        <li>The fantomon must be <strong>Mythic rarity</strong> (you need a duplicate to get there)</li>
      </ul>
      <h3 id="how-materialization-works">How Materialization works</h3>
      <p>The energy ring around the fantomon icon fills up during battle. When it is full, the fantomon materializes in its evolved form. If it is defeated, the energy resets to 0.</p>
      <p>While not materialized, only its <strong>support skills</strong> work. Once materialized, only its <strong>combat skills</strong> trigger, until the fantomon is defeated and returns to support form.</p>
    </>
  );
}
