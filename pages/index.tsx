import Head from 'next/head';
import { Box } from '../components/base';
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { createClient } from '../prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ page }: PageProps) {
  return (
    <>
      <Head>
        <title>Risidio</title>
        <meta name="Risidio" content="Creating Decentralised Future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Box className="w-screen bg-black">
          <video
            preload="auto"
            autoPlay
            muted
            loop
            id="myVideo"
            className="z-1 min-w-full min-h-full inset-0 fixed max-w-fit"
          >
            <source
              src="https://prismic-io.s3.amazonaws.com/risidio-journal/fcd75f30-c353-417e-a7fa-1797acb1a7c7_Smaller+Website+Background.mp4"
              type="video/mp4"
              className="w-screen"
            />
          </video>
        </Box>
        <SliceZone slices={page.data.slices} components={components} />
      </Box>
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  //    ^ Automatically contains references to document types
  const page = await client.getSingle('home');
  return {
    props: {
      page,
    },
  };
}
