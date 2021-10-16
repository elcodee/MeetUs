import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
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
import { UserContext } from "../config/userContext";
import { setToken, loginUser } from "../config/index";

export const Signin = () => {
  const { userState, userDispatch } = useContext(UserContext);
  const { isOpen, onToggle } = useDisclosure();
  const loggedin = useToast();

  const [inputData, setInputData] = useState({
    username: null,
    password: null,
  });

  const [isErr, setIsErr] = useState({
    err: false,
    message: null,
  });

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      let login = await loginUser(inputData);
      console.log("LOGIN: ", login);
      console.log("STATE: ", userState);
      if (!login.status) {
        setIsErr({
          err: true,
          message: login.msg,
        });

        setTimeout(
          () =>
            setIsErr({
              err: false,
              message: null,
            }),
          4000
        );
      } else {
        loggedin({
          title: `Login Successfuly`,
          position: "bottom",
          variant: "top-accent",
          status: "success",
          isClosable: true,
        });
      }
      setToken(login.data.token);
      localStorage.setItem("token", login.data.token);
      userDispatch({
        type: "LOGIN",
        payload: login.data,
      });
    } catch (error) {
      console.log("ERR LOGIN: ", error);
    }
  };

  return (
    <>
      <Box height="80px">
        <Stack>
          <Button onClick={onToggle} mt={-20} variant="outline">
            Sign In
          </Button>
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

              {isErr.err && (
                <Alert mb={5} status="error">
                  <AlertIcon />
                  <Text fontSize="sm" ml={-1}>
                    <b>{isErr.message}</b>
                  </Text>
                </Alert>
              )}
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
                onClick={() => handleSubmit()}
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
