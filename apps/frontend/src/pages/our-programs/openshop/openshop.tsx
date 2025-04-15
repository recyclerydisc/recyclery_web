import { A, H1, H2 } from "../../../components/generic/styled-tags";

function OpenShop() {
    return (
      <main className="w-full">
        <section className="w-full h-[275px] lg:px-[120px] md:px-[96px] px-[64px] flex flex-col justify-center items-center text-center bg-black text-white">
          <H1>open shop</H1>
          <p className="text-body1 font-brandon">Use our tools to fix your own bike with the instruction of Recyclery mechanics.</p>
        </section>
        <section className="w-full lg:px-[120px] md:px-[96px] px-[64px] py-9 flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
          <div className="flex flex-col gap-6">
            <div>
              <H2>what is open shop?</H2>
              <div className="space-y-4">
                <p className="font-brandon">Open Shop is a program where you can work on your own bike with help from Recyclery mechanics. All levels of experience are welcome. We strive to provide an open, respectful and collaborative atmosphere free of mechanical elitism. One of our volunteers will be happy to help you figure out how to get your bike running well.</p>
                <p className="font-brandon">For those working on their own bicycles we suggest a $10/hour donation. This helps us covering running costs like rent, tools.</p>
                <p className="font-brandon">You may purchase new or used parts for affordable prices during Open Shop.</p>
                <p className="font-brandon">For femme, trans, women and non-binary community, <A to="/our-programs/ftwnb">FTWN-B Shop Time</A> (Sundays 3-6pm) is another opportunity to work on your bike.</p>
              </div>
            </div>
          </div>
          <div className="bg-black lg:min-w-[300px] min-w-full lg:min-h-[400px] min-h-[300px] rounded-2xl text-white text-center">filler image</div>
        </section>
        <section className="w-full lg:px-[120px] md:px-[96px] px-[64px] py-9 bg-tan-500">
          <H2>hours</H2>
          <div className="space-y-4 font-brandon">
            <ul>
                <li>Tuesdays 5-7pm</li>
                <li>Thursdays 7-9pm</li>
                <li>Saturdays 11am-2pm</li>
            </ul>
            <p>Complete bikes are sold during Saturday Open Shop 11am - 2pm, our In-Person Sales Wednesday 6pm - 8pm, and 24/7 through our <A to="https://therecyclery.bigcartel.com/">online shop.</A></p>
          </div>
        </section>
      </main>
    );
  }

  export default OpenShop;
