import React, {useState} from 'react';

export default ({
    create
}) => {
    const [modeOfTransaction, setModeOfTransaction] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        create({
            modeOfTransaction,
            accountHoldersName: e.target.accountHoldersName.value,
            ...(modeOfTransaction === 'NETBANKING' ? {
                accountNumber: e.target.accountNumber.value,
                bankName: e.target.bankName.value,
                ifscCode: e.target.ifscCode.value
            } : (modeOfTransaction === 'PAYTM') ? {
                paytmNumber: e.target.paytmNumber.value
            } : (modeOfTransaction === 'UPI') ? {
                upiId: e.target.upiId.value
            } : {})
        });
    }
    return (
        <div>
            <form onSubmit={ onSubmit }>
                <select 
                    onChange={e => setModeOfTransaction(e.target.value)}
                    value={ modeOfTransaction } 
                    name="modeOfTransaction">
                    <option value="">
                        Select a transaction type
                    </option>
                    <option value="NETBANKING">
                        Net Banking
                    </option>
                    <option value="PAYTM">
                        PAYTM
                    </option>
                    <option value="UPI">
                        UPI
                    </option>
                </select>
                {
                    modeOfTransaction ? (
                        <input 
                            type="text" 
                            name="accountHoldersName" 
                            placeholder="Account Holder's Name" 
                        />
                    ) : null
                }
                {
                    (modeOfTransaction === 'NETBANKING') ? (
                        <>
                            <input type="text" name="accountNumber" placeholder="Account number" />
                            <input type="text" name="bankName" placeholder="Bank Name" />
                            <input type="text" name="ifscCode" placeholder="IFSC Code" />
                        </>
                    ) : (modeOfTransaction === 'PAYTM') ? (
                        <input type="text" name="paytmNumber" placeholder="Paytm number" />
                    ) : (modeOfTransaction === 'UPI') ? (
                        <input type="text" name="upiId" placeholder="UPI Id" />                        
                    ) : null
                }
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
    }