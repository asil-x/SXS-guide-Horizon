import { Alert, Img, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>Sword x Staff has a pretty neat food system: it heals you, buffs your stats in battle and, most importantly, <strong>permanently raises your stats with certain foods</strong>.</p>

      <hr />

      <h2 id="healing">Healing</h2>
      <p><Img src="guides/healing-food.webp" alt="sword x staff healing food" /></p>
      <p>Basic food you will cook regularly to heal after battles. <strong>Each new region has a new type that is stronger than the last.</strong></p>
      <Alert title="Going home also restores HP">
        <p>These dishes are extremely useful in dungeons, since you can eat at the rest camp to prepare for a big fight.</p>
      </Alert>
      <p>They are all cheap (gold and farmable plants), so do not worry about running out of healing.</p>
      <p>If you do not know where an ingredient is, tap it in the crafting screen to teleport straight to the map and start gathering.</p>

      <hr />

      <h2 id="temporary-buffs">Temporary buffs</h2>
      <p><Img src="guides/temporary-food.webp" alt="sword x staff temporary food" /></p>
      <p>Simple foods that buff you in certain fights. They are usually meant for a specific region OR a specific type of fight, so always read them carefully before eating.</p>
      <p><strong>Food does not expire either</strong>, so there is no rush to eat it all as soon as you get it.</p>
      <h3 id="where-can-i-get-these-foods">Where can I get these foods?</h3>
      <ul>
        <li>Cook some of them yourself as the game progresses</li>
        <li>Unlock recipes in the Kingdom Shop</li>
      </ul>

      <hr />

      <h2 id="permanent-buffs">Permanent buffs</h2>
      <p><Img src="guides/permanent-food.webp" alt="sword x staff permanent food" /></p>
      <p>Now for the important system: permanent stat boosts from food.</p>
      <p>Yes, this part is pay to win. But F2P players can still earn a decent amount of stats over time just by playing and farming. <strong>Like most idle games, this is a marathon, not a sprint</strong>.</p>
      <p>The amount of stats you get depends on how many times you have eaten the same dish. In other words, the more you eat, the less effective it gets.</p>
      <table className="data-table">
        <tbody>
          <tr><td>1-10</td><td>100%</td></tr>
          <tr><td>11-30</td><td>50%</td></tr>
          <tr><td>31-50</td><td>20%</td></tr>
          <tr><td>51+</td><td>5%</td></tr>
        </tbody>
      </table>
      <h3 id="where-can-i-get-these-foods-1">Where can I get these foods?</h3>
      <ul>
        <li>Buy them at the auction house with <Tip>Luminium</Tip></li>
        <li>In the Arena shop</li>
        <li>Buy recipes at the auction house with <Tip>Luminium</Tip></li>
        <li>Guild Clash rewards</li>
        <li><strong>If you are lucky</strong>, daily quests and the <Tip>Mysterious Merchant</Tip> can also have recipes</li>
      </ul>
    </>
  );
}
