import { useEffect, useState } from 'react';
import bikerepairPic from '../../../assets/images/our-programs/FTWNB/FTWN-B.jpg';
import { A, H1, H2, Section } from '../../../components/generic/styled-tags.tsx';

function FTWNB() {
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`/images/9`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setImageURL(data.bucket_link);
        } else {
          setImageURL(bikerepairPic);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setImageURL(bikerepairPic);
      });
  }, []);

  return (
    <>
      <title>FTWNB - The Recyclery</title>
      <Section className="flex flex-col justify-center items-center p-8 text-center min-h-[32rem]">
        {/* for future migrate to H2 tag once color prop is made */}
        <H1 className="!text-black">FTWN-B Shop</H1>
        <p className="text-body1 sm:text-heading2 mt-8 max-w-[56rem] font-brandon">
          for people identifying as femme, trans, women, or non-binary.
        </p>

        {/* rounded button */}
        <div className="mt-8">
          <p className="text-3xl bg-tan-500 px-3 rounded-3xl inline-block">sundays 3-6 PM</p>
        </div>
      </Section>

      {/* Row one of text and pic */}
      <Section className="md:grid md:grid-cols-2 items-center gap-16 !pb-10" tan>
        {/* Left text block */}
        <div>
          <H2>in this program...</H2>
          <ul className="font-brandon text-body1 space-y-4 list-disc ml-5">
            <li>Bring in your bike and learn some repair skills from talented mechanics</li>

            <li>
              Volunteer and fix up bikes for our{' '}
              <A to="/our-programs/freecyclery/">Freecyclery Program</A>
            </li>

            <li>Hang out with fellow FTWN-B bike riders</li>
          </ul>
        </div>

        {/* image */}
        <div className="flex justify-center mt-6 md:mt-0">
          <img className="max-h-64 rounded-full" src={imageURL} alt="Bike repair" />
        </div>
      </Section>

      <Section className="font-brandon text-subheading2 space-y-4 !pt-0 !pb-16" tan>
        <p>
          This program is specifically catering to the Femme, Trans, Women, and Non-Binary members
          of our community.* We're aiming to provide a welcoming, safe space for individuals who
          have historically been excluded by the bicycling community.
        </p>

        <p>
          This program is an amalgamation of our programs. You can come to learn, socialize,
          volunteer, work on your bike, and more! Our host Skylar would love to help you work on
          your own bike or teach you skills on how to work on second hand bikes.
        </p>
      </Section>

      <Section className="!pt-0 !pb-8 font-brandon text-body2 flex justify-end bg-tan-500">
        <p>
          *We ask for people who don't identify as FTWN-B to come to our general{' '}
          <A to="/our-programs/openshop/">Open Shop Hours</A> instead
        </p>
      </Section>
    </>
  );
}

export default FTWNB;
