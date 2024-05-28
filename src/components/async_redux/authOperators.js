import { createAsyncThunk } from '@reduxjs/toolkit';
import Toastify from 'toastify-js';
import { BASE_URL } from 'utils/utils';

export const authlogin = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL + 'users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.status !== 200) {
        toastError(response.statusText);
        return thunkAPI.rejectWithValue(response.statusText);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authLogOut = createAsyncThunk(
  'auth/logout',
  async (myToken, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL + 'users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${myToken}`,
        },
      });
      const data = await response.json();
      if (response.status !== 200) {
        toastError(response.statusText);
        return thunkAPI.rejectWithValue(response.statusText);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authSignUp = createAsyncThunk(
  'auth/signup',
  async (body, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL + 'users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.status !== 201) {
        toastError(data._message);
        return thunkAPI.rejectWithValue(data._message);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const toastError = userError => {
  Toastify({
    text: userError,
    duration: 1500,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
  }).showToast();
};
