import { useEffect, useState } from 'react';
import WhoHero from '../../../assets/images/about-us/who/who-hero.png';
import MemberCard from '../../../components/about-us/who-we-are/member-card';
import { BgImage } from '../../../components/generic/bg-image';
import { H1, H2, Section } from '../../../components/generic/styled-tags';
import { members } from '../../../content/members';

function WhoWeAre() {
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`/images/4`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setImageURL(data.bucket_link);
        } else {
          setImageURL(WhoHero);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setImageURL(WhoHero);
      });
  }, []);

  return (
    <main className="w-full">
      <BgImage image={imageURL} className="min-h-[32rem]">
        <H1>who we are</H1>
        <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">
          The seed idea of The Recyclery was planted in 2005, with 2025 marking our 20th anniversary
          as well as our milestone of refurbishing 10,000 bikes.
        </p>
      </BgImage>
      <Section>
        <H2>staff and collective members</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => {
            return <MemberCard key={index} {...member} />;
          })}
        </div>
      </Section>
    </main>
  );
}

export default WhoWeAre;
