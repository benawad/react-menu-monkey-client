import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.user.hasOwnProperty('data')) {
        const redirectAfterLogin = this.props.location.pathname;
        browserHistory.push(`/login?next=${redirectAfterLogin}`);
      }
    }

    render() {
      return (
        <div>
          {this.props.user.hasOwnProperty('data') === true
                        ? <Component {...this.props} />
                        : null
                    }
        </div>
      );
    }
    }

  const mapStateToProps = state => ({});

  return connect(mapStateToProps)(AuthenticatedComponent);
}
