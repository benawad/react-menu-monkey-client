function recipes(state = [], action) {
  switch (action.type) {
    case "RECENT_RECIPES_SUCCEEDED":
      return action.recipes;
      
    default:
      return state;
  }
}


export default recipes;
