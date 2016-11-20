function addRecipe(state = false, action) {
  switch (action.type) {
    case "ADD_RECIPE_SUCCEEDED":
      return true;
    case "ADD_RECIPE_FINISHED":
      return false;
      
    default:
      return state;
  }
}

export default addRecipe;
