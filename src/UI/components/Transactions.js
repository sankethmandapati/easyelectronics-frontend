import React, {
    useEffect
} from 'react';

export default ({ 
    create, 
    getAll, 
    categories = [],
    selectCategory,
    selectedCategories
}) => {
    useEffect(() => {
        if(!categories || (categories.length < 1))
            getAll();
    }, []);
    return (
        <div>
            <form onSubmit={ (e) => {
                e.preventDefault();
                create(e.target, selectedCategories);
            } }>
                <input type="text" name="transactionId" />
                <input type="date" name="transactionDate" />
                <select name="transactionMode">
                    <option value="" >Select a transaction mode</option>
                    <option value="NEFT" >NEFT</option>
                    <option value="IMPS" >IMPS</option>
                    <option value="UPI" >UPI</option>
                    <option value="PAYTM" >PAYTM</option>
                </select>
                { 
                    categories.map(c => (
                        <>
                            <input 
                                type="checkbox" 
                                checked={selectedCategories.includes(c._id)} 
                                onChange={() => selectCategory(c._id)} /> { c.name }
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