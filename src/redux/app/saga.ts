import { put, call, takeLatest } from 'redux-saga/effects';
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
    console.log(response);
    yield put(fetchDataSuccess(response));
  } catch (error) { 
    console.log(error);
    yield put(fetchDataError(error.message))
  }
}