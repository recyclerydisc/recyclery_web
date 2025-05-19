import { DynamicIcon, IconName } from 'lucide-react/dynamic.tsx';
import { H3 } from '../../generic/styled-tags.tsx';

export type RoleCardProps = {
  name: string;
  icon: IconName;
  description: string;
};

function RoleCard({ name, icon, description }: RoleCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 max-w-60 px-2">
      <DynamicIcon name={icon} size={48} />
      <H3 className="!text-black">{name}</H3>
      <p className="font-brandon">{description}</p>
    </div>
  );
}

export default RoleCard;
