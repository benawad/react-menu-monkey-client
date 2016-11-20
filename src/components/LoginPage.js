import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import { host } from '../services/api';

class LoginPage extends Component {

  //constructor(props) {
    //super(props);
    //this.recipeClick = this.recipeClick.bind(this);
    //this.RecipeCard = this.RecipeCard.bind(this);
  //}

  //recipeClick(id) {
    //browserHistory.push(`view/${id}`);
  //}

  //RecipeCard(recipe, i) {
    //return (
        //<Card
        //key={i}
        //centered={true}
        //image={recipe.imageURL}
        //header={recipe.name}
        //meta='Step one'
        //onClick={this.recipeClick.bind(null, recipe.id)}
        //description={recipe.steps[0]}
        ///>
    //);
  //}

  render() {
    return (
      <form method="post" action={`${host}/auth/local`}>
        <fieldset>
          <input type="email" name="email" placeholder="email"/>
        </fieldset>
        <fieldset>
          <input type="password" name="password" placeholder="password"/>
        </fieldset>
        <button type="submit" >
          Login
        </button>
      </form>
    );
  }
}

export default LoginPage;
