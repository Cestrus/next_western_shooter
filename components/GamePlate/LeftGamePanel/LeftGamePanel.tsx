import React from 'react';
import { InfoPanel } from '../../../components';

import styles from './LeftGamePanel.module.css';
import { ILeftGamePlateProps } from './LeftGamePanel.prop';

const LeftGamePanel: React.FC<ILeftGamePlateProps> = () => {
  return (
    <div className={styles.container}>
      <InfoPanel />
    </div>
  );
};

export default LeftGamePanel;
