import { createContext, useReducer } from "react";
import { isJSDocTypeExpression, JsxEmit } from "typescript";
import { initialState } from "./initialState";
import reducer from "./reducer";

export const AppContext = createContext<any>(initialState);

export const AppProvider = ({ children }: any): JSX.Element => {
  const [appData, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
    value={{appData}}
  >
    { children }
  </AppContext.Provider>
  );
};