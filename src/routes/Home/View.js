import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

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

Home.defaultProps = {
  requestRecentRecipes: () => ({}),
  recipes: [],
};

Home.propTypes = {
  requestRecentRecipes: PropTypes.func,
  recipes: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
};
