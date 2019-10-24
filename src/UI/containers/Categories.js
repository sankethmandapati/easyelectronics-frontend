import { connect } from 'react-redux';
import Categories from '../components/Categories';
import { getAll } from '../../utils/redux/actions/categories';

const mapStateToProps = (state) => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps, { getAll })(Categories);