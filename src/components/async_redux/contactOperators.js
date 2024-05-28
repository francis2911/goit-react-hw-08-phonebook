import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'utils/utils';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (myToken, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL + 'contacts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${myToken}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createContact = createAsyncThunk(
  'contacts/createContact',
  async ({ getInfoUser, newContact }, thunkAPI) => {
    try {
      const OPTIONS = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getInfoUser}`,
        },
        body: JSON.stringify(newContact),
      };
      const response = await fetch(BASE_URL + 'contacts', OPTIONS);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ getInfoUser, contactId }, thunkAPI) => {
    try {
      const OPTIONS = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getInfoUser}`,
        },
      };
      const response = await fetch(BASE_URL + `contacts/${contactId}`, OPTIONS);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
