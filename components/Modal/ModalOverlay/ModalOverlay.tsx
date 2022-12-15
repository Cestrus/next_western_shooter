import React from 'react';
import { ModalType } from '../../../types/globalTypes';
import { AuthorizedWindow } from '../../AuthorizedWindow/AuthorizedWindow';
import { ResultWindow } from '../../ResultWindow/ResultWindow';

import styles from './ModalOverlay.module.css';
import { IModalOverlay } from './ModalOverlay.prop';

const ModalOverlay: React.FC<IModalOverlay> = ({ modalType }) => {
  return (
    <div className={styles.container}>
      {modalType === ModalType.AUTHORIZATION && <AuthorizedWindow />}
      {modalType === ModalType.GAMEOVER && <ResultWindow />}
    </div>
  );
};

export default ModalOverlay;
