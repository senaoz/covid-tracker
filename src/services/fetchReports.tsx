import { rapidApiHeaders, rapidApiURL } from "./config";
import { CountryData, ReportData } from "../interfaces";
import axios from "axios";

export interface ErrorResponse {
  message: string;
}
export const fetchTotalReport = async (
  date?: string,
): Promise<ReportData | ErrorResponse> => {
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
    const result: ReportData = await response.data.data;
    return result;
  } catch (error) {
    // @ts-ignore
    return { message: error.message };
  }
};

export const fetchReports = async (
  iso?: string,
  date?: string,
  region_province?: string,
  region_name?: string,
): Promise<CountryData[] | ErrorResponse> => {
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
    const result: CountryData[] = await response.data.data;
    return result;
  } catch (error) {
    // @ts-ignore
    return { message: error.message };
  }
};
