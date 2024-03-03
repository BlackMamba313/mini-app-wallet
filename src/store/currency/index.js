//ts-nocheck
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../axios';


export const getCurrencyRate = createAsyncThunk(
  'getCurrencyRate',
  async (params) => {
    const {data} = await axiosInstance.post('authuser', params);
    return data;
  }
);

export const ChangeCurrentFiat = createAsyncThunk(
  'ChangeCurrentFiat',
  async (params) => {
    const {data} = await axiosInstance.post('authuser', params);
    return data;
  }
);


const initialState = {
  currentFiat: 'RUB',
  rate: '???',
  onSuccess: null,
  error: null,
  loader: false,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    //auth
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
  },
});

export default currencySlice.reducer;
