import { createStore } from 'redux';
import { enthusiasm } from './reducers/example';
var store = createStore(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});
export default store;
//# sourceMappingURL=configureStore.js.map