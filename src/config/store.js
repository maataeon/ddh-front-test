import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/login/loginSlice";
import productosReducer from "../components/producto/productosSlice";
import usuariosReducer from "../pages/usuarios/usuariosSlice";
import categoriasReducer from "../pages/categorias/categoriasSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    productos: productosReducer,
    usuarios: usuariosReducer,
    categorias: categoriasReducer,
  },
});
