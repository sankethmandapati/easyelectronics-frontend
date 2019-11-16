import { connect } from 'react-redux';
import Popovers from '../components/Popovers/index';
import { setShowModal } from '../../utils/redux/actions/popovers';

const mapStateToProps = ({ popovers }) => ({ ...popovers });

export default connect(mapStateToProps, { setShowModal })(Popovers);