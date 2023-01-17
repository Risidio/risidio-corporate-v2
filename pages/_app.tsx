import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import Footer from '../components/shared/footer';
import Navbar from '../components/shared/Navbar';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  );
}
