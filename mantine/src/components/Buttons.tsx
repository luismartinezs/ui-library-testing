import { Button, Box } from "@mantine/core";

const Buttons = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        marginTop: "1rem",
      })}
    >
      <Button color="blue">Primary</Button>
      <Button color="orange">Secondary</Button>
      <Button color="blue" variant="outline">
        Outline
      </Button>
    </Box>
  );
};

export default Buttons;
