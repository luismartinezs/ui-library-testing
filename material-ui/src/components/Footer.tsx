import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor="grey.500"
      color="text.primary"
      p={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Typography>© 2018 Gandalf</Typography>
    </Box>
  );
};

export default Footer;
