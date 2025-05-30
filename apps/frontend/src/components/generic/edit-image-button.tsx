import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser.tsx';

interface EditLinkProps {
  id: string;
  className?: string;
}

export function EditLink({ id, className = '' }: EditLinkProps) {
  const { isAuthenticated } = useUser();
  if (!isAuthenticated) {
    return null;
  }
  return (
    <Link to={`/upload/${id}`}>
      <button className={`bg-white text-black px-3 py-1 rounded shadow ${className}`}>
        Upload Image
      </button>
    </Link>
  );
}
