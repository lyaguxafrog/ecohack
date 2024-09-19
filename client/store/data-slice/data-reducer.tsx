import { createSlice } from '@reduxjs/toolkit';

import { getEvents } from '../api-actions';
import { IEvent } from '../../types/index';

type initialStateType = {
  user: string;
  token: string;
  events: IEvent[];
};
const initialState: initialStateType = {
  user: '',
  token: '',
  events: [],
};

export const dataStateSlice = createSlice({
  name: 'data-reducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEvents.fulfilled, (state, { payload }) => {
      state.events = payload.allEvents.edges.map((item) => item.node);
    });
  },
});
