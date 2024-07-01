import { Button, Card, TextField } from "@mui/material";
import Titulo from "../titulo/Titulo";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./registro.css";
import Subtitulo from "../subtitulo/Subtitulo";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import ddhLogo from "../../assets/ddh-logo.png";
import { Link } from "react-router-dom";

const Registro = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    razon_social: "",
    cuit: "",
    provincia: "",
    pais: "",
    direccion_comercial: "",
    nombre_contacto: "",
    telefono: "",
    email: "",
    puesto: "",
    direccion_acopio: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistrarse = () => {
    dispatch(createRegistro(formData));
  };

  return (
    <div className="Registro">
      <Card className="Registro-Card">
        <Link to="/" className="Registro-Logo">
          <img src={ddhLogo} alt="Logo" />
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
                name="razon_social"
                value={formData.razon_social}
                onChange={handleChange}
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
                name="cuit"
                value={formData.cuit}
                onChange={handleChange}
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
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
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
                name="pais"
                value={formData.pais}
                onChange={handleChange}
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
                name="direccion_comercial"
                value={formData.direccion_comercial}
                onChange={handleChange}
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
                name="nombre_contacto"
                value={formData.nombre_contacto}
                onChange={handleChange}
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
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="puesto"
                value={formData.puesto}
                onChange={handleChange}
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
                name="direccion_acopio"
                value={formData.direccion_acopio}
                onChange={handleChange}
                placeholder="Ej: Calle Felix 3711"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <Subtitulo icon={<StickyNote2OutlinedIcon />}>
          Contanos brevemente tu propuesta
        </Subtitulo>
        <div className="Registro-InputItem">
          <TextField
            fullWidth
            multiline
            rows={3}
            className="Theme-TextField"
            variant="outlined"
            size="small"
            label="Mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escriba aquí su mensaje"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="Registro-Action">
          <Button
            variant="contained"
            className="Registro-Button"
            onClick={handleRegistrarse}
          >
            Registrarse
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Registro;
