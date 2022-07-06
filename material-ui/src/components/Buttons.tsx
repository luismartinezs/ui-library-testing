import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Buttons = () => {
  return (
    <Stack direction="row" spacing={2} mt={2}>
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined">Outline</Button>
    </Stack>
  );
};

export default Buttons;
