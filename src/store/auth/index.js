//ts-nocheck
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../axios';


export const auth = createAsyncThunk(
  'auth',
  async (params) => {
    const {data} = await axiosInstance.post('authuser', params);
    return data;
  }
);

export const refreshToken = createAsyncThunk(
  'refreshToken',
  async () => {
    const bodyData = {ti: Math.floor(Date.now() / 1000), to: localStorage.getItem('to')};
    const {data} = await axiosInstance.post('refreshToken', bodyData);
    return data;
  }
);

const initialState = {
  user: null,
  wallets: [
    {
      network: 'NETWORK',
      address: 'ADDRESS',
      token: 'TOKEN',
      balance: 'BALANCE',
    }
  ],
  currentWallet: {
    network: 'NETWORK',
    address: 'ADDRESS',
    token: 'TOKEN',
    balance: 'BALANCE',
  },
  isAuthenticated: false,
  isLoggedIn: false,
  onSuccess: null,
  error: null,
  loaders: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Редьюсер для установки активного кошелька
    setActiveWallet: (state, action) => {
      console.log('action', action.payload)
      state.wallet = action.payload;
      console.log('wallet', state.wallet)
    }
  },
  extraReducers: (builder) => {
    //auth
    builder.addCase(auth.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(auth.fulfilled, (state, {payload}) => {
      const {wallets, ...userDetails} = payload.user;
      state.user = userDetails;
      // eslint-disable-next-line no-unused-expressions
      if (wallets) {
        state.wallets = wallets.flatMap(wallet =>
          wallet.balances.map(balance => ({
            network: wallet.network,
            address: wallet.address,
            token: balance.token,
            balance: balance.balance,
          }))
        );
        state.currentWallet = state.wallets[0];
      }
      state.isLoggedIn = true
      state.onSuccess = true;
    });
    builder.addCase(auth.rejected, (state, action) => {
      state.loader = false; // Останавливаем индикатор загрузки
      state.error = action.error.message;
      console.log('message', action.meta.arg)
    });
  },
});

export const { setActiveWallet } = authSlice.actions;
export default authSlice.reducer;
