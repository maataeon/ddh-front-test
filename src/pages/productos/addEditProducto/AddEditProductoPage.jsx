import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerfiles, saveProduct } from "../productosSlice";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  Typography,
} from "@mui/material";
import "./addEditProductoPage.css";
import { getCategorias } from "../../categorias/categoriasSlice";

const AddEditProductoPage = () => {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categorias.categorias);
  const perfiles = useSelector((state) => state.productos.perfiles);

  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    idProducto: 0,
    idPerfil: 1,
    idCategoria: 1,
    estado: 1,
  });

  const [errors, setErrors] = useState({
    nombre: false,
    descripcion: false,
    precio: false,
    idCategoria: false,
    idPerfil: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
    setErrors({ ...errors, [name]: value === "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      setErrors({
        nombre: producto.nombre === "",
        descripcion: producto.descripcion === "",
        precio: producto.precio === "",
        idCategoria: producto.idCategoria === "",
        idPerfil: producto.idPerfil === "",
      });
      return;
    }
    try {
      // Dispatch para guardar el nuevo producto
      await dispatch(saveProduct(producto));
      // Lógica adicional después de guardar el producto si es necesario
      console.log("Producto guardado con éxito!");
      // Limpiar el formulario después de guardar el producto
      setProducto({
        nombre: "",
        descripcion: "",
        precio: 0,
        idProducto: 0,
        idPerfil: 1,
        idCategoria: 1,
        estado: 1,
      });
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  const isFormValid = () => {
    return (
      producto.nombre !== "" &&
      producto.descripcion !== "" &&
      producto.precio > 0 &&
      producto.idCategoria !== "" &&
      producto.idPerfil !== ""
    );
  };

  useEffect(() => {
    dispatch(getCategorias());
    dispatch(getPerfiles());
  }, [dispatch]);

  return (
    <div className="Page">
      <Card className="AddEditProductoPage-Card">
        <CardHeader title="Nuevo Producto" />
        <CardContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              fullWidth
              size="small"
              margin="normal"
              label="Nombre"
              name="nombre"
              value={producto.nombre}
              onChange={handleInputChange}
              error={errors.nombre}
              helperText={errors.nombre ? "Nombre es requerido" : ""}
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              label="Descripción"
              name="descripcion"
              value={producto.descripcion}
              onChange={handleInputChange}
              error={errors.descripcion}
              helperText={errors.descripcion ? "Descripción es requerida" : ""}
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              label="Precio"
              name="precio"
              type="number"
              value={producto.precio}
              onChange={handleInputChange}
              error={errors.precio}
              helperText={errors.precio ? "Precio es requerido" : ""}
            />
            <FormControl fullWidth margin="normal" error={errors.idCategoria}>
              <InputLabel id="categorias-label">Categoria</InputLabel>
              <Select
                size="small"
                labelId="categorias-label"
                name="idCategoria"
                value={producto.idCategoria}
                onChange={handleInputChange}
              >
                {categorias.map((categoria) => (
                  <MenuItem
                    key={categoria.idCategoria}
                    value={categoria.idCategoria}
                  >
                    {categoria.nombre}
                  </MenuItem>
                ))}
              </Select>
              {errors.idCategoria && (
                <Typography color="error" variant="caption">
                  Categoria es requerida
                </Typography>
              )}
            </FormControl>
            <FormControl fullWidth margin="normal" error={errors.idPerfil}>
              <InputLabel id="perfil-label">Perfil</InputLabel>
              <Select
                size="small"
                labelId="perfil-label"
                name="idPerfil"
                value={producto.idPerfil}
                onChange={handleInputChange}
              >
                {perfiles.map((perfil) => (
                  <MenuItem key={perfil.idPerfil} value={perfil.idPerfil}>
                    {perfil.nombre}
                  </MenuItem>
                ))}
              </Select>
              {errors.idPerfil && (
                <Typography color="error" variant="caption">
                  Perfil es requerido
                </Typography>
              )}
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isFormValid()}
            >
              Guardar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddEditProductoPage;
