import { createSlice } from '@reduxjs/toolkit';

import { ITargetPlate, initialPlates, getTarget } from '../model/gameModel';

export interface ITargetState {
  allTargets: ITargetPlate[];
  currTarget: ITargetPlate;
}

const initialState: ITargetState = {
  allTargets: initialPlates(),
  currTarget: { id: -1 },
};

export const targetsSlice = createSlice({
  name: 'targets',
  initialState,
  reducers: {
    setTargetPlate: (state) => {
      state.currTarget = getTarget();
    },
    resetTargetPlate: (state) => {
      state.currTarget = { id: -1 };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTargetPlate, resetTargetPlate } = targetsSlice.actions;
export default targetsSlice.reducer;
