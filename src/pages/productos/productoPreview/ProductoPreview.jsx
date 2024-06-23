import "./productoPreview.css";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import { Link } from "react-router-dom";
import PropTypesShapes from "../../../config/PropTypesShapes";

const ProductoPreview = ({ producto }) => {
  return (
    <Link to={`/producto/${producto.idProducto}`} className="Item">
      <div className="Item-Titulo">
        <div className="Item-Portada">
          <PhotoOutlinedIcon />
        </div>
        <div>{producto.nombre}</div>
      </div>
      <div className="Item-Precio">$ {producto?.precio} /kg</div>
      <div className="Item-Acciones">
        <CreateOutlinedIcon />
        <DeleteOutlineOutlinedIcon />
        <DragIndicatorOutlinedIcon />
      </div>
    </Link>
  );
};

ProductoPreview.propTypes = {
  producto: PropTypesShapes.productoShape.isRequired,
};

export default ProductoPreview;
