import { QUANTITY_SHOOTER_PLATES } from '../utils/constants';
import { IWantedObj, targets } from '../utils/targetsData';
import { getRandomValue } from '../utils/utils';

export interface ITargetPlate {
  id: number;
  wanted?: IWantedObj;
}

export const initialPlates = (): ITargetPlate[] =>
  new Array(QUANTITY_SHOOTER_PLATES).fill({}).map((el, idx) => {
    return { id: idx };
  });

export const getTarget = (): ITargetPlate => {
  const randomPlateIndex = getRandomValue(QUANTITY_SHOOTER_PLATES);
  const randomTarget = targets[getRandomValue(targets.length - 1)];

  return { id: randomPlateIndex, wanted: randomTarget };
};
