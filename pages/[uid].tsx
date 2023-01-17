import type { GetStaticPropsContext } from 'next';
import { createClient } from '../prismicio';

type PageParams = { uid: string };

// ...

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
