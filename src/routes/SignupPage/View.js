import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleSubmit = (e) => {
    this.props.requestSignup({
      redirect: () => this.props.history.push('/login'),
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
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

SignupPage.defaultProps = {
  requestSignup: () => ({}),
};

SignupPage.propTypes = {
  requestSignup: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
