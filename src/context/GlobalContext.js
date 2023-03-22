// import { createContext } from "react";
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Create initial value
const initValue = {
  users: [
    { id: 1, user: "ibrahim" },
    { id: 2, user: "adel" },
    { id: 3, user: "nada" },
  ],
};

//Create Context
export const GlobalContext = createContext(initValue);

//Create Provider COmponents
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initValue);

  //action (dispatch)
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
