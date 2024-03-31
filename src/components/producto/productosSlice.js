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

export const saveProduct = createAsyncThunk(
  'productos/saveProduct',
  async (product, { rejectWithValue }) => {
    try {
      const response = await API.saveProduct(product);
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
    producto: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Otros reducers si es necesario
  },
  extraReducers: {
    // Otros extra reducers si es necesario
    // Manejar la acción asincrónica saveProduct
    [saveProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [saveProduct.fulfilled]: (state, action) => {
      state.loading = false;
      // Puedes actualizar el estado según lo que necesites aquí
      // Por ejemplo, si necesitas actualizar la lista de productos después de guardar uno nuevo
      // podrías hacer state.productos.push(action.payload.producto)
    },
    [saveProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Exportar acciones y reducers
export const productosActions = productosSlice.actions;
export default productosSlice.reducer;