import { Button, Card, TextField } from "@mui/material";
import Titulo from "../titulo/Titulo";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import "./registro.css";
import Subtitulo from "../subtitulo/Subtitulo";
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import ddhLogo from "../../assets/ddh-logo.png";
import { Link } from "react-router-dom";

const Registro = () => {

  const handleRegistrarse = () => { };

  return (
    <div className="Registro">
      <Card className="Registro-Card">
        <Link to="/" className="Registro-Logo">
          <img src={ddhLogo} />
        </Link>
        <Titulo icon={<EditOutlinedIcon />}>Registrate con tus datos</Titulo>
        <div className="Registro-Datos">
          <div className="Registro-Comercial">
            <Subtitulo icon={<ApartmentOutlinedIcon />}>Comercial</Subtitulo>
            <div className="Registro-InputItem">
              <TextField
                fullWidth
                className="Theme-TextField"
                variant="outlined"
                size="small"
                label="Razón Social"
                placeholder="Ej: Recicladora de Electronicos"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="Registro-InputItem">
              <TextField
                fullWidth
                className="Theme-TextField"
                variant="outlined"
                size="small"
                label="Cuit"
                placeholder="Ej: 34244524925"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="Registro-InputItem">
              <TextField
                fullWidth
                className="Theme-TextField"
                variant="outlined"
                size="small"
                label="Provincia"
                placeholder="Ej: Córdoba"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="Registro-InputItem">
              <TextField
                fullWidth
                className="Theme-TextField"
                variant="outlined"
                size="small"
                label="País"
                placeholder="Ej: Argentina"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="Registro-InputItem">
              <TextField
                fullWidth
                className="Theme-TextField"
                variant="outlined"
                size="small"
                label="Dirección comercial"
                placeholder="Ej: Calle Allix 5844"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="Registro-Contacto">
            <Subtitulo icon={<PersonOutlineOutlinedIcon />}>Contacto</Subtitulo>
            <div className="Registro-InputItem">
              <TextField
                fullWidth
                className="Theme-TextField"
                variant="outlined"
                size="small"
                label="Nombre"
                placeholder="Ej: Romina Garcia"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="Registro-InputItem">
              <TextField
                fullWidth
                className="Theme-TextField"
                variant="outlined"
                size="small"
                label="Teléfono"
                placeholder="Ej: +54 351 54485"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="Registro-InputItem">
              <TextField
                fullWidth
                className="Theme-TextField"
                variant="outlined"
                size="small"
                label="Mail"
                placeholder="Ej: empresa@dominio.com"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="Registro-InputItem">
              <TextField
                fullWidth
                className="Theme-TextField"
                variant="outlined"
                size="small"
                label="Puesto"
                placeholder="Ej: Director"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="Registro-InputItem">
              <TextField
                fullWidth
                className="Theme-TextField"
                variant="outlined"
                size="small"
                label="Dirección de Acopio"
                placeholder="Ej: Calle Felix 3711"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <Subtitulo icon={<StickyNote2OutlinedIcon />}>Contanos brevemente tu propuesta</Subtitulo>
        <div className="Registro-InputItem">
          <TextField
            fullWidth
            multiline
            rows={3}
            className="Theme-TextField"
            variant="outlined"
            size="small"
            label="Mensaje"
            placeholder="Escriba aquí su mensaje"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="Registro-Action">
          <Button
            variant="contained"
            className="Registro-Button"
            onClick={handleRegistrarse}>Registrarse</Button>
        </div>
      </Card>
    </div>
  )
}

export default Registro;