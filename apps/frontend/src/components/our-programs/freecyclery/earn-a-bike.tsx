import { Link } from 'react-router-dom';
import DashedBorder from '../../generic/dashed-border';
import { H2, Section } from '../../generic/styled-tags';

export default function EarnABike() {
  return (
    <Section className="flex flex-col items-center text-center" tan>
      <H2>earn-a-bike fellowship programs</H2>
      <p className="text-body1 font-brandon md:px-12 lg:max-w-[48rem]">
        As an alternative to a referral from a partner organization, we offer opportunities for
        adults and youth to earn a Freecyclery bike through our Earn-a-Bike Fellowship programs.
      </p>
      <p className="text-body1 mt-4 font-brandon md:px-12 lg:max-w-[48rem]">
        Designated times where fellows are invited to volunteer, program requires 12 hours and $50
        tuition for the bike, helmet, and lock.
      </p>
      <div className="grid md:grid-cols-2 mt-8 gap-6">
        <div className="max-w-64 p-2 bg-green-500 text-white rounded-2xl">
          <DashedBorder color="F0D9C2" className="flex flex-col items-center px-5 py-8">
            <p className="text-5xl">1.</p>
            <h3 className="text-subheading2 mt-2">Complete the Volunteer Application</h3>
            <Link
              to="#"
              className="bg-white hover:bg-green-800 text-darkblue-900 hover:text-white mt-16 px-4 py-2 rounded-xl text-body2 cursor-pointer transition-colors font-brandon"
            >
              Click here
            </Link>
          </DashedBorder>
        </div>
        <div className="max-w-64 p-2 bg-green-500 text-white rounded-2xl">
          <DashedBorder color="F0D9C2" className="flex flex-col items-center px-5 py-8">
            <p className="text-5xl">2.</p>
            <h3 className="text-subheading2 mt-2">Complete the Online or In-Person Orientation</h3>
            <Link
              to="#"
              className="bg-white hover:bg-green-800 text-darkblue-900 hover:text-white mt-16 px-4 py-2 rounded-xl text-body2 cursor-pointer transition-colors font-brandon"
            >
              Click here
            </Link>
          </DashedBorder>
        </div>
      </div>
    </Section>
  );
}
