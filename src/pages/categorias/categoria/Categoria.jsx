import PropTypes from "prop-types";
import { Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import "./categoria.css";
import { Link } from "react-router-dom";
import { deleteCategoria, getCategorias } from "../categoriasSlice";
import EditIcon from "@mui/icons-material/Edit";
import { hideLoading } from "../../../components/loading/loadingSlice";
import { showSnackbar } from "../../../components/snackbar/snackbarSlice";
import config from "../../../config/config";
import { useState } from "react";
import ConfirmationDeleteDialog from "../confirmationDeleteDialog/ConfirmationDeleteDialog";

const Categoria = ({ categoria, handleOpenEdit }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const permisos = useSelector((state) => state.auth.permisos);

  const handleDelete = (associatedProducts) => {
    dispatch(
      deleteCategoria({
        idCategoria: categoria.idCategoria,
        associatedProducts,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(hideLoading());
        dispatch(
          showSnackbar({
            message: `Se borró la categoría ${categoria.nombre}`,
            severity: "success",
          })
        );
        setOpenModal(false);
        dispatch(getCategorias({}));
      })
      .catch((error) => {
        dispatch(hideLoading());
        showSnackbar({
          message: error.toString(),
          severity: "error",
        });
      });
  };

  return (
    <div className="CategoriaContainer">
      <Link
        to={`/categorias/${categoria.idCategoria}`}
        className="CategoriaItem"
      >
        <img
          src={`${config.apiUrl}/imagen/${categoria.imagen}`}
          alt={categoria.nombre}
        />
        <Typography className="CategoriaItem-Label">
          {categoria.nombre}
        </Typography>
      </Link>
      {permisos.includes("FULL_ADMIN") && (
        <div className="CategoriaContainer-Actions">
          <IconButton
            className="DeleteButton"
            onClick={() => setOpenModal(true)}
            aria-label="delete"
            size="small"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            className="EditButton"
            onClick={() => handleOpenEdit(categoria)}
            aria-label="edit"
            size="small"
          >
            <EditIcon />
          </IconButton>
        </div>
      )}

      <ConfirmationDeleteDialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

Categoria.propTypes = {
  categoria: PropTypes.shape({
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    idCategoria: PropTypes.string.isRequired,
    handleOpenEdit: PropTypes.func.isRequired,
  }).isRequired,
};

export default Categoria;
