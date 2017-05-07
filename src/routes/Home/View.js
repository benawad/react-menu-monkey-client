import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import RecipeList from '../../components/RecipeList';

export default class Home extends Component {

  componentWillMount() {
    this.props.requestRecentRecipes({
      query: { $sort: { createdAt: -1 } },
    });
  }

  render() {
    return (
      <div>
        <Divider />
        <RecipeList recipes={this.props.recipes} />
      </div>
    );
  }
}
