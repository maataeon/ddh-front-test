import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveProduct } from '../../../components/producto/productosSlice';

const NewProductoPage = () => {
  const dispatch = useDispatch();

  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: 0,
    idProducto: 0,
    idPerfil: 1,
    idCategoria: 1,
    estado: 1
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Dispatch para guardar el nuevo producto
      await dispatch(saveProduct(producto));
      // Lógica adicional después de guardar el producto si es necesario
      console.log('Producto guardado con éxito!');
      // Limpiar el formulario después de guardar el producto
      setProducto({
        nombre: '',
        descripcion: '',
        precio: 0,
        idProducto: 0,
        idPerfil: 1,
        idCategoria: 1,
        estado: 1
      });
    } catch (error) {
      console.error('Error al guardar el producto:', error);
    }
  };

  return (
    <div>
      <h2>Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Descripción:
          <input
            type="text"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Precio:
          <input
            type="number"
            name="precio"
            value={producto.precio}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Perfil:
          <select
            name="idPerfil"
            value={producto.idPerfil}
            onChange={handleInputChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default NewProductoPage;
