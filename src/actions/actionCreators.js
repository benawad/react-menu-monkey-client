export function recentRecipes() {
  return {
    type: 'RECENT_RECIPES_REQUESTED'
  }
}

export function signup(username, password) {
  return {
    type: 'SIGNUP_REQUESTED',
    username,
    password
  }
}

export function finishSignup() {
  return {
    type: 'SIGNUP_FINISHED',
  }
}

export function login(username, password) {
  return {
    type: 'LOGIN_REQUESTED',
    username,
    password
  }
}
