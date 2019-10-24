import { connect } from 'react-redux';
import AddCategory from '../components/AddCategory';
import { create, updateCategoryObj, getById } from '../../utils/redux/actions/categories';

const mapStateToProps = ({ categories }) => ({
    category: categories.category
});

const mapActionsToProps = {
    create,
    updateCategory: updateCategoryObj,
    getById
};

export default connect(mapStateToProps, mapActionsToProps)(AddCategory);