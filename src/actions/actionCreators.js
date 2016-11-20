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
