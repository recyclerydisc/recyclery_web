import { CircleCheckBig, CircleMinus, CirclePlus } from 'lucide-react';
import { useState } from 'react';
import { AccordionItem } from '../../types.tsx';
import DashedBorder from './dashed-border.tsx';

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [toggled, setToggled] = useState(0);

  return (
    <div>
      {items.map((item, index) => (
        <DashedBorder
          key={index}
          className={`mb-2 transition duration-300 ease-in-out hover:bg-background ${toggled === index ? 'bg-background p-4' : ''}`}
          dashSize={2}
          dashGap={10}
        >
          <button
            className={`flex gap-3 items-center w-full cursor-pointer ${toggled === index ? 'mb-2' : 'p-4'}`}
            onClick={() => (toggled === index ? setToggled(-1) : setToggled(index))}
            aria-expanded={toggled === index}
          >
            <CircleCheckBig className="min-w-5 min-h-5" />
            <h3 className="text-subheading2 text-left">{item.title}</h3>
            <div className="grow" />
            {toggled === index ? (
              <CircleMinus className="min-w-5 min-h-5" />
            ) : (
              <CirclePlus className="min-w-5 min-h-5" />
            )}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out grid overflow-hidden ${toggled === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          >
            <p className={`text-body2 font-brandon min-h-0`}>{item.content}</p>
          </div>
        </DashedBorder>
      ))}
    </div>
  );
}
