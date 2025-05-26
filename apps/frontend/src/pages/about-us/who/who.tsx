import { useEffect, useState } from 'react';
import WhoHero from '../../../assets/images/about-us/who/who-hero.png';
import MemberCard from '../../../components/about-us/who-we-are/member-card.tsx';
import { BgImage } from '../../../components/generic/bg-image.tsx';
import { EditLink } from '../../../components/generic/EditLink.tsx';
import { H1, H2, Section } from '../../../components/generic/styled-tags.tsx';
import { members } from '../../../content/members.ts';
import { useUser } from '../../../hooks/useUser.tsx';

function WhoWeAre() {
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);
  const { isAuthenticated } = useUser();

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
      <title>Who We Are - The Recyclery</title>
      <BgImage image={imageURL} className="min-h-[32rem]">
        <H1>who we are</H1>
        <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">
          Get to know some of our team members.
        </p>
      </BgImage>
      {isAuthenticated && <EditLink id="4"></EditLink>}
      <Section>
        <H2>staff and collective members</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => {
            return <MemberCard key={index} {...member} />;
          })}
        </div>
        <p className="font-brandon pt-12">
          We are collective owned and operated. The Recyclery is organized by a board of volunteer
          "collective members." All collective members contribute three hours per week and commit to
          attending the majority of Collective Meetings which are held on the 2nd and 4th Monday of
          each month. The meetings are open to anyone who has a stake in The Recyclery. Collective
          Members make decisions through a consensus process.{' '}
        </p>
      </Section>
    </main>
  );
}

export default WhoWeAre;
