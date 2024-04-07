import {
  FETCH_REGIONS_FAILURE,
  FETCH_REGIONS_REQUEST,
  FETCH_REGIONS_SUCCESS,
} from "./actions";
import { RegionData } from "../services/fetchRegions";

interface RegionsState {
  regions: RegionData[];
  loading: boolean;
  error: string | null;
}

const initialState: RegionsState = {
  regions: [],
  loading: false,
  error: null,
};

const regionsReducer = (state = initialState, action: any): RegionsState => {
  switch (action.type) {
    case FETCH_REGIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REGIONS_SUCCESS:
      return {
        ...state,
        regions: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_REGIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default regionsReducer;
