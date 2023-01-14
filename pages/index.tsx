import Head from 'next/head';
import { Box, Text, Heading } from '../components/base';
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { createClient } from '../prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';

// type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="Risidio" content="GCreating Decentralised Future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Box>
        <Heading as="h1" className="font-thin">
          Risidio
        </Heading>
        <Text>Decentralized</Text>
        {/* <SliceZone slices={page.data.slices} components={components} /> */}
      </Box>
    </>
  );
}

// export async function getStaticProps({ previewData }: GetStaticPropsContext) {
//   const client = createClient({ previewData });
//   //    ^ Automatically contains references to document types

//   const page = await client.getSingle('home');
//   //    ^ Typed as PageDocument
//   console.log(page.data);

//   return {
//     props: {
//       page,
//     },
//   };
// }
