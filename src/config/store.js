import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../components/login/loginSlice";
import productosSlice from "../pages/productos/productosSlice";
import usuariosSlice from "../pages/usuarios/usuariosSlice";
import categoriasSlice from "../pages/categorias/categoriasSlice";
import snackbarSlice from "../components/snackbar/snackbarSlice";
import loadingSlice from "../components/loading/loadingSlice";
import authSlice from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    productos: productosSlice,
    usuarios: usuariosSlice,
    categorias: categoriasSlice,
    snackbar: snackbarSlice,
    loading: loadingSlice,
    auth: authSlice,
  },
});
