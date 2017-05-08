import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RecipeList from '../../components/RecipeList';

export default class MyRecipes extends Component {

  componentWillMount() {
    /* eslint-disable */
    this.props.requestMyRecipes({
      query: {
        ownerId: this.props.user._id,
      },
    });
    /* eslint-enable */
  }

  render() {
    return (
      <RecipeList recipes={this.props.myRecipes} />
    );
  }
}

MyRecipes.defaultProps = {
  requestMyRecipes: () => ({}),
  user: {},
  myRecipes: [],
};

MyRecipes.propTypes = {
  requestMyRecipes: PropTypes.func,
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
  }),
  myRecipes: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
};
