import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='guide'>
      <h1>Page not found</h1>
      <p className='muted'>This page does not exist in the archive.</p>
      <Link className='btn' to='/'>Back to home</Link>
    </div>
  );
}
