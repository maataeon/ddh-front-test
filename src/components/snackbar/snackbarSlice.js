import { createSlice } from "@reduxjs/toolkit";
import { createCategoria } from "../../pages/categorias/categoriasSlice";

const initialState = {
  open: false,
  message: "",
  severity: "info",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    hideSnackbar: (state) => {
      state.open = false;
      state.message = "";
      state.severity = "info";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCategoria.fulfilled, (state) => {
        state.open = true;
        state.message = "La categoría se guardó correctamente";
        state.severity = "success";
      })
      .addCase(createCategoria.rejected, (state) => {
        state.open = true;
        state.message = "Hubo un error al guardar la categoría";
        state.severity = "warning";
      });
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
