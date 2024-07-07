import { IconButton, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./producto.css";
import { Link } from "react-router-dom";
import PropTypesShapes from "../../../config/PropTypesShapes";
import config from "../../../config/config";
//import GaleriaDeImagenes from "../../../components/galeriaImagenes/GaleriaImagenes";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { useSelector } from "react-redux";
import GaleriaDeImagenes from "../../../components/galeriaImagenes/GaleriaImagenes";

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
          <GaleriaDeImagenes imagenes={producto.images ?? []} />
        </div>
        <div className="Producto-Informacion">
          <Typography variant="h3">{producto.nombre}</Typography>
          {isAuthenticated ? (
            producto.precios.map((precio) => (
              <div key={precio.idPerfil} className="Producto-Precio">
                <Typography variant="h5" align="left">
                  {precio?.nombre}
                </Typography>
                <Typography variant="h4" align="right">
                  {`$ ${precio?.precio}`}
                </Typography>
              </div>
            ))
          ) : (
            <Link
              to={`/login?redirect=${window.location.pathname}`}
              className="Producto-VerPrecio"
            >
              <Typography variant="h4" align="right">
                Ver precios
              </Typography>
            </Link>
          )}
          <Typography className="Producto-Descripcion">
            {producto.descripcion}
          </Typography>
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
