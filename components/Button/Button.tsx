import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';
import { IButtonProps } from './Button.prop';
import { CornerMain } from '../CornerMain/CornerMain';
import { useState } from 'react';

export const Button: React.FC<IButtonProps> = ({ onClick, children, className }) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const mouseDownHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsClick(true);
  };

  const mouseUpHandler: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
    setIsClick(false);
    if (onClick) {
      onClick(ev);
    }
  };

  return (
    <button
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      className={cn(
        styles.container,
        {
          [styles.up]: !isClick,
          [styles.down]: isClick,
        },
        className
      )}
    >
      <CornerMain position='top-left' className={styles.corner} />
      <CornerMain position='top-right' className={styles.corner} />
      <CornerMain position='bottom-left' className={styles.corner} />
      <CornerMain position='bottom-right' className={styles.corner} />
      {children}
    </button>
  );
};
