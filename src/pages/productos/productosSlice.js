// productosSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../config/api";

export const fetchProductos = createAsyncThunk(
  "productos/fetchProductos",
  async (criteria, { rejectWithValue }) => {
    try {
      const data = await API.getProductos(criteria);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPerfiles = createAsyncThunk(
  "productos/getPerfiles",
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.getPerfiles();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductoDetail = createAsyncThunk(
  "productos/fetchProductoDetail",
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
  "productos/saveProduct",
  async (product, { rejectWithValue }) => {
    try {
      const response = await API.saveProduct(product);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productosSlice = createSlice({
  name: "productos",
  initialState: {
    productos: [],
    perfiles: [],
    producto: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // save productos
    [saveProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [saveProduct.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [saveProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // lista productos
    [fetchProductos.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProductos.fulfilled]: (state, action) => {
      state.productos = action.payload.msg.data;
      state.loading = false;
    },
    [fetchProductos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // lista productos
    [getPerfiles.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getPerfiles.fulfilled]: (state, action) => {
      state.perfiles = action.payload;
      state.loading = false;
    },
    [getPerfiles.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // detail productos
    [fetchProductoDetail.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProductoDetail.fulfilled]: (state, action) => {
      state.producto = action.payload.msg;
      state.loading = false;
    },
    [fetchProductoDetail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const productosActions = productosSlice.actions;
export default productosSlice.reducer;
