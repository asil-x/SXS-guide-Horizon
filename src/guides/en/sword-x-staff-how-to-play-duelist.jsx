import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Duelist keeps the flexibility of the Warrior class while gaining much more damage and mobility, making it <strong>a strong pick for clearing stages with a big power gap compared to other classes</strong>.</p>
      <ProsCons id="pros-cons" title="Duelist strengths & weaknesses">
        <Pro>Excellent mobility while still dealing high damage</Pro>
        <Pro>Death-avoiding passive + lifesteal charms to slip through hard content</Pro>
        <Pro>The best class for clearing stages with a big power gap</Pro>
        <Con>Some techniques need heavy investment to really shine</Con>
        <Con>Melee, so depending on the fight and build your reach can be limited. Enemies can kite you easily</Con>
        <Con>Few element options early on, more unlock in later classes</Con>
      </ProsCons>
      <Alert title="Experiment with builds!">
        <p><strong>Remember this is only a template</strong> for you to adjust to your gear, playstyle, skills and Fantomons.</p>
      </Alert>

      <hr />

      <h2 id="best-stats">Best stats</h2>
      <p>Duelist is pure damage, so its stats are simpler than Sage or Knight, which have more to worry about.</p>
      <p>Prioritize <strong>Physical Mastery</strong> and <strong>Crit Rate/Damage</strong> on gear, they are your biggest damage boosts.</p>
      <p><strong>SPD and ATK</strong> (both flat and %) are still valuable wherever you can fit them.</p>
      <p>Also, <strong>Effect Hit Rate</strong> and <strong>Block Rate</strong> are both on the priority list, the latter helps offset your fragility when clearing stages with a high power gap.</p>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p><strong><Tip>Nyxarchon</Tip> is the best in slot (BiS) for every DPS build.</strong> Pull on the pet banner until you can exchange for it.</p>
      <p>The extra charm slot and higher base stats make Mythic Fantomons stronger in most situations.</p>
      <p>If you pull <Tip>Sylvaerie</Tip> or <Tip>Terragon</Tip>, that is your best option until you get <Tip>Nyxarchon</Tip>.</p>
      <p><Tip>Kels</Tip> is everyone’s BiS for PVP if you care about that mode (and it is free to farm).</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companions give passive stats at certain level milestones, so focus on getting a few companions that directly benefit your class to level 50 first, then level the rest.</p>
      <p><strong>EVERY CLASS benefits from DMG Boost and Reduction</strong> to raise both damage and survivability.</p>
      <p>For Duelist, prioritize companions that give <strong>Attack</strong> and <strong>Accuracy</strong>, and luckily those companions overlap:</p>
      <p><Tip>Akane</Tip>, <Tip>Hermes</Tip>, <Tip>Jiangwang</Tip>, <Tip>Kazuma</Tip> and <Tip>Ophelia</Tip> are great ones to focus on first.</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="Gem tiers">
        <p>I use T10 gems as examples, but <strong>the higher the tier, the better the stats</strong>. Gems go from T1 to T15.</p>
      </Alert>
      <p><Tip>T10 Obsidian</Tip> is good for every class, since everyone needs more damage no matter how they play.</p>
      <p><Tip>T10 Moonstone</Tip> is also popular with every class for extra survivability.</p>
      <p>Duelist also benefits a lot from <Tip>T10 Amethyst</Tip> since it gives SPD and Crit Rate.</p>
      <p>Single-stat gems are still good for filling the rest of your gear, <Tip>T10 Ruby</Tip> and <Tip>T10 Citrine</Tip> are the second-best picks for this class.</p>

      <hr />

      <h2 id="builds">Builds</h2>
      <Tabs big>
        <Tab label="Warrior" icon="skills/classes/warrior.png">
          <p>Early on you are limited by the techniques you have, but Warrior has good options for both AoE and single target right from the start.</p>
          <p><strong>Block Rate is surprisingly strong at this stage</strong>, and investing early makes you nearly untouchable in a lot of content compared to Mage.</p>
          <Tabs>
            <Tab label="AoE">
              <Build
                techniques={[
                  'Leap Attack',
                  'Mountain Collapse',
                  'Gravity Pull',
                  'Whirlwind Slash',
                ]}
                charms={[
                  'Blade of Lament',
                  'Insightful Eye',
                  'Block Awareness',
                  'Blade Tempest',
                ]}
              />
              <p><strong>A strong AoE build that balances damage and survivability.</strong></p>
              <p>Swap <Tip>Blade Tempest</Tip> for <Tip>Strength Rules</Tip> against wind-resistant enemies.</p>
              <p>For easier content, drop <Tip>Gravity Pull</Tip> and <Tip>Blade of Lament</Tip> for more offensive options.</p>
              <p><em>Important: only drop <Tip>Blade of Lament</Tip> if survivability is not an issue.</em></p>
              <p>Block Rate is very strong, but if you lack damage you can swap <Tip>Block Awareness</Tip> for <Tip>Counter Blade</Tip>, especially in melee fights.</p>
            </Tab>
            <Tab label="Single target">
              <Build
                techniques={[
                  'Leap Attack',
                  'Lion Combo',
                  'Quadrant Slash',
                  'Heavy Impact',
                ]}
                charms={[
                  'Blade of Lament',
                  'Insightful Eye',
                  'Block Awareness',
                  'Blade Tempest',
                ]}
              />
              <p><strong>A single-target build focused on consistent damage.</strong></p>
              <p>It shares the same charm set as the AoE build, so it is easy to switch depending on the content you are playing.</p>
              <p>For easier content you can drop <Tip>Blade of Lament</Tip> for a more offensive option.</p>
              <p><em>Important: only drop <Tip>Blade of Lament</Tip> if survivability is not an issue.</em></p>
              <p>Block Rate is very strong, but if you lack damage you can swap <Tip>Block Awareness</Tip> for <Tip>Counter Blade</Tip>, especially in melee fights.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Duelist" icon="skills/classes/duelist.png">
          <p>The new mobility techniques completely change how this class feels, with noticeably better damage options than Warrior.</p>
          <Alert type="red" title="IMPORTANT NOTES">
            <p><strong>Block Rate matters more now</strong>: Without proper investment you will be squishier, so put it on your gear and charms.</p>
            <p><strong>Physical Mastery</strong>: The easiest way to raise damage. Do not skip this stat on gear.</p>
          </Alert>
          <br />
          <Tabs>
            <Tab label="AoE">
              <Build
                techniques={[
                  'Flash Dash',
                  'Gravity Pull',
                  'Flame Aura',
                  'Whirlwind Slash',
                ]}
                charms={[
                  'Insightful Eye',
                  'Block Awareness',
                  'Indomitable Will',
                  'Blade of Lament',
                ]}
              />
              <p><Tip>Flash Dash</Tip> is what sets this build apart from Warrior: great mobility while still dealing damage.</p>
              <p>You can use <Tip>Whirlwind Slash</Tip> or <Tip>Mountain Collapse</Tip>, whichever you have ranked up higher.</p>
              <p>You can swap <Tip>Block Awareness</Tip> for <Tip>Frame of Battles</Tip> depending on how much survival you need.</p>
              <p>For easier content, you can drop both <Tip>Indomitable Will</Tip> and <Tip>Blade of Lament</Tip> and replace them with whichever damage passives you have ranked highest.</p>
            </Tab>
            <Tab label="Single target">
              <Build
                techniques={[
                  'Leap Attack',
                  'Flame Aura',
                  'Heavy Impact',
                  'Darkness Descends',
                ]}
                charms={[
                  'Crit Mastery',
                  'Insightful Eye',
                  'Blade of Lament',
                  'Indomitable Will',
                ]}
              />
              <p><em>Swap <Tip>Flame Aura</Tip> for <Tip>Sunset Sword</Tip> against fire-resistant enemies.</em></p>
              <p>In some situations you can drop <Tip>Blade of Lament</Tip> for <Tip>Block Awareness</Tip>, since lifesteal is fairly negligible in content where you hit hard but not often enough.</p>
              <p>However, if you are clearing stages with a big power gap, the extra HP from <Tip>Blade of Lament</Tip> helps you last longer.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Berserker" icon="skills/classes/berserker.png">
          <p>Berserker deals even more damage and has tools for different playstyles, with more charms enabling a support-DPS style in harder group content coming in future updates.</p>
          <p>You now have more skill and charm options for each kind of content. The suggested builds below are for general content rather than any specific fight, since they are focused enough to handle almost everything without many changes.</p>
          <p>The change in the charm set is the newcomer <Tip>Blade of Judgment</Tip>, which on its own deals huge damage and will be Berserker’s main playstyle.</p>
          <p>Some builds skip it and focus on single big hits with <Tip>Soul Splash</Tip>, and those builds are also included below.</p>
          <p>Lifesteal gets even better with the new <Tip>Blade Siphon</Tip>, which now heals based on max HP every time you crit. This is a far better way to sustain, since you crit most of the time.</p>
          <p>Berserker is all about more hits, more damage, and we will make use of that with everything we have.</p>
          <Alert type="red" title="IMPORTANT NOTES">
            <p><strong>Skill order matters a lot</strong>: The order of skills in your rotation is critical. Using them in the wrong order can lose a lot of DPS.</p>
            <p><Tip>Blade of Judgment</Tip>: This charm fundamentally changes how the class plays. Most builds revolve around keeping it maxed with multi-hit techniques.</p>
            <p><strong> <Tip>Blade Siphon</Tip> </strong>: Now scales with max HP on crit, much better than before. Prioritize ranking it up for sustain builds.</p>
          </Alert>
          <br />
          <Tabs>
            <Tab label="Multi-hit single target">
              <Build
                techniques={[
                  'Doom Blade',
                  'Whirlwind Slash',
                  'Sunset Sword',
                  'Eclipse Slash',
                ]}
                charms={[
                  'Insightful Eye',
                  'Blade of Judgment',
                  'Blade Siphon',
                  'Blazing Clash',
                ]}
              />
              <p><strong>Great for World Bosses and Guild content.</strong></p>
              <p>Techniques focus on many hits to feed <Tip>Blade of Judgment</Tip> constantly, producing huge damage.</p>
              <p><Tip>Blade Siphon</Tip> pairs extremely well here since you crit constantly, giving strong self-sustain in long fights.</p>
            </Tab>
            <Tab label="Single-hit single target">
              <Build
                techniques={[
                  'Doom Blade',
                  'Shattering Sigil',
                  "Asura's Grasp",
                  'Darkness Descends',
                ]}
                charms={[
                  'Insightful Eye',
                  'Crit Mastery',
                  'Soul Splash',
                  'Indomitable Will',
                ]}
              />
              <p>Single-target damage techniques combined with <Tip>Soul Splash</Tip> give very good damage.</p>
              <p><Tip>Crit Mastery</Tip> and <Tip>Insightful Eye</Tip> stack well with the high damage of each technique in this set.</p>
              <p><Tip>Indomitable Will</Tip> acts as your survival layer, since you lose the lifesteal that <Tip>Blade Siphon</Tip> would have provided.</p>
            </Tab>
            <Tab label="Support / sub-DPS">
              <Build
                techniques={[
                  'Gale Dance',
                  "Hunter's Judgment",
                  'Sunset Sword',
                  'Eclipse Slash',
                ]}
                charms={[
                  'Indomitable Will',
                  'Blade Siphon',
                  'Iron Fortress',
                  'Insightful Eye',
                ]}
              />
              <p><strong>Mainly for a sub-DPS / support role in group content.</strong></p>
              <p>You can replace <Tip>Hunter's Judgment</Tip> with <Tip>Flame Aura</Tip>, and <Tip>Sunset Sword</Tip> with <Tip>Mountain Collapse</Tip> if the group needs more crowd control (CC).</p>
              <p>For charms, you can swap <Tip>Iron Fortress</Tip> for <Tip>Blade of Judgment</Tip> if you go the multi-hit route instead of defensive support.</p>
              <p><Tip>Blade Siphon</Tip> keeps you alive in long group fights without needing a healer glued to you.</p>
            </Tab>
            <Tab label="Low-HP pushing">
              <Build
                techniques={[
                  'Boiling Bloodlust',
                  'Whirlwind Slash',
                  'Sunset Sword',
                  'Eclipse Slash',
                ]}
                charms={[
                  'Soulfire Protection',
                  'Frame of Battles',
                  'Desperate Valor',
                  'Blade of Judgment',
                ]}
              />
              <p><strong>Only use this if your charms are already very high level.</strong></p>
              <p>This build relies on low-HP damage scaling, using <Tip>Soulfire Protection</Tip> and <Tip>Frame of Battles</Tip> to keep you alive while <Tip>Desperate Valor</Tip> amplifies damage at low HP.</p>
              <p><Tip>Blade of Judgment</Tip> completes the charm set, keeping your multi-hit chains hitting as hard as possible.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Conqueror" icon="skills/classes/conqueror.png">
          <Alert type="red" title="Important">
            <p></p>
            These are builds I tested myself, together with information and builds from Chinese players.
            <p></p>
            <p><strong>You need to consider your own account progress and skill levels</strong> when building, since everyone is at different levels and tiers. Pick what works for you.</p>
          </Alert>
          <p>Some changes compared to Berserker:</p>
          <ul>
            <li>Elemental mastery matters a lot more, since most of the new skills are elemental.</li>
            <li>You need higher crit rate, enemies have some crit resistance (18%), which means later on you need to push crit rate past the threshold.</li>
            <li>Since many new skills are strong multi-hit elemental skills, Blade of Judgement is no longer the BiS damage passive.</li>
          </ul>
          <p>With skills like <Tip>Tactical Adaptation</Tip> for miniboss/boss fights in dungeons and <Tip>Piercing Assault</Tip> / <Tip>Soul Breaker</Tip> as main damage passives for general content, a class that was already great at pushing stages gets even stronger.</p>
          <details>
            <summary>About pets at Tier 4</summary>
            <p>In general, if you are F2P or a light spender, most of your currency will go to <Tip>Nyxarchon</Tip>, since it is generally the best DPS fantomon.</p>
            <p>However, some builds are actually better with <Tip>Pandarial</Tip>, because it reduces skill cooldowns for every class at the start of battle, similar to the Mage class charm <Tip>Rapid Cast</Tip>.</p>
            <p>Combined with Conqueror’s speed, you get to act first and can take the upper hand.</p>
            <p><Tip>Aegiswing</Tip> can also be used for pushing if your fantomons are at similar levels. Always prioritize getting one to its adult form first, then think about extra pets for specific builds.</p>
          </details>
          <p>Gear priorities also change compared to earlier tiers.</p>
          <p>If you love Blade of Judgement you can still play it, it gets a few new skills and passives. The playstyle is unchanged and still quite strong in most content, but other builds outshine it.</p>
          <p>If you only play this build, keep prioritizing physical mastery lines along with crit rate, crit damage, attack and speed.</p>
          <p><strong>The only change is switching from Physical to Elemental mastery for every other build</strong>, other stats stay the same. Since you can reroll affixes on gear and transfer affixes, everyone will eventually get the pieces they want, even if it takes a while.</p>
          <Tabs>
            <Tab label="Physical">
              <Build
                techniques={[
                  'Whirlwind Slash',
                  'Eclipse Slash',
                  'Sunset Sword',
                  'Blade Storm',
                ]}
                charms={[
                  'Blade of Judgment',
                  'Piercing Assault',
                  'Blade Siphon',
                  'Indomitable Will',
                ]}
              />
              <p><strong>Recommended pet for this build: <Tip>Nyxarchon</Tip> or <Tip>Pandarial</Tip></strong></p>
            </Tab>
            <Tab label="Crucible">
              <Build
                techniques={[
                  'Flame Aura',
                  'Eclipse Slash',
                  'Blade Storm',
                  'Flickering Blade',
                ]}
                charms={[
                  'Blade of Judgment',
                  'Tactical Adaptation',
                  'Crit Mastery',
                  'Blazing Clash',
                ]}
              />
              <p><strong>Recommended pet for this build: <Tip>Pandarial</Tip></strong></p>
            </Tab>
            <Tab label="Push">
              <Build
                techniques={[
                  'Flash Fire',
                  'Darkness Descends',
                  'Flickering Blade',
                  'Blade Storm',
                ]}
                charms={[
                  'Piercing Assault',
                  'Tactical Adaptation',
                  'Soul Breaker',
                  'Indomitable Will',
                ]}
              />
              <p>Charms here change depending on the fight, few enemies = <Tip>Tactical Adaptation</Tip>.</p>
              <p><strong>Recommended pet for this build: <Tip>Nyxarchon</Tip> or <Tip>Pandarial</Tip></strong></p>
            </Tab>
            <Tab label="Push 2.0">
              <Build
                techniques={[
                  'Flash Fire',
                  'Doom Blade',
                  'Soul Piercer',
                  'Flickering Blade',
                ]}
                charms={[
                  'Piercing Assault',
                  'Tactical Adaptation',
                  'Soul Breaker',
                  'Indomitable Will',
                ]}
              />
              <p>Charms here change depending on the fight, few enemies = <Tip>Tactical Adaptation</Tip>.</p>
              <p><strong>Recommended pet for this build: <Tip>Nyxarchon</Tip> or <Tip>Pandarial</Tip></strong></p>
            </Tab>
            <Tab label="Guild Boss">
              <Build
                techniques={[
                  'Doom Blade',
                  'Flame Aura',
                  'Flickering Blade',
                  'Darkness Descends',
                ]}
                charms={[
                  'Crit Mastery',
                  'Blazing Clash',
                  'Tactical Adaptation',
                  'Piercing Assault',
                ]}
              />
              <p><strong>Recommended pet for this build: <Tip>Pandarial</Tip></strong></p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Ravager" icon="skills/classes/ravager.png">
          <p>Ravager opens two new directions for the Duelist line: <strong>AoE Fire damage</strong> with <Tip>Solaris Storm</Tip> and <strong>knock-up combos</strong> with <Tip>Tempest Edge</Tip>.</p>
          <p><Tip>Solaris Storm</Tip> hits 3 times with Fire around you and then once more in a 2-grid circle, and it has Zero Initial CD so it is usable on the first turn. It is the strongest mob-clearing skill Ravager gains.</p>
          <p><Tip>Shadow End</Tip> is notable in content with lots of weak enemies: it teleports to an enemy, and every time it kills a target it recasts itself, up to 4 extra times per turn.</p>
          <p><Tip>Night Curse</Tip> inflicts Blood Source on every enemy within 2 grids. Enemies with Blood Source return 3% of damage taken as HP to <strong>the attacker</strong>, so the whole team gets lifesteal.</p>
          <Alert type="red" title="Important notes">
            <p><strong>Most builds still revolve around multi-hit</strong>: <Tip>Blade of Judgment</Tip> applies Marks per damage instance, so multi-hit techniques like <Tip>Whirlwind Slash</Tip>, <Tip>Sunset Sword</Tip> and <Tip>Solaris Storm</Tip> trigger it very quickly.</p>
            <p><Tip>Tempest Edge</Tip> only triggers when you knock an enemy <strong>from a normal state</strong> into Airborne, so you need <Tip>Hunter's Judgment</Tip> in your skill set.</p>
            <p><Tip>Tactical Adaptation</Tip> helps either way: with few enemies around it raises your damage, and when surrounded it reduces damage taken.</p>
          </Alert>
          <Tabs>
            <Tab label="Stage clearing">
              <Build
                techniques={['Hunter\'s Judgment', 'Solaris Storm', 'Whirlwind Slash', 'Sunset Sword']}
                charms={['Tactical Adaptation', 'Blazing Momentum', 'Tempest Edge', 'Blade of Judgment']}
              />
              <p><strong>Ravager’s main stage-clearing build.</strong> <Tip>Hunter's Judgment</Tip> pulls enemies in front of you and knocks them up, triggering <Tip>Tempest Edge</Tip>, then <Tip>Whirlwind Slash</Tip>, <Tip>Sunset Sword</Tip> and <Tip>Solaris Storm</Tip> hit the whole cluster.</p>
              <p><Tip>Blazing Momentum</Tip> turns every crit into an extra instance of Fire damage spreading 1 grid, so this build needs <strong>high Crit Rate</strong>.</p>
              <p>If you keep dying on hard stages, swap <Tip>Tactical Adaptation</Tip> for <Tip>Indomitable Will</Tip> for an extra life.</p>
            </Tab>
            <Tab label="Single target">
              <Build
                techniques={['Air Break', 'Shattering Dance', 'Eclipse Slash', 'Hunter\'s Judgment']}
                charms={['Dominant Gaze', 'Scarlet Zeal', 'Blade of Judgment', 'Indomitable Will']}
              />
              <p><strong>For bosses and minibosses.</strong> <Tip>Air Break</Tip> opens with Armor Break 2 (30% DEF reduction), then <Tip>Eclipse Slash</Tip> (6 hits) and <Tip>Shattering Dance</Tip> (3 hits, stacking Riven Heart) pile damage into one target.</p>
              <p><Tip>Dominant Gaze</Tip> raises damage against targets above 70% HP, perfect for tanky bosses early in the fight. <Tip>Scarlet Zeal</Tip> adds ATK after every technique, and at 6 stacks greatly raises ATK for 2 turns.</p>
              <p>You can swap <Tip>Hunter's Judgment</Tip> for <Tip>Night Curse</Tip> if the team needs healing from Blood Source.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Marauder" icon="skills/classes/marauder.png">
          <p>Marauder is the tier where <strong>SPD and multi-hit Physical damage</strong> become the focus.</p>
          <p><Tip>Raining Blades</Tip> hits 4 times on a 3×2 area, and every 5% SPD you have over the target adds 5% damage (up to 50%). <Tip>Shadowflash Dance</Tip> unleashes 6 strikes, each teleporting to a random enemy, very strong when enemies are spread out.</p>
          <p><Tip>Sinseal</Tip> is a new bossing tool: it applies a 1-turn Hex Mark, and when it expires the target takes extra True DMG equal to 30% of the damage it took while marked.</p>
          <p>For charms, <Tip>Razor Momentum</Tip> and <Tip>Grim Pursuit</Tip> both trigger per Physical hit, so the more hits the better.</p>
          <Alert type="red" title="Important notes">
            <p><strong>Prioritize SPD</strong>: besides acting earlier, SPD directly increases <Tip>Raining Blades</Tip> damage.</p>
            <p><Tip>Razor Momentum</Tip> stacks up to 20 Razor during the turn, and each Physical hit has an 80% chance to grant 1 stack. A build full of multi-hit techniques maxes it out very quickly.</p>
            <p><Tip>Hellblood Frenzy</Tip> raises damage for the first 3 turns, but afterwards you take <strong>100% more damage</strong> for 3 turns. Only use it in short fights you are sure to finish quickly.</p>
          </Alert>
          <Tabs>
            <Tab label="Stage clearing">
              <Build
                techniques={['Raining Blades', 'Shattering Dance', 'Eclipse Slash', 'Shadowflash Dance']}
                charms={['Indomitable Will', 'Blade of Judgment', 'Grim Pursuit', 'Razor Momentum']}
              />
              <p><strong>Every technique is multi-hit Physical damage</strong>: 4 + 3 + 6 + 6 hits per rotation in total. Every hit can trigger <Tip>Grim Pursuit</Tip> (40% for an extra damage instance), add a <Tip>Razor Momentum</Tip> stack and apply a <Tip>Blade of Judgment</Tip> Mark.</p>
              <p><Tip>Grim Pursuit</Tip> also grows stronger as enemies lose HP (up to +50%), making the build great at finishing.</p>
              <p><Tip>Indomitable Will</Tip> is kept for safety. If you are tanky enough, you can swap it for <Tip>Piercing Assault</Tip> to ignore DEF.</p>
            </Tab>
            <Tab label="Boss">
              <Build
                techniques={['Sinseal', 'Eclipse Slash', 'Shattering Dance', 'Air Break']}
                charms={['Razor Momentum', 'Grim Pursuit', 'Blade of Judgment', 'Ruinblight']}
              />
              <p><strong>Open with <Tip>Sinseal</Tip> and dump all your damage during the marked turn</strong>, since the final True DMG is based on the damage the target takes during that time.</p>
              <p><Tip>Air Break</Tip> inflicts Armor Break 2 and is also a 1-hit technique, so it gets the <Tip>Ruinblight</Tip> damage bonus. <Tip>Ruinblight</Tip> is also 10% stronger for each type of Ailment/Debuff on the target (Armor Break, Riven Heart…).</p>
              <p>Note that <Tip>Sinseal</Tip> has a 3-turn cooldown, so put it first in your skill order.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Doomreaver" icon="skills/classes/compass/class-24.webp">
          <p>Doomreaver shifts the focus to <strong>Fire executes</strong>: teleport to the weakest target and finish it off.</p>
          <p><Tip>Ignition Strike</Tip> teleports next to an enemy within 5 grids, prioritizing the target with the lowest % HP. <Tip>Starfire Annihilation</Tip> deals 20% more damage for every 10% HP the target has lost, up to +200%, and also prioritizes the weakest target.</p>
          <p>For the Physical style, <Tip>Void Slash</Tip> hits 6 times on every enemy within 2 grids of you, the strongest multi-hit AoE technique in the line.</p>
          <p>The new charms lean toward survival: <Tip>Ironclad</Tip> greatly reduces damage taken during the first 2 turns, and <Tip>Shadow Stealth</Tip> heals and grants stealth for 2 turns.</p>
          <Alert type="red" title="Important notes">
            <p><strong>Skill order matters a lot</strong>: use AoE techniques to lower HP first, then <Tip>Starfire Annihilation</Tip> and <Tip>Ignition Strike</Tip> so they finish enemies off.</p>
            <p><Tip>Ironclad</Tip> helps you survive the opening burst, the most dangerous phase for a melee class that has to dive into enemies.</p>
            <p><Tip>Piercing Assault</Tip> ignores an extra 10% DEF for each buff you have (up to 3), so the more buffs you keep up, the stronger it gets.</p>
          </Alert>
          <Tabs>
            <Tab label="Fire execute">
              <Build
                techniques={['Sinseal', 'Hellfire Fist', 'Ignition Strike', 'Starfire Annihilation']}
                charms={['Indomitable Will', 'Piercing Assault', 'Starfire Edge', 'Ironclad']}
              />
              <p><Tip>Hellfire Fist</Tip> lowers the HP of the whole row of enemies in front of you, then <Tip>Starfire Annihilation</Tip> and <Tip>Ignition Strike</Tip> automatically seek out the weakest target to finish. Use <Tip>Sinseal</Tip> on a large target for extra True DMG.</p>
              <p>This build needs <strong>Elemental Mastery</strong> instead of Physical Mastery, since 3/4 techniques deal Fire damage.</p>
              <p>If you lack speed, swap <Tip>Starfire Edge</Tip> for <Tip>Temporal Swiftness</Tip> for more SPD and a chance to reduce cooldowns.</p>
            </Tab>
            <Tab label="Physical AoE">
              <Build
                techniques={['Void Slash', 'Whirling Blades', 'Raining Blades', 'Shadowflash Dance']}
                charms={['Razor Momentum', 'Grim Pursuit', 'Blade of Judgment', 'Ironclad']}
              />
              <p><strong>If you already built Physical gear since Marauder</strong>, this build keeps the same stats and is still strong in mob-heavy content: <Tip>Void Slash</Tip> (6 hits around you) and <Tip>Whirling Blades</Tip> (4 hits in a square area) replace the single-target techniques.</p>
              <p>You can swap <Tip>Blade of Judgment</Tip> for <Tip>Shadow Stealth</Tip> if you need more healing and a way to avoid being targeted.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Infernifer" icon="skills/classes/compass/class-28.webp">
          <Alert type="red" title="Class not released yet">
            <p>Infernifer is this line’s tier 8 class and is <strong>not in the current version yet</strong>. Skill data comes from the game files and may change at launch. The build below is only a preview.</p>
          </Alert>
          <p>Infernifer has two clear toolkits: <strong>Wind Orbs</strong> and <strong>Dark Reaper</strong>.</p>
          <p>Wind Orb direction: <Tip>Tempest Call</Tip> creates 4 Wind Orbs, <Tip>Bladegale Conflux</Tip> has a 50% chance to create 3 more whenever you deal Wind damage, and <Tip>Zephyr Cascade</Tip> makes each Wind Orb strike bounce to another enemy.</p>
          <p>Reaper direction: <Tip>Nethercrown</Tip> puts you in Reaper state for 4 turns (each enemy killed makes it trigger sooner), during which <Tip>Crimson Harvest</Tip> gains 50% Lifesteal and <Tip>Wraith Strike</Tip> deals 50% more damage.</p>
          <Tabs>
            <Tab label="Wind Orb">
              <Build
                techniques={['Sinseal', 'Tempest Call', 'Skyfall Gale', 'Phantom Blitz']}
                charms={['Indomitable Will', 'Windless Lord', 'Bladegale Conflux', 'Zephyr Cascade']}
              />
              <p><Tip>Phantom Blitz</Tip> has a 60% chance to recast if your SPD is higher than the target’s, each hit can create more Wind Orbs through <Tip>Bladegale Conflux</Tip>, and then <Tip>Windless Lord</Tip> multiplies the orbs further.</p>
              <p>You can swap <Tip>Indomitable Will</Tip> for <Tip>Zephyr Battle Zeal</Tip> (each Wind Orb raises Technique damage, up to 10 stacks) if you do not need a second life.</p>
            </Tab>
            <Tab label="Reaper">
              <Build
                techniques={['Crimson Harvest', 'Wraith Strike', 'Shadow Devour', 'Sinseal']}
                charms={['Nethercrown', 'Abyssal Shadowmark', 'Shadow Stealth', 'Shadowward']}
              />
              <p>Every damage technique is Dark to make use of Reaper and <Tip>Abyssal Shadowmark</Tip> (at 2 stacks it explodes into a 1-grid area).</p>
              <p><Tip>Shadow Stealth</Tip> puts you in Stealth at the end of the turn, and <Tip>Shadowward</Tip> reduces damage taken and removes Debuffs while in Stealth, letting the build survive even while diving into enemies.</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
