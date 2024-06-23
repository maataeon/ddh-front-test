import PropTypes from "prop-types";
import { Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import "./categoria.css";
import { Link } from "react-router-dom";
import { deleteCategoria } from "../categoriasSlice";
import EditIcon from "@mui/icons-material/Edit";

const Categoria = ({ categoria }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCategoria({ idCategoria: categoria.idCategoria }));
  };

  return (
    <div className="CategoriaContainer">
      <Link
        to={`/categorias/${categoria.idCategoria}`}
        className="CategoriaItem"
      >
        <img
          src={`http://localhost:8080/php/imagen/${categoria.imagen}`}
          alt={categoria.nombre}
        />
        <Typography className="CategoriaItem-Label">
          {categoria.nombre}
        </Typography>
      </Link>
      <div className="CategoriaContainer-Actions">
        <IconButton
          className="DeleteButton"
          onClick={handleDelete}
          aria-label="delete"
          size="small"
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          className="EditButton"
          onClick={handleDelete}
          aria-label="edit"
          size="small"
        >
          <EditIcon />
        </IconButton>
      </div>
    </div>
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
