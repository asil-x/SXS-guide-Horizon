import { Link } from 'react-router-dom';
import { Alert, Tip, TierOverview, TierRanking } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Sword x Staff has no single “best” class. Every tier opens a new kingdom and new classes, and <strong>the ranking between the 4 lines changes from tier to tier</strong>. This guide ranks the classes at each stage so you know when your line is strong and when to consider changing class.</p>
      <Alert type="blue" title="How to read it">
        <p>Ranks go <strong>S (top pick) → A (strong) → B (solid) → C (situational)</strong>, comparing classes <strong>within the same tier</strong>. Tap a class to open that exact tier in its build guide.</p>
      </Alert>

      <hr />

      <h2 id="overview">Overview by line</h2>
      <p>Each row is a class line, each column is a tier (with the kingdom it opens).</p>
      <TierOverview />
      <ul>
        <li><strong>The Sorcerer line is the most consistent</strong>: always A from T3 to T6, then S at T7 with Thaumaturge. Pick it if you do not want to change class.</li>
        <li><strong>The Duelist line swings the most</strong>: S at T4 (Conqueror) and T6 (Marauder), but drops to C at T5 (Ravager) and B at T7.</li>
        <li><strong>The Knight line</strong> stays steady at A/B and reaches S at T7 with Vindicator.</li>
        <li><strong>The Sage line</strong> is the weakest early on, with one clear peak at T5 (Prophet) before dropping again.</li>
      </ul>
      <p>Because rankings rotate like this, <Link to="/guides/sword-x-staff-class-change">changing class</Link> (free every 7 days, keeping skill rank and level) is an important tool for always playing a strong class.</p>

      <hr />

      <h2 id="t1-t2">T1–T2: Verdantglade and Cinder Ridge</h2>
      <p>The first two tiers are not ranked: every class is good enough and the game is still easy.</p>
      <TierRanking tier={1} />
      <TierRanking tier={2} />
      <ul>
        <li><strong>Warrior</strong>: Block Rate is surprisingly strong at this stage, making you nearly untouchable in a lot of content.</li>
        <li><strong>Mage</strong>: squishy but with high elemental damage, the Water style with <Tip>Water Assault</Tip> is the most popular.</li>
        <li>At T2, pick your line based on the playstyle you want long term (see the overview), since the lines start to diverge clearly from T3 on.</li>
      </ul>

      <h2 id="t3">T3: Aqualis</h2>
      <p>This tier also unlocks <strong>class change</strong>.</p>
      <TierRanking tier={3} />
      <ul>
        <li><strong>Archmage (A)</strong>: has the best AoE build in the game with the spells unlocked at this tier.</li>
        <li><strong>Berserker (A)</strong>: <Tip>Blade of Judgment</Tip> changes the playstyle completely, more hits means more damage.</li>
        <li><strong>Paladin (B)</strong>: opens a Glass Cannon build for bosses, but Reflect Tank still needs Block investment.</li>
        <li><strong>Arcanist (B)</strong>: the Erosion build becomes usable, while summons are still weak.</li>
      </ul>

      <h2 id="t4">T4: Loong Haven</h2>
      <TierRanking tier={4} />
      <ul>
        <li><strong>Conqueror (S)</strong>: already great at pushing stages, now with <Tip>Tactical Adaptation</Tip> for bosses and armor-piercing passives. Switch to Elemental mastery.</li>
        <li><strong>Destroyer (A)</strong>: <Tip>Thunder of Judgment</Tip> is the strongest single-target damage of the tier, and <Tip>Formation Breaker</Tip> buffs the whole team.</li>
        <li><strong>Guardian (A)</strong>: Knight gains Water damage and a shield loop.</li>
        <li><strong>Dominator (B)</strong>: many variants but no standout style yet.</li>
      </ul>

      <h2 id="t5">T5: Aethyris</h2>
      <TierRanking tier={5} />
      <ul>
        <li><strong>Prophet (S)</strong>: Sage becomes a true healer with <Tip>Radiant Rhythm</Tip> and <Tip>Rejuvenating Elixir</Tip>, while also gaining a debuff-based Dark style.</li>
        <li><strong>Magister (A)</strong>: a whole playstyle built around Electro and Thunder Strike.</li>
        <li><strong>Templar (A)</strong>: a true team-protecting tank, with more Taunt and team-wide damage reduction.</li>
        <li><strong>Ravager (C, rush past)</strong>: <Tip>Solaris Storm</Tip> clears mobs well, but it falls well behind the other classes of the tier. This is when Duelist players often consider a temporary class change.</li>
      </ul>

      <h2 id="t6">T6: Harpadia</h2>
      <TierRanking tier={6} />
      <ul>
        <li><strong>Marauder (S)</strong>: SPD and multi-hit Physical damage, <Tip>Raining Blades</Tip> scales with SPD and <Tip>Sinseal</Tip> is great against bosses.</li>
        <li><strong>Arcanarch (A)</strong>: Tideform with the <Tip>Riptide</Tip> charm, plus Fire Burn and Wind directions.</li>
        <li><strong>Justicar (B)</strong>: two directions, Light Charge stacking and Ice team damage reduction.</li>
        <li><strong>Hierarch (C, rush past)</strong>: the summon style depends heavily on skill order and on summons surviving.</li>
      </ul>

      <h2 id="t7">T7: Ignis</h2>
      <TierRanking tier={7} />
      <ul>
        <li><strong>Thaumaturge (S)</strong>: area Light damage with a huge number of hits (<Tip>Lightning Grid</Tip>), perfect for charms that trigger per hit.</li>
        <li><strong>Vindicator (S)</strong>: a DEF-scaling damage tank, the tankier you are the harder you hit.</li>
        <li><strong>Doomreaver (B)</strong> and <strong>Demiurge (B)</strong>: still play well, but fall behind the two above at this tier.</li>
      </ul>

      <h2 id="t8">T8: Aeperis (upcoming)</h2>
      <TierRanking tier={8} />
      <p>Tier 8 classes launch with Season 6 and require <strong>character level 230, class level 480 and your tier 7 class at level 55</strong>. There is no real ranking yet since the classes are not out; preview their skill sets in each class build guide.</p>

      <hr />

      <h2 id="how-to-use">How to use this tier list</h2>
      <ul>
        <li><strong>Do not change class over a single rank.</strong> The high-rank skills you have invested in matter more than the gap between A and B.</li>
        <li><strong>A “rush past” C rank</strong> means leveling your class to get through that tier quickly, not abandoning the line.</li>
        <li><strong>In groups</strong>: tanks (Knight) and healers (Sage) are always in demand even when ranked lower.</li>
      </ul>

      <p className="source">Rankings follow the Class Tier List of Sword x Staff Compass (swordxstaff-compass.com), updated 2026-11-07. Notes compiled from Guild Horizon’s build guides (sources: Purrwikimania and Compass). Rankings may change after each update.</p>
    </>
  );
}
