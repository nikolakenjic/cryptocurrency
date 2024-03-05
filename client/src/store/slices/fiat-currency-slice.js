import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  selectedCurrency: 'USD',
};

const fiatCurrencySlice = createSlice({
  name: ' currency',
  initialState: defaultState,
  reducers: {
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setSelectedCurrency } = fiatCurrencySlice.actions;

export default fiatCurrencySlice.reducer;
