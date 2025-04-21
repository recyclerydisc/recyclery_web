import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { A, H2 } from '../../generic/styled-tags';
import deliveryBike from '../../../assets/images/our-programs/freecyclery/delivery-bike.png';
import squigglyCross from '../../../assets/images/our-programs/freecyclery/squiggly-cross.svg';
import DashedBorder from './dashed-border';
import Accordion from './accordion';

export default function MakeReferral() {
  return (
    <section
      className="px-16 py-16 flex flex-col items-center bg-background [background-size:0] md:[background-size:100%_100%]"
      style={{
        backgroundImage: `url("${squigglyCross}")`,
      }}
    >
      <H2>make a referral today</H2>
      <div className="bg-tan-500 max-w-[64rem] mt-8 p-2 rounded-[16px]">
        <DashedBorder className="grid md:grid-cols-2 gap-6 md:gap-4 px-8 py-12 items-center">
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
          <Accordion
            items={[
              {
                title: 'Client Info',
                content:
                  'What are the client’s first and last names, pronouns, height, weight and age?',
              },
              {
                title: 'Client’s Preferred Bike Type',
                content:
                  'Does the client have a preferred bike type? We will do our best to match a client with a bike of their choice, but are constrained by what we have available at any given time.',
              },
              {
                title: 'Why Does this Client Need a Bike?',
                content:
                  'Please help us understand how having a working bike will make a difference to this client.',
              },
              {
                title: 'The $25 Helmet & Lock Cost',
                content:
                  'Will the agency or the client pay the $25 to cover the lock and helmet cost? Our shop depends on donations from individuals and organizations, so your help to defray our costs is appreciated!',
              },
            ]}
          />
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
    </section>
  );
}
