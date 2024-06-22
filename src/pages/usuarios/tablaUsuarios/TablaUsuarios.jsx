import PropTypes from "prop-types";
import "./tablaUsuarios.css";

const TablaUsuarios = ({ usuarios }) => {
  return (
    <div className="TablaUsuarios-Container">
      <div className="TablaUsuarios-Header">
        <div className="TablaUsuarios-razonSocial">Razon Social</div>
        <div className="TablaUsuarios-cuit">CUIT</div>
        <div className="TablaUsuarios-telefono">Telefono</div>
        <div className="TablaUsuarios-estado">Estado</div>
        <div className="TablaUsuarios-tipoPerfil">Tipo de Perfil</div>
        <div className="TablaUsuarios-acciones">Acciones</div>
      </div>

      {/* Render data rows dynamically */}
      {usuarios.map((user) => (
        <div key={user.id} className="TablaUsuarios-Row">
          <div className="TablaUsuarios-RazonSocial">
            {user.razonSocial ?? [user.nombre, user.apellido].join(" ")}
          </div>
          <div className="TablaUsuarios-Cuit">{user.nroDoc}</div>
          <div className="TablaUsuarios-Telefono">{user.telefono}</div>
          <div className="TablaUsuarios-Estado">{user.estado}</div>
          <div className="TablaUsuarios-TipoPerfil">
            {user.perfiles.map((perfil) => perfil.nombre).join(", ")}
          </div>
          <div className="TablaUsuarios-Acciones">
            <button className="TablaUsuarios-EditButton">Editar</button>
            <button className="TablaUsuarios-DeleteButton">Borrar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

TablaUsuarios.propTypes = {
  usuarios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      razonSocial: PropTypes.string.isRequired,
      nroDoc: PropTypes.string.isRequired,
      telefono: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
      perfiles: PropTypes.array.isRequired,
      // Add more PropTypes as needed for other properties
    })
  ).isRequired,
};

export default TablaUsuarios;
