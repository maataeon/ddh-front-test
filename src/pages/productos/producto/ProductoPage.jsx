import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductoDetail } from "../productosSlice";
import Producto from "./Producto";

const ProductoPage = () => {
  const { categoriaId, productoId } = useParams();
  const dispatch = useDispatch();
  const producto = useSelector((state) => state.productos.producto);

  const [categoria, setCategoria] = useState(null);

  useEffect(() => {
    setCategoria(categoriaId ? { id: categoriaId } : categoriaId);
    dispatch(fetchProductoDetail(productoId));
  }, [dispatch, categoriaId, productoId]);

  return (
    <div className="Page">
      {producto && <Producto categoria={categoria} producto={producto} />}
    </div>
  );
};

export default ProductoPage;
