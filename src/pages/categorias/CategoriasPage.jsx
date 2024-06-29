// CategoriasPage.js

import { useState, useEffect } from "react";
import "./categoriasPage.css";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Titulo from "../../components/titulo/Titulo";
import Categoria from "./categoria/Categoria";
import { useDispatch, useSelector } from "react-redux";
import { getCategorias, createCategoria } from "./categoriasSlice";
import AddIcon from "@mui/icons-material/Add";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { showSnackbar } from "../../components/snackbar/snackbarSlice";
import {
  hideLoading,
  showLoading,
} from "../../components/loading/loadingSlice";

const CategoriasPage = () => {
  const dispatch = useDispatch();
  const { categorias } = useSelector((state) => state.categorias);
  const [open, setOpen] = useState(false);
  const [newCategoria, setNewCategoria] = useState({ name: "", image: null });

  useEffect(() => {
    initializeCategorias();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initializeCategorias = () => {
    dispatch(showLoading());
    dispatch(getCategorias({}))
      .unwrap()
      .then(() => {
        dispatch(hideLoading());
      })
      .catch((error) => {
        dispatch(hideLoading());
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategoria({ ...newCategoria, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewCategoria({ ...newCategoria, image: e.target.files[0] });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    const categoryName = newCategoria.name;
    formData.append("name", categoryName);
    formData.append("image", newCategoria.image);

    dispatch(showLoading());
    dispatch(createCategoria(formData))
      .unwrap()
      .then(() => {
        dispatch(hideLoading());
        handleClose(false);
        dispatch(
          showSnackbar({
            message: `Se guardó la categoría ${categoryName}`,
            severity: "success",
          })
        );
        initializeCategorias();
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch(
          showSnackbar({
            message: "Hubo un error al guardar la categoría",
            severity: "error",
          })
        );
      });
  };

  return (
    <div className="Page Categoria">
      <div className="Categorias-Header">
        <Titulo icon={<CategoryOutlinedIcon />}>Categoria</Titulo>
        <IconButton onClick={handleOpen}>
          <AddIcon />
        </IconButton>
      </div>
      <div className="Categorias-List">
        {categorias.length > 0 &&
          categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria} />
          ))}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar Nueva Categoria</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
            name="name"
            size="small"
            value={newCategoria.name}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ marginTop: 16 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategoriasPage;
