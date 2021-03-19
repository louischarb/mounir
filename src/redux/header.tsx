import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { _routes } from "../constants";

export interface headerStateProps {
  backgroundIsActive: boolean;
  actualPage: string;
}


const headerSlice = createSlice({
  name: "header",
  initialState: {
    backgroundIsActive: false,
    actualPage: _routes.HOME,
  },
  reducers: {
    setBackgroundIsActiveFalse: (state) => {
      state.backgroundIsActive = false;
    },
    setBackgroundIsActiveTrue: (state) => {
      state.backgroundIsActive = true;
    },
    setActualPage: (state, action: PayloadAction<string>) => {
      state.actualPage = action.payload;
    },
  },
});

export const {
  setBackgroundIsActiveFalse,
  setBackgroundIsActiveTrue,
  setActualPage,
} = headerSlice.actions;

export const store = configureStore({
  reducer: headerSlice.reducer,
});

export type HeaderDispatch = typeof store.dispatch;
