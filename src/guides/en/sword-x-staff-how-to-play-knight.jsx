import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Knight is the dedicated frontliner of Sword x Staff. Its playstyle revolves around <strong>blocking hits and turning them into counter damage through</strong> <Tip>Rebound</Tip>, and it can switch to a Glass Cannon style for boss fights when someone else is already tanking.</p>
      <ProsCons id="pros-cons" title="Knight strengths & weaknesses">
        <Pro>Rebound is extremely effective against multi-hit enemies and AoE mob packs</Pro>
        <Pro>One of the safest classes for clearing stages with a big power gap, thanks to consistent blocking and layered defenses</Pro>
        <Pro>The Glass Cannon option lets you switch to a DPS build in content where someone else tanks</Pro>
        <Pro>Higher tiers bring lots of ways to protect the team: Taunt, shields for low-HP allies, area damage reduction and taking hits for allies</Pro>
        <Con>Stat priorities are more complicated than for pure DPS classes</Con>
        <Con>Pure tank builds deal damage slowly, since most of it comes from counters and depends on whether enemies hit you</Con>
        <Con>Glass Cannon needs favorable conditions to be safe: a dedicated tank or low-pressure enemies</Con>
      </ProsCons>
      <Alert title="Experiment with builds!">
        <p><strong>Remember this is only a template</strong> for you to adjust to your gear, playstyle, skills and Fantomons.</p>
      </Alert>

      <hr />

      <h2 id="best-stats">Best stats</h2>
      <p>Knight has two different stat priorities, depending on the build you use.</p>
      <p>For Reflect Tank, your damage scales with consistent blocking. <strong>Block %</strong> and <strong>Block Rate</strong> are required for the build to work, while <strong>Physical Mastery</strong> decides how much damage <Tip>Rebound</Tip> reflects back at enemies.</p>
      <p>After that, <strong>Defense %</strong>, <strong>Flat Defense</strong> and elemental resistances keep you alive even longer.</p>
      <p>For the <strong>Glass Cannon</strong> build, stat like any other physical DPS. <strong>Physical Mastery</strong> first, then <strong>Crit Rate</strong> and <strong>Crit Damage</strong>, followed by <strong>Attack %</strong> and <strong>Flat Attack</strong>.</p>
      <p>A few notes that apply to both builds:</p>
      <ul>
        <li>Damage Increase and Damage Reduction are strong stats but mostly come from systems outside gear, so do not chase them on gear</li>
        <li>Elemental Aegis is a strong defensive stat, but it also mostly comes from other systems, so no need to target it on gear</li>
        <li>Effect Hit and Effect Resistance have little value right now and are not worth prioritizing over core stats</li>
        <li>Reflect Tank does not need Crit Resistance. A blocked hit cannot crit, so investing in Block is more efficient</li>
      </ul>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p><Tip>Nyxarchon</Tip> is the best pick for the <strong>Glass Cannon</strong> build thanks to its extra charm slot and higher base stats.</p>
      <p>For a real tank, <Tip>Armopi</Tip> is the default pet, since the extra shield (and DEF buff) is great for any defensive setup. If your pulls are unlucky, <Tip>Boaro</Tip> works as a stopgap until you get <Tip>Armopi</Tip>.</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companions give passive stats at certain level milestones, so focus on getting a few companions that directly benefit your class to level 50 first, then level the rest.</p>
      <p><strong>EVERY CLASS benefits from DMG Boost and Reduction</strong> to raise both damage and survivability.</p>
      <p>For the <strong>Reflect Tank</strong> build, prioritize companions that give <strong>Block Rate</strong> such as <Tip>Braulio</Tip>, <Tip>Darkness</Tip> or <Tip>Mayoi</Tip>.</p>
      <p>For the <strong>Glass Cannon</strong> build, prioritize <strong>Attack</strong> and <strong>Physical Mastery</strong> to keep your damage competitive. <Tip>Akane</Tip>, <Tip>Hermes</Tip>, <Tip>Jiangwang</Tip> and <Tip>Ophelia</Tip> are good choices here.</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="Gem tiers">
        <p>I use T10 gems as examples, but <strong>the higher the tier, the better the stats</strong>. Gems go from T1 to T15.</p>
      </Alert>
      <p><Tip>T10 Obsidian</Tip> is good for every class, since everyone needs more damage no matter how they play.</p>
      <p><Tip>T10 Moonstone</Tip> is also popular with every class for extra survivability.</p>
      <p>For Knight, <Tip>T10 Sapphire</Tip> is a great choice for more DEF, while <Tip>T10 Beryl</Tip> gives extra HP.</p>
      <p>If you go glass cannon, just focus on offensive gems like <Tip>T10 Ruby</Tip> and <Tip>T10 Amethyst</Tip>.</p>

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
        <Tab label="Knight" icon="skills/classes/knight.png">
          <p>Knight brings your new best friend: <Tip>Rebound</Tip>, which turns blocks into counter damage. This is where the class starts working the way it was designed.</p>
          <p>This will also be your main build for most content.</p>
          <Alert type="red" title="IMPORTANT NOTES">
            <p><strong>Group content</strong>: <Tip>Heart of Challenge</Tip> is mandatory for Reflect Tank in parties. Without it you lose control over who is attacking you, and <Tip>Rebound</Tip> triggers less consistently.</p>
            <p><strong>Block Rate is now critical</strong>: Your damage depends on blocking consistently. Invest in it through gear and charms.</p>
            <p><strong>Physical Mastery</strong>: The main way to increase <Tip>Rebound</Tip> counter damage. Do not skip it on gear, even on a tank build.</p>
          </Alert>
          <br />
          <Tabs>
            <Tab label="Reflect Tank">
              <Build
                techniques={[
                  'Luminous Shield',
                  'Valor Surge',
                  'Leap Attack',
                  'Guardian Ring',
                ]}
                charms={[
                  'Block Awareness',
                  'Counter Blade',
                  'Rebound',
                  'Iron Fortress',
                ]}
              />
              <p><strong>Stand firm with consistent blocking, then let <Tip>Rebound</Tip> send that damage back.</strong></p>
              <p>Every block triggers <Tip>Rebound</Tip> once, so this build is especially strong against multi-hit attacks, AoE mob packs and enemies that attack constantly.</p>
              <p>A 5-hit skill will trigger <Tip>Rebound</Tip> 5 separate times.</p>
              <p><strong>Situational swaps:</strong></p>
              <ul>
                <li><Tip>Valor Surge</Tip>: Buff and cleanse. Strong solo and in groups but not required</li>
                <li><Tip>Heart of Challenge</Tip>: Area taunt, mandatory in groups unless you play the glass cannon build</li>
                <li><Tip>Heavy Impact</Tip>: Burst damage for bosses and PvP</li>
                <li><Tip>Whirlwind Slash</Tip>: Extra area DPS</li>
                <li><Tip>Boiling Bloodlust</Tip>: DPS boost, optional</li>
              </ul>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Paladin" icon="skills/classes/paladin.png">
          <p>Advancing to Paladin greatly expands your skill pool and opens up the <strong>Glass Cannon</strong> build, a viable option for boss content.</p>
          <p>Reflect Tank is still the strongest all-round build, but now you can flexibly switch depending on what the fight demands.</p>
          <Alert type="red" title="IMPORTANT NOTES">
            <p><strong>Group content</strong>: <Tip>Heart of Challenge</Tip> is mandatory for Reflect Tank in parties. Without it you lose control over who is attacking you, and <Tip>Rebound</Tip> triggers less consistently.</p>
            <p><strong>When to use Glass Cannon</strong>: Only switch to this build when there is a dedicated tank, or when incoming damage is low enough that survival is not a concern.</p>
          </Alert>
          <br />
          <Tabs>
            <Tab label="Reflect Tank">
              <Build
                techniques={[
                  'Luminous Shield',
                  'Valor Surge',
                  'Leap Attack',
                  'Guardian Ring',
                ]}
                charms={[
                  'Block Awareness',
                  'Block Mastery',
                  'Rebound',
                  'Iron Fortress',
                ]}
              />
              <p><strong>Situational swaps:</strong></p>
              <ul>
                <li><Tip>Valor Surge</Tip>: Buff and cleanse. Strong solo and in groups but not required</li>
                <li><Tip>Heart of Challenge</Tip>: Area taunt, mandatory in groups, replace leap or shield with this skill</li>
                <li><Tip>Desperate Protection</Tip>: Emergency shield, an alternative to <Tip>Guardian Ring</Tip></li>
                <li><Tip>Lunarwater Threads</Tip>: A tool for pulling ranged enemies</li>
                <li><Tip>Star Shattering Slash</Tip> / <Tip>Heavy Impact</Tip>: Burst damage for bosses and PvP</li>
                <li><Tip>Whirlwind Slash</Tip>: Extra area DPS</li>
                <li><Tip>Boiling Bloodlust</Tip>: DPS boost, optional</li>
                <li><Tip>Counter Blade</Tip>: An early alternative to <Tip>Rebound</Tip> that scales with Attack. Can still be used alongside <Tip>Rebound</Tip> in tank-leaning setups</li>
              </ul>
            </Tab>
            <Tab label="Glass Cannon">
              <Build
                techniques={[
                  'Valor Surge',
                  'Leap Attack',
                  'Heavy Impact',
                  'Star Shattering Slash',
                ]}
                charms={[
                  'Strength Rules',
                  'Insightful Eye',
                  'Pursuit of Victory',
                  "Warrior's Essence",
                ]}
              />
              <p><strong>A boss damage build for when survival is not a concern.</strong> Use it when there is a dedicated tank or incoming damage is low enough that you do not need one.</p>
              <p>It focuses entirely on maximizing total damage through buffs and debuffs. In boss fights that measure damage over a fixed number of turns, this build far outperforms Reflect Tank.</p>
              <p><strong>Situational swaps:</strong></p>
              <ul>
                <li><Tip>Boiling Bloodlust</Tip>: DPS boost, optional, stronger at this tier because your base stats are higher</li>
                <li><Tip>Guardian Ring</Tip>: Only worth it if you already have <Tip>Defensive Assault</Tip></li>
                <li><Tip>Defensive Assault</Tip>: Synergizes with <Tip>Guardian Ring</Tip></li>
                <li><Tip>Feline Dance</Tip>: Speed boost for extra turns</li>
                <li><Tip>Blade of Lament</Tip>: Lifesteal if you need a bit more safety</li>
              </ul>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Guardian" icon="skills/classes/guardian.png">
          <p>Guardian is where Knight starts getting <strong>Water damage and a shield loop</strong>: keep a shield up to boost damage, and turn the moment it breaks into a counterattack.</p>
          <p><Tip>Swirling Blade</Tip> converts 20% of damage dealt into a shield (up to 50% Max HP), and <Tip>Seismic Tide</Tip> is a Water AoE hitting 2 grids around you. Together with <Tip>Guardian Ring</Tip>, you will have a shield on almost all the time.</p>
          <p>On the pure tank side, <Tip>Hamper Strike</Tip> taunts from range (a 2-grid area around the chosen grid) and <Tip>Oath of Vigil</Tip> takes 50% of the damage for the lowest-HP allied adventurer.</p>
          <Alert type="red" title="Important notes">
            <p><Tip>Defensive Assault</Tip> only raises ATK <strong>while you have a shield</strong>, so keep <Tip>Guardian Ring</Tip> and <Tip>Swirling Blade</Tip> in your skill set if you use it.</p>
            <p><Tip>Ripple Impact</Tip> triggers when your shield is fully broken: it deals Water damage around you and has a 100% chance to inflict 3 stacks of Cold. A broken shield is no longer a loss but an attack.</p>
            <p><Tip>Holy Aegis</Tip> raises both DEF and shield strength based on DEF, well worth considering if you lean defensive.</p>
          </Alert>
          <Tabs>
            <Tab label="Offensive shield">
              <Build
                techniques={['Guardian Ring', 'Swirling Blade', 'Seismic Tide', 'Star Shattering Slash']}
                charms={['Block Awareness', 'Defensive Assault', 'Ripple Impact', 'Pursuit of Victory']}
              />
              <p><strong>Guardian’s main build.</strong> <Tip>Guardian Ring</Tip> and <Tip>Swirling Blade</Tip> keep a shield up so <Tip>Defensive Assault</Tip> is always active; when the shield breaks, <Tip>Ripple Impact</Tip> counters and inflicts Cold.</p>
              <p><Tip>Pursuit of Victory</Tip> raises damage against enemies with an Ailment/Debuff, and <Tip>Block Awareness</Tip> keeps Block Rate high for consistent blocking like in earlier tiers.</p>
            </Tab>
            <Tab label="Team tank">
              <Build
                techniques={['Hamper Strike', 'Guardian Ring', 'Light Sword Array', 'Raging Maelstrom']}
                charms={['Soul Protection', 'Oath of Vigil', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>Use this in a team when you are the one taking hits.</strong> <Tip>Hamper Strike</Tip> taunts a whole group of enemies, <Tip>Iron Will</Tip> reduces damage from taunted enemies, and <Tip>Raging Maelstrom</Tip> pulls enemies closer.</p>
              <p><Tip>Light Sword Array</Tip> is cast before battle and counters every time you are hit. <Tip>Soul Protection</Tip> turns 50% of your HP into a shield at the start of battle.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Templar" icon="skills/classes/templar.png">
          <p>Templar pushes Knight into a true <strong>team-protecting tank</strong>: more ways to taunt, team-wide damage reduction and turning healing into shields.</p>
          <p><Tip>Last Stand</Tip> moves to a target within 4 grids and taunts it (prioritizing large targets). <Tip>Sanctified Soul</Tip> reduces damage taken for you and every ally within 4 grids for 2 turns, usable right from the first turn.</p>
          <p>On the offensive side, <Tip>Dawnburst</Tip> is a 3-grid Light AoE, while <Tip>First Light</Tip> consumes all your current shield to deal Light damage based on the amount consumed.</p>
          <Alert type="red" title="Important notes">
            <p><Tip>Healing Shift</Tip> converts <strong>all healing</strong> you receive into a shield for 2 turns, and any leftover turns back into HP. Very strong when the team has a healer.</p>
            <p><Tip>Heart of Challenge</Tip> is cast before battle, so enemies are taunted from the very start. Pair it with <Tip>Iron Will</Tip> to reduce their damage.</p>
            <p><Tip>Holy Recuperation</Tip> only triggers on turns where you use <strong>no</strong> technique, so it does not fit tank builds that need to use skills every turn.</p>
          </Alert>
          <Tabs>
            <Tab label="Team tank">
              <Build
                techniques={['Guardian Ring', 'Desperate Protection', 'Heart of Challenge', 'Last Stand']}
                charms={['Healing Shift', 'Soul Protection', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>The main tank build.</strong> <Tip>Heart of Challenge</Tip> and <Tip>Last Stand</Tip> keep enemies on you, <Tip>Guardian Ring</Tip> protects yourself, and <Tip>Desperate Protection</Tip> shields the lowest-HP ally.</p>
              <p>Charms focus entirely on survival. If the team is already safe enough, you can swap <Tip>Soul Protection</Tip> for <Tip>Sanctified Soul</Tip> in a technique slot for team-wide damage reduction.</p>
            </Tab>
            <Tab label="Light counter">
              <Build
                techniques={['Dawnburst', 'Sanctified Soul', 'Guardian Ring', 'First Light']}
                charms={['Rebound', 'Holy Bulwark', 'Holy Restoration', 'Holy Aegis']}
              />
              <p><strong>Use this solo or when the team already has another tank.</strong> <Tip>Guardian Ring</Tip> creates a shield, then <Tip>First Light</Tip> spends it as Light damage. <Tip>Holy Aegis</Tip> makes shields thicker, which means a stronger <Tip>First Light</Tip> too.</p>
              <p><Tip>Holy Bulwark</Tip> boosts the damage of counter skills like <Tip>Rebound</Tip>. <Tip>Holy Restoration</Tip> heals after every 6 Light techniques.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Justicar" icon="skills/classes/justicar.png">
          <p>Justicar expands the toolkit in two directions: <strong>Light Charge stacking</strong> and <strong>Ice team damage reduction</strong>.</p>
          <p><Tip>Radiant Spiritblade</Tip> bounces between up to 5 enemies and gains 50% damage when consuming 5 Charge stacks; <Tip>Skyglow</Tip> grants 2 Charge stacks at the end of each turn, just enough to sustain it. <Tip>Prism Aegis</Tip> counters with DEF-based Light damage whenever you are hit by a technique.</p>
          <p>On the Ice side, <Tip>Ice Shackles</Tip> reduces the damage you and allies within 5 grids take from enemies with Cold, with each Cold stack adding another 20%. <Tip>Phantom Current</Tip> inflicts Cold and pulls enemies within 4 grids closer.</p>
          <p><Tip>Aether Rush</Tip> has a 150% Base Chance to Stun, almost guaranteed to lock down a large target.</p>
          <Alert type="red" title="Important notes">
            <p><Tip>Twin Radiance Shield</Tip> is an upgrade of <Tip>Desperate Protection</Tip>: 5-grid range instead of 3, but it only lasts 2 turns.</p>
            <p><Tip>Sacred Blessing</Tip> reduces damage taken based on the number of Light techniques you equip (up to 3). Only use it when your build has at least 2–3 Light techniques.</p>
            <p><Tip>Tide Sigil</Tip> needs 15 technique hits to counter once, so it is only effective in long fights with many enemies.</p>
          </Alert>
          <Tabs>
            <Tab label="Team tank">
              <Build
                techniques={['Twin Radiance Shield', 'Desperate Protection', 'Heart of Challenge', 'Last Stand']}
                charms={['Healing Shift', 'Soul Protection', 'Iron Will', 'Holy Aegis']}
              />
              <p><strong>Keep Templar’s tank style</strong>, just add <Tip>Twin Radiance Shield</Tip> for two ally-shielding skills. The two shields have different ranges, so they cover distant allies as well.</p>
            </Tab>
            <Tab label="Light">
              <Build
                techniques={['Radiant Spiritblade', 'Prism Aegis', 'Dawnburst', 'Guardian Ring']}
                charms={['Skyglow', 'Sacred Blessing', 'Holy Aegis', 'Soul Protection']}
              />
              <p><Tip>Skyglow</Tip> raises Light damage and grants Charge so <Tip>Radiant Spiritblade</Tip> always gets its extra 50% damage. <Tip>Prism Aegis</Tip> and <Tip>Holy Aegis</Tip> both scale with DEF, so the build stays tanky even while leaning offensive.</p>
            </Tab>
            <Tab label="Ice">
              <Build
                techniques={['Phantom Current', 'Tidal Whirl', 'Swirling Blade', 'Guardian Ring']}
                charms={['Ice Shackles', 'Frigid Glint', 'Ripple Impact', 'Holy Aegis']}
              />
              <p><Tip>Frigid Glint</Tip> has a 100% chance to inflict 1 Cold stack every time a Water technique hits, so Cold stacks up very fast, and each stack makes <Tip>Ice Shackles</Tip> reduce more damage for the whole team.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Vindicator" icon="skills/classes/compass/class-23.webp">
          <p>Vindicator turns Knight into a <strong>DEF-scaling damage tank</strong>: the tankier you are, the harder you hit.</p>
          <p><Tip>Flurry Strike</Tip> hits 3 times in a 3×1 area, and every 5% DEF you have over the target adds 5% damage (up to 50%). <Tip>Warforged Edge</Tip> grows stronger with each use in battle, up to +100%. <Tip>Frost Protection</Tip> creates a shield and inflicts Cold on attackers.</p>
          <p>The new charms have two notable team-protection options: <Tip>Covenant Aegis</Tip> takes damage for an allied adventurer the first time they drop below 40% HP, and <Tip>Iron Solidarity</Tip> grants Solidarity to allies around you before battle.</p>
          <Alert type="red" title="Important notes">
            <p><strong>DEF is the offensive stat</strong> of the main build: it raises <Tip>Flurry Strike</Tip> damage, thickens shields through <Tip>Holy Aegis</Tip> and improves survival.</p>
            <p><Tip>Fortified Shell</Tip> raises DEF for every 10% HP lost (up to 5 stacks), so the more you get hit, the stronger <Tip>Flurry Strike</Tip> becomes.</p>
            <p><Tip>Warforged Edge</Tip> needs time to reach its maximum, so it is strongest in long fights like bosses.</p>
          </Alert>
          <Tabs>
            <Tab label="Offensive DEF">
              <Build
                techniques={['Aether Rush', 'Warforged Edge', 'Flurry Strike', 'Frost Protection']}
                charms={['Soul Protection', 'Holy Aegis', 'Power of Retribution', 'Fortified Shell']}
              />
              <p><Tip>Aether Rush</Tip> locks down large targets, <Tip>Flurry Strike</Tip> and <Tip>Warforged Edge</Tip> deal the main damage, and <Tip>Frost Protection</Tip> keeps a shield up.</p>
              <p><Tip>Power of Retribution</Tip> raises Physical Mastery and can inflict Cripple with every Physical hit.</p>
            </Tab>
            <Tab label="Light Charge">
              <Build
                techniques={['Charged Slash', 'Radiant Roar', 'Radiant Spiritblade', 'Prism Aegis']}
                charms={['Energy Flux', 'Skyglow', 'Sacred Blessing', 'Holy Aegis']}
              />
              <p><Tip>Energy Flux</Tip> grants 14 Charge stacks at the start of battle, and every 2 stacks consumed raises ATK. <Tip>Radiant Roar</Tip> consumes 10 stacks to recast, <Tip>Radiant Spiritblade</Tip> consumes 5 stacks for an extra 50% damage, and <Tip>Charged Slash</Tip> and <Tip>Skyglow</Tip> recharge Charge.</p>
              <p>With 3 Light techniques, <Tip>Sacred Blessing</Tip> is maxed out.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Caelifer" icon="skills/classes/compass/class-27.webp">
          <Alert type="red" title="Class not released yet">
            <p>Caelifer is this line’s tier 8 class and is <strong>not in the current version yet</strong>. Skill data comes from the game files and may change at launch. The build below is only a preview.</p>
          </Alert>
          <p>Caelifer completes Vindicator’s <strong>Light Charge</strong> style: <Tip>Lucent Edge</Tip> gains 1 Charge stack every time it deals damage (hitting more enemies charges faster), and <Tip>Lumen Nova</Tip> consumes all Charge for 7% extra damage per stack.</p>
          <p><Tip>Luminous Restoration</Tip> heals whenever you consume 5 or more Charge stacks at once, so the charge-and-spend loop is also a healing source.</p>
          <p>There is also an Ice direction with <Tip>Vapor Bloom</Tip>, <Tip>Frostcast</Tip> and <Tip>Skyrider Rimefield</Tip>, plus <Tip>Stoneward Prayer</Tip> which shields every ally within 5 grids before battle.</p>
          <Tabs>
            <Tab label="Light Charge">
              <Build
                techniques={['Lucent Edge', 'Charged Slash', 'Radiant Roar', 'Lumen Nova']}
                charms={['Skyglow', 'Fortified Shell', 'Energy Flux', 'Luminous Restoration']}
              />
              <p>Build Charge with <Tip>Lucent Edge</Tip>, <Tip>Charged Slash</Tip>, <Tip>Skyglow</Tip> and <Tip>Energy Flux</Tip>, then unload it with <Tip>Radiant Roar</Tip> and <Tip>Lumen Nova</Tip>. Put <Tip>Lumen Nova</Tip> last in the order to spend the most stacks.</p>
            </Tab>
            <Tab label="Ice">
              <Build
                techniques={['Vapor Bloom', 'Frostcast', 'Phantom Current', 'Frost Protection']}
                charms={['Skyrider Rimefield', 'Frost Domain', 'Ice Shackles', 'Stoneward Prayer']}
              />
              <p><Tip>Frost Domain</Tip> and <Tip>Skyrider Rimefield</Tip> keep stacking Cold on enemies around you, and <Tip>Ice Shackles</Tip> turns those Cold stacks into damage reduction for the whole team.</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
