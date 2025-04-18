import { Bike, XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AboutUsSubItems, OurProgramsSubItems, SupportUsSubItems } from './nav-content';
import SideMenuItem from './side-menu-item';
import { BlueButtonLink } from '../generic/buttons';

interface SideMenuProps {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (arg0: boolean) => void;
}

export default function SideMenu({ isSideMenuOpen, setIsSideMenuOpen }: SideMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [currentActiveAccordion, setCurrentActiveAccordion] = useState('');

  function handleAccordionSelect(accordionTitle: string) {
    if (currentActiveAccordion === accordionTitle) {
      setCurrentActiveAccordion('');
    } else {
      setCurrentActiveAccordion(accordionTitle);
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsSideMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [menuRef, setIsSideMenuOpen]);

  return (
    <div ref={menuRef} className="lg:hidden z-50">
      <div
        className={`fixed inset-y-0 ${isSideMenuOpen ? 'right-0' : '-right-full'} transition-[right] duration-300 bg-tan-500 p-4 w-full md:w-[400px] flex flex-col justify-start gap-4 border border-tan-700 border-l-0 md:border-l-[1px]`}
      >
        <div className="flex justify-between items-center px-3">
          <div className="flex justify-center items-center gap-2">
            <Bike className="size-10" />
            <b className="text-[28px] text-nowrap">the recyclery</b>
          </div>
          <button
            className="p-3 cursor-pointer rounded-2xl bg-tan-500 hover:bg-tan-600 transition-colors"
            onClick={() => setIsSideMenuOpen(false)}
          >
            <XIcon className="size-5" />
          </button>
        </div>
        <div className="border-[1px] border-tan-700" />
        <div className="space-y-3">
          <SideMenuItem
            title="About Us"
            subItems={AboutUsSubItems}
            currentActiveAccordion={currentActiveAccordion}
            handleAccordionSelect={handleAccordionSelect}
          />
          <SideMenuItem
            title="Our Programs"
            subItems={OurProgramsSubItems}
            currentActiveAccordion={currentActiveAccordion}
            handleAccordionSelect={handleAccordionSelect}
          />
          <SideMenuItem
            title="Support Us"
            subItems={SupportUsSubItems}
            currentActiveAccordion={currentActiveAccordion}
            handleAccordionSelect={handleAccordionSelect}
          />
        </div>
        <div className="border-[1px] border-tan-700" />
        <div className="flex flex-col gap-4 justify-center items-start">
          <BlueButtonLink to="https://therecyclery.square.site/">Shop For Bikes</BlueButtonLink>
          <BlueButtonLink to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G">
            Donate
          </BlueButtonLink>
        </div>
      </div>
    </div>
  );
}
