import { connect } from 'react-redux';
import subscription from '../components/Subscriptions';
import { 
    getPendingRequests,
    approve,
    reject
} from '../../utils/redux/actions/subscription';

const mapStateToProps = (state) => ({
    pendingRequests: state.subscription.pendingRequests,
    isAdmin: (state.auth.userDetails.role === 'admin')
});

export default connect(mapStateToProps, {
    getPendingRequests,
    approve,
    reject
})(subscription);
