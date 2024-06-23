// ProductosPage.jsx

//import PropTypes from "prop-types";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Titulo from "../../components/titulo/Titulo";
import "./productosPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos } from "./productosSlice";
import AddIcon from "@mui/icons-material/Add";
import { Link, useLocation, useParams } from "react-router-dom";
import ProductoPreview from "./productoPreview/ProductoPreview";

const ProductosPage = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos.productos);
  const loading = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);

  const { idCategoria } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");

  useEffect(() => {
    const query = q ?? "";
    const criteria = {
      idCategoria,
      descripcion: query,
      name: query,
    };
    dispatch(fetchProductos(criteria));
  }, [dispatch, q, idCategoria]);

  return (
    <div className="Page">
      <div className="ProductosPage-Header">
        <Titulo icon={<ShoppingCartOutlinedIcon />}>Lista de productos</Titulo>
        <Link to="/productos/new">
          <AddIcon />
        </Link>
      </div>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}

      {productos.length === 0 && (
        <p>
          No existen productos que contengan en el nombre o la descripcion la
          clave "{q}"
        </p>
      )}
      <div className="ProductosPage-List">
        {productos?.map((producto) => (
          <ProductoPreview key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

/*ProductosPage.propTypes = {
  searchTerm: PropTypes.string,
};*/

export default ProductosPage;
