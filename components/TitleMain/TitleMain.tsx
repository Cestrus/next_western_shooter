import React from 'react';
import cn from 'classnames';

import styles from './TitleMain.module.css';
import GunSvg from './gun.svg';
import { ITitleMainProps } from './TitleMain.prop';

export const TitleMain: React.FC<ITitleMainProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <GunSvg className={cn(styles.img, styles.imgLeft)} />
      <h1 className={styles.text}>{children}</h1>
      <GunSvg className={styles.img} />
    </div>
  );
};
