import { combineReducers } from 'redux';
import timeslotsReducer from "../app/reducer";

const rootReducer = combineReducers({
  ts: timeslotsReducer,
});

export default rootReducer;
