import { useParams } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ProductoPreview from '../../components/productoPreview/ProductoPreview';
import productosList from '../../assets/productosList';
import Titulo from '../../components/Titulo/Titulo';
import './productosPage.css';
import { useEffect, useState } from 'react';
import categoriasList from '../../assets/categoriasList';


const ProductosPage = () => {
  const { categoriaId } = useParams(); // si es null todas las categorias
  const [categoria, setCategoria] = useState(null);

  useEffect(() => {
    console.log({categoriasList});
    setCategoria(categoriasList.find(categoria => categoria.id === categoriaId));
  }, [])

  return (
    <div className="Page">
      <Titulo icon={<ShoppingCartOutlinedIcon />}>{categoria ? `${categoria.label} / Productos` : 'Lista de productos'}</Titulo>
      <div className="ProductosPage-List">
        {productosList.map(producto => <ProductoPreview key={producto.id} producto={producto} />)}
      </div>
    </div>
  );
}

export default ProductosPage;