import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestCreateRecipe } from '../../modules/recipe/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestCreateRecipe,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
