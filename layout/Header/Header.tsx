import React from 'react';
import { CornerMain } from '../../components/index';
import { TitleMain } from '../../components/index';

import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <CornerMain position='top-left' className={styles.corner} />
      <TitleMain>WESTERN SHOT</TitleMain>
      <CornerMain position='top-right' className={styles.corner} />
    </header>
  );
};

export default Header;
