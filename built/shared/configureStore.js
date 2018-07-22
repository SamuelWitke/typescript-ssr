import { applyMiddleware, createStore } from 'redux';
//import { StoreState } from './types/';
import logger from 'redux-logger/';
import api from './api';
import thunk from 'redux-thunk';
import books from './reducers/book';
import user from './reducers/user';
import cart from './reducers/cart';
import example from './reducers/example';
import { combineReducers } from 'redux';
function configureStore() {
    var store = applyMiddleware(thunk.withExtraArgument(api), logger)(createStore)(combineReducers({
        books: books,
        user: user,
        cart: cart,
        example: example
    }), {
        example: {
            enthusiasmLevel: 1,
            languageName: 'TypeScript',
        },
        books: {
            selectedBook: {},
            similar: [],
        },
    });
    return store;
}
export default configureStore;
//# sourceMappingURL=configureStore.js.map