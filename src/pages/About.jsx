// Trang "Về chúng tôi": lá thư kiểu fantasy của Guild Horizon.
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/dancing-script/600.css';
import '@fontsource/dancing-script/700.css';
import { useLang } from '../i18n/index.jsx';

const PURR = <a href='https://www.purrwikimania.com/' target='_blank' rel='noreferrer'>Purrwikimania</a>;
const COMPASS = <a href='https://swordxstaff-compass.com/' target='_blank' rel='noreferrer'>Sword x Staff Compass</a>;

const LETTER = {
  vi: {
    title: 'Về chúng tôi',
    kicker: 'Thư gửi lữ khách',
    hello: 'Gửi những lữ khách của Sword x Staff,',
    body: [
      <>Chúng tôi là <b>Guild Horizon</b>, một guild nhỏ đóng quân ở một server nào đó giữa các vương quốc. Server nào thì đến giờ anh em trong guild vẫn còn cãi nhau, chỉ biết là nơi đó có rất nhiều Dawnium bị tiêu sai chỗ.</>,
      <>Những đêm dài cày Daily Dungeon và chờ Primostar, chúng tôi nhận ra người chơi Việt thiếu một cuốn sổ tay đầy đủ bằng tiếng mẹ đẻ. Thế là cuốn sổ này ra đời.</>,
      <>Mọi con số trong sổ được chúng tôi tổng hợp từ hai kho tri thức lớn của cộng đồng: {PURR} và {COMPASS}. Xin gửi lời cảm ơn chân thành tới những người giữ thư viện ấy, nếu không có họ, cuốn sổ này chỉ là vài trang giấy trắng.</>,
      <>Phần còn lại là của Horizon: dịch sang tiếng Việt, viết thêm phân tích, xếp build theo từng tier, tính toán đường đi cho Gem, Dungeon, Season, và thử nghiệm ngay trong guild trước khi ghi vào sổ.</>,
      <>Nếu bạn thấy code đã hết hạn, một con số sai lệch, hay có build hay hơn, hãy gửi lời nhắn cho guild. Cuốn sổ này sẽ còn được viết tiếp sau mỗi mùa.</>,
    ],
    warn: <>Còn ai định chép nguyên cuốn sổ về làm của riêng, xin ghi nhớ luật của guild: <span className='steal-warn'>trộm làm chó</span>.</>,
    close: 'Thân ái,',
    sign: 'Guild Horizon',
    place: 'Viết tại doanh trại Horizon, dưới ánh đèn của mùa Frostfire',
    cta: 'Mở sổ tay',
  },
  en: {
    title: 'About us',
    kicker: 'A letter to travelers',
    hello: 'To the travelers of Sword x Staff,',
    body: [
      <>We are <b>Guild Horizon</b>, a small guild stationed on some server between the kingdoms. Which server exactly is still being argued over in guild chat, all we know is that it is a place where far too much Dawnium gets spent in the wrong shop.</>,
      <>Through long nights of Daily Dungeons and waiting for Primostar, we realized Vietnamese players lacked a complete handbook in their own language. And so this book was born.</>,
      <>Every number in these pages was gathered from two great libraries of the community: {PURR} and {COMPASS}. Our heartfelt thanks to their keepers, without them this book would be nothing but blank pages.</>,
      <>The rest is Horizon’s own work: translating into Vietnamese, writing the analysis, laying out builds tier by tier, charting the way through Gems, Dungeons and Seasons, and testing it all inside the guild before writing it down.</>,
      <>If you find an expired code, a wrong number, or a better build, send word to the guild. This book will keep being written after every season.</>,
    ],
    warn: <>And to anyone planning to copy the whole book and call it their own, remember the guild’s law: <span className='steal-warn'>thieves are dogs</span>.</>,
    close: 'Warmly,',
    sign: 'Guild Horizon',
    place: 'Written at the Horizon camp, by the lamplight of the Frostfire season',
    cta: 'Open the handbook',
  },
};

export default function About() {
  const { lang } = useLang();
  const L = LETTER[lang] || LETTER.vi;
  useEffect(() => {
    const prev = document.title;
    document.title = L.title + ' | Sword x Staff Guide - Guild Horizon';
    return () => { document.title = prev; };
  }, [L.title]);

  return (
    <div className='letter-page'>
      <article className='letter'>
        <span className='letter-corner tl' aria-hidden='true' />
        <span className='letter-corner tr' aria-hidden='true' />
        <span className='letter-corner bl' aria-hidden='true' />
        <span className='letter-corner br' aria-hidden='true' />
        <header className='letter-head'>
          <span className='letter-kicker'>{L.kicker}</span>
          <h1>{L.title}</h1>
          <div className='letter-rule' aria-hidden='true'><span>✦</span></div>
        </header>
        <p className='letter-hello'>{L.hello}</p>
        {L.body.map((p, i) => <p key={i} className={i === 0 ? 'first' : ''}>{p}</p>)}
        <p className='letter-warn'>{L.warn}</p>
        <footer className='letter-sign'>
          <div>
            <p className='letter-close'>{L.close}</p>
            <p className='letter-name'>{L.sign}</p>
            <p className='letter-place'>{L.place}</p>
          </div>
          <div className='seal' aria-hidden='true'><span>H</span></div>
        </footer>
      </article>
      <p className='letter-back'><Link className='btn primary' to='/'>{L.cta}</Link></p>
    </div>
  );
}
