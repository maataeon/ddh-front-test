import PropTypes from "prop-types";

import { Typography } from "@mui/material";
import "./categoria.css";
import { Link } from "react-router-dom";

const Categoria = ({ categoria }) => {
  return (
    <Link to={`/categorias/${categoria.idCategoria}`} className="CategoriaItem">
      <img src={`http://localhost:8080/php/imagen/${categoria.imagen}`} />
      <Typography className="CategoriaItem-Label">
        {categoria.nombre}
      </Typography>
    </Link>
  );
};

Categoria.propTypes = {
  categoria: PropTypes.shape({
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    idCategoria: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categoria;
