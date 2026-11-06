import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='empty'>
      <h1>Không tìm thấy trang</h1>
      <p className='muted'>Trang này không tồn tại hoặc đã được đổi tên.</p>
      <Link className='btn' to='/'>Về trang chủ</Link>
    </div>
  );
}
