/* eslint-disable react/jsx-no-undef */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore -- Component type error but works in production
  return <Component {...pageProps} />;
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
