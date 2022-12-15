import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ModalType } from '../../../types/globalTypes';

export interface IModalOverlay extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  modalType: ModalType;
}
