import * as React from 'react';
import { Dropdown, Segment } from 'semantic-ui-react'
import {requestBookAndSimilars} from '../../actions/book';
//import './Home.css';
import {requestAllBooks} from '../../actions/book';
import { connect, Dispatch } from 'react-redux';
import BOOK from '../../types/book';
import { Grid} from 'semantic-ui-react'
import { Card, Image } from 'semantic-ui-react'
import { push } from 'react-router-redux';

export type PassedProps = {
	selectedId : number
}

type State = {
	selectedId: number | null,
	text: Array<Object>,
}

class Home extends React.Component<any,State> {
	constructor(props : any) {
		super(props);
		this.state = {
			selectedId: null,
			text: [{}],
		};
		this.props.requestAllBooks();
	}

	onReset = () => {
		this.setState({
			selectedId: null
		});
	}

	onSelectedChange = (value : any) => {
		this.setState({selectedId: value} as State, () => this.props.push(`/book/${this.state.selectedId}`));
	}

	componentWillReceiveProps(nextProps : any) {
		if( nextProps.allBooks !== this.props.allBooks) {
			const { allBooks } = nextProps;
			if(allBooks){
				const text = allBooks.map( (book : BOOK) => {return {text: book.title, value: book.id} });
				this.setState({text} as State, () => console.log("onSelectedChange",this.state))
			}
		}
	}

	render() {
		const { text } = this.state;
		const { allBooks,} = this.props;
		let COL1,COL2;
		if(allBooks) {
			COL1 = allBooks.slice(0,allBooks.length /2);
			COL2 = allBooks.slice(allBooks.length /2, allBooks.length);
		}
		return (
			<div>
				<div>
					<Segment>
						<Dropdown
							placeholder='Select a Book'
							options={text}
							onChange={(e, selected) => this.onSelectedChange(selected.value)}
							fluid
							search
							selection
						/>
					</Segment>
					<Segment>
						<Grid>
							<Grid.Row columns={2}>
								<Grid.Column>
									{ COL1 && COL1.map( (book : BOOK) => (
										<Card key={book.id} onClick={() => this.onSelectedChange(book.id)} >
											<Image src={book.image} />
											<Card.Content>
												<Card.Header>{book.title}</Card.Header>
												<Card.Meta>
													<span className='date'>{book.author}</span>
												</Card.Meta>
												<Card.Description>{book.series}</Card.Description>
											</Card.Content>
										</Card>
									))}
								</Grid.Column>
								<Grid.Column>
									{ COL2 && COL2.map( (book : BOOK) => (
										<Card key={book.id} onClick={() => this.onSelectedChange(book.id)} >
											<Image src={book.image} />
											<Card.Content>
												<Card.Header>{book.title}</Card.Header>
												<Card.Meta>
													<span className='date'>{book.author}</span>
												</Card.Meta>
												<Card.Description>{book.series}</Card.Description>
											</Card.Content>
										</Card>
									))}
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
				</div>
		</div>
	);
}
}

export function mapStateToProps({books}: any) {
	const {allBooks,selectedBook, similar} = books;
	return {
		allBooks,
		selectedBook,
		similar,
	}
}

export function mapDispatchToProps(dispatch: Dispatch<any>) {
	return {
		push: (loc: string) => dispatch(push(loc)),
		requestAllBooks: () => dispatch(requestAllBooks()),
		requestBookAndSimilars: (id : number) => dispatch(requestBookAndSimilars(id)),
	};
}

export default connect<any,any,any>(mapStateToProps, mapDispatchToProps)(Home);
