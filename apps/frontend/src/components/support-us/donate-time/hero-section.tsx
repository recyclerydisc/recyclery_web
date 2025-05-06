import { BgImage } from '../../generic/bg-image';
import headerImage from '../../../assets/images/support-us/donate-time/donate-time-header.jpg';
import { A, H1 } from '../../generic/styled-tags';
import { OrangeButtonLink } from '../../generic/buttons';

export default function HeroSection() {
  return (
    <BgImage image={headerImage} className="min-h-[32rem]">
      <H1 className="mb-6">become a volunteer</H1>
      <OrangeButtonLink to="https://www.volgistics.com/appform/1124825310">
        Apply Now!
      </OrangeButtonLink>
      <p className="text-xl font-brandon mt-6">
        Already have access? Sign in{' '}
        <A to="https://www.volgistics.com/vicnet/623282/login" className="!text-white">
          here
        </A>
      </p>
    </BgImage>
  );
}
