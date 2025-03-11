import { Link } from 'react-router-dom';
import Program from './program';

export default function ProgramsSection() {
  return (
    <section className="bg-background px-16 pt-10 pb-16">
      <h2 className="text-4xl text-orange-500">our programs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
        <Program title={'open shop'} learnMoreLink={'/our-programs/openshop'}>
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
        </Program>
        <Program title={'volunteer / freecyclery'} learnMoreLink={'/support-us/donate-time'}>
          Volunteers fix bikes for donation, manage bike sales, assist with Open Shop, and help run
          the shop. All levels of mechanical experience are welcome, and we encourage you to use
          your prior skills and life experience to help power our mission & vision.
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
        </Program>
        <Program title={'classes'} learnMoreLink={'/our-programs/classes'}>
          We offer multiple classes, including our introductory Tune Up Class, and our more advanced
          Overhaul Class. The classes are meant for adults, and you should bring your own bike.
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
        </Program>
      </div>
    </section>
  );
}
