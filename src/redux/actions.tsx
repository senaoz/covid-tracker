import { Dispatch } from "redux";
import fetchRegions from "../services/fetchRegions";

export const FETCH_REGIONS_REQUEST = "FETCH_REGIONS_REQUEST";
export const FETCH_REGIONS_SUCCESS = "FETCH_REGIONS_SUCCESS";
export const FETCH_REGIONS_FAILURE = "FETCH_REGIONS_FAILURE";

export const fetchRegionsRequest = () => ({
  type: FETCH_REGIONS_REQUEST,
});

export const fetchRegionsSuccess = (data: any) => ({
  type: FETCH_REGIONS_SUCCESS,
  payload: data,
});

export const fetchRegionsFailure = (error: string) => ({
  type: FETCH_REGIONS_FAILURE,
  payload: error,
});

export const fetchRegionsData = (p: { date: string }) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchRegionsRequest());
    const data = await fetchRegions();
    if ("message" in data) {
      dispatch(fetchRegionsFailure(data.message));
    } else {
      dispatch(fetchRegionsSuccess(data));
    }
  };
};
