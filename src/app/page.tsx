import Image from 'next/image';
import { Login } from './components/Login';
import { Users } from './components/Users';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <Login />
      <Users />
    </main>
  );
}
