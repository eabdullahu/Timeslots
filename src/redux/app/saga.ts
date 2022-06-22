import { put, call, takeLatest } from 'redux-saga/effects';
import Timeslot from 'types/Timeslot';
import { fetchDataSuccess, fetchDataError } from './actions'
import { fetchDataService } from './services';
import { FETCH_DATA } from './types'

// watcher
export function* timeslotsWatcher() {
  yield takeLatest(FETCH_DATA, INIT);
}

export function* INIT() {
  try {
    const response = yield call(fetchDataService);
    const array = response.data;
    for(let i of array){
      i.time_slots.sort((a: Timeslot, b: Timeslot) => +a.start_time - +b.start_time);
    }
    yield put(fetchDataSuccess(array));
  } catch (error) { 
    console.log(error);
    yield put(fetchDataError(error.message))
  }
}