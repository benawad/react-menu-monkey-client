import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import RecipeCard from './RecipeCard';

class MyRecipes extends Component {
  constructor(props) {
    super(props);
    console.log('MyRecipes constructor');
    const loggedIn = this.props.user.hasOwnProperty('data');
    if (loggedIn) {
      this.props.fetchMyRecipes(this.props.user.data._id);
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow={5}>
        {this.props.myRecipes.map((recipe, i) => <RecipeCard {...this.props} key={i} recipe={recipe}/>)}
      </Card.Group>
    );
  }
}

export default MyRecipes;
