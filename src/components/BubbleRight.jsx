import { Box } from "@chakra-ui/layout";
import { HStack, Text } from "@chakra-ui/react";

export const BubbleRight = () => {
  return (
    <>
      <HStack>
        <Box bg="grey" w="50%" p={2} borderRadius="10px" color="white">
          <Text fontSize="md">haallooooooooooooooooooo</Text>
          <Text
            fontSize="sm"
            style={{ marginLeft: "8.3em", marginBottom: "-0.2em" }}
          >
            19.54
          </Text>
        </Box>
      </HStack>
    </>
  );
};
