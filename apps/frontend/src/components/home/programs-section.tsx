import Program from './program';
import { A, H2, Section } from '../generic/styled-tags';

export default function ProgramsSection() {
  return (
    <Section>
      <H2>our programs</H2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <Program title={'open shop'} learnMoreLink={'/our-programs/openshop'}>
          You can work on your own bike during Open Shop. All levels of experience are welcome.
          <br />
          <br />
          For femme, trans, women and non-binary community,{' '}
          <A to="/our-programs/ftwnb">FTWN-B Shop Time</A> (Sundays 3-6pm) is another opportunity to
          work on your bike.
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
          To register, visit our <A to="https://therecyclery.square.site/">online shop</A> (Sundays
          3-6pm) is another opportunity to work on your bike.
          <br />
          <br />
          <u>HOURS:</u>
          <br />
          Variable, see <A to="/our-programs/classes">sign up page</A>
        </Program>
      </div>
    </Section>
  );
}
