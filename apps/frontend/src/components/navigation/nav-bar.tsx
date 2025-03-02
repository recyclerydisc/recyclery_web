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

  return (
    <>
      <nav className='flex justify-between items-center px-7 py-4 bg-tan-500'>
        <div className='flex justify-center items-center gap-2'>
          <Bike className='size-10'/>
          <span className='text-[28px] text-nowrap font-bold hidden md:inline'>the recyclery</span>
        </div>
        <div className='hidden lg:flex justify-center items-center gap-8'>
          <NavbarItem title='About Us' subItems={AboutUsSubItems}/>
          <NavbarItem title='Our Programs' subItems={OurProgramsSubItems}/>
          <NavbarItem title='Support Us' subItems={SupportUsSubItems}/>
        </div>
        <div className='space-x-4 hidden lg:block'>
          <button className='bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Shop For Bikes</button>
          <button className='bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Donate</button>
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
