import { H2, Section } from '../../generic/styled-tags.tsx';

export default function ClassDescription() {
  return (
    <Section className="space-y-8">
      <div className="font-brandon space-y-4">
        <p>
          If you have never fixed a flat tire before, we recommend taking the Tune Up Class first.
        </p>
        <p>
          We can provide a bike that will be donated locally after the overhaul is complete, but we
          also encourage students to bring their own!
        </p>
      </div>
      <div>
        <H2>mechanics 101</H2>
        <p className="font-brandon">
          Learn the basics with our seasoned mechanics for a two-session bicycle maintenance course.
          Give your own geared bike a tune-up and become educated on proper terminology for
          componentry and tools, the basics of fixing flat tires, chain replacement, and brake &
          shifting adjustments. We keep classes small, so grab your limited spot while you can!
        </p>
      </div>
      <div>
        <H2>overhaul class</H2>
        <p className="font-brandon">
          Over six sessions, seasoned Recyclery mechanic instructor(s) will walk you through how to
          disassemble, reassemble, and adjust all major mechanical systems of your bicycle in
          addition to answering any questions you have along the way!
        </p>
      </div>
    </Section>
  );
}
