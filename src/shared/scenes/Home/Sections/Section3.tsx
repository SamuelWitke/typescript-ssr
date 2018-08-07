import { Segment, Container, Header, Divider } from "semantic-ui-react";
import React = require("react");

export default () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Container text>
      <Header as='h3' style={{ fontSize: '2em' }}>
        My Current Position
        </Header>
      <h3>Content Management Systems Developer at Information Builders</h3>
      <p style={{ fontSize: '1.33em' }}>
        As a Content Management Systems Developer, I developed and supported the company's Content Management Systems. Leveraging knowledge of advanced Content Management and Web development techniques/technologies to support various output formats within the CMS and extend the customer-facing web applications.
        </p>
      <h3> Technologies used  </h3>
      <ul>
        <li> Graphql,React.js, Apollo.js.</li>
        <li> Headless CMS.</li>
        <li> RESTFUL Api.</li>
        <li> JavaScript, CSS, and HTML.</li>
        <li> Java/J2EE.</li>
        <li> Linux, Apache2, MySQL, Drupal, PHP.</li>
        <li> CGI-Perl</li>
        <li> Strong knowledge of technology implementation methodologies, such as Agile and SDLC</li>
      </ul>
      <Divider
        as='h4'
        className='header'
        horizontal
        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
      </Divider>
    </Container>
  </Segment>
)
