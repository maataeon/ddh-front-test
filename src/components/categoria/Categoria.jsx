import PropTypes from 'prop-types';

import { Typography } from "@mui/material";
import "./categoria.css"
import { Link } from 'react-router-dom';

const Categoria = ({categoria}) => {
  return (
    <Link to={`/categorias/${categoria.id}`} className="CategoriaItem">
        <img src={categoria.image} />
        <Typography className="CategoriaItem-Label">{categoria.label}</Typography>
    </Link>
  )
}

Categoria.propTypes = {
  categoria: PropTypes.shape({
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};


export default Categoria;