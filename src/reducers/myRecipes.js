function myRecipes(state = [], action) {
  switch (action.type) {
    case "MY_RECIPE_FETCH_DONE":
      return action.myRecipes;
      
    default:
      return state;
  }
}


export default myRecipes;
