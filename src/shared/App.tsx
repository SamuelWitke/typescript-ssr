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
import Home from './scenes/Home';
/*
const Store = () => (
        {routes.map(({ path, exact, component: Component, ...rest }: Routes) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
              <Component {...props} {...rest} />
            )} />
          ))}
        )
*/

export default () => (
  <Switch>
    <Route path="/" exact={true} render={Home} />
    {routes.map(({ path, exact, component: Component, ...rest }: Routes) => (
      <Route key={path} path={path} exact={exact} render={(props) => (
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={4} style={{ overflow: 'hidden' }}>
              <SideContainer />
            </Grid.Column>
            <Grid.Column width={12}>
              <Container>
                <Component {...props} {...rest} />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )} />
    ))}
  </Switch>
);
