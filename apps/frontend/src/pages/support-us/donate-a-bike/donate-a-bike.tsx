import WhatHero from '../../../assets/images/about-us/what/what-hero.png';
import { BgImage } from '../../../components/generic/bg-image';
import { A, H1, H2, H3, Section } from '../../../components/generic/styled-tags';

export default function DonateABike() {
  return (
    <main className="w-full">
      <BgImage image={WhatHero} className="min-h-[32rem]">
        <H1>donate a bike</H1>
        <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">
         Donate your old bikes to either support our programs or help people in need
        </p>
      </BgImage>
      <Section >
        <div>
          <H2>why donate a bike</H2>
          <p className="font-brandon">A donated bicycle will be given away to people who need them through our <A to="/our-programs/freecyclery">Freecyclery program</A>, used in our <A to="/our-programs/classes">classes</A>, or repaired by a mechanic and sold for an affordable price. We rely on these donations to keep all of our programs running.</p>
        </div>
      </Section>
      <Section tan>
        <H2>how to donate</H2>
        <div className="w-full flex flex-col gap-8">
          <div className="flex-1/3">
            <H3>public programs</H3>
            <p className="font-brandon mb-2">Bring in your donation during our public program hours listed below.</p>
            <ul className="font-brandon space-y-2">
              <li>Saturday: 11am - 2pm</li>
              <li>Monday: 12pm - 3pm and 5:30pm - 7:30pm</li>
              <li>Tuesday: 5pm - 7pm</li>
              <li>Wednesday: 6pm - 8pm</li>
              <li>Thursday: 10am - 1pm and 7pm - 9pm</li>
            </ul>
          </div>
          <div className="flex-1/3">
            <H3>email us</H3>
            <p className="font-brandon">Send an email to <A to="">donatebikes@therecyclery.org</A> and we'll reach out to you about scheduling a pick-up.</p>
          </div>
          <div className="flex-1/3">
            <H3>direct dropoff</H3>
            <p className="font-brandon mb-2">Drop off bikes directly to the Collection Points listed below.</p>
            <ul className="font-brandon space-y-2">
              <li>
                <A to="http://www.cogcycleschicago.com/">Cog Cycles Chicago</A>
                <p>3217 W Bryn Mawr Ave, Chicago, IL 60659</p>
                <p>312-373-0095</p>
              </li>
              <li>
                <A to="https://samcycle.online/">Samcycle Electric Bikes</A>
                <p>144 W Northwest Hwy, Palatine, IL 60067</p>
                <p>847-485-7014</p>
              </li>
              <li>
                <A to="https://www.greenmachinecycles.com/">Green Machine Cycles</A>
                <p>1634 W Montrose Ave, Chicago, IL 60613</p>
                <p>773-506-2453</p>
              </li>
              <li>
                <A to="https://www.bffbikes.com/">BFF Bikes</A>
                <p>2056 N Damen Ave, Chicago, IL 60647</p>
                <p>773-666-5153</p>
              </li>
              <li>
                <A to="https://www.bigcitybikes.org/">Big City Bikes</A>
                <p>2425 N Ashland Ave, Chicago, IL 60614</p>
                <p>773-906-5311</p>
              </li>
              <li>
                <A to="https://dropoffyouroldbike.splashthat.com/">Patagonia Fultom Market</A>
                <p>1115 W Fulton Market, Chicago, IL 60607</p>
                <p>312-951-0518</p>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
