import "./common/css/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Main } from "./pages/Main";
import { Chat } from "./pages/Chat";
import { useContext } from "react";
import { UserContext } from "./config/local";

function App() {
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
  const { userState } = useContext(UserContext)
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
