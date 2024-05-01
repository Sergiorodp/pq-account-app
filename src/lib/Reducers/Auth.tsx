import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
  authState: boolean;
  name: string;
  email: string;
}

const initialState: IAuthState = {
  authState: false,
  name: '',
  email: '',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;