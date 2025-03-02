import { Bike, ChevronDown, XIcon } from "lucide-react";

interface SideMenuProps {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (arg0: boolean) => void;
}

export default function SideMenu({ isSideMenuOpen, setIsSideMenuOpen }: SideMenuProps) {
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
