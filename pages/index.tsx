import { AnimatePresence } from 'framer-motion';
import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GamePlate, Modal } from '../components/index';
import { withLayout } from '../layout/Layout';
import { setTopGunners } from '../store/playerSlice';
import { RootState } from '../store/store';
import { setTargetPlate } from '../store/targetsSlice';
import { IPlayerInfo, ModalType } from '../types/globalTypes';
import { GAME_SPEED } from '../utils/constants';
import { getTopGunners } from '../utils/db';

const Home: NextPage<IHomePageProps> = ({ topGunners }) => {
  const isAuthorized = useSelector((state: RootState) => state.player.isAuthorized);
  const isGameOver = useSelector((state: RootState) => state.player.gameIsOver);
  const isPaused = useSelector((state: RootState) => state.player.isPaused);

  const dispatch = useDispatch();

  const [timerId, setTimerId] = useState<NodeJS.Timer>();

  useEffect(() => {
    const startTimer = (): void => {
      const id = setInterval(() => {
        dispatch(setTargetPlate());
      }, GAME_SPEED);
      setTimerId(id);
    };

    if (!isPaused && !isGameOver) {
      startTimer();
    } else if (isPaused || isGameOver) {
      clearInterval(timerId);
    }
  }, [isGameOver, isPaused]);

  useEffect(() => {
    dispatch(setTopGunners(topGunners));
  }, []);

  return (
    <>
      <AnimatePresence>{!isAuthorized && <Modal modalType={ModalType.AUTHORIZATION} />}</AnimatePresence>
      <AnimatePresence>{isGameOver && <Modal modalType={ModalType.GAMEOVER} />}</AnimatePresence>
      <GamePlate />
    </>
  );
};

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const gunners = await getTopGunners();
  if (gunners) {
    gunners.sort((a, b) => b.money - a.money);
  }
  const topGunners = gunners || [];
  return {
    props: {
      topGunners,
    },
  };
};

interface IHomePageProps extends Record<string, unknown> {
  topGunners: IPlayerInfo[];
}

export default withLayout(Home);
