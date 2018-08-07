import * as React from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react'
const Link = require('react-router-hash-link');


interface Props {
  mobile: boolean,
}

export default class HomepageHeading extends React.Component<Props>{
  render() {
    const { mobile }: { mobile: boolean } = this.props;
    return (
      <Container text>
        <Header
          as='h1'
          content='Samuel Witke'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Portfolio.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Link.HashLink to="/#about">
          <Button secondary size='huge'
          >
            Get Started
            <Icon name='angle left' />
          </Button>
        </Link.HashLink>
      </Container>
    )
  }
}
