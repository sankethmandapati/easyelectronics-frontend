import React, {
    useEffect
} from 'react';
import parse from 'html-react-parser';
import '../../styles/createSubscription.scss'

export default ({ 
    create, 
    getAll, 
    subscriptionPlans = [],
    getById
}) => {
    useEffect(() => {
        if(subscriptionPlans.length < 1)
            getAll();
    }, []);
    return (
        <div>
            {/* <form onSubmit={ (e) => {
                e.preventDefault();
                const reqBody = {
                    transactionId: e.target.transactionId.value,
                    transactionMode: e.target.transactionMode.value,
                    subscriptionPlan: e.target.subscriptionPlan.value
                };
                console.log("reqBody: ", reqBody);
                create(reqBody);
            } }> */}
                {/* <input type="text" name="transactionId" placeholder="Transaction Id" />
                <select name="transactionMode">
                    <option value="" >Select a transaction mode</option>
                    <option value="NEFT" >NEFT</option>
                    <option value="IMPS" >IMPS</option>
                    <option value="UPI" >UPI</option>
                    <option value="PAYTM" >PAYTM</option>
                </select> */}
                <div className="row">
                    { 
                        subscriptionPlans.map(plan => (
                            <div key={plan._id} className="col-lg-4 col-md-6 col-sm-12">
                                <section className="card">
                                    <div className="card__header">
                                        <h2>
                                            {
                                                plan.name
                                            }
                                        </h2>
                                        <ul>
                                            {
                                                plan.categories.map(category => (
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
                                            plan.description ? parse(plan.description) : null
                                        }
                                    </div>
                                    <button onClick={ () => getById(plan._id) }>
                                        >
                                    </button>
                                </section>
                            </div>
                        ))
                    }
                </div>
                    {/* // <>
                    //     <input 
                    //         type="radio"
                    //         name="subscriptionPlan" 
                    //         value={ c._id } /> { c.name }
                    //     <br />
                    // </> */}
                {/* <button type="submit">
                    Submit
                </button>
            </form> */}
        </div>
    );
}