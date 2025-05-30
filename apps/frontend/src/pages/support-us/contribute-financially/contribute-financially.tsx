import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContributeHero from '../../../assets/images/support-us/contribute-financially/contribute-hero.png';
import ContributeImage from '../../../assets/images/support-us/contribute-financially/contribute-image.png';
import Accordion from '../../../components/generic/accordion.tsx';
import { BgImage } from '../../../components/generic/bg-image.tsx';
import { Button } from '../../../components/generic/buttons.tsx';
import DashedBorder from '../../../components/generic/dashed-border.tsx';
import { EditLink } from '../../../components/generic/edit-image-button.tsx';
import { H1, H2, H3, Section } from '../../../components/generic/styled-tags.tsx';
import { donationAccordionContent } from '../../../content/donation-info.ts';
import { useUser } from '../../../hooks/useUser.tsx';

function ContributeFinancially() {
  const [heroImageURL, setHeroImageURL] = useState<string | undefined>(undefined);
  const [contributeImageURL, setContributeImageURL] = useState<string | undefined>(undefined);
  const { isAuthenticated } = useUser();

  useEffect(() => {
    fetch(`/images/11`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setHeroImageURL(data.bucket_link);
        } else {
          setHeroImageURL(ContributeHero);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setHeroImageURL(ContributeHero);
      });
  }, []);

  useEffect(() => {
    fetch(`/images/12`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setContributeImageURL(data.bucket_link);
        } else {
          setContributeImageURL(ContributeImage);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setHeroImageURL(ContributeImage);
      });
  }, []);

  return (
    <main>
      <title>Contribute Financially - The Recyclery</title>
      <BgImage image={heroImageURL} className="min-h-[32rem]">
        <H1>contribute financially</H1>
        <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">
          Donate money directly to help fund our programs
        </p>
      </BgImage>
      {isAuthenticated && <EditLink id="11"></EditLink>}
      <Section>
        <H2 className="text-center">make a donation today</H2>
        <div className="bg-tan-500 p-2 rounded-2xl">
          <DashedBorder className="flex flex-col lg:flex-row justify-center items-start gap-8 p-8">
            <div className="flex-1">
              <H3>how does my donation help?</H3>
              <p className="font-brandon mb-4">
                Click on one of the options below to see what your donation amount directly
                correlates to in our programs.
              </p>
              <Accordion items={donationAccordionContent} />
            </div>
            <div className="flex-1">
              <H3>ready to donate?</H3>
              <p className="font-brandon mb-4">
                Regardless of how much you are able or willing to donate, we greatly appreciate your
                support!
              </p>
              <img
                src={contributeImageURL}
                alt="donation image"
                className="w-full aspect-16/9 object-cover rounded-2xl mb-4"
              />
              {isAuthenticated && <EditLink id="12" className="mb-5"></EditLink>}
              <Button color="orange" className="w-full">
                <Link to="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G&ssrt=1746749857705">
                  Make A Donation
                </Link>
              </Button>
            </div>
          </DashedBorder>
        </div>
      </Section>
    </main>
  );
}

export default ContributeFinancially;
