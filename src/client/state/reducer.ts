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

    const locations = action.payload.reduce((seed: any, current: any) => {
      const stateName = current.property.address.state;
      const location = `${current.property.address.city}, ${stateName}`;
      if (!seed.includes(stateName)) {
        seed.push(stateName);
      }; if (!seed.includes(location)) {
        seed.push(location);
      }
      return seed;
    }, []);

    return {
      ...state,
      loading: false,
      homes: action.payload,
      locations: locations
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

    const { selectedLocation, selectedMinPrice, selectedMaxPrice, selectedMinBedrooms, selectedMaxBedrooms } = action.payload || null;

    const minMax = {
      minPrice: selectedMinPrice ? selectedMinPrice : state.selectedMinPrice,
      maxPrice: selectedMaxPrice ? selectedMaxPrice : state.selectedMaxPrice,
      minBedrooms: selectedMinBedrooms ? selectedMinBedrooms : state.selectedMinBedrooms,
      maxBedrooms: selectedMaxBedrooms ? selectedMaxBedrooms : state.selectedMaxBedrooms
    };

    if (selectedLocation) {

      return {
        ...state,
        selectedLocation: selectedLocation,
        ...minMax
      };
    }
  
    return {
      ...state,
      ...minMax
    }

  }

  return state;
};

export default reducer;