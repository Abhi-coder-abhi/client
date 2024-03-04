import React, { createContext, useContext, useReducer } from "react";

const cartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.key) {
    case "ADD":
      return [...state,{}]
  
    default:
      console.log("error in reducer");
      break;
  }
};

export const cartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <cartDispatchContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </cartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);
