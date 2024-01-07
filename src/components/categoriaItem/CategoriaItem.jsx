import PropTypes from 'prop-types';

import { Typography } from "@mui/material";
import "./categoriaItem.css"

const CategoriaItem = ({image, label}) => {
  return (
    <div className="CategoriaItem">
        <img src={image} />
        <Typography className="CategoriaItem-Label">{label}</Typography>
    </div>
  )
}

CategoriaItem.propTypes = {
    image: PropTypes.oneOfType([
      PropTypes.string, // Válido si image es una cadena (por ejemplo, URL de la imagen)
      PropTypes.object, // Válido si image es un objeto (por ejemplo, una importación de un archivo)
    ]).isRequired,
    label: PropTypes.string.isRequired,
};

export default CategoriaItem;