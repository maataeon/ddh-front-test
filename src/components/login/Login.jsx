import { useEffect, useState } from "react";
import ddhLogo from "../../assets/ddh-logo.png";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, clearError, logout } from "./loginSlice";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.login.error);
  const success = useSelector((state) => state.login.success);

  const handleLogin = async () => {
    const userData = {
      usuario: username,
      password,
    };
    console.log({ userData });
    dispatch(loginThunk(userData))
      .unwrap()
      .then(() => {
        setUsername("");
        setPassword("");

        const params = new URLSearchParams(window.location.search);
        const redirectParam = params.get("redirect");
        if (redirectParam) {
          navigate(redirectParam);
        } else {
          navigate("/categorias");
        }
      })
      .catch(() => {
        setUsername("");
        setPassword("");
      });
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
      console.log("Error de autenticación:", error);
    }
  }, [error]);

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
          <Typography align="center" fontSize="2rem">
            Ingresar
          </Typography>
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
          autoComplete="off"
        />
        <Button
          variant="contained"
          className="Login-IngresarButton"
          onClick={handleLogin}
        >
          Ingresar
        </Button>

        <Link to="/registrarse" className="Login-RegistrarseLink">
          Registrarse
        </Link>
      </Card>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Error de autenticación. Por favor, verifique sus credenciales."
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
};

export default Login;
