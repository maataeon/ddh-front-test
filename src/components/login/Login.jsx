import ddhLogo from "../../assets/ddh-logo.png";
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk, setPassword, setUsername } from './loginSlice';
import './login.css';
import { Button, Card, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.login.username);
  const password = useSelector((state) => state.login.password);



  const handleLogin = async () => {
    const userData = {
      usuario: username,
      password,
      API_KEY: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXByZXNhIjoiMSJ9.3GKuIwus_8PLyG8JqT00BVx3sMnW9ohBlkES23Fn4MM"
    };
  
    console.log({ userData })
    // Despacha la acción de inicio de sesión
    await dispatch(loginThunk(userData));
  
    const params = new URLSearchParams(window.location.search);
    const redirectParam = params.get('redirect');
    if (redirectParam) {
      // Si hay un parámetro de redirección, navega a esa URL
      navigate(redirectParam);
    } else {
      // Si no hay parámetro de redirección, navega a '/usuarios' por defecto
      navigate('/usuarios');
    }
  };

  const handleUsernameInputChange = (e) => {
    const value = e.target.value;
    dispatch(setUsername(value));
  };

  const handlePasswordInputChange = (e) => {
    const value = e.target.value;
    dispatch(setPassword(value));
  };

  return <div className="Login-Container">
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
  </div>;
};

export default Login;