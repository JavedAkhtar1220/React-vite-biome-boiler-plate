import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    count: 0,
  },
  reducers: {
    increamentReducer: (state) => {
      state.count += 1;
    },
    decrementReducer: (state) => {
      if (state.count != 0) {
        state.count -= 1;
      }
    },
  },
});

export const exampleSelector = (state) => state.example;

export const { increamentReducer, decrementReducer } = exampleSlice.actions;

export default exampleSlice.reducer;
