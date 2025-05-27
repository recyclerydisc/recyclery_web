import { useEffect, useState } from 'react';
import DonateHero from '../../../assets/images/support-us/donate-a-bike/donate-hero.png';
import DonateImage from '../../../assets/images/support-us/donate-a-bike/donate-image.jpeg';
import { BgImage } from '../../../components/generic/bg-image.tsx';
import DashedBorder from '../../../components/generic/dashed-border.tsx';
import { A, H1, H2, H3, Section } from '../../../components/generic/styled-tags.tsx';
import { collectionPoints } from '../../../content/collection-points.ts';

function DonateABike() {
  const [heroImageURL, setHeroImageURL] = useState<string | undefined>(undefined);
  const [donateImageURL, setDonateImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`/images/13`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setHeroImageURL(data.bucket_link);
        } else {
          setHeroImageURL(DonateHero);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setHeroImageURL(DonateHero);
      });
  }, []);

  useEffect(() => {
    fetch(`/images/14`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setDonateImageURL(data.bucket_link);
        } else {
          setDonateImageURL(DonateImage);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setDonateImageURL(DonateImage);
      });
  }, []);

  return (
    <main>
      <title>Donate a Bike - The Recyclery</title>
      <BgImage image={heroImageURL} className="min-h-[32rem]">
        <H1>donate a bike</H1>
        <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">
          Donate your old bikes to either support our programs or help people in need
        </p>
      </BgImage>
      <Section className="flex flex-col lg:flex-row justify-between items-center lg:gap-16 gap-8">
        <div className="flex-1">
          <H2>why donate a bike</H2>
          <p className="font-brandon">
            A donated bicycle will be given away to people who need them through our{' '}
            <A to="/our-programs/freecyclery">Freecyclery program</A>, used in our{' '}
            <A to="/our-programs/classes">classes</A>, or repaired by a mechanic and sold for an
            affordable price. We rely on these donations to keep all of our programs running.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={donateImageURL}
            alt="why donate image"
            className="rounded-2xl object-cover aspect-16/9 max-w-[500px] w-full"
          />
        </div>
      </Section>
      <Section tan>
        <H2 className="text-center">how to donate</H2>
        <p className="font-brandon text-center mb-4">
          We offer three different ways for you to donate your old bikes. Feel free to choose the
          method that is the most convenient for you.
        </p>
        <div className="w-full flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1/2 p-2 bg-white rounded-2xl w-full">
            <DashedBorder className="space-y-2 p-8">
              <H3>1. public programs</H3>
              <p className="font-brandon mb-4">
                Bring in your donation during our public program hours listed below.
              </p>
              <ul className="font-brandon space-y-2">
                <li>Saturday: 11am - 2pm</li>
                <li>Monday: 12pm - 3pm and 5:30pm - 7:30pm</li>
                <li>Tuesday: 5pm - 7pm</li>
                <li>Wednesday: 6pm - 8pm</li>
                <li>Thursday: 10am - 1pm and 7pm - 9pm</li>
              </ul>
            </DashedBorder>
          </div>
          <div className="flex-1/2 flex flex-col gap-4">
            <div className="p-2 bg-white rounded-2xl">
              <DashedBorder className="flex-1/3 p-8 space-y-2">
                <H3>2. email us</H3>
                <p className="font-brandon">
                  Send an email to{' '}
                  <A to="mailto:donatebikes@therecyclery.org">donatebikes@therecyclery.org</A> and
                  we'll reach out to you about scheduling a pick-up.
                </p>
              </DashedBorder>
            </div>
            <div className="p-2 bg-white rounded-2xl">
              <DashedBorder className="flex-1/3 p-8 space-y-2">
                <H3>3. direct dropoff</H3>
                <p className="font-brandon mb-2">
                  Drop off bikes directly to the collection points listed in the section below.
                </p>
              </DashedBorder>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <H2 className="text-center">collection points</H2>
        <ul className="flex justify-center items-center flex-wrap gap-6 font-brandon">
          {collectionPoints.map((collectionPoint, index) => (
            <li key={index} className="w-[300px]">
              <A to={collectionPoint.url}>{collectionPoint.title}</A>
              <p>{collectionPoint.address}</p>
              <p>{collectionPoint.phone}</p>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}

export default DonateABike;
