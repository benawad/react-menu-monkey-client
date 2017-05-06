import React from 'react';

import { Link } from 'react-router';
import { Header, Container } from 'semantic-ui-react';

import NavBar from './NavBar';

const Main = React.createClass({
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center">
          <Link to="/">Menu Monkey</Link>
        </Header>
        <NavBar {...this.props} />
        {React.cloneElement(this.props.children, this.props)}
      </Container>
    );
  },
});

export default Main;

