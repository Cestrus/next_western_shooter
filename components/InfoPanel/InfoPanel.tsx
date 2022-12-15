import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import styles from './InfoPanel.module.css';
import { IInfoPanelProps } from './InfoPanel.prop';
import { players } from '../../utils/dummy_data';
import RecordsList from '../RecordsList/RecordsList';

export const InfoPanel: React.FC<IInfoPanelProps> = () => {
  const userName = useSelector((state: RootState) => state.player.name);

  return (
    <div className={styles.container}>
      <div className={styles.userNameWrap}>
        <h3 className={styles.userName}>{userName}</h3>
      </div>
      <div className={styles.titleWrap}>
        <h4 className={styles.title}>TOP GUNNERS:</h4>
      </div>
      {userName && <RecordsList playersList={players} />}
    </div>
  );
};
