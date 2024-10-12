import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import '../styles/global.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
      <Analytics />
    </React.StrictMode>
  );
}

export default MyApp;
