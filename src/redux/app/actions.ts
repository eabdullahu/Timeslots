import { Company } from '../../types/Company';
import { 
  FETCH_DATA, 
  FETCH_DATA_SUCCESS, 
  FETCH_DATA_ERROR
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