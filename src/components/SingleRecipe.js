import React, { Component } from 'react';

class SingleRecipe extends Component {
  render() {
    const { recipeId } = this.props.params;
    const i = this.props.recipes.findIndex((recipe) => recipe.id === recipeId);
    const recipe = this.props.recipes[i];

    return (
      <div>
        {JSON.stringify(recipe)}
      </div>
    )
  }
};

export default SingleRecipe;


