import { ExpCalc } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Enter your current level and the level you want to reach to see how much EXP it takes. Add the numbers from your Bed (Base EXP Yield, Production Bonus, EXP Reserve) and it also works out the hours and days. For Fantomons it converts the EXP into Treats.</p>
      <p>Note: in each season the levels <strong>above the season floor</strong> (for example above 100 in Season 1) cost far more EXP, so pick the season you are actually in.</p>
      <ExpCalc />
    </>
  );
}
