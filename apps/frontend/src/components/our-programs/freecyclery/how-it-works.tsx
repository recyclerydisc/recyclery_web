import { Bike, Megaphone } from 'lucide-react';
import { A, H2 } from '../../generic/styled-tags';
import circleSketch from '../../../assets/images/our-programs/freecyclery/circle-sketch.svg';
import arrow from '../../../assets/images/our-programs/freecyclery/arrow.svg';

export default function HowItWorks() {
  return (
    <section className="bg-tan-500 px-16 py-16 flex flex-col items-center">
      <H2>how does it work?</H2>
      <p className="text-body1 pt-4 font-brandon">
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
          <h3 className="text-subheading1">Referrals</h3>
          <p className="text-body2 pt-2 font-brandon">
            Our dedicated <A to="#">Freecyclery Partners</A> refer individuals to us to receive a
            free bicycle.
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
          <h3 className="text-subheading1">Earn-A-Bike Fellowship</h3>
          <p className="text-body2 pt-2 font-brandon">
            Adults and youth can earn a Freecyclery bike through our{' '}
            <A to="#">Earn-a-Bike Fellowship</A> programs.
          </p>
        </div>
      </div>
    </section>
  );
}
