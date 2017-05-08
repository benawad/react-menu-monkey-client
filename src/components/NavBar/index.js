import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestLogout } from '../../modules/user/actions';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestLogout,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
