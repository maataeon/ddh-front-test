// productosSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../config/api";

export const getCategorias = createAsyncThunk(
  "productos/getCategorias",
  async (criteria, { rejectWithValue }) => {
    try {
      const data = await API.getCategorias(criteria);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categoriasSlice = createSlice({
  name: "categorias",
  initialState: {
    categorias: [],
    categoria: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // lista productos
    [getCategorias.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getCategorias.fulfilled]: (state, action) => {
      state.categorias = action.payload.msg;
      state.loading = false;
    },
    [getCategorias.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const categoriasActions = categoriasSlice.actions;
export default categoriasSlice.reducer;
