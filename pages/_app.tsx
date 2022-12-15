import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import '../styles/globals.css';
import { store } from '../store/store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Western Shot</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
