import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BULLETS_IN_GUN, BULLETS_VALUE } from '../utils/constants';

export enum ShootingType {
  MISSING,
  HIT,
  SILENCE,
}

export type ShotCoordType = {
  top: number;
  left: number;
};

export type ShotType = {
  id: number;
  shotCoord: ShotCoordType | null;
  shotResult: ShootingType;
  holeType: number;
  visibility: boolean;
};

export interface IShootingState {
  bulletsValue: number;
  bulletsInGun: number;
  isReloading: boolean;
  shotList: ShotType[];
}

const initialState: IShootingState = {
  bulletsValue: BULLETS_VALUE - BULLETS_IN_GUN,
  bulletsInGun: BULLETS_IN_GUN,
  isReloading: false,
  shotList: [],
};

export const shootingSlice = createSlice({
  name: 'shooting',
  initialState,
  reducers: {
    addBulletInGun: (state) => {
      if (state.isReloading) {
        const bullets = state.bulletsInGun + 1;
        state.bulletsInGun = bullets <= BULLETS_IN_GUN ? bullets : BULLETS_IN_GUN;
        if (bullets === BULLETS_IN_GUN) state.isReloading = false;
      }
    },
    removeBulletFromGun: (state) => {
      const bullets = state.bulletsInGun - 1;
      state.bulletsInGun = bullets > 0 ? bullets : 0;
    },
    removeBulletsValue: (state) => {
      const bulletsValue = state.bulletsValue - BULLETS_IN_GUN;
      state.bulletsValue = bulletsValue >= 0 ? bulletsValue : 0;
      if (bulletsValue >= 0) {
        state.isReloading = true;
      }
    },
    setFullGun: (state) => {
      state.bulletsValue = BULLETS_VALUE - BULLETS_IN_GUN;
      state.bulletsInGun = BULLETS_IN_GUN;
      state.isReloading = false;
      state.shotList = [];
    },
    addShotToList: (state, action: PayloadAction<ShotType>) => {
      state.shotList.push(action.payload);
    },
    removeShotFromList: (state, action: PayloadAction<number>) => {
      state.shotList = state.shotList.filter((shot) => shot.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addBulletInGun,
  removeBulletFromGun,
  removeBulletsValue,
  setFullGun,
  addShotToList,
  removeShotFromList,
} = shootingSlice.actions;

export default shootingSlice.reducer;
