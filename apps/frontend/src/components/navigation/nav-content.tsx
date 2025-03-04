import { Bike } from 'lucide-react';
import { NavbarSubMenuItemType } from './nav-bar';

export const AboutUsSubItems: NavbarSubMenuItemType[] = [
  {
    icon: <Bike className="size-6" />,
    title: 'What We Do',
    description: 'Read about our history, mission, and values',
    destination: '/',
  },
  {
    icon: <Bike className="size-6" />,
    title: 'Who We Are',
    description: 'Get to know some of our team members',
    destination: '/',
  },
];

export const OurProgramsSubItems: NavbarSubMenuItemType[] = [
  {
    icon: <Bike className="size-6" />,
    title: 'Open Shop',
    description: 'Use our tools to fix your own bike with the instruction of Recyclery mechanics',
    destination: '/',
  },
  {
    icon: <Bike className="size-6" />,
    title: 'Freecyclery',
    description: 'Earn a free bike through our referral and fellowship programs',
    destination: '/',
  },
  {
    icon: <Bike className="size-6" />,
    title: 'FTWN-B',
    description: 'Explore a safe space for under-represented members of the bike community',
    destination: '/',
  },
  {
    icon: <Bike className="size-6" />,
    title: 'Classes',
    description: 'Learn about the process of maintaining and overhauling your own bike',
    destination: '/',
  },
];

export const SupportUsSubItems: NavbarSubMenuItemType[] = [
  {
    icon: <Bike className="size-6" />,
    title: "Support Us",
    description: "Donate money to help fund The Recyclery's programs",
    destination: "/",
  },
  {
    icon: <Bike className="size-6" />,
    title: "Our Supporters",
    description: "Learn about our top supporters",
    destination: "/",
  },
  {
    icon: <Bike className="size-6" />,
    title: "Donate a Bike",
    description: "Donate your old bikes to either support our programs or help people in need",
    destination: "/",
  },
  {
    icon: <Bike className="size-6" />,
    title: "Become a volunteer",
    description: "Help improve our programs by offering your skills and expertise",
    destination: "/",
  },
];
