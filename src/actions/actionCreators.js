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

export function finishLogin() {
  return {
    type: 'LOGIN_FINISHED',
  }
}

export function addRecipe(name, description, ingredients, imageURL) {
  return {
    type: 'ADD_RECIPE_REQUESTED',
    name,
    description,
    ingredients,
    imageURL
  }
}

export function finishAddRecipe() {
  return {
    type: 'ADD_RECIPE_FINISHED',
  }
}

export function authGood(user) {
  return {
    type: 'AUTH_GOOD',
    user
  }
}

export function logout() {
  return {
    type: 'LOGOUT_REQUESTED',
  } 
}

export function fetchRecipe(id) {
  return {
    type: 'RECIPE_FETCH_REQUESTED',
    id
  } 
}

export function fetchMyRecipes(id) {
  return {
    type: 'MY_RECIPE_FETCH_REQUESTED',
    id
  } 
}
