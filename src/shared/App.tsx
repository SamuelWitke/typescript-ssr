import * as React from 'react';
import Home from './scenes/Home';
import Book from './scenes/Book';
import User from './scenes/User'
import { Route } from "react-router";
import SideContainer from './components/SideBar';
import { Container } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

function App() {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3} style={{ overflow: 'hidden' }}>
          <SideContainer />
        </Grid.Column>
        <Grid.Column width={13}>
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path={'/book/:id'} component={Book} />
            <Route exact path={'/user'} component={User} />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
