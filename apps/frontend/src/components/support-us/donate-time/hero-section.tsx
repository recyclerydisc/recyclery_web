import { Link } from 'react-router-dom';
import { BgImage } from '../../generic/bg-image.tsx';
import { Button } from '../../generic/buttons.tsx';
import { A, H1 } from '../../generic/styled-tags.tsx';

function HeroSection({ image }: { image?: string }) {
  return (
    <BgImage image={image} className="min-h-[32rem]">
      <H1 className="mb-6">become a volunteer</H1>
      <Link to="https://www.volgistics.com/appform/1124825310">
        <Button color="orange">Apply Now!</Button>
      </Link>
      <p className="text-xl font-brandon mt-6">
        Already have access? Sign in{' '}
        <A to="https://www.volgistics.com/vicnet/623282/login" className="!text-white">
          here
        </A>
      </p>
    </BgImage>
  );
}

export default HeroSection;
