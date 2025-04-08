import React from 'react';
import { Link } from 'react-router-dom';

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-7xl">{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-4xl text-orange-500">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-2xl text-orange-500">{children}</h3>;
}

export function A({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="underline text-blue-500 hover:text-blue-800 transition">
      {children}
    </Link>
  );
}
