import GroupIcon from "@mui/icons-material/Group";
import Titulo from "../../components/titulo/Titulo";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TablaUsuarios from "./tablaUsuarios/TablaUsuarios";
import FiltroUsuarios from "./filtroUsuarios/FiltroUsuarios";
import { fetchUsuarios } from "./usuariosSlice";

const UsuariosPage = () => {
  const [parameters, setParameters] = useState(null);

  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios.usuarios);

  // Llamada a la acción asincrónica al cargar el componente
  useEffect(() => {
    dispatch(fetchUsuarios());
  }, [dispatch]);

  // Resto del componente
  return (
    <div className="Page">
      <Titulo icon={<GroupIcon />}>Usuarios</Titulo>
      <FiltroUsuarios setParameters={setParameters} />
      <TablaUsuarios usuarios={usuarios} />
    </div>
  );
};

export default UsuariosPage;

/*const generateUsersArray = (size) => {
  const usersArray = [];

  for (let i = 1; i <= size; i++) {
    const user = {
      id: uuidv4(),
      razonSocial: `Company ${i}`,
      cuit: `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`,
      telefono: `555-${Math.floor(Math.random() * 10000)}`,
      estado: i % 2 === 0 ? 'Active' : 'Inactive',
      tipoPerfil: i % 3 === 0 ? 'Customer' : i % 3 === 1 ? 'Supplier' : 'Partner',
    };

    usersArray.push(user);
  }

  return usersArray;
};*/
