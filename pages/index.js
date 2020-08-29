import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Commenting System SaaS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Hello World !!! We build our commenting system</h1>
    </div>
  );
}
