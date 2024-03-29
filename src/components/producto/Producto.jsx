import { Typography } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import "./producto.css";
import { Link } from "react-router-dom";
import PropTypesShapes from "../../config/PropTypesShapes";
import GaleriaDeImagenes from "../galeriaImagenes/GaleriaImagenes";


const Producto = ({ categoria, producto }) => {

  return (
    <div className="Producto-Container">
      <Link to={categoria ? `/categorias/${categoria.id}` : `/productos`} className="Volver">
        <ArrowBackOutlinedIcon />
        <Typography className="Volver-Texto">Volver al listado</Typography>
        <div>{producto.id}</div>
      </Link>
      <div className="Producto">
            
          <GaleriaDeImagenes imagenes={producto.imagenes} />
        <div className="Producto-Informacion">
          <Typography variant="h3">{producto.titulo}</Typography>
          <Typography variant="h5" align="right">Compra: ${producto.precio.compra}</Typography>
          <Typography variant="h5" align="right">Venta: ${producto.precio.venta}</Typography>
        </div>
      </div>
    </div>
  )
};

Producto.propTypes = {
  categoria: PropTypesShapes.categoriaShape,
  producto: PropTypesShapes.productoShape.isRequired
};

export default Producto;