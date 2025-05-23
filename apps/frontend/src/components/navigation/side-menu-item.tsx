import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavContentType } from '../../types.tsx';

type SideMenuItemProps = {
  currentActiveAccordion: string;
  handleAccordionSelect: (arg0: string) => void;
} & NavContentType;

export default function SideMenuItem({
  currentActiveAccordion,
  handleAccordionSelect,
  title,
  items,
}: SideMenuItemProps) {
  return (
    <div
      className={`flex flex-col transition-all duration-200 ${currentActiveAccordion === title ? 'max-h-screen ease-in' : 'max-h-[44px] ease-out'} overflow-hidden`}
    >
      <button
        className="flex justify-between items-center px-3 cursor-pointer"
        onClick={() => handleAccordionSelect(title)}
      >
        <span className="text-body2">{title}</span>
        <div className="p-3 cursor-pointer rounded-2xl bg-inherit">
          <ChevronDown
            className={`size-5 ${currentActiveAccordion === title ? 'rotate-180' : ''} transition-transform`}
          />
        </div>
      </button>
      <div className="space-y-2 px-2">
        {items.map(item => {
          return (
            <Link
              key={item.title}
              to={item.destination}
              className="w-full flex justify-start items-center gap-4 px-4 py-3 rounded-2xl bg-tan-500 hover:bg-tan-600 group cursor-pointer transition-colors"
            >
              <div>{item.icon}</div>
              <div>
                <b className="text-body2 text-nowrap">{item.title}</b>
                <p className="font-brandon">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
