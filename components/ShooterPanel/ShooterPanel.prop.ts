import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITargetPlate } from '../../model/gameModel';

export interface IShooterPanelProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  target: ITargetPlate | undefined;
}
