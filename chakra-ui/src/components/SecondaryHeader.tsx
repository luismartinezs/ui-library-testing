import { Flex, Link, Container } from "@chakra-ui/react";

const SecondaryHeader = () => {
  return (
    <Container maxW="container.lg" boxShadow="base" py="3">
      <Flex as="nav" justifyContent="space-around">
        <Link>Link 1</Link>
        <Link>Link 2</Link>
        <Link>Link 3</Link>
      </Flex>
    </Container>
  );
};

export default SecondaryHeader;
