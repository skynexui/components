import React from 'react';
import { Provider } from '@skynexui/components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App({ Component, pageProps }: any) {
  return (
    <Provider
      theme={{
        components: {
          textField: {
            variant: 'basicBordered', // or put "bottomBorder"
          },
        },
      }}
    >
      <Component {...pageProps} />
    </Provider>
  );
}
