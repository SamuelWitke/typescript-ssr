import * as React from 'react';
/*
import Home from './scenes/Home';
import Book from './scenes/Book';
import User from './scenes/User'
import { Route } from "react-router";
*/
import SideContainer from './components/SideBar';
import { Container } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import routes, { Routes } from './routes'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={4} style={{ overflow: 'hidden' }}>
          <SideContainer />
        </Grid.Column>
        <Grid.Column width={12}>
          <Container>
            <Switch>
              {routes.map(({ path, exact, component: Component, ...rest }: Routes) => (
                <Route key={path} path={path} exact={exact} render={(props) => (
                  <Component {...props} {...rest} />
                )} />
              ))}
            </Switch>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
