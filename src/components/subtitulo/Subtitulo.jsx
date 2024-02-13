import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import './subtitulo.css';

const Subtitulo = ({ icon, children }) => {
  return (
    <div className="Subtitulo">
      {icon}
      <Typography className="Subtitulo-Texto">{children}</Typography>
    </div>
  )
};

Subtitulo.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.string.isRequired,
};

export default Subtitulo;