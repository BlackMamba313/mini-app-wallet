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
  user: {
    wallets: [
      {
        network: 'TEST',
        address: 'TEST',
        balances: [{
          token: 'TEST',
          balance: 'TEST'
        }],
      }
    ]
  },
  isAuthenticated: false,
  isLoggedIn: false,
  onSuccess: null,
  error: null,
  loaders:  false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    //auth
    builder.addCase(auth.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(auth.fulfilled, (state, {payload}) => {
      state.user = payload;
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

export default authSlice.reducer;
