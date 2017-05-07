import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestAddRecipe } from '../../modules/recipe/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestAddRecipe,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
