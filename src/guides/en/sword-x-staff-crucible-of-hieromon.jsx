import { Alert, CrucibleCounter, CrucibleLadder, Hieromon } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>The Crucible of Hieromon is a daily boss fight. It is a <strong>damage race</strong>: your score is the total damage you deal. Each day the game opens one tier, which decides which Hieromon you face and at what level and rank.</p>
      <p>This guide covers all 6 Hieromons from the game data: what element they attack with, what they are weak to, which mechanics to watch out for, and <strong>which techniques from your line to bring</strong> at each tier.</p>

      <hr />

      <h2 id="ladder">Ranks and tiers</h2>
      <p>There are 8 ranks with 84 tiers in total. The higher the rank, the higher the enemy level and the more Hieromons join the rotation.</p>
      <CrucibleLadder />

      <h2 id="rules">General rules for every Hieromon</h2>
      <ul>
        <li><strong>Rank matters more than any stat.</strong> In PvE the game multiplies damage by the rank gap between you and the enemy, both ways. For example, a Champion deals ×15.3 damage to an Expert-rank enemy and takes ÷15.3 from it.</li>
        <li><strong>Hit their weakness.</strong> Storm Griffin, Flamoenix and Yamata no Orochi take 20% more damage from their weak element and 20% less from their own.</li>
        <li><strong>Below 50% HP they rage.</strong> All 6 get stronger (more SPD and damage, some switch their whole skill set) the first time they drop below 50% HP.</li>
        <li><strong>They get tougher as they lose HP.</strong> The Mettle of Trial passive grants 1 stat boost stack for every 5% HP lost, up to 10 stacks. The second half of the fight is always harder than the first.</li>
        <li><strong>Reactive attacks based on damage taken.</strong> Most of them have a passive that unleashes an area attack every time they take 15% of their max HP in cumulative damage. The faster you deal damage, the more often they hit back.</li>
      </ul>

      <hr />

      <h2 id="counter">Technique suggestions by line and tier</h2>
      <p>Pick a Hieromon, your class line and your tier. The list comes from that class’s own skill pool (including skills from earlier tiers of the line), ranked by weakness element, hit count and rarity.</p>
      <CrucibleCounter />
      <Alert title="These are mechanic-based suggestions">
        <p>The list is filtered automatically by each Hieromon’s elements and mechanics, <strong>not a skill set proven by real scores</strong>. Keep your charms and Fantomon from your class build, swap techniques following the suggestions, then compare your scores. Prioritize skills you have ranked up high.</p>
      </Alert>

      <hr />

      <h2 id="hieromons">The 6 Hieromons</h2>

      <Hieromon id={3703}>
        <ul>
          <li><strong>Very fast</strong> (SPD 156%), so it acts more often than you. In exchange its DEF is low (80%), so it takes damage easily.</li>
          <li><strong>Tempestuous Waltz</strong> drops 8 wind orbs around it that explode in a 4-grid area 2 turns later. The orbs are destructible: break some with AoE, or stay away.</li>
          <li><strong>Cyclone Wheel</strong> hits multiple times and knocks back 1 grid, which can throw melee classes out of position.</li>
          <li>When raging, Cyclone Guardian becomes 3 whirlwinds hitting 3 times, and it gains Stellar Descent (24 star rays).</li>
        </ul>
      </Hieromon>

      <Hieromon id={3704}>
        <ul>
          <li><strong>Life Siphon:</strong> starts the fight with 20 lifesteal stacks, gains 10 more at the end of each turn, and <strong>loses 1 stack every time it takes technique damage</strong>. Keep hitting it with multi-hit techniques to keep the stacks low, otherwise it heals back.</li>
          <li><strong>Trial by Fire:</strong> burns anyone who steps within 1 grid of it, and also triggers at the start of every turn. Do not stand next to it unless you are tanky enough.</li>
          <li>It has the highest ATK of the 6 (165%). Healers and shields are very valuable here.</li>
        </ul>
      </Hieromon>

      <Hieromon id={3705}>
        <ul>
          <li><strong>Snake Fang:</strong> every technique has a 60% chance to apply a 3-turn Water poison that <strong>stacks</strong>. Cleanse skills (like Sage’s <strong>Healing Touch</strong>) are well worth bringing.</li>
          <li><strong>Hyakki Yagyo</strong> summons 4 Fishlings in front of it for 5 turns. AoE clears the Fishlings while still hitting the boss.</li>
          <li>When raging: Orochi Frenzy hits everyone within 5 grids 3 times, and Crashing Waves hits twice within 6 grids. There is almost nowhere to hide.</li>
        </ul>
      </Hieromon>

      <Hieromon id={3706}>
        <ul>
          <li><strong>No elemental weakness</strong>, so pick techniques for raw damage.</li>
          <li><strong>Loong Ward:</strong> a 50% chance to counter with Light damage every time it is hit. Builds with too many hits eat counters constantly. Prefer fewer but stronger hits.</li>
          <li>Below 50% HP it enters <strong>Primal Awakening</strong>, turning all its Fire attacks into Light. <strong>Loong's Fury</strong> hits 5 times and deals up to 50% more based on how much HP you have lost, so staying at full HP matters.</li>
          <li>Innate Luck gives it a random +10% ATK, DEF or SPD every turn.</li>
        </ul>
      </Hieromon>

      <Hieromon id={3707}>
        <ul>
          <li><strong>Field Guard:</strong> starts the fight with 50 damage reduction stacks and <strong>loses 1 stack every time it takes technique damage</strong>. Open with multi-hit techniques to strip the stacks as early as possible.</li>
          <li><strong>Void Singularity</strong> pulls everyone within 5 grids next to it, then Skyrending Particle Beam hits 3 times in a 5×6 area in front of it.</li>
          <li>Below 50% HP it enters <strong>Rampage Reboot</strong> with a Light skill set: it inflicts Starblight stacking up to 10 (cannot be dispelled), and <strong>Cosmic Endfall hits all enemies 10 times</strong>. Bring healing or shields for this phase.</li>
        </ul>
      </Hieromon>

      <Hieromon id={3708}>
        <ul>
          <li><strong>Element Shift:</strong> it starts in Frostchill form (Water attacks that can Freeze). After taking enough <strong>Fire</strong> technique damage it switches to <strong>Blazing</strong> form: Crimson Blaze hits 6 times with Fire and Hellfire Purge boosts its crit. Taking enough Water damage switches it back to Frostchill.</li>
          <li>Blazing form is more dangerous, so <strong>avoid stacking Fire techniques</strong>. Wind, Light, Dark, Physical (and Water) are all safer.</li>
          <li>Dual Surge adds Inferno / Tideform stacks (up to 100) whenever a Fire / Water technique is cast. The game text does not say what the stacks do, so treat this only as one more reason to limit Fire.</li>
        </ul>
      </Hieromon>

    </>
  );
}
