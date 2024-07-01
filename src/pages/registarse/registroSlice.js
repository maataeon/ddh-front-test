// registroSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createRegistro = createAsyncThunk(
  "registro/createRegistro",
  async (registro, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/registro", registro);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const registroSlice = createSlice({
  name: "registro",
  initialState: {
    registros: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRegistro.pending, (state) => {
        state.loading = true;
      })
      .addCase(createRegistro.fulfilled, (state, action) => {
        state.loading = false;
        state.registros.push(action.payload);
      })
      .addCase(createRegistro.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default registroSlice.reducer;
