import { useState } from 'react';
import PropTypes from 'prop-types';
import "./galeriaDeImagenes.css"

const GaleriaDeImagenes = ({ imagenes }) => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

  const cambiarImagen = (index) => {
    setImagenSeleccionada(index);
  };

  return (
    <div>
      <div className="GaleriaImagenes-Seleccionada">
        <img src={imagenes[imagenSeleccionada]} alt={`Imagen ${imagenSeleccionada + 1}`} style={{ width: '100%' }} />
      </div>
      <div className="GaleriaImagenes-Lista">
        {imagenes.map((imagen, index) => (
          <div key={index} style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => cambiarImagen(index)}>
            <img
              src={imagen}
              alt={`Imagen ${index + 1}`}
              className={`GaleriaImagenes-Imagen ${index === imagenSeleccionada ? ' GaleriaImagenes-MiniaturaSeleccionada':''}`}
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