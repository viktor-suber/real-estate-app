export interface AppState {
  loading: boolean;
  error: any;
  homes: any[];
  locations: any[];
  selectedLocation: string;
  selectedMinPrice: number;
  selectedMaxPrice: number;
  selectedMinBedrooms: number;
  selectedMaxBedrooms: number;
}