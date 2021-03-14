export const HomeActions = {
  GET_USERS: 'HOME/GET_USERS',
  SET_USER_PROFILE: 'HOME/SET_USER_PROFILE',
  UPDATE_USERS_LIST: 'HOME/UPDATE_USERS_LIST',
};

export const getUsers = () => {
  return {type: HomeActions.GET_USERS};
};

export const setUserProfile = payload => {
  return {type: HomeActions.SET_USER_PROFILE, payload: payload};
};

export const updateUsersList = payload => {
  return {type: HomeActions.UPDATE_USERS_LIST, payload: payload};
};
