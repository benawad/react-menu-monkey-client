import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestRecentRecipes } from '../../modules/recipe/actions';

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestRecentRecipes,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
