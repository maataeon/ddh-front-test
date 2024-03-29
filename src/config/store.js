import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/login/loginSlice';
import productosReducer from '../components/producto/productosSlice';
import usuariosReducer from '../components/usuarios/usuariosSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    productos: productosReducer,
    usuarios: usuariosReducer
  }
})