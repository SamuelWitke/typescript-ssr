import * as React from 'react';
import Home from './scenes/Home';
import { Route } from "react-router";
import SideContainer from './components/SideBar';
import { Container } from 'semantic-ui-react'
import { Grid} from 'semantic-ui-react'

function App() {
	return (
		<Grid celled>
			<Grid.Row>
				<Grid.Column width={3} style={{overflow:'hidden'}}>
					<SideContainer/>
				</Grid.Column>
				<Grid.Column width={13}>
					<Container style={{float:"right"}}>
						<Route exact path="/" component={Home} />
					</Container>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		);
}

export default App;
