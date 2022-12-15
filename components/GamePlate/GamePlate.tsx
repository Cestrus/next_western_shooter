import React from 'react';

import styles from './GamePlate.module.css';
import { IGamePlateProps } from './GamePlate.prop';
import LeftGamePanel from './LeftGamePanel/LeftGamePanel';
import MainGamePanel from './MainGamePanel/MainGamePanel';
import RightGamePanel from './RightGamePanel/RightGamePanel';

export const GamePlate: React.FC<IGamePlateProps> = () => {
  return (
    <main className={styles.main}>
      <LeftGamePanel />
      <MainGamePanel />
      <RightGamePanel />
    </main>
  );
};
