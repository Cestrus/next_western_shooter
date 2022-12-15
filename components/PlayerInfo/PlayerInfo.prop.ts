import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IPlayerInfo } from '../../types/globalTypes';

export interface IPlayerInfoProp extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  player: IPlayerInfo;
  rating: number;
}
