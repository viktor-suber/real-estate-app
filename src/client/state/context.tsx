import { createContext, useCallback, useEffect, useReducer } from "react";
import { ActionTypes } from "./actions";
import { initialState } from "./initialState";
import reducer from "./reducer";

export const Context = createContext<any>(initialState);

export const Provider = ({ children }: any): JSX.Element => {
  const [appData, dispatch] = useReducer(reducer, initialState);

  const homesUrl = 'http://localhost:3001/api/homes';

  const getHomes = useCallback(() => {
    dispatch({ type: ActionTypes.HOMES_LOADING });
    fetch(homesUrl)
      .then((response) => response.json())
      .then((response) => {
        const data = response;
        dispatch({
          type: ActionTypes.HOMES_LOADED,
          payload: data
        });
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  }, [dispatch]);

  useEffect(() => {
    getHomes();
  }, [getHomes]);

  return (
    <Context.Provider
    value={{appData}}
  >
    { children }
  </Context.Provider>
  );
};