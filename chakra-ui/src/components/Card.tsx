import { Box, Image } from "@chakra-ui/react";

const Card = () => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray.300"
      boxShadow="lg"
      overflow="hidden"
    >
      <Image src="https://source.unsplash.com/random/400x200" alt="random" />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          Card title
        </Box>
        <Box as="p" mt="1" color="gray.600">
          Nisi ullamco laboris ullamco amet ex sit nulla nostrud occaecat in
          incididunt ut in. Et cupidatat occaecat sit ipsum ad duis ex dolor
          dolore. Ipsum nostrud nulla proident occaecat do eu excepteur minim
          magna veniam et voluptate dolor. Duis in nulla ex ad. Dolor ad aute
          pariatur laboris. Proident cillum ipsum anim sunt aliqua quis aute
          laborum est anim.
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
