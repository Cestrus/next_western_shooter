import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ShotType } from '../../store/shootingSlice';

export interface IShotHoleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  shot: ShotType;
}
