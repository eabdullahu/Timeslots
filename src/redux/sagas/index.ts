import { all, fork } from 'redux-saga/effects';
import { timeslotsWatcher } from '../app/saga';

export function* rootSaga() {
  yield all([
    fork(timeslotsWatcher)
  ])
}

export default rootSaga;
