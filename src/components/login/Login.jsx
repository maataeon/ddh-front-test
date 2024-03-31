import { useEffect } from 'react';
import ddhLogo from "../../assets/ddh-logo.png";
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import { Button, Card, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk, setPassword, setUsername, setError, clearError, clearSuccess, logout } from './loginSlice';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const password = useSelector((state) => state.login.password);
  const error = useSelector((state) => state.login.error);
  const token = useSelector((state) => state.login.token);

  const handleLogin = async () => {
    const userData = {
      usuario: username,
      password
    };

    await dispatch(loginThunk(userData));

  };

  const handleUsernameInputChange = (e) => {
    const value = e.target.value;
    dispatch(setUsername(value));
  };

  const handlePasswordInputChange = (e) => {
    const value = e.target.value;
    dispatch(setPassword(value));
  };

  useEffect(() => {
    if (error) {
      // Si hay un error de autenticación, muestra el snackbar
      // Puedes ajustar el mensaje y la duración según tus necesidades
      // Además, puedes añadir lógica adicional para manejar el error
      console.log("Error de autenticación:", error);
    }
  }, [error]);

  useEffect(() => {
    if (token) {
      const params = new URLSearchParams(window.location.search);
      console.log({params})
      if (params.get('clear') === 'true') {
        dispatch(logout());
      } else {
        console.log("login success");
        const params = new URLSearchParams(window.location.search);
        const redirectParam = params.get('redirect');
        if (redirectParam) {
          // Si hay un parámetro de redirección, navega a esa URL
          navigate(redirectParam);
        } else {
          // Si no hay parámetro de redirección, navega a '/usuarios' por defecto
          navigate('/usuarios');
        }
      }
    }
  }, [token, navigate, dispatch]);

  const handleCloseSnackbar = () => {
    dispatch(clearError());
  };

  return (
    <div className="Login-Container">
      <Card className="Login-Card" variant="outlined" sx={{ width: 300 }}>
        <Link to="/">
          <img src={ddhLogo} className="Login-Logo" />
        </Link>
        <div className="Login-Title">
          <Typography align="center" fontSize="2rem">Ingresar</Typography>
          <Typography align="center">Sistema de cotización</Typography>
        </div>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          name="ddhusuarioinput"
          label="Usuario"
          placeholder="Usuario"
          type="text"
          value={username}
          onChange={handleUsernameInputChange}
          startDecorator={<PersonIcon />}
          autoComplete="off"
        />
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          name="ddhcontraseñainput"
          label="Contraseña"
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={handlePasswordInputChange}
          startDecorator={<PasswordIcon />}
          autoComplete="off"
        />
        <Button
          variant="contained"
          className="Login-IngresarButton"
          onClick={handleLogin}>Ingresar</Button>

        <Link to="/registrarse" className="Login-RegistrarseLink">Registrarse</Link>
      </Card>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Error de autenticación. Por favor, verifique sus credenciales."
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </div>
  );
};

export default Login;
