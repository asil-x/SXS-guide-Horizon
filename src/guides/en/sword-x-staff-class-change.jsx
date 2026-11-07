import { Alert, ClassChange, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Changing class <strong>does not lose your skills</strong>. Every skill you own is converted into a skill of the new class, and <strong>keeps both its rank and level</strong>. So moving from Knight to Duelist (or even from the Warrior line to the Mage line) does not mean grinding from scratch.</p>
      <p>The question is which skill becomes which. The game uses a fixed matching rule, so if you understand it you will know in advance where your high-rank skills can land and pick the best option.</p>

      <hr />

      <h2 id="rules">Skill matching rules</h2>
      <p>The game goes through each tier of both class lines in turn. At each tier, skills are grouped by:</p>
      <ul>
        <li><strong>Type:</strong> Technique (active) or Charm (passive)</li>
        <li>The skill’s <strong>starting rarity</strong>: Rare, Epic or Legendary</li>
      </ul>
      <p>A skill <strong>can only become a skill of the same group and the same tier</strong> in the new class. For example, a Legendary Technique at Knight tier 2 can only become a Legendary Technique at Duelist tier 2, never a Charm or a skill from another tier.</p>
      <table className="data-table">
        <thead><tr><th>Case</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td>Group has only 1 skill</td><td>Always becomes that skill</td></tr>
          <tr><td>Group has 2 skills</td><td>50/50 in each option</td></tr>
          <tr><td>Tier 1, different root (Warrior ↔ Mage)</td><td>Groups of 4 to 5 skills, much harder to predict</td></tr>
          <tr><td>Tier 1, same root (e.g. Knight → Duelist)</td><td>Tier 1 skills stay the same</td></tr>
        </tbody>
      </table>

      <h3 id="plans">3 options to choose from</h3>
      <p>When you start a class change, the game generates <strong>3 options</strong> and you pick 1. The game tries to make the 3 options differ in where the skills <em>you own</em> end up, so you almost always have a real choice.</p>
      <Alert title="Tip for choosing">
        <p>Do not just look at the big picture. Find your <strong>2 to 3 highest-rank skills</strong> (usually the ones you poured the most resources into) and pick the option that turns them into skills your new build actually uses. Where the remaining low-rank skills land matters much less.</p>
      </Alert>

      <h3 id="what-moves">What carries over</h3>
      <ul>
        <li>Skill <strong>rank and level</strong> carry over to the new skill.</li>
        <li><strong>Skill shards</strong> are converted using the same pairs.</li>
        <li><strong>Class level and class badges</strong> carry over along the line.</li>
        <li>Higher tiers you have not unlocked yet are matched with the same rules, in case you already own skills from those tiers.</li>
      </ul>

      <h3 id="cost">Cost and timing</h3>
      <ul>
        <li><strong>Free once every 168 hours</strong> (7 days). Otherwise you need a class change item.</li>
        <li>You can <strong>cancel within 8 hours</strong> and everything is restored. Very useful if you switch to try a new build and it does not suit you.</li>
      </ul>
      <Alert type="red" title="Note">
        <p>Since you only get one free change a week, <strong>check all 3 options carefully before confirming</strong>. If none of them work, close it and wait for next time rather than rushing and spending items to fix it.</p>
      </Alert>

      <hr />

      <h2 id="lookup">Lookup: which skill becomes which</h2>
      <p>Pick your current class and the class you want to change to. The table below lists each tier: the “… skills” column is what you own, the “Can become” column is what each skill <strong>can</strong> turn into. Tap a skill for details.</p>
      <ClassChange from="Knight" to="Duelist" />
      <p className="muted">The table only shows what is possible. The actual options are rolled by the game server when you press change class.</p>

      <hr />

      <h2 id="when">When should you change class?</h2>
      <ul>
        <li><strong>At the start of a new season</strong>, when the meta shifts and new skill tiers launch. This is also when most people switch builds.</li>
        <li><strong>When your guild is missing a role</strong> (usually tank or healer for raids and Nexus). Knight and Sage are always in demand.</li>
        <li><strong>When you already own high-rank skills of the other class</strong>, for example from <Tip>Stellatie</Tip> and Goddess Prayer. Then changing class costs almost nothing.</li>
      </ul>
      <p>On the other hand, if your current build relies on 1 to 2 very high-rank Legendary skills and their group in the new class has 2 choices, think carefully: you only have a 50% chance of keeping an equivalent skill in each option.</p>

      <h3 id="tier-8">Tier 8 unlock requirements</h3>
      <p>Tier 8 classes (Caelifer, Infernifer, Entropist, Omnifex) launch with Season 6 and the Aeperis kingdom. Reaching tier 8 requires <strong>character level 230, class level 480 and your tier 7 class at level 55</strong>.</p>

    </>
  );
}
