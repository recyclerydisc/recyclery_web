import UsersList from '../components/users/users-list';
import { useUser } from '../hooks/useUser';

export default function Home() {
  const { user } = useUser();

  return (
    <div className='flex flex-col justify-center items-center p-8'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-[2.5em] font-bold m-0'>Home Page</h1>
        <h2 className='font-[1.5em] m-0 font-normal'>Welcome, {user?.firstname || 'User'}</h2>
      </div>
      <UsersList />
    </div>
  )
}
