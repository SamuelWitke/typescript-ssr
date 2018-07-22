import {requestBookAndSimilars} from '../../../actions/book';
import {addToCart} from '../../../actions/cart';
import * as React from 'react';
import { Segment, Label, Button } from 'semantic-ui-react'
//import { StoreState } from '../../types/';
import { connect, Dispatch } from 'react-redux';
import BOOK from '../../../types/book';



class BookDetails extends React.Component<any,any,any>{
	constructor(props : any) {
		super(props);
	}

	componentDidMount() {
		this.props.requestBookAndSimilars(this.props.id);
	}

	handleAddToCart = () => {
		this.props.addToCart(this.props.id);
	}

	render() {
		const { id, series, title, author, image, tags, similarBooks } = this.props;
		return (
			<Segment.Group>
				<Segment size='big'>{series}</Segment>
				<Segment>
					<img src={image} alt={name} className='cover' />
					<h1>ID: {id} - {title}</h1>
					<h2>By {author}</h2>
					{ tags && tags.map((tag : string) => <Label key={tag} color='yellow'>{tag}</Label>) }
			<Button content='Buy' icon='shop' onClick={this.handleAddToCart} />
			<div className='similar'> 
				<h3>You might also like:</h3>
				{ similarBooks && similarBooks.map( (similar : BOOK) => (
					<div key={similar.id} >
						{similar.author}
						{similar.title}
					<ul> 
						{similar.tags.map( (tag : string, id : number) => (
							<li key={id} > {tag} </li>
							))}
					</ul>
				</div>
				)) }
			</div>

		</Segment>
	</Segment.Group>
	)
	}
}

export function mapStateToProps({ books}: any) {
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
