import { useEffect, useState } from 'react';
import headerPoster from '../../../assets/images/our-programs/freecyclery/freecyclery-header.png';
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
        setSecImageURL(data.bucket_link);
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
      });
  }, []);

  return (
    <>
      <BgImage image={heroimageURL} className="min-h-[24rem]">
        <H1>freecyclery</H1>
      </BgImage>
      {/* Mirai, note that I have to pass in the imageURL from a fetch made on this page, could you
      make it so I can at least pass a parameter into the component with the image inside */}
      <AboutSection />
      <HowItWorks />
      <MakeReferral />
      <EarnABike />
      <Partners />
    </>
  );
}

export default Freecyclery;
