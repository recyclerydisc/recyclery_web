import { ReactNode } from 'react';
import WhoHero from "../../../assets/images/about-us/who/who-hero.png";
import { BgImage } from "../../../components/generic/bg-image";
import { H1, H2 } from "../../../components/generic/styled-tags";

interface MemberCardProps {
  name: string;
  img: string;
  description: ReactNode;
}

function MemberCard({ name, img, description }: MemberCardProps) {
  return (
    <div className="w-full sm:max-w-none h-[300px] flex flex-col justify-start items-center gap-2">
      <img src={img} alt={name} className="w-full max-w-[275px] sm:max-w-none h-[225px] bg-black rounded-2xl object-fill" />
      <div className="w-full max-w-[275px] sm:max-w-none flex flex-col justify-center items-center text-center px-4">
        <p>{name}</p>
        <p className="font-brandon">{description}</p>
      </div>
    </div>
  );
}

const members : MemberCardProps[] = [
  {
    name: "Charlie",
    img: "",
    description: "Daytime Freecyclery Host",
  },
  {
    name: "Max",
    img: "",
    description: "Daytime Freecyclery Host",
  },
  {
    name: "Dana",
    img: "",
    description: "Evening Freecyclery Host",
  },
  {
    name: "Tom",
    img: "",
    description: "Collective Member",
  },
  {
    name: "Tzip",
    img: "",
    description: "Freecyclery Coordinator & Collective Member",
  },
  {
    name: "Rohan",
    img: "",
    description: "Collective Member",
  },
  {
    name: "Nina",
    img: "",
    description: "Collective Member",
  },
]

function WhoWeAre() {
  return (
    <main className="w-full">
      <BgImage image={WhoHero} className="min-h-[32rem]">
        <H1>who we are</H1>
        <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">The seed idea of The Recyclery was planted in 2005, with 2025 marking our 20th anniversary as well as our milestone of refurbishing 10,000 bikes.</p>
      </BgImage>
      <section className="w-full lg:px-[120px] md:px-[96px] px-[64px] py-9">
        <H2>staff and collective members</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {
            members.map((member) => {
              return (
                <MemberCard name={member.name} img={member.img} description={member.description} />
              )
            })
          }
        </div>
      </section>
    </main>
  );
}

export default WhoWeAre;
