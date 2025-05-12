import { Bike } from 'lucide-react';
import { NavContentType } from '../types';

export const NavContent: NavContentType[] = [
  {
    title: "About Us",
    items: [
      {
        icon: <Bike className="size-6" />,
        title: 'What We Do',
        description: 'Read about our history, mission, and values',
        destination: '/about-us/what',
      },
      {
        icon: <Bike className="size-6" />,
        title: 'Who We Are',
        description: 'Get to know some of our team members',
        destination: '/about-us/who',
      },
    ]
  },
  {
    title: "Our Programs",
    items: [
      {
        icon: <Bike className="size-6" />,
        title: 'Open Shop',
        description: 'Use our tools to fix your own bike with the instruction of Recyclery mechanics',
        destination: '/our-programs/openshop',
      },
      {
        icon: <Bike className="size-6" />,
        title: 'Freecyclery',
        description: 'Earn a free bike through our referral and fellowship programs',
        destination: '/our-programs/freecyclery',
      },
      {
        icon: <Bike className="size-6" />,
        title: 'FTWN-B',
        description: 'Explore a safe space for under-represented members of the bike community',
        destination: '/our-programs/ftwnb',
      },
      {
        icon: <Bike className="size-6" />,
        title: 'Classes',
        description: 'Learn about the process of maintaining and overhauling your own bike',
        destination: '/our-programs/classes',
      },
    ]
  },
  {
    title: "Support Us",
    items: [
      {
        icon: <Bike className="size-6" />,
        title: 'Contribute Financially',
        description: "Donate money directly to help fund our programs",
        destination: '/support-us/contribute-financially',
      },
      {
        icon: <Bike className="size-6" />,
        title: 'Our Supporters',
        description: 'Learn about our top supporters',
        destination: '/support-us/our-supporters',
      },
      {
        icon: <Bike className="size-6" />,
        title: 'Donate a Bike',
        description: "Donate your old bikes to either support our programs or help people in need",
        destination: '/support-us/donate-a-bike',
      },
      {
        icon: <Bike className="size-6" />,
        title: 'Become a volunteer',
        description: 'Help improve our programs by offering your skills and expertise',
        destination: '/support-us/donate-time',
      },
    ]
  },
]

// export const AboutUsSubItems: NavbarSubMenuItemType[] = [
//   {
//     icon: <Bike className="size-6" />,
//     title: 'What We Do',
//     description: 'Read about our history, mission, and values',
//     destination: '/about-us/what',
//   },
//   {
//     icon: <Bike className="size-6" />,
//     title: 'Who We Are',
//     description: 'Get to know some of our team members',
//     destination: '/about-us/who',
//   },
// ];

// export const OurProgramsSubItems: NavbarSubMenuItemType[] = [
//   {
//     icon: <Bike className="size-6" />,
//     title: 'Open Shop',
//     description: 'Use our tools to fix your own bike with the instruction of Recyclery mechanics',
//     destination: '/our-programs/openshop',
//   },
//   {
//     icon: <Bike className="size-6" />,
//     title: 'Freecyclery',
//     description: 'Earn a free bike through our referral and fellowship programs',
//     destination: '/our-programs/freecyclery',
//   },
//   {
//     icon: <Bike className="size-6" />,
//     title: 'FTWN-B',
//     description: 'Explore a safe space for under-represented members of the bike community',
//     destination: '/our-programs/ftwnb',
//   },
//   {
//     icon: <Bike className="size-6" />,
//     title: 'Classes',
//     description: 'Learn about the process of maintaining and overhauling your own bike',
//     destination: '/our-programs/classes',
//   },
// ];

// export const SupportUsSubItems: NavbarSubMenuItemType[] = [
//   {
//     icon: <Bike className="size-6" />,
//     title: 'Support Us',
//     description: "Donate money to help fund The Recyclery's programs",
//     destination: '/support-us/contribute-financially',
//   },
//   {
//     icon: <Bike className="size-6" />,
//     title: 'Our Supporters',
//     description: 'Learn about our top supporters',
//     destination: '/support-us/our-supporters',
//   },
//   {
//     icon: <Bike className="size-6" />,
//     title: 'Donate a Bike',
//     description: 'Donate your old bikes to either support our programs or help people in need',
//     destination: '/support-us/donate-a-bike',
//   },
//   {
//     icon: <Bike className="size-6" />,
//     title: 'Become a volunteer',
//     description: 'Help improve our programs by offering your skills and expertise',
//     destination: '/support-us/donate-time',
//   },
// ];
