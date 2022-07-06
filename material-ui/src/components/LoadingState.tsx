import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingState = () => {
  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingState;
