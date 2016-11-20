function login(state = false, action) {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      return true;
      
    default:
      return state;
  }
}


export default login;
