import {connect} from 'react-redux';
import CreateSubscription from '../components/CreateSubscription';
import { create } from '../../utils/redux/actions/subscription';
import { getAll, getById, setShowSubscriptionModal } from '../../utils/redux/actions/subscriptionPlans';
import { openCustomPopover } from '../../utils/redux/actions/popovers';
import { getAll as getAllPaymentOptions } from '../../utils/redux/actions/paymentOptions';

const mapStateToProps = ({ subscriptionPlans, paymentOptions }) => ({
    subscriptionPlans: subscriptionPlans.plans,
    plan: subscriptionPlans.plan,
    showModal: subscriptionPlans.showModal,
    paymentOptions
});

export default connect(mapStateToProps, {
    create,
    getAll,
    getById,
    openCustomPopover,
    setShowSubscriptionModal,
    getAllPaymentOptions
})(CreateSubscription);