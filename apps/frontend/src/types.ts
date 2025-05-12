import { ReactNode } from "react";

export type MemberType = {
  name: string;
  img: string;
  description: string;
};

export type AccordionItem = {
  title: string;
  content: string;
}

export type NavContentType = {
  title: string;
  items: {
    icon: ReactNode;
    title: string;
    description: string;
    destination: string;
  }[];
}
