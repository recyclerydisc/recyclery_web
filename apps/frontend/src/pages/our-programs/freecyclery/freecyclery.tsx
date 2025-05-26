import { useEffect, useState } from 'react';
import earnABike from '../../../assets/images/our-programs/freecyclery/earn-a-bike.jpg';
import headerPoster from '../../../assets/images/our-programs/freecyclery/freecyclery-header.png';
import { BgImage } from '../../../components/generic/bg-image.tsx';
import { EditLink } from '../../../components/generic/EditLink.tsx';
import { H1 } from '../../../components/generic/styled-tags.tsx';
import AboutSection from '../../../components/our-programs/freecyclery/about-section.tsx';
import EarnABike from '../../../components/our-programs/freecyclery/earn-a-bike.tsx';
import HowItWorks from '../../../components/our-programs/freecyclery/how-it-works.tsx';
import MakeReferral from '../../../components/our-programs/freecyclery/make-referral.tsx';
import Partners from '../../../components/our-programs/freecyclery/partners.tsx';
import { useUser } from '../../../hooks/useUser.tsx';

function Freecyclery() {
  const [heroimageURL, setHeroImageURL] = useState<string | undefined>(undefined);
  const [secimageURL, setSecImageURL] = useState<string | undefined>(undefined);
  const { isAuthenticated } = useUser();

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
      {isAuthenticated && <EditLink id="7"></EditLink>}
      <AboutSection imageURL={secimageURL} />
      <HowItWorks />
      <MakeReferral />
      <EarnABike />
      <Partners />
    </main>
  );
}

export default Freecyclery;
