import React, {
    useEffect
} from 'react';
import parse from 'html-react-parser';
import SubscriptionDetailsModal from './SubscriptionDetailsModal';
import '../../styles/createSubscription.scss';
import Popover from './Popovers';
import { defaultPopoverState } from '../../utils/redux/reducers/popovers';

export default ({ 
    create, 
    getAll, 
    subscriptionPlans = [],
    getById,
    showModal,
    plan,
    openCustomPopover,
    setShowSubscriptionModal,
    getAllPaymentOptions,
    paymentOptions
}) => {
    useEffect(() => {
        if(subscriptionPlans.length < 1) {
            getAll();
            getAllPaymentOptions();
        }
    }, []);
    // useEffect(() => {
    //     if(showModal) {
    //         openCustomPopover({
    //             customComponent: SubscriptionDetailsModal
    //         });
    //     }
    // }, [showModal]);
    return (
        <div>
            <div className="row">
                { 
                    subscriptionPlans.map(p => (
                        <div key={p._id} className="col-lg-4 col-md-6 col-sm-12">
                            <section className="card">
                                <div className="card__header">
                                    <h2>
                                        {
                                            p.name
                                        }
                                    </h2>
                                    <ul>
                                        {
                                            p.categories.map(category => (
                                                <li key={category._id}>
                                                    {
                                                        category.name
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="card__bodyx">
                                    {
                                        p.description ? parse(p.description) : null
                                    }
                                </div>
                                <button onClick={ () => getById(p._id) }>
                                    >
                                </button>
                            </section>
                        </div>
                    ))
                }
            </div>
            <Popover 
                { ...defaultPopoverState } 
                headerTitle={plan.name}
                size='large'
                setShowModal={ setShowSubscriptionModal }
                customComponent={
                    <SubscriptionDetailsModal
                        plan={ plan }
                        paymentOptions={ paymentOptions }
                    />
                }
                showModal={ showModal }
            />
        </div>
    );
}