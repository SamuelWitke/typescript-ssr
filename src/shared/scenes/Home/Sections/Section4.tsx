import * as React from 'react';
import { Segment, Container, Header, Grid, List, } from 'semantic-ui-react';
export default () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Personal Projects' />
            <List link inverted>
              <List.Item as='a' href="http://partifystart.herokuapp.com" > Partify </List.Item>
              <List.Item as='a' href="https://samuelwitke.github.io/website/" >React App Projects</List.Item>
              <List.Item as='a' href="https://github.com/SamuelWitke/Door-bell" > Door Bell Api</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' inverted>
              Samuel Witke
              </Header>
            <p>
              Samuel Witke @2018
              </p>
            <p>
              Page Image Taken by Samuel Witke in Copenhagen Denmark
              </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)
