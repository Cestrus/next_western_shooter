import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';
import { IModalProps } from './Modal.prop';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const Backdrop: React.FC = () => <div className={styles.backdrop}></div>;

export const Modal: React.FC<IModalProps> = ({ modalType }) => {
  const [portalElement, setPortalElement] = useState<HTMLElement>();

  useEffect(() => {
    setPortalElement(document.getElementById('overlays')!);
  }, []);

  return (
    <>
      {portalElement && ReactDOM.createPortal(<Backdrop />, portalElement)}
      {portalElement && ReactDOM.createPortal(<ModalOverlay modalType={modalType} />, portalElement)}
    </>
  );
};
