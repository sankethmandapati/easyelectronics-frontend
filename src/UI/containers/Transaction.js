import {connect} from 'react-redux';
import Transaction from '../components/Transactions';
import { create, selectCategory } from '../../utils/redux/actions/transactions';
import { getAll } from '../../utils/redux/actions/categories';

const mapStateToProps = (state) => ({
    categories: state.categories.categories,
    selectedCategories: state.transactions.categories
});

export default connect(mapStateToProps, {
    create,
    getAll,
    selectCategory
})(Transaction);