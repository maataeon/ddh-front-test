import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../components/login/loginSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer
  }
})