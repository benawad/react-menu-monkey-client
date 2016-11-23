import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react'

class SingleRecipe extends Component {

  constructor(props) {
    super(props);

    this.props.fetchRecipe(this.props.params.recipeId);
  }

  render() {
    const recipe = this.props.currRecipe;
    return (
      <div>
        <Header as='h1' textAlign='center' >{recipe.name}</Header>
        <Image src={recipe.imageURL} size='medium' centered />
      </div>
    )
  }
};

export default SingleRecipe;


