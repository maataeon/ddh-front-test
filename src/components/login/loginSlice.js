import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../config/api";

const initialState = {
  token: null,
  username: "",
  password: "",
  error: null, // Estado para manejar errores de autenticación
  success: null, // Estado para manejar autenticacion exitosa de autenticación
};

export const logout = createAsyncThunk(
  "login/logout",
  async (data, thunkAPI) => {
    try {
      // Llama al método para limpiar el token
      API.clearToken();
      // Restablece otros estados si es necesario
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login/loginThunk",
  async (userData, thunkAPI) => {
    try {
      const response = await API.login(userData);
      console.log({ response });
      return response.data;
    } catch (error) {
      // Captura el error y lo pasa al estado
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      // Actualiza el estado con el error de autenticación
      state.token = action.payload.tkn;
      state.success = action.payload;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      // Actualiza el estado con el error de autenticación
      state.error = action.payload;
    });
  },
});

export const { setUsername, setPassword, setError, clearError, clearSuccess } =
  loginSlice.actions;

export default loginSlice.reducer;
