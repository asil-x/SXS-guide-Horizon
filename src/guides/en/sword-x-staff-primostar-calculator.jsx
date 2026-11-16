import { PrimostarCalc } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>At the end of a season, every level you raised <strong>above the season floor</strong> (character, gear, skills, Fantomons, relics) turns into points, and the points turn into <strong>Primostars</strong> that unlock the Astral Pact. This calculator does that conversion for you.</p>
      <ol>
        <li>Pick the season you are in, enter your Primostars from past seasons and your goal (optional).</li>
        <li>Enter your current level in each system. For gear, skills, Fantomons and relics just enter the <strong>average level</strong>.</li>
        <li>See how many Primostars you get, the next Astral Pact milestone, and if you are short, which system to raise and what it costs.</li>
      </ol>
      <p>For the full story on Primostars and the Astral Pact, see the Season, Primostar &amp; Astral Pact guide.</p>
      <PrimostarCalc />
    </>
  );
}
