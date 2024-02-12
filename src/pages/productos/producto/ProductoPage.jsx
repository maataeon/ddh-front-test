import { useEffect, useState } from "react";
import Producto from "../../../components/producto/Producto";
import { useParams } from "react-router-dom";
import productosList from "../../../assets/productosList";

const ProductoPage = () => {
  const { categoriaId, productoId } = useParams();

  const [categoria, setCategoria] = useState(null);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    setCategoria(categoriaId ? {id: categoriaId} : categoriaId);
    console.log({productosList, productoId});
    console.log(productosList.find( producto => producto.id === productoId))
    setProducto(productosList.find( producto => producto.id === productoId));
  }, []);

  return (
    <div className="Page">
      { producto &&
        <Producto categoria={categoria} producto={producto} />
      }
    </div>
  )
}

export default ProductoPage;