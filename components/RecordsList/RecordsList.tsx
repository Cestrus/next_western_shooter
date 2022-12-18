import React from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

import styles from './RecordsList.module.css';
import { IRecordsListProps } from './RecordsList.prop';

const RecordsList: React.FC<IRecordsListProps> = ({ topGunners }) => {
  return (
    <ul className={styles.list}>
      {topGunners.map((gunner, idx) => (
        <PlayerInfo player={gunner} key={gunner.name + gunner.money + idx} rating={idx + 1} />
      ))}
    </ul>
  );
};

export default RecordsList;
