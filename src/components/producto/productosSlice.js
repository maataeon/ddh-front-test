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

// Definir una acción asincrónica para obtener el detalle de un producto
export const fetchProductoDetail = createAsyncThunk(
  'productos/fetchProductoDetail',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await API.getProductoDetail(productId);
      return response;
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
    producto: null, // Agrega el estado para el detalle del producto
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
    // Manejar la acción asincrónica fetchProductoDetail
    [fetchProductoDetail.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProductoDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.producto = action.payload.msg; // Guarda el detalle del producto en el estado
    },
    [fetchProductoDetail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Exportar acciones y reducers
export const productosActions = productosSlice.actions;
export default productosSlice.reducer;