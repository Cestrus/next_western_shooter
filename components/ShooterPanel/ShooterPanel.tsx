import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import cn from 'classnames';
import useSound from 'use-sound';

import { TURN_SPEED } from '../../utils/constants';

import { IShooterPanelProps } from './ShooterPanel.prop';
import styles from './ShooterPanel.module.css';
import { removeBulletFromGun, addShotToList, ShootingType, removeShotFromList } from '../../store/shootingSlice';
import { SHOT_WIDTH, SHOT_HEIGHT } from '../../utils/constants';
import { RootState } from '../../store/store';
import { addMoneyValue } from '../../store/playerSlice';
import { getRandomValue } from '../../utils/utils';

export const ShooterPanel: React.FC<IShooterPanelProps> = ({ target }) => {
  const isReloading = useSelector((state: RootState) => state.shooting.isReloading);
  const isPaused = useSelector((state: RootState) => state.player.isPaused);
  const dispatch = useDispatch();

  const [shotSound] = useSound('./audio/sounds/shot.wav');

  const shootHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation();

    if (!isReloading && target && !isPaused) {
      shotSound();
      const coordX = ev.clientX - SHOT_WIDTH / 2;
      const coordY = ev.clientY - SHOT_HEIGHT / 2;
      const shot = {
        id: Math.random(),
        shotCoord: { top: coordY, left: coordX },
        shotResult: ShootingType.HIT,
        holeType: getRandomValue(4, 1),
        visibility: true,
      };
      dispatch(addShotToList(shot));
      dispatch(removeBulletFromGun());
      dispatch(addMoneyValue(target.wanted!.price));
      setTimeout(() => {
        dispatch(removeShotFromList(shot.id));
      }, 800);
    }
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.plank}
        animate={!isPaused && target && { rotateY: [0, 88, 0, 88, 0] }}
        transition={{ duration: TURN_SPEED, repeat: 0 }}
      >
        {/* {!target && <div className={styles.guns}></div>} */}
        {target && (
          <motion.div
            className={styles.paper}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: TURN_SPEED / 4, duration: TURN_SPEED / 2 }}
          >
            <h4 className={styles.title}>WANTED</h4>
            <div className={cn(styles.shooter, styles[`target_${target.wanted!.name}`])}>
              <div
                className={styles.bloodZone}
                style={{
                  width: `${target.wanted!.bloodZoneWidht}rem`,
                  height: `${target.wanted!.bloodZoneHeight}rem`,
                  top: `${target.wanted!.bloodZoneTop}rem`,
                  left: `${target.wanted!.bloodZoneLeft}rem`,
                }}
                onClick={shootHandler}
              ></div>
            </div>
            <h5 className={styles.price}>${target?.wanted!.price}</h5>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
