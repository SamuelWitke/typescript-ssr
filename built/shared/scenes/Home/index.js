import Hello from './components/Home';
import * as actions from '../../actions/example';
import { connect } from 'react-redux';
export function mapStateToProps(_a) {
    var enthusiasmLevel = _a.enthusiasmLevel, languageName = _a.languageName;
    return {
        enthusiasmLevel: enthusiasmLevel,
        name: languageName,
    };
}
export function mapDispatchToProps(dispatch) {
    return {
        onIncrement: function () { return dispatch(actions.incrementEnthusiasm()); },
        onDecrement: function () { return dispatch(actions.decrementEnthusiasm()); },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
//# sourceMappingURL=index.js.map