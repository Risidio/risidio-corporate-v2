import { SliceZone } from '@prismicio/react';
import { GetStaticPropsContext } from 'next';
import React from 'react';
import { PageProps } from '..';
import { Box } from '../../components/base';
import { components } from '../../slices';
import { createClient } from '../../prismicio';

export default function Aboutus({ page }: PageProps) {
  return (
    <>
      <Box>
        <SliceZone slices={page.data.slices} components={components} />
      </Box>
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  //    ^ Automatically contains references to document types
  const page = await client.getSingle('aboutpage');
  return {
    props: {
      page,
    },
  };
}
