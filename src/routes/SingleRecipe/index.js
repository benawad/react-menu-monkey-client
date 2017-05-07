import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestRecipe } from '../../modules/recipe/actions';

function mapStateToProps(state) {
  return {
    currRecipe: state.currRecipe,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestRecipe,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
