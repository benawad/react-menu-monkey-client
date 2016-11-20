function signup(state = false, action) {
  switch (action.type) {
    case 'SIGNUP_SUCCEEDED':
      return true;
    case 'SIGNUP_FINISHED':
      return false;
      
    default:
      return state;
  }
}


export default signup;
