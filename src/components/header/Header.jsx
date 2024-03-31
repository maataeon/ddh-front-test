import PropTypes from 'prop-types';
import { InputAdornment, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ddhLogo from "../../assets/ddh-logo.png";
import SearchIcon from '@mui/icons-material/Search';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LoginIcon from '@mui/icons-material/Login';
import './header.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const token = useSelector((state) => state.login.token); // Accede al token desde el estado global

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
      navigate(`/productos?q=${encodeURIComponent(searchTerm)}`);
    }
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
        <Link to={token ? "/login?clear" : "/login"} className="Navbar-Item">
          <LoginIcon />
          <Typography>{token ? "Salir" : "Ingresar"}</Typography>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};


export default Header;