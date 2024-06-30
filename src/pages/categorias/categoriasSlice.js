// categoriasSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../config/api";

export const getCategorias = createAsyncThunk(
  "categorias/getCategorias",
  async (criteria, { rejectWithValue }) => {
    try {
      const data = await API.getCategorias(criteria);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createCategoria = createAsyncThunk(
  "categorias/createCategoria",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await API.createCategoria(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCategoria = createAsyncThunk(
  "categorias/updateCategoria",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await API.updateCategoria(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCategoria = createAsyncThunk(
  "productos/deleteCategoria",
  async (categoria, { rejectWithValue }) => {
    try {
      const data = await API.deleteCategoria(categoria);
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
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategorias.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategorias.fulfilled, (state, action) => {
        state.categorias = action.payload.msg;
        state.loading = false;
      })
      .addCase(getCategorias.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createCategoria.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategoria.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createCategoria.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const categoriasActions = categoriasSlice.actions;
export default categoriasSlice.reducer;
