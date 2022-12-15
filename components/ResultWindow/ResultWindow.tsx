import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import styles from './ResultWindow.module.css';
import { CornerMain } from '../CornerMain/CornerMain';
import { Button } from '../Button/Button';
import { IResultProps } from './ResultWindow.prop';
import { setFullGun } from '../../store/shootingSlice';
import { resetTargetPlate } from '../../store/targetsSlice';
import { resetMoneyValue, setGameIsOver, setIsAuthorized, setPauseOn, setPlayerName } from '../../store/playerSlice';
import { RootState } from '../../store/store';

export const ResultWindow: React.FC<IResultProps> = () => {
  const moneyValue = useSelector((state: RootState) => state.player.moneyValue);
  // const gameIsOver = useSelector((state: RootState) => state.player.gameIsOver);
  const dispatch = useDispatch();

  const resetGameResult = (): void => {
    dispatch(setGameIsOver(false));
    dispatch(resetTargetPlate());
    dispatch(setPauseOn());
    dispatch(setFullGun());
    setTimeout(() => {
      dispatch(resetMoneyValue());
    }, 600);
  };

  const changeShooterHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    resetGameResult();
    dispatch(setIsAuthorized(false));
    dispatch(setPlayerName(''));
  };

  const againHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    resetGameResult();
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ x: '70vw' }}
      animate={{ x: 0 }}
      exit={{ x: '70vw' }}
      transition={{
        delay: 0.5,
        duration: 0.6,
        type: 'spring',
      }}
    >
      <div className={styles.titleWrap}>
        <h3 className={styles.title}>RESULT</h3>
      </div>
      <div className={styles.result}>
        {moneyValue > 0 && <p className={styles.text}>Congratulations! You award {moneyValue} $! </p>}
        {moneyValue <= 0 && <p className={styles.text}>Your can`t shot any bandit! You are loser!</p>}
      </div>
      <div className={styles.buttonWrap}>
        <Button onClick={changeShooterHandler} className={styles.button}>
          EXIT
        </Button>
        <Button onClick={againHandler} className={styles.button}>
          TRY AGAIN
        </Button>
      </div>

      <CornerMain position='top-left' className={styles.corner} />
      <CornerMain position='top-right' className={styles.corner} />
      <CornerMain position='bottom-left' className={styles.corner} />
      <CornerMain position='bottom-right' className={styles.corner} />
    </motion.div>
  );
};
