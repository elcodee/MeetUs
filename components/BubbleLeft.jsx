import { Box } from "@chakra-ui/layout";
import { HStack, Text } from "@chakra-ui/react";

export const BubbleLeft = () => {
  return (
    <>
      <HStack>
        <Box bg="grey" w="70%" p={2} ml={-3} borderRadius="10px" color="white">
          <Text fontSize="md">Hi !</Text>
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
