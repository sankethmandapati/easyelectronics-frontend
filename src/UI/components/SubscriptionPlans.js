import React, { useState } from 'react';

export default ({
    onSubmit,
    categories
}) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const selectCategory = (c) => {
        const selected = [...selectedCategories];
        const index = selected.indexOf(c);
        if(c > -1) 
            selected.splice(index);
        else
            selected.push(c);
        setSelectedCategories(selected);
    }
    return (
        <div>
            <form onSubmit={ (e) => {
                e.preventDefault();
                onSubmit(e, selectedCategories);
            } }>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="description" placeholder="Description" />
                <input type="number" name="validityInDays" placeholder="Validity (in days)" />
                <input type="number" name="amount" placeholder="Amount" />
                { 
                    categories.map(c => (
                        <>
                            <input type="checkbox" onChange={() => selectCategory(c._id)} /> { c.name }
                            <br />
                        </>
                    ))
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}