/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const API_KEY = '9baf1140cf980b91bb275e8c15640c1f';
const API_KEY1 = '8586b6438c2f8417d6cb1c5353352491';

const url = `https://financialmodelingprep.com/api/v3/symbol/available-cryptocurrencies?apikey=${API_KEY1}`;

const fetchCrypto = async () => {
  const res = await fetch(url);
  const crypto = await res.json();
  return crypto;
};

export const fetchCryptos = createAsyncThunk('balance/fetchCryptos', fetchCrypto);

const cryptoSlice = createSlice({
  name: 'cryptoSymbols',
  initialState: {
    cryptos: [],
    allCryptos: [],
    singleCrypto: [],
    searchCrypto: [],
    loading: false,
    error: null,
  },
  reducers: {
    getFormValue: (state, action) => {
      try {
        state.searchCrypto = action.payload;
        state.cryptos = state.allCryptos.filter((item) => {
          if (item.symbol.indexOf(state.searchCrypto) > -1) {
            return item.symbol
          }
        });
      } catch (error) {
        state.error = error
      }
    }
  },

  extraReducers(builder) {
    builder.addCase(fetchCryptos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCryptos.fulfilled, (state, action) => {
      state.loading = false;
      state.allCryptos = action.payload;
      state.cryptos = action.payload.splice(0, 20);
      const randoms = Math.floor(Math.random() * action.payload.length);
      state.singleCrypto = action.payload[randoms];
      state.error = null;
    });
    builder.addCase(fetchCryptos.rejected, (state, action) => {
      state.loading = false;
      state.cryptos = [];
      state.error = action.error.message;
    });
  },
});

export default cryptoSlice.reducer;
export const { getFormValue } = cryptoSlice.actions;
