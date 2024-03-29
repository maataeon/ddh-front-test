import { Button, TextField } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';
import "./usuariosFiltro.css";

const UsuariosFiltro = ({ setParameters }) => {
  const [razonSocial, setRazonSocial] = useState('');
  const [cuit, setCuit] = useState('');
  const [telefono, setTelefono] = useState('');
  const [estado, setEstado] = useState('');
  const [tipoPerfil, setTipoPerfil] = useState('');

  // Function to handle the search
  const search = () => {
    // Gather input values into a JSON object
    const searchParams = {
      razonSocial,
      cuit,
      telefono,
      estado,
      tipoPerfil,
    };
    setParameters(searchParams);
  };

  return (
    <div>
      <div className="UsuariosFiltro-Inputs">
        {/* Text Input Fields */}
        <TextField
          size="small"
          label="Razon Social"
          variant="outlined"
          value={razonSocial}
          onChange={(e) => setRazonSocial(e.target.value)}
        />
        <TextField
          size="small"
          label="CUIT"
          variant="outlined"
          value={cuit}
          onChange={(e) => setCuit(e.target.value)}
        />
        <TextField
          size="small"
          label="Telefono"
          variant="outlined"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <TextField
          size="small"
          label="Estado"
          variant="outlined"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
        <TextField
          size="small"
          label="Tipo de Perfil"
          variant="outlined"
          value={tipoPerfil}
          onChange={(e) => setTipoPerfil(e.target.value)}
        />

      </div>
      {/* Search Button */}
      <div className="UsuariosFiltro-ButtonBox">
        <Button variant="contained" color="primary" onClick={search}>
          Buscar
        </Button>
      </div>
    </div>
  );
}

UsuariosFiltro.propTypes = {
  setParameters: PropTypes.func.isRequired,
};

export default UsuariosFiltro;