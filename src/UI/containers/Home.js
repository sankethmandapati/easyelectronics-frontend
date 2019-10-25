import {connect} from 'react-redux';
import Home from '../components/Home';
import {authenticate} from '../../utils/redux/actions/auth';

const mapStateToProps = ({auth}) => ({
    isAuthenticated: auth.isAuthenticated,
    authenticationDone: auth.authenticationDone,
    userDetails: auth.userDetails
});

export default connect(mapStateToProps, {authenticate})(Home);