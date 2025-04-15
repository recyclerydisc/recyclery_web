import { H1, H2 } from "../../../components/generic/styled-tags";
import { ReactNode } from 'react';

interface MemberCardProps {
  name: string;
  img: string;
  description: ReactNode;
}

function MemberCard({ name, img, description }: MemberCardProps) {
  return (
    <div className="w-full h-[300px] flex justify-center items-center">
      <div className="bg-tan-500 w-full max-w-[250px] h-full rounded-2xl overflow-hidden">
        <img className="h-[200px]"/>
        <div className="w-full h-[100px] flex flex-col justify-center items-center text-center px-4">
          <p>{name}</p>
          <p>{description}</p>
        </div>
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
      <section className="w-full h-[275px] lg:px-[120px] md:px-[96px] px-[64px] flex flex-col justify-center items-center text-center bg-black text-white">
        <H1>who we are</H1>
        <p className="text-body1 font-brandon">The seed idea of The Recyclery was planted in 2005, with 2025 marking our 20th anniversary as well as our milestone of refurbishing 10,000 bikes.</p>
      </section>
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
