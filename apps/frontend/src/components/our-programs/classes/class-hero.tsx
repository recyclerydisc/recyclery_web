import { BgImage } from '../../generic/bg-image';
import { H1 } from '../../generic/styled-tags';
import headerImage from '../classes/header-image.png';

export default function ClassHero() {
  return (
    <BgImage image={headerImage} className="min-h-[32rem]">
      <H1>classes</H1>
      <p className="text-heading2 pt-8 max-w-[56rem] font-brandon">
        We teach bicycle maintenance through our introductory Tune Up Class and our advanced
        Overhaul Class.
      </p>
    </BgImage>
  );
}
