import * as React from "react";
import { Segment, Image, Grid, Divider, Header } from "semantic-ui-react";
export default () => (
  <Segment style={{ padding: '0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
      <Divider
        as='h4'
        className='header'
        horizontal
        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
        <a href='#'>Education</a>
      </Divider>
      <Grid.Row container textAlign='center'>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            <a href="http://www.brooklyn.cuny.edu/web/home.php">
              City University of New York-Brooklyn College
          </a>
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            2014 - 2018
          </p>
          <p style={{ fontSize: '1.33em' }}>
            Bachelors Of Science, Computer Science (3.3)
                </p>
          <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Brooklyn_College_Logo.svg/1280px-Brooklyn_College_Logo.svg.png" />
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            <a href="https://cunytechprep.nyc/">
              CUNY Tech Prep
            </a>
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            2017 - 2018
            </p>
          <p style={{ fontSize: '1.33em' }}>
            CUNY Tech Prep is an industry-informed program for exceptional computer science students in the CUNY senior college system.
            </p>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Column >
              <Image src='https://cunytechprep.nyc/c2images/otherImages/ttp.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://cunytechprep.nyc/c2images/otherImages/cisdd.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://cunytechprep.nyc/c2images/otherImages/cuny.png' />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)
