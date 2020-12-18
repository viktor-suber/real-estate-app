import { AppState } from "./AppState";

export const initialState: AppState = {
  loading: false,
  error: null,
  homes: [],
  cities: [],
  // TODO - MAKE MAXIMUMS DYNAMIC
  minPrice: 0,
  maxPrice: 5000000,
  minBedrooms: 0,
  maxBedrooms: 20
};