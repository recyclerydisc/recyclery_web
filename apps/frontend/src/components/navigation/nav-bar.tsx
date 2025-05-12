import { Bike, Menu } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavContent } from '../../content/nav-content';
import { Button } from '../generic/buttons';
import NavbarItem from './nav-bar-item';
import SideMenu from './side-menu';

export type NavbarSubMenuItemType = {
  icon: ReactNode;
  title: string;
  description: string;
  destination: string;
};

export default function NavBar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-7 py-4 bg-tan-500">
        <Link to="/">
          <div className="flex justify-center items-center gap-2">
            <Bike className="size-8" />
            <p className="text-heading2 text-nowrap hidden md:inline">the recyclery</p>
          </div>
        </Link>
        <div className="hidden lg:flex justify-center items-center gap-8">
          {
            NavContent.map((item, index) => (
              <NavbarItem key={index} {...item}/>
            ))
          }
        </div>
        <div className="space-x-4 hidden lg:block">
          <Button>
            <Link to="https://therecyclery.square.site/">
              Shop For Bikes
            </Link>
          </Button>
          <Button>
            <Link to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G">
              Donate
            </Link>
          </Button>
        </div>
        <div className="lg:hidden block">
          <button
            className="p-3 cursor-pointer rounded-2xl bg-tan-500 hover:bg-tan-600 transition-colors"
            onClick={() => setIsSideMenuOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>
      <SideMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />
    </>
  );
}
