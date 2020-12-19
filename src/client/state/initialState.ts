import { AppState } from "./AppState";

export const initialState: AppState = {
  loading: false,
  error: null,
  homes: [],
  locations: [],
  selectedLocation: '',
  // TODO - MAKE MAXIMUMS DYNAMIC
  selectedMinPrice: 0,
  selectedMaxPrice: 5000000,
  selectedMinBedrooms: 0,
  selectedMaxBedrooms: 20
};