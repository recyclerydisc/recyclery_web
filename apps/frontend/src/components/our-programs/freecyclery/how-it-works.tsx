import { Bike, Megaphone } from 'lucide-react';
import arrow from '../../../assets/images/our-programs/freecyclery/arrow.svg';
import circleSketch from '../../../assets/images/our-programs/freecyclery/circle-sketch.svg';
import { H2, H3, Section } from '../../generic/styled-tags';

export default function HowItWorks() {
  return (
    <Section className="flex flex-col items-center" tan>
      <H2>how does it work?</H2>
      <p className="text-body1 font-brandon">
        The Freecyclery Program provides
        <span
          className="relative inline-flex items-center justify-center w-12 h-12"
          style={{
            backgroundImage: `url("${circleSketch}")`,
            backgroundSize: '100% 100%',
          }}
        >
          TWO
        </span>
        ways for people to get bikes for free:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
        <div>
          <div className="relative">
            <Megaphone className="size-32 mx-auto" />
            <img
              src={arrow}
              alt="arrow"
              className="hidden md:block absolute w-[30%] top-[-32%] left-[70%]"
            />
          </div>
          <H3>Referrals</H3>
          <p className="text-body2 pt-2 font-brandon">
            Our dedicated{' '}
            <a href="#partners" className="underline text-blue-500 hover:text-blue-800 transition">
              Freecyclery Partners
            </a>{' '}
            refer individuals to us to receive a free bicycle.
          </p>
        </div>
        <div>
          <div className="relative">
            <Bike className="size-32 mx-auto" />
            <img
              src={arrow}
              alt="arrow"
              className="hidden md:block absolute w-[30%] top-[-32%] left-[-3%] -scale-x-100"
            />
          </div>
          <H3>Earn-A-Bike Fellowship</H3>
          <p className="text-body2 pt-2 font-brandon">
            Adults and youth can earn a Freecyclery bike through our{' '}
            <a
              href="#earn-a-bike"
              className="underline text-blue-500 hover:text-blue-800 transition"
            >
              Earn-a-Bike Fellowship
            </a>{' '}
            programs.
          </p>
        </div>
      </div>
    </Section>
  );
}
