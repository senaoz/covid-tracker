import axios from "axios";
import { ErrorResponse } from "./fetchReports";
import { rapidApiHeaders, rapidApiURL } from "./config";

export interface ProvincesData {
  iso?: string;
  name?: string;
  province: string;
  lat: string;
  long: string;
}

const fetchProvinces = async (
  iso: string,
): Promise<ProvincesData[] | ErrorResponse> => {
  const options = {
    method: "GET",
    url: `${rapidApiURL}/provinces`,
    params: { iso },
    headers: rapidApiHeaders,
  };

  try {
    const response = await axios.request(options);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const result: ProvincesData[] = await response.data.data;
    return result;
  } catch (error) {
    // @ts-ignore
    return { message: error.message };
  }
};

export default fetchProvinces;
