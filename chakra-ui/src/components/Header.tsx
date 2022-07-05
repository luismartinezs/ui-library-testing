import {
  Container,
  Flex,
  Box,
  Link,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Button,
  Show,
  Hide,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box as="header" bg="primary.500" color="white" py="4">
      <Container maxW="container.lg">
        <Flex alignItems="center">
          <Box flex="1" as="h2" fontSize="2xl">
            Cute Puppies Express!
          </Box>
          <Show above="lg">
            <Box as="nav">
              <HStack spacing="4">
                <Link href="#">Bikes</Link>
                <Link href="#">Cars</Link>
                <Link href="#">Boats</Link>
              </HStack>
            </Box>
          </Show>
          <Hide above="lg">
            <Menu isLazy>
              <MenuButton as={Button} colorScheme="primary">
                <HamburgerIcon w="6" h="6" />
              </MenuButton>
              <MenuList bg="primary.500" color="white">
                <MenuItem
                  _hover={{
                    backgroundColor: "primary.700",
                  }}
                  _focus={{
                    backgroundColor: "primary.700",
                  }}
                >
                  Bikes
                </MenuItem>
                <MenuItem
                  _hover={{
                    backgroundColor: "primary.700",
                  }}
                  _focus={{
                    backgroundColor: "primary.700",
                  }}
                >
                  Cars
                </MenuItem>
                <MenuItem
                  _hover={{
                    backgroundColor: "primary.700",
                  }}
                  _focus={{
                    backgroundColor: "primary.700",
                  }}
                >
                  Boats
                </MenuItem>
              </MenuList>
            </Menu>
          </Hide>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
