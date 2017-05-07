import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { logout } from '../../modules/user/actions';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
