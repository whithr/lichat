import Link from 'next/link';
import { UserAuthForm } from './UserAuthForm';
import { useRouter } from 'next/router';

export default function SignIn() {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <div>lichat</div>
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='text-sm max-w-xs mx-auto'>
          By continuing, you are setting up a lichat and agree to our User
          Agreement and Privacy Policy
        </p>
      </div>

      {/* sign in form */}
      <UserAuthForm />

      <p className='px-8 text-center text-sm'>
        New to lichat?{' '}
        <Link
          href='/sign-up'
          className='hover:text-zinc-800 text-sm underline underline-offset-4'
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
