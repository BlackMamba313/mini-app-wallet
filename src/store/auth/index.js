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

export const transfer = createAsyncThunk(
  'transfer',
  async (params) => {
    const {data} = await axiosInstance.post('transfer', params);
    return data;
  }
);

const initialState = {
  user: null,
  wallets:  null,
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
      }
      state.isLoggedIn = true
      state.onSuccess = true;
    });
    builder.addCase(auth.rejected, (state, action) => {
      state.loader = false; // Останавливаем индикатор загрузки
      state.error = action.error.message;
    });
    //transfer
    builder.addCase(transfer.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(transfer.fulfilled, (state, {meta, payload}) => {
      const { token, network } = meta.arg; // Извлекаем token и network из meta
      const remains = payload?.remains; // Извлекаем остаток баланса после операции
      // Находим кошелек, который соответствует условиям token и network
      const walletIndex = state.wallets.findIndex(wallet => wallet.token === token && wallet.network === network);
      if (walletIndex !== -1) {
        // Если кошелек найден, обновляем его баланс на остаток после операции
        state.wallets[walletIndex].balance = remains;
      }

      state.isLoggedIn = true
      state.onSuccess = true;
    });
    builder.addCase(transfer.rejected, (state, action) => {
      state.loader = false; // Останавливаем индикатор загрузки
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
