import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const ChatLits = () => {
  return (
    <>
      <Box
        maxW="md"
        borderWidth="1px"
        mb={4}
        borderRadius="lg"
        overflow="hidden"
      >
        <Box p="6">
          <Flex>
            <Wrap>
              <WrapItem>
                <Avatar name="Elcode" src="https://bit.ly/dan-abramov" />
              </WrapItem>
            </Wrap>

            <Grid w="400px" h="20px" ml={3} mt={-1}>
              <GridItem colSpan={6}>
                <Text fontSize="20px" as="samp">
                  Rama
                </Text>
              </GridItem>
              <GridItem colSpan={6}>
                <Text fontSize="sm">Hi ...</Text>
              </GridItem>
            </Grid>
            <Tag size="sm" h="1px" mt={3.5} colorScheme="teal">
             1
            </Tag>

            <Box d="flex" alignItems="baseline">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              ></Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
