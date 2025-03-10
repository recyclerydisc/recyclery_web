function WhatWeDo() {
  return (
    <main className="w-full">
      <section className="w-full h-[250px] px-[120px] flex flex-col justify-center items-center text-center">
        <h1 className="text-heading1">what we do</h1>
        <p className="text-body1 font-brandon">The seed idea of The Recyclery was planted in 2005, with 2025 marking our 20th anniversary as well as our milestone of refurbishing 10,000 bikes.</p>
      </section>

      <section className="w-full px-[120px] py-9 flex justify-center items-center gap-16">
        <div className="bg-black min-w-[300px] h-[400px] rounded-2xl text-white">filler image</div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-subheading1 text-orange-500 mb-2">our mission</h2>
            <p className="font-brandon">The Recyclery Collective is an educational bike shop that promotes sustainability by giving access to tools, skills, and opportunities for collaboration.</p>
          </div>
          <div>
            <h2 className="text-subheading1 text-orange-500 mb-2">our vision</h2>
            <p className="font-brandon">We envision a diverse, resilient neighborhood filled with knowledgeable, self-reliant cyclists.</p>
          </div>
        </div>
      </section>

      <section className="w-full px-[120px] py-9 bg-tan-500">
        <h2 className="text-subheading1 text-orange-500 mb-2">our core values</h2>
        <ul className="list-none list-inside grid grid-cols-2 grid-rows-2 gap-x-8">
          <li>
            <h3 className="text-subheading2 text-orange-500 mb-2">collaboration</h3>
            <div className="space-y-4">
              <p className="font-brandon">We create opportunities for people of all backgrounds to work, share, and learn together to support a practical form of transportation.</p>
              <p className="font-brandon">We don't just share benches and tools, but we share our time and expertise with one another.</p>
            </div>
          </li>
          <li>
            <h3 className="text-subheading2 text-orange-500 mb-2">social justice</h3>
            <div className="space-y-4">
              <p className="font-brandon">We provide tools and resources to empower underserved populations and nurture community leaders.</p>
            </div>
          </li>
          <li>
            <h3 className="text-subheading2 text-orange-500 mb-2">ecological sustainability</h3>
            <div className="space-y-4">
              <p className="font-brandon">We encourage the mindful use of resources and promote cycling as a part of building more resilient communities.</p>
              <p className="font-brandon">We source all of our bicycles and componentry from donations, saving them from being landfilled or deteriorating without use. By giving these bikes and parts a second chance at life, we are helping people transform their transportation habits.</p>
            </div>
          </li>
          <li>
            <h3 className="text-subheading2 text-orange-500 mb-2">celebrating everything we do</h3>
            <div className="space-y-4">
              <p className="font-brandon mb-4">We like to have fun while working hard to make bicycles and mechanics accessible.</p>
              <p className="font-brandon">Stay updated on what we're celebrating by joining our newsletter.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="w-full px-[120px] py-9">
        <h2 className="text-subheading1 text-orange-500 mb-2">testimonials</h2>
        <div className="flex justify-center items-center gap-8 h-[250px]">
          <div className="h-full flex-1 flex flex-col justify-between">
            <p className="font-brandon">“Lack of transportation is a major barrier in both treatment and community integration of individuals with psychiatric disabilities. For many, their bike is their most valuable possession, serving as reliable transportation to work, school, or necessary medical appointments.”</p>
            <div>
              <h3>Brent Peterson</h3>
              <p className="font-brandon">Director of Development Thresholds</p>
            </div>
          </div>
          <div className="border-[1px] border-darkblue-500/50 h-full" />
          <div className="h-full flex-1 flex flex-col justify-between">
            <p className="font-brandon">“I work but did not have enough money to pay for my rent, groceries, and other items I need plus bus fare. Having a bike made it easier to make my money last and not worry about calling off work.”</p>
            <div>
              <h3>Client</h3>
              <p className="font-brandon">Connections for the Homeless</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhatWeDo;
