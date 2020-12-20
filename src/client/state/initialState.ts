import { AppState } from "./AppState";

export const initialState: AppState = {
  loading: false,
  error: null,
  homes: [],
  locations: [],
  minPrice: 0,
  maxPrice: 50000000,
  minBedrooms: 0,
  maxBedrooms: 20,
  selectedLocation: "",
  selectedMinPrice: 0,
  selectedMaxPrice: 0,
  selectedMinBedrooms: 0,
  selectedMaxBedrooms: 0,
};
