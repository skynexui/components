/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Script from 'next/script';
import 'nextra-theme-docs/style.css';

export default function Nextra({ Component, pageProps }: any) {
  return (
    <>
      <Script>{`
        document.querySelector('[href="https://github.com/shuding/nextra"]')
          ?.setAttribute('href', 'https://github.com/skynexui/components');
      `}</Script>
      <Component {...pageProps} />
    </>
  );
}
