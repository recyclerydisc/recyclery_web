import { Link } from 'react-router-dom';
import { Button } from '../../generic/buttons';
import DashedBorder from '../../generic/dashed-border';
import { H2, H3, Section } from '../../generic/styled-tags';

export default function EarnABike() {
  return (
    <Section id="earn-a-bike" className="flex flex-col items-center text-center" tan>
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
        <div className="max-w-64 p-2 bg-green-500 text-white rounded-2xl h-[375px]">
          <DashedBorder
            color="FFFFFF"
            className="flex flex-col justify-between items-center px-5 py-8"
          >
            <div>
              <p className="text-5xl">1.</p>
              <H3 className="mt-2 text-white">Complete the Volunteer Application</H3>
            </div>
            <Button color="white">
              <Link to="https://www.volgistics.com/appform/1124825310">Click here</Link>
            </Button>
          </DashedBorder>
        </div>
        <div className="max-w-64 p-2 bg-green-500 text-white rounded-2xl h-[375px]">
          <DashedBorder
            color="FFFFFF"
            className="flex flex-col justify-between items-center px-5 py-8"
          >
            <div>
              <p className="text-5xl">2.</p>
              <H3 className="mt-2 text-white">Complete the Online or In-Person Orientation</H3>
            </div>
            <Button color="white">
              <Link to="#">Click here</Link>
            </Button>
          </DashedBorder>
        </div>
      </div>
    </Section>
  );
}
