import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const defaultHeaderTitles = {
    success: 'Success!',
    error: 'Error!',
    default: 'Alert'
};

export default ({
    headerTitle,
    type = 'default'
}) => (
    <section className={`easyModal__header modal_${type }`}>
        {
            (type === 'success') ? (
                <FontAwesomeIcon 
                    icon={ faCheckCircle } 
                    color="#3EAB36" 
                    className="easyModal__header--icon" 
                />
            ) : (type === 'error') ? (
                <FontAwesomeIcon 
                    icon={ faTimesCircle } 
                    color="#FF0000" 
                    className="easyModal__header--icon"
                />
            ) : null
        }
        <h2>
            {
                headerTitle || defaultHeaderTitles[type] || defaultHeaderTitles.default
            }
        </h2>
    </section>
);