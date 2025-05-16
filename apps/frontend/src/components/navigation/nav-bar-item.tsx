import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavContentType } from '../../types';

export default function NavbarItem({ title, items }: NavContentType) {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setIsFlyoutOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [itemRef, setIsFlyoutOpen]);

  return (
    <div ref={itemRef} className="relative group z-10">
      <button
        className="inline-flex items-center gap-1 cursor-pointer"
        onClick={() => setIsFlyoutOpen(!isFlyoutOpen)}
      >
        <span className="text-body2 font-brandon">{title}</span>
        <ChevronDown
          className={`size-5 ${isFlyoutOpen ? 'rotate-180' : ''} transition-transform`}
        />
      </button>
      <div
        className={`absolute top-full -left-7 mt-4 transition-opacity duration-200 ${isFlyoutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'} bg-tan-500 rounded-2xl p-3 border border-tan-700 shadow-lg space-y-2`}
      >
        {items.map(item => {
          return (
            <Link
              key={item.title}
              to={item.destination}
              className="w-[400px] flex justify-start items-center gap-4 px-4 py-3 rounded-2xl bg-tan-500 hover:bg-tan-600 group cursor-pointer transition-colors"
            >
              <div>{item.icon}</div>
              <div>
                <b className="text-nowrap">{item.title}</b>
                <p className="font-brandon">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
