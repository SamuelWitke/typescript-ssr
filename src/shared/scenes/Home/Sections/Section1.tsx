import * as React from 'react';
import { Segment, Grid, Label, Header, Icon } from 'semantic-ui-react';
import TypistLoop from '../TypistLoop';
const Typist = require('react-typist').default;

export default () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h1'>Professional</Header>
          <Header as='h3' style={{
            fontSize: '2em', margin: '1em 0',
            display: "inline",
            whiteSpace: 'nowrap',
          }}>
            <TypistLoop interval={3000}>
              {
                ['Software Engineer', "Fullstack Developer", "Linux Developer", "Front-End Developer", "JavaScript Engineer",]
                  .map(text => <Typist key={text} startDelay={1000} avgTypingSpeed={40}
                  >{
                      <Label size="massive" color="blue">
                        {text}
                      </Label>
                    }</Typist>)
              }
            </TypistLoop>
          </Header>
          <br />
          <Segment vertical>
            Experienced Software Engineer with a demonstrated history of working in cutting edge full stack technologies.
                </Segment>
          <Segment vertical>
            Strong engineering professional with a Bachelor's degree focused in Computer Science from Brooklyn College.
                </Segment>
          <h4> Professional Development Experience in ...</h4>
          <Segment vertical>
            <Label color='red' horizontal>
              Php
              </Label>
            <Label color='green' horizontal>
              Java/Java EE
              </Label>
            <Label color='blue' horizontal>
              Node
              </Label>
            <Label color='purple' horizontal>
              React/Redux
                </Label>
            <Label color='yellow' horizontal>
              Express
              </Label>
            <Label color='violet' horizontal>
              VBA
              </Label>
            <Label color='olive' horizontal>
              Python
              </Label>
          </Segment>
          <br />
          <h4> Personal Development Experience in ...</h4>
          <Segment vertical>
            <Label color='teal' horizontal>
              Go
              </Label>
            <Label color='orange' horizontal>
              ASP.NET
              </Label>
            <Label color='pink' horizontal>
              Django
              </Label>
            <Label color='purple' horizontal>
              Flask
                </Label>
            <Label color='grey' horizontal>
              C / C++
              </Label>
          </Segment>
          <br />
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            <Icon name="chart line" />
            Highly Motivated Self-Driven
            </Header>

          <p style={{ fontSize: '1.33em' }}>
            Continually developing and perfecting runtimes and preformance stacks, from personal and professional projects to leetcode and hackerrank challenges.
              </p>
          <p style={{ fontSize: '1.33em' }}>
            This website is a Typescript Server Side React/Redux Application.
            Inspect this website to view.

          </p>
          <p style={{ fontSize: '1.33em' }}>
            Source code available
            <a href="https://github.com/SamuelWitke/typescript-ssr"> here</a>
          </p>
          <a href="https://www.linkedin.com/in/samuelwitke/">
            <Icon size="huge" name="linkedin square" />
          </a>
          <a href="https://github.com/SamuelWitke">
            <Icon size="huge" name="github" />
          </a>
          <a href="https://docs.google.com/document/d/1Q7Ed1mpcnPyNY3sZK6LZyoUrv-YRULx255IWvTHOHow/edit">
            <Icon size="huge" name="file text" />
          </a>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)
