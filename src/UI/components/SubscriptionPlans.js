import React, { useState } from 'react';
import TextEditor from './TextEditor';
import Checkbox from './Checkbox/index';
import '../../styles/subscriptionPlans.scss';
import '../../styles/forms.scss';

export default ({
    onSubmit,
    categories
}) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [description, setDescription] = useState('');
    const selectCategory = (c) => {
        const selected = [...selectedCategories];
        const index = selected.indexOf(c);
        if(index > -1) 
            selected.splice(index, 1);
        else
            selected.push(c);
        setSelectedCategories(selected);
    }
    return (
        <div className="subscriptionPlans">
            <form onSubmit={ (e) => {
                e.preventDefault();
                onSubmit(e.target, description, selectedCategories);
            } }>
                <input type="text" name="name" placeholder="Name" />
                <TextEditor 
                    onChange={ setDescription }
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="textEditorWrapper"
                    editorClassName="textEditorArea"
                />
                <input type="text" name="description" placeholder="Description" />
                <input type="number" name="validityInDays" placeholder="Validity (in days)" />
                <input type="number" name="amount" placeholder="Amount" />
                <h5>
                    Categories
                </h5>
                { 
                    categories.map(c => (
                        <Checkbox
                            key={ c._id } 
                            id={ c._id } 
                            label={ c.name }
                            value={ c._id } 
                            checked={ selectedCategories.includes(c._id) }
                            onChange={ selectCategory }
                        />
                    ))
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}