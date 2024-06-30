import { useSelector, useDispatch } from "react-redux";
import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import { hideSnackbar } from "./snackbarSlice";

const Snackbar = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.snackbar);

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <MuiSnackbar open={open} autoHideDuration={60000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
