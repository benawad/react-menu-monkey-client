function signup(state = false, action) {
  switch (action.type) {
    case "SIGNUP_SUCCEEDED":
      return true;
      
    default:
      return state;
  }
}


export default signup;
