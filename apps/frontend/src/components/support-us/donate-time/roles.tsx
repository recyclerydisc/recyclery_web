import { BrushCleaning, Calendar, Camera, HeartHandshake, ReceiptText, ThumbsUp, Wrench } from 'lucide-react';
import { H2, Section } from '../../generic/styled-tags.tsx';
import RoleCard, { RoleCardProps } from './role-card.tsx';

const roles: RoleCardProps[] = [
  {
    name: 'Open Shop Greeter',
    icon: <HeartHandshake size={48}/>,
    description:
      'Welcome in our community members, give them the run-down on our Community Guidelines, and get them set up with a host and stand.',
  },
  {
    name: 'Freecyclery Mechanic',
    icon: <Wrench size={48}/>,
    description:
      'Fix up bikes for people in need. No experience required, we will have volunteer hosts who will share their skills with you. Great way to become more self sufficient in working on bikes, and help out your community in the process.',
  },
  {
    name: 'Social Media Advisor',
    icon: <ThumbsUp size={48}/>,
    description:
      'We are always looking to expand our social media presence and spread our mission.',
  },
  {
    name: 'Bike Sale Assistants',
    icon: <ReceiptText size={48}/>,
    description:
      'Great for people who have a wealth of knowledge about bikes, and who have an interest in getting more people riding bikes. This is a great way to support the recyclery as our sale bikes are our nonprofit’s major source of income.',
  },
  {
    name: 'Neatness and Tidiness Team',
    icon: <BrushCleaning size={48}/>,
    description:
      'We have quarterly deep cleanings, and we could always use more people to put away the tiny bits and pieces that end up everywhere but where they actually belong!',
  },
  {
    name: 'Events and Outreach Volunteers',
    icon: <Calendar size={48}/>,
    description:
      'Great for people who are free on the weekends, or who are interested in special events. We love spreading our mission at community events, having plenty of extra hands at our events, and always looking for new events to attend and include in our newsletter.',
  },
  {
    name: 'Photographer',
    icon: <Camera size={48}/>,
    description:
      'A picture is worth a thousand words! We love showing people what we’re doing via social media, newsletters, and our website.',
  },
];

function Roles() {
  return (
    <Section className="!bg-maroon-500">
      <div className="bg-background px-0 md:px-6 py-10 rounded-xl text-center">
        <H2 className="!text-black">
          <span className="bg-tan-500 px-2 rounded-xl box-decoration-clone">
            our volunteer roles
          </span>
        </H2>
        <div className="flex flex-wrap justify-center gap-6">
          {roles.map(role => {
            return <RoleCard {...role} />;
          })}
        </div>
      </div>
    </Section>
  );
}

export default Roles;
