import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.login({
      redirect: () => {
        const next = (this.props.location.query || {}).next || '';
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

export default LoginPage;
