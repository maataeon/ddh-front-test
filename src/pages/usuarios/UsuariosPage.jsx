import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import Titulo from "../../components/titulo/Titulo";
import TablaUsuarios from "./tablaUsuarios/TablaUsuarios";
import FiltroUsuarios from "./filtroUsuarios/FiltroUsuarios";
import { fetchUsuarios } from "./usuariosSlice";
import { getPerfiles } from "../productos/productosSlice";
import "./usuariosPage.css";

const UsuariosPage = () => {
  const [parameters, setParameters] = useState(null);
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    nombre: "",
    apellido: "",
    documento: "",
    telefono: "",
    estado: 1,
    idPerfil: 1,
    email: "",
  });

  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
  const [checkboxPassword, setCheckboxPassword] = useState(true);

  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios.usuarios);
  const perfiles = useSelector((state) => state.productos.perfiles);

  useEffect(() => {
    dispatch(fetchUsuarios(parameters));
    dispatch(getPerfiles());
  }, [dispatch, parameters]);

  const handleEdit = (user) => {
    console.log({ ...user });
    setNewUser({
      ...user,
      idPerfil: user.perfiles[0].idPerfil,
      username: user.nickName,
    });
    setCheckboxPassword(true);
    setOpen(true);
  };

  const handleDelete = (user) => {};

  const handleOpen = () => {
    setCheckboxPassword(false);
    setIsPasswordEnabled(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewUser({
      username: "",
      password: "",
      nombre: "",
      apellido: "",
      documento: "",
      telefono: "",
      estado: 1,
      idPerfil: 1,
      email: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAlta = () => {
    // Aquí puedes agregar la lógica para manejar el alta del usuario
    console.log("Nuevo usuario:", newUser);
    handleClose();
  };

  const isFormValid = Object.values(newUser).every((value) => value !== "");

  const handleCheckboxChange = () => {
    setIsPasswordEnabled((prev) => !prev);
  };
  return (
    <div className="Page">
      <Titulo icon={<GroupIcon />}>Usuarios</Titulo>
      <FiltroUsuarios
        setParameters={setParameters}
        handleAlta={handleOpen}
        perfiles={perfiles}
      />
      <TablaUsuarios
        usuarios={usuarios}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Alta de Usuario</DialogTitle>
        <DialogContent>
          <TextField
            size="small"
            margin="dense"
            label="Usuario"
            name="username"
            fullWidth
            value={newUser.username}
            onChange={handleChange}
            error={!newUser.username}
            helperText={!newUser.username ? "Este campo es obligatorio" : ""}
          />
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={!checkboxPassword}
                  checked={isPasswordEnabled}
                  onChange={handleCheckboxChange}
                />
              }
              label="Activar Contraseña"
            />
            <TextField
              size="small"
              margin="dense"
              label="Contraseña"
              name="password"
              fullWidth
              value={newUser.password}
              onChange={handleChange}
              disabled={!isPasswordEnabled}
            />
          </div>
          <TextField
            size="small"
            margin="dense"
            label="Nombre"
            name="nombre"
            fullWidth
            value={newUser.nombre}
            onChange={handleChange}
            error={!newUser.nombre}
            helperText={!newUser.nombre ? "Este campo es obligatorio" : ""}
          />
          <TextField
            size="small"
            margin="dense"
            label="Apellido"
            name="apellido"
            fullWidth
            value={newUser.apellido}
            onChange={handleChange}
            error={!newUser.apellido}
            helperText={!newUser.apellido ? "Este campo es obligatorio" : ""}
          />
          <TextField
            size="small"
            margin="dense"
            label="Documento"
            name="nroDoc"
            type="number"
            fullWidth
            value={newUser.nroDoc}
            onChange={handleChange}
            error={!newUser.nroDoc}
            helperText={!newUser.nroDoc ? "Este campo es obligatorio" : ""}
          />
          <TextField
            size="small"
            margin="dense"
            label="Teléfono"
            name="telefono"
            type="number"
            fullWidth
            value={newUser.telefono}
            onChange={handleChange}
            error={!newUser.telefono}
            helperText={!newUser.telefono ? "Este campo es obligatorio" : ""}
          />
          <TextField
            size="small"
            margin="dense"
            label="Email"
            name="email"
            type="email"
            fullWidth
            value={newUser.email}
            onChange={handleChange}
            error={!newUser.email}
            helperText={!newUser.email ? "Este campo es obligatorio" : ""}
          />

          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            error={!newUser.estado}
          >
            <InputLabel id="estado-label">Estado</InputLabel>
            <Select
              labelId="estado-label"
              name="estado"
              value={newUser.estado}
              label="Estado"
              onChange={handleChange}
            >
              <MenuItem value={1}>Activado</MenuItem>
              <MenuItem value={2}>Pendiente</MenuItem>
              <MenuItem value={3}>Desactivado</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            error={!newUser.idPerfil}
          >
            <InputLabel id="perfil-label">Perfil</InputLabel>
            <Select
              labelId="perfil-label"
              name="idPerfil"
              value={newUser.idPerfil}
              label="Perfil"
              onChange={handleChange}
            >
              {[{ idPerfil: null, nombre: "Todos" }, ...perfiles].map(
                (perfil) => (
                  <MenuItem key={perfil.idPerfil} value={perfil.idPerfil}>
                    {perfil.nombre}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={handleAlta}
            color="primary"
            variant="contained"
            disabled={!isFormValid}
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UsuariosPage;
