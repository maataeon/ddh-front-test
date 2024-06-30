import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import "./filtroUsuarios.css";

const FiltroUsuarios = ({ setParameters, handleAlta, perfiles }) => {
  const [filters, setFilters] = useState({
    nombre: "",
    documento: "",
    telefono: "",
    estado: "",
    idPerfil: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const search = () => {
    setParameters(filters);
  };

  return (
    <div>
      <div className="UsuariosFiltro-Inputs">
        <TextField
          size="small"
          label="Razon Social"
          variant="outlined"
          name="nombre"
          value={filters.nombre}
          onChange={handleChange}
        />
        <TextField
          size="small"
          label="CUIT"
          variant="outlined"
          name="documento"
          type="number"
          value={filters.documento}
          onChange={handleChange}
        />
        <TextField
          size="small"
          label="Telefono"
          variant="outlined"
          name="telefono"
          type="number"
          value={filters.telefono}
          onChange={handleChange}
        />
        <FormControl variant="outlined" size="small">
          <InputLabel id="estado-label">Estado</InputLabel>
          <Select
            labelId="estado-label"
            name="estado"
            value={filters.estado} // Cambia este valor según el estado seleccionado
            label="Estado"
            onChange={handleChange}
          >
            <MenuItem value={1}>Activado</MenuItem>
            <MenuItem value={2}>Pendiente</MenuItem>
            <MenuItem value={3}>Desactivado</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small">
          <InputLabel id="perfil-label">Perfil</InputLabel>
          <Select
            labelId="perfil-label"
            name="idPerfil"
            value={filters.idPerfil}
            label="Perfil"
            onChange={handleChange}
          >
            {[{ idPerfil: null, nombre: "Todos" }, ...perfiles].map(
              (perfil) => (
                <MenuItem key={perfil.idPerfil} value={perfil.idPerfil}>
                  {perfil.nombre}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </div>
      <div className="UsuariosFiltro-ButtonBox">
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={handleAlta}
        >
          Alta
        </Button>
        <Button variant="contained" color="primary" onClick={search}>
          Buscar
        </Button>
      </div>
    </div>
  );
};

FiltroUsuarios.propTypes = {
  setParameters: PropTypes.func.isRequired,
  handleAlta: PropTypes.func.isRequired,
  perfiles: PropTypes.array.isRequired,
};

export default FiltroUsuarios;
