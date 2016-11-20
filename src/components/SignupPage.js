import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react'

class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.signup(this.state.username, this.state.password); 
    e.preventDefault();
    this.setState({ username: '', password: '' });
  }

  componentWillUpdate(nextProps, nextState){
    if (nextProps && nextProps.succSignup) {
      nextProps.finishSignup();
      browserHistory.push('login');
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Field>
          <label>Email</label>
          <input name='username' onChange={(e) => this.setState({username: e.target.value})} value={this.state.username} placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name='password' onChange={(e) => this.setState({password: e.target.value})} value={this.state.password} placeholder='Password' type='password' />
        </Form.Field>
        <Button type='submit'>Sign up</Button>
      </Form>
    );
  }
}

export default SignupPage;
