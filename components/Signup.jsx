import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { registerUser } from "../config/index";

export const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();
  const registered = useToast();

  const [inputData, setInputData] = useState({
    name: null,
    email: null,
    username: null,
    password: null,
  });

  const [isErr, setIsErr] = useState({
    err: false,
    message: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    if (
      inputData.name == null ||
      inputData.email == null ||
      inputData.username == null ||
      inputData.password == null
    ) {
      setIsErr({
        err: true,
        message: "Please Fill All Fields",
      });
    } else if (inputData.username.length <= 4) {
      setIsErr({
        err: true,
        message: "Username Must Be 4 Characters",
      });
    } else if (inputData.username === inputData.password) {
      setIsErr({
        err: true,
        message: "Password & Username Cannot Be Same",
      });
    } else {
      const regis = await registerUser(inputData);
      console.log("ERR REGIS: ", regis);
      if (regis) {
        setIsErr({
          err: true,
          message: regis.msg,
        });
      } else {
        registered({
          title: `Register Successfuly`,
          position: "top",
          variant: "top-accent",
          status: "success",
          isClosable: true,
        });
      }
    }

    setTimeout(
      () =>
        setIsErr({
          err: false,
          message: null,
        }),
      4000
    );
    setIsLoading(false);
  };

  return (
    <>
      <Button onClick={onOpen} mb={-12}>
        Sign Up
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent mx={3}>
          <ModalHeader>
            <Text fontSize="2xl" mb={-1}>
              Sign Up
            </Text>
          </ModalHeader>

          <ModalBody pb={6}>
            {isErr.err && (
              <Alert mb={5} status="error">
                <AlertIcon />
                <Text fontSize="sm" ml={-1}>
                  <b>{isErr.message}</b>
                </Text>
              </Alert>
            )}
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                focusBorderColor="blue.400"
                variant="flushed"
                type="text"
                onChange={(e) => handleChange(e)}
                name="name"
                placeholder="Name"
                required
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                focusBorderColor="blue.400"
                variant="flushed"
                type="email"
                onChange={(e) => handleChange(e)}
                name="email"
                placeholder="mail@domain.com"
                required
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                focusBorderColor="blue.400"
                variant="flushed"
                type="text"
                onChange={(e) => handleChange(e)}
                name="username"
                placeholder="Username"
                required
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                focusBorderColor="blue.400"
                variant="flushed"
                type="text"
                onChange={(e) => handleChange(e)}
                name="password"
                placeholder="Password"
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} textColor="red" mr={3} variant="outline">
              Cancel
            </Button>
            {isLoading ? (
              <Button
                isLoading
                loadingText="Loading"
                onClick={(e) => handleSubmit(e)}
                colorScheme="twitter"
              >
                Sign Up
              </Button>
            ) : (
              <Button onClick={(e) => handleSubmit(e)} colorScheme="twitter">
                Sign Up
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
