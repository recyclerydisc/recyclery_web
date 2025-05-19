import { useEffect, useState } from 'react';
import headerPoster from '../../../assets/images/our-programs/freecyclery/freecyclery-header.png';
import earnABike from '../../../assets/images/our-programs/freecyclery/earn-a-bike.jpg';
import { BgImage } from '../../../components/generic/bg-image';
import { H1 } from '../../../components/generic/styled-tags';
import AboutSection from '../../../components/our-programs/freecyclery/about-section';
import EarnABike from '../../../components/our-programs/freecyclery/earn-a-bike';
import HowItWorks from '../../../components/our-programs/freecyclery/how-it-works';
import MakeReferral from '../../../components/our-programs/freecyclery/make-referral';
import Partners from '../../../components/our-programs/freecyclery/partners';

function Freecyclery() {
  const [heroimageURL, setHeroImageURL] = useState<string | undefined>(undefined);
  const [secimageURL, setSecImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`/images/7`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setHeroImageURL(data.bucket_link);
        } else {
          setHeroImageURL(headerPoster);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setHeroImageURL(headerPoster);
      });
  }, []);

  useEffect(() => {
    fetch(`/images/8`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setSecImageURL(data.bucket_link);
        } else {
          setSecImageURL(earnABike);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
      });
  }, []);

  return (
    <main>
      <title>Freecyclery - The Recyclery</title>
      <BgImage image={heroimageURL} className="min-h-[32rem]">
        <H1>freecyclery</H1>
        <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">
          Earn a free bike through our referral and fellowship programs.
        </p>
      </BgImage>
      <AboutSection imageURL={secimageURL} />
      <HowItWorks />
      <MakeReferral />
      <EarnABike />
      <Partners />
    </main>
  );
}

export default Freecyclery;
