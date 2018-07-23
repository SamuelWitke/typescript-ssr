import * as React from 'react'
import { Button, Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react'


export default class SidebarContainer extends React.Component {
	state = { visible: false }

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
			<Menu.Item as='a'>
			<Icon name='home' />
			Home
			</Menu.Item>
			<Menu.Item as='a'>
			<Icon name='user' />
			User
			</Menu.Item>
			<Menu.Item as='a'>
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
