import {call, fork, put, takeLatest} from 'redux-saga/effects';

import constants, {url} from '../../utils/constants';
import {callRestApiGet} from '../../utils/api';
import {HomeActions, updateUsersList} from '../../actions/home/homeActions';
import {useDispatch} from 'react-redux';
import store from '../../store';

function* getUsers() {
  const users = yield call(callRestApiGet, constants.url.getUsers);
  if (users) {
    yield store.dispatch(updateUsersList(users));
  } else {
    console.info('error retrieving users');
  }
  return;
}

function* navigateToUserDetails() {}

function* watchHome() {
  yield takeLatest(HomeActions.GET_USERS, getUsers);
}

const homeSaga = [fork(watchHome)];

export default homeSaga;
