import React from 'react';

import cn from 'classnames';
import styles from './CornerMain.module.css';
import { ICornerMainProps } from './CornerMain.prop';
import CornerMainSvg from './vintage_corner.svg';

export const CornerMain: React.FC<ICornerMainProps> = ({ position, className }) => {
  return (
    <CornerMainSvg
      // src={CornerMainSvg}
      className={cn(className, {
        [styles['top-right']]: position === 'top-right',
        [styles['top-left']]: position === 'top-left',
        [styles['bottom-right']]: position === 'bottom-right',
        [styles['bottom-left']]: position === 'bottom-left',
      })}
    />
  );
};
