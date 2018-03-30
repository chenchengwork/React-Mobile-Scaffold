import { connect } from 'react-redux';
import Delay from '../../components/Delay'

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps
	};
};

const DelayComponent = connect(mapStateToProps)(Delay);

export default () => <DelayComponent />;
