import { NextPage } from 'next/types';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import styles from './Layout.module.css';
import { ILayoutProps } from './Layout.prop';

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & NextPage>(Component: React.FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
