import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

import styles from './AuthorizedWindow.module.css';
import { CornerMain } from '../CornerMain/CornerMain';
import { Button } from '../Button/Button';
import { setPlayerName, setIsAuthorized } from '../../store/playerSlice';

export const AuthorizedWindow: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [shots, setShots] = useState({ shot_1: false, shot_2: false, shot_3: false });
  const [isEmptyName, setIsEmptyName] = useState<boolean>(false);
  const [soundShot] = useSound('./audio/sounds/shot.wav');
  const dispatch = useDispatch();

  const changeNameHandler: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setName(ev.target.value);
  };

  const submitHandler: React.FormEventHandler = (ev) => {
    ev.preventDefault();

    if (!name.trim()) {
      setIsEmptyName(true);
      return;
    }

    renderShots();
    setIsEmptyName(false);
    dispatch(setPlayerName(name));
    dispatch(setIsAuthorized(true));
  };

  const renderShots = (): void => {
    for (let i = 1; i <= 3; i++) {
      setTimeout(() => {
        soundShot();
        setShots((prev) => {
          return { ...prev, [`shot_${i}`]: true };
        });
      }, 300 * i);
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ x: '70vw' }}
      animate={{ x: 0 }}
      exit={{ x: '70vw' }}
      transition={{
        delay: 1,
        duration: 0.6,
        type: 'spring',
      }}
    >
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>WESTERN SHOT</h2>
      </div>
      <form className={styles.form} onSubmit={submitHandler}>
        <label className={styles.label}>ENTER YOUR NAME</label>
        <input
          type='text'
          placeholder='Billy The Kid'
          value={name}
          onChange={changeNameHandler}
          className={cn(styles.input, {
            [styles.error]: isEmptyName,
          })}
        />
        <Button type='submit' className={styles.button}>
          SUBMIT
        </Button>
      </form>
      <div
        className={cn(styles.shot, styles.shot_1, {
          [styles.visible]: shots.shot_1,
        })}
      ></div>
      <div
        className={cn(styles.shot, styles.shot_2, {
          [styles.visible]: shots.shot_2,
        })}
      ></div>
      <div
        className={cn(styles.shot, styles.shot_3, {
          [styles.visible]: shots.shot_3,
        })}
      ></div>
      <CornerMain position='top-left' className={styles.corner} />
      <CornerMain position='top-right' className={styles.corner} />
      <CornerMain position='bottom-left' className={styles.corner} />
      <CornerMain position='bottom-right' className={styles.corner} />
    </motion.div>
  );
};
