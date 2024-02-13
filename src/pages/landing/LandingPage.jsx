import './landingPage.css'
import backgroundLanding from "../../assets/background-landing.jpg";
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="Page">
      <div className="LandingPage-Background" style={{backgroundImage: `url(${backgroundLanding})`}}></div>
      <div className="Landing-Portada">
        <Typography className="Portada-Titulo">Reciclaje de componentes electrónicos</Typography>
        <Typography className="Portada-Leyenda">Compramos procesadores, placas, y componentes tecnológicos en deshuso</Typography>
      </div>

      <Link to="/productos" className="Portada-Action">

        <Button
          variant="contained"
          className="Action-Button"
        >VER PRODUCTOS</Button>
      </Link>
    </div>
  )
}

export default LandingPage;