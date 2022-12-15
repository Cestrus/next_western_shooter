import React from 'react';
import { useSelector } from 'react-redux';

import styles from './TargetsPlate.module.css';
import { ITargetsPlate } from './TargetsPlate.prop';
import { ShooterPanel } from '../ShooterPanel/ShooterPanel';
import { RootState } from '../../store/store';

export const TargetsPlate: React.FC<ITargetsPlate> = () => {
  const allTargets = useSelector((state: RootState) => state.targets.allTargets);
  const currTarget = useSelector((state: RootState) => state.targets.currTarget);

  return (
    <div className={styles.container}>
      {allTargets.map((plate) => (
        <ShooterPanel target={plate.id === currTarget.id ? currTarget : undefined} key={plate.id} />
      ))}
    </div>
  );
};
