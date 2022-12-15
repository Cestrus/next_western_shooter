import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayerInfo } from '../types/globalTypes';

export interface IPlayerState {
  gameIsOver: boolean;
  name: string;
  isAuthorized: boolean;
  isPaused: boolean;
  topGunners: IPlayerInfo[];
  moneyValue: number;
}

const initialState: IPlayerState = {
  gameIsOver: false,
  name: '',
  isAuthorized: false,
  isPaused: true,
  topGunners: [],
  moneyValue: 0,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setGameIsOver: (state, action: PayloadAction<boolean>) => {
      state.gameIsOver = action.payload;
    },
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
    setPauseOn: (state) => {
      state.isPaused = true;
    },
    setPauseOff: (state) => {
      state.isPaused = false;
    },
    setTopGunners: (state, action: PayloadAction<IPlayerInfo[]>) => {
      state.topGunners = action.payload;
    },
    addGunnerToTop: (state) => {
      if (state.moneyValue <= 0) {
        return;
      }
      const gunners = [...state.topGunners];
      gunners.push({ name: state.name, money: state.moneyValue });
      gunners.sort((a, b) => a.money - b.money);
      gunners.length = 10;
      state.topGunners = gunners;
    },
    addMoneyValue: (state, action: PayloadAction<number>) => {
      state.moneyValue += action.payload;
    },
    resetMoneyValue: (state) => {
      state.moneyValue = 0;
    },
    removeMoneyValue: (state, action: PayloadAction<number>) => {
      const value = state.moneyValue - action.payload;
      state.moneyValue = value < 0 ? 0 : value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setGameIsOver,
  setPlayerName,
  setIsAuthorized,
  setPauseOn,
  setPauseOff,
  setTopGunners,
  addMoneyValue,
  resetMoneyValue,
  removeMoneyValue,
} = playerSlice.actions;

export default playerSlice.reducer;
