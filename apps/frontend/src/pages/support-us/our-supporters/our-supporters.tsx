import { H1, H2, H3, Section } from '../../../components/generic/styled-tags.tsx';
import { Award, DollarSign } from 'lucide-react';
import { Button } from '../../../components/generic/buttons.tsx';
import { Link } from 'react-router-dom';

function OurSupporters() {
  return (
    <>
      <title>Our Supporters - The Recyclery</title>
      <Section className="md:grid md:grid-cols-2 md:gap-4 items-center text-center md:text-left">
        <div>
          <H1 className="!text-5xl !text-black pb-4">our sponsors</H1>
          <p className="text-subheading1">a special thanks to our supporters</p>
          <p className="text-gray-500 text-body1">since 2024</p>
        </div>
        <div className="flex justify-center mt-6 md:mt-0">
          <DollarSign size="240" />
        </div>
      </Section>
      <Section className="md:grid md:grid-cols-3 space-y-6 md:gap-6">
        <div className="border-2 border-orange-500 rounded-lg px-6 py-8 space-y-4 md:h-[32rem]">
          <Award size="52" color="#E7CD48" className="ml-auto mr-auto" />
          <H3 className="!text-black">gold ($5000+)</H3>
          <p className="font-brandon">Allstate Foundation</p>
        </div>
        <div className="border-2 border-orange-500 rounded-lg px-6 py-8 space-y-4 md:h-[28rem]">
          <Award size="52" color="#979797" className="ml-auto mr-auto" />
          <H3 className="!text-black">silver ($2500+)</H3>
          <p className="font-brandon">New Belgium Brewing House</p>
        </div>
        <div className="border-2 border-orange-500 rounded-lg px-6 py-8 space-y-4 md:h-[24rem]">
          <Award size="52" className="ml-auto mr-auto text-maroon-500" />
          <H3 className="!text-black">bronze ($1000+)</H3>
          <p className="font-brandon">
            Ouweleen Family
            <br /> Susan Booth and Max Leventhal
            <br /> Dan Engel & Family
          </p>
        </div>
      </Section>
      <Section className="text-center" tan>
        <H2>want to become a sponsor?</H2>
        <p className="font-brandon text-subheading1">join us today!</p>
        <div className="space-x-4 mt-8">
          <Button>
            <Link to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G">
              Donate
            </Link>
          </Button>
          <Button>
            <Link to="https://therecyclery.us1.list-manage.com/subscribe?u=71e053371da882f0463a04165&id=6b561c7610">
              Join Our Newsletter
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

export default OurSupporters;
