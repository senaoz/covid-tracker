import { ErrorResponse } from "./fetchReports";
import { rapidApiHeaders, rapidApiURL } from "./config";
import axios from "axios";

export interface RegionData {
  iso: string;
  name: string;
}

const fetchRegions = async (): Promise<RegionData[] | ErrorResponse> => {
  const options = {
    method: "GET",
    url: `${rapidApiURL}/regions`,
    headers: rapidApiHeaders,
  };

  try {
    const response = await axios.request(options);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const result: RegionData[] = response.data.data;
    return result;
  } catch (error) {
    // @ts-ignore
    return { message: error.message };
  }
};

export default fetchRegions;
