import headerPoster from '../../../assets/images/our-programs/freecyclery/freecyclery-header.png';
import { BgImage } from '../../../components/generic/bg-image';
import { H1 } from '../../../components/generic/styled-tags';
import AboutSection from '../../../components/our-programs/freecyclery/about-section';
import EarnABike from '../../../components/our-programs/freecyclery/earn-a-bike';
import HowItWorks from '../../../components/our-programs/freecyclery/how-it-works';
import MakeReferral from '../../../components/our-programs/freecyclery/make-referral';
import Partners from '../../../components/our-programs/freecyclery/partners';

export default function Freecyclery() {
  return (
    <>
      <BgImage image={headerPoster} className="min-h-[32rem]">
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
