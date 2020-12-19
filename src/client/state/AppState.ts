export interface AppState {
  loading: boolean;
  error: any;
  homes: any[];
  locations: any[];
  minPrice: number;
  maxPrice: number;
  minBedrooms: number;
  maxBedrooms: number;
  selectedLocation: string;
  selectedMinPrice: number;
  selectedMaxPrice: number;
  selectedMinBedrooms: number;
  selectedMaxBedrooms: number;
}