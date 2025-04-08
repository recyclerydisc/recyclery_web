import { ReactNode } from 'react';
import { H3 } from '../generic/styled-tags';
import { BlueButtonLink } from '../generic/buttons';

interface ProgramProps {
  children: ReactNode;
  title: string;
  learnMoreLink: string;
}

export default function Program({ children, title, learnMoreLink }: ProgramProps) {
  return (
    <div className="space-y-4">
      <H3>{title}</H3>
      <p className="text-body2 font-brandon">{children}</p>
      <BlueButtonLink to={learnMoreLink}>Learn More</BlueButtonLink>
    </div>
  );
}
