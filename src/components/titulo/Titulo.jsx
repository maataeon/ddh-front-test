import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import './titulo.css';

const Titulo = ({ icon, children }) => {
  return (
    <div className="Titulo">
      {icon}
      <Typography className="Titulo-Texto">{children}</Typography>
    </div>
  )
};

Titulo.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.string.isRequired,
};

export default Titulo;