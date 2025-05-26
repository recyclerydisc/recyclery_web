import squigglyLine from '../../../assets/images/our-programs/freecyclery/squiggly-line.svg';
import { EditLink } from '../../../components/generic/EditLink.tsx';
import { useUser } from '../../../hooks/useUser.tsx';
import { H2, Section } from '../../generic/styled-tags.tsx';

export default function AboutSection({ imageURL }: { imageURL?: string }) {
  const { isAuthenticated } = useUser();

  return (
    <Section className="lg:py-0 lg:grid lg:grid-cols-2 gap-24 items-center justify-items-center">
      <div>
        <H2>about our program</H2>
        <p className="text-body2 font-brandon">
          We work with local social service agencies to connect people in need with a free bike that
          was serviced by volunteer mechanics and checked over by a Recyclery mechanic.
        </p>
      </div>
      <div className="lg:relative w-full lg:h-[30rem] mt-8 lg:mt-0 flex justify-center">
        <img
          src={squigglyLine}
          alt="squiggly line"
          className="hidden lg:block h-[30rem] absolute left-[50%] translate-x-[-50%] z-0"
        />

        <img
          src={imageURL}
          alt="woman holding a bike"
          className="rounded-xl h-[20rem] lg:absolute lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[5rem] lg:z-10"
        />
        {/* putting the EditLink button component in this aboutsection component was the cleanest way to visually add the button */}
        {isAuthenticated && <EditLink id="8" className="mt-10"></EditLink>}
      </div>
    </Section>
  );
}
