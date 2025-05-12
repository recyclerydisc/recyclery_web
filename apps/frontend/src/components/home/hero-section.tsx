import { useEffect, useState } from 'react';
import headerPoster from '../../assets/images/home/header-poster.jpg';
import { BgImage } from '../generic/bg-image';
import { BlueButtonLink, OrangeButtonLink } from '../generic/buttons';
import { H1 } from '../generic/styled-tags';

function HeroSection() {
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`/images/1`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setImageURL(data.bucket_link);
        } else {
          setImageURL(headerPoster);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setImageURL(headerPoster);
      });
  }, []);

  return (
    <BgImage image={imageURL} className="min-h-[32rem]">
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

export default HeroSection;
