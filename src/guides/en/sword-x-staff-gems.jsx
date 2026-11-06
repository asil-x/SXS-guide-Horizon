import { Alert, Tip } from '../../components/guide';

const Y = () => <td style={{ textAlign: 'center', color: 'var(--green)' }}>✓</td>;
const N = () => <td style={{ textAlign: 'center' }} className="muted">–</td>;
const row = (slots) => ['Main', 'Helmet', 'Armor', 'Boots', 'Off-Hand'].map((s) => (slots.includes(s) ? <Y key={s} /> : <N key={s} />));

export default function Page() {
  return (
    <>
      <p>Gems are socketed into gear for extra stats. There are <strong>8 gem types</strong>, each with <strong>15 tiers (T1 to T15)</strong>. The higher the tier, the bigger the stats, and each tier’s actual stats also scale with your level.</p>
      <p>This guide covers what each gem does, which slots it fits, how to merge up to high tiers efficiently and which gems to use for each class.</p>

      <hr />

      <h2 id="types">The 8 gem types</h2>
      <table className="data-table">
        <thead><tr><th>Gem</th><th>Stats</th><th>Used for</th></tr></thead>
        <tbody>
          <tr><td><Tip>T10 Obsidian</Tip></td><td>ATK + DMG Boost</td><td>Every class, best damage gem</td></tr>
          <tr><td><Tip>T10 Amethyst</Tip></td><td>SPD + Crit Rate</td><td>Duelist, Sorcerer, crit builds</td></tr>
          <tr><td><Tip>T10 Ruby</Tip></td><td>ATK</td><td>Filler for DPS</td></tr>
          <tr><td><Tip>T10 Citrine</Tip></td><td>SPD</td><td>Filler, every class needs SPD</td></tr>
          <tr><td><Tip>T10 Moonstone</Tip></td><td>DEF + DMG RES</td><td>Every class, best survival gem</td></tr>
          <tr><td><Tip>T10 Sapphire</Tip></td><td>DEF</td><td>Tank Knight</td></tr>
          <tr><td><Tip>T10 Beryl</Tip></td><td>HP</td><td>Tank Knight, healer Sage</td></tr>
          <tr><td><Tip>T10 Amber</Tip></td><td>HP + Healing Boost</td><td>Healer Sage</td></tr>
        </tbody>
      </table>
      <Alert type="blue" title="Dual-stat gems always come first">
        <p>Obsidian, Amethyst, Moonstone and Amber give <strong>2 stats at once</strong>, so at the same tier they are almost always better than single-stat gems. Single-stat gems (Ruby, Citrine, Sapphire, Beryl) are mainly for filling slots that dual-stat gems cannot go into.</p>
      </Alert>

      <hr />

      <h2 id="slots">Which gem fits which slot</h2>
      <p>Each gem type only fits certain gear slots. The <strong>Off-Hand accepts every gem type</strong>.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Gem</th><th>Main</th><th>Helmet</th><th>Armor</th><th>Boots</th><th>Off-Hand</th></tr></thead>
          <tbody>
            <tr><td>Obsidian</td>{row(['Main', 'Off-Hand'])}</tr>
            <tr><td>Amethyst</td>{row(['Main', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Ruby</td>{row(['Main', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Citrine</td>{row(['Armor', 'Boots', 'Off-Hand'])}</tr>
            <tr><td>Moonstone</td>{row(['Helmet', 'Off-Hand'])}</tr>
            <tr><td>Sapphire</td>{row(['Armor', 'Helmet', 'Off-Hand'])}</tr>
            <tr><td>Beryl</td>{row(['Armor', 'Helmet', 'Off-Hand'])}</tr>
            <tr><td>Amber</td>{row(['Armor', 'Boots', 'Off-Hand'])}</tr>
          </tbody>
        </table>
      </div>
      <p>A few takeaways from the table:</p>
      <ul>
        <li><strong>Obsidian only fits Main and Off-Hand</strong>, and <strong>Moonstone only fits Helmet and Off-Hand</strong>. Do not waste the Off-Hand on a single-stat gem while you still lack these two.</li>
        <li><strong>Armor</strong> accepts no offensive gem: DPS usually put Citrine (SPD) here.</li>
        <li><strong>Boots</strong> are the best spot for Amethyst if Obsidian is already in your Main.</li>
      </ul>

      <h3 id="layout">Suggested layout by role</h3>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Slot</th><th>DPS (Duelist, Sorcerer)</th><th>Tank (Knight)</th><th>Healer (Sage)</th></tr></thead>
          <tbody>
            <tr><td>Main</td><td>Obsidian</td><td>Obsidian</td><td>Obsidian</td></tr>
            <tr><td>Helmet</td><td>Moonstone</td><td>Moonstone</td><td>Moonstone</td></tr>
            <tr><td>Armor</td><td>Citrine</td><td>Sapphire or Beryl</td><td>Amber</td></tr>
            <tr><td>Boots</td><td>Amethyst</td><td>Citrine</td><td>Amber or Citrine</td></tr>
            <tr><td>Off-Hand</td><td>Obsidian or Amethyst</td><td>Moonstone</td><td>Amber</td></tr>
          </tbody>
        </table>
      </div>
      <p>A glass cannon Knight should socket like a DPS (Ruby, Amethyst). A Summoner or Erosion Sage uses Obsidian and Ruby instead of Amber. More details are in each class guide.</p>

      <hr />

      <h2 id="merge">Merging gems to higher tiers</h2>
      <p>This is where many people go wrong. Gems <strong>do not merge one tier into the next</strong> all the way from T1 to T15. Instead:</p>
      <ul>
        <li><strong>T7, T8, T9 and T10 are all merged directly from T5.</strong></li>
        <li><strong>T12, T13, T14 and T15 are all merged directly from T10.</strong></li>
        <li>Merges have a success rate: each gem you add raises the success chance. Add enough and success is guaranteed.</li>
      </ul>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Result</th><th>Material</th><th className="num">Rate per gem</th><th className="num">Minimum</th><th className="num">Guaranteed with</th></tr></thead>
          <tbody>
            <tr><td>T2</td><td>T1</td><td className="num">100%</td><td className="num">2</td><td className="num">2</td></tr>
            <tr><td>T3</td><td>T2</td><td className="num">100%</td><td className="num">2</td><td className="num">2</td></tr>
            <tr><td>T4</td><td>T3</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T5</td><td>T4</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T6</td><td>T5</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T7</td><td><strong>T5</strong></td><td className="num">36%</td><td className="num">2</td><td className="num">3</td></tr>
            <tr><td>T8</td><td><strong>T5</strong></td><td className="num">18%</td><td className="num">5</td><td className="num">6</td></tr>
            <tr><td>T9</td><td><strong>T5</strong></td><td className="num">8%</td><td className="num">11</td><td className="num">13</td></tr>
            <tr><td>T10</td><td><strong>T5</strong></td><td className="num">4%</td><td className="num">23</td><td className="num">25</td></tr>
            <tr><td>T11</td><td>T10</td><td className="num">100%</td><td className="num">1</td><td className="num">1</td></tr>
            <tr><td>T12</td><td><strong>T10</strong></td><td className="num">36%</td><td className="num">2</td><td className="num">3</td></tr>
            <tr><td>T13</td><td><strong>T10</strong></td><td className="num">32%</td><td className="num">3</td><td className="num">4</td></tr>
            <tr><td>T14</td><td><strong>T10</strong></td><td className="num">24%</td><td className="num">5</td><td className="num">5</td></tr>
            <tr><td>T15</td><td><strong>T10</strong></td><td className="num">15%</td><td className="num">8</td><td className="num">8</td></tr>
          </tbody>
        </table>
      </div>
      <p className="muted">“Minimum” is the fewest gems the game lets you add. “Guaranteed with” is the number of gems for a 100% total rate. The table only counts gems consumed; any other fee is shown on the in-game merge screen.</p>

      <Alert type="red" title="Do not merge T5 into T6 if you are aiming for T10">
        <p>T6 cannot be merged further (T7 is made from T5, not T6). Every T5 you turn into a T6 is one less for your T10. Likewise, <strong>T11 is a dead end</strong> if you are collecting T10 to go to T12 and above.</p>
      </Alert>

      <h3 id="merge-cost">Cost conversion</h3>
      <ul>
        <li>1 T5 = 4 T1.</li>
        <li>1 guaranteed T10 = 25 T5 = <strong>100 T1</strong>.</li>
        <li>1 guaranteed T15 = 8 T10 = 200 T5 = <strong>800 T1</strong>.</li>
      </ul>
      <p>So from T10 on, every tier gets far more expensive. For most players the sensible goal is <strong>T10 in every slot first</strong>, then pour spare T10s into T12 to T15 for your most important gem (usually Obsidian in Main).</p>

      <h3 id="gamble">Should you merge with the minimum?</h3>
      <p>Take T7: adding 2 T5 gives a 72% success rate, adding 3 is guaranteed. If a failure loses all the gems you put in, merging with 2 still costs slightly fewer T5 on average (about 2.8 per success versus 3). T8, T9, T12 and T13 work the same way.</p>
      <p>Still, the difference is tiny while the risk of losing everything is big. My advice: <strong>T7 to T9 are fine to gamble</strong> if you have lots of T5, but <strong>always go guaranteed from T10 up</strong>. For T10 specifically, the minimum (23 gems, 92%) is not cheaper on average than the full 25, so there is no reason to gamble.</p>

      <hr />

      <h2 id="sources">Where to get gems</h2>
      <ul>
        <li><strong>Gem mines on the world map</strong> of each kingdom. Remember to mine them regularly while exploring.</li>
        <li><strong>Astral Pact</strong>: every 8-milestone cycle includes a <strong>+5% Gem Drop</strong> milestone. See the Season, Primostar &amp; Astral Pact guide.</li>
        <li>Event rewards and paid packs.</li>
      </ul>
      <Alert title="Gems in a new season">
        <p>When a new season starts, old-season gems should be <strong>recycled into <Tip>Rolla</Tip></strong> and replaced with new-season gems. So do not sink too many resources into high-tier merges at the end of a season.</p>
      </Alert>

      <p className="source">Gem data and merge rates come from the game files, compiled via Sword x Staff Compass.</p>
    </>
  );
}
