import { InputAdornment, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ddhLogo from "../../assets/ddh-logo.png";
import SearchIcon from '@mui/icons-material/Search';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LoginIcon from '@mui/icons-material/Login';
import './header.css'

const Header = () => {
  return (

    <div className="Header">
      <Link to="/">
        <img src={ddhLogo} className="Header-Logo" />
      </Link>
      <TextField
        className="Header-InputSearch"
        variant="outlined"
        size="small"
        placeholder="Buscar producto"
        type="text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start"><SearchIcon /></InputAdornment>
          )
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
        <Link to="/login" className="Navbar-Item">
          <LoginIcon />
          <Typography>Ingresar</Typography>
        </Link>
      </div>
    </div>
  );
};

export default Header;