import { Bike, Menu } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from './nav-bar-item';
import { AboutUsSubItems, OurProgramsSubItems, SupportUsSubItems } from './nav-content';
import SideMenu from './side-menu';
import { BlueButtonLink } from '../generic/buttons';

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
          <NavbarItem title="About Us" subItems={AboutUsSubItems} />
          <NavbarItem title="Our Programs" subItems={OurProgramsSubItems} />
          <NavbarItem title="Support Us" subItems={SupportUsSubItems} />
        </div>
        <div className="space-x-4 hidden lg:block">
          <BlueButtonLink to="https://therecyclery.square.site/">Shop For Bikes</BlueButtonLink>
          <BlueButtonLink to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G">
            Donate
          </BlueButtonLink>
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
