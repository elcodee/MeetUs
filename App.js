import "./common/css/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Main } from "./pages/Main";
import { Chat } from "./pages/Chat";
import { useContext, useEffect } from "react";
import { UserContext } from "./config/userContext";
import { API, setToken } from "./config/index";

if (localStorage.getItem("token")) {
  setToken(localStorage.getItem("token"));
}
function App() {
  const { userDispatch } = useContext(UserContext);

  const authcheck = async () => {
    try {
      const response = await API.get("/authorization");
      if (response.status !== 200) {
        return userDispatch({ type: "AUTH_ERROR" });
      }
      let payload = response.data.data;
      payload.token = localStorage.getItem("token");
      await userDispatch({
        type: "AUTH_SUCCESS",
        payload,
      });
    } catch (error) {
      userDispatch({ type: "AUTH_ERROR" });
    }
  };

  useEffect(() => {
    authcheck();
  }, []);
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />

            {/* Private Route */}
            <PrivateRoute path="/home" component={Main} />
            <PrivateRoute path="/chat" component={Chat} />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userState } = useContext(UserContext);
  console.log("state: ", userState);
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          userState.isLogin ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
};

export default App;
