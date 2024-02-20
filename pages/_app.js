'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../styles/global.css';
import { useEffect } from 'react';
import Head from 'next/head';
import UserProvider from '../context/user';
import NavBar from '../components/NavBar';
import dynamic from 'next/dynamic';
// import Footer from '../components/Footer';

const DynamicToaster = dynamic(
  () => import('react-hot-toast').then((module) => module.Toaster),
  {
    ssr: false,
  }
);

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.min.js');
      import('../script/webflow.js');
    }
  }, []);

  return (
    <>
      <Head>
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=651503a226dcd604df8a350d"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
      </Head>
      <UserProvider>
        <DynamicToaster position="top-right" />
        <NavBar />
        <main className="main">
          <Component {...pageProps} />
        </main>
        {/* <Footer /> */}
      </UserProvider>
    </>
  );
}
