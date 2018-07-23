import {requestBookAndSimilars} from '../../../actions/book';
import {addToCart} from '../../../actions/cart';
import * as React from 'react';
import { Segment, Label, Button } from 'semantic-ui-react'
//import { StoreState } from '../../types/';
import { connect, Dispatch } from 'react-redux';
import BOOK from '../../../types/book';
import { List } from 'semantic-ui-react'
import { PassedProps } from '../index';
import { Image } from 'semantic-ui-react'
import { Grid} from 'semantic-ui-react'
import { Container} from 'semantic-ui-react'



class BookDetails extends React.Component<any | PassedProps,any,any>{
	constructor(props : any) {
		super(props);
	}

	componentDidMount() {
		this.props.requestBookAndSimilars(this.props.selectedId);
	}

	componentWillReceiveProps(nextProps : any){
		if(this.props.selectedId !== nextProps.selectedId){
			this.props.requestBookAndSimilars(nextProps.selectedId);
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
				<Button content='Back' icon='arrow left' secondary onClick={() => this.props.onReset()} />
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
							<Grid.Column>
								<div key={similar.id} >
									{similar.author}
							{similar.title}
							<Image src={similar.image} size='medium' rounded />
							<List> 
								{similar.tags.map( (tag : string, id : number) => (
									<Label key={tag} color='blue'>{tag}</Label>
									))}
							</List>
						</div>
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

export function mapStateToProps({books,selectedId}: any) {
	const { selectedBook, similar } = books;
	return {
		...selectedBook,
		series: selectedBook.series || selectedBook.title, 
		similarBooks: similar
	}
}

export function mapDispatchToProps(dispatch: Dispatch<any>) {
	return {
		requestBookAndSimilars: (id : number) => dispatch(requestBookAndSimilars(id)),
		addToCart: (id: number) => dispatch(addToCart(id)),
	};
}

export default connect<any,any,any>(mapStateToProps, mapDispatchToProps)(BookDetails);
