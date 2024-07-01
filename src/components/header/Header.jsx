import PropTypes from "prop-types";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ddhLogo from "../../assets/ddh-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import LoginIcon from "@mui/icons-material/Login";
import "./header.css";
import { checkAuth, logout } from "../../slices/authSlice";
import PeopleIcon from "@mui/icons-material/People";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const permisos = useSelector((state) => state.auth.permisos);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    console.log({ permisos });
  }, [permisos]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
      navigate(`/productos?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="Header">
      <Link to="/">
        <img src={ddhLogo} className="Header-Logo" />
      </Link>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Buscar producto"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyUp={handleKeyPress}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className="Navbar">
        <Link to="/categorias" className="Navbar-Item">
          <CategoryOutlinedIcon />
          <Typography>Categorias</Typography>
        </Link>
        <Link to="/contacto" className="Navbar-Item">
          <ContactPageOutlinedIcon />
          <Typography>Contacto</Typography>
        </Link>
        {isAuthenticated ? (
          <>
            {permisos.includes("FULL_ADMIN") && (
              <Link to="/usuarios" className="Navbar-Item">
                <PeopleIcon />
                <Typography>Usuarios</Typography>
              </Link>
            )}
            <div className="Navbar-Item" onClick={handleLogout}>
              <LoginIcon />
              <Typography>Salir</Typography>
            </div>
          </>
        ) : (
          <Link to="/login" className="Navbar-Item">
            <LoginIcon />
            <Typography>Ingresar</Typography>
          </Link>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
