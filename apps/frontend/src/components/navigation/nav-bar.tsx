import { Bike, ChevronDown, Menu, XIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogoutConfirm = async () => {
    try {
      await logout();
      setIsModalOpen(false);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      <nav className='flex justify-between items-center px-7 py-4 bg-tan-500'>
        <div className='flex justify-center items-center gap-2'>
          <Bike className='size-10'/>
          <span className='text-[28px] text-nowrap font-bold hidden md:inline'>the recyclery</span>
        </div>
        <div className='space-x-6 hidden lg:block'>
          <div className='inline-flex items-center gap-1'>
            <span className='text-body2'>About Us</span>
            <ChevronDown className='size-5'/>
          </div>
          <div className='inline-flex items-center gap-1'>
            <span className='text-body2'>Our Programs</span>
            <ChevronDown className='size-5'/>
          </div>
          <div className='inline-flex items-center gap-1'>
            <span className='text-body2'>Support Us</span>
            <ChevronDown className='size-5'/>
          </div>
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

interface SideMenuProps {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (arg0: boolean) => void;
}

function SideMenu({ isSideMenuOpen, setIsSideMenuOpen }: SideMenuProps) {
  return (
    <div className='lg:hidden'>
      <div className={`fixed inset-y-0 ${isSideMenuOpen ? "right-0" : "-right-full"} bg-tan-500 p-4 w-full md:w-[400px] flex flex-col justify-start gap-4 border border-tan-900 border-l-[1px]`}>
        <div className='flex justify-between items-center px-3'>
          <div className='flex justify-center items-center gap-2'>
            <Bike className='size-10'/>
            <span className='text-[28px] text-nowrap font-bold'>the recyclery</span>
          </div>
          <button className='p-3 cursor-pointer rounded-2xl bg-tan-500 hover:bg-tan-600 transition-colors' onClick={() => setIsSideMenuOpen(false)}>
            <XIcon className='size-5'/>
          </button>
        </div>
        <div className='border-[1px] border-tan-700'/>
        <div className='space-y-3'>
          <div className='flex justify-between items-center px-3 cursor-pointer'>
            <span className='text-body2'>About Us</span>
            <button className='p-3 cursor-pointer rounded-2xl bg-inherit' onClick={() => setIsSideMenuOpen(true)}>
              <ChevronDown className='size-5'/>
            </button>
          </div>
          <div className='flex justify-between items-center px-3 cursor-pointer'>
            <span className='text-body2'>Our Programs</span>
            <button className='p-3 cursor-pointer rounded-2xl bg-inherit' onClick={() => setIsSideMenuOpen(true)}>
              <ChevronDown className='size-5'/>
            </button>
          </div>
          <div className='flex justify-between items-center px-3 cursor-pointer'>
            <span className='text-body2'>Support Us</span>
            <button className='p-3 cursor-pointer rounded-2xl bg-inherit' onClick={() => setIsSideMenuOpen(true)}>
              <ChevronDown className='size-5'/>
            </button>
          </div>
        </div>
        <div className='border-[1px] border-tan-700'/>
        <div className='flex flex-col gap-4 justify-center items-start'>
          <button className='bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Shop For Bikes</button>
          <button className='bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Donate</button>
        </div>
      </div>
    </div>
  )
}
