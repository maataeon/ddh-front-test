import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import "./datoItem.css";

const DatoItem = ({ icon: Icon, label, value }) => {
    return (
        <div className="DatoItem">
            <Icon className="DatoItem-Icon" />
            <Typography className="DatoItem-Label">{label}</Typography>
            <Typography className="DatoItem-Value">{value}</Typography>
        </div>
    )
}

DatoItem.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default DatoItem;