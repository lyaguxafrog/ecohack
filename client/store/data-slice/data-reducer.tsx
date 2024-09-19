import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '@/types/data-types';
import { checkAuth, registerUser, signIn } from '../api-actions';

type initialStateType = {
  user?: IUser;
  token: string;
  phoneToCall: string;
};
const initialState: initialStateType = {
  token: '',
  phoneToCall: '',
};

export const dataStateSlice = createSlice({
  name: 'DATA_STATE',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.phoneToCall = payload.phoneToCall;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.phoneToCall = payload.registerUser.phoneToCall;
        console.log(payload.registerUser.phoneToCall);
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.profile;
        state.token = payload.token;
        console.log(state.token);
      });
  },
});
