import { Alert, Img, Tab, Tabs, Tip } from '../../components/guide';

export default function Page() {
  return (
    <>
      <p>This AFK Idle RPG genre is usually different from typical gacha games, where most premium currency goes into pulling characters.</p>
      <p>Here you use premium currency to buy resources and do daily activities that make your account stronger, not just to pull.</p>
      <Alert type="red" title="Save some for the Merchant!">
        <p>You can meet merchants when using <Tip>Destiny Fruit</Tip>. They sell great resources, skills and sometimes even Fantomons. Always keep some <Tip>Dawnium</Tip> on hand for this.</p>
      </Alert>
      <p>How many extra activities you do and how much you spend is up to you, but if you want to optimize your account <strong>you should do most of them every day</strong>.</p>
      <Tabs>
        <Tab label="Material Realms">
          <p><Img src="guides/material-realms.webp" alt="sword x staff material realms" /></p>
          <p>Here you farm every resource you need to grow your account and for the cart.</p>
          <ul>
            <li><strong>F2P players</strong> should buy 2/2/2/2 extra runs</li>
            <li><strong>Spenders</strong> should buy at least 4/2/4/4 extra runs</li>
            <li><strong>Whales</strong> can buy even more, depending on how much <Tip>Dawnium</Tip> you are comfortable spending</li>
          </ul>
          <p><Tip>Raw Ore</Tip> and <Tip>Chrono Sand</Tip> get eaten up fast, so spenders should buy extra runs. I recommend 4 extra a day, but it depends on how much you spend.</p>
          <p>Prices go up: 60, 60, 100, 100, 150, 150, 200, 200, 250, 300.</p>
        </Tab>
        <Tab label="Daily Dungeon">
          <p><Img src="guides/daily-dungeon-sxs.webp" alt="sword x staff daily dungeon" /></p>
          <p><strong>It is extremely important to buy the extra runs here</strong>. You can only buy 2 a day, the first for 100 and the second for 150.</p>
          <p>This is where you farm gear and shards for the highest rarity gear.</p>
        </Tab>
        <Tab label="Guild">
          <p><Img src="guides/guild-screen.webp" alt="sword x staff guild screen" /></p>
          <p><strong>This depends a lot on your guild and what they ask for</strong>, but there are still a few things you can do every day to boost your resources and power.</p>
          <ul>
            <li>Guild donations: F2P do the free one + two more, spenders can do more</li>
            <li>Farming rate boost items (last 24 hours but are quite expensive, <em>not recommended for F2P</em>)</li>
          </ul>
          <hr />
          <p>As for the guild shop it is down to preference, personally I buy:</p>
          <ul>
            <li><Tip>Bond Trinket</Tip>, you need to stockpile these to raise all your pets</li>
            <li><Tip>Resilient Sprout</Tip>, <Tip>Hopeful Bud</Tip> and <Tip>Lunar Heart</Tip> (only when discounted)</li>
            <li><Tip>Stone Sheep</Tip>, <Tip>Cotton Sheep</Tip> and <Tip>Lunar Sheep</Tip> (only when discounted)</li>
            <li><Tip>Steely Chicken</Tip>, <Tip>Dawn Chicken</Tip> and <Tip>Lunar Chicken</Tip> (only when discounted)</li>
          </ul>
          <p><strong>You will not buy all three discounted material types</strong>, prioritize whatever your main Fantomon’s aptitude needs.</p>
        </Tab>
        <Tab label="Arena">
          <p><Img src="guides/pvp.webp" alt="sword x staff pvp screen" /></p>
          <p>I am not a huge PVP fan, but <strong>the currency you get is very useful for the Arena exchange shop</strong>, so it is worth doing a few extra fights (2 a day is very cheap).</p>
          <Alert title="PVP reset rewards">
            <p>Every season reset, refresh as much as you can for at least the first two days to get extra shop rewards early, then go back to only 2 extra fights.</p>
          </Alert>
          <p>Prices go up: 10, 15, 20, 30, 40, 60, 80, 100.</p>
        </Tab>
        <Tab label="Vendor Booth">
          <p><Img src="guides/daily-shop.webp" alt="sword x staff daily shop" /></p>
          <p><strong>General tab</strong></p>
          <p>EVERYTHING except cooking ingredients. Only keep refreshing IF you can afford to clear the shop, ideally at least 3 times a day</p>
          <hr />
          <p><strong>Vault tab</strong></p>
          <ol>
            <li><Tip>Stamina</Tip> (it is free lol)</li>
            <li>Discounted <Tip>Stellatie</Tip> is nice, but not required</li>
            <li>Material Realm resources: <Tip>Iron Hammer</Tip>, <Tip>Gold Pickaxe</Tip>, <Tip>Worn Knuckles</Tip> and <Tip>Sand Shovel</Tip></li>
            <li><Tip>Destiny Fruit</Tip> (F2P should save 200 for the next event)</li>
            <li><Tip>Epic Auroral Badge</Tip></li>
            <li>Mainly for spenders, buy extra <Tip>Refined Ore</Tip></li>
          </ol>
        </Tab>
        <Tab label="Auction House">
          <p><Img src="guides/auction-house.webp" alt="sword x staff auction house" /></p>
          <p>Here you bid on and sell gear, gear shards, cooking ingredients, Fantomon materials and much more.</p>
          <p>I am listing it so you keep an eye on it, but you definitely do not need to visit it every day.</p>
        </Tab>
      </Tabs>
      <p>There are a few other places to spend <Tip>Dawnium</Tip> daily, but <strong>in my opinion the ones above are the best for F2P or light spenders</strong>.</p>
    </>
  );
}
