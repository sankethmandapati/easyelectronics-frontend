import { connect } from 'react-redux';
import AddPaymentOptions from '../components/AddPaymentOptions';
import { create } from '../../utils/redux/actions/paymentOptions';

export default connect(null, { create })(AddPaymentOptions);