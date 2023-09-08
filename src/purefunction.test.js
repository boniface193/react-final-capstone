import cryptoReducer, { getFormValue } from './redux/balance/balanceSlice'; // Import your reducer

describe('getFormValue Reducer', () => {
  it('should update state.searchCrypto and state.cryptos when a valid payload is provided', () => {
    const initialState = {
      searchCrypto: '',
      cryptos: [],
      allCryptos: [
        { symbol: 'BTC', name: 'Bitcoin' },
        { symbol: 'ETH', name: 'Ethereum' },
      ],
      error: null,
    };

    const action = getFormValue('BTC');

    const newState = cryptoReducer(initialState, action);

    expect(newState.searchCrypto).toBe('BTC');
    expect(newState.cryptos).toEqual([{ symbol: 'BTC', name: 'Bitcoin' }]);
    expect(newState.error).toBe(null);
  });
});
