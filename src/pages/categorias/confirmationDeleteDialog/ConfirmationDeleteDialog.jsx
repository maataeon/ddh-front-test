import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const ConfirmationDeleteDialog = ({ open, onClose, onConfirm }) => {
  const [associatedProducts, setAssociatedProducts] = useState(false);

  const handleConfirm = () => {
    onConfirm(associatedProducts);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirmación</DialogTitle>
      <DialogContent>
        <FormControlLabel
          control={
            <Checkbox
              checked={associatedProducts}
              onChange={() => setAssociatedProducts(!associatedProducts)}
              size="large"
            />
          }
          label="Borrar productos asociados"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleConfirm} color="primary" variant="contained">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
ConfirmationDeleteDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};
export default ConfirmationDeleteDialog;
