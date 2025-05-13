import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../generic/buttons';
import { H3 } from '../generic/styled-tags';

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
      <Button>
        <Link to={learnMoreLink}>Learn More</Link>
      </Button>
    </div>
  );
}
