import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default ({
    message
}) => (<div className="easySpinner">
    <FontAwesomeIcon icon={ faSpinner } spin size="lg" />
    <p>
        {
            message || 'Loading...'
        }
    </p>
</div>);
