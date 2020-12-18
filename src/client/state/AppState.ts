export interface AppState {
  loading: boolean;
  error: any;
  homes: any[];
  locations: any[];
  selectedLocation: string;
  minPrice: number;
  maxPrice: number;
  minBedrooms: number;
  maxBedrooms: number;
}