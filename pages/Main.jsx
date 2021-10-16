import {
  Avatar,
  Box,
  Center,
  Container,
  Divider,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  SlideFade,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon, SettingsIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ChatLits } from "../components/ChatLits";
import { UserContext } from "../config/userContext";
import Icon from "../common/img/chatAppIcon.png";
import { Signin } from "../components/Signin";
import { Signup } from "../components/Signup";
import { Post } from "../pages/Post";

export const Main = () => {
  const { userState, userDispatch } = useContext(UserContext);
  const { onClose } = useDisclosure();
  const data = [1, 2, 3, 4, 5];
  const route = useHistory();
  const logout = useToast();

  const handleLogout = () => {
    userDispatch({
      type: "LOGOUT",
      payload: false,
    });

    logout({
      title: `Logout Success`,
      position: "bottom",
      variant: "top-accent",
      status: "success",
      isClosable: true,
    });

    onClose();
  };
  return (
    <>
      <Container>
        {!userState.isLogin ? (
          <>
            <Center>
              <SimpleGrid columns={1} spacing={150} mt={10}>
                <Box height="80px">
                  <VStack>
                    <Image src={Icon} w="100px" />
                    <Text fontSize="4xl">Meet Us</Text>

                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                    >
                      <Text fontSize="md" as="em" p={3}>
                        Send Message With Someone You Love
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                {/* Sign up */}
                <Signup />

                {/* Sign in */}
                <Signin />
              </SimpleGrid>
            </Center>
          </>
        ) : (
          <>
            <VStack>
              <Text fontSize="3xl" p={1} mt={2}>
                Meet Us
              </Text>
            </VStack>
            <Divider mb={4} bg="grey" />
            <Tabs variant="soft-rounded" colorScheme="green">
              <TabList mx={5}>
                <Tab>Chats</Tab>
                <Tab>Story</Tab>
                <Tab>Friend</Tab>
                <Spacer />
                <Menu>
                  <MenuButton transition="all 0.4s">
                    <Avatar src="https://bit.ly/dan-abramov" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <EditIcon mr={2} /> Profile
                    </MenuItem>
                    <MenuItem>
                      <SettingsIcon mr={2} /> Settings
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <ArrowBackIcon mr={2} /> Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <SlideFade in={true} offsetY="500px">
                    {data.map((key) => (
                      <div ml={4} key={key} onClick={() => route.push("/chat")}>
                        <Center>
                          <ChatLits />
                        </Center>
                      </div>
                    ))}
                  </SlideFade>
                </TabPanel>
                <TabPanel>
                  <Post />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        )}
      </Container>
    </>
  );
};
