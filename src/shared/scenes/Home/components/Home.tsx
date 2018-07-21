import * as React from 'react';
import { Dropdown, Segment } from 'semantic-ui-react'
import './Home.css';

interface State {
	selectedId: number,
}

class Home extends React.Component<any,State> {
	public state: State = {
		selectedId: 999 
	};

	constructor(props : any) {
		super(props);
		this.props.requestBookAndSimilars(1);
	}

	render() {
		return (
			<div>
				{ this.state.selectedId == null ?
				<div> Get good </div>	
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
							onChange={(e, selected)=> this.setState((prevState) => {selectedId: selected.value})}
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
