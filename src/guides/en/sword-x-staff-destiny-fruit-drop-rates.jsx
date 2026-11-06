import { Alert, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>The fruit seems to work like this: rarity is rolled first, then the reward is picked from that rarity’s pool.</p>
      <p>Resource rewards are grouped by rarity. The type of Relic you get depends on the region where you use the <Tip>Destiny Fruit</Tip>.</p>
      <Alert title="About rewards">
        <p>“Resource” means the basic items you get from fruits, including chests of various rarities</p>
      </Alert>
      <table className="data-table">
        <tbody>
          <tr><td>Common</td><td>74.98%</td></tr>
          <tr><td>Common Resource</td><td>74.982%</td></tr>
          <tr><td>Rare</td><td>11.6%</td></tr>
          <tr><td>Rare Resource</td><td>10%</td></tr>
          <tr><td>Ancient Relic</td><td>1.6%</td></tr>
          <tr><td>Epic</td><td>8.11%</td></tr>
          <tr><td>Epic Resource</td><td>7.61%</td></tr>
          <tr><td>Ancient Relic</td><td>0.5%</td></tr>
          <tr><td>Legendary</td><td>5.07%</td></tr>
          <tr><td>Legendary Resource</td><td>0.301%</td></tr>
          <tr><td>Ancient Relic</td><td>0.151%</td></tr>
          <tr><td>Elite Bounty Order</td><td>0.502%</td></tr>
          <tr><td>Wandering NPC: Rosta</td><td>1.506%</td></tr>
          <tr><td><Tip>Mysterious Merchant</Tip></td><td>1.506%</td></tr>
          <tr><td>Monster Challenge Letter</td><td>1.104%</td></tr>
          <tr><td>Wonder</td><td>0.23%</td></tr>
          <tr><td>Wonder Resource</td><td>0.1%</td></tr>
          <tr><td>Ancient Relic</td><td>0.03%</td></tr>
          <tr><td>Demon Lord Bounty Order</td><td>0.1%</td></tr>
          <tr><td>Immortal</td><td>0.01%</td></tr>
          <tr><td>Lost Goddess Statue</td><td>0.01%</td></tr>
        </tbody>
      </table>
    </>
  );
}
