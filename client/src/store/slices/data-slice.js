import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  data: [],
  currentPage: 1,
  pageData: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState: defaultState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageData: (state, action) => {
      state.pageData = action.payload;
    },
  },
});

export const { setData, setCurrentPage, setPageData } = dataSlice.actions;

export default dataSlice.reducer;
