import { rapidApiHeaders, rapidApiURL } from "./config";
import axios from "axios";

export interface ErrorResponse {
  message: string;
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

export const fetchTotalReports = async (
  date?: string,
): Promise<ReportData[] | ErrorResponse> => {
  const options = {
    method: "GET",
    url: `${rapidApiURL}/reports/total`,
    params: { date },
    headers: rapidApiHeaders,
  };

  try {
    const response = await axios.request(options);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const result: ReportData[] = await response.data.data;
    return result;
  } catch (error) {
    // @ts-ignore
    return { message: error.message };
  }
};

export const fetchReports = async (
  region_province?: string,
  iso?: string,
  region_name?: string,
  date?: string,
): Promise<ReportData[] | ErrorResponse> => {
  const options = {
    method: "GET",
    url: `${rapidApiURL}/reports`,
    params: {
      region_province,
      iso,
      region_name,
      date,
    },
    headers: rapidApiHeaders,
  };

  try {
    const response = await axios.request(options);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const result: ReportData[] = await response.data.data;
    return result;
  } catch (error) {
    // @ts-ignore
    return { message: error.message };
  }
};
