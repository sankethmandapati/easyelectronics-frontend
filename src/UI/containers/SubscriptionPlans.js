import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../utils/redux/actions/categories';
import SubscriptionPlans from '../components/SubscriptionPlans';
import { create } from '../../utils/redux/actions/subscriptionPlans';

class SubscriptionPlansContainer extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if(!this.props.categories || this.props.categories.length === 0)
            this.props.getAll();
    }
    onSubmit(e, categories) {
        const {
            name,
            description,
            amount,
            validityInDays
        } = e.target;
        this.props.create({
            name: name.value,
            description: description.value,
            amount: amount.value,
            validityInDays: validityInDays.value,
            categories: categories
        });
    }
    render() {
        return (
            <SubscriptionPlans categories={this.props.categories} onSubmit={this.onSubmit} />
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps, {
    getAll,
    create
})(SubscriptionPlansContainer);