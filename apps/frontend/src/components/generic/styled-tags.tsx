import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type HeadingProps = {
  children: ReactNode,
  className?: string,
}

export function H1({ children, className }: HeadingProps) {
  return <h1 className={`sm:text-7xl text-5xl text-white ${className}`}>{children}</h1>;
}

export function H2({ children, className }: HeadingProps) {
  return <h2 className={`text-3xl sm:text-4xl mb-8 ${className} text-orange-500`}>{children}</h2>;
}

export function H3({ children, className }: HeadingProps) {
  return <h3 className={`text-xl sm:text-2xl ${className} text-black`}>{children}</h3>;
}

interface AProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function A({ to, children, className }: AProps) {
  return (
    <Link to={to} className={`underline text-blue-500 hover:text-blue-800 transition ${className}`}>
      {children}
    </Link>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  tan?: boolean;
}

export function Section({ children, className, id, style, tan = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`${tan ? 'bg-tan-500' : 'bg-background'} px-8 md:px-16 lg:px-24 xl:px-36 py-16 ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
