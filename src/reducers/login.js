function login(state = false, action) {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      return true;

    case 'LOGIN_FINISHED':
      return false;
      
    default:
      return state;
  }
}


export default login;
