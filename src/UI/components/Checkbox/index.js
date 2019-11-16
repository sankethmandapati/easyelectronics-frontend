import React from 'react';
import './index.scss';

export default ({
    id = 'custom_checkbox',
    label = '',
    value = '',
    onChange = () => {},
    checked = false,
    name = 'custom_checkbox'
}) => (
    <label htmlFor={ id } className="container">{ label }
        <input 
            type="checkbox"
            id={ id }
            checked={ checked }
            onChange={ () => onChange(value) }
            name={ name }
        />
        <span className="checkmark"></span>
    </label>
);