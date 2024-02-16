import { Button, TextField, Typography } from "@mui/material";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import "./contactoPage.css"
import DatoItem from "../../components/datoItem/DatoItem";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useState } from "react";
const ContactoPage = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [isNombreValid, setIsNombreValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTelefonoValid, setIsTelefonoValid] = useState(false);
  const [isMensajeValid, setIsMensajeValid] = useState(false);

  const handleRegistrarse = () => {
    const consulta = `DHH - Consulta
Nombre y Apellido: ${nombre}
E-mail: ${email}
Teléfono: ${telefono}
    
${mensaje}`;
    const urlEncodedMensaje = encodeURIComponent(consulta);
    console.log(urlEncodedMensaje);
    const whatsappUrl = `https://wa.me/5491157508133?text=${urlEncodedMensaje}`;
    window.location.href = whatsappUrl;
  }
  const isFormValid = () => {
    return isNombreValid && isEmailValid && isTelefonoValid && isMensajeValid;
  };

  return (
    <div className="Page">
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
              required
              className="Theme-TextField"
              variant="outlined"
              size="small"
              label="Nombre completo"
              placeholder="Nombre y Apellido"
              type="text"
              autoComplete="off"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                setIsNombreValid(!!e.target.value.trim());
              }}
            />
          </div>
          <div className="Contacto-InputItem">
            <TextField
              fullWidth
              required
              className="Theme-TextField"
              variant="outlined"
              size="small"
              label="E-mail"
              placeholder="Ej: usuario@sitio.com"
              type="text"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailValid(!!e.target.value.trim());
              }}
            />
          </div>
          <div className="Contacto-InputItem">
            <TextField
              fullWidth
              required
              className="Theme-TextField"
              variant="outlined"
              size="small"
              label="Telefono"
              name="ddtelefonoinput"
              placeholder="Ej: +351 687 6871"
              type="text"
              autoComplete="off"
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
                setIsTelefonoValid(!!e.target.value.trim());
              }}
            />
          </div>
          <div className="Contacto-InputItem">
            <TextField
              fullWidth
              required
              multiline
              rows={5}
              className="Theme-TextField"
              variant="outlined"
              size="small"
              label="Mensaje"
              placeholder="Escriba aquí su mensaje"
              type="text"
              autoComplete="off"
              value={mensaje}
              onChange={(e) => {
                setMensaje(e.target.value);
                setIsMensajeValid(!!e.target.value.trim());
              }}
            />
          </div>
          <div className="Contacto-Action">
            <Button
              variant="contained"
              className="Contacto-Button"
              disabled={!isFormValid()}
              onClick={handleRegistrarse}>Enviar</Button>
            <Typography color={isFormValid() ? "textSecondary" : "error"}>* Campos requeridos</Typography>
          </div>
        </div>

      </div>
    </div >
  )
}

export default ContactoPage;