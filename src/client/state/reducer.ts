import { Action, ActionTypes } from "./actions";
import { AppState } from "./AppState"

const reducer = (state: AppState, action: Action): AppState => {
  if (action.type === ActionTypes.HOMES_LOADING) {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === ActionTypes.HOMES_LOADED) {
    return {
      ...state,
      loading: false,
      homes: action.payload
    };
  }

  if (action.type == ActionTypes.HOMES_LOAD_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  };

  if (action.type === ActionTypes.FILTER_HOMES) {
    return state;
  }

  return state;
};

export default reducer;