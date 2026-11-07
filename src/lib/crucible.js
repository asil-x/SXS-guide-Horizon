// SINH TỰ ĐỘNG từ dữ liệu quái của Purrwikimania (purrwikimania.com/enemies, Crucible of Hieromon)
// và bộ skill (pool) của từng class trong src/data/en. Muốn cập nhật thì nhờ tổng hợp lại từ 2 nguồn trên.
// counters[nhánh][tier].by[id Hieromon] = các technique gợi ý (tối đa 4) theo cơ chế của con đó.
export const CRUCIBLE_UPDATED = '2026-11-07';
export const LADDER = [{"name":"Apprentice","tiers":1,"lv":[30,30],"bosses":[3703]},{"name":"Elite","tiers":3,"lv":[40,60],"bosses":[3704,3703]},{"name":"Expert","tiers":6,"lv":[70,152],"bosses":[3703,3704,3705]},{"name":"Champion","tiers":10,"lv":[100,260],"bosses":[3704,3705,3706,3703]},{"name":"Master","tiers":16,"lv":[130,371],"bosses":[3703,3704,3705,3706]},{"name":"Paragon","tiers":17,"lv":[160,379],"bosses":[3705,3706,3703,3704,3707]},{"name":"Saint","tiers":17,"lv":[190,394],"bosses":[3705,3706,3707,3708,3703,3704]},{"name":"Godtouched","tiers":14,"lv":[222,419],"bosses":[3705,3706,3707,3708]}];
export const HIEROMONS = [
 {
  "id": 3703,
  "name": "Storm Griffin",
  "icon": "G_3703",
  "stats": {
   "Attack": 157.5,
   "Defence": 80,
   "Speed": 156
  },
  "from": "Apprentice",
  "skills": [
   {
    "n": "Judgment to Demise",
    "d": "Deals Physical DMG once to all enemies within a 4×2 grid area in front of the caster.",
    "passive": false
   },
   {
    "n": "Cyclone Wheel",
    "d": "Deals Wind DMG multiple times to all enemies in a 4×6 grid area in front of the caster, with a 100% chance to knock them back 1 grid.",
    "passive": false
   },
   {
    "n": "Tempestuous Waltz",
    "d": "Randomly summons 8 destructible wind-thunder orbs within 3 grids of the caster. After 2 turns, the orbs explode, dealing Wind DMG once to all enemies within a 4-grid circular area around each orb.",
    "passive": false
   },
   {
    "n": "Stellar Descent",
    "d": "Randomly drops 24 star rays within 2 grids of the caster. Each ray deals Wind DMG once to all enemies within a 1-grid square area of the caster. (Hieromon casts this skill in Rage state.)",
    "passive": false
   },
   {
    "n": "Zephyr's Blessing",
    "d": "Triggers Raged state when the caster's HP falls below 50% for the first time, increasing SPD and DMG. This effect cannot be dispelled.",
    "passive": true
   },
   {
    "n": "Cyclone Guardian",
    "d": "Summons a whirlwind that moves around the caster after the caster takes cumulative DMG equal to 15% of max HP. Deals Wind DMG once to all enemies within 4 grids of the caster.",
    "passive": true
   },
   {
    "n": "Super Cyclone Guardian",
    "d": "Summons 3 whirlwinds that moves around the caster after the caster takes cumulative DMG equal to 15% of max HP. Deals Wind DMG 3 times to all enemies within 4 grids of the caster. (Replaces Cyclone Guardian in Rage state.)",
    "passive": true
   },
   {
    "n": "Wind Elemental",
    "d": "Primarily composed of Wind element, the caster takes 20% less Wind DMG and 20% higher Fire DMG.",
    "passive": true
   },
   {
    "n": "Mettle of Trial",
    "d": "Grants 1 stack of stat boost for every 5% HP the caster loses, up to 10 stacks. Cannot be dispelled.",
    "passive": true
   }
  ],
  "atk": [
   "Wind",
   "Physical"
  ],
  "weak": "Fire",
  "resist": "Wind"
 },
 {
  "id": 3704,
  "name": "Flamoenix",
  "icon": "G_3704",
  "stats": {
   "Attack": 165,
   "Defence": 90,
   "Speed": 96
  },
  "from": "Elite",
  "skills": [
   {
    "n": "Inferno Cannon",
    "d": "Deals Fire DMG twice to 1 enemy within 5 grids of the caster.",
    "passive": false
   },
   {
    "n": "Searing Beam",
    "d": "Selects a grid within 5 grids of the caster. Deals Fire DMG once to all enemies within a 2-grid square area of the target grid.",
    "passive": false
   },
   {
    "n": "World in Flames",
    "d": "Deals Fire DMG once to all enemies within a 3-grid circular area around the caster.",
    "passive": false
   },
   {
    "n": "Phoenix Dive",
    "d": "Dives to any empty grid within 5 grids of the caster. Deals Fire DMG once to all enemies within 3 grid of the caster. (Hieromon casts this skill in Rage state.)",
    "passive": false
   },
   {
    "n": "Life Siphon",
    "d": "Grants 20 stacks of Life Siphon at battle start, increasing Lifesteal, up to 20 stacks. Loses 1 stack when taking Technique DMG. Grants 10 stacks of Life Siphon at the end of the caster's turn.",
    "passive": true
   },
   {
    "n": "Inferno's Blessing",
    "d": "Triggers Raged state when the caster's HP falls below 50% for the first time, increasing SPD and DMG. This effect cannot be dispelled.",
    "passive": true
   },
   {
    "n": "Heatwave",
    "d": "After the caster takes cumulative DMG equal to 15% of max HP, releases a fire ring that deals Fire DMG once to all enemies within 2 grids of the caster.",
    "passive": true
   },
   {
    "n": "Ashes to Ashes",
    "d": "After the caster takes cumulative DMG equal to 15% of max HP, releases a fire ring that deals Fire DMG once to all enemies within 3 grids of the caster. (Replaces Heatwave in Rage state.)",
    "passive": true
   },
   {
    "n": "Trial by Fire",
    "d": "Deals Fire DMG once to enemies entering within 1 grid of the caster. Additionally triggers once at the start of each turn.",
    "passive": true
   },
   {
    "n": "Fire Elemental",
    "d": "Primarily composed of Fire element, the caster takes 20% less Fire DMG and 20% higher Water DMG.",
    "passive": true
   },
   {
    "n": "Mettle of Trial",
    "d": "Grants 1 stack of stat boost for every 5% HP the caster loses, up to 10 stacks. Cannot be dispelled.",
    "passive": true
   }
  ],
  "atk": [
   "Fire"
  ],
  "weak": "Water",
  "resist": "Fire"
 },
 {
  "id": 3705,
  "name": "Yamata no Orochi",
  "icon": "G_3705",
  "stats": {
   "Attack": 150,
   "Speed": 120
  },
  "from": "Expert",
  "skills": [
   {
    "n": "Charm Shot",
    "d": "Selects a grid within 6 grids of the caster. Deals Water DMG once to all enemies in 1 grid of the target grid.",
    "passive": false
   },
   {
    "n": "Hydro Laser",
    "d": "Deals Water DMG once to all enemies in a 6-row trapezoid area in front of the caster.",
    "passive": false
   },
   {
    "n": "Hyakki Yagyo",
    "d": "Summons 4 Fishlings in front of the caster. They remain on the battlefield for up to 5 turns.",
    "passive": false
   },
   {
    "n": "Orochi Frenzy",
    "d": "Deals Water DMG 3 times to all enemies within 5 grids of the caster. (Hieromon casts this skill in Rage state.)",
    "passive": false
   },
   {
    "n": "Snake Fang",
    "d": "Each time the caster's Technique deals DMG to an enemy, there's a 60% base chance to inflict Snake Fang for 3 turns. [Snake Fang: Deals Water DMG once at the start of the bearer's turn. Snake Fang lasts for 3 turns and can stack.]",
    "passive": true
   },
   {
    "n": "Waterland's Blessing",
    "d": "Triggers Raged state when the caster's HP falls below 50% for the first time, increasing SPD and DMG. This effect cannot be dispelled.",
    "passive": true
   },
   {
    "n": "Rushing Waves",
    "d": "After the caster takes cumulative DMG equal to 15% of max HP, deals Water DMG once to all enemies within 3 grids of the caster.",
    "passive": true
   },
   {
    "n": "Crashing Waves",
    "d": "After the caster takes cumulative DMG equal to 15% of max HP, deals Water DMG twice to all enemies within 6 grids of the caster. (Replaces Rushing Waves in Rage state.)",
    "passive": true
   },
   {
    "n": "Water Elemental",
    "d": "Primarily composed of Water element, the caster takes 20% less Water DMG and 20% higher Wind DMG.",
    "passive": true
   },
   {
    "n": "Mettle of Trial",
    "d": "Grants 1 stack of stat boost for every 5% HP the caster loses, up to 10 stacks. Cannot be dispelled.",
    "passive": true
   }
  ],
  "atk": [
   "Water"
  ],
  "weak": "Wind",
  "resist": "Water"
 },
 {
  "id": 3706,
  "name": "Primordial Loong",
  "icon": "G_3706",
  "stats": {
   "Attack": 150,
   "Speed": 120
  },
  "from": "Champion",
  "skills": [
   {
    "n": "Fire Shot",
    "d": "Selects a target within 6 grids of the caster. Deals Fire DMG once to all enemies within 1 grid of the target.",
    "passive": false
   },
   {
    "n": "Flame Strike",
    "d": "Deals Fire DMG once to all enemies within a 5×3 grid area in front of the caster.",
    "passive": false
   },
   {
    "n": "Blaze Tango",
    "d": "Deals Fire DMG 6 times to all enemies within 3 grids of the caster.",
    "passive": false
   },
   {
    "n": "Thunder Plasma",
    "d": "Selects a target within 6 grids of the caster. Deals Light DMG once to all enemies within 1 grid of the target. (Used in Primal Awakening state.)",
    "passive": false
   },
   {
    "n": "Lightning Strike",
    "d": "Deals Light DMG once to all enemies in a 5×3 grid area in front of the caster. (Used in Primal Awakening state.)",
    "passive": false
   },
   {
    "n": "Thunder Samba",
    "d": "Deals Light DMG 6 times to all enemies within 3 grids of the caster. (Used in Primal Awakening state.)",
    "passive": false
   },
   {
    "n": "Loong's Fury",
    "d": "Selects a target within 6 grids of the caster. Deals Light DMG 5 times to all enemies within 3 grids of the target. For every 5% HP lost by an enemy, this skill deals 5% more DMG to that enemy, up to a max of 50% increase. (Used in Primal Awakening state.)",
    "passive": false
   },
   {
    "n": "Innate Luck: ATK Boost",
    "d": "At the end of the caster's turn, grants 1 random boost (+10% ATK, +10% DEF, or +10% SPD) for 1 turn.",
    "passive": false
   },
   {
    "n": "Innate Luck",
    "d": "At the end of the caster's turn, grants 1 random boost (+10% ATK, +10% DEF, or +10% SPD) for 1 turn.",
    "passive": true
   },
   {
    "n": "Primal Awakening",
    "d": "Increases SPD and DMG when the Primordial Loong's HP falls below 50% for the first time, while enabling Light skills. This effect cannot be dispelled.",
    "passive": true
   },
   {
    "n": "Magma Gush",
    "d": "After the caster takes cumulative DMG equal to 15% of max HP, deals Fire DMG once to all enemies within 3 grids of the caster.",
    "passive": true
   },
   {
    "n": "Purifying Thunders",
    "d": "After the caster takes cumulative DMG equal to 15% of max HP, deals Light DMG once to all enemies within 6 grids of the caster. (Used in Primal Awakening state.)",
    "passive": true
   },
   {
    "n": "Loong Ward",
    "d": "When attacked by enemies, there is a 50% chance to counterattack, dealing Light DMG once to the attacker.",
    "passive": true
   },
   {
    "n": "Mettle of Trial",
    "d": "Grants 1 stack of stat boost for every 5% HP the caster loses, up to 10 stacks. Cannot be dispelled.",
    "passive": true
   }
  ],
  "atk": [
   "Fire",
   "Light"
  ]
 },
 {
  "id": 3707,
  "name": "Galactic Mecha",
  "icon": "G_3707",
  "stats": {},
  "from": "Paragon",
  "skills": [
   {
    "n": "Matrix Module - Ray",
    "d": "Randomly selects 3 grids within 3 grids of the caster. Deals Physical DMG once to all enemies within 1 grid of the target grid.",
    "passive": false
   },
   {
    "n": "Dynamic Calculation - Void Singularity",
    "d": "Deals Physical DMG once to all enemies within 5 grids of the caster and pulls them to the caster.",
    "passive": false
   },
   {
    "n": "Sky Verdict - Skyrending Particle Beam",
    "d": "Deals Physical DMG 3 times to all enemies within a 5×6 grid area in front of the caster.",
    "passive": false
   },
   {
    "n": "Matrix Module - Combustion",
    "d": "Selects a target within 6 grids of the caster. Deals Light DMG once to all enemies within 2 grids of the target, with a 25% base chance to inflict Starblight for 2 turns, up to 10 stacks. Cannot be dispelled. [Used in Rampage Reboot state]",
    "passive": false
   },
   {
    "n": "Dynamic Calculation - Starbreak Impact",
    "d": "Leaps to any empty space within 5 grids of the caster, dealing Light DMG once to all enemies within 3 grid of the caster, with a 25% base chance to inflict Starblight for 2 turns, up to 10 stacks. Cannot be dispelled. [Used in Rampage Reboot state]",
    "passive": false
   },
   {
    "n": "Sky Verdict - Supernova Decree",
    "d": "Selects a grid within 6 grids of the caster. Randomly deals Light DMG 18 times within 4 grids of the target grid, hitting at least 6 times, with a 25% base chance to inflict Starblight for 2 turns, up to 10 stacks. Cannot be dispelled. [Used in Rampage Reboot state]",
    "passive": false
   },
   {
    "n": "Cosmic Endfall",
    "d": "Deals Light DMG 10 times to all enemies. [Used in Rampage Reboot state]",
    "passive": false
   },
   {
    "n": "Trial - Rampage Reboot",
    "d": "When Galactic Mecha's HP falls below 50% for the first time, it switches to Rampage Form and enables a Light skill set.",
    "passive": true
   },
   {
    "n": "Field Guard",
    "d": "Grants 50 stacks of DMG Reduction at battle start, which cannot be dispelled. Loses 1 stack upon taking Technique DMG.",
    "passive": true
   },
   {
    "n": "Mettle of Trial",
    "d": "Grants 1 stack of stat boost for every 5% HP the caster loses, up to 10 stacks. Cannot be dispelled.",
    "passive": true
   }
  ],
  "atk": [
   "Physical",
   "Light"
  ]
 },
 {
  "id": 3708,
  "name": "Yoldra",
  "icon": "G_3708",
  "stats": {},
  "from": "Saint",
  "skills": [
   {
    "n": "Base Strike",
    "d": "Deals Physical DMG once to all enemies within a 4×2 grid area in front of the caster.",
    "passive": false
   },
   {
    "n": "Frostwyrm Breath",
    "d": "Sequentially deals Water DMG once to all enemies within a 4×2, 4×3, 4×4 grid area in front of the caster. (Used in Frostchill state.)",
    "passive": false
   },
   {
    "n": "Crimson Blaze",
    "d": "Deals Fire DMG 6 times to all enemies within a 4×3 grid area in front of the caster. (Used in Blazing state.)",
    "passive": false
   },
   {
    "n": "Lament Rain",
    "d": "Selects a grid within 4 grids of the caster. Deals Water DMG once to all enemies within 1 grid of the target grid, with a 20% base chance to inflict Frozen for 1 turn, and an 80% chance to increase caster's Accuracy for 2 turns. (Used in Frostchill state.)",
    "passive": false
   },
   {
    "n": "Hellfire Purge",
    "d": "Deals Fire DMG 3 times to all enemies within 2 grids of the caster, with an 80% chance to increase caster's Crit Rate for 2 turns. (Used in Blazing state.)",
    "passive": false
   },
   {
    "n": "Element Shift",
    "d": "Upon entering battle, Yoldra switches from the Equilibrium to the Frostchill. When taking Fire Technique DMG equal to a certain percentage of its max HP, it will switch from the Frostchill to the Blazing. When taking Water Technique DMG equal to a certain percentage of its max HP, it will switch from the Blazing back to the Frostchill.",
    "passive": true
   },
   {
    "n": "Dual Surge",
    "d": "Each Fire Technique cast grants a stack of Inferno, stacking up to 100 times.. Each Water Technique cast grants a stack of Tideform , stacking up to 100 times.",
    "passive": true
   }
  ],
  "atk": [
   "Water",
   "Fire",
   "Physical"
  ]
 }
];
export const COUNTERS = {"duelist":{"1":{"cls":"Warrior","by":{"3703":{"main":[],"fill":["Whirlwind Slash","Lion Combo"]},"3704":{"main":[],"fill":["Whirlwind Slash","Lion Combo"]},"3705":{"main":["Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":["Whirlwind Slash"]},"3706":{"main":["Heavy Impact","Mountain Collapse","Wind Blade Slash","Quadrant Slash"],"fill":[]},"3707":{"main":["Whirlwind Slash","Lion Combo"],"fill":[]},"3708":{"main":["Whirlwind Slash","Lion Combo","Heavy Impact","Mountain Collapse"],"fill":[]}}},"2":{"cls":"Duelist","by":{"3703":{"main":["Shattering Sigil"],"fill":["Sunset Sword","Whirlwind Slash","Lion Combo"]},"3704":{"main":[],"fill":["Sunset Sword","Whirlwind Slash","Lion Combo"]},"3705":{"main":["Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":["Sunset Sword"]},"3706":{"main":["Heavy Impact","Mountain Collapse","Darkness Descends","Wind Blade Slash"],"fill":[]},"3707":{"main":["Sunset Sword","Whirlwind Slash","Lion Combo"],"fill":[]},"3708":{"main":["Sunset Sword","Whirlwind Slash","Lion Combo","Heavy Impact"],"fill":[]}}},"3":{"cls":"Berserker","by":{"3703":{"main":["Shattering Sigil"],"fill":["Eclipse Slash","Sunset Sword","Whirlwind Slash"]},"3704":{"main":[],"fill":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Lion Combo"]},"3705":{"main":["Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":["Eclipse Slash"]},"3706":{"main":["Heavy Impact","Mountain Collapse","Darkness Descends","Doom Blade"],"fill":[]},"3707":{"main":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Lion Combo"],"fill":[]},"3708":{"main":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Lion Combo"],"fill":[]}}},"4":{"cls":"Conqueror","by":{"3703":{"main":["Flickering Blade","Shattering Sigil","Flash Fire"],"fill":["Eclipse Slash"]},"3704":{"main":[],"fill":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Lion Combo"]},"3705":{"main":["Blade Storm","Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":[]},"3706":{"main":["Heavy Impact","Mountain Collapse","Darkness Descends","Doom Blade"],"fill":[]},"3707":{"main":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Lion Combo"],"fill":[]},"3708":{"main":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Lion Combo"],"fill":[]}}},"5":{"cls":"Ravager","by":{"3703":{"main":["Solaris Storm","Flickering Blade","Shattering Sigil","Flash Fire"],"fill":[]},"3704":{"main":[],"fill":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Lion Combo"]},"3705":{"main":["Blade Storm","Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":[]},"3706":{"main":["Heavy Impact","Mountain Collapse","Darkness Descends","Doom Blade"],"fill":[]},"3707":{"main":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Lion Combo"],"fill":[]},"3708":{"main":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Lion Combo"],"fill":[]}}},"6":{"cls":"Marauder","by":{"3703":{"main":["Solaris Storm","Flickering Blade","Shattering Sigil","Flash Fire"],"fill":[]},"3704":{"main":[],"fill":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Raining Blades"]},"3705":{"main":["Blade Storm","Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":[]},"3706":{"main":["Sinseal","Heavy Impact","Mountain Collapse","Darkness Descends"],"fill":[]},"3707":{"main":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Raining Blades"],"fill":[]},"3708":{"main":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Raining Blades"],"fill":[]}}},"7":{"cls":"Doomreaver","by":{"3703":{"main":["Solaris Storm","Flickering Blade","Starfire Annihilation","Shattering Sigil"],"fill":[]},"3704":{"main":[],"fill":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Raining Blades"]},"3705":{"main":["Blade Storm","Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":[]},"3706":{"main":["Sinseal","Heavy Impact","Mountain Collapse","Darkness Descends"],"fill":[]},"3707":{"main":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Raining Blades"],"fill":[]},"3708":{"main":["Eclipse Slash","Sunset Sword","Whirlwind Slash","Raining Blades"],"fill":[]}}}},"knight":{"1":{"cls":"Warrior","by":{"3703":{"main":[],"fill":["Whirlwind Slash","Lion Combo"]},"3704":{"main":[],"fill":["Whirlwind Slash","Lion Combo"]},"3705":{"main":["Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":["Whirlwind Slash"]},"3706":{"main":["Heavy Impact","Mountain Collapse","Wind Blade Slash","Quadrant Slash"],"fill":[]},"3707":{"main":["Whirlwind Slash","Lion Combo"],"fill":[]},"3708":{"main":["Whirlwind Slash","Lion Combo","Heavy Impact","Mountain Collapse"],"fill":[]}}},"2":{"cls":"Knight","by":{"3703":{"main":[],"fill":["Whirlwind Slash","Lion Combo"]},"3704":{"main":["Frostbite Blossom"],"fill":["Whirlwind Slash","Lion Combo"]},"3705":{"main":["Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":["Whirlwind Slash"]},"3706":{"main":["Heavy Impact","Mountain Collapse","Ricocheting Shield","Wind Blade Slash"],"fill":[]},"3707":{"main":["Whirlwind Slash","Lion Combo"],"fill":[]},"3708":{"main":["Whirlwind Slash","Lion Combo","Heavy Impact","Mountain Collapse"],"fill":[]}}},"3":{"cls":"Paladin","by":{"3703":{"main":[],"fill":["Whirlwind Slash","Lion Combo"]},"3704":{"main":["Frostbite Blossom","Lunarwater Threads"],"fill":["Whirlwind Slash","Lion Combo"]},"3705":{"main":["Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":["Whirlwind Slash"]},"3706":{"main":["Heavy Impact","Mountain Collapse","Ricocheting Shield","Star Shattering Slash"],"fill":[]},"3707":{"main":["Whirlwind Slash","Lion Combo"],"fill":[]},"3708":{"main":["Whirlwind Slash","Lion Combo","Heavy Impact","Mountain Collapse"],"fill":[]}}},"4":{"cls":"Guardian","by":{"3703":{"main":[],"fill":["Whirlwind Slash","Lion Combo"]},"3704":{"main":["Swirling Blade","Seismic Tide","Frostbite Blossom","Lunarwater Threads"],"fill":[]},"3705":{"main":["Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":["Whirlwind Slash"]},"3706":{"main":["Heavy Impact","Mountain Collapse","Ricocheting Shield","Star Shattering Slash"],"fill":[]},"3707":{"main":["Whirlwind Slash","Lion Combo"],"fill":[]},"3708":{"main":["Whirlwind Slash","Lion Combo","Heavy Impact","Mountain Collapse"],"fill":[]}}},"5":{"cls":"Templar","by":{"3703":{"main":[],"fill":["Whirlwind Slash","Lion Combo","Iron Slashes"]},"3704":{"main":["Swirling Blade","Seismic Tide","Frostbite Blossom","Lunarwater Threads"],"fill":[]},"3705":{"main":["Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":["Whirlwind Slash"]},"3706":{"main":["Heavy Impact","Mountain Collapse","Ricocheting Shield","Star Shattering Slash"],"fill":[]},"3707":{"main":["Whirlwind Slash","Lion Combo","Iron Slashes"],"fill":[]},"3708":{"main":["Whirlwind Slash","Lion Combo","Iron Slashes","Heavy Impact"],"fill":[]}}},"6":{"cls":"Justicar","by":{"3703":{"main":[],"fill":["Whirlwind Slash","Lion Combo","Iron Slashes","Phantom Current"]},"3704":{"main":["Phantom Current","Swirling Blade","Tidal Whirl","Seismic Tide"],"fill":[]},"3705":{"main":["Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":["Whirlwind Slash"]},"3706":{"main":["Heavy Impact","Mountain Collapse","Ricocheting Shield","Star Shattering Slash"],"fill":[]},"3707":{"main":["Whirlwind Slash","Lion Combo","Iron Slashes","Phantom Current"],"fill":[]},"3708":{"main":["Whirlwind Slash","Lion Combo","Iron Slashes","Phantom Current"],"fill":[]}}},"7":{"cls":"Vindicator","by":{"3703":{"main":[],"fill":["Whirlwind Slash","Lion Combo","Flurry Strike","Iron Slashes"]},"3704":{"main":["Phantom Current","Swirling Blade","Tidal Whirl","Seismic Tide"],"fill":[]},"3705":{"main":["Wind Blade Slash","Gravity Pull","Diving Gale"],"fill":["Whirlwind Slash"]},"3706":{"main":["Counter Stance","Heavy Impact","Mountain Collapse","Ricocheting Shield"],"fill":[]},"3707":{"main":["Whirlwind Slash","Lion Combo","Flurry Strike","Iron Slashes"],"fill":[]},"3708":{"main":["Whirlwind Slash","Lion Combo","Flurry Strike","Iron Slashes"],"fill":[]}}}},"sorcerer":{"1":{"cls":"Mage","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball"],"fill":[]},"3704":{"main":["Water Assault","Water Shot","Ice Spike"],"fill":["Tempest Sphere"]},"3705":{"main":["Tempest Sphere","Wind's Delight","Cyclone","Iron Thorn"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Cyclone","Water Shot"],"fill":[]},"3707":{"main":["Tempest Sphere","Flame Jet"],"fill":[]},"3708":{"main":["Tempest Sphere","Water Assault","Wind's Delight","Cyclone"],"fill":[]}}},"2":{"cls":"Sorcerer","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball"],"fill":[]},"3704":{"main":["Water Assault","Water Shot","Ice Spike","Frosty Nova"],"fill":[]},"3705":{"main":["Tempest Sphere","Wind's Delight","Cyclone","Iron Thorn"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Cyclone","Water Shot"],"fill":[]},"3707":{"main":["Tempest Sphere","Flame Jet"],"fill":[]},"3708":{"main":["Tempest Sphere","Water Assault","Wind's Delight","Cyclone"],"fill":[]}}},"3":{"cls":"Archmage","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball","Meteoric Flames"],"fill":[]},"3704":{"main":["Water Assault","Water Shot","Ice Spike","Frosty Nova"],"fill":[]},"3705":{"main":["Howling Hurricane","Tempest Sphere","Wind's Delight","Cyclone"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Cyclone","Water Shot"],"fill":[]},"3707":{"main":["Divine Wrath","Howling Hurricane","Tempest Sphere","Flame Jet"],"fill":[]},"3708":{"main":["Divine Wrath","Howling Hurricane","Tempest Sphere","Water Assault"],"fill":[]}}},"4":{"cls":"Destroyer","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball","Meteoric Flames"],"fill":[]},"3704":{"main":["Flowing Doom","Water Assault","Water Shot","Ice Spike"],"fill":[]},"3705":{"main":["Howling Hurricane","Tempest Sphere","Wind Blade Spiral","Wind's Delight"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Cyclone","Water Shot"],"fill":[]},"3707":{"main":["Divine Wrath","Howling Hurricane","Tempest Sphere","Flowing Doom"],"fill":[]},"3708":{"main":["Divine Wrath","Howling Hurricane","Tempest Sphere","Flowing Doom"],"fill":[]}}},"5":{"cls":"Magister","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball","Meteoric Flames"],"fill":[]},"3704":{"main":["Flowing Doom","Frost Thorn","Water Assault","Water Shot"],"fill":[]},"3705":{"main":["Howling Hurricane","Tempest Sphere","Storm Rhapsody","Wind Blade Spiral"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Cyclone","Water Shot"],"fill":[]},"3707":{"main":["Divine Wrath","Howling Hurricane","Tempest Sphere","Flowing Doom"],"fill":[]},"3708":{"main":["Divine Wrath","Howling Hurricane","Tempest Sphere","Flowing Doom"],"fill":[]}}},"6":{"cls":"Arcanarch","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball","Meteoric Flames"],"fill":[]},"3704":{"main":["Flowing Doom","Frost Thorn","Water Assault","Frigid Spike"],"fill":[]},"3705":{"main":["Howling Hurricane","Tempest Sphere","Riftwind Wheel","Storm Rhapsody"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Cyclone","Frigid Spike"],"fill":[]},"3707":{"main":["Divine Wrath","Judgment Thunder","Howling Hurricane","Tempest Sphere"],"fill":[]},"3708":{"main":["Divine Wrath","Judgment Thunder","Howling Hurricane","Tempest Sphere"],"fill":[]}}},"7":{"cls":"Thaumaturge","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball","Meteoric Flames"],"fill":[]},"3704":{"main":["Flowing Doom","Frost Thorn","Water Assault","Frigid Spike"],"fill":[]},"3705":{"main":["Gale Plume","Howling Hurricane","Tempest Sphere","Riftwind Wheel"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Cyclone","Frigid Spike"],"fill":[]},"3707":{"main":["Divine Wrath","Judgment Thunder","Gale Plume","Howling Hurricane"],"fill":[]},"3708":{"main":["Divine Wrath","Judgment Thunder","Gale Plume","Howling Hurricane"],"fill":[]}}}},"sage":{"1":{"cls":"Mage","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball"],"fill":[]},"3704":{"main":["Water Assault","Water Shot","Ice Spike"],"fill":["Tempest Sphere"]},"3705":{"main":["Tempest Sphere","Wind's Delight","Cyclone","Iron Thorn"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Cyclone","Water Shot"],"fill":[]},"3707":{"main":["Tempest Sphere","Flame Jet"],"fill":[]},"3708":{"main":["Tempest Sphere","Water Assault","Wind's Delight","Cyclone"],"fill":[]}}},"2":{"cls":"Sage","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball"],"fill":[]},"3704":{"main":["Water Assault","Water Shot","Ice Spike"],"fill":["Tempest Sphere"]},"3705":{"main":["Tempest Sphere","Wind's Delight","Cyclone","Iron Thorn"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Shadow Impact","Cyclone"],"fill":[]},"3707":{"main":["Tempest Sphere","Flame Jet"],"fill":[]},"3708":{"main":["Tempest Sphere","Water Assault","Wind's Delight","Shadow Impact"],"fill":[]}}},"3":{"cls":"Arcanist","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball"],"fill":[]},"3704":{"main":["Water Assault","Water Shot","Ice Spike"],"fill":["Tempest Sphere"]},"3705":{"main":["Tempest Sphere","Wind's Delight","Cyclone","Iron Thorn"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Shadow Impact","Shadow of Termination"],"fill":[]},"3707":{"main":["Tempest Sphere","Flame Jet"],"fill":[]},"3708":{"main":["Tempest Sphere","Water Assault","Wind's Delight","Shadow Impact"],"fill":[]}}},"4":{"cls":"Dominator","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball"],"fill":["Dark Starburst"]},"3704":{"main":["Water Assault","Water Shot","Ice Spike"],"fill":["Tempest Sphere"]},"3705":{"main":["Tempest Sphere","Wind's Delight","Cyclone","Iron Thorn"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Shadow Impact","Shadow of Termination"],"fill":[]},"3707":{"main":["Tempest Sphere","Dark Starburst","Flame Jet"],"fill":[]},"3708":{"main":["Tempest Sphere","Dark Starburst","Water Assault","Wind's Delight"],"fill":[]}}},"5":{"cls":"Prophet","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball"],"fill":["Dark Starburst"]},"3704":{"main":["Water Assault","Water Shot","Ice Spike"],"fill":["Tempest Sphere"]},"3705":{"main":["Tempest Sphere","Wind's Delight","Cyclone","Iron Thorn"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Shadow Impact","Shadow of Termination"],"fill":[]},"3707":{"main":["Tempest Sphere","Dark Starburst","Flame Jet","Soul Reap"],"fill":[]},"3708":{"main":["Tempest Sphere","Dark Starburst","Soul Reap","Water Assault"],"fill":[]}}},"6":{"cls":"Hierarch","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball"],"fill":["Dark Starburst"]},"3704":{"main":["Water Assault","Water Shot","Ice Spike"],"fill":["Tempest Sphere"]},"3705":{"main":["Tempest Sphere","Wind's Delight","Cyclone","Iron Thorn"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Shadow Impact","Shadow of Termination"],"fill":[]},"3707":{"main":["Tempest Sphere","Dark Starburst","Flame Jet","Darkveil Formation"],"fill":[]},"3708":{"main":["Tempest Sphere","Dark Starburst","Darkveil Formation","Soul Reap"],"fill":[]}}},"7":{"cls":"Demiurge","by":{"3703":{"main":["Flame Jet","Blazing Fire Ring","Fireball"],"fill":["Dark Starburst"]},"3704":{"main":["Water Assault","Water Shot","Ice Spike"],"fill":["Tempest Sphere"]},"3705":{"main":["Tempest Sphere","Wind's Delight","Cyclone","Iron Thorn"],"fill":[]},"3706":{"main":["Water Assault","Wind's Delight","Shadow Impact","Shadow of Termination"],"fill":[]},"3707":{"main":["Tempest Sphere","Dark Starburst","Flame Jet","Darkveil Formation"],"fill":[]},"3708":{"main":["Tempest Sphere","Dark Starburst","Darkveil Formation","Soul Reap"],"fill":[]}}}}};
