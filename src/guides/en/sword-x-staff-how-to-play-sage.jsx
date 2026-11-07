import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>When I started playing Sword x Staff on the Chinese server, I picked a support character since that is the playstyle I enjoy in MMOs.</p>
      <p>Interestingly, Sage is not just a support, <strong>it also has the most varied builds in the game</strong>, so let’s look at a few PVE builds you can use with this class.</p>
      <ProsCons id="pros-cons" title="Sage strengths & weaknesses">
        <Pro>The most flexible class thanks to its many different playstyles</Pro>
        <Pro>The only class with multiple sources of healing and revival, very useful for unlocking harder dungeon floors</Pro>
        <Pro>The high-tier summoner style lets summons both take hits and deal damage for you, very safe when playing solo</Pro>
        <Con>Even though it scales with HP, it is still a squishy class like Sorcerer and cannot tank high-level co-op content</Con>
        <Con>Some playstyles take over a month to unlock, since the Summoner and Erosion builds only fully open at T3</Con>
        <Con>Summon builds depend heavily on skill order: many summon skills can only be used once per battle, so a wrong order throws off the whole fight</Con>
      </ProsCons>
      <Alert title="Experiment with builds!">
        <p><strong>Remember this is only a template</strong> for you to adjust to your gear, playstyle, skills and Fantomons.</p>
      </Alert>

      <hr />

      <h2 id="best-stats">Best stats</h2>
      <p>Since Sage has many ways to play, there are also many ways to pick stats and gear.</p>
      <p><strong>For support</strong>: Max HP comes first if you want to be a competitive healer. <em>ALL HEALING SCALES WITH THE CASTER’S MAX HP</em>, so you must focus on this stat first.</p>
      <p><strong>For DoT damage</strong>: Erosion is a debuff, so you need Effect Hit Rate to always apply as many stacks as possible on enemies. Crit DMG/Rate is also great for even more damage.</p>
      <p><strong>For summons</strong>: They inherit part of your stats, so focus on Elemental Mastery, Crit Rate/Damage, ATK and SPD.</p>
      <p><em>Erosion is also Dark damage</em>, so do not forget ATK and Elemental Mastery when picking substats to raise damage properly.</p>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p>For Sage, focus on <Tip>Aegiswing</Tip> for the survivability and healing it brings in high-difficulty content.</p>
      <p><Tip>Mandragora</Tip> is a good choice until you have enough currency to exchange for <Tip>Aegiswing</Tip>, or for extra healing when your own safety is not a concern (currently only guild expeditions).</p>
      <p>It also works in low-level dungeons, but there extra damage is the better pick.</p>
      <p>If you plan to save resources, the other Mythic pets will not come out for a while:</p>
      <ul>
        <li><Tip>Pandarial</Tip> (mainly for DPS Sage) comes out at the end of Season 2</li>
        <li><Tip>Prismora</Tip> (a pure healing pet) comes out in the middle of Season 3</li>
      </ul>
      <p>Work out from your server’s launch date whether it is worth saving for one of them, since each season lasts about 2 months.</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companions give passive stats at certain level milestones, so focus on getting a few companions that directly benefit your class to level 50 first, then level the rest.</p>
      <p><strong>EVERY CLASS benefits from DMG Boost and Reduction</strong> to raise both damage and survivability.</p>
      <p>For healers, <Tip>Aqua</Tip>, <Tip>Suimo</Tip> and <Tip>Suzu</Tip> all raise Healing Boost% at level 100.</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="Gem tiers">
        <p>I use T10 gems as examples, but <strong>the higher the tier, the better the stats</strong>. Gems go from T1 to T15.</p>
      </Alert>
      <p>Sage has a few options:</p>
      <p><Tip>T10 Obsidian</Tip> is good for every class, since everyone needs more damage no matter how they play.</p>
      <p><Tip>T10 Moonstone</Tip> is also popular with every class for extra survivability.</p>
      <p>If you are a healer, <Tip>T10 Amber</Tip> and <Tip>T10 Beryl</Tip> are the best picks since they raise both HP and Healing.</p>
      <p>Summoner and Erosion builds can use <Tip>T10 Obsidian</Tip> or the less common <Tip>T10 Ruby</Tip>.</p>

      <hr />

      <h2 id="builds">Builds</h2>
      <Tabs big>
        <Tab label="Mage" icon="skills/classes/mage.png">
          <p>Early on there are not many builds since you are limited by the spells you have.</p>
          <p><strong>Most people will play an elemental damage build at this stage</strong>, with water being the most popular thanks to <Tip>Water Assault</Tip> and <Tip>Water to Ice</Tip>.</p>
          <p>Summoner is very weak this early, wait until at least T2.</p>
          <Tabs>
            <Tab label="AoE">
              <Build
                techniques={[
                  'Water Assault',
                  "Wind's Delight",
                  'Water Shot',
                  'Fireball',
                ]}
                charms={[
                  'Water to Ice',
                  'Mana Surge',
                  'Unstable Aura',
                  'Elemental Mystery',
                ]}
              />
              <p>A squishy build but with the highest damage in most situations.</p>
              <p>I got very good results using both <Tip>Fireball</Tip> and <Tip>Water Shot</Tip> (I used to use <Tip>Blazing Fire Ring</Tip>).</p>
              <p>The other spells synergize very well with <Tip>Unstable Aura</Tip> since they are all AoE or multi-projectile.</p>
              <p><Tip>Mana Surge</Tip> makes the build deal much more damage, but if you keep dying you can swap it for <Tip>Gale Shield</Tip>.</p>
            </Tab>
            <Tab label="Single target">
              <Build
                techniques={[
                  'Tempest Sphere',
                  "Wind's Delight",
                  'Flame Jet',
                  'Water Shot',
                ]}
                charms={[
                  'Unstable Aura',
                  'Mana Surge',
                  'Elemental Mystery',
                  'Gale Shield',
                ]}
              />
              <p>Single-target damage is very good thanks to the many projectiles and damage instances that can trigger <Tip>Unstable Aura</Tip>.</p>
              <p>Even skills with “reduced” damage when hitting the same target work very well here, since there are so many chances for <Tip>Unstable Aura</Tip> to deal extra damage and make up for it.</p>
              <p><Tip>Water Shot</Tip> can actually be replaced by any spell, single target or multi-projectile, for extra damage.</p>
            </Tab>
            <Tab label="Freeze">
              <Build
                techniques={[
                  'Water Assault',
                  'Water Shot',
                  'Ice Spike',
                ]}
                charms={[
                  'Unstable Aura',
                  'Mana Surge',
                  "Dew's Blessing",
                  'Water to Ice',
                ]}
              />
              <p>Great for freezing bosses (making them lose turns, and once their stamina bar is depleted they take extra damage).</p>
              <p>The last spell depends on the boss, good options are <Tip>Flame Jet</Tip> or any multi-projectile wind spell like <Tip>Tempest Sphere</Tip>.</p>
              <p>We still use <Tip>Unstable Aura</Tip> since at tier 1 it is one of the strongest passives, combined with <Tip>Mana Surge</Tip> to rely less on crit luck.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Sage" icon="skills/classes/sage.png">
          <p><strong>This is when many new builds finally open up.</strong></p>
          <p>You can go full support, switch to summoner, or go debuff and Dark damage. You can also combine them all into a hybrid style.</p>
          <p>The problem is you do not have full skill sets for each direction yet, so I recommend playing hybrid until Tier 3.</p>
          <Tabs>
            <Tab label="Erosion (DoT)">
              <Build
                techniques={[
                  'Dark Bullet',
                  'Shadow Impact',
                  'Weakening Hex',
                  'Flame Wolf Summon',
                ]}
                charms={[
                  'Shadow Erosion',
                  'Soul Impact',
                  'Insight',
                  'Elemental Mystery',
                ]}
              />
              <p>Since you cannot go full Erosion or summoner yet, the best build I found for Tier 2 is a hybrid combining Dark damage with <Tip>Flame Wolf Summon</Tip>.</p>
              <p>The focus is still Dark damage, using both <Tip>Shadow Erosion</Tip> and <Tip>Soul Impact</Tip>, so make sure you have enough Effect Hit Rate to apply Erosion consistently.</p>
              <p>If you struggle to survive, you can swap in <Tip>Gale Shield</Tip> and drop <Tip>Insight</Tip> or <Tip>Elemental Mystery</Tip>.</p>
            </Tab>
            <Tab label="Support">
              <Build
                techniques={[
                  'Healing Touch',
                  'Void Blessing',
                  'Radiant Restoration',
                  'Iron Thorn',
                ]}
                charms={[
                  'Healing Mastery',
                  'Resurrection',
                  'Tough Soul',
                  'Gale Shield',
                ]}
              />
              <p>Now you start feeling like a real healer. <Tip>Radiant Restoration</Tip> will be your main skill for a while if you play this way, so stack as much HP as you can.</p>
              <p>We also unlock two strong healer charms, <Tip>Resurrection</Tip> and <Tip>Healing Mastery</Tip>.</p>
              <p>We use <Tip>Iron Thorn</Tip> to support the team better with its Immobilize debuff, but you can swap it for another spell if you want more damage.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Arcanist" icon="skills/classes/arcanist.png">
          <Alert type="red" title="What about summons?">
            <p>Summon spells are not very strong even at Tier 3, so a pure summon build is not recommended.</p>
            <p>If you like summons, <strong>make a hybrid build following the suggestions below</strong>.</p>
          </Alert>
          <p><strong>Here builds become more “pure” since you can now go fully into one direction</strong>, or you can keep a hybrid build.</p>
          <Tabs>
            <Tab label="Erosion (DoT)">
              <Build
                techniques={[
                  'Mana Blast',
                  'Abyssal Hand',
                  'Dark Bullet',
                  'Shadow of Termination',
                ]}
                charms={[
                  'Shadow Erosion',
                  'Linked Misfortune',
                  'Shadow Vengeance',
                  "Night's Blessing",
                ]}
              />
              <p>The T3 Erosion build is quite good and deals solid damage. You can go full AoE or aim for single-target damage.</p>
              <p><Tip>Linked Misfortune</Tip> and <Tip>Night's Blessing</Tip> raise damage, while <Tip>Shadow Vengeance</Tip> lets you dodge death for 1 turn and deal huge damage before going down.</p>
              <p><strong>Make sure <Tip>Shadow of Termination</Tip> is always used last</strong>, since you want to stack as much Erosion as possible before using it.</p>
              <p>Even at T3, <Tip>Mana Surge</Tip> is still worth using if your gear substats are not great yet.</p>
              <hr />
              <p><strong>The 4th technique slot is flexible.</strong> For single target keep <Tip>Dark Bullet</Tip> (still a good pick until later tiers).</p>
              <p><strong>AoE</strong>: You can use <Tip>Weakening Hex</Tip> or <Tip>Shadow Impact</Tip>, both are good.</p>
            </Tab>
            <Tab label="Support">
              <Build
                techniques={[
                  'Healing Touch',
                  'Void Blessing',
                  'Radiant Restoration',
                  'Waterling Summon',
                ]}
                charms={[
                  'Healing Mastery',
                  'Resurrection',
                  'Shadow Vengeance',
                  'Overhealing',
                ]}
              />
              <p>The new summon <Tip>Waterling Summon</Tip> has two healing skills for allies, and the new passive <Tip>Overhealing</Tip> raises healing significantly.</p>
              <p>You can replace <Tip>Healing Touch</Tip> with <Tip>Frenzy Totem</Tip> but you will lose one of your only two healing skills.</p>
              <p>Also note that running 4 support charms means you have no <Tip>Gale Shield</Tip> or any defensive mechanic while your skills are on cooldown.</p>
              <p>To fix that, we use <Tip>Shadow Vengeance</Tip> as a “last resort”: it resets all cooldowns and lets you heal once more / summon a Waterling, then you die (summons stay even after you die).</p>
              <p><strong>Unless you are with 3 friends, use a hybrid build instead of</strong> full support like the build above (4 non-damaging Techniques).</p>
            </Tab>
            <Tab label="Booster">
              <Build
                techniques={[
                  'Healing Touch',
                  'Frenzy Totem',
                  'Weakening Hex',
                  'Dark Bullet',
                ]}
                charms={[
                  'Healing Mastery',
                  'Shadow Erosion',
                  'Insight',
                  'Overhealing',
                ]}
              />
              <p>You can use this build to boost party damage in events that score each player’s damage separately, but the buffs still apply in groups, helping your friends reach higher scores.</p>
              <p><Tip>Frenzy Totem</Tip> and <Tip>Weakening Hex</Tip> do most of the work here, and you should use a Fantomon like <Tip>Chomusuke</Tip> or <Tip>Nyxarchon</Tip> that can lower enemy defense.</p>
              <p>Charms are not too important here, so you can use <Tip>Insight</Tip> to make debuffs land more easily, along with a few healing charms.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Dominator" icon="skills/classes/dominator.png">
          <Alert type="red" title="Note">
            <p>All testing was done on a nearly F2P account with its own charm &amp; technique rarities, so your situation and results may differ.</p>
          </Alert>
          <p>In most situations, except pure support builds, the two erosion passives ( <Tip>Shadow Erosion</Tip> and <Tip>Linked Misfortune</Tip>) are still mandatory, leaving only two charm slots.</p>
          <details>
            <summary>Charm damage comparison</summary>
            <p>For reference, this was tested on a single-target boss, difficulty 2/3:</p>
            <ul>
              <li><Tip>Soul Pact Resonance</Tip> 100%</li>
              <li><Tip>Mantra of Blessings</Tip> 83.4%</li>
              <li><Tip>Mana Surge</Tip> 78.4%</li>
              <li><Tip>Night's Blessing</Tip> 78.1%</li>
              <li><Tip>Falling Dark Star</Tip> 76.4%</li>
            </ul>
            <hr />
            <p><Tip>Soul Pact Resonance</Tip> clearly wins, but it needs a summon on the field at all times, so it has two drawbacks:</p>
            <ol>
              <li>You lose a dark damage spell for it, but the damage gain slightly exceeds the loss at low rank and clearly exceeds it at high rank</li>
              <li>It is only viable in stages where the summon survives, depending on stage difficulty, whether enemies have AoE attacks and the summon’s HP (your skill rank investment)</li>
            </ol>
            <p><Tip>Mantra of Blessings</Tip> comes second, but it has its own drawbacks:</p>
            <ol>
              <li>It only applies to the player with the highest ATK on the field, which is not a big problem since you still contribute damage to clear the stage, unless the highest-ATK player in the team is a healer/tank.</li>
              <li>Only the highest-rank copy of <Tip>Mantra of Blessings</Tip> applies, so if two Sages bring it, one slot is wasted.</li>
            </ol>
            <p>These drawbacks do not apply when playing solo, since you are always the highest-ATK player.</p>
            <p><Tip>Mana Surge</Tip> and <Tip>Night's Blessing</Tip> follow right behind, the difference between them is within the margin of error.</p>
            <p><Tip>Falling Dark Star</Tip> seems to follow closely, but only by the median: it has the biggest luck variance of all the options.</p>
            <p>Its highest damage matches <Tip>Mana Surge</Tip> and <Tip>Night's Blessing</Tip>, its median is only slightly lower, but its lowest is terrible.</p>
            <p>Still, it can be a decent choice for a competitive whale Dominator (who really should have moved to Conqueror already) for the SPD advantage of acting first 33% of the time (the other two options are good enough too).</p>
            <hr />
            <p>At this tier we also have <Tip>Aberrancy</Tip>, a purely defensive option with no place in Arena burst builds or single-target builds (since <Tip>Shadow of Termination</Tip> clears all erosion stacks on enemies), but it can be a decent pick for AoE situations and Tournament.</p>
          </details>
          <p>Every damage build on the list benefits from <Tip>Nyxarchon</Tip> (or <Tip>Pandarial</Tip> at the end of this season), so if you picked it over <Tip>Aegiswing</Tip>, go ahead and use it.</p>
          <p>In dungeons, your team can clear more easily if you bring <Tip>Resurrection</Tip> as one charm, though your personal damage will drop.</p>
          <p>You have to decide what matters more to you: clearing dungeons with an S rank more consistently, or ranking higher on the damage board while clearing with an A rank.</p>
          <Tabs>
            <Tab label="ST">
              <p>There are a few situational single-target builds. The first is Treantling Soul Pact:</p>
              <Build
                techniques={[
                  'Treantling Summon',
                  'Dark Starburst',
                  'Dark Bullet',
                  'Shadow of Termination',
                ]}
                charms={[
                  'Linked Misfortune',
                  'Shadow Erosion',
                  'Mantra of Blessings',
                  'Soul Pact Resonance',
                ]}
              />
              <p>As mentioned, this build is only viable in stages where the Treantling survives the whole time.</p>
              <p>The Treantling goes in the first slot and <Tip>Shadow of Termination</Tip> in the last, for obvious reasons.</p>
              <p><strong>Do not waste Mantra of Blessing.</strong></p>
              <p>Swapping the Treantling for a Waterling drops damage to the level of a build without Soul Pact, while healing is almost nonexistent unless you sacrifice more damage for Healing Bonus %.</p>
              <p>The second is a pure erosion build for stages where <Tip>Soul Pact Resonance</Tip> cannot be kept up 100% of the time.</p>
              <Build
                techniques={[
                  'Mana Blast',
                  'Dark Starburst',
                  'Dark Bullet',
                  'Shadow of Termination',
                ]}
                charms={[
                  'Linked Misfortune',
                  'Shadow Erosion',
                  'Mantra of Blessings',
                  "Night's Blessing",
                ]}
              />
              <p>A small variant is replacing <Tip>Night's Blessing</Tip> with <Tip>Shadow Vengeance</Tip>, if you just need a final push to clear the stage.</p>
            </Tab>
            <Tab label="AoE">
              <Build
                techniques={[
                  'Mana Blast',
                  'Dark Starburst',
                  'Dark Bullet',
                  'Shadow Impact',
                ]}
                charms={[
                  'Linked Misfortune',
                  'Shadow Erosion',
                  'Mantra of Blessings',
                  'Aberrancy',
                ]}
              />
              <p>For AoE fights, Dominator can use the familiar Erosion build, just with a few new charms to choose from.</p>
              <p>Applying debuffs over an area lets you use <Tip>Aberrancy</Tip> for a bit more survivability.</p>
            </Tab>
            <Tab label="Healer">
              <p>Healing builds have the most variants. As a baseline, take a pure healing build with <Tip>Mantra of Blessings</Tip>:</p>
              <Build
                techniques={[
                  'Void Blessing',
                  'Radiant Restoration',
                  'Healing Touch',
                  'Rejuvenating Rain',
                ]}
                charms={[
                  'Phantom Light',
                  'Healing Mastery',
                  'Overhealing',
                  'Mantra of Blessings',
                ]}
              />
              <p>The two Healing Bonus % charms are only worth considering early on, and the later in the season (and the more Healing Bonus % on your gear), the lower their priority.</p>
              <p>If you are the highest-ATK player in the team (or someone else brings <Tip>Mantra of Blessings</Tip>), consider swapping <Tip>Mantra of Blessings</Tip> for <Tip>Resurrection</Tip> or even <Tip>Falling Dark Star</Tip>, which raises healing 67% of the time.</p>
              <p>If the team struggles to survive: swap <Tip>Mantra of Blessings</Tip> for <Tip>Resurrection</Tip>.</p>
              <p>If you need more healing in fast stages where the team kills enemies too quickly: swap <Tip>Healing Touch</Tip> for <Tip>Waterling Summon</Tip>, which heals less but has a starting cooldown of 0.</p>
              <p>If you yourself struggle to survive: swap <Tip>Mandragora</Tip> for <Tip>Aegiswing</Tip>, and if that is still not enough, <Tip>Mantra of Blessings</Tip> for <Tip>Shadow Vengeance</Tip>.</p>
              <p>After all those changes, the final build might look like this:</p>
              <Build
                techniques={[
                  'Void Blessing',
                  'Radiant Restoration',
                  'Healing Touch',
                  'Rejuvenating Rain',
                ]}
                charms={[
                  'Phantom Light',
                  'Healing Mastery',
                  'Shadow Vengeance',
                  'Resurrection',
                ]}
              />
            </Tab>
            <Tab label="Solo PVP">
              <Build
                techniques={[
                  'Abyssal Hand',
                  'Dark Starburst',
                  'Dark Bullet',
                  'Shadow of Termination',
                ]}
                charms={[
                  'Linked Misfortune',
                  'Shadow Erosion',
                  'Mantra of Blessings',
                  'Shadow Vengeance',
                ]}
              />
              <p>Solo PVP builds have many variants, you can even make a healing hybrid with tiny damage for long fights.</p>
              <p>But the “too lazy to read” build I am giving is the simple burst build used last season, mixed with a few new spells.</p>
            </Tab>
            <Tab label="Carry me, senpai">
              <p><strong>This build is mainly for CoH and Chaos Invasion</strong>, sacrificing everything to support the team’s damage, with a bit of healing to keep both players and the <Tip>Frenzy Totem</Tip> alive.</p>
              <p>Again, do not use this build outside a booster setup helping friends deal more damage.</p>
              <Build
                techniques={[
                  'Radiant Restoration',
                  'Decoy Clone',
                  'Frenzy Totem',
                  'Dark Bullet',
                ]}
                charms={[
                  'Healing Mastery',
                  'Overhealing',
                  'Phantom Light',
                  'Mantra of Blessings',
                ]}
              />
              <p>Remember to use <Tip>Chomusuke</Tip> or <Tip>Nyxarchon</Tip> in this build to help the team deal more damage with their DEF reduction.</p>
            </Tab>
            <Tab label="Summoner">
              <p>The Summoner build has a few drawbacks, ordered by severity (high to low):</p>
              <p>The main drawback of the summoner build is that <strong>its mechanics fit the core gameplay very poorly</strong>: summon damage is balanced around them surviving their full duration, which is hard to achieve in high-difficulty content.</p>
              <p>To keep summons alive longer, you have to invest a lot in ranking skills with duplicates and build defensive stats (HP, block…) on gear beyond what you need yourself for the summons to inherit, which eats into your damage potential.</p>
              <p>Summoner damage comes in every element, forcing the “beast keeper” to invest in all five elements;</p>
              <p>The mildest drawback is that summon damage is back-loaded: you have to wait out the summon duration for full value, while burst builds reduce enemy numbers and incoming damage along the way;</p>
              <p>Variety is also worth mentioning: there are not enough summons yet to fill the skill bar (counting damage only), and with how SxS balances things, by the time there are enough, the oldest ones will be completely outdated.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Prophet" icon="skills/classes/prophet.png">
          <p>Prophet is the tier where Sage becomes <strong>a true healer</strong>, while also gaining a debuff-based Dark style.</p>
          <p><Tip>Radiant Rhythm</Tip> heals one ally and then bounces up to 5 times (repeat heals on the same person are reduced by 35%). <Tip>Rejuvenating Elixir</Tip> carries 3 potions that are used automatically when an ally drops below 50% HP, creating 1 more every 3 turns.</p>
          <p>On the offensive side, <Tip>Hexed Blast</Tip> deals 1 extra Dark hit for each debuff type on the target (up to 3), and <Tip>Desperate Shadow</Tip> has a 70% chance to randomly inflict Weakened 2, Armor Break 2 or Slow 2, exactly what <Tip>Hexed Blast</Tip> needs.</p>
          <Alert type="red" title="Important notes">
            <p><Tip>Phantom Light</Tip> converts 100% of overhealing into a shield, so excess healing is not wasted.</p>
            <p><Tip>Resurrection</Tip> only triggers once per battle, but it can decide wins and losses in hard content.</p>
            <p><Tip>Ring of Omen</Tip> lowers enemy Effect RES every turn, making the whole team’s debuffs land more easily.</p>
          </Alert>
          <Tabs>
            <Tab label="Healing">
              <Build
                techniques={['Rejuvenating Rain', 'Healing Touch', 'Radiant Rhythm', 'Radiant Restoration']}
                charms={['Phantom Light', 'Overhealing', 'Rejuvenating Elixir', 'Resurrection']}
              />
              <p><strong>The main healer build.</strong> <Tip>Radiant Restoration</Tip> heals the whole team, <Tip>Radiant Rhythm</Tip> bounces heals, <Tip>Rejuvenating Rain</Tip> heals more for allies below 50% HP, and <Tip>Healing Touch</Tip> cleanses Ailments/Debuffs.</p>
              <p><Tip>Overhealing</Tip> has a 30% chance to also heal every ally within 1 grid of the target, great when the team stands close together.</p>
            </Tab>
            <Tab label="Dark debuff">
              <Build
                techniques={['Desperate Shadow', 'Hexed Blast', 'Soul Reap', 'Void Chant']}
                charms={['Ring of Omen', 'Shadowy Current', 'Shadow Erosion', 'Cursed Armor']}
              />
              <p><Tip>Desperate Shadow</Tip> applies debuffs first so <Tip>Hexed Blast</Tip> gets extra hits; <Tip>Shadow Erosion</Tip> and <Tip>Cursed Armor</Tip> also apply Erosion, which counts as another debuff type.</p>
              <p><Tip>Soul Reap</Tip> grows stronger as the target loses HP, used to finish enemies. <Tip>Void Chant</Tip> punishes enemies every time they use a technique.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Hierarch" icon="skills/classes/hierarch.png">
          <p>Hierarch is the tier where <strong>summons</strong> become the main playstyle of the Sage line.</p>
          <p>You have four summon skills: <Tip>Rock Rex Summon</Tip>, <Tip>Thalasson Summon</Tip> and <Tip>Phantom Summon</Tip> can only be used once per battle, while <Tip>Flamewyrm Summon</Tip> has Zero Initial CD, lasts 3 turns and can be reused.</p>
          <p><Tip>Pact Hex</Tip> makes every summon deal extra Dark damage around itself at the end of each of its turns. Hierarch also has an Erosion style with <Tip>Darkveil Formation</Tip>, <Tip>Hex Edict</Tip> and <Tip>Veritas Pact</Tip>.</p>
          <Alert type="red" title="Important notes">
            <p><strong>Skill order matters a lot</strong>: once-per-battle summon skills should go first so your summons hit the field as early as possible.</p>
            <p><Tip>Soulweave</Tip> summons an Infernal Fiend when 3 of your summons die or disappear. <Tip>Flamewyrm Summon</Tip> disappears on its own after 3 turns, so it helps trigger it faster.</p>
            <p><Tip>Eidolon Whisper</Tip> raises your summons’ ATK and also speeds up one summon’s turn each turn.</p>
          </Alert>
          <Tabs>
            <Tab label="Summon">
              <Build
                techniques={['Rock Rex Summon', 'Thalasson Summon', 'Phantom Summon', 'Flamewyrm Summon']}
                charms={['Summoner\'s Frenzy', 'Summoning Pact', 'Soulweave', 'Eidolon Whisper']}
              />
              <p><strong>The main summon build.</strong> Three strong summons hit the field in the first few turns, <Tip>Flamewyrm Summon</Tip> keeps getting recalled, and <Tip>Soulweave</Tip> brings in an extra Infernal Fiend later on.</p>
              <p><Tip>Summoning Pact</Tip> spends 2% Max HP to raise your summons’ HP, and that HP is restored if you survive until victory. You can swap it for <Tip>Pact Hex</Tip> if you want more damage.</p>
            </Tab>
            <Tab label="Erosion">
              <Build
                techniques={['Darkveil Formation', 'Void Assault', 'Judgment Word', 'Shadow of Termination']}
                charms={['Hex Edict', 'Nightshade Soulplate', 'Veritas Pact', 'Linked Misfortune']}
              />
              <p><Tip>Darkveil Formation</Tip> and <Tip>Void Assault</Tip> apply Erosion directly, <Tip>Judgment Word</Tip> inflicts Weakened and through <Tip>Hex Edict</Tip> gets an extra chance to apply Erosion. <Tip>Shadow of Termination</Tip> detonates every Erosion stack on the target.</p>
              <p><Tip>Nightshade Soulplate</Tip> reduces damage taken and triggers Erosion on its own at the end of every turn. Every technique is Dark, so <Tip>Veritas Pact</Tip> enters Nether Pact after 8 casts.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Demiurge" icon="skills/classes/compass/class-26.webp">
          <p>Demiurge completes the summon style with <strong>protected unlimited-duration summons</strong>, plus an extremely strong Erosion detonation skill.</p>
          <p><Tip>Soulbinder</Tip> makes your first unlimited-duration summon take less damage and deal more. <Tip>Deathrattle</Tip> shields an unlimited-duration summon based on your Max HP every time a limited summon (like Flora or Flamewyrm) dies or expires.</p>
          <p><Tip>Eclipse Burst</Tip> instantly triggers Erosion <strong>12 times</strong> if the target has Erosion, the finisher of the Erosion style. Demiurge also gets support skills: <Tip>Merciful Wish</Tip> reduces damage for allies, and <Tip>Guardian Totem</Tip> summons an untargetable totem.</p>
          <Alert type="red" title="Important notes">
            <p><Tip>Flora Summon</Tip> and <Tip>Flamewyrm Summon</Tip> only last 3 turns, so every time they disappear they trigger <Tip>Deathrattle</Tip> and count toward <Tip>Soulweave</Tip>.</p>
            <p><Tip>Wraithguard Summon</Tip> appears next to an enemy within 4 grids, not next to you. Watch your positioning before using it.</p>
          </Alert>
          <Tabs>
            <Tab label="Summon">
              <Build
                techniques={['Thalasson Summon', 'Flamewyrm Summon', 'Flora Summon', 'Wraithguard Summon']}
                charms={['Soulweave', 'Eidolon Whisper', 'Deathrattle', 'Soulbinder']}
              />
              <p>Thalasson and Wraithguard are your main units, while Flora and Flamewyrm keep getting recalled and shield the main units through <Tip>Deathrattle</Tip> every time they disappear.</p>
            </Tab>
            <Tab label="Erosion">
              <Build
                techniques={['Darkveil Formation', 'Ravenous Curse', 'Shadow Wraith', 'Eclipse Burst']}
                charms={['Soul Corrosion', 'Shadow Erosion', 'Linked Misfortune', 'Cursed Link']}
              />
              <p>Spread Erosion with <Tip>Darkveil Formation</Tip>, <Tip>Shadow Erosion</Tip> and <Tip>Linked Misfortune</Tip>, then use <Tip>Eclipse Burst</Tip> to trigger it 12 times. <Tip>Soul Corrosion</Tip> raises Erosion damage and triggers it again whenever a Dark technique hits a target with Erosion.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Omnifex" icon="skills/classes/compass/class-30.webp">
          <Alert type="red" title="Class not released yet">
            <p>Omnifex is this line’s tier 8 class and is <strong>not in the current version yet</strong>. Skill data comes from the game files and may change at launch; the skills <Tip>Starlight Descent</Tip> and <Tip>Shadow Undertow</Tip> do not have descriptions yet. The build below is only a preview.</p>
          </Alert>
          <p>Omnifex has two directions: <strong>debuffing Dark</strong> and <strong>multiplying summons</strong>.</p>
          <p><Tip>Triune Salvo</Tip> throws 3 Arcanebolts that inflict Weakened 1, Armor Break 1 and Slow 1 in turn. Every debuff that lands triggers <Tip>Cursed Link</Tip> (50% for extra Dark damage) and adds ATK through <Tip>Hexecho</Tip>.</p>
          <p>On the summon side, <Tip>Phantomcraft</Tip> spawns another Shadeborn whenever your summons or Fantomon kill an enemy (up to 5), and <Tip>Spiritune</Tip> raises your summons’ Elemental Mastery.</p>
          <Tabs>
            <Tab label="Debuff">
              <Build
                techniques={['Decoy Clone', 'Ravenous Curse', 'Darkveil Formation', 'Triune Salvo']}
                charms={['Shadow Vengeance', 'Mantra of Blessings', 'Cursed Link', 'Hexecho']}
              />
              <p><Tip>Decoy Clone</Tip> links to an enemy, and all HP the clone loses is converted into True DMG on the target. <Tip>Mantra of Blessings</Tip> raises damage for the ally with the highest ATK, good in a team.</p>
            </Tab>
            <Tab label="Summon">
              <Build
                techniques={['Tideguard Summon', 'Thalasson Summon', 'Flora Summon', 'Flamewyrm Summon']}
                charms={['Phantomcraft', 'Spiritune', 'Soulbinder', 'Eidolon Whisper']}
              />
              <p>The more enemies your summons kill, the more Shadeborn <Tip>Phantomcraft</Tip> spawns, so the build is strongest in mob-heavy content.</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
