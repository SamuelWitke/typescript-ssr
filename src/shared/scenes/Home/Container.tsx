
import * as React from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { connect, Dispatch } from 'react-redux';
import { push } from 'react-router-redux';
import HomepageHeading from './HomeHeading';

type State = {
  fixed: boolean | undefined
}


class DesktopContainer extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      fixed: false
    };
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'
                  onClick={() => this.props.changeLocation('/store')}
                >
                  Demo Store</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading mobile={false} />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}
function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    changeLocation: (loc: string) => dispatch(push(loc)),
  }
}
export default connect<any, any, any>(null, mapDispatchToProps)(DesktopContainer);
