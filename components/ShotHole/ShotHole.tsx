import React from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import styles from './ShotHole.module.css';
import { IShotHoleProps } from './ShotHole.prop';
import { ShootingType } from '../../store/shootingSlice';

export const ShotHole: React.FC<IShotHoleProps> = ({ shot }) => {
  const shotStyle = shot.shotResult === ShootingType.HIT ? styles.hit : styles[`miss_${shot.holeType}`];

  return (
    <motion.div
      className={cn(styles.shot, shotStyle)}
      style={{ top: shot.shotCoord?.top, left: shot.shotCoord?.left }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
    ></motion.div>
  );
};
