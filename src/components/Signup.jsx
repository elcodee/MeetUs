import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"

export const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef()
  const finalRef = useRef()

  const [inputData, setInputData] = useState({
    name: null,
    email: null,
    username: null,
    password: null,
  });

  // console.log("SIGNUP: ", inputData);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Button onClick={onOpen} mb={-12}>Sign Up</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent mx={3}>
          <ModalHeader><Text fontSize="2xl" mb={-1}>
                Sign Up
              </Text></ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                  variant="flushed"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="name"
                  placeholder="Name"
                />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                  variant="flushed"
                  type="email"
                  onChange={(e) => handleChange(e)}
                  name="email"
                  placeholder="mail@domain.com"
                />
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input
                  variant="flushed"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="username"
                  placeholder="Username"
                />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                  variant="flushed"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="password"
                  placeholder="Password"
                />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} textColor="pink" mr={3} variant="outline">Cancel</Button>
            <Button colorScheme="facebook">
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
