import React from 'react';

export default ({
    progress = 0,
    message = 'Uploading...'
}) => (<div className="easyProgress">
    <div data-progress={progress} className="easyProgress__progressindicator" />
    <p>
        }
        message
    </p>
</div>);