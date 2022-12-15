import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IPlayerInfo } from '../../types/globalTypes';

export interface IRecordsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  playersList: IPlayerInfo[];
}
