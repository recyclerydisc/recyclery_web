import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import deliveryBike from '../../../assets/images/our-programs/freecyclery/delivery-bike.png';
import squigglyCross from '../../../assets/images/our-programs/freecyclery/squiggly-cross.svg';
import { referralAccordionContent } from '../../../content/referral-info.tsx';
import Accordion from '../../generic/accordion.tsx';
import DashedBorder from '../../generic/dashed-border.tsx';
import { A, H2, Section } from '../../generic/styled-tags.tsx';

export default function MakeReferral() {
  return (
    <Section
      className="flex flex-col items-center [background-size:0] md:[background-size:100%_100%]"
      style={{
        backgroundImage: `url("${squigglyCross}")`,
      }}
    >
      <H2>make a referral today</H2>
      <div className="bg-tan-500 max-w-[64rem] p-2 rounded-2xl">
        <DashedBorder className="grid md:grid-cols-2 gap-6 md:gap-4 p-8 items-center">
          <div>
            <h3 className="text-heading2">contact us</h3>
            <p className="text-body2 font-brandon">Send an email with the following information:</p>
            <Link
              to="mailto:info@therecyclery.org"
              className="text-body2 font-brandon flex items-center hover:text-blue-800 transition"
            >
              <Mail className="inline-block mr-2" />
              info@therecyclery.org
            </Link>
            <img
              src={deliveryBike}
              alt="delivery bike"
              className="hidden md:block w-[50%] mt-6 mx-auto"
            />
          </div>
          <Accordion items={referralAccordionContent} />
        </DashedBorder>
      </div>
      <p className="text-body2 font-brandon mt-6 md:px-12 lg:px-24 text-center">
        Please contact us if you need more information about the referral process. If you are
        interested in becoming a referral partner, please review this{' '}
        <A to="https://docs.google.com/document/d/1vBDPJAiSceejXnxXJ1SYilzobHn-BAFRhNq1v8i2ogI/edit?tab=t.0">
          standard letter to potential referral partners
        </A>{' '}
        or contact us! We are always open to exploring new collaborations.
      </p>
    </Section>
  );
}
