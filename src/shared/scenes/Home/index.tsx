import Hello from './components/Home';
import {requestBookAndSimilars} from '../../actions/book';
import {addToCart} from '../../actions/cart';
import { StoreState } from '../../types/';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName, book}: StoreState) {
	const { selectedBook, similar } = book;
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

export default connect<any,any>(mapStateToProps, mapDispatchToProps)(Hello);
