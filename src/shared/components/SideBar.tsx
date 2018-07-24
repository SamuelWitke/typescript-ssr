import * as React from 'react'
import { Button, Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react'
import { connect, Dispatch } from 'react-redux';
import { push } from 'react-router-redux';

class SidebarContainer extends React.Component<any,any> {
	state = { visible: true}

	handleButtonClick = () => this.setState({ visible: !this.state.visible })

	handleSidebarHide = () => this.setState({ visible: false })

	render() {
		const { visible } = this.state
		return (
			<div style={{height: '100vh'}} >
			<Button onClick={this.handleButtonClick}>Navigation</Button>
			<Sidebar.Pushable as={Segment}>
			<Sidebar
			as={Menu}
			animation='overlay'
			icon='labeled'
			inverted
			onHide={this.handleSidebarHide}
			vertical
			visible={visible}
			width='thin'
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
			User
			</Menu.Item>
			<Menu.Item as='a'
			onClick={() => this.props.changeLocation('/cart')}
			>
			<Icon name='shopping cart' />
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
export function mapDispatchToProps(dispatch : Dispatch<any>) {
	return {
		changeLocation: (loc : string) => dispatch(push(loc))
	}
}
export default connect<any,any,any>(null,mapDispatchToProps)(SidebarContainer);
