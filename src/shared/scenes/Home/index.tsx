import * as React from 'react';
import { Dropdown, Segment } from 'semantic-ui-react'
import Book from './components/Book';
import './Home.css';

type State = {
	selectedId: number | null,
}

class Home extends React.Component<any,State> {
	constructor(props : any) {
		super(props);
		this.state = {
			selectedId: null 
		};
	}

	render() {
		console.log(this.state);	
		return (
			<div>
				{ this.state.selectedId !== null ?
				<Book id={this.state.selectedId} />
				: 
					<Segment>
						<Dropdown
							placeholder='Select a Book'
							options={[
								{ text: 'Harry Potter', value: 1 },
								{ text: 'Lord of the Rings', value: 2 },
								{ text: 'Game of Thrones', value: 3 },
								{ text: 'Sherlock Holmes', value: 4 },
								{ text: 'Murder in the Orient Express', value: 5 },
								{ text: 'Neuromancer', value: 6 },
								{ text: 'Ready Player One', value: 7 },
							]}
							onChange={(e, selected) => this.setState({selectedId: selected.value} as State)}

							fluid
							search
							selection
						/>
					</Segment>
					}
			</div>
			);
	}
}

export default Home;
