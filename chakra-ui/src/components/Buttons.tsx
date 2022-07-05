import { Button, Stack } from "@chakra-ui/react";

const Buttons = () => {
  return (
    <Stack spacing={4} direction="row" align="center" mx={4}>
      <Button colorScheme="primary">Primary</Button>
      <Button colorScheme="secondary">Secondary</Button>
      <Button colorScheme="primary" variant="outline">
        Outline
      </Button>
    </Stack>
  );
};

export default Buttons;
