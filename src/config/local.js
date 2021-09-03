import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
    isLogin: false,
    user : null,
}

const userReducer = (state, action) => {
    switch (action.type) {
      case "REGISTER":
        return {
          ...state,
          isLogin: true,
          user: action.payload,
        };
      case "LOGIN":
        return {
          ...state,
          isLogin: action.payload,
          user: null,
        };
        case "LOGOUT":
        return {
          ...state,
          isLogin: action.payload,
          user: null,
        };
      default:
        console.log("ERR");
        throw new Error("unknown cases");
    }
  };
  
  export const UserProvider = (props) => {
    const [userState, userDispatch] = useReducer(userReducer, initialState);
    return (
      <UserContext.Provider value={{ userState, userDispatch }}>
        {props.children}
      </UserContext.Provider>
    );
  };