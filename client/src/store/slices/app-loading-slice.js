import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  isLoading: false,
  isError: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState: defaultState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { setIsLoading, setIsError } = appSlice.actions;

export default appSlice.reducer;
