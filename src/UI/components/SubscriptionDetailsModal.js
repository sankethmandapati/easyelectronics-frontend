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
    description,
    premimAmount,
    transactionTypes
}) => {
    const [transactionType, setTransactionType] = useState('');
    const [selectedAccountId, setSelectedAccountId] = useState('');
    return (
        <div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                    <section>
                        {
                            description ? parse(description) : null
                        }
                    </section>
                    <section>
                        <span>
                            Payment amount: <strong>
                                {
                                    premimAmount
                                }
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
                                        accountDetails.map(a => (
                                            <>
                                                <input type="radio" value={ a._id } /> {
                                                    returnLabelByTransactionType()
                                                }
                                                {
                                                    // (transactionType === 'NETBANKING') && selectedAccountId ? (
                                                        
                                                    // ) : null
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                                <input type="text" accountDetails name="transactionId" placeholder="Transaction Id" />
                            </>
                        ) : null
                    }
                </div>
            </div>  {
                accountDetails.map(a)
            }
        </div>
    );
}