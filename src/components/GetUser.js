import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { app } from '../modules';
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

  const mapStateToProps = state => ({});

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      requestAuth,
    }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}
