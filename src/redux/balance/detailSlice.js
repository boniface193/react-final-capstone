/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const API_KEY = '9baf1140cf980b91bb275e8c15640c1f';
const API_KEY1 = '8586b6438c2f8417d6cb1c5353352491';
export const fetchCryptoDetails = createAsyncThunk('balance/fetchCryptoDetails', async () => {
  const res = await fetch(`https://financialmodelingprep.com/api/v3/quote${location.pathname}?apikey=${API_KEY1}`);
  const crypto = await res.json();
  return crypto;
});

const cryptoSlice = createSlice({
  name: 'cryptoSymbolsDetails',
  initialState: {
    cryptoDetail: [],
    data: "",
    showLoad: false,
    showError: null,
  },
  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchCryptoDetails.pending, (state) => {
      state.showLoad = true;
    });
    builder.addCase(fetchCryptoDetails.fulfilled, (state, action) => {
      state.showLoad = false;
      state.cryptoDetail = action.payload;
      state.showError = null;
    });
    builder.addCase(fetchCryptoDetails.rejected, (state, action) => {
      state.showLoad = false;
      state.cryptoDetail = [];
      state.showError = action.error.message;
    });
  },
});

export default cryptoSlice.reducer;
