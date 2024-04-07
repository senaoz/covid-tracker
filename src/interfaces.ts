export interface City {
  name: string;
  date: string;
  fips: number;
  lat: string;
  long: string;
  confirmed: number;
  deaths: number;
  confirmed_diff: number;
  deaths_diff: number;
  last_update: string;
}

export interface Province {
  province: string;
  lat: string;
  long: string;
  name: string;
  cities: City[];
}

export interface ReportData {
  date: string;
  last_update: string;
  confirmed: number;
  confirmed_diff: number;
  deaths: number;
  deaths_diff: number;
  recovered: number;
  recovered_diff: number;
  active: number;
  active_diff: number;
  fatality_rate: number;
}

export interface CountryData extends ReportData {
  name?: string;
  iso?: string;
  region: Province;
}

export interface MarkerData {
  markerOffset: number;
  name: string;
  coordinates: [number, number];
}
