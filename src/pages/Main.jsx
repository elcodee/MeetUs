import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Container,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ChatLits } from "../components/ChatLits";
import { Header } from "../components/Header";
import { UserContext } from "../config/local";

export const Main = () => {
  const { userState } = useContext(UserContext);
  const data = [1, 2, 3, 4, 5];
  const route = useHistory();
  return (
    <>
      <Header />

      <Container>
        {!userState.isLogin ? (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            Authentication Required !
          </Alert>
        ) : (
          <>
            <Alert
            borderRadius="10px"
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="100px"
              mb={4}
            >
              <ChatIcon boxSize="20px" />
              <AlertTitle mt={1} fontSize="md">
               Welcome Ram
              </AlertTitle>
              <AlertDescription maxWidth="sm">
               You have <i>3 Unread Message</i>
              </AlertDescription>
            </Alert>

            {data.map((item, key) => (
              <div ml={4} key={key} onClick={() => route.push("/chat")}>
                <Center>
                  <ChatLits />
                </Center>
              </div>
            ))}
          </>
        )}
      </Container>
    </>
  );
};
