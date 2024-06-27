import { useSelector } from "react-redux";
import { Backdrop, CircularProgress } from "@mui/material";

const Loading = () => {
  const { isLoading } = useSelector((state) => state.loading);

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.modal + 1, // Asegúrate de que esté por encima del modal
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
