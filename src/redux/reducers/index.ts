import { combineReducers } from 'redux';
import timeslotsReducer from "../app/reducer";
import { CompanyState } from '../app/reducer'

export interface RootReducer {
  ts: CompanyState
}

const rootReducer = combineReducers({
  ts: timeslotsReducer,
});

export default rootReducer;
