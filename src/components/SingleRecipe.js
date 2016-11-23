import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react'

class SingleRecipe extends Component {
  render() {
    const { recipeId } = this.props.params;
    const i = this.props.recipes.findIndex((recipe) => recipe._id === recipeId);
    if (i === -1) {
      console.log(recipeId);
      console.log(i);
      return (<h1>crap</h1>);
    }
    const recipe = this.props.recipes[i];

    return (
      <div>
        <Header as='h1' textAlign='center' >{recipe.name}</Header>
        <Image src={recipe.imageURL} size='medium' centered />
      </div>
    )
  }
};

export default SingleRecipe;


