import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  ScaleFade,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UserContext } from "../config/local";

export const Signin = () => {
  const data = {
    username: "rama",
    password: "rama",
  };
  const [inputData, setInputData] = useState({
    username: null,
    password: null,
  });

  // console.log("SIGNIN: ", inputData);

  const { userDispatch } = useContext(UserContext);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const login = useToast();
  const incorrect = useToast();

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (
      inputData.username !== data.username ||
      inputData.password !== data.password
    ) {
      incorrect({
        title: `Incorrect Username or Passoword`,
        position: "bottom",
        variant: "top-accent",
        status: "error",
        isClosable: true,
      });
    } else {
      userDispatch({
        type: "LOGIN",
        payload: true,
      });

      login({
        title: `Signin Success`,
        position: "bottom",
        variant: "top-accent",
        status: "success",
        isClosable: true,
      });

      onClose();
    }
  };

  return (
    <>
      <Box height="80px">
        <Stack>
          <Button onClick={onToggle} mt={-20} variant="outline">Sign In</Button>
          <ScaleFade initialScale={0.3} in={isOpen}>
            <Box
              p="15px"
              mt={4}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              shadow="md"
            >
              <Text fontSize="2xl" mb={3}>
                Sign In
              </Text>
              <Stack spacing={3}>
                <Input
                  variant="flushed"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="username"
                  placeholder="Username"
                />
                <Input
                  variant="flushed"
                  type="password"
                  onChange={(e) => handleChange(e)}
                  name="password"
                  placeholder="Password"
                />
              </Stack>
              <Button
                onClick={() => handleLogin()}
                rightIcon={<ArrowForwardIcon />}
                colorScheme="facebook"
                mt={4}
                variant="outline"
              >
                Sign In
              </Button>
            </Box>
          </ScaleFade>
        </Stack>
      </Box>
    </>
  );
};
