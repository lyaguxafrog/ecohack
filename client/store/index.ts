import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: rootReducer,
});
