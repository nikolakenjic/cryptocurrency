import { configureStore } from '@reduxjs/toolkit';
import uiSliceReducer from './slices/ui-slice';
import dataSliceReducer from './slices/data-slice';
import fiatCurrencySliceReducer from './slices/fiat-currency-slice';
import userSliceReducer from './slices/user-slice';
import appLoadingSliceReducer from './slices/app-loading-slice';

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    data: dataSliceReducer,
    currency: fiatCurrencySliceReducer,
    user: userSliceReducer,
    app: appLoadingSliceReducer,
  },
});

export default store;
