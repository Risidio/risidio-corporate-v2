import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import Footer from '../components/shared/footer';
import Navbar from '../components/shared/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
