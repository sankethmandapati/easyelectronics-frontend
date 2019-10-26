import React, {
    useEffect
} from 'react';

export default ({ 
    create, 
    getAll, 
    subscriptionPlans = []
}) => {
    useEffect(() => {
        if(subscriptionPlans.length < 1)
            getAll();
    }, []);
    return (
        <div>
            <form onSubmit={ (e) => {
                e.preventDefault();
                const reqBody = {
                    transactionId: e.target.transactionId.value,
                    transactionMode: e.target.transactionMode.value,
                    subscriptionPlan: e.target.subscriptionPlan.value
                };
                console.log("reqBody: ", reqBody);
                create(reqBody);
            } }>
                <input type="text" name="transactionId" />
                <select name="transactionMode">
                    <option value="" >Select a transaction mode</option>
                    <option value="NEFT" >NEFT</option>
                    <option value="IMPS" >IMPS</option>
                    <option value="UPI" >UPI</option>
                    <option value="PAYTM" >PAYTM</option>
                </select>
                { 
                    subscriptionPlans.map(c => (
                        <>
                            <input 
                                type="radio"
                                name="subscriptionPlan" 
                                value={ c._id } /> { c.name }
                            <br />
                        </>
                    ))
                }
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}