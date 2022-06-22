import { 
  FETCH_DATA, 
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from './types'
import { Company } from '../../types/Company';

export interface contractorRegistrationReducer {
  isLoading: boolean;
  error: string;
  companies: Array<Company>;
}

export const initialState = {
  isLoading: false,
  companies: null,
  error: null
};

export const timeslotsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        companies: action.payload.companies,
        isLoading: false,
        error: null
      };
    case FETCH_DATA_ERROR:
      return initialState;
    default:
      return state
  }
};

export default timeslotsReducer;