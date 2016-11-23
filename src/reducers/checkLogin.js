function checkIfLoggedIn(state = {}, action) {
  switch (action.type) {
    case 'CHECK_LOGIN_DONE':
      return action.user;
    case 'LOGOUT_DONE':
      return {};
    case 'LOGIN_SUCCEEDED':
      return action.user;

    default:
      return state;
  }
}


export default checkIfLoggedIn;
