import { AppState } from "./AppState";

export const initialState: AppState = {
  loading: false,
  error: null,
  homes: [],
  displayedHomes: [],
  minPrice: 0,
  maxPrice: 0,
  minBedrooms: 0,
  maxBedrooms: 0
};