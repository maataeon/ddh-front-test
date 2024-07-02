import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../config/api";

// Definir una acción asincrónica para obtener usuarios
export const fetchUsuarios = createAsyncThunk(
  "usuarios/fetchUsuarios",
  async (parameters, { rejectWithValue }) => {
    try {
      const data = await API.getUsuarios(parameters);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createUser = createAsyncThunk(
  "usuarios/createUser",
  async (parameters, { rejectWithValue }) => {
    try {
      const data = await API.createUser(parameters);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "usuarios/deleteUser",
  async (user, { rejectWithValue }) => {
    try {
      const data = await API.deleteUser(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define el slice
const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    usuarios: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Otros reducers si es necesario
  },
  extraReducers: {
    // Manejar la acción asincrónica fetchUsuarios
    [fetchUsuarios.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUsuarios.fulfilled]: (state, action) => {
      state.loading = false;
      state.usuarios = action.payload.msg.data; // Ajusta la asignación según la estructura de tu API
    },
    [fetchUsuarios.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Exportar acciones y reducers
export const usuariosActions = usuariosSlice.actions;
export default usuariosSlice.reducer;
