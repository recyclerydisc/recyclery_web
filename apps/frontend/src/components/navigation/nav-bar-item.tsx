import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavbarSubMenuItemType } from "./nav-bar";

interface NavbarItemProps {
  title: string;
  subItems: NavbarSubMenuItemType[];
  currentActiveFlyout: string
  handleFlyoutSelect: (arg0: string) => void;
}

export default function NavbarItem({title, subItems, currentActiveFlyout, handleFlyoutSelect} : NavbarItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        handleFlyoutSelect("")
      }
    }

    document.addEventListener("click", handleClickOutside, true)

    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [itemRef, handleFlyoutSelect])

  return (
    <div ref={itemRef} className='relative group'>
      <button className='inline-flex items-center gap-1 cursor-pointer' onClick={() => handleFlyoutSelect(title)}>
        <span className='text-body2'>{title}</span>
        <ChevronDown className={`size-5 ${currentActiveFlyout === title ? "rotate-180" : ""} transition-transform`}/>
      </button>
      <div className={`absolute top-full -left-7 mt-4 transition-opacity duration-200 ${currentActiveFlyout === title ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"} bg-tan-500 rounded-2xl p-3 border border-tan-700 shadow-lg space-y-2`}>
        {
          subItems.map((subItem) => {
            return (
              <Link to={subItem.destination} className='w-[400px] flex justify-start items-center gap-4 px-4 py-3 rounded-2xl bg-tan-500 hover:bg-tan-600 group cursor-pointer transition-colors'>
                <div>
                  {subItem.icon}
                </div>
                <div>
                  <b className='text-body2 text-nowrap'>{subItem.title}</b>
                  <p>{subItem.description}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
