import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import sm from './sm.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
export const routes = [
  {
    type: 'home',
    path: '/',
  },
  {
    type: 'page',
    path: '/:uid',
  },
];

export function linkResolver(doc: any) {
  switch (doc.type) {
    case 'homepage':
      return '/';
    case 'page':
      return `/${doc.uid}`;
    default:
      return null;
  }
}

// /**
//  * Creates a Prismic client for the project's repository. The client is used to
//  * query content from the Prismic API.
//  *
//  * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
//  */
export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient('Risidiocorp', config);

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
}
