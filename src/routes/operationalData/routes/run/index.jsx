import { connect } from 'react-redux';
import Run from '../../components/Run'

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps
	};
};

const RunComponent = connect(mapStateToProps)(Run);

export default () => <RunComponent />;
