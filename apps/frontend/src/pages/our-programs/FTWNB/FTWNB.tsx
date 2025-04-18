//import NavBar from '../../components/navigation/nav-bar';
//import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import transfeministSymbol from '../../../assets/images/our-programs/FTWNB/A_Transfeminist-Symbol_black-and-white.png';
import bikerepairPic from '../../../assets/images/our-programs/FTWNB/FTWN-B.jpg';

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
          <section className="mb-16 text-center">
            <h1 className="text-3xl m-4">FTWN-B Shop</h1>
            <p className="text-3xl">for people identifying as femme, trans,</p>
            <p className="text-3xl">women, or non-binary.</p>

            {/* rounded button */}
            <div className="m-3">
              <p className="text-xl bg-tan-500 px-3 rounded-2xl inline-block">sundays 3-6 PM</p>
            </div>
          </section>

          {/* Row one of 2x2 */}
          <section className="flex flex-col md:flex-row items-stretch justify-between gap-8 mb-15 mx-60">
            {/* Left text block */}
            <div>
              <h2 className="text-3xl font-bold mb-2">in this program...</h2>
              <div className="font-brandon">
                <p className="mb-8">
                  Bring in your bike and learn some repair skills from talented mechanics
                </p>

                <p className="mb-8">
                  Volunteer and fix up bikes for our{' '}
                  <Link
                    to="https://www.therecyclery.org/our-programs/freecyclery/"
                    className="text-blue-500 underline"
                  >
                    Freecyclery Progam
                  </Link>
                </p>

                <p>Hang out with fellow FTWN-B bike riders</p>
              </div>
            </div>

            {/* image */}
            <div>
              <img className="w-[400px] rounded-full" src={bikerepairPic} alt="Bike repair"></img>
            </div>
          </section>

          {/* Row two of 2x2 */}
          <section className="flex flex-col md:flex-row items-stretch justify-between gap-20 mb-20 mx-60">
            {/* Image */}
            <div>
              <img className="w-[800px]" src={transfeministSymbol} alt="Transfeminist symbol"></img>
            </div>
            {/* text block */}
            <div className="font-brandon text-2xl text-center">
              <p>
                This program is specifically catering to the Femme, Trans, Women, and Non-Binary
                members of our community.*
              </p>
              <p>
                We're aiming to provide a welcoming, safe space for individuals who have
                historically been excluded by the bicycling community.
              </p>
            </div>
          </section>

          <section className="mb-4 font-brandon text-xs flex justify-end">
            <p>
              *We ask for people who don't identify as FTWN-B to come to our general{' '}
              <Link
                to="https://www.therecyclery.org/our-programs/open-shop/"
                className="text-blue-500 underline"
              >
                Open Shop Hours
              </Link>{' '}
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
