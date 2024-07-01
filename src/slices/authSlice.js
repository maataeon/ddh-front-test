// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../config/api";

// Thunk para verificar la autenticación
export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.checkAuth();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk para cerrar sesión
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await API.logout();
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    loading: false,
    error: null,
    usuario: null,
    perfil: null,
    permisos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isAuthenticated = true;
        state.loading = false;
        state.usuario = action.payload.usuario;
        state.perfil = action.payload.perfil;
        if (action.payload.permiso) {
          state.permisos = [action.payload.permiso];
        }
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
