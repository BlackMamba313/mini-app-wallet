//ts-nocheck
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../axios';


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
  currentWallet: null,
  currentFiat: 'RUB',
  currentCripto: 'USDT',
  currentRate: 1,
  rate: null,
  fiat: null,
  crypto: null,
  onSuccess: null,
  error: null,
  loader: false,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setActiveWallet: (state, action) => {
      state.currentWallet = action.payload;
      if (state.rate)
      state.currentRate = parseFloat(( 1 / state.rate[`${state.currentFiat}\\${action.payload.token}`]).toFixed(2))
    },
    changeCurrentRate: (state, action) => {
      state.currentRate = action.payload;
    }},
    extraReducers: (builder) => {
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
        console.log('message', action.meta.arg)
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
        console.log('message', action.meta.arg)
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
        console.log('message', action.meta.arg)
      });
    },
  });

export const {
  setActiveWallet,
  changeCurrentRate
} = currencySlice.actions;

export default currencySlice.reducer;
