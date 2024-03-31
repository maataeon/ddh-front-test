// ProductosPage.jsx

import PropTypes from 'prop-types';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ProductoPreview from '../../components/productoPreview/ProductoPreview';
import Titulo from '../../components/titulo/Titulo';
import './productosPage.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos } from '../../components/producto/productosSlice';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const ProductosPage = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const productos = useSelector(state => state.productos.productos);
  const loading = useSelector(state => state.productos.loading);
  const error = useSelector(state => state.productos.error);

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  return (
    <div className="Page">
      <Titulo icon={<ShoppingCartOutlinedIcon />}>
        Lista de productos
      </Titulo>
      <Link to="/productos/new">
          <AddIcon />
        </Link>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <div className="ProductosPage-List">
        {productos?.map(producto => <ProductoPreview key={producto.id} producto={producto} />)}
      </div>
    </div>
  );
}

ProductosPage.propTypes = {
  searchTerm: PropTypes.string,
};

export default ProductosPage;
