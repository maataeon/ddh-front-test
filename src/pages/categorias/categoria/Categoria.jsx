import PropTypes from "prop-types";

import { Typography } from "@mui/material";
import "./categoria.css";
import { Link } from "react-router-dom";

const Categoria = ({ categoria }) => {
  return (
    <Link to={`/categorias/${categoria.idCategoria}`} className="CategoriaItem">
      <img src={categoria.image} />
      <Typography className="CategoriaItem-Label">
        {categoria.nombre}
      </Typography>
    </Link>
  );
};

Categoria.propTypes = {
  categoria: PropTypes.shape({
    image: PropTypes.object,
    nombre: PropTypes.string.isRequired,
    idCategoria: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categoria;
