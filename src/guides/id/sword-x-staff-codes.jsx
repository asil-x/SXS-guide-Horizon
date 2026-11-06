import { Codes } from '../../components/guide';

export default function Page() {
  return (
    <>
      <h2 id="where-to-claim-codes">Cara memasukkan kode</h2>
      <ol>
        <li>Buka menu utama</li>
        <li>Ketuk User Center</li>
        <li>Masuk ke layar “Gift Code”</li>
        <li>Masukkan kode untuk mengklaim hadiah</li>
      </ol>

      <hr />

      <h2 id="working-codes">Kode yang masih aktif</h2>
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
      <p>Kalau ada kode yang sudah tidak bisa dipakai, kabari Guild Horizon supaya daftarnya kami perbarui.</p>

      <hr />

      <h2 id="old-codes">Kode lama (sudah kedaluwarsa)</h2>
      <Codes expired codes={[]} />
    </>
  );
}
