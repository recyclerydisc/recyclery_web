import headerPoster from '../../assets/images/home/header-poster.jpg';
import { H1 } from '../generic/styled-tags';
import { BlueButtonLink, OrangeButtonLink } from '../generic/buttons';
import { BgImage } from '../generic/bg-image';

export default function HeroSection() {
  return (
    <BgImage image={headerPoster} className="min-h-[32rem]">
      <H1>the recyclery</H1>
      <p className="text-heading2 pt-8 max-w-[56rem] font-brandon">
        The Recyclery Collective is an educational bike shop that promotes sustainability by giving
        access to tools, skills, and opportunities for collaboration.
      </p>
      <div className="pt-6 space-x-4">
        <OrangeButtonLink to="#">Join Our Newsletter</OrangeButtonLink>
        <BlueButtonLink to="https://therecyclery.square.site/">Shop Our Bikes</BlueButtonLink>
      </div>
    </BgImage>
  );
}
