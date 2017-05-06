import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { signup } from '../../modules/user/actions';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signup,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
