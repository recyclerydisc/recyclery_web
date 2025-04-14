//import NavBar from '../../components/navigation/nav-bar';
//import Footer from '../../components/footer/footer';

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
          <section className="mb-8 text-center">
            <h1 className="text-3xl m-4">FTWN-B Shop</h1>
            <p className="text-3xl">for people identifying as femme, trans,</p>
            <p className="text-3xl">women, or non-binary.</p>

            {/* ROUNDED CIRCLE BACKGROUND THING */}
            <div className="m-3">
              <p className="text-xl bg-orange-200 px-3 rounded-2xl inline-block">sundays 3-6 PM</p>
            </div>
          </section>

          <section className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">in this program...</h2>
            <div className="font-brandon">
              <p className="mb-4">
                Bring in your bike and learn some repair skills from talented mechanics
              </p>
              <p className="mb-4">Volunteer and fix up bikes for our Freecyclery Program</p>
              <p>Hang out with fellow FTWN-B bike riders</p>
            </div>
          </section>

          <section className="mb-8 font-brandon text-center">
            <p>
              This program is specifically catering to the Femme, Trans, Women, and Non-Binary
              members of our community.* We're aiming to provide a welcoming, safe space for
              individuals who have historically been excluded by the bicycling community.
            </p>
          </section>

          <section className="mb-4 font-brandon">
            <p>
              *We ask for people who don't identify as FTWN-B to come to our general Open Shop Hours
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
