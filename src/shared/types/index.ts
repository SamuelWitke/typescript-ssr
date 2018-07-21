import BOOK from './book';
interface BOOKSTATE {
	selectedBook : BOOK
}

export interface StoreState {
	languageName: string;
	enthusiasmLevel: number;
	book: BOOKSTATE,
}
