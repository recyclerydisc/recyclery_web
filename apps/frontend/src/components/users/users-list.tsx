import { useEffect, useState } from 'react';
import type { User } from '../../../types/auth';

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const baseUrl = import.meta.env.VITE_BACKEND_URL || '';
        const response = await fetch(`${baseUrl}/auth/users`, {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className='text-center p-[1rem]'>Loading users...</div>;
  }

  if (error) {
    return <div className='text-pink-500 p-[1rem] text-center'>Error: {error}</div>;
  }

  return (
    <div className='mt-8 w-full max-w-[800px] ml-auto mr-auto'>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map(user => (
          <div className='p-4 mb-4 border rounded-[0.5rem] bg-white shadow' key={user.email}>
            <div className='flex gap-4 items-center'>
              <div>
                <h3 className='m-0 text-[1.1rem] font-semibold'>
                  {user.firstname} {user.lastname} ({user.username || 'No username'})
                </h3>
                <p className='m-0 bg-amber-500'>{user.email}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
