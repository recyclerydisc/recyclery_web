import { Bike, Menu } from 'lucide-react';
import { ReactNode, useState } from 'react';
import NavbarItem from './nav-bar-item';
import { AboutUsSubItems, OurProgramsSubItems, SupportUsSubItems } from './nav-content';
import SideMenu from './side-menu';

export type NavbarSubMenuItemType = {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function NavBar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [currentActiveFlyout, setCurrentActiveFlyout] = useState("")

  function handleFlyoutSelect(flyoutTitle: string) {
    if (currentActiveFlyout === flyoutTitle) {
      setCurrentActiveFlyout("")
    } else {
      setCurrentActiveFlyout(flyoutTitle)
    }
  }

  return (
    <>
      <nav className='flex justify-between items-center px-7 py-4 bg-tan-500'>
        <a href='/'>
          <div className='flex justify-center items-center gap-2'>
            <Bike className='size-10'/>
            <span className='text-[28px] text-nowrap font-bold hidden md:inline'>the recyclery</span>
          </div>
        </a>
        <div className='hidden lg:flex justify-center items-center gap-8'>
          <NavbarItem title='About Us' subItems={AboutUsSubItems} currentActiveFlyout={currentActiveFlyout} handleFlyoutSelect={handleFlyoutSelect}/>
          <NavbarItem title='Our Programs' subItems={OurProgramsSubItems} currentActiveFlyout={currentActiveFlyout} handleFlyoutSelect={handleFlyoutSelect}/>
          <NavbarItem title='Support Us' subItems={SupportUsSubItems} currentActiveFlyout={currentActiveFlyout} handleFlyoutSelect={handleFlyoutSelect}/>
        </div>
        <div className='space-x-4 hidden lg:block'>
          <a href='https://therecyclery.square.site/'>
            <button className='bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Shop For Bikes</button>
          </a>
          <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G'>
            <button className='bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Donate</button>
          </a>
        </div>
        <div className='lg:hidden block'>
            <button className='p-3 cursor-pointer rounded-2xl bg-tan-500 hover:bg-tan-600 transition-colors' onClick={() => setIsSideMenuOpen(true)}>
              <Menu className='size-5'/>
            </button>
          </div>
      </nav>
      <SideMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen}/>
    </>
  )
}
