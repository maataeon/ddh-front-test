// productosSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../config/api';

// Definir una acción asincrónica para obtener productos
export const fetchProductos = createAsyncThunk(
  'productos/fetchProductos',
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.getProductos();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define el slice
const productosSlice = createSlice({
  name: 'productos',
  initialState: {
    productos: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Otros reducers si es necesario
  },
  extraReducers: {
    // Manejar la acción asincrónica fetchProductos
    [fetchProductos.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProductos.fulfilled]: (state, action) => {
      state.loading = false;
      state.productos = action.payload.msg.data;
    },
    [fetchProductos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Exportar acciones y reducers
export const productosActions = productosSlice.actions;
export default productosSlice.reducer;
