import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser.tsx';

interface EditLinkProps {
  id: string;
  className?: string;
}

export function EditPeople({ id, className = ''}: EditLinkProps) {
  const { isAuthenticated } = useUser();
  if (!isAuthenticated) {
    return null;
  }
  return (
    <Link to={`/uploadpeople/${id}`}>
      <button
        className={`absolute bottom-4 right-4 bg-white text-black px-3 py-1 rounded shadow ${className}`}
      >
        Edit Person
      </button>
    </Link>
  )
}
