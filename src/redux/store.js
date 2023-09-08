import { configureStore } from '@reduxjs/toolkit';
import cryptoSlice from './balance/balanceSlice';
import detailSlice from './balance/detailSlice';

const store = configureStore({
  reducer: {
    cryptos: cryptoSlice,
    cryptoDetail: detailSlice,
  },
});

export default store;
