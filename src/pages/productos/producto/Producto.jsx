import { IconButton, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./producto.css";
import { Link } from "react-router-dom";
import PropTypesShapes from "../../../config/PropTypesShapes";
import config from "../../../config/config";
//import GaleriaDeImagenes from "../../../components/galeriaImagenes/GaleriaImagenes";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { useSelector } from "react-redux";

const Producto = ({ categoria, producto }) => {
  const permisos = useSelector((state) => state.auth.permisos);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="Producto-Container">
      <div className="Producto-Hader">
        <Link
          to={categoria ? `/categorias/${categoria.id}` : `/productos`}
          className="Volver"
        >
          <ArrowBackOutlinedIcon />
          <Typography className="Volver-Texto">Volver al listado</Typography>
          <div>{producto.id}</div>
        </Link>
        {permisos.includes("FULL_ADMIN") && (
          <Link to={`/productos/edit/${producto.idProducto}`}>
            <IconButton>
              <CreateOutlinedIcon />
            </IconButton>
          </Link>
        )}
      </div>
      <div className="Producto">
        {/*<GaleriaDeImagenes imagenes={producto.imagenes ?? []} />*/}
        <div className="Producto-Portada">
          <img
            src={`${config.apiUrl}/imagen/${producto.imagen}`}
            alt={producto.nombre}
          />
        </div>
        <div className="Producto-Informacion">
          <Typography variant="h3">{producto.nombre}</Typography>
          {isAuthenticated ? (
            <Typography
              variant="h4"
              align="right"
              style={{ margin: "3rem 0 5rem 0" }}
            >
              {`$ ${producto?.precio}`}
            </Typography>
          ) : (
            <Link to={"/registrarse"} className="Producto-VerPrecio">
              <Typography
                variant="h4"
                align="right"
                style={{ margin: "3rem 0 5rem 0" }}
              >
                Ver precios
              </Typography>
            </Link>
          )}
          <Typography variant="h5">{producto.descripcion}</Typography>
        </div>
      </div>
    </div>
  );
};

Producto.propTypes = {
  categoria: PropTypesShapes.categoriaShape,
  producto: PropTypesShapes.productoShape.isRequired,
};

export default Producto;
