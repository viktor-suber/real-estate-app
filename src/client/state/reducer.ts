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

    const { minPrice, maxPrice, minBedrooms, maxBedrooms } = action.payload || null;

    return {
      ...state,
      displayedHomes: getFilteredHomeIds(state.homes, action.payload),
      minPrice: minPrice ? minPrice : state.minPrice,
      maxPrice: maxPrice ? maxPrice : state.maxPrice,
      minBedrooms: minBedrooms ? minBedrooms : state.minBedrooms,
      maxBedrooms: maxBedrooms ? maxBedrooms : state.maxBedrooms
    };
  }

  return state;
};

export default reducer;