import {all} from 'redux-saga/effects';

import homeSaga from './home/homeSaga';

export function* rootSaga() {
  yield all([...homeSaga]);
}
