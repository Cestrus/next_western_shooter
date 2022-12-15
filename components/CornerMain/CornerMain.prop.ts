import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICornerMainProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}
