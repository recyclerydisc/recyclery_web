import React, { useState } from 'react';
//import NavBar from '../../components/navigation/nav-bar';
//import Footer from '../../components/footer/footer';

interface TeamCardProps {
  name: string;
  imageSrc: string;
  defaultContent?: React.ReactNode;
  hoverContent?: React.ReactNode;
}

function TeamCard({ name, imageSrc, defaultContent, hoverContent }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white shadow rounded p-4 flex flex-col items-center transition-colors duration-200 cursor-pointer hover:bg-black/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt={name}
        className="w-32 h-32"
      />
      <p className="font-semibold">{name}</p>
      {defaultContent && <div className="mt-2">{defaultContent}</div>}

      {hoverContent && isHovered && (
        <div className="absolute">
          {hoverContent}
        </div>
      )}
    </div>
  );
}

function WhoWeAre() {
  return (
    <>
      {/* <NavBar /> */}

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto p-4">
        <section className="mb-8 text-center">
          <h1 className="text-3xl">Who We Are</h1>
          <p className="text-lg">
            text.
          </p>
        </section>

        <section>
          <h2 className="text-xl">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <TeamCard
              name="Nina Hazelton"
              imageSrc="/images/nina.jpg"
              hoverContent={<p>Lead Designer & Developer</p>}
            />
            {/* add in TeamCard components by info.*/}
          </div>
        </section>
      </main>

      {/* <Footer />*/}
      
    </>
  );
}

export default WhoWeAre;
