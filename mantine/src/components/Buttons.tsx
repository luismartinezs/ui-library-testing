import { Button, Box } from "@mantine/core";

const Buttons = (props) => {
  const sBox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    marginTop: "1rem",
  };

  return (
    <Box sx={(theme) => sBox} {...props}>
      <Button color="blue">Primary</Button>
      <Button color="orange">Secondary</Button>
      <Button color="blue" variant="outline">
        Outline
      </Button>
    </Box>
  );
};

export default Buttons;
