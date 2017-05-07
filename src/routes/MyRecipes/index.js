import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestMyRecipe } from '../../modules/recipe/actions';

function mapStateToProps(state) {
  return {
    myRecipes: state.myRecipes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestMyRecipe,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
