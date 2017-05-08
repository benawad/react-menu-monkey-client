import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { requestAuth } from '../modules/user/actions';

export default function getUser(Component) {
  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      this.props.requestAuth(() => {});
    }

    render() {
      return (
        <Component />
      );
    }
 }

  AuthenticatedComponent.defaultProps = {
    requestAuth: () => ({}),
  };

  AuthenticatedComponent.propTypes = {
    requestAuth: PropTypes.func,
  };

  const mapStateToProps = () => ({});

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      requestAuth,
    }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}
