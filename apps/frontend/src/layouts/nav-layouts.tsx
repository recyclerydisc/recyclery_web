import { Outlet } from 'react-router-dom';
import NavBar from '../components/navigation/nav-bar';

export default function NavLayout() {
  return (
    <div className='h-[100vh] flex flex-col'>
      <NavBar />
      <Outlet />
    </div>
  );
}
