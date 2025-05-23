import { useEffect, useState } from 'react';
import OpenshopHero from '../../../assets/images/our-programs/openshop/openshop-hero.png';
import OpenshopSection1 from '../../../assets/images/our-programs/openshop/openshop-section-1.png';
import { BgImage } from '../../../components/generic/bg-image.tsx';
import { A, H1, H2, Section } from '../../../components/generic/styled-tags.tsx';

function OpenShop() {
  const [heroimageURL, setHeroImageURL] = useState<string | undefined>(undefined);
  const [secimageURL, setSecImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`/images/5`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setHeroImageURL(data.bucket_link);
        } else {
          setHeroImageURL(OpenshopHero);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setHeroImageURL(OpenshopHero);
      });
  }, []);

  useEffect(() => {
    fetch(`/images/6`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setSecImageURL(data.bucket_link);
        } else {
          setSecImageURL(OpenshopSection1);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setSecImageURL(OpenshopSection1);
      });
  }, []);

  return (
    <main className="w-full">
      <title>Open Shop - The Recyclery</title>
      <BgImage image={heroimageURL} className="min-h-[32rem]">
        <H1>open shop</H1>
        <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">
          Use our tools to fix your own bike with the instruction of Recyclery mechanics.
        </p>
      </BgImage>
      <Section className="flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
        <div className="flex flex-col gap-6">
          <div>
            <H2>what is open shop?</H2>
            <div className="space-y-4">
              <p className="font-brandon">
                Open Shop is a program where you can work on your own bike with help from Recyclery
                mechanics. All levels of experience are welcome. We strive to provide an open,
                respectful and collaborative atmosphere free of mechanical elitism. One of our
                volunteers will be happy to help you figure out how to get your bike running well.
              </p>
              <p className="font-brandon">
                For those working on their own bicycles we suggest a $10/hour donation. This helps
                us covering running costs like rent, tools.
              </p>
              <p className="font-brandon">
                You may purchase new or used parts for affordable prices during Open Shop.
              </p>
              <p className="font-brandon">
                For femme, trans, women and non-binary community,{' '}
                <A to="/our-programs/ftwnb">FTWN-B Shop Time</A> (Sundays 3-6pm) is another
                opportunity to work on your bike.
              </p>
            </div>
          </div>
        </div>
        <img
          src={secimageURL}
          alt="Two people working on a bike"
          className="max-w-[450px] w-full rounded-2xl object-fit"
        />
      </Section>
      <Section tan>
        <H2>hours</H2>
        <div className="space-y-4 font-brandon">
          <ul>
            <li>Tuesdays 5-7pm</li>
            <li>Thursdays 7-9pm</li>
            <li>Saturdays 11am-2pm</li>
          </ul>
          <p>
            Complete bikes are sold during Saturday Open Shop 11am - 2pm, our In-Person Sales
            Wednesday 6pm - 8pm, and 24/7 through our{' '}
            <A to="https://therecyclery.square.site/">online shop.</A>
          </p>
        </div>
      </Section>
    </main>
  );
}

export default OpenShop;
