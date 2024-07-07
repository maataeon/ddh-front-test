import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductoDetail,
  getPerfiles,
  saveProduct,
  updateProduct,
} from "../productosSlice";
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
  IconButton,
} from "@mui/material";
import "./addEditProductoPage.css";
import { getCategorias } from "../../categorias/categoriasSlice";
import {
  hideLoading,
  showLoading,
} from "../../../components/loading/loadingSlice";
import { showSnackbar } from "../../../components/snackbar/snackbarSlice";
import { useParams, useSearchParams } from "react-router-dom";
import config from "../../../config/config";
import DeleteIcon from "@mui/icons-material/Delete";

const AddEditProductoPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const idCategoria = searchParams.get("idCategoria");

  const categorias = useSelector((state) => state.categorias.categorias);
  const perfiles = useSelector((state) => state.productos.perfiles);

  const [precios, setPrecios] = useState([{ idPerfil: 1, precio: "" }]);
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    idProducto: null,
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

  const { productoId } = useParams();

  const initializeProducto = useCallback(() => {
    if (productoId && productoId.trim()) {
      dispatch(showLoading());
      dispatch(fetchProductoDetail(productoId))
        .unwrap()
        .then((response) => {
          dispatch(hideLoading());
          setProducto({ ...response.msg });
          setPrecios([
            ...(response.msg.precios.map((precio) => ({ ...precio })) ?? []),
          ]);
          setImages([
            ...(response.msg.images.map((image) => ({ ...image })) ?? []),
          ]);
          setPreviews([
            ...(response.msg.images.map(
              (image) => `${config.apiUrl}/imagen/${image.imagen}`
            ) ?? []),
          ]);
        })
        .catch((error) => {
          dispatch(hideLoading());
        });
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
    setErrors({ ...errors, [name]: value === "" });
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      idImagen: null,
      uuid: null,
    }));
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
    setPreviews([...previews, ...newPreviews]);
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviews(newPreviews);
  };

  const handleChangePrecios = (index, event) => {
    const { name, value } = event.target;
    const nuevosPrecios = [...precios];
    nuevosPrecios[index][name] = value;
    setPrecios(nuevosPrecios);
  };

  const handleAddPrecio = () => {
    if (getNextCategory()) {
      setPrecios([...precios, { idPerfil: getNextCategory(), precio: "" }]);
    } else {
      dispatch(
        showSnackbar({
          message: `No hay perfiles disponibles para seleccionar`,
          severity: "error",
        })
      );
    }
  };

  const getNextCategory = () => {
    const filerPerfiles = perfiles.filter((perfil) => !perfilInUse(perfil));
    return filerPerfiles[0]?.idPerfil;
  };

  const perfilInUse = (perfil) => {
    return precios.some((precio) => precio.idPerfil === perfil.idPerfil);
  };

  const handleRemovePrecio = (index) => {
    if (precios.length > 1) {
      const nuevosPrecios = precios.filter((_, i) => i !== index);
      setPrecios(nuevosPrecios);
    } else {
      dispatch(
        showSnackbar({
          message: `Debe existir al menos una relación precio x producto`,
          severity: "error",
        })
      );
    }
  };

  const handleSubmit = (event) => {
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
    const formData = new FormData();
    formData.append(
      "producto",
      JSON.stringify({
        ...producto,
        images: images.filter((img) => img.idImagen).map((img) => img.idImagen),
        precios,
      })
    );
    images.forEach((image) => {
      if (image.file) {
        formData.append("images[]", image.file); // Asegúrate de usar "images[]" para subir múltiple
      }
    });

    const asyncThunk = productoId ? updateProduct : saveProduct;
    dispatch(showLoading());
    dispatch(asyncThunk(formData))
      .unwrap()
      .then((response) => {
        dispatch(hideLoading());
        dispatch(
          showSnackbar({
            message: (
              <div className="AddEditProductoPage-Snackbar">
                {`Se ${productoId ? "modificó" : "guardó"} `}
                <a
                  className="AddEditProductoPage-Link"
                  href={`/producto/${response.idProducto}`}
                >{`${producto.nombre}`}</a>
                <a
                  className="AddEditProductoPage-Link"
                  href={`/categorias/${response.idCategoria}`}
                >
                  {"(ir a la categoría)"}
                </a>
              </div>
            ),
            severity: "success",
          })
        );

        setProducto({
          nombre: "",
          descripcion: "",
          precio: 0,
          idProducto: 0,
          idPerfil: 1,
          idCategoria: 1,
          estado: 1,
        });
        setImages([]);
        setPreviews([]);
        initializeProducto();
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch(
          showSnackbar({
            message: `Hubo un problema al ${
              productoId ? "modificar" : "guardar"
            } el producto: ${error.message}`,
            severity: "error",
          })
        );
      });
  };

  const isFormValid = () => {
    return (
      producto.nombre !== "" &&
      producto.descripcion !== "" &&
      producto.idCategoria !== "" &&
      precios.some((precio) => precio.idPerfil && precio.precio) &&
      (images.length > 0 || previews.length > 0)
    );
  };

  const initializeCombos = useCallback(() => {
    dispatch(getCategorias())
      .unwrap()
      .then((response) => {
        if (idCategoria) {
          setProducto({ ...producto, idCategoria });
        }
      });
    dispatch(getPerfiles());
  }, []);

  useEffect(() => {
    initializeCombos();
  }, [initializeCombos]);

  useEffect(() => {
    initializeProducto();
  }, [initializeProducto]);

  return (
    <div className="Page">
      <div className="AddEditProductoPage-Card">
        <CardHeader title={`${productoId ? "Editar" : "Nuevo"} Producto`} />
        <CardContent>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
            {precios.map((precio, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <FormControl
                  fullWidth
                  margin="normal"
                  error={!!errors.idPefil}
                  sx={{ mr: 1 }}
                >
                  <InputLabel id={`perfil-label-${index}`}>Perfil</InputLabel>
                  <Select
                    fullWidth
                    size="small"
                    labelId={`perfil-label-${index}`}
                    name="idPerfil"
                    value={precio.idPerfil}
                    onChange={(event) => handleChangePrecios(index, event)}
                  >
                    {perfiles.map((perfil) => (
                      <MenuItem
                        key={perfil.idPerfil}
                        value={perfil.idPerfil}
                        disabled={perfilInUse(perfil)}
                      >
                        {perfil.nombre}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.perfil && (
                    <Typography color="error" variant="caption">
                      Perfil es requerido
                    </Typography>
                  )}
                </FormControl>
                <TextField
                  fullWidth
                  size="small"
                  margin="normal"
                  label="Precio"
                  name="precio"
                  type="number"
                  value={precio.precio}
                  onChange={(event) => handleChangePrecios(index, event)}
                  error={!!errors.precio}
                  helperText={errors.precio ? "Precio es requerido" : ""}
                  sx={{ mr: 1 }}
                />
                <IconButton
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleRemovePrecio(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddPrecio}
              sx={{ mb: 2 }}
            >
              Agregar Precio x Perfil
            </Button>
            <Box
              className="Producto-Imagen"
              alignItems="center"
              margin="normal"
            >
              <FormControl fullWidth>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="file-input">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    style={{ marginTop: "16px" }}
                  >
                    Seleccionar Imágenes
                  </Button>
                </label>
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                {previews.map((preview, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <img
                      src={preview}
                      alt="Preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        color: "red",
                      }}
                      onClick={() => handleRemoveImage(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Box>
            <TextField
              fullWidth
              size="small"
              margin="normal"
              label="Descripción"
              name="descripcion"
              multiline
              rows={4}
              inputProps={{ maxLength: 250 }}
              value={producto.descripcion}
              onChange={handleInputChange}
              error={errors.descripcion}
              helperText={errors.descripcion ? "Descripción es requerida" : ""}
            />
          </Box>
        </CardContent>
        <div className="AddEditProductoPage-ButtonsBox">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isFormValid()}
            onClick={handleSubmit}
          >
            Guardar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEditProductoPage;
