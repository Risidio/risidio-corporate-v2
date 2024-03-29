import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import Navbar from '../components/shared/Navbar';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio';
import Footer from '../components/shared/footer';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader) loader.remove();
    }
  }, []);

  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  );
}
