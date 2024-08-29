// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import { exampleSlice } from './slices';

const rootReducer = combineReducers({
  example: exampleSlice,
  // Add other reducers here
});

export default rootReducer;
