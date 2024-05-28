import { createSlice } from '@reduxjs/toolkit';
import { authLogOut, authSignUp, authlogin } from './authOperators';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    authInfo: {},
    error: null,
  },
  reducers: {
    authError: (state, action) => {
      return {
        ...state,
        error: null,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authlogin.pending, state => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(authlogin.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          authInfo: action.payload,
        };
      })
      .addCase(authlogin.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      })
      .addCase(authLogOut.pending, state => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(authLogOut.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          authInfo: action.payload,
        };
      })
      .addCase(authLogOut.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      })
      .addCase(authSignUp.pending, state => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          authInfo: action.payload,
        };
      })
      .addCase(authSignUp.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      });
  },
});

export const { authError } = authSlice.actions;

export const authReducer = authSlice.reducer;
