import { getFilteredHomeIds } from "../shared/methods/getFilteredHomeIds";
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

  if (action.type === ActionTypes.HOMES_LOAD_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  };

  if (action.type === ActionTypes.FILTER_HOMES) {
    console.log(getFilteredHomeIds(state.homes, action.payload));
    
    const { minPrice, maxPrice, minBedrooms, maxBedrooms } = action.payload || null;

    return {
      ...state,
      minPrice: minPrice ? minPrice : 0,
      maxPrice: maxPrice ? maxPrice : 0,
      minBedrooms: minBedrooms ? minBedrooms : 0,
      maxBedrooms: maxBedrooms ? maxBedrooms : 0
    };
  }

  return state;
};

export default reducer;