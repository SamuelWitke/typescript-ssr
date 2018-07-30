import * as React from 'react'
import { Button, Icon, Menu, Segment, Sidebar, Label } from 'semantic-ui-react'
import { connect, Dispatch } from 'react-redux';
import { push } from 'react-router-redux';

class SidebarContainer extends React.Component<any, any> {
  state = { visible: true }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    const { user, cart } = this.props;
    return (
      <div style={{ height: '100vh', width: '100%', overflow: 'hidden', padding: '10px', marginLeft: 'auto', marginRight: "auto" }} >
        <Button onClick={this.handleButtonClick}>Navigation</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            style={{ width: '100%', margin: '10px', textAlign: 'center' }}
            visible={visible}
          >
            <Menu.Item as='a'
              onClick={() => this.props.changeLocation('/')}
            >
              <Icon name='home'
              />
              Home
			</Menu.Item>
            <Menu.Item as='a'
              onClick={() => this.props.changeLocation('/user')}
            >
              <Icon name='user'
              />
              {user != null ?
                user.username :
                "User"
              }
            </Menu.Item>
            <Menu.Item as='a'
              onClick={() => this.props.changeLocation('/cart')}
            >

              <Icon name='shopping cart' />
              <Label color='blue' floating style={{ margin: '10px' }}>
                {cart.length}
              </Label>
              Shopping Cart
			</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
function mapStateToProps(state: any) {
  const { user, cart } = state;
  return { user, cart }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    changeLocation: (loc: string) => dispatch(push(loc)),
  }
}
export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(SidebarContainer);
