import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer';
import NavBar from '../components/navigation/nav-bar';

export default function NavLayout() {
  return (
    <div className="h-[100vh] flex flex-col bg-background">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
