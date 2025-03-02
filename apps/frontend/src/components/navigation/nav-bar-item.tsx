import { ChevronDown } from "lucide-react";
import { NavbarSubMenuItemType } from "./nav-bar";

interface NavbarItemProps {
  title: string;
  subItems: NavbarSubMenuItemType[];
}

export default function NavbarItem({title, subItems} : NavbarItemProps) {
  return (
    <div className='relative group'>
      <button className='inline-flex items-center gap-1 cursor-pointer'>
        <span className='text-body2'>{title}</span>
        <ChevronDown className='size-5'/>
      </button>
      <div className={`absolute top-full -left-7 mt-4 transition-opacity duration-200 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 opacity-0 invisible translate-y-2 bg-tan-500 rounded-2xl p-3 border border-tan-700 shadow-lg space-y-2`}>
        {
          subItems.map((subItem) => {
            return (
              <div className='w-[400px] flex justify-start items-center gap-4 px-4 py-3 rounded-2xl bg-tan-500 hover:bg-tan-600 group cursor-pointer transition-colors'>
                <div>
                  {subItem.icon}
                </div>
                <div>
                  <span className='text-body2 font-bold text-nowrap'>{subItem.title}</span>
                  <p>{subItem.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
