import { ReactNode } from "react";

export type MemberCardProps = {
  name: string;
  img: string;
  description: ReactNode;
}

function MemberCard({ name, img, description }: MemberCardProps) {
  return (
    <div className="aspect-2/1 flex flex-col items-center justify-start gap-2">
      <img src={img} alt={name} className="aspect-3/2 w-full max-w-[400px] md:max-w-none bg-black rounded-2xl object-fill" />
      <div className="w-full sm:max-w-none flex flex-col justify-center items-center text-center px-4">
        <b>{name}</b>
        <p className="font-brandon">{description}</p>
      </div>
    </div>
  );
}

export default MemberCard;
