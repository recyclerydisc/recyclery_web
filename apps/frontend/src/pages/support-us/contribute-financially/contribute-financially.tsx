import { Link } from "react-router-dom";
import WhoHero from '../../../assets/images/about-us/who/who-hero.png';
import Accordion from "../../../components/generic/accordion";
import { BgImage } from "../../../components/generic/bg-image";
import { OrangeButton } from "../../../components/generic/buttons";
import DashedBorder from "../../../components/generic/dashed-border";
import { H1, H2, H3, Section } from "../../../components/generic/styled-tags";
import { donationAccordionContent } from "../../../content/donation-info";

export default function ContributeFinancially() {
  return (
    <main>
      <BgImage image={WhoHero} className="min-h-[32rem]">
        <H1>contribute financially</H1>
        <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">
          Donate money directly to help fund our programs
        </p>
      </BgImage>
      <Section>
        <H2 className="text-center">make a donation today</H2>
        <div className="bg-tan-500 p-2 rounded-2xl">
          <DashedBorder className="flex flex-col md:flex-row justify-center items-start gap-8 p-8">
            <div className="flex-1">
              <H3 className="text-black">how does my donation help?</H3>
              <p className="font-brandon mb-4">Click on one of the options below to see what your donation amount directly correlates to in our programs.</p>
              <Accordion items={donationAccordionContent}/>
            </div>
            <div className="flex-1">
              <H3 className="mb-4">ready to donate?</H3>
              <p className="font-brandon mb-4">Regardless of how much you are able or willing to donate, we greatly appreciate your support!</p>
              <OrangeButton>
                <Link to="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G&ssrt=1746749857705">
                  Make A Donation
                </Link>
              </OrangeButton>
            </div>
          </DashedBorder>
        </div>
      </Section>
    </main>
  );
}
