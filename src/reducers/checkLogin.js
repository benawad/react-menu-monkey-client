function checkIfLoggedIn(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case 'AUTH_GOOD':
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
