import { H2 } from '../../generic/styled-tags';
import earnABike from '../../../assets/images/our-programs/freecyclery/earn-a-bike.jpg';
import squigglyLine from '../../../assets/images/our-programs/freecyclery/squiggly-line.svg';

export default function AboutSection() {
  return (
    <section className="bg-background px-8 md:px-24 py-20 lg:py-0 lg:grid lg:grid-cols-2 gap-24 items-center justify-items-center">
      <div>
        <H2>about our program</H2>
        <p className="text-body2 pt-8 font-brandon">
          We work with local social service agencies to connect people in need with a free bike that
          was serviced by volunteer mechanics and checked over by a Recyclery mechanic.
        </p>
      </div>
      <div className="lg:relative w-full lg:h-[30rem] mt-8 lg:mt-0 flex justify-center">
        <img
          src={squigglyLine}
          alt="squiggly line"
          className="hidden lg:block h-[30rem] absolute left-[50%] translate-x-[-50%] z-0"
        />
        <img
          src={earnABike}
          alt="woman holding a bike"
          className="rounded-xl h-[20rem] lg:absolute lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[5rem] lg:z-10"
        />
      </div>
    </section>
  );
}
