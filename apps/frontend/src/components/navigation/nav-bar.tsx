import { Bike, ChevronDown, Menu, XIcon } from 'lucide-react';
import { ReactNode, useState } from 'react';
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

  const AboutUsSubItems: FlyoutMenuItemType[] = [
    {
      icon: <Bike className='size-5' />,
      title: "What We Do",
      description: "Read about our history, mission, and values",
    },
    {
      icon: <Bike className='size-5' />,
      title: "Who We Are",
      description: "Get to know some of our team members",
    },
  ]

  const OurProgramsSubItems: FlyoutMenuItemType[] = [
    {
      icon: <Bike className='size-5' />,
      title: "Open Shop",
      description: "Use our tools to fix your own bike with the instruction of Recyclery mechanics",
    },
    {
      icon: <Bike className='size-5' />,
      title: "Freecyclery",
      description: "Earn a free bike through our referral and fellowship programs",
    },
    {
      icon: <Bike className='size-5' />,
      title: "FTWN-B",
      description: "Explore a safe space for under-represented members of the bike community",
    },
    {
      icon: <Bike className='size-5' />,
      title: "Classes",
      description: "Learn about the process of maintaining and overhauling your own bike",
    },
  ]

  const SupportUsSubItems: FlyoutMenuItemType[] = [
    {
      icon: <Bike className='size-5' />,
      title: "Support Us",
      description: "Donate money to help fund The Recyclery's programs",
    },
    {
      icon: <Bike className='size-5' />,
      title: "Our Supporters",
      description: "Learn about our top supporters",
    },
    {
      icon: <Bike className='size-5' />,
      title: "Donate a Bike",
      description: "Donate your old bikes to either support our programs or help people in need",
    },
    {
      icon: <Bike className='size-5' />,
      title: "Become a volunteer",
      description: "Help improve our programs by offering your skills and expertise",
    },
  ]

  return (
    <>
      <nav className='flex justify-between items-center px-7 py-4 bg-tan-500'>
        <div className='flex justify-center items-center gap-2'>
          <Bike className='size-10'/>
          <span className='text-[28px] text-nowrap font-bold hidden md:inline'>the recyclery</span>
        </div>
        <div className='hidden lg:flex justify-center items-center gap-8'>
          <DesktopMenuItem title='About Us' subItems={AboutUsSubItems}/>
          <DesktopMenuItem title='Our Programs' subItems={OurProgramsSubItems}/>
          <DesktopMenuItem title='Support Us' subItems={SupportUsSubItems}/>
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

type FlyoutMenuItemType = {
  icon: ReactNode;
  title: string;
  description: string;
}

interface DesktopMenuItemProps {
  title: string;
  subItems: FlyoutMenuItemType[];
}

function DesktopMenuItem({title, subItems} : DesktopMenuItemProps) {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false)

  return (
    <div className='relative'>
      <button className='inline-flex items-center gap-1 cursor-pointer' onClick={() => setIsFlyoutOpen(!isFlyoutOpen)}>
        <span className='text-body2'>{title}</span>
        <ChevronDown className='size-5'/>
      </button>
      <ul className={`absolute top-full -left-7 mt-4 transition ${isFlyoutOpen ? "ease-out opacity-100 translate-y-0" : "ease-in opacity-0 translate-y-2"} bg-tan-500 rounded-2xl p-3 border border-tan-700 shadow-lg space-y-2`}>
        {
          subItems.map((subItem) => {
            return (
              <li className='w-[400px] flex justify-start items-center gap-4 p-3 rounded-2xl bg-tan-500 hover:bg-tan-600 group cursor-pointer'>
                <div className='p-3 bg-tan-600 group-hover:bg-tan-500 rounded-xl'>
                  {subItem.icon}
                </div>
                <div>
                  <span className='text-body2 font-bold text-nowrap'>{subItem.title}</span>
                  <p>{subItem.description}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}


interface SideMenuProps {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (arg0: boolean) => void;
}

function SideMenu({ isSideMenuOpen, setIsSideMenuOpen }: SideMenuProps) {
  return (
    <div className='lg:hidden'>
      <div className={`fixed inset-y-0 ${isSideMenuOpen ? "right-0" : "-right-full"} transition-[right] duration-300 bg-tan-500 p-4 w-full md:w-[400px] flex flex-col justify-start gap-4 border border-tan-700 border-l-0 md:border-l-[1px]`}>
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
        <ul className='space-y-3'>
          <li className='flex justify-between items-center px-3 cursor-pointer'>
            <span className='text-body2'>About Us</span>
            <button className='p-3 cursor-pointer rounded-2xl bg-inherit' onClick={() => setIsSideMenuOpen(true)}>
              <ChevronDown className='size-5'/>
            </button>
          </li>
          <li className='flex justify-between items-center px-3 cursor-pointer'>
            <span className='text-body2'>Our Programs</span>
            <button className='p-3 cursor-pointer rounded-2xl bg-inherit' onClick={() => setIsSideMenuOpen(true)}>
              <ChevronDown className='size-5'/>
            </button>
          </li>
          <li className='flex justify-between items-center px-3 cursor-pointer'>
            <span className='text-body2'>Support Us</span>
            <button className='p-3 cursor-pointer rounded-2xl bg-inherit' onClick={() => setIsSideMenuOpen(true)}>
              <ChevronDown className='size-5'/>
            </button>
          </li>
        </ul>
        <div className='border-[1px] border-tan-700'/>
        <div className='flex flex-col gap-4 justify-center items-start'>
          <button className='bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Shop For Bikes</button>
          <button className='bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Donate</button>
        </div>
      </div>
    </div>
  )
}
