import {createSelector} from 'reselect';
import {HomeActions, UserActions} from '../../actions/home/homeActions';

const initialState = {
  usersList: [],
  user: null,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HomeActions.UPDATE_USERS_LIST:
      return {...state, usersList: action.payload};
    case HomeActions.SET_USER_PROFILE:
      return {...state, user: action.payload};
    default:
      return state;
      break;
  }
};

const users = state => state.home.usersList;
const user = state => state.home.user;

export const getUsersList = createSelector([users], data => data);
export const getUserData = createSelector([user], data => data);
