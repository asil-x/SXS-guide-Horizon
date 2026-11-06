import { Alert } from '../../components/guide';

export default function Page() {
  return (
    <>
      <Alert type="red" title="Gear slot limits">
        <p>Some substats can appear in more slots than the in-game data says.</p>
        <p>It is unclear why, but <strong>keep this in mind when checking which substats roll where</strong>.</p>
      </Alert>
      <table className="data-table">
        <thead>
          <tr><th>Stat / Name</th></tr>
        </thead>
        <tbody>
          <tr><td>ATK</td></tr>
          <tr><td>DEF</td></tr>
          <tr><td>HP</td></tr>
          <tr><td>SPD</td></tr>
          <tr><td>Crit Rate</td></tr>
          <tr><td>Block Rate</td></tr>
          <tr><td>Crit RES</td></tr>
          <tr><td>Accuracy</td></tr>
          <tr><td>Crit Rate, Crit DMG</td></tr>
          <tr><td>Block Rate, Block Efficiency</td></tr>
          <tr><td>Crit Rate, Accuracy</td></tr>
          <tr><td>Crit RES, Block Rate</td></tr>
          <tr><td>DMG RES, Healing Boost</td></tr>
          <tr><td>PvP Bonus DMG, PvP DMG RES</td></tr>
          <tr><td>PvE Bonus DMG, PvE DMG RES</td></tr>
          <tr><td>[Dungeon] Gear Drop Ascension Rate:</td></tr>
          <tr><td>Dungeon: 2× Rating Reward Rate</td></tr>
          <tr><td>Verdantglade Dungeon: Gear Drop Promotion Rate</td></tr>
          <tr><td>[Verdantglade Dungeon] 2× Rating Reward Rate:</td></tr>
          <tr><td>Cinder Ridge Dungeon: Gear Drop Promotion Rate</td></tr>
          <tr><td>[Cinder Ridge Dungeon] 2× Rating Reward Rate:</td></tr>
          <tr><td>Aqualis Dungeon: Gear Drop Promotion Rate</td></tr>
          <tr><td>[Aqualis Dungeon] 2× Rating Reward Rate:</td></tr>
          <tr><td>Loong Haven Dungeon: Gear Drop Promotion Rate</td></tr>
          <tr><td>[Loong Haven Dungeon] 2× Rating Reward Rate:</td></tr>
          <tr><td>Aethyris Dungeon: Gear Drop Promotion Rate</td></tr>
          <tr><td>[Aethyris Dungeon] 2× Rating Reward Rate:</td></tr>
          <tr><td>Harpadia Dungeon: Gear Drop Ascend Rate</td></tr>
          <tr><td>Harpadia Dungeons - 2× Rating Reward Rate</td></tr>
          <tr><td>Gear Affixes (The wearer takes less Technique DMG when shielded.)</td></tr>
          <tr><td>DEF Conversion to ATK</td></tr>
          <tr><td>SPD Conversion to ATK</td></tr>
          <tr><td>HP Conversion to ATK</td></tr>
          <tr><td>Effect Hit Rate Conversion to ATK</td></tr>
          <tr><td>Effect RES Conversion to ATK</td></tr>
          <tr><td>Fire Ring (Deals Fire DMG once to all enemies within 2 grids of the caster.)</td></tr>
          <tr><td>Electric Arc (Deals Light DMG once to the attacker. The effect then chains to 1 random enemy within 4 grids of the target, up to 9 times. Each enemy can only be hit once by the chain effect.)</td></tr>
          <tr><td>Auto Protection (Grants the caster a shield based on the caster's max HP for 2 turns.)</td></tr>
          <tr><td>Shock Blast (Deals Wind DMG once to all enemies within a 1-grid square area of the caster, with a 100% base chance to knock them back by 1 grid.)</td></tr>
          <tr><td>Magma (Inflicts Burn on grids within 1 grid of the caster.)</td></tr>
          <tr><td>Assault (Deals Physical DMG once to all enemies within 1 grid of the caster.)</td></tr>
          <tr><td>Gear Affixes (When taking Technique DMG, the wearer has a chance to teleport to any empty grid within 2 grids.)</td></tr>
          <tr><td>Dodge Chain (Deals Light DMG once to all enemies hit by the Technique.)</td></tr>
          <tr><td>Chi Explosion (Deals Wind DMG once to all enemies hit by the Technique.)</td></tr>
          <tr><td>Blazing Burst (Deals Fire DMG once to the target hit by the Technique and all enemies within 1 grid of the target.)</td></tr>
          <tr><td>Surging Blast (Deals Fire True DMG once to all enemies within 2 grids of the killed target. The DMG dealt is a percentage of the overkill DMG.)</td></tr>
          <tr><td>Extra Protection (Additionally grants the healed ally a shield based on the caster's Max HP for 2 turns.)</td></tr>
          <tr><td>Meteor Strike (Selects a random target within 5 grids of the caster. Deals Fire DMG once to all enemies within a 1-grid square area of the target.)</td></tr>
          <tr><td>Thunder Strike (Deals Light DMG once to the target.)</td></tr>
          <tr><td>Wind Shield (Grants the caster a shield based on their max HP.)</td></tr>
          <tr><td>Summon: Gnoll Bruiser (Summons 1 Gnoll Bruiser in front of the caster that immediately acts. The summon inherits a percentage of the caster's stats and remains for up to 5 turns.)</td></tr>
          <tr><td>Summon: Gnoll Flinger (Summons 1 Gnoll Flinger behind the caster that immediately acts. The summon inherits a percentage of the caster's stats and remains for up to 5 turns.)</td></tr>
          <tr><td>Purify (Dispels 1 random ailment or debuff from the caster.)</td></tr>
          <tr><td>Soul Devour (Heals the caster once.)</td></tr>
          <tr><td>Water Blast (Deals Water DMG once to all enemies within a 1-grid square area of the caster.)</td></tr>
          <tr><td>Divination (The wearer randomly gains 1 buff for 4 turns. Cannot be dispelled.)</td></tr>
          <tr><td>Thorn Lash (Deals Physical DMG once to enemies.)</td></tr>
          <tr><td>Insight (Increases the wearer's Accuracy for 1 turn, up to 3 stacks.)</td></tr>
          <tr><td>Fortitude (Increases the wearer's Crit RES for 1 turn, up to 3 stacks.)</td></tr>
          <tr><td>Resonance (Grants an ATK boost for each summon of the wearer on the field, up to 3 stacks. Cannot be dispelled.)</td></tr>
          <tr><td>Wind Slash (Deals Wind DMG once to the attacking enemy and all enemies within 1 grid of the target enemy.)</td></tr>
          <tr><td>Backlash (Deals Dark DMG once to an enemy target that inflicts Ailment or debuff on the wearer.)</td></tr>
          <tr><td>Fervor (Increases ATK for all allied characters within 3 grids of the caster for 2 turns. This effect is unique.)</td></tr>
          <tr><td>Ghostfire Bloom (Deals Dark DMG once to all enemies within 2 grids of the caster.)</td></tr>
          <tr><td>Scorch (Deals Fire DMG once to all enemies in a 1-grid square area of the bearer. Triggers: when the status is gained, at the start of the bearer's turn, after the bearer moves, and when enemy targets enter the range.)</td></tr>
          <tr><td>Battle Zeal Surge (Advances the action bar of all allied character within 3 grids of the wearer by 50%.)</td></tr>
          <tr><td>Kinetic Strike (Deals Physical DMG once to all enemies within a 1×3 grid area in front of the wearer.)</td></tr>
        </tbody>
      </table>
    </>
  );
}
