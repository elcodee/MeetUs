import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useRef } from "react";

export const ModalAdd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef();
  return (
    <>
      <Box
        onClick={onOpen}
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

            <Grid h="auto" ml={3} mt={0}>
              <GridItem colSpan={12} mt={1}>
                <Text fontSize="20px" as="samp">
                  Rama
                </Text>
              </GridItem>
            </Grid>

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

        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} mx={2}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody py={2}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus, voluptatem expedita, eos impedit eius maiores
                asperiores animi eum perferendis natus architecto officiis saepe
                recusandae incidunt aspernatur, rerum tenetur laboriosam nobis.
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
  );
};
