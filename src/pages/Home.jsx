import { useState } from 'react';
import { Link } from 'react-router-dom';
import index from '../data/guides/index.json';
import { bgUrl, isIcon } from '../lib/cards.js';

const HIDDEN = /table|bonuses|drop-rates/;
const GROUPS = [
  { name: 'Class builds', test: (s) => s.includes('how-to-play') },
  { name: 'Guides', test: () => true },
];

function GuideCard({ g }) {
  return (
    <Link className={'card' + (isIcon(g.slug) ? ' icon' : '')} style={{ '--card-bg': bgUrl(g.slug) }} to={'/guides/' + g.slug}>
      <h3>{g.title}</h3>
      <small>Guild Horizon</small>
    </Link>
  );
}

export default function Home() {
  const [q, setQ] = useState('');
  const list = index.filter((g) => !HIDDEN.test(g.slug) && g.title.toLowerCase().includes(q.toLowerCase()));
  const used = new Set();
  return (
    <>
      <section className='hero'>
        <div>
          <h1>Sword x Staff Guide</h1>
          <p>Builds, free codes and guides for Sword x Staff. Databases and tables are in the top menu.</p>
        </div>
        <img src='./img/sword-x-staff-cover.webp' alt='Sword x Staff' />
      </section>
      <div className='toolbar'>
        <input className='input' placeholder='Search guides...' value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      {GROUPS.map((grp) => {
        const items = list.filter((g) => !used.has(g.slug) && grp.test(g.slug));
        items.forEach((g) => used.add(g.slug));
        if (!items.length) return null;
        return (
          <section key={grp.name}>
            <h2>{grp.name}</h2>
            <div className='grid'>{items.map((g) => <GuideCard key={g.slug} g={g} />)}</div>
          </section>
        );
      })}
    </>
  );
}
