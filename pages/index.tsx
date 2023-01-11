import Head from 'next/head';
import { Box, Text, Heading } from '../components/base';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="Risidio" content="GCreating Decentralised Future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Heading as="h1" className="font-thin">
          Risidio
        </Heading>
        <Text>Decentralized</Text>
      </Box>
    </>
  );
}
