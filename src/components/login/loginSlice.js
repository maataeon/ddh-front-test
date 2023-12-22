
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../config/api';
const initialState = {
  token: null,
  usarname: '',
  password: ''
};

export const loginThunk = createAsyncThunk(
  'users/fetchByIdStatus',
  async (request, thunkAPI) => {
    const response = await API.login(request);
    console.log(response);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    }
  },
});

export const { setUsername, setPassword } = loginSlice.actions;

export default loginSlice.reducer;