//import NavBar from '../../components/navigation/nav-bar';
//import Footer from '../../components/footer/footer';
import bikerepairPic from '../../../assets/images/our-programs/FTWNB/FTWN-B.jpg';
import { A } from '../../../components/generic/styled-tags';

function FTWNB() {
  return (
    <>
      {/* <NavBar /> */}

      <section
        className="w-full"
        style={{
          background: `linear-gradient(rgba(225, 140, 140, 1), rgba(236, 183, 183, 1), rgba(240, 217, 194, 1))`,
          backgroundSize: 'cover',
        }}
      >
        <main className="max-w-screen-xl mx-auto p-4">
          <section className="mt-16 mb-32 text-center">
            {/* for future migrate to H2 tag once color prop is made */}
            <h1 className="text-5xl sm:text-7xl mb-4">FTWN-B Shop</h1>
            <p className="text-3xl mb-6">
              for people identifying as femme, trans, women, or non-binary.
            </p>

            {/* rounded button */}
            <div className="m-3">
              <p className="text-3xl bg-tan-500 px-3 rounded-3xl inline-block">sundays 3-6 PM</p>
            </div>
          </section>

          {/* Row one of text and pic */}
          <section className="flex flex-col md:flex-row items-stretch justify-between gap-8 mb-15 mt-15 p-8">
            {/* Left text block */}
            <div>
              <h2 className="text-4xl font-bold mb-4">in this program...</h2>
              <div className="font-brandon text-xl">
                <p className="mb-4">
                  Bring in your bike and learn some repair skills from talented mechanics
                </p>

                <p className="mb-4">
                  Volunteer and fix up bikes for our{' '}
                  <A to="https://www.therecyclery.org/our-programs/freecyclery/">
                    Freecyclery Progam
                  </A>
                </p>

                <p className="mb-24">Hang out with fellow FTWN-B bike riders</p>

                <p className="text-2xl mb-4">
                  This program is specifically catering to the Femme, Trans, Women, and Non-Binary
                  members of our community.*
                </p>

                <p className="text-2xl">
                  We're aiming to provide a welcoming, safe space for individuals who have
                  historically been excluded by the bicycling community.
                </p>
              </div>
            </div>

            {/* image */}
            <div>
              <img className="w-[800px] rounded-full" src={bikerepairPic} alt="Bike repair"></img>
            </div>
          </section>

          <section className="mb-4 font-brandon text-xs flex justify-end">
            <p>
              *We ask for people who don't identify as FTWN-B to come to our general{' '}
              <A to="https://www.therecyclery.org/our-programs/open-shop/">Open Shop Hours</A>{' '}
              instead
            </p>
          </section>
        </main>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default FTWNB;
