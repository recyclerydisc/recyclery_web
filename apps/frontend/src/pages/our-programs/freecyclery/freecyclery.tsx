import headerPoster from '../../../assets/images/our-programs/freecyclery/freecyclery-header.png';
import { H1 } from '../../../components/generic/styled-tags';
import { BgImage } from '../../../components/generic/bg-image';
import AboutSection from '../../../components/our-programs/freecyclery/about-section';
import HowItWorks from '../../../components/our-programs/freecyclery/how-it-works';
import MakeReferral from '../../../components/our-programs/freecyclery/make-referral';
import EarnABike from '../../../components/our-programs/freecyclery/earn-a-bike';
import Partners from '../../../components/our-programs/freecyclery/partners';

export default function Freecyclery() {
  return (
    <>
      <BgImage image={headerPoster} className="min-h-[24rem]">
        <H1>freecyclery</H1>
      </BgImage>
      <AboutSection />
      <HowItWorks />
      <MakeReferral />
      <EarnABike />
      <Partners />
    </>
  );
}
