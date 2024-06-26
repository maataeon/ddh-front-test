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

const CategoriasPage = () => {
  const dispatch = useDispatch();
  const { categorias, loading } = useSelector((state) => state.categorias);
  const [open, setOpen] = useState(false);
  const [newCategoria, setNewCategoria] = useState({ name: "", image: null });

  useEffect(() => {
    dispatch(getCategorias({}));
  }, [dispatch]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategoria({ ...newCategoria, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewCategoria({ ...newCategoria, image: e.target.files[0] });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", newCategoria.name);
    formData.append("image", newCategoria.image);
    dispatch(createCategoria(formData))
      .unwrap()
      .then(() => {
        handleClose(false);
        dispatch(getCategorias({}));
      })
      .catch((error) => {});
  };

  return (
    <div className="Page Categoria">
      <div className="Categorias-Header">
        <Titulo icon={<CategoryOutlinedIcon />}>Categoria</Titulo>
        <IconButton onClick={handleOpen}>
          <AddIcon />
        </IconButton>
      </div>
      {loading && <CircularProgress />}
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
