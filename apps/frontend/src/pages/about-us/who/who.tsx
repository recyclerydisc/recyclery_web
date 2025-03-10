import { ReactNode } from 'react';

interface MemberCardProps {
  name: string;
  img: string;
  description: ReactNode;
}

function MemberCard({ name, img, description }: MemberCardProps) {
  return (
    <div>
      <div className="w-full h-[250px] bg-tan-500 relative rounded-2xl overflow-hidden">
        <img src={img} alt={name} className="absolute inset-0 bg-cover bg-center z-0"></img>
        <div className="opacity-0 hover:opacity-40 bg-black duration-300 absolute inset-0 flex justify-center items-center p-4 text-white font-brandon">
          {description}
        </div>
      </div>
      <h3 className="text-orange-500 text-subheading2 text-center w-full mt-2">{name}</h3>
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
        <h1 className="text-heading1">staff and collective members</h1>
        <p className="text-body1 font-brandon">The seed idea of The Recyclery was planted in 2005, with 2025 marking our 20th anniversary as well as our milestone of refurbishing 10,000 bikes.</p>
      </section>
      <section className="w-full lg:px-[120px] md:px-[96px] px-[64px] py-9">
        <h2 className="text-subheading1 text-orange-500 mb-2">our team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
