import * as React from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Icon,
} from 'semantic-ui-react'
import HomepageHeading from './HomeHeading';
import { connect, Dispatch } from 'react-redux';
import { push } from 'react-router-redux';
import { CSSProperties } from 'react';

type State = {
  sidebarOpened: boolean
}


const imageURL = "https://raw.githubusercontent.com/SamuelWitke/website/master/src/components/Home/img/20170704_182759.jpg"

const landingImage: CSSProperties = {
  height: '100%',
  backgroundImage: `url(${imageURL}) `,
  backgroundSize: "cover ",
};


class MobileContainer extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidebarOpened: false,
    }
  }

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'
              onClick={() => this.props.changeLocation('/store')}
            >
              Demo Store</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'
              onClick={() => this.props.changeLocation('/sign-up')}
            >
              Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}
                      onClick={() => this.props.changeLocation('/sign-up')}
                    >
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <Segment
                inverted
                textAlign='center'
                style={{ ...landingImage, minHeight: 350, padding: '1em 0em' }}
                vertical
              >
                <HomepageHeading mobile />
              </Segment>
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}
function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    changeLocation: (loc: string) => dispatch(push(loc)),
  }
}
export default connect<any, any, any>(null, mapDispatchToProps)(MobileContainer);
