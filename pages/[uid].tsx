import type { GetStaticPropsContext } from 'next';
import { PrismicHREF } from '../components/base';
import { createClient, linkResolver, routes } from '../prismicio';
import * as prismicH from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import { PageProps } from '.';

type PageParams = { uid: string };

const Page = ({ page }: PageProps) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Page;

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) {
  // `params` is typed as PageParams
  const client = createClient({ previewData });
  const page = await client.getByUID('page', params?.uid as string);
  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) {
  // `params` is typed as PageParams
  const client = createClient({ previewData });
  const page = await client.getAllByType('page');
  return {
    paths: page.map((page) => prismicH.asLink(page, linkResolver)),
  };
}
