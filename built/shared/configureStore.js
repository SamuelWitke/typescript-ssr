import { createStore } from 'redux';
import { enthusiasm } from './reducers/example';
function configureStore() {
    return createStore(enthusiasm, {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
    });
}
export default configureStore;
//# sourceMappingURL=configureStore.js.map