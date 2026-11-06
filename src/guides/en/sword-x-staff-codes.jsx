import { Codes } from '../../components/guide';

export default function Page() {
  return (
    <>
      <h2 id="where-to-claim-codes">How to redeem codes</h2>
      <ol>
        <li>Open the main menu</li>
        <li>Tap User Center</li>
        <li>Go to the “Gift Code” screen</li>
        <li>Enter a code to claim the rewards</li>
      </ol>

      <hr />

      <h2 id="working-codes">Working codes</h2>
      <Codes codes={[
        'SXSWITHYOU',
        'SXSFACEBOOK',
        'LUCKYGACHA',
        'LEVELUPNOW',
        'YUMMYVIP',
        'SUPERSKILL',
        'NPC2026',
        'WORLDOPEN',
      ]} />
      <p>If a code stops working, let Guild Horizon know so we can update the list.</p>

      <hr />

      <h2 id="old-codes">Old codes (expired)</h2>
      <Codes expired codes={[]} />
    </>
  );
}
