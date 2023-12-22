import { InputAdornment, TextField, Typography } from "@mui/material";
import ddhLogo from "../assets/ddh-logo.png";
import './Landing.css'
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
const Landing = () => {
    return (
        <div>
            <div className="Header">
                <img src={ddhLogo} />
                <TextField

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
                    <Link to="/another-page" className="Navbar-Item">
                        <CategoryIcon />
                        <Typography>Categorias</Typography>
                    </Link>
                    <Link to="/another-page" className="Navbar-Item">
                        <ContactPageIcon />
                        <Typography>Contacto</Typography>
                    </Link>
                    <Link to="/another-page" className="Navbar-Item">
                        <LoginIcon />
                        <Typography>Ingresar</Typography>
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default Landing;