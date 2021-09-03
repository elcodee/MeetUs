import { SearchIcon, ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  useDisclosure,
  ScaleFade,
  useToast,
  Text,
  DrawerFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { useContext, useRef } from "react";
import { UserContext } from "../config/local";
import { ModalAdd } from "./ModalAdd";

export const Header = () => {
  const [data, setData] = useState({
    username: "rama",
    password: "rama",
  });

  const [inputData, setInputData] = useState({
    username: null,
    password: null,
  });

  const { userState, userDispatch } = useContext(UserContext);
  const { isOpen, onClose, onToggle } = useDisclosure();
  const firstField = useRef();
  const login = useToast();
  const logout = useToast();
  const incorrect = useToast();

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (inputData.username !== data.username || inputData.password !== data.password) {
      incorrect({
        title: `Incorrect Username or Passoword`,
        position: "bottom-right",
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
        position: "bottom-right",
        status: "success",
        isClosable: true,
      });

      onClose();
    }
  };

  const handleLogout = () => {
    userDispatch({
      type: "LOGOUT",
      payload: false,
    });

    logout({
      title: `Logout Success`,
      position: "bottom-right",
      status: "warning",
      isClosable: true,
    });

    onClose();
  };

  return (
    <>
      <div className="p-2">
        <Button colorScheme="facebook" onClick={onToggle}>
          Menu
        </Button>
        {userState.isLogin ? (
          <div className="d-flex float-end">
            <Button colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            {userState.isLogin ? "Meet Us" : "Meet Us | Login"}
          </DrawerHeader>

          <DrawerBody>
            {!userState.isLogin ? (
              <ScaleFade initialScale={20} in={isOpen}>
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                      ref={firstField}
                      onChange={(e) => handleChange(e)}
                      name="username"
                      id="username"
                      placeholder="Please Enter Username"
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup>
                      <Input
                        type="password"
                        onChange={(e) => handleChange(e)}
                        name="password"
                        id="password"
                        placeholder="Please Pnter Password"
                      />
                    </InputGroup>

                    <Button
                      onClick={() => handleLogin()}
                      mt={2}
                      leftIcon={<ArrowForwardIcon />}
                      colorScheme="facebook"
                      variant="solid"
                    >
                      Login
                    </Button>
                  </Box>
                </Stack>
              </ScaleFade>
            ) : (
              <ScaleFade initialScale={20} in={isOpen}>
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="username">Add New Friend</FormLabel>
                    <Input
                      ref={firstField}
                      id="username"
                      placeholder="Enter Username"
                    />

                    <Button
                      mt={2}
                      leftIcon={<SearchIcon />}
                      colorScheme="facebook"
                      variant="solid"
                    >
                      Search
                    </Button>
                  </Box>

                  <ModalAdd />
                </Stack>
              </ScaleFade>
            )}
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Text>
              {" "}
              2021 &copy; Meet Us Crafted With <StarIcon mt={-1} /> By Elcode
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
