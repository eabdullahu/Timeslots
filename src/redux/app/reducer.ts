import { 
  FETCH_DATA, 
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  SELECT_TIMESLOT,
  REMOVE_TIMESLOT
} from './types'
import { Company } from '../../types/Company';

export interface CompanyState {
  isLoading: boolean;
  error: string;
  companies: Array<Company>;
  selectedTimeSlots?: any
}

export const initialState: CompanyState = {
  isLoading: false,
  companies: null,
  error: null,
  selectedTimeSlots: {}
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
    case SELECT_TIMESLOT: 
      return {
        ...state,
        selectedTimeSlots: {
          ...state.selectedTimeSlots,
          [action.payload.key]: action.payload.value
        }
      }
    case REMOVE_TIMESLOT: 
      const selectedTimeSlots = state.selectedTimeSlots;
      if(selectedTimeSlots[action.payload.key] >= 0) delete selectedTimeSlots[action.payload.key];
      return {
        ...state,
        selectedTimeSlots 
      }
    default:
      return state
  }
};

export default timeslotsReducer;