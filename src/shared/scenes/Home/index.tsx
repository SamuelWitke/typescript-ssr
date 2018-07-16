import Hello from './components/Home';
import * as actions from '../../actions/example';
import { StoreState } from '../../types/';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
	return {
		enthusiasmLevel,
		name: languageName,
	};
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
	return {
		onIncrement: () => dispatch(actions.incrementEnthusiasm()),
		onDecrement: () => dispatch(actions.decrementEnthusiasm()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
