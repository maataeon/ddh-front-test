import { useState, useEffect } from "react";
import "./categoriasPage.css";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Titulo from "../../components/titulo/Titulo";
import Categoria from "./categoria/Categoria";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategorias,
  createCategoria,
  updateCategoria,
} from "./categoriasSlice";
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
  const [newCategoria, setNewCategoria] = useState({
    idCategoria: null,
    name: "",
    image: null,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    initializeCategorias();
  }, []);

  useEffect(() => {
    // Validación del formulario
    setIsFormValid(
      newCategoria.name.trim() !== "" && newCategoria.image !== null
    );
  }, [newCategoria]);

  const handleOpenCreate = () => setOpen(true);
  const handleOpenEdit = (categoria) => {
    setNewCategoria({
      idCategoria: categoria.idCategoria,
      name: categoria.nombre,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewCategoria({
      idCategoria: null,
      name: "",
      image: null,
    });
  };

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
    if (newCategoria.idCategoria) {
      formData.append("idCategoria", newCategoria.idCategoria);
    }

    dispatch(showLoading());

    //const thunk
    const asyncThunk = newCategoria.idCategoria
      ? updateCategoria
      : createCategoria;
    dispatch(asyncThunk(formData))
      .unwrap()
      .then(() => {
        dispatch(hideLoading());
        handleClose();
        dispatch(
          showSnackbar({
            message: `Se ${
              newCategoria.idCategoria ? "modificó" : "guardó"
            } la categoría ${categoryName}`,
            severity: "success",
          })
        );
        initializeCategorias();
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch(
          showSnackbar({
            message: `Hubo un error al ${
              newCategoria.idCategoria ? "modificar" : "guardar"
            } la categoría`,
            severity: "error",
          })
        );
      });
  };

  return (
    <div className="Page Categoria">
      <div className="Categorias-Header">
        <Titulo icon={<CategoryOutlinedIcon />}>Categoria</Titulo>
        <IconButton onClick={handleOpenCreate}>
          <AddIcon />
        </IconButton>
      </div>
      <div className="Categorias-List">
        {categorias.length > 0 &&
          categorias.map((categoria) => (
            <Categoria
              key={categoria.imagen}
              categoria={categoria}
              handleOpenEdit={handleOpenEdit}
            />
          ))}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`${
          newCategoria.idCategoria ? "Editar" : "Agregar"
        } Nueva Categoria`}</DialogTitle>
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
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            disabled={!isFormValid}
          >
            {`${newCategoria.idCategoria ? "Editar" : "Agregar"}`}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategoriasPage;
