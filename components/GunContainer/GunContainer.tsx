import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import useSound from 'use-sound';

import styles from './GunContainer.module.css';
import { RootState } from '../../store/store';
import { IGunContainerProps } from './GunContainer.prop';
import { addBulletInGun } from '../../store/shootingSlice';
import { setGameIsOver } from '../../store/playerSlice';
import { BULLETS_IN_GUN } from '../../utils/constants';

export const GunContainer: React.FC<IGunContainerProps> = () => {
  const bulletsInGun = useSelector((state: RootState) => state.shooting.bulletsInGun);
  const bulletsValue = useSelector((state: RootState) => state.shooting.bulletsValue);
  const isReloading = useSelector((state: RootState) => state.shooting.isReloading);
  const gameIsOver = useSelector((state: RootState) => state.player.gameIsOver);
  const isPaused = useSelector((state: RootState) => state.player.isPaused);

  const [reloadSound] = useSound('./audio/sounds/reload_bullet.wav');
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const reloadGun = (): void => {
      if (bulletsInGun < BULLETS_IN_GUN) {
        setTimeout(() => {
          reloadSound();
          dispatch(addBulletInGun());
        }, 300);
      }
    };
    if (isReloading && !gameIsOver && !isPaused) {
      reloadGun();
    }
    if (!bulletsValue && !bulletsInGun && !isReloading) {
      dispatch(setGameIsOver(true));
    }
  }, [bulletsInGun, isReloading, bulletsValue, isPaused, gameIsOver]);

  return (
    <div className={styles.container}>
      <div className={cn(styles.gun, styles[`bullet_${bulletsInGun}`])}></div>
    </div>
  );
};
