import Alert from "@mui/material/Alert";

const ErrorState = () => {
  return (
    <Alert
      severity="error"
      sx={{
        marginTop: 2,
      }}
    >
      There was an error
    </Alert>
  );
};

export default ErrorState;
