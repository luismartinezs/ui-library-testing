import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TextContent = () => {
  return (
    <Box mt={2}>
      <Typography component="h2" variant="h4" gutterBottom>
        This is a title
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sunt officia incididunt dolor nulla occaecat deserunt officia. Veniam
        esse id dolor veniam eiusmod esse irure velit. Nulla et eiusmod culpa
        nostrud sunt cupidatat veniam.
      </Typography>
    </Box>
  );
};

export default TextContent;
