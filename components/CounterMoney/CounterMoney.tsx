import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cn from 'classnames';

import styles from './CounterMoney.module.css';
import { ICountMoneyProps } from './CounterMoney.prop';

export const CounterMoney: React.FC<ICountMoneyProps> = ({ className }) => {
  const moneyValue = useSelector((state: RootState) => state.player.moneyValue);

  return (
    <div className={cn(styles.container, className)}>
      <h2 className={styles.text}>${moneyValue}</h2>
    </div>
  );
};
