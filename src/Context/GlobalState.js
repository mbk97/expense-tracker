import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  transactions: [],
};

//create context
export const GlobalContext = createContext(initialState);

//Provider component for the context api

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  const deleteTransactions = (id) => {
    dispatch({
      type: "DELETE_TRANSACTIONS",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
