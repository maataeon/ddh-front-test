import PropTypes from 'prop-types';

class PropTypesShapes {
  static precioShape = PropTypes.shape({
    compra: PropTypes.number.isRequired,
    venta: PropTypes.number.isRequired,
  });

  static productoShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    precio: PropTypesShapes.precioShape,
  });

  static categoriaShape = PropTypes.shape({
    id: PropTypes.string.isRequired
  });
}

export default PropTypesShapes;