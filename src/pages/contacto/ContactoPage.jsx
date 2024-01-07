import { TextField, Typography } from "@mui/material";
import Header from "../../components/header/Header";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import "./contactoPage.css"
import DatoItem from "../../components/datoItem/DatoItem";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const ContactoPage = () => {
  return (
    <div className="Page">
      <Header />
      <div className="Contacto">
        <div className="Contacto-Panel">
          <div className="Contacto-Titulo">
            <BadgeOutlinedIcon className="Titulo-Icon" />
            <Typography className="Titulo-Texto">Nuestros medios de contacto</Typography>
          </div>

          <DatoItem
            icon={LocationOnOutlinedIcon}
            label="Dirección"
            value="Av. Ashtor Bell 4682"
          />
          <DatoItem
            icon={PhoneAndroidOutlinedIcon}
            label="Teléfono"
            value="+351 687 6871"
          />
          <DatoItem
            icon={EmailOutlinedIcon}
            label="E-mail"
            value="contacto@ddh.com.ar"
          />
        </div>

        <div className="Contacto-Panel">
          <div className="Contacto-Titulo">
            <CommentOutlinedIcon className="Titulo-Icon" />
            <Typography className="Titulo-Texto">Escribinos tu consulta</Typography>
          </div>
          <div className="Contacto-InputItem">
            <TextField
              fullWidth
              className="Theme-TextField"
              variant="outlined"
              size="small"
              label="Nombre completo"
              placeholder="Nombre y Apellido"
              type="text"
              autoComplete="off"
            />
          </div>
          <div className="Contacto-InputItem">
            <TextField
              fullWidth
              className="Theme-TextField"
              variant="outlined"
              size="small"
              label="E-mail"
              placeholder="Ej: usuario@sitio.com"
              type="text"
              autoComplete="off"
            />
          </div>
          <div className="Contacto-InputItem">
            <TextField
              fullWidth
              className="Theme-TextField"
              variant="outlined"
              size="small"
              label="Telefono"
              name="ddtelefonoinput"
              placeholder="Ej: +351 687 6871"
              type="text"
              autoComplete="off"
            />
          </div>
          <div className="Contacto-InputItem">
            <TextField
              fullWidth
              multiline
              rows={5}
              className="Theme-TextField"
              variant="outlined"
              size="small"
              label="Mensaje"
              placeholder="Escriba aquí su mensaje"
              type="text"
              autoComplete="off"
            />
          </div>
        </div>

      </div>
    </div >
  )
}

export default ContactoPage;