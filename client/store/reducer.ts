import { combineReducers } from '@reduxjs/toolkit';

import { dataStateSlice } from './data-slice/data-reducer';

// import { authorization } from '@/pages/authorization/model/slice';
enum ReducerNamespace {
  dataState = 'DATA_STATE',
}

export const rootReducer = combineReducers({
  [ReducerNamespace.dataState]: dataStateSlice.reducer,
});
