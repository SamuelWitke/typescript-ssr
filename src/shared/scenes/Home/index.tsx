import * as React from 'react';
import { Dropdown, Segment } from 'semantic-ui-react'
import Book from './components/Book';
//import './Home.css';

export type PassedProps = {
	selectedId : number
}

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

	onReset = () => {
		this.setState({
			selectedId: null 
		});
	}

	onSelectedChange = (value : any) => {
		this.setState({selectedId: value} as State, () => console.log("onSelectedChange",this.state)) 
	}

	render() {
		return (
			<div>
				{ this.state.selectedId !== null ?
				<Book selectedId={this.state.selectedId} onReset={this.onReset} />
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
							onChange={(e, selected) => this.onSelectedChange(selected.value)}
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
