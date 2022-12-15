import React from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

import styles from './RecordsList.module.css';
import { IRecordsListProps } from './RecordsList.prop';

const RecordsList: React.FC<IRecordsListProps> = ({ playersList }) => {
  return (
    <ul className={styles.list}>
      {playersList.map((player, idx) => (
        <PlayerInfo player={player} key={player.name + player.money + idx} rating={idx + 1} />
      ))}
    </ul>
  );
};

export default RecordsList;
