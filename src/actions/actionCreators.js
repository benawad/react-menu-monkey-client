export function recentRecipes() {
  return {
    type: 'RECENT_RECIPES_REQUESTED',
  };
}


export function addRecipe(name, description, ingredients, imageURL) {
  return {
    type: 'ADD_RECIPE_REQUESTED',
    name,
    description,
    ingredients,
    imageURL,
  };
}

export function finishAddRecipe() {
  return {
    type: 'ADD_RECIPE_FINISHED',
  };
}

export function fetchRecipe(id) {
  return {
    type: 'RECIPE_FETCH_REQUESTED',
    id,
  };
}

export function fetchMyRecipes(id) {
  return {
    type: 'MY_RECIPE_FETCH_REQUESTED',
    id,
  };
}
