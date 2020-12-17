import { Action, ActionTypes } from "./actions";
import { AppState } from "./AppState"

const reducer = (state: AppState, action: Action): AppState => {
  if (action.type === ActionTypes.HOMES_LOADED) {
    return {
      ...state,
      homes: action.payload
    };
  } 
  return state;
};

export default reducer;