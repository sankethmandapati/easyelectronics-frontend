import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

export default ({
    create, 
    getById,
    updateCategory,
    category
}) => {
    const { id } = useParams();
    useEffect(() => {
        if(id) {
            getById(id);
        }
    }, []);
    return (
        <div>
            <form onSubmit={create}>
                <input type="text" name="name" placeholder="Category Name" 
                    value={category.name} onChange={ updateCategory } required />
                <input type="text" name="description" placeholder="Description" 
                    value={category.description} onChange={ updateCategory } required />
                <input type="text" name="premiumAmount" placeholder="Premium Amount" 
                    value={category.premiumAmount} onChange={ updateCategory } required />
                <input type="text" name="validityInDays" placeholder="Validity (in days)" 
                    value={category.validityInDays} onChange={ updateCategory } required />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}