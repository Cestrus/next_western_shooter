import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSound } from 'use-sound';

import styles from './MainGamePanel.module.css';
import { IMainGamePlateProps } from './MainGamePanel.prop';
import { RootState } from '../../../store/store';
import { ShootingType, removeBulletFromGun, addShotToList, removeShotFromList } from '../../../store/shootingSlice';
import { SHOT_HEIGHT, SHOT_WIDTH } from '../../../utils/constants';
import { ShotHole, TargetsPlate } from '../../../components';
import { getRandomValue } from '../../../utils/utils';

const MainGamePanel: React.FC<IMainGamePlateProps> = () => {
  const isReloading = useSelector((state: RootState) => state.shooting.isReloading);
  const isPaused = useSelector((state: RootState) => state.player.isPaused);
  const shotList = useSelector((state: RootState) => state.shooting.shotList);

  const [shotSouond] = useSound('./audio/sounds/shot.wav');

  const dispatch = useDispatch();

  const shotHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    if (!isReloading && !isPaused) {
      shotSouond();
      const coordX = ev.clientX - SHOT_WIDTH / 2;
      const coordY = ev.clientY - SHOT_HEIGHT / 2;
      const shot = {
        id: Math.random(),
        shotCoord: { top: coordY, left: coordX },
        shotResult: ShootingType.MISSING,
        holeType: getRandomValue(4, 1),
        visibility: true,
      };
      dispatch(addShotToList(shot));
      dispatch(removeBulletFromGun());
      setTimeout(() => {
        dispatch(removeShotFromList(shot.id));
      }, 800);
    }
  };

  return (
    <div className={styles.container} onClick={shotHandler}>
      {shotList.map((shot) => (
        <ShotHole shot={shot} key={shot.id} />
      ))}
      <TargetsPlate />
    </div>
  );
};

export default MainGamePanel;
