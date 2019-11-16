import {connect} from 'react-redux';
import Login from '../components/Login';
import {login} from '../../utils/redux/actions/auth';

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
});

export default connect(
    mapStateToProps, { login }
)(Login);