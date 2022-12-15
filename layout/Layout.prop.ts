import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ILayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode;
}
