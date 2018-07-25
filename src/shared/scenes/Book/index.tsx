import {removeBook, requestBookAndSimilars} from '../../actions/book';
import {addToCart} from '../../actions/cart';
import * as React from 'react';
import { Segment, Label, Button } from 'semantic-ui-react'
//import { StoreState } from '../../types/';
import { connect, Dispatch } from 'react-redux';
import BOOK from '../../types/book';
import { List } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Grid} from 'semantic-ui-react'
import { Container} from 'semantic-ui-react'
import { push } from 'react-router-redux';
import { Card} from 'semantic-ui-react'


class BookDetails extends React.Component<any,any,any>{
	constructor(props : any) {
		super(props);
		const { id } = this.props.match.params;
		this.props.requestBookAndSimilars(parseInt(id));
	}

	componentWillReceiveProps(nextProps : any){
		const { id } = this.props.match.params;
		const nextId = nextProps.match.params.id;
		if(id !== nextId ){
			this.props.requestBookAndSimilars(parseInt(nextId));
		}
	}

	handleAddToCart = () => {
		this.props.addToCart(this.props.id);
	}

	render() {
		const { id, series, title, author, image, tags, similarBooks } = this.props;
		return (
			<Segment.Group>
				<Segment size='big'> {series}
				</Segment>
				<Segment>
					<Button content='Back' icon='arrow left' secondary onClick={() => this.props.removeBook()} />
					<Container textAlign='center'>
						<Image  centered src={image} size='medium' rounded />
						<h1>ID: {id} - {title}</h1>
						<h2>By {author}</h2>
						{ tags && tags.map((tag : string) => <Label key={tag} color='yellow'>{tag}</Label>) }
						<Button content='Buy' icon='shop' onClick={() => this.props.addToCart(this.props.selectedId)} />
					</Container>
					<div className='similar'>
						<Grid columns={3} divided>
							<Grid.Row>
								<h3>You might also like:</h3>
							</Grid.Row>
							<Grid.Row>
								{ similarBooks && similarBooks.map( (similar : BOOK) => (
									<Grid.Column key={similar.id} >
										<Card onClick={() => this.props.push(`/book/${similar.id}`)} >
										<Image src={similar.image} size='medium' rounded />
										<Card.Header>{similar.title}</Card.Header>
										<Card.Content>
											<Card.Meta>
												<span className='date'>{similar.author}</span>
											</Card.Meta>
											<Card.Description>{similar.series}</Card.Description>
										</Card.Content>
										<List>
											{similar.tags.map( (tag : string, id : number) => (
												<Label key={id} color='blue'>{tag}</Label>
											))}
										</List>
									</Card>
								</Grid.Column>
							)) }
						</Grid.Row>
					</Grid>
				</div>
			</Segment>
		</Segment.Group>
	)
}
}

export function mapStateToProps({books}: any) {
	const {selectedBook, similar} = books;
	return {
		...selectedBook,
		similarBooks : similar,
	}
}

export function mapDispatchToProps(dispatch: Dispatch<any>) {
	return {
		push: (loc: string) => dispatch(push(loc)),
		requestBookAndSimilars: (id : number) => dispatch(requestBookAndSimilars(id)),
		removeBook: () => { dispatch(push('/')); dispatch(removeBook);},
		addToCart: (id: number) => dispatch(addToCart(id)),
	};
}
export default connect<any,any,any>(mapStateToProps, mapDispatchToProps)(BookDetails);
