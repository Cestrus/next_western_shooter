import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import styles from './BulletsContainer.module.css';
import { IBulletsContainerProps } from './BulletsContainer.prop';
import { BULLETS_IN_GUN } from '../../utils/constants';
import { removeBulletsValue } from '../../store/shootingSlice';

export const BulletsContainer: React.FC<IBulletsContainerProps> = () => {
  const bulletsValue = useSelector((state: RootState) => state.shooting.bulletsValue);
  const bulletsInGun = useSelector((state: RootState) => state.shooting.bulletsInGun);
  const dispatch = useDispatch();

  const tanksBulletsArr = bulletsValue && bulletsValue > 0 ? new Array(bulletsValue / BULLETS_IN_GUN).fill(<></>) : [];

  useEffect(() => {
    if (!bulletsInGun) {
      dispatch(removeBulletsValue());
    }
  }, [bulletsInGun]);

  const renderBulletsTank = (idxTank: number): JSX.Element => {
    const bulletsArr = new Array(BULLETS_IN_GUN).fill(<></>);
    return (
      <div key={idxTank} className={styles.bulletsTank}>
        {bulletsArr.map((el, idx) => (
          <div className={styles.bullet} key={`${idxTank}_${idx}`}></div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {tanksBulletsArr.length && tanksBulletsArr.map((bull, idxTank): JSX.Element => renderBulletsTank(idxTank))}
    </div>
  );
};
