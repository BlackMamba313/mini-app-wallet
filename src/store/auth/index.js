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
  isAuthenticated: false,
  isLoggedIn: false,
  onSuccess: null,
  loaders: {
    authentication: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    //auth
    builder.addCase(auth.pending, (state) => {
      state.loaders.common = true;
    });
    builder.addCase(auth.fulfilled, (state, {payload}) => {
      console.log('dataString', payload.msg)
      state.user = payload;
      state.isLoggedIn = true
      state.onSuccess = true;
      localStorage.setItem('to', payload.to);
      localStorage.setItem('ttl', payload.ttl);
    });

  },
});

export default authSlice.reducer;
