import Head from 'next/head';
import { Box } from '../components/base';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="Risidio" content="GCreating Decentralised Future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box>
          <h1>Risidio</h1>
        </Box>
      </main>
    </>
  );
}
