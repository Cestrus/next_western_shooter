import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITitleMainProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode;
}
