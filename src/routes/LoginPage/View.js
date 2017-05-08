import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleSubmit = (e) => {
    this.props.requestLogin({
      redirect: () => {
        const params = new URLSearchParams(this.props.location.search);
        const next = params.get('next');
        if (next) {
          this.props.history.push(next);
        } else {
          this.props.history.push('/');
        }
      },
      data: {
        email: this.state.username,
        password: this.state.password,
      },
    });
    e.preventDefault();
    this.setState({ username: '', password: '' });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Field>
          <label>Email</label>
          <input name="username" onChange={e => this.setState({ username: e.target.value })} value={this.state.username} placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" onChange={e => this.setState({ password: e.target.value })} value={this.state.password} placeholder="Password" type="password" />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}

LoginPage.defaultProps = {
  requestLogin: () => ({}),
  location: {},
};

LoginPage.propTypes = {
  requestLogin: PropTypes.func,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
