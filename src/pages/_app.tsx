import React from 'react';
import type {AppProps} from 'next/app';
import 'lib/global-styles.css'; // This will ensure that the global-styles are positioned properly in the head.

const NextApp = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />;
};

// Default export is a requirement for nextjs to know this is the export for the page.
export default NextApp;
