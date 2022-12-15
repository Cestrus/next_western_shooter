import React, { MouseEventHandler } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { ReactSVG } from 'react-svg';
import cn from 'classnames';

import PlaySVG from './play.svg';
import PauseSVG from './pause.svg';

import { Button } from '../Button/Button';
import styles from './ManageGame.module.css';
import { IManageGameProps } from './ManageGame.prop';
import { RootState } from '../../store/store';
import { setPauseOn, setPauseOff } from '../../store/playerSlice';

export const ManageGame: React.FC<IManageGameProps> = () => {
  const isPaused = useSelector((state: RootState) => state.player.isPaused);
  const dispatch = useDispatch();

  const pausedHandler: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setPauseOn());
  };
  const playingHandler: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setPauseOff());
  };

  return (
    <div className={styles.container}>
      <>
        {isPaused && (
          <Button className={styles.button} onClick={playingHandler}>
            <PlaySVG className={styles.svg} />
          </Button>
        )}
        {!isPaused && (
          <Button className={styles.button} onClick={pausedHandler}>
            <PauseSVG className={cn(styles.svg, styles.pause)} />
          </Button>
        )}
      </>
    </div>
  );
};
