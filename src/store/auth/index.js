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

export const getCurrencyRate = createAsyncThunk(
  'getCurrencyRate',
  async (params) => {
    const {data} = await axiosInstance.post('getrate', params);
    return data;
  }
);

// export const ChangeCurrentFiat = createAsyncThunk(
//   'ChangeCurrentFiat',
//   async (params) => {
//     const {data} = await axiosInstance.post('authuser', params);
//     return data;
//   }
// );

export const GetFiat = createAsyncThunk(
  'GetFiat',
  async (params) => {
    const {data} = await axiosInstance.post('getfiat', params);
    return data;
  }
);

export const GetCrypto = createAsyncThunk(
  'GetCrypto',
  async (params) => {
    const {data} = await axiosInstance.post('getcrypto', params);
    return data;
  }
);

const initialState = {
  user: null,
  wallets:  null,
  currentWallet: null,
  currentCripto: null,
  currentRate: null,
  rate: null,
  fiat: null,
  crypto: null,
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
    setActiveWallet: (state, action) => {
      state.currentWallet = action.payload;
      if (state.rate)
        state.currentRate = parseFloat(( 1 / state.rate[`${state.user.iso}\\${action.payload.token}`]).toFixed(2))
    },
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
      state.rate = payload.rate
      state.fiat = payload.fiat
      state.crypto = payload.coin
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
      if (remains) {
        const walletIndex = state.wallets.findIndex(wallet => wallet.token === token && wallet.network === network);
        if (walletIndex !== -1) {
          // Если кошелек найден, обновляем его баланс на остаток после операции
          state.wallets[walletIndex].balance = remains;
        }
      }
      state.isLoggedIn = true
      state.onSuccess = true;
    });
    builder.addCase(transfer.rejected, (state, action) => {
      state.loader = false; // Останавливаем индикатор загрузки
      state.error = action.error.message;
    });
    //getCurrencyRate
    builder.addCase(getCurrencyRate.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getCurrencyRate.fulfilled, (state, {payload}) => {
      state.rate = payload;
      state.onSuccess = true;
    });
    builder.addCase(getCurrencyRate.rejected, (state, action) => {
      state.loader = false; // Останавливаем индикатор загрузки
      state.error = action.error.message;
    });
    //GetFiat
    builder.addCase(GetFiat.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(GetFiat.fulfilled, (state, {payload}) => {
      state.fiat = payload;
      state.onSuccess = true;
    });
    builder.addCase(GetFiat.rejected, (state, action) => {
      state.loader = false; // Останавливаем индикатор загрузки
      state.error = action.error.message;
    });
    //GetCrypto
    builder.addCase(GetCrypto.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(GetCrypto.fulfilled, (state, {payload}) => {
      state.crypto = payload;
      state.onSuccess = true;
    });
    builder.addCase(GetCrypto.rejected, (state, action) => {
      state.loader = false; // Останавливаем индикатор загрузки
      state.error = action.error.message;
    });
  },
});

export const {
  setActiveWallet,
} = authSlice.actions;
export default authSlice.reducer;
