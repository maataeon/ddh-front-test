import "./productoPreview.css";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
//import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import { Link } from "react-router-dom";
import PropTypesShapes from "../../../config/PropTypesShapes";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../productosSlice";
import { hideLoading } from "../../../components/loading/loadingSlice";
import { showSnackbar } from "../../../components/snackbar/snackbarSlice";
import PropTypes from "prop-types";
import ConfirmationDialog from "../../../components/confirmationDialog/ConfirmationDialog";
import { useState } from "react";

const ProductoPreview = ({ producto, initializeProductos }) => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    // Acción que se ejecutará al hacer clic en el botón
    dispatch(deleteProduct(producto))
      .unwrap()
      .then(() => {
        dispatch(hideLoading());
        dispatch(
          showSnackbar({
            message: `Se borró el producto ${producto.nombre}`,
            severity: "success",
          })
        );
        setOpenModal(false);
        initializeProductos();
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch(
          showSnackbar({
            message: "Hubo un problema al borrar el producto",
            severity: "error",
          })
        );
      });
  };

  const handleEdit = () => {};
  return (
    <div className="Item">
      <Link to={`/producto/${producto.idProducto}`} className="Item-Link">
        <div className="Item-Titulo">
          <div className="Item-Portada">
            <PhotoOutlinedIcon />
          </div>
          <div>{producto.nombre}</div>
        </div>
        <div className="Item-Precio">$ {producto?.precio} /kg</div>
      </Link>
      <div className="Item-Acciones">
        <IconButton onClick={handleEdit} aria-label="delete">
          <CreateOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => setOpenModal(true)} aria-label="delete">
          <DeleteOutlineOutlinedIcon />
        </IconButton>
        {/*<DragIndicatorOutlinedIcon />*/}
      </div>
      <ConfirmationDialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

ProductoPreview.propTypes = {
  producto: PropTypesShapes.productoShape.isRequired,
  initializeProductos: PropTypes.func,
};

export default ProductoPreview;
