import {connect} from 'react-redux';
import Home from '../components/Home';
import { authenticate,  logout } from '../../utils/redux/actions/auth';

const mapStateToProps = ({auth}) => ({
    isAuthenticated: auth.isAuthenticated,
    userVerificationDone: auth.userVerificationDone,
    userDetails: auth.userDetails
});

export default connect(mapStateToProps, {
    authenticate,
    logout
})(Home);