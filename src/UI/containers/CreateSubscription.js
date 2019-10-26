import {connect} from 'react-redux';
import CreateSubscription from '../components/CreateSubscription';
import { create } from '../../utils/redux/actions/subscription';
import { getAll } from '../../utils/redux/actions/subscriptionPlans';

const mapStateToProps = (state) => ({
    subscriptionPlans: state.subscriptionPlans.plans
});

export default connect(mapStateToProps, {
    create,
    getAll
})(CreateSubscription);