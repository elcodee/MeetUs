import { Box } from "@chakra-ui/layout";
import { HStack, Text } from "@chakra-ui/react";

export const BubbleRight = () => {
  return (
    <>
      <HStack>
        <Box
          bg="grey"
          w="70%"
          p={2}
          mr={-3}
          borderRadius="10px"
          color="white"
          className="ms-auto mt-3"
        >
          <Text fontSize="md">Yow Bro</Text>
          <Text
            fontSize="sm"
            style={{ marginLeft: "13.2em", marginBottom: "-0.2em" }}
          >
            19.54
          </Text>
        </Box>
      </HStack>
    </>
  );
};
