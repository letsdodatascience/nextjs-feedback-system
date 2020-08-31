import Head from 'next/head';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Commenting System SaaS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Hello World !!! We are building a commenting system</h1>
      <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
      {auth.user ? <div>Current User: {auth?.user.email}</div> : ''}
      {auth.user ? (
        <button onClick={(e) => auth.signout()}>Sign out</button>
      ) : (
        ''
      )}
    </div>
  );
}
