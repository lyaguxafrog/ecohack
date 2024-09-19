import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  user: string;
  token: string;
};
const initialState: initialStateType = {
  user: '',
  token: '',
};

export const dataStateSlice = createSlice({
  name: 'data-reducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder;
  },
});
