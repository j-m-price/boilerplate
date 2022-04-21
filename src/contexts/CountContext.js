import * as React from "react";

const CountContext = React.createContext();

const initialState = {
  count: 10,
};

const countReducer = (countState, action) => {
  switch (action.type) {
    case "increment": {
      return { count: countState.count + 1 };
    }
    case "decrement": {
      return { count: countState.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CountProvider = ({ children }) => {
  const [countState, dispatch] = React.useReducer(countReducer, initialState);
  const value = { countState, dispatch };
  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

const useCount = () => {
  const context = React.useContext(CountContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { CountProvider, useCount };
