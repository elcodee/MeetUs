import {
  Stack,
  HStack,
  Container,
  Box,
  Button,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router";
import { BubbleLeft } from "../components/BubbleLeft";
import { BubbleRight } from "../components/BubbleRight";

export const Chat = () => {
  const route = useHistory();
  return (
    <>
      <Stack>
        <Box bg="grey" w="100%" h="65px" p={3} color="white">
          <HStack>
            <Button
              onClick={() => route.push("/")}
              w="10%"
              h="100%"
              colorScheme="black"
              variant="solid"
            >
              <ArrowBackIcon boxSize="1.8em" />
            </Button>
            <Avatar boxSize="2em" ml={5} src="https://bit.ly/dan-abramov" />
            <Stack>
              <Text fontSize="lg">Elcode</Text>
              <Text fontSize="xs" style={{ marginTop: "-0.5em" }}>
                Online
              </Text>
            </Stack>
          </HStack>
        </Box>
      </Stack>

      <Stack>
        <Container py={3}>
          <BubbleLeft />
          <BubbleRight />
        </Container>
      </Stack>
    </>
  );
};
