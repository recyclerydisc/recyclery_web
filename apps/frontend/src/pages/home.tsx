import { Link } from 'react-router-dom';
import headerPoster from '../assets/header-poster.jpg';

export default function Home() {
  return (
    <>
      <section
        className="flex flex-col justify-center items-center p-8 min-h-[32rem] text-white text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerPoster})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="text-7xl">the recyclery</h1>
        <p className="text-heading2 pt-8 max-w-[56rem] font-brandon">
          The Recyclery Collective is an educational bike shop that promotes sustainability by
          giving access to tools, skills, and opportunities for collaboration.
        </p>
        <div className="pt-6 space-x-4">
          <Link
            to="#"
            className="bg-orange-500 hover:bg-orange-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
          >
            Join Our Newsletter
          </Link>
          <Link
            to="https://therecyclery.square.site/"
            className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
          >
            Shop Our Bikes
          </Link>
        </div>
      </section>
      <section className="bg-background px-16 pt-10 pb-16">
        <h2 className="text-4xl text-orange-500">our programs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
          <div className="space-y-4">
            <h3 className="text-2xl text-orange-500">open shop</h3>
            <p className="text-body2 font-brandon">
              You can work on your own bike during Open Shop. All levels of experience are welcome.
              <br />
              <br />
              For femme, trans, women and non-binary community,{' '}
              <Link to="/our-programs/ftwnb" className="underline hover:text-blue-600 transition">
                FTWN-B Shop Time
              </Link>{' '}
              (Sundays 3-6pm) is another opportunity to work on your bike.
              <br />
              <br />
              <u>HOURS:</u>
              <br />
              Tuesdays 5-7pm
              <br />
              Thursdays 7-9pm
              <br />
              Saturdays 11am-2pm
            </p>
            <Link
              to="/our-programs/openshop"
              className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
            >
              Learn More
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl text-orange-500">volunteer / freecyclery</h3>
            <p className="text-body2 font-brandon">
              Volunteers fix bikes for donation, manage bike sales, assist with Open Shop, and help
              run the shop. All levels of mechanical experience are welcome, and we encourage you to
              use your prior skills and life experience to help power our mission & vision.
              <br />
              <br />
              Volunteers must first fill out an application and attend an orientation.
              <br />
              <br />
              <u>HOURS:</u>
              <br />
              Mondays 12-3pm, and 5:30-7:30pm
              <br />
              Wednesdays 6-8pm
              <br />
              Thursday 10am-1pm
            </p>
            <Link
              to="/support-us/donate-time"
              className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
            >
              Learn More
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl text-orange-500">classes</h3>
            <p className="text-body2 font-brandon">
              We offer multiple classes, including our introductory Tune Up Class, and our more
              advanced Overhaul Class. The classes are meant for adults, and you should bring your
              own bike.
              <br />
              <br />
              To register, visit our{' '}
              <Link
                to="https://therecyclery.square.site/"
                className="underline hover:text-blue-600 transition"
              >
                online shop
              </Link>{' '}
              (Sundays 3-6pm) is another opportunity to work on your bike.
              <br />
              <br />
              <u>HOURS:</u>
              <br />
              Variable, see{' '}
              <Link to="/our-programs/classes" className="underline hover:text-blue-600 transition">
                sign up page
              </Link>
            </p>
            <Link
              to="/our-programs/classes"
              className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-tan-500 px-16 pt-10 pb-12">
        <h2 className="text-4xl text-orange-500">our event calendar</h2>
        <p className="text-body2 pt-4 font-brandon">
          The calendar below shows all events for the Recyclery. Any upcoming events will also be
          updated here!
        </p>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=therecyclery%40gmail.com&ctz=America%2FChicago"
          className="border-none w-full h-[700px] mt-6"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </section>
      <section className="bg-background px-16 pt-10 pb-12 flex flex-col items-center">
        <h2 className="text-4xl text-orange-500">introductory video</h2>
        <iframe
          className="w-[900px] h-[506px] mt-6"
          src="https://www.youtube.com/embed/p_mOukqz0WM"
          title="Recyclery"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
