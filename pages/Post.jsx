import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { ChatIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Divider, HStack, Stack, Text, VStack } from "@chakra-ui/layout";

export const Post = () => {
  return (
    <>
      <Stack>
        <Box
          maxW="md"
          borderWidth="2px"
          borderRadius="lg"
          w="100%"
          h="100%"
          overflow="hidden"
        >
          <HStack p={3}>
            <Avatar w="2em" h="2em" ml={1} src="https://bit.ly/dan-abramov" />
            <Stack>
              <Text fontSize="xl">Rama Aditya</Text>
              <Text fontSize="sm" style={{ marginTop: "-0.5em" }}>
                2 Mins Ago
              </Text>
            </Stack>
          </HStack>

          <VStack px={3}>
            <Text fontSize="md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit nesciunt libero, veniam consectetur magni voluptate
              officiis rem deserunt nobis sapiente facilis quia quibusdam ipsum
              nemo asperiores omnis unde possimus sunt.
            </Text>
          </VStack>

          <HStack px={3} pt={3}>
            <StarIcon boxSize="3" ml={1} />
            <Text fontSize="sm" style={{ marginLeft: "4px" }}>
              313
            </Text>

            <ChatIcon boxSize="3" ml={1} style={{ marginLeft: "1em" }} />
            <Text fontSize="sm" style={{ marginLeft: "5px" }}>
              31
            </Text>
          </HStack>

          <Divider mt={1} mb={0.95} bg="grey" opacity="20%" />

          <HStack px={3} py={3}>
            <Button size="xs" colorScheme="facebook" variant="outline">
              <StarIcon boxSize="3.5" />
              <Text fontSize="md" ml={2}>
                Star
              </Text>
            </Button>
            <Button size="xs" colorScheme="facebook" variant="outline">
              <ChatIcon boxSize="3.5" />
              <Text fontSize="md" ml={2}>
                Comment
              </Text>
            </Button>
          </HStack>
        </Box>
      </Stack>
    </>
  );
};
