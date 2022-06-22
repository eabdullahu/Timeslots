import { Company } from '../../types/Company';
import { 
  FETCH_DATA, 
  FETCH_DATA_SUCCESS, 
  FETCH_DATA_ERROR,
  SELECT_TIMESLOT,
  REMOVE_TIMESLOT
} from './types'

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const fetchDataSuccess = (companies: Array<Company>) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    companies
  }
});

export const fetchDataError = (error: string) => ({
  type: FETCH_DATA_ERROR,
  payload: {
    error
  }
});

export const selectTimeSlotAct = (key: number, value: number) => ({
  type: SELECT_TIMESLOT,
  payload: {
    key,
    value
  }
});

export const removeTimeSlotAct = (key: number) => ({
  type: REMOVE_TIMESLOT,
  payload: {
    key
  }
});