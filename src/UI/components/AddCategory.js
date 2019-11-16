import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Checkbox from './Checkbox/index';
import '../../styles/forms.scss';

export default ({
    create, 
    getById,
    updateCategory,
    category
}) => {
    const { id } = useParams();
    const [complementary, setComplementary] = useState(false);
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
                <Checkbox 
                    id={ 'complementary_category' } 
                    label={ 'This is a complementary category (available to all for Free)' }
                    checked={ complementary }
                    onChange={ () => setComplementary(!complementary) }
                    name='complementary'
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}