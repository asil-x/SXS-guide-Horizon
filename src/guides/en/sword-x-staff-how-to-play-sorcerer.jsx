import { Alert, Build, Con, Pro, ProsCons, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p><strong>The king of AoE damage, and also the king of dying early if the party has no tank.</strong></p>
      <p>Sorcerer has huge AoE damage and good single-target damage, in exchange for less HP and fewer defensive layers than other classes.</p>
      <ProsCons id="pros-cons" title="Sorcerer strengths & weaknesses">
        <Pro>Very high damage ceiling with Techniques in almost every element except Dark. You will never lack damage to bring enemies down</Pro>
        <Pro>The more tiers you unlock, the more spectacular and fun the AoE builds get. If that is your thing, this class is for you</Pro>
        <Pro>Good area crowd control: Water skills inflict Frozen/Wet, Wind skills knock up or push back, letting you control whole packs</Pro>
        <Con>A squishy class. You could even call it the squishiest in the game, since it has almost no defensive layers</Con>
        <Con>Without Mana Surge or good gear, crit rate sources are very hard to find early on</Con>
        <Con>Many builds need enough techniques of the same element to work (Electro needs Light skills, Tideform needs 5 Water casts), so switching playstyles costs more skills and resources</Con>
      </ProsCons>
      <Alert title="Experiment with builds!">
        <p><strong>Remember this is only a template</strong> for you to adjust to your gear, playstyle, skills and Fantomons.</p>
      </Alert>

      <hr />

      <h2 id="best-stats">Best stats</h2>
      <p>Sorcerer is pure damage, so its stats are simpler than Sage or Knight, which have more to worry about.</p>
      <p>Top priority goes to both <strong>Crit Rate</strong> and <strong>Crit DMG</strong>, with <strong>Elemental Mastery</strong> right behind for even more damage.</p>
      <p>After those 3 stats, <strong>ATK</strong> and <strong>SPD</strong> (both flat and %) are the next targets so your damage keeps up with other classes.</p>
      <p>Finally, do not completely forget <strong>Accuracy</strong> and <strong>Effect Hit Rate</strong>.</p>

      <hr />

      <h2 id="fantomons">Fantomons</h2>
      <p><strong><Tip>Nyxarchon</Tip> is the best in slot (BiS) for every DPS build.</strong> Pull on the pet banner until you can exchange for it.</p>
      <p>The extra charm slot and higher base stats make Mythic Fantomons stronger in most situations.</p>
      <p>Other popular choices are <Tip>Sylvaerie</Tip>, <Tip>Zeioletus</Tip> and <Tip>Kels</Tip> depending on your build.</p>

      <hr />

      <h2 id="companions">Companions</h2>
      <p>Companions give passive stats at certain level milestones, so focus on getting a few companions that directly benefit your class to level 50 first, then level the rest.</p>
      <p><strong>EVERY CLASS benefits from DMG Boost and Reduction</strong> to raise both damage and survivability.</p>
      <p>For Sorcerer, the most important stat is <em>Crit Rate</em>: <Tip>Eiichi</Tip>, <Tip>Freya</Tip>, <Tip>Naira</Tip>, <Tip>Qin</Tip>, <Tip>Reina</Tip>, <Tip>Sylvia</Tip>… there are plenty of companions to choose from.</p>
      <p>The second priority is <em>Accuracy</em>, with companions like <Tip>Akane</Tip>, <Tip>Hermes</Tip>, <Tip>Jiangwang</Tip> and <Tip>Ophelia</Tip>.</p>

      <hr />

      <h2 id="gems">Gems</h2>
      <Alert type="blue" title="Gem tiers">
        <p>I use T10 gems as examples, but <strong>the higher the tier, the better the stats</strong>. Gems go from T1 to T15.</p>
      </Alert>
      <p><Tip>T10 Obsidian</Tip> is good for every class, since everyone needs more damage no matter how they play.</p>
      <p><Tip>T10 Moonstone</Tip> is also popular with every class for extra survivability.</p>
      <p>Sorcerer also benefits a lot from <Tip>T10 Amethyst</Tip> since it gives SPD and Crit Rate.</p>
      <p>Single-stat gems are still good for filling the rest of your gear, <Tip>T10 Ruby</Tip> and <Tip>T10 Citrine</Tip> are the second-best picks for this class.</p>

      <hr />

      <h2 id="about-harmony-builds">About Harmony builds</h2>
      <p>Sorcerer can play single-element builds, but using several elements with <Tip>Elemental Harmony</Tip> gives higher damage in most situations.</p>
      <p>That means treat every build as a reference only, and always swap spells based on rarity and the type of enemy you are fighting to exploit elemental weaknesses.</p>
      <p><strong>You should have at least 2-3 Techniques of different elements.</strong></p>
      <p>One of the best things about Sorcerer is its flexibility and the number of spells / elements you can use, so always experiment with builds!</p>

      <hr />

      <h2 id="builds">Builds</h2>
      <Tabs big>
        <Tab label="Mage" icon="skills/classes/mage.png">
          <p>Early on there are not many builds since you are limited by the spells you have.</p>
          <p><strong>Most people will play an elemental damage build at this stage</strong>, with water being the most popular thanks to <Tip>Water Assault</Tip> and <Tip>Water to Ice</Tip>.</p>
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
        <Tab label="Sorcerer" icon="skills/classes/sorcerer.png">
          <Alert type="red" title="IMPORTANT NOTES">
            <p><strong>Staying alive</strong>: always consider adding <Tip>Void Bubble</Tip> to your build, the best defensive charm unlocked at Tier 2.</p>
            <p><strong>Crit luck</strong>: New dungeons and gear reduce your reliance on crits, so you can consider dropping <Tip>Mana Surge</Tip> depending on your stats.</p>
          </Alert>
          <p><Tip>Elemental Harmony</Tip> is one of the strongest damage charms, and we finally have builds for every element, becoming a true Sorcerer.</p>
          <Tabs>
            <Tab label="Harmony">
              <Build
                techniques={[
                  'Lightning Chain',
                  'Fiery Star Trail',
                  "Wind's Delight",
                  'Water Assault',
                ]}
                charms={[
                  'Elemental Harmony',
                  'Mana Surge',
                  "Wind's Shadow",
                  'Lightning Mystery',
                ]}
              />
              <p>The strongest build for general content, making use of the huge elemental mastery that <Tip>Elemental Harmony</Tip> brings.</p>
              <p>Since there are so many elemental spells, you can tweak this build, as long as you have at least 3 different elements to get that juicy buff.</p>
              <p>If you want more single-target damage, swap to <Tip>Water Shot</Tip>, <Tip>Flame Jet</Tip>, and <Tip>Light of Dawn</Tip>.</p>
            </Tab>
            <Tab label="Sét">
              <Build
                techniques={[
                  'Lightning Chain',
                  'Flickering Stars',
                  "Wind's Delight",
                  'Light of Dawn',
                ]}
                charms={[
                  'Lightning Mystery',
                  "Wind's Shadow",
                  'Elemental Harmony',
                  'Mana Surge',
                ]}
              />
              <p>One of the best AoE mob-clearing builds in dungeons, and it is becoming my favorite element to play.</p>
              <p>We mix in a spell from another element to make use of <Tip>Elemental Harmony</Tip>, but you can use <Tip>Energy Burst</Tip> if you want to buff your spells even more.</p>
            </Tab>
            <Tab label="Freeze">
              <Build
                techniques={[
                  'Water Assault',
                  'Frosty Nova',
                  'Water Shot',
                  'Ice Spike',
                ]}
                charms={[
                  'Lightning Mystery',
                  'Water to Ice',
                  'Mana Surge',
                  "Dew's Blessing",
                ]}
              />
              <p>A strong build that makes it easy to deplete a boss’s stamina bar and freeze it fairly often.</p>
              <p>Personally I do not like <Tip>Ice Spike</Tip>, so like the other builds, I use a hybrid version.</p>
            </Tab>
            <Tab label="Fire">
              <Build
                techniques={[
                  'Fireball',
                  'Fiery Star Trail',
                  'Blazing Fire Ring',
                  'Flame Jet',
                ]}
                charms={[
                  'Heart of Flame',
                  'Raging Wildfire',
                  'Lightning Mystery',
                  'Mana Surge',
                ]}
              />
              <p><em>Update: It seems <Tip>Flaming Path</Tip> and <Tip>Raging Wildfire</Tip> do not work well together</em>. My guess is you cannot stack multiple “burns” on the same grid, so <Tip>Flaming Path</Tip> always deals very little or no damage.</p>
              <p>We drop it and replace it with <Tip>Mana Surge</Tip> for more crits.</p>
              <p>A good build for AoE content but not great for single target unless you swap Charms.</p>
            </Tab>
            <Tab label="Wind">
              <Build
                techniques={[
                  'Tempest Sphere',
                  "Wind's Delight",
                  'Iron Thorn',
                  'Cyclone',
                ]}
                charms={[
                  'Unstable Aura',
                  "Wind's Shadow",
                  "Wind's Whisper",
                  'Lightning Mystery',
                ]}
              />
              <p><Tip>Unstable Aura</Tip> is still a solid choice for damage with multi-projectile spells, and even better at Tier 2 after unlocking <Tip>Wind's Shadow</Tip>.</p>
              <p>Cinder Ridge has many enemies weak to Wind, so I use this build quite a lot while exploring the map.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Archmage" icon="skills/classes/archmage.png">
          <Alert type="red" title="IMPORTANT NOTES">
            <p><strong>Staying alive</strong>: always consider adding <Tip>Void Bubble</Tip>, <Tip>Frost Guard</Tip> and/or <Tip>Repelling Wind</Tip> to your build, great defensive tools.</p>
            <p><strong>Cooldown reduction</strong>: <Tip>Rapid Cast</Tip> lets you cast spells faster at the start of battle. Even though it only works once, it is the best charm at this tier, and it also gives elemental mastery.</p>
          </Alert>
          <p>New AoE spells to sweep enemies along the way, plus a few (much needed) single-target spells for some elements.</p>
          <p>In general for single-element builds: <strong>Lightning &gt; Fire &gt; Ice = Wind</strong>.</p>
          <p>Even so, the Harmony build is still the strongest if you have a good <Tip>Elemental Harmony</Tip> charm.</p>
          <Tabs>
            <Tab label="Harmony">
              <Build
                techniques={[
                  'Lightning Chain',
                  'Meteoric Flames',
                  'Howling Hurricane',
                  'Aqua Vortex',
                ]}
                charms={[
                  'Elemental Harmony',
                  'Rapid Cast',
                  'Radiant Sear',
                  'Lightning Mystery',
                ]}
              />
              <p><strong>The best AoE build in the game</strong>, using all the new spells unlocked at Tier 3.</p>
              <p><Tip>Aqua Vortex</Tip> does not deal very high damage, but the extra damage from knockback is decent and makes up for it.</p>
              <p>Even though the skills have long cooldowns, this is still the best set for AoE content.</p>
              <hr />
              <p><strong>For single-target content</strong></p>
              <p>I swap <Tip>Lightning Chain</Tip> for <Tip>Fire Blast</Tip>, since it gives much higher single-target damage.</p>
              <p>Against large targets and bosses, I add <Tip>Divine Wrath</Tip>, which spell to replace is up to you.</p>
              <ul>
                <li>If you want 4 different elements for <Tip>Elemental Harmony</Tip>, replace <Tip>Meteoric Flames</Tip></li>
                <li>If you only need 3 elements, I would replace <Tip>Howling Hurricane</Tip> or <Tip>Aqua Vortex</Tip> depending on what the enemies resist</li>
              </ul>
              <hr />
              <p><strong>Nuke version</strong></p>
              <p>No spammable skill (drop <Tip>Lightning Chain</Tip> and/or <Tip>Fire Blast</Tip>), using only big AoE spells.</p>
              <p><Tip>Meteoric Flames</Tip>, <Tip>Howling Hurricane</Tip>, <Tip>Aqua Vortex</Tip> and <Tip>Divine Wrath</Tip> all at once.</p>
              <p>A spectacular option, but it usually deals less damage than having a no-cooldown spell for mob clearing / extra damage.</p>
            </Tab>
            <Tab label="Sét">
              <Build
                techniques={[
                  'Divine Wrath',
                  'Flickering Stars',
                  'Light of Dawn',
                  'Lightning Chain',
                ]}
                charms={[
                  'Lightning Mystery',
                  'Radiant Sear',
                  'Incarnation of Light',
                  'Rapid Cast',
                ]}
              />
              <p><Tip>Divine Wrath</Tip> becomes our strongest spell, despite its long cooldown.</p>
              <p><Tip>Radiant Sear</Tip> is also a great spell, since it has a 50% base chance to trigger with ANY element / technique, making it the best passive damage charm at Tier 3.</p>
            </Tab>
            <Tab label="Freeze">
              <Build
                techniques={[
                  'Water Assault',
                  'Frosty Nova',
                  'Water Shot',
                  'Aqua Vortex',
                ]}
                charms={[
                  'Radiant Sear',
                  'Water to Ice',
                  'Rapid Cast',
                  "Dew's Blessing",
                ]}
              />
              <p>A strong build that makes it easy to deplete a boss’s stamina bar and freeze it fairly often.</p>
              <p>We finally replace <Tip>Ice Spike</Tip> with a newer (and stronger) spell, <Tip>Aqua Vortex</Tip>.</p>
            </Tab>
            <Tab label="Fire">
              <Build
                techniques={[
                  'Meteoric Flames',
                  'Fiery Star Trail',
                  'Fireball',
                  'Fire Blast',
                ]}
                charms={[
                  'Heart of Flame',
                  'Raging Wildfire',
                  'Mana Surge',
                  'Rapid Cast',
                ]}
              />
              <p><Tip>Fire Blast</Tip> becomes the main spam spell and… wow is it strong. The strongest single-target spell in the game <strong>among Sorcerer’s no-cooldown techniques</strong>.</p>
              <p>The only other change is adding <Tip>Meteoric Flames</Tip>, our new main damage skill.</p>
              <p>Since most fire spells are AoE / single-hit, we can drop <Tip>Radiant Sear</Tip> and swap to <Tip>Mana Surge</Tip> for more spell crits (or a defensive charm).</p>
              <hr />
              <p><Tip>Fireball</Tip> can be replaced depending on content with <Tip>Flame Jet</Tip> for higher single-target damage, at the cost of standing close to enemies, so adjust your charms accordingly.</p>
            </Tab>
            <Tab label="Wind">
              <Build
                techniques={[
                  'Howling Hurricane',
                  "Wind's Delight",
                  'Tempest Sphere',
                  'Cyclone',
                ]}
                charms={[
                  'Radiant Sear',
                  "Wind's Shadow",
                  "Wind's Whisper",
                  'Rapid Cast',
                ]}
              />
              <p><Tip>Unstable Aura</Tip> is finally replaced after a long time, since <Tip>Radiant Sear</Tip> triggers more often and is generally more useful, with higher damage.</p>
              <p><Tip>Iron Thorn</Tip> is also out, and we get a shiny new and strongest toy: <Tip>Howling Hurricane</Tip>. Despite its long cooldown, the damage is still great.</p>
              <hr />
              <p>What about <Tip>Repelling Wind</Tip>? Great for PvP, great when playing solo. <em>I would never use it in multiplayer content</em> since its damage is not high.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Destroyer" icon="skills/classes/destroyer.png">
          <Alert type="red" title="IMPORTANT NOTES">
            <p><strong>Staying alive</strong>: always consider adding a defensive layer when needed: <Tip>Void Bubble</Tip>, <Tip>Repelling Wind</Tip>, <Tip>Frost Guard</Tip> or <Tip>Overload Protection</Tip></p>
            <p><strong>Crit luck</strong>: New dungeons and gear reduce your reliance on crits, so you can consider dropping <Tip>Mana Surge</Tip> and <Tip>Explosive Spirit</Tip> depending on your stats.</p>
          </Alert>
          <p>Tier 4 is… a bit bland, but still an upgrade over the previous sets.</p>
          <p>Quick summary: Harmony builds got slightly weaker, making room for hybrid builds (usually 2 elements), while single-element builds became quite good for solo play.</p>
          <p>Finally, one of the best spells unlocked at this tier is a buff rather than a damage technique. <Tip>Formation Breaker</Tip> is good solo and <strong>extremely popular</strong> in group content.</p>
          <Tabs>
            <Tab label="Single target">
              <Build
                techniques={[
                  'Formation Breaker',
                  'Meteoric Flames',
                  'Divine Wrath',
                  'Thunder of Judgment',
                ]}
                charms={[
                  'Rapid Cast',
                  'Mana Surge',
                  'Radiant Sear',
                  'Elemental Harmony',
                ]}
              />
              <p>A single-target build focused on bosses and co-op content, where we can buff the whole team with <Tip>Formation Breaker</Tip>.</p>
              <p>The only real change at this tier is the addition of <Tip>Thunder of Judgment</Tip>, a great technique and the strongest single-target damage at Tier 4.</p>
              <p>I still use <Tip>Elemental Harmony</Tip> since I have many duplicates, but you can drop it for a defensive layer or simply more damage with a charm like <Tip>Lightning Mystery</Tip>.</p>
              <p>Even when playing solo <Tip>Formation Breaker</Tip> is usually still worth using, but you can replace it with a wind spell for more damage, or even <Tip>Fire Blast</Tip> for single target if needed.</p>
            </Tab>
            <Tab label="Fire">
              <Build
                techniques={[
                  'Fireball',
                  'Fiery Star Trail',
                  'Meteoric Flames',
                  'Blazing Fire Ring',
                ]}
                charms={[
                  'Explosive Spirit',
                  'Fiery Burst',
                  'Raging Wildfire',
                  'Fiery Rejuvenation',
                ]}
              />
              <p>I cannot stress enough how strong fire has become in long fights and AoE content with many enemies.</p>
              <p><Tip>Fiery Burst</Tip> becomes the main damage charm, which means crit rate is very important.</p>
              <p>If you are lucky enough to have good gear, you can swap <Tip>Explosive Spirit</Tip> for <Tip>Radiant Sear</Tip>, <Tip>Rapid Cast</Tip> or a defensive tool.</p>
            </Tab>
            <Tab label="Sét">
              <Build
                techniques={[
                  'Flickering Stars',
                  'Starlight Burst',
                  'Thunder of Judgment',
                  'Divine Wrath',
                ]}
                charms={[
                  'Rapid Cast',
                  'Radiant Sear',
                  'Lightning Mystery',
                  'Incarnation of Light',
                ]}
              />
              <p>Good for both solo play and AoE mob clearing.</p>
              <p>Both newly unlocked spells are quite strong and are the core spells of the hybrid build, <Tip>Starlight Burst</Tip> for AoE and <Tip>Thunder of Judgment</Tip> for single-target damage.</p>
            </Tab>
            <Tab label="Freeze">
              <Build
                techniques={[
                  'Aqua Vortex',
                  'Water Assault',
                  'Flowing Doom',
                  'Frosty Nova',
                ]}
                charms={[
                  'Rapid Cast',
                  'Water to Ice',
                  'Shattering Ice',
                  "Dew's Blessing",
                ]}
              />
              <p>Not great for single-target content, <strong>but amazing in AoE and stages with lots of adds</strong>, where you can trigger <Tip>Shattering Ice</Tip> constantly.</p>
              <p>The only other change from earlier tiers is the addition of <Tip>Flowing Doom</Tip>, a new technique that is basically an upgraded <Tip>Water Assault</Tip> (about time lmao).</p>
              <p>Personally I find <Tip>Radiant Sear</Tip> better than <Tip>Water to Ice</Tip>, but I like themed single-element builds, so which one you use is up to you.</p>
            </Tab>
            <Tab label="Wind">
              <Build
                techniques={[
                  'Tempest Sphere',
                  'Wind Blade Spiral',
                  "Wind's Delight",
                  'Howling Hurricane',
                ]}
                charms={[
                  'Cyclone Lament',
                  'Repelling Wind',
                  "Wind's Shadow",
                  'Unstable Aura',
                ]}
              />
              <p>Wind improves massively over Tier 3 thanks to new charms and techniques focused on Laceration, <strong>a new effect that deals damage when enemies move</strong>.</p>
              <p>For charms I use three offensive ones, you can replace one with <Tip>Wind's Shadow</Tip> for more wind affinity, or drop <Tip>Repelling Wind</Tip> if the boss is immune to knockback to take <Tip>Radiant Sear</Tip> or another defensive tool.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Magister" icon="skills/classes/magister.png">
          <p>Magister builds a whole playstyle around <strong>Electro and Thunder Strike</strong>, while unlocking more skills for all four elements.</p>
          <p><Tip>Thunderbolt Mark</Tip> has a 65% Base Chance to inflict Electro whenever a Light technique hits. When a target with Electro takes more Light damage, Electro is removed to deal an extra instance of Light damage that spreads to nearby enemies.</p>
          <p><Tip>Thunder Judgment</Tip> even punishes enemy turns: whenever an enemy within 5 grids uses a technique, there is a 30% chance to strike with Thunder Strike, rising to <strong>90%</strong> if they have Electro or Wet.</p>
          <p><Tip>Light Burst</Tip> is the main new technique for this style: it hits 1 target then spreads to up to 2 more enemies, each enemy hit once.</p>
          <Alert type="red" title="Important notes">
            <p><strong>Only use Light techniques</strong> in the main build: <Tip>Thunderbolt Mark</Tip> only inflicts Electro from Light damage.</p>
            <p><Tip>Divine Wrath</Tip> hits up to 16 random times, so even though damage per hit decreases, it is the best skill for spreading Electro over many enemies.</p>
            <p><Tip>Frostsoul Ward</Tip> inflicts Wet on your attackers, which also raises <Tip>Thunder Judgment</Tip>’s chance to 90%. Consider it if you get hit a lot.</p>
          </Alert>
          <Tabs>
            <Tab label="Light lightning">
              <Build
                techniques={['Light Burst', 'Starlight Burst', 'Thunder of Judgment', 'Divine Wrath']}
                charms={['Thunderbolt Mark', 'Thunder Judgment', 'Radiant Sear', 'Rapid Cast']}
              />
              <p><strong>Magister’s main build.</strong> All 4 techniques are Light: <Tip>Divine Wrath</Tip> and <Tip>Starlight Burst</Tip> spread Electro over an area, <Tip>Light Burst</Tip> and <Tip>Thunder of Judgment</Tip> detonate it.</p>
              <p><Tip>Radiant Sear</Tip> has a 50% chance to add 1 Light hit on every hit (another chance to inflict Electro), while <Tip>Rapid Cast</Tip> reduces cooldowns before battle so your first rotation comes faster.</p>
            </Tab>
            <Tab label="Water + lightning">
              <Build
                techniques={['Frost Thorn', 'Light Burst', 'Thunder of Judgment', 'Divine Wrath']}
                charms={['Frostsoul Ward', 'Thunder Judgment', 'Thunderbolt Mark', 'Radiant Warp']}
              />
              <p><strong>A safer version for hard content.</strong> <Tip>Frost Thorn</Tip> hits twice with Water in a 3×3 area and can inflict Frozen, while <Tip>Frostsoul Ward</Tip> inflicts Wet on attackers, so <Tip>Thunder Judgment</Tip> almost always triggers.</p>
              <p><Tip>Radiant Warp</Tip> raises DMG RES and has a 50% chance to teleport you away when hit, perfect for a ranged caster.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Arcanarch" icon="skills/classes/arcanarch.png">
          <p>Arcanarch has three clear directions: <strong>Water Tideform</strong>, <strong>Fire Burn</strong> and <strong>Wind knock-up</strong>.</p>
          <p>The highlight is the <Tip>Riptide</Tip> charm: after 5 Water technique casts, you enter Tideform for 2 turns, gaining damage, and every cast has a 30% chance to refresh its cooldown so you can use it again (up to 2 times per turn).</p>
          <p>On the Fire side, <Tip>Blackflame Scorch</Tip> burns grids in an area, then <Tip>Flare Eruption</Tip> absorbs every Burn within 3 grids, each Burn adding 10% damage (up to 100%). The Wind side has <Tip>Riftwind Wheel</Tip> (4 hits, knock-up) combined with <Tip>Rupture Storm</Tip>.</p>
          <Alert type="red" title="Important notes">
            <p><Tip>Surging Tide</Tip> starts at 0% and only gains 5% for each Water skill you equip, so it is only worth using when your build has many Water skills.</p>
            <p><Tip>Frigid Spike</Tip> has Zero Initial CD and can inflict Frozen, so put it first in your skill order to lock enemies down on turn one.</p>
            <p><Tip>Overload Protection</Tip> creates a shield whenever you lose more than 15% Max HP in one turn, perfect for a paper-thin caster.</p>
          </Alert>
          <Tabs>
            <Tab label="Water Tideform">
              <Build
                techniques={['Tideburst', 'Frost Thorn', 'Frigid Spike', 'Judgment Thunder']}
                charms={['Radiant Warp', 'Overload Protection', 'Surging Tide', 'Riptide']}
              />
              <p>Three Water techniques to quickly reach 5 casts for <Tip>Riptide</Tip>, while <Tip>Judgment Thunder</Tip> (9 random Light hits) adds area damage.</p>
              <p><Tip>Tideburst</Tip> inflicts Wet, and <Tip>Frost Thorn</Tip> and <Tip>Frigid Spike</Tip> can inflict Frozen, so the build both deals damage and controls well.</p>
            </Tab>
            <Tab label="Fire Burn">
              <Build
                techniques={['Blackflame Scorch', 'Flare Eruption', 'Crimson Whirl', 'Blast Spirit']}
                charms={['Pyre of Souls', 'Ember Flare', 'Omnirune Sigil', 'Rapid Cast']}
              />
              <p><Tip>Blackflame Scorch</Tip> burns the ground first, then <Tip>Flare Eruption</Tip> absorbs the Burn to deal Doom DMG. <Tip>Pyre of Souls</Tip> raises Blast Spirit damage over time, and <Tip>Ember Flare</Tip> can place an extra Blast Spirit whenever you kill an enemy.</p>
              <p><Tip>Omnirune Sigil</Tip> creates Runes based on the technique’s element, with Fire Runes raising Crit DMG.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Thaumaturge" icon="skills/classes/compass/class-25.webp">
          <p>Thaumaturge is the tier of <strong>multi-hit area Light</strong>, while also making Fire Burn stronger and longer-lasting.</p>
          <p><Tip>Lightning Grid</Tip> drops 8 lightning orbs in a 3×5 area, each spreading to one more enemy. <Tip>Void Lightwave</Tip> sweeps a whole 1×7 row. Together with <Tip>Judgment Thunder</Tip>, every rotation has a huge number of hits, perfect for charms that trigger per hit.</p>
          <p>On the Fire side, <Tip>Ravaging Flame</Tip> has a 40% chance to burn the ground in a 3-grid area around you, <Tip>Scorching Resonance</Tip> raises Fire Affinity based on the number of burning grids, and <Tip>Phoenix Rise</Tip> helps you survive and turns Burn into a shield.</p>
          <Alert type="red" title="Important notes">
            <p><Tip>Formation Breaker</Tip> deals no damage but raises ATK for allies within 3 grids and can speed up their turns. It is a strong skill in a team.</p>
            <p><Tip>Glare Fusion</Tip> stores Energy from Light techniques and releases it on the 4th, so the more Light techniques in your build, the better it works.</p>
            <p><Tip>Gale Scar</Tip> has a 50% chance to add 1 Wind hit <strong>every time</strong> a technique hits, regardless of element, so it is very strong with multi-hit techniques.</p>
          </Alert>
          <Tabs>
            <Tab label="Light">
              <Build
                techniques={['Formation Breaker', 'Judgment Thunder', 'Void Lightwave', 'Lightning Grid']}
                charms={['Radiant Sear', 'Thunderbolt Mark', 'Glare Fusion', 'Gale Scar']}
              />
              <p><Tip>Radiant Sear</Tip> and <Tip>Gale Scar</Tip> each have a 50% chance to add damage on every hit, multiplied by the huge hit counts of <Tip>Lightning Grid</Tip> and <Tip>Judgment Thunder</Tip>.</p>
              <p>If you play solo, you can swap <Tip>Formation Breaker</Tip> for <Tip>Divine Wrath</Tip> for more damage.</p>
            </Tab>
            <Tab label="Fire Burn">
              <Build
                techniques={['Ravaging Flame', 'Blackflame Scorch', 'Flare Eruption', 'Blast Spirit']}
                charms={['Scorching Resonance', 'Phoenix Rise', 'Ember Flare', 'Pyre of Souls']}
              />
              <p>Keep as many burning grids around you as possible so <Tip>Scorching Resonance</Tip> maxes out, then use <Tip>Flare Eruption</Tip> as the finisher.</p>
              <p>Note that <Tip>Flare Eruption</Tip> absorbs (removes) Burn, so use it after you have made use of the Burn for <Tip>Scorching Resonance</Tip>.</p>
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Entropist" icon="skills/classes/compass/class-29.webp">
          <Alert type="red" title="Class not released yet">
            <p>Entropist is this line’s tier 8 class and is <strong>not in the current version yet</strong>. Skill data comes from the game files and may change at launch. The build below is only a preview.</p>
          </Alert>
          <p>Entropist focuses on <strong>Water control with Rimebound</strong> and <strong>long-lasting Fire Burn</strong>.</p>
          <p><Tip>Frostflow Pact</Tip> applies 1 Rime Mark stack every time a Water technique hits, and at 4 stacks guarantees Rimebound. <Tip>Rime Shackle</Tip> and <Tip>Frost Undertow</Tip> also have a chance to inflict Rimebound directly.</p>
          <p><Tip>Fluidshift</Tip> reduces damage taken and stores part of the damage enemies deal to convert into Marks, stronger the more Water techniques you equip.</p>
          <p>On the Fire side, <Tip>Cinder Dominion</Tip> extends Burn by 2 turns and explodes when Burn expires, and <Tip>Flameward</Tip> reduces damage taken based on the number of burning grids around you.</p>
          <Tabs>
            <Tab label="Water Rimebound">
              <Build
                techniques={['Tideburst', 'Frostfall Assault', 'Rime Shackle', 'Frost Shatter']}
                charms={['Riptide', 'Frost Undertow', 'Fluidshift', 'Frostflow Pact']}
              />
              <p>Every technique is Water, so <Tip>Riptide</Tip> enters Tideform very quickly and <Tip>Fluidshift</Tip> has its highest storage rate.</p>
            </Tab>
            <Tab label="Fire Burn">
              <Build
                techniques={['Emberfall Inferno', 'Ashfall Inferno', 'Blackflame Scorch', 'Flare Eruption']}
                charms={['Cinder Dominion', 'Flameward', 'Scorching Resonance', 'Phoenix Rise']}
              />
              <p><Tip>Emberfall Inferno</Tip> deals extra damage for each burning grid in range, and <Tip>Ashfall Inferno</Tip> is 5% stronger for each burning grid around the target. Burn the ground with <Tip>Blackflame Scorch</Tip> first.</p>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}
