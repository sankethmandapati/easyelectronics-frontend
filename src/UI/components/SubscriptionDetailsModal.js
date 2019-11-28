import React, { useState } from 'react';
import parse from 'html-react-parser';

const returnLabelByTransactionType = (transactionType, accountDetail) => {
    switch(transactionType) {
        case 'NETBANKING':
            return accountDetail.bankName;
        case 'PAYTM':
            return accountDetail.paytmNumber;
        case 'UPI':
            return accountDetail.upiId;
        default:
            return null;
    }
}

export default ({
    plan,
    // description,
    // premimAmount = 0,
    // transactionTypes,
    paymentOptions = []
}) => {
    const [transactionType, setTransactionType] = useState('');
    const [selectedAccountId, setSelectedAccountId] = useState('');
    console.log("paymentOptions: ", paymentOptions);
    return (
        <div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                    <section>
                        {
                            plan.description ? parse(plan.description) : null
                        }
                    </section>
                    <section>
                        <span>
                            Payment amount: <strong>
                                {
                                    plan.amount || 0
                                } /-
                            </strong>
                        </span>
                    </section>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                    <select value={ transactionType } onChange={e => setTransactionType(e.target.value)}>
                        <option value="">
                            Select a transaction type
                        </option>
                        <option value="NETBANKING">
                            Net Banking
                        </option>
                        <option value="UPI">
                            UPI
                        </option>
                        <option value="PAYTM">
                            Paytm
                        </option>
                    </select>
                    {
                        transactionType ? (
                            <>
                                <div>
                                    {
                                        paymentOptions.reduce((details, a) => {
                                            if(a.modeOfTransaction === transactionType) {
                                                return [
                                                    ...details,
                                                    <div key={ a._id }>
                                                        <input type="radio" value={ a._id } /> {
                                                            returnLabelByTransactionType(transactionType, a)
                                                        }
                                                    </div>
                                                ];
                                            }
                                            return [...details];
                                        }, [])
                                    }
                                </div>
                                <input type="text" name="transactionId" placeholder="Transaction Id" />
                            </>
                        ) : null
                    }
                </div>
            </div>  {
                paymentOptions.map(a => null)
            }
        </div>
    );
}