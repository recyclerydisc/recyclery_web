import { Link } from 'react-router-dom';
import { Button } from '../../generic/buttons.tsx';

interface ClassCardProps {
  title: string;
  level: 'beginner' | 'advanced';
  sessions: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function ClassCard({
  title,
  level,
  sessions,
  description,
  buttonText,
  buttonLink,
}: ClassCardProps) {
  const levelStyles = {
    beginner: 'bg-green-500 text-white',
    advanced: 'text-white',
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 text-left"
      style={{
        boxShadow: '6px 6px 4px 0px #4E85A2, 5px 5px 4px 0px #00000040 inset', // Drop shadow and inner shadow
      }}
    >
      <h3
        className="font-brandon font-medium italic text-4xl leading-none mb-4"
        style={{
          fontSize: '48px',
          lineHeight: '100%',
          letterSpacing: '0%',
          verticalAlign: 'middle',
        }}
      >
        {title}
      </h3>
      <span
        className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${levelStyles[level]}`}
        style={level === 'advanced' ? { backgroundColor: '#5B1318' } : {}}
      >
        {level}
      </span>
      <p className="text-gray-600 mb-2">{sessions}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={buttonLink}>
        <Button>{buttonText}</Button>
      </Link>
    </div>
  );
}
