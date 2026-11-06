import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>The Wheel of Destiny is a great way to get extra resources and unlock locked areas on the map, since it is one of the few ways to get a <Tip>Gateway Key</Tip>.</p>
      <p>You can use <Tip>Lucky Ticket</Tip> to spin for items on the wheels scattered around the map.</p>
      <Alert type="red" title="Just focus on the keys">
        <p>If you do not know what to take, simply move on to the next wheel after getting the <Tip>Gateway Key</Tip>, <strong>since that is always the main thing to look for</strong>.</p>
      </Alert>
      <p>If you want to know what to take in each area, below is the priority order for each map.</p>
      <p><strong>This list assumes you already have the key and a few spare <Tip>Lucky Ticket</Tip> to use.</strong></p>

      <hr />

      <h2 id="verdantglade">Verdantglade</h2>
      <Tabs>
        <Tab label="Damp Cliff">
          <ol>
            <li><Tip>Auroral Elemental Badge</Tip> is well worth it if you can get it</li>
            <li><Tip>Mythic Auroral Badge</Tip></li>
          </ol>
          <p>I would not spin for anything else, since aiming for purple/legendary badges depends too much on luck.</p>
          <p><Img src="guides/damp-cliff.webp" alt="sword x staff wheel of destiny damp-cliff" /></p>
        </Tab>
        <Tab label="Jungle Camp">
          <ol>
            <li><Tip>Skill Shard Voucher</Tip>. That is it, getting all three is amazing</li>
          </ol>
          <p><Img src="guides/jungle-camp.webp" alt="sword x staff wheel of destiny jungle-camp" /></p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="cinder-ridge">Cinder Ridge</h2>
      <Tabs>
        <Tab label="Mount Chestnut">
          <p><strong>Every Fantomon resource will get used</strong> in the game, since there are many pets to level (and each one has 7 Aptitude pages).</p>
          <p>In my opinion this is a good wheel to pour resources into early on, as it definitely raises your power.</p>
          <p><Img src="guides/mount-chestnut.webp" alt="sword x staff wheel of destiny mount-chestnut" /></p>
        </Tab>
        <Tab label="Stormcliff">
          <ol>
            <li><Tip>Skill Shard Voucher</Tip>. That is it, getting all three is amazing</li>
          </ol>
          <p><Img src="guides/stormcliff.webp" alt="sword x staff wheel of destiny stormcliff" /></p>
        </Tab>
        <Tab label="Boulder Settlement">
          <p>The luck factor in getting a lot of <Tip>Dawnium</Tip> here is too high.</p>
          <p><strong>IF YOU HAVE ALREADY TAKEN ALL THE GOOD STUFF ELSEWHERE</strong>, this is a decent way to earn extra <Tip>Dawnium</Tip>, but personally I would skip it unless you want to try your luck at the 2.88k reward.</p>
          <p><Img src="guides/boulder-settlement.webp" alt="sword x staff wheel of destiny boulder-settlement" /></p>
        </Tab>
      </Tabs>

      <hr />

      <h2 id="aqualis">Aqualis</h2>
      <Tabs>
        <Tab label="Coral Settlement">
          <ol>
            <li><Tip>Auroral Elemental Badge</Tip> is well worth it if you can get it</li>
            <li><Tip>Mythic Auroral Badge</Tip></li>
          </ol>
          <p>I would not spin for anything else, since aiming for purple/legendary badges depends too much on luck.</p>
          <p><Img src="guides/coral-settlement.webp" alt="sword x staff wheel of destiny mount-chestnut" /></p>
        </Tab>
        <Tab label="Vine Jungle">
          <p>The luck factor in getting a lot of <Tip>Dawnium</Tip> here is too high.</p>
          <p><strong>IF YOU HAVE ALREADY TAKEN ALL THE GOOD STUFF ELSEWHERE</strong>, this is a decent way to earn extra <Tip>Dawnium</Tip>, but personally I would skip it unless you want to try your luck at the 2.88k reward.</p>
          <p><Img src="guides/vine-jungle.webp" alt="sword x staff wheel of destiny stormcliff" /></p>
        </Tab>
      </Tabs>
    </>
  );
}
