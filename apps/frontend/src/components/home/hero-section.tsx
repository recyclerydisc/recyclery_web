import headerPoster from '../../assets/header-poster.jpg';
import { BgImage } from '../generic/bg-image';
import { BlueButtonLink, OrangeButtonLink } from '../generic/buttons';
import { H1 } from '../generic/styled-tags';

export default function HeroSection() {
  return (
    <BgImage image={headerPoster} className="min-h-[32rem]">
      <H1>the recyclery</H1>
      <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">
        The Recyclery Collective is an educational bike shop that promotes sustainability by giving
        access to tools, skills, and opportunities for collaboration.
      </p>
      <div className="flex sm:flex-row flex-col justify-center items-center gap-x-4 gap-y-2 pt-6">
        <OrangeButtonLink to="#">Join Our Newsletter</OrangeButtonLink>
        <BlueButtonLink to="https://therecyclery.square.site/">Shop Our Bikes</BlueButtonLink>
      </div>
    </BgImage>
  );
}
