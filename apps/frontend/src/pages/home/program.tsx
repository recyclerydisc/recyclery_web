import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ProgramProps {
  children: ReactNode;
  title: string;
  learnMoreLink: string;
}

export default function Program({ children, title, learnMoreLink }: ProgramProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-orange-500">{title}</h3>
      <p className="text-body2 font-brandon">{children}</p>
      <Link
        to={learnMoreLink}
        className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
      >
        Learn More
      </Link>
    </div>
  );
}
