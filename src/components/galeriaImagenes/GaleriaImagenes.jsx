import { useState } from "react";
import PropTypes from "prop-types";
import "./galeriaDeImagenes.css";
import config from "../../config/config";

const GaleriaDeImagenes = ({ imagenes }) => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

  const cambiarImagen = (index) => {
    setImagenSeleccionada(index);
  };

  return (
    <div>
      <div className="GaleriaImagenes-Seleccionada">
        <img
          src={`${config.apiUrl}/imagen/${imagenes[imagenSeleccionada].imagen}`}
          alt={imagenes[imagenSeleccionada].imagen}
          style={{ width: "100%" }}
        />
      </div>
      <div className="GaleriaImagenes-Lista">
        {imagenes.map((imagen, index) => (
          <div
            key={index}
            style={{ marginRight: "10px", cursor: "pointer" }}
            onClick={() => cambiarImagen(index)}
          >
            <img
              src={`${config.apiUrl}/imagen/${imagen.imagen}`}
              alt={imagen.imagen}
              className={`GaleriaImagenes-Imagen ${
                index === imagenSeleccionada
                  ? " GaleriaImagenes-MiniaturaSeleccionada"
                  : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

GaleriaDeImagenes.propTypes = {
  imagenes: PropTypes.array.isRequired,
};

export default GaleriaDeImagenes;
